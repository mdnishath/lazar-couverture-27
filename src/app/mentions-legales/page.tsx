import type { Metadata } from "next";

import { site } from "@/lib/site";
import { Section, Eyebrow, Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Lazar Couverture 27, couvreur aux Andelys (27700).",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

/**
 * Identité de l'entreprise. Les valeurs viennent du registre national des
 * entreprises (INSEE / annuaire-entreprises.data.gouv.fr, SIREN 920 293 412,
 * consulté le 5 septembre 2026) : c'est la source qui fait foi, pas une saisie
 * approximative.
 *
 * Volontairement absents, parce qu'ils ne se déduisent d'aucun registre public
 * et qu'un chiffre inventé vaut moins que rien sur une page légale :
 *   — le numéro de TVA (l'entreprise n'est pas immatriculée à la TVA
 *     intracommunautaire : vérification VIES du 5 septembre 2026) ;
 *   — l'assurance décennale (assureur et couverture géographique).
 * Les ajouter ici dès que l'entreprise les communique.
 */
const editeur = {
  denomination: "Kenzo Lazar",
  enseigne: "Lazar Couverture",
  forme: "Entrepreneur individuel",
  adresse: "29 rue Guynemer, 27700 Les Andelys",
  siren: "920 293 412",
  siret: "920 293 412 00044",
  ape: "43.91B — Travaux de couverture par éléments",
  directeur: "Kenzo Lazar",
};

export default function MentionsPage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Mentions légales", href: "/mentions-legales" },
  ];

  return (
    <>
      <Breadcrumb trail={trail} />
      <Section className="pt-8">
        <Eyebrow>Informations légales</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">Mentions légales</h1>

        <div className="mt-10 max-w-3xl space-y-10 leading-relaxed text-ink-300">
          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-ink-50">Éditeur du site</h2>
            <dl className="mt-4 grid gap-px bg-ink-800 sm:grid-cols-2">
              <Ligne t="Dénomination">{editeur.denomination}</Ligne>
              <Ligne t="Nom commercial">{editeur.enseigne}</Ligne>
              <Ligne t="Forme juridique">{editeur.forme}</Ligne>
              <Ligne t="Siège social">{editeur.adresse}</Ligne>
              <Ligne t="SIREN">{editeur.siren}</Ligne>
              <Ligne t="SIRET (siège)">{editeur.siret}</Ligne>
              <Ligne t="Code APE">{editeur.ape}</Ligne>
              <Ligne t="Directeur de la publication">{editeur.directeur}</Ligne>
              <Ligne t="Téléphone">
                <a href={site.phoneHref} className="hover:text-brand-300">
                  {site.phone}
                </a>
              </Ligne>
              <Ligne t="E-mail">
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand-300">
                  {site.email}
                </a>
              </Ligne>
            </dl>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-ink-50">Hébergement</h2>
            <p className="mt-3">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              Site de l&apos;hébergeur :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener nofollow"
                className="text-brand-300 underline underline-offset-2 hover:text-brand-200"
              >
                vercel.com
              </a>
              .
            </p>
          </section>

          <section id="licence-images">
            <h2 className="font-display text-2xl font-bold uppercase text-ink-50">Propriété intellectuelle</h2>
            <p className="mt-3">
              Les textes et les photographies de chantier publiés sur ce site appartiennent à {site.name}.
              Toute reproduction, même partielle, est soumise à autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-ink-50">Données personnelles</h2>
            <p className="mt-3">
              Les informations transmises par les formulaires de devis et de contact servent uniquement à
              traiter votre demande et à vous rappeler. Elles ne sont ni revendues ni utilisées à d&apos;autres
              fins, et sont conservées trois ans après le dernier échange.
            </p>
            <p className="mt-3">
              Conformément au règlement général sur la protection des données, vous disposez d&apos;un droit
              d&apos;accès, de rectification et de suppression de vos données. Pour l&apos;exercer, écrivez à{" "}
              <a href={`mailto:${site.email}`} className="break-all text-brand-300 hover:text-brand-200">
                {site.email}
              </a>
              . Vous pouvez également introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener nofollow"
                className="text-brand-300 underline underline-offset-2 hover:text-brand-200"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-ink-50">Cookies</h2>
            <p className="mt-3">
              Ce site ne dépose aucun cookie publicitaire, aucun traceur tiers et aucun outil de mesure
              d&apos;audience. Aucun bandeau de consentement n&apos;est donc nécessaire.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}

function Ligne({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div className="bg-ink-950 p-5">
      <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">{t}</dt>
      <dd className="mt-1.5 text-ink-100">{children}</dd>
    </div>
  );
}
