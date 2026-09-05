import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/schema/LocalBusiness";
import { Section, Eyebrow, Lead, Breadcrumb, PhoneIcon, FileIcon, RatingBadge, CheckIcon } from "@/components/ui";
import { Formulaire } from "@/components/Formulaire";

export const metadata: Metadata = {
  title: { absolute: "Contact — Couvreur aux Andelys (27700) | Lazar Couverture 27" },
  description:
    "Contactez Lazar Couverture 27, couvreur aux Andelys et dans l'Eure : téléphone, e-mail, formulaire. Réponse sous 24 heures ouvrées.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const trail = [
    { name: "Accueil", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <BreadcrumbSchema trail={trail} />
      <Breadcrumb trail={trail} />

      <Section className="pt-8">
        <Eyebrow>Nous joindre</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          Contact
        </h1>
        <Lead>
          Le plus simple reste le téléphone : nous répondons pendant les heures de chantier et rappelons dans
          la journée si nous sommes sur un toit. Pour une question écrite, le formulaire ci-dessous arrive
          directement dans notre boîte mail.
        </Lead>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ---------- Coordonnées ---------- */}
          <div>
            <div className="border border-ink-700 bg-ink-900 p-7">
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Par téléphone
              </h2>
              <a
                href={site.phoneHref}
                className="mt-3 inline-flex items-center gap-3 font-mono text-2xl font-semibold text-brand-300 transition-colors hover:text-brand-200"
              >
                <PhoneIcon className="h-6 w-6" />
                {site.phone}
              </a>
              <p className="mt-3 text-sm text-ink-400">{site.hours.label}</p>
            </div>

            <dl className="mt-px grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-1">
              <div className="bg-ink-950 p-6">
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  E-mail
                </dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="text-lg text-ink-100 hover:text-brand-300">
                    {site.email}
                  </a>
                </dd>
              </div>

              <div className="bg-ink-950 p-6">
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Adresse
                </dt>
                <dd className="mt-2">
                  <address className="not-italic text-lg leading-relaxed text-ink-100">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </address>
                </dd>
              </div>
            </dl>

            {/* Un devis n'est pas une question : on l'envoie sur le bon formulaire
                plutôt que de mélanger les deux demandes dans la même boîte. */}
            <div className="mt-8 border-l-4 border-brand-500 bg-ink-900 p-6">
              <h2 className="font-display text-xl font-bold uppercase">Vous voulez un devis ?</h2>
              <p className="mt-2 leading-relaxed text-ink-300">
                Passez plutôt par le formulaire de devis : il nous demande la commune et la nature des
                travaux, ce qui nous permet de vous rappeler avec les bonnes questions.
              </p>
              <Link
                href="/devis-gratuit"
                className="mt-4 inline-flex items-center gap-2 border-2 border-brand-300 px-5 py-3 font-display text-lg font-bold uppercase text-brand-300 transition-colors hover:bg-brand-300 hover:text-ink-950"
              >
                <FileIcon className="h-5 w-5" />
                Demander un devis gratuit
              </Link>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Réponse sous 24 heures ouvrées",
                "Déplacement et devis gratuits dans notre zone",
                "Aucune information revendue",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink-300">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
                  {t}
                </li>
              ))}
            </ul>

            <RatingBadge className="mt-8" />
          </div>

          {/* ---------- Formulaire ---------- */}
          <div className="border border-ink-700 bg-ink-900 p-6 sm:p-8">
            <Formulaire variant="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
