import type { Metadata } from "next";

import { site } from "@/lib/site";
import { services } from "@/content/services";
import { villes } from "@/content/villes";
import { BreadcrumbSchema } from "@/components/schema/LocalBusiness";
import { Section, Eyebrow, Lead, Breadcrumb, CheckIcon, PhoneIcon, RatingBadge } from "@/components/ui";
import { Formulaire } from "@/components/Formulaire";

export const metadata: Metadata = {
  title: { absolute: "Devis couvreur gratuit aux Andelys et dans l'Eure" },
  description:
    "Devis couvreur gratuit aux Andelys, à Vernon, Gisors et dans l'Eure : déplacement et diagnostic offerts, réponse sous 24 h ouvrées.",
  alternates: { canonical: "/devis-gratuit" },
};

export default function DevisPage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Devis gratuit", href: "/devis-gratuit" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Sans engagement</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              Demandez votre devis gratuit
            </h1>
            <Lead>
              Quatre champs, pas davantage. Nous vous rappelons sous 24 heures ouvrées pour convenir d&apos;un
              passage.
            </Lead>

            <ul className="mt-8 space-y-3">
              {[
                "Déplacement et diagnostic gratuits",
                "Devis détaillé poste par poste",
                "Aucun engagement de votre part",
                "Réponse sous 24 h ouvrées",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink-300">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-ink-700 bg-ink-900 p-6">
              <p className="font-display text-xl font-bold uppercase">Vous préférez appeler ?</p>
              <a
                href={site.phoneHref}
                className="mt-3 inline-flex items-center gap-2 font-mono text-2xl font-semibold text-brand-300 hover:text-brand-200"
              >
                <PhoneIcon className="h-6 w-6" />
                {site.phone}
              </a>
              <p className="mt-2 font-mono text-xs text-ink-400">{site.hours.label}</p>
            </div>

            <RatingBadge className="mt-8" />
          </div>

          <div className="border border-ink-700 bg-ink-900 p-6 sm:p-8">
            <Formulaire variant="devis" services={services.map((s) => s.name)} villes={villes.map((v) => v.nom)} />
          </div>
        </div>
      </Section>
    </>
  );
}
