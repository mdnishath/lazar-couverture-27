import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

import { guides } from "@/content/guides";
import { servicesBySlug } from "@/content/services";
import { BreadcrumbSchema, ListeSchema } from "@/components/schema/LocalBusiness";
import { Section, SectionTitle, Eyebrow, Lead, Breadcrumb, CtaPair, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Guides toiture : prix, aides, matériaux, entretien",
  description: "Comprendre avant de faire faire : prix au m², aides, ardoise ou tuile, durée de vie, assurance. Guides écrits par un couvreur de l'Eure.",
  path: "/guides",
});

export default function GuidesHub() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Guides", href: "/guides" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <ListeSchema
        nom="Guides toiture"
        description="Prix, aides, materiaux, entretien : ce qu'il faut savoir avant de faire refaire sa toiture."
        url={`${site.url}/guides`}
        elements={guides.map((g) => ({ name: g.titreCourt, href: `/guides/${g.slug}` }))}
      />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Comprendre avant de faire faire</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          {guides.length} guides sur la toiture
        </h1>
        <Lead>
          Ce que nous expliquons tous les jours sur les chantiers, écrit une bonne fois. Aucun de ces guides
          ne cherche à vous vendre quoi que ce soit : ils servent à ce que vous puissiez lire un devis, le
          nôtre comme celui d&apos;un confrère.
        </Lead>
        <CtaPair className="mt-8" />
      </Section>

      <Section className="border-t border-ink-800">
        <div className="grid border-l border-t border-ink-800 sm:grid-cols-2">
          {guides.map((g, i) => (
            <article key={g.slug} className="border-b border-r border-ink-800 bg-ink-950 p-7">
              <span className="font-mono text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight">
                <Link href={`/guides/${g.slug}`} className="transition-colors hover:text-brand-300">
                  {g.titreCourt}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-ink-400">{g.lead}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {g.services.slice(0, 3).map((s) => (
                  <li
                    key={s}
                    className="border border-ink-700 px-3 py-1.5 font-mono text-[11px] text-ink-400"
                  >
                    {servicesBySlug.get(s)?.name}
                  </li>
                ))}
              </ul>

              <Link
                href={`/guides/${g.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand-300"
              >
                Lire le guide <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle className="!mt-0">Votre cas ne rentre dans aucune case ?</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            C&apos;est le plus fréquent. Appelez-nous : nous montons voir, et vous saurez à quoi vous en
            tenir. Le diagnostic est gratuit.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
