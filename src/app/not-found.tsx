import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { services } from "@/content/services";
import { Section, Eyebrow, Lead, PhoneIcon, FileIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Page introuvable (404) | Lazar Couverture 27" },
  robots: { index: false, follow: true },
};

/**
 * 404 maison. Sans elle, Next sert sa page par defaut : en anglais, sans
 * en-tete ni pied de page. Un visiteur qui suit un vieux lien de l'ancien site
 * doit retrouver le telephone et les prestations, pas une impasse.
 */
export default function NotFound() {
  return (
    <Section className="pt-10">
      <Eyebrow>Erreur 404</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
        Cette page n&apos;existe pas
      </h1>
      <Lead>
        Le lien que vous avez suivi est peut-être ancien, ou l&apos;adresse comporte une faute de frappe. Le
        plus rapide reste de nous appeler : nous répondons pendant les heures de chantier.
      </Lead>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 bg-brand-500 px-6 py-4 font-display text-xl font-bold uppercase text-white transition-colors hover:bg-brand-400"
        >
          <PhoneIcon className="h-5 w-5" />
          {site.phone}
        </a>
        <Link
          href="/devis-gratuit"
          className="inline-flex items-center gap-2 border-2 border-brand-300 px-6 py-4 font-display text-xl font-bold uppercase text-brand-300 transition-colors hover:bg-brand-300 hover:text-ink-950"
        >
          <FileIcon className="h-5 w-5" />
          Demander un devis
        </Link>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
            Nos prestations
          </h2>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-ink-200 transition-colors hover:text-brand-300"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-brand-400 hover:text-brand-300">
                Tous nos services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
            Ailleurs sur le site
          </h2>
          <ul className="mt-4 space-y-2">
            {[
              { href: "/", label: "Accueil" },
              { href: "/realisations", label: "Nos réalisations" },
              { href: "/guides", label: "Guides toiture" },
              { href: "/zone-intervention", label: "Zone d'intervention" },
              { href: "/avis", label: "Avis clients" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-200 transition-colors hover:text-brand-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
