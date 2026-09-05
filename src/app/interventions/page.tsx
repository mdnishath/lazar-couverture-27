import Link from "next/link";
import type { Metadata } from "next";

import { photoHero } from "@/content/images";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

import { combos } from "@/content/combos";
import { servicesBySlug } from "@/content/services";
import { villesBySlug } from "@/content/villes";
import { BreadcrumbSchema, ListeSchema } from "@/components/schema/LocalBusiness";
import { Section, SectionTitle, Eyebrow, Lead, Breadcrumb, CtaPair, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Couvreur à Vernon, Gisors, Gaillon, Étrépagny, Louviers",
  description: "Démoussage, nettoyage, fuite, rénovation, réparation et zinguerie à Vernon, Gisors, Gaillon, Étrépagny et Louviers. Le détail par commune.",
  path: "/interventions",
  image: photoHero,
});

export default function InterventionsHub() {
  // On reconstruit la matrice depuis les combos : rien à maintenir ici.
  const services = [...new Set(combos.map((c) => c.service))];
  const villes = [...new Set(combos.map((c) => c.ville))];

  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Interventions", href: "/interventions" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <ListeSchema
        nom="Interventions par commune"
        description="Le detail de chaque prestation, commune par commune, dans l'Eure."
        url={`${site.url}/interventions`}
        elements={combos.map((c) => ({
          name: c.h1,
          href: `/interventions/${c.service}-${c.ville}`,
        }))}
      />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Service × commune</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          Nos interventions, commune par commune
        </h1>
        <Lead>
          Le bâti n&apos;est pas le même d&apos;une commune à l&apos;autre, et les désordres non plus. Ces{" "}
          {combos.length} pages détaillent ce qui change réellement sur le terrain : type de toiture,
          contraintes d&apos;accès, désordres les plus fréquents.
        </Lead>
        <CtaPair className="mt-8" />
      </Section>

      {/* Matrice complète — un lien vers chacune des pages. */}
      <Section className="border-t border-ink-800">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <caption className="sr-only">
              Prestations disponibles par commune, avec un lien vers chaque page détaillée
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-ink-700 px-4 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400"
                >
                  Prestation
                </th>
                {villes.map((v) => {
                  const w = villesBySlug.get(v);
                  return (
                    <th
                      key={v}
                      scope="col"
                      className="border-b border-ink-700 px-4 py-4 font-display text-base font-bold uppercase"
                    >
                      <Link href={`/couvreur/${v}`} className="transition-colors hover:text-brand-300">
                        {w?.nom}
                      </Link>
                      <span className="mt-0.5 block font-mono text-[10px] font-normal text-ink-500">
                        {w?.cp}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {services.map((s) => {
                const svc = servicesBySlug.get(s);
                return (
                  <tr key={s}>
                    <th
                      scope="row"
                      className="border-b border-ink-800 px-4 py-4 align-middle font-display text-base font-bold uppercase"
                    >
                      <Link href={`/services/${s}`} className="transition-colors hover:text-brand-300">
                        {svc?.name}
                      </Link>
                    </th>
                    {villes.map((v) => (
                      <td key={v} className="border-b border-ink-800 px-2 py-2">
                        <Link
                          href={`/interventions/${s}-${v}`}
                          className="flex items-center justify-between gap-2 px-2 py-2.5 font-mono text-[11px] uppercase tracking-wider text-brand-400 transition-colors hover:bg-ink-900 hover:text-brand-300"
                        >
                          Voir <ArrowIcon className="h-3 w-3" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-ink-400">
          Les Andelys ne figure pas dans ce tableau : nos pages{" "}
          <Link href="/services" className="text-brand-400 hover:text-brand-300">
            prestations
          </Link>{" "}
          traitent déjà chaque service pour Les Andelys. Pour les {villes.length} communes ci-dessus, la page
          dédiée apporte ce que la page générale ne peut pas dire.
        </p>
      </Section>

      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle className="!mt-0">Votre commune n&apos;est pas listée ?</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Nous intervenons bien au-delà de ces cinq communes. Appelez-nous : le déplacement et le devis
            sont gratuits dans toute notre zone.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
