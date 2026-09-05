import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { services } from "@/content/services";
import { villes } from "@/content/villes";
import { PhoneIcon, RatingBadge } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo height={48} />
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Couvreur zingueur aux Andelys et dans l&apos;Eure. Rénovation, réparation, démoussage et
              zinguerie.
            </p>
            <RatingBadge className="mt-5" />
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 9).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-300 transition-colors hover:text-brand-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-semibold text-brand-400 hover:text-brand-300">
                  Tous nos services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
              Zone d&apos;intervention
            </h3>
            <ul className="mt-4 space-y-2">
              {villes.slice(0, 9).map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/couvreur/${v.slug}`}
                    className="text-sm text-ink-300 transition-colors hover:text-brand-300"
                  >
                    Couvreur {v.nomAvec.replace(/^(aux|à) /, "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/interventions"
                  className="text-sm text-ink-300 transition-colors hover:text-brand-300"
                >
                  Interventions par commune
                </Link>
              </li>
              <li>
                <Link
                  href="/zone-intervention"
                  className="text-sm font-semibold text-brand-400 hover:text-brand-300"
                >
                  Toute la zone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic text-sm text-ink-300">
              <p>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-mono font-semibold text-brand-300 hover:text-brand-200"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                  {site.email}
                </a>
              </p>
              <p className="text-ink-400">{site.hours.label}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lazar Couverture 27. Tous droits réservés.
            {" — "}
            {/* Lien externe : `rel` sans `nofollow`, c'est une signature de
                réalisation, pas un lien commercial. */}
            <span className="whitespace-nowrap">
              Design by{" "}
              <a
                href="https://mdnishath.com/"
                target="_blank"
                rel="noopener"
                className="text-ink-300 underline decoration-ink-700 underline-offset-2 transition-colors hover:text-brand-300 hover:decoration-brand-400"
              >
                Md Nishath
              </a>
            </span>
          </p>
          <nav className="flex gap-5" aria-label="Liens légaux">
            <Link href="/mentions-legales" className="hover:text-brand-300">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-brand-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
