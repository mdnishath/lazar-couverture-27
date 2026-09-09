import type { Metadata } from "next";

import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { avisPublies } from "@/content/avis";
import { BreadcrumbSchema, ListeSchema } from "@/components/schema/LocalBusiness";
import { Section, Eyebrow, Lead, Breadcrumb, CtaPair, StarIcon, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Avis clients — 5,0 sur 48 avis Google | Lazar Couverture 27",
  description: "Les avis Google de Lazar Couverture 27, couvreur aux Andelys : 5,0 sur 5 pour 48 avis. Aucun témoignage inventé.",
  path: "/avis",
});

export default function AvisPage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Avis", href: "/avis" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <ListeSchema
        nom="Avis clients"
        description="Les avis Google de Lazar Couverture 27, recopies mot pour mot."
        url={`${site.url}/avis`}
        elements={[]}
      />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Avis vérifiés</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          {site.rating.value.replace(".", ",")} sur 5, {site.rating.count} avis
        </h1>
        <Lead>
          Tous nos avis sont publiés sur Google, sous le nom de leurs auteurs et avec leur date. Vous pouvez
          les lire un par un, sans passer par nous.
        </Lead>

        {avisPublies.length > 0 ? (
          <div className="mt-10 grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
            {avisPublies.map((a) => (
              <figure key={a.auteur} className="bg-ink-950 p-7">
                <div role="img" className="flex gap-0.5 text-brand-300" aria-label={a.note + " sur 5"}>
                  {Array.from({ length: a.note }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-ink-200">
                  <p>{a.texte}</p>
                </blockquote>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-bold uppercase">{a.auteur}</span>
                  <span className="font-mono text-xs text-ink-400">{a.dateLabel}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          /* Aucun avis recopié pour l'instant : on renvoie vers la source,
             plutôt que d'afficher un témoignage reformulé. */
          <div className="mt-10 border border-ink-700 bg-ink-900 p-8 sm:p-10">
            <div className="flex items-center gap-3 text-brand-300" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-7 w-7" />
              ))}
            </div>
            <p className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              {site.rating.count} clients ont noté notre travail {site.rating.value.replace(".", ",")} sur 5
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-300">
              Nous préférons vous envoyer à la source plutôt que de choisir nous-mêmes les extraits qui nous
              arrangent. Les avis sont sur notre fiche Google, avec le nom de chaque client et la date.
            </p>
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-brand-500 px-6 py-3.5 font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-400"
            >
              Lire les {site.rating.count} avis sur Google <ArrowIcon />
            </a>
          </div>
        )}

        <CtaPair className="mt-12" />
      </Section>
    </>
  );
}
