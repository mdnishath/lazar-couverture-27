import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { services, groupesResolus } from "@/content/services";
import { BreadcrumbSchema } from "@/components/schema/LocalBusiness";
import { Section, SectionTitle, Eyebrow, Lead, CtaPair, Breadcrumb, ArrowIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Travaux de toiture aux Andelys et dans l'Eure (27)" },
  description:
    "Nos 18 prestations de couverture aux Andelys et dans l'Eure : démoussage, nettoyage, fuite, rénovation, zinguerie, charpente. Devis gratuit.",
  alternates: { canonical: "/services" },
};


export default function ServicesHub() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Nos prestations</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          {services.length} services de couverture
        </h1>
        <Lead>
          De l&apos;entretien courant à la réfection complète, nous couvrons l&apos;ensemble des travaux de
          toiture aux Andelys, à Vernon, Gaillon et dans toute l&apos;Eure.
        </Lead>
        <CtaPair className="mt-8" />
      </Section>

      {groupesResolus.map((g) => {
        const items = g.items;
        if (!items.length) return null;
        return (
          <Section key={g.titre} className="border-t border-ink-800">
            <SectionTitle className="!mt-0 !text-3xl sm:!text-4xl">{g.titre}</SectionTitle>
            {/* Bordures portées par les cartes : un groupe de 4 ou de 1 ne
                laisse plus de cellule vide grise en fin de rangée. */}
            <div className="mt-8 grid border-l border-t border-ink-800 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group border-b border-r border-ink-800 bg-ink-950 p-7 transition-colors hover:bg-ink-900"
                >
                  <h3 className="font-display text-2xl font-bold uppercase transition-colors group-hover:text-brand-300">
                    {s.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-400">{s.lead}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-400">
                    En savoir plus <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <Section className="border-t border-ink-800 bg-ink-900">
        <div className="text-center">
          <SectionTitle className="!mt-0">Vous ne trouvez pas votre besoin ?</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Appelez-nous au {site.phone}. Si nous ne réalisons pas ces travaux, nous vous le dirons.
          </p>
          <CtaPair className="mt-8 justify-center" />
        </div>
      </Section>
    </>
  );
}
