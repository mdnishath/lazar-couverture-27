import type { Metadata } from "next";

import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

import { services } from "@/content/services";
import { getPhotoSet, galerie, photoHero } from "@/content/images";
import { BreadcrumbSchema, GalerieSchema } from "@/components/schema/LocalBusiness";
import { Section, Eyebrow, Lead, Breadcrumb, CtaPair, PhotoBlock, PhotoGrid } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Réalisations : chantiers de couverture dans l'Eure",
  description: "Chantiers de couverture réalisés aux Andelys et dans l'Eure : rénovation, démoussage, zinguerie, charpente, fenêtres de toit.",
  path: "/realisations",
  image: photoHero,
});

export default function RealisationsPage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Réalisations", href: "/realisations" },
  ];
  const vedettes = services.filter((s) => s.priority === 1);

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <GalerieSchema url={`${site.url}/realisations`} photos={galerie} />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Chantiers</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          Nos réalisations
        </h1>
        <Lead>
          Rénovation de toiture, démoussage, zinguerie, fenêtres de toit : un aperçu des travaux que nous
          réalisons aux Andelys, à Vernon, Gaillon et dans les communes voisines.
        </Lead>

        <div className="mt-10 grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {vedettes.map((s) => {
            const set = getPhotoSet(s.photoDir);
            return (
              <article key={s.slug} className="bg-ink-950">
                <PhotoBlock label={set.label} photo={set.files[0]} ratio="aspect-[4/3]" />
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold uppercase">{s.name}</h2>
                  <p className="mt-2 font-mono text-xs text-ink-400">Les Andelys et environs (27)</p>
                </div>
              </article>
            );
          })}
        </div>

        <h2 className="mt-16 font-display text-3xl font-bold uppercase sm:text-4xl">
          En chantier
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-300">
          Couverture, charpente, zinguerie et façade — le détail du travail, pan par pan.
        </p>
        <PhotoGrid photos={galerie} className="mt-8" />

        <CtaPair className="mt-12" />
      </Section>
    </>
  );
}
