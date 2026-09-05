"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { envoyerFormulaire, type EtatFormulaire, type TypeFormulaire } from "@/app/actions/formulaire";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "./ui";

const initial: EtatFormulaire = { status: "idle" };

/**
 * Les deux formulaires du site.
 *
 * `devis`   — on veut un rappel : téléphone et commune obligatoires, e-mail inutile.
 * `contact` — on veut une réponse écrite : e-mail obligatoire, téléphone facultatif.
 *
 * Chaque champ supplémentaire coûte des demandes : on s'en tient au strict
 * nécessaire pour rappeler la personne.
 */
export function Formulaire({
  variant = "devis",
  services = [],
  villes = [],
  titre,
}: {
  variant?: TypeFormulaire;
  services?: string[];
  villes?: string[];
  titre?: string;
}) {
  const [state, action, pending] = useActionState(envoyerFormulaire, initial);
  // `client` : l'action a validé et nous passe le message à poster nous-mêmes,
  // parce que le plan gratuit de Web3Forms refuse les requêtes serveur.
  // `client` : l'action a validé et nous passe le message à poster nous-mêmes,
  // parce que le plan gratuit de Web3Forms refuse les requêtes serveur.
  const [envoiClient, setEnvoiClient] = useState<"attente" | "ok" | "erreur">("attente");
  // Garde-fou : l'effet peut se rejouer, l'envoi ne doit partir qu'une fois.
  const dejaEnvoye = useRef(false);
  const devis = variant === "devis";

  useEffect(() => {
    if (state.status !== "client" || dejaEnvoye.current) return;
    dejaEnvoye.current = true;

    // Tout passe par la chaine de promesses : aucun setState synchrone dans
    // le corps de l'effet, sinon React declenche un rendu en cascade.
    // Le plan gratuit de Web3Forms n'envoie qu'a l'adresse du compte, et la
    // mise en copie est payante. Pour toucher plusieurs boites, on declare une
    // cle par destinataire (separees par une virgule) et on poste autant de
    // fois. L'envoi est reussi des qu'une cle aboutit.
    Promise.resolve()
      .then(() => {
        const cles = (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "")
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean);
        if (!cles.length) throw new Error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY absente");

        return Promise.all(
          cles.map((cle) =>
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify({
                access_key: cle,
                subject: state.sujet,
                from_name: "Site Lazar Couverture 27",
                replyto: state.repondreA,
                message: state.corps,
              }),
            })
              .then((r) => r.json())
              .then((d) => {
                if (!d?.success) console.error("[formulaire] Web3Forms :", d?.message);
                return Boolean(d?.success);
              })
              .catch((e) => {
                console.error("[formulaire] envoi impossible", e);
                return false;
              }),
          ),
        );
      })
      .then((resultats) => {
        setEnvoiClient(resultats.some(Boolean) ? "ok" : "erreur");
      })
      .catch((e) => {
        console.error("[formulaire] envoi impossible", e);
        setEnvoiClient("erreur");
      });
  }, [state]);

  const enCours = pending || (state.status === "client" && envoiClient === "attente");

  if (state.status === "ok" || envoiClient === "ok") {
    return (
      <div role="status" className="py-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
          <CheckIcon className="h-7 w-7" />
        </span>
        <p className="mt-5 font-display text-3xl font-extrabold uppercase text-brand-300">
          {devis ? "Demande envoyée" : "Message envoyé"}
        </p>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-ink-300">
          {devis
            ? "Merci. Nous vous rappelons sous 24 heures ouvrées pour convenir d'un passage."
            : "Merci. Nous vous répondons sous 24 heures ouvrées."}
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-semibold text-brand-400 hover:text-brand-300"
        >
          <PhoneIcon className="h-4 w-4" />
          Besoin d&apos;une réponse tout de suite ? {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="type" value={variant} />

      <h2 className="font-display text-2xl font-bold uppercase">
        {titre ?? (devis ? "Votre demande de devis" : "Écrivez-nous")}
      </h2>

      {/* Piège à robots — hors flux et hors tabulation, invisible pour un humain */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`societe-${variant}`}>Ne pas remplir</label>
        <input id={`societe-${variant}`} name="societe" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Champ id={`nom-${variant}`} label="Votre nom" requis>
        <input
          id={`nom-${variant}`}
          name="nom"
          type="text"
          required
          autoComplete="name"
          className={champClass}
          placeholder="Prénom et nom"
        />
      </Champ>

      {devis ? (
        <>
          <Champ id="telephone-devis" label="Téléphone" requis>
            <input
              id="telephone-devis"
              name="telephone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className={champClass}
              placeholder="06 12 34 56 78"
            />
          </Champ>

          <Champ id="commune-devis" label="Votre commune" requis>
            <input
              id="commune-devis"
              name="commune"
              type="text"
              required
              list="liste-communes"
              autoComplete="address-level2"
              className={champClass}
              placeholder="Les Andelys"
            />
            <datalist id="liste-communes">
              {villes.map((v) => (
                <option key={v} value={v} />
              ))}
            </datalist>
          </Champ>

          <Champ id="travaux-devis" label="Nature des travaux" requis>
            <select id="travaux-devis" name="travaux" required defaultValue="" className={champClass}>
              <option value="" disabled>
                Sélectionnez…
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              <option value="Autre / je ne sais pas">Autre / je ne sais pas</option>
            </select>
          </Champ>
        </>
      ) : (
        <>
          <Champ id="email-contact" label="Votre e-mail" requis>
            <input
              id="email-contact"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              className={champClass}
              placeholder="prenom.nom@exemple.fr"
            />
          </Champ>

          <Champ id="telephone-contact" label="Téléphone (facultatif)">
            <input
              id="telephone-contact"
              name="telephone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              className={champClass}
              placeholder="06 12 34 56 78"
            />
          </Champ>

          <Champ id="sujet-contact" label="Sujet" requis>
            <select id="sujet-contact" name="sujet" required defaultValue="" className={champClass}>
              <option value="" disabled>
                Sélectionnez…
              </option>
              <option>Question sur un devis en cours</option>
              <option>Question technique sur ma toiture</option>
              <option>Prise de rendez-vous</option>
              <option>Suivi d&apos;un chantier</option>
              <option>Autre</option>
            </select>
          </Champ>
        </>
      )}

      <Champ
        id={`message-${variant}`}
        label={devis ? "Précisions (facultatif)" : "Votre message"}
        requis={!devis}
      >
        <textarea
          id={`message-${variant}`}
          name="message"
          rows={devis ? 4 : 6}
          required={!devis}
          className={champClass}
          placeholder={
            devis
              ? "Décrivez brièvement ce que vous avez constaté."
              : "Décrivez votre demande. Plus c'est précis, plus notre réponse le sera."
          }
        />
      </Champ>

      {(state.status === "error" || envoiClient === "erreur") && (
        <p role="alert" className="border-l-4 border-brand-500 bg-ink-800 px-4 py-3 text-sm text-brand-200">
          {state.status === "error"
            ? state.message
            : `Nous n'avons pas pu enregistrer votre demande. Appelez-nous au ${site.phone}, nous la prenons immédiatement.`}
        </p>
      )}

      <button
        type="submit"
        disabled={enCours}
        className="w-full bg-brand-500 px-6 py-4 font-display text-xl font-bold uppercase text-white transition-colors hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enCours ? "Envoi en cours…" : devis ? "Envoyer ma demande" : "Envoyer le message"}
      </button>

      <p className="font-mono text-[11px] leading-relaxed text-ink-400">
        Vos informations servent uniquement à traiter votre demande. Elles ne sont ni revendues ni utilisées
        à d&apos;autres fins.
      </p>
    </form>
  );
}

const champClass =
  "w-full border border-ink-700 bg-ink-950 px-4 py-3 text-ink-50 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none";

function Champ({
  id,
  label,
  requis,
  children,
}: {
  id: string;
  label: string;
  requis?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-300"
      >
        {label}
        {requis && <span className="ml-1 text-brand-400">*</span>}
      </label>
      {children}
    </div>
  );
}
