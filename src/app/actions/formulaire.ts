"use server";

import { site } from "@/lib/site";

export type EtatFormulaire =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string }
  /**
   * Le plan gratuit de Web3Forms refuse les requetes serveur (403 « use our API
   * in client side »). La validation reste ici, mais l'envoi est delegue au
   * navigateur, qui recoit le message deja mis en forme.
   */
  | { status: "client"; sujet: string; corps: string; repondreA: string; copies: string[] };

export type TypeFormulaire = "devis" | "contact";

function propre(v: FormDataEntryValue | null, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/** Un numéro français saisi librement : on ne compte que les chiffres. */
function telephoneValide(tel: string): boolean {
  const n = tel.replace(/\D/g, "").length;
  return n >= 9 && n <= 15;
}

function emailValide(mail: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(mail);
}

/**
 * Traite les deux formulaires du site : la demande de devis et le contact
 * général. Un seul chemin d'envoi, donc un seul endroit où corriger le jour où
 * la boîte mail change.
 */
export async function envoyerFormulaire(
  _prev: EtatFormulaire,
  formData: FormData,
): Promise<EtatFormulaire> {
  // Piège à robots : rempli = spam. On répond OK sans rien envoyer, pour que le
  // robot ne comprenne pas qu'il a été filtré.
  if (propre(formData.get("societe"))) return { status: "ok" };

  const type: TypeFormulaire = propre(formData.get("type")) === "contact" ? "contact" : "devis";

  const nom = propre(formData.get("nom"), 120);
  const telephone = propre(formData.get("telephone"), 40);
  const email = propre(formData.get("email"), 160);
  const commune = propre(formData.get("commune"), 120);
  const travaux = propre(formData.get("travaux"), 160);
  const sujet = propre(formData.get("sujet"), 160);
  const message = propre(formData.get("message"), 3000);

  // --- validation, différente selon le formulaire ---
  if (!nom) return { status: "error", message: "Merci d'indiquer votre nom." };

  if (type === "devis") {
    if (!telephone || !commune || !travaux) {
      return {
        status: "error",
        message: "Merci de renseigner votre téléphone, votre commune et la nature des travaux.",
      };
    }
    if (!telephoneValide(telephone)) {
      return { status: "error", message: "Le numéro de téléphone ne semble pas valide." };
    }
  } else {
    if (!email || !message) {
      return { status: "error", message: "Merci d'indiquer votre e-mail et votre message." };
    }
    if (!emailValide(email)) {
      return { status: "error", message: "L'adresse e-mail ne semble pas valide." };
    }
    if (telephone && !telephoneValide(telephone)) {
      return { status: "error", message: "Le numéro de téléphone ne semble pas valide." };
    }
  }

  const lignes =
    type === "devis"
      ? [
          `Nouvelle demande de devis — ${site.name}`,
          "",
          `Nom       : ${nom}`,
          `Téléphone : ${telephone}`,
          `E-mail    : ${email || "(non renseigné)"}`,
          `Commune   : ${commune}`,
          `Travaux   : ${travaux}`,
        ]
      : [
          `Nouveau message depuis le site — ${site.name}`,
          "",
          `Nom       : ${nom}`,
          `E-mail    : ${email}`,
          `Téléphone : ${telephone || "(non renseigné)"}`,
          `Sujet     : ${sujet || "(non précisé)"}`,
        ];

  const corps = [...lignes, "", "Message :", message || "(aucun)"].join("\n");

  const objet =
    type === "devis"
      ? `Devis ${travaux} — ${commune} — ${nom}`
      : `Contact — ${sujet || "message du site"} — ${nom}`;

  // L'adresse de réponse est celle du visiteur quand on l'a : répondre depuis
  // la boîte mail devient direct, sans copier-coller.
  const repondreA = email || process.env.DEVIS_EMAIL || site.email;

  /**
   * Destinataires : `DEVIS_EMAIL` accepte plusieurs adresses separees par une
   * virgule. Utile pour mettre une adresse de controle en copie et verifier que
   * les demandes partent bien, sans toucher au code.
   */
  const destinataires = (process.env.DEVIS_EMAIL ?? site.email)
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);
  const cleResend = process.env.RESEND_API_KEY;
  const cleWeb3 = process.env.WEB3FORMS_ACCESS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  /**
   * Un visiteur ne doit jamais lire qu'un réglage manque : de son point de vue
   * la demande n'est pas passée, point. On lui donne le numéro, et on écrit la
   * demande complète dans les journaux du serveur pour qu'elle ne soit pas
   * perdue.
   */
  const echec = (raison: string): EtatFormulaire => {
    console.error("[formulaire] " + raison + "\n" + corps);
    return {
      status: "error",
      message: `Nous n'avons pas pu enregistrer votre demande. Appelez-nous au ${site.phone}, nous la prenons immédiatement.`,
    };
  };

  if (!cleResend && !cleWeb3) {
    return echec("aucun transport configuré (RESEND_API_KEY ou WEB3FORMS_ACCESS_KEY)");
  }

  // Resend en premier : envoi depuis notre propre domaine, donc meilleure
  // délivrabilité — mais il exige que le domaine soit vérifié par DNS.
  if (cleResend) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${cleResend}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Site Lazar Couverture 27 <contact@lazarcouverture27.com>",
          to: destinataires,
          reply_to: repondreA,
          subject: objet,
          text: corps,
        }),
      });
      if (res.ok) return { status: "ok" };
      console.error("[formulaire] Resend a répondu " + res.status);
    } catch (err) {
      console.error("[formulaire] Resend injoignable", err);
    }
    if (!cleWeb3) return echec("Resend a échoué et aucun second transport n'est configuré");
  }

  // Repli : l'envoi part du navigateur (contrainte du plan gratuit Web3Forms).
  if (cleWeb3) {
    return {
      status: "client",
      sujet: objet,
      corps,
      repondreA,
      copies: destinataires.slice(1),  // informatif : la copie exige Web3Forms Pro
    };
  }

  return echec("aucun transport disponible");
}
