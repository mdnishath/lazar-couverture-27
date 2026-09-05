import Link from "next/link";
import type { Metadata } from "next";

import { photoHero } from "@/content/images";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

import { villes } from "@/content/villes";
import { BreadcrumbSchema, ListeSchema } from "@/components/schema/LocalBusiness";
import { Section, Eyebrow, Lead, CtaPair, Breadcrumb, SectionTitle, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Couvreur dans l'Eure : Les Andelys, Vernon, Gisors",
  description: "Couvreur aux Andelys, à Vernon, Gaillon, Gisors, Étrépagny, Louviers et dans tout l'Eure. Déplacement et devis gratuits.",
  path: "/zone-intervention",
  image: photoHero,
});

export default function ZonePage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Zone d'intervention", href: "/zone-intervention" },
  ];

  const vagues = [
    { n: 1 as const, titre: "Secteur principal", note: "Interventions quotidiennes, y compris pour de petites réparations." },
    { n: 2 as const, titre: "Secteur régulier", note: "Interventions courantes, à moins de trente minutes du siège." },
    { n: 3 as const, titre: "Secteur élargi", note: "Interventions sur devis, principalement pour des chantiers de rénovation." },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <ListeSchema
        nom="Zone d'intervention"
        description="Les communes de l'Eure ou Lazar Couverture 27 intervient."
        url={`${site.url}/zone-intervention`}
        elements={villes.map((v) => ({ name: `Couvreur ${v.nomAvec}`, href: `/couvreur/${v.slug}` }))}
      />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Eure (27) et alentours</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          Où nous intervenons
        </h1>
        <Lead>
          Basés aux Andelys, nous couvrons la vallée de la Seine, la vallée de l&apos;Andelle et le Vexin
          normand. Le déplacement et le devis sont gratuits dans toute cette zone.
        </Lead>
        <CtaPair className="mt-8" />

        {/* C'est ici qu'un visiteur cherche une commande précise : on l'envoie
            vers la matrice service x commune plutot que de le laisser deviner. */}
        <div className="mt-12 border border-ink-700 bg-ink-900 p-7 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase">
                Vous cherchez une prestation précise&nbsp;?
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-300">
                Démoussage, fuite, zinguerie&hellip; nous avons détaillé ce qui change commune par commune :
                type de bâti, contraintes d&apos;accès, désordres les plus fréquents.
              </p>
            </div>
            <Link
              href="/interventions"
              className="inline-flex shrink-0 items-center gap-2 border-2 border-brand-300 px-6 py-3 font-display text-lg font-bold uppercase text-brand-300 transition-colors hover:bg-brand-300 hover:text-ink-950"
            >
              Voir le détail <ArrowIcon />
            </Link>
          </div>
        </div>
      </Section>

      {vagues.map((vague) => {
        const items = villes.filter((v) => v.wave === vague.n);
        if (!items.length) return null;
        return (
          <Section key={vague.n} className="border-t border-ink-800">
            <SectionTitle className="!mt-0 !text-3xl sm:!text-4xl">{vague.titre}</SectionTitle>
            <p className="mt-3 text-ink-400">{vague.note}</p>
            <div className="mt-8 grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((v) => (
                <Link
                  key={v.slug}
                  href={`/couvreur/${v.slug}`}
                  className="group bg-ink-950 p-6 transition-colors hover:bg-ink-900"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold uppercase transition-colors group-hover:text-brand-300">
                      {v.nom}
                    </h3>
                    <span className="font-mono text-xs text-ink-400">{v.cp}</span>
                  </div>
                  <p className="mt-2 font-mono text-xs text-ink-400">
                    {v.distanceKm === 0 ? "Siège de l'entreprise" : `À ${v.distanceKm} km des Andelys`}
                  </p>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-ink-400">{v.intro}</p>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle className="!mt-0">Votre commune n&apos;est pas listée ?</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Appelez-nous. Si nous ne pouvons pas intervenir, nous vous le dirons tout de suite.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
