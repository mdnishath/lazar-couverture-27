import type { Metadata } from "next";

import { pageMeta } from "@/lib/seo";

import { site } from "@/lib/site";
import { photoPrincipale, photoHero } from "@/content/images";
import { BreadcrumbSchema, ListeSchema } from "@/components/schema/LocalBusiness";
import { Section, Eyebrow, Lead, Breadcrumb, CtaPair, RatingBadge, PhotoBlock } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "À propos — Couvreur aux Andelys | Lazar Couverture 27",
  description: "Lazar Couverture 27, entreprise de couverture installée aux Andelys (27700). Rénovation, réparation, démoussage et zinguerie dans toute l'Eure.",
  path: "/a-propos",
  image: photoHero,
});

export default function AProposPage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <ListeSchema
        nom="A propos de Lazar Couverture 27"
        description="Entreprise de couverture installee aux Andelys (27700), dirigee par Kenzo Lazar."
        url={`${site.url}/a-propos`}
        type="AboutPage"
        elements={[]}
      />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <Eyebrow>L&apos;entreprise</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              Un couvreur des Andelys
            </h1>
            <Lead>
              Lazar Couverture 27 est une entreprise de couverture installée aux Andelys, dans l&apos;Eure.
              Nous intervenons sur le bâti ancien comme sur les constructions récentes, en ardoise comme en
              tuile.
            </Lead>

            <div className="mt-8 space-y-5 leading-relaxed text-ink-300">
              <p>
                Notre travail couvre l&apos;ensemble des travaux de toiture : rénovation et réfection,
                recherche et réparation de fuite, démoussage et traitement hydrofuge, zinguerie, gouttières,
                fenêtres de toit, charpente et isolation.
              </p>
              <p>
                Nous travaillons principalement sur le secteur des Andelys, de Vernon, de Gaillon et du Vexin
                normand — un bâti que nous connaissons bien, avec ses fortes pentes en ardoise, ses lucarnes
                et ses souches de cheminée qui font la difficulté du métier ici.
              </p>
              <p>
                Notre façon de travailler tient en une phrase : nous montons sur le toit avant de chiffrer,
                nous montrons les photos, et nous disons franchement ce qui est urgent et ce qui peut
                attendre.
              </p>
            </div>

            <RatingBadge className="mt-9" />
            <CtaPair className="mt-9" />
          </div>

          <div className="space-y-px bg-ink-800">
            {/* Une photo de chantier plutôt qu'un bloc vide : la photo
                d'équipe la remplacera sans rien changer d'autre. */}
            <PhotoBlock
              label={photoPrincipale("renovation-toiture").titre}
              photo={photoPrincipale("renovation-toiture")}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 34vw, 100vw"
              priority
            />
            <div className="bg-ink-900 p-6">
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Coordonnées
              </h2>
              <address className="mt-4 space-y-2 not-italic text-ink-200">
                <p>{site.name}</p>
                <p>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </p>
                <p>
                  <a href={site.phoneHref} className="font-mono text-brand-300 hover:text-brand-200">
                    {site.phone}
                  </a>
                </p>
                <p className="text-sm text-ink-400">{site.hours.label}</p>
              </address>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
