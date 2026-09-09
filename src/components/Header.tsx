"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { groupesResolus } from "@/content/services";
import { PhoneIcon } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false); // menu mobile
  const [mega, setMega] = useState(false); // méga-menu services (bureau)
  const [sousMenu, setSousMenu] = useState(false); // services dépliés sur mobile
  const zone = useRef<HTMLDivElement>(null); // le déclencheur
  const panneau = useRef<HTMLDivElement>(null); // le panneau déroulant
  const fermeture = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Échap ferme le méga-menu, et le focus revient au déclencheur.
  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMega(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mega]);

  // Un clic en dehors referme.
  useEffect(() => {
    if (!mega) return;
    const onClick = (e: MouseEvent) => {
      const cible = e.target as Node;
      const dansDeclencheur = zone.current?.contains(cible);
      const dansPanneau = panneau.current?.contains(cible);
      if (!dansDeclencheur && !dansPanneau) setMega(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mega]);

  useEffect(() => () => {
    if (fermeture.current) clearTimeout(fermeture.current);
  }, []);

  // Petit délai à la sortie : sinon le menu se ferme dès qu'on traverse
  // l'espace entre le lien et le panneau.
  const survolEntre = () => {
    if (fermeture.current) clearTimeout(fermeture.current);
    setMega(true);
  };
  const survolSort = () => {
    if (fermeture.current) clearTimeout(fermeture.current);
    fermeture.current = setTimeout(() => setMega(false), 140);
  };

  const fermerTout = () => {
    setMega(false);
    setOpen(false);
    setSousMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3 lg:px-10">
        <Link href="/" className="flex items-center" onClick={fermerTout} aria-label="Lazar Couverture 27, accueil">
          <Logo height={44} priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {NAV.map((n) =>
            n.href === "/services" ? (
              <div
                key={n.href}
                ref={zone}
                className="relative"
                onMouseEnter={survolEntre}
                onMouseLeave={survolSort}
              >
                <Link
                  href="/services"
                  aria-expanded={mega}
                  aria-haspopup="true"
                  onFocus={survolEntre}
                  onClick={() => setMega(false)}
                  className="flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-brand-300"
                >
                  {n.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${mega ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink-300 transition-colors hover:text-brand-300"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <a
          href={site.phoneHref}
          className="ml-auto hidden items-center gap-2 bg-brand-500 px-4 py-2.5 font-mono text-sm font-semibold text-white transition-colors hover:bg-brand-600 lg:ml-0 lg:inline-flex"
        >
          <PhoneIcon className="h-4 w-4" />
          {site.phone}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="ml-auto p-2 text-ink-100 lg:hidden"
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* ---------- MÉGA-MENU (bureau) ---------- */}
      {mega && (
        <div
          ref={panneau}
          className="absolute inset-x-0 top-full hidden border-b border-t border-ink-800 bg-ink-950 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] lg:block"
          onMouseEnter={survolEntre}
          onMouseLeave={survolSort}
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-x-8 gap-y-9 px-10 py-10 xl:grid-cols-6">
            {groupesResolus.map((g) => (
              <div key={g.titre}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  {g.titre}
                </p>
                <ul className="mt-3.5 space-y-1">
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={fermerTout}
                        className="block py-1.5 text-[15px] leading-snug text-ink-300 transition-colors hover:text-brand-300"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-ink-800 bg-ink-900">
            <div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-8 gap-y-2 px-10 py-3.5">
              <Link
                href="/services"
                onClick={fermerTout}
                className="font-mono text-xs uppercase tracking-wider text-ink-300 transition-colors hover:text-brand-300"
              >
                Toutes les prestations
              </Link>
              <Link
                href="/interventions"
                onClick={fermerTout}
                className="font-mono text-xs uppercase tracking-wider text-ink-300 transition-colors hover:text-brand-300"
              >
                Nos interventions commune par commune
              </Link>
              <Link
                href="/guides"
                onClick={fermerTout}
                className="font-mono text-xs uppercase tracking-wider text-ink-300 transition-colors hover:text-brand-300"
              >
                Guides toiture
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ---------- MENU MOBILE ---------- */}
      {open && (
        <nav id="menu-mobile" className="border-t border-ink-800 lg:hidden" aria-label="Navigation mobile">
          <ul className="mx-auto max-w-[1440px] px-5 py-2">
            {NAV.map((n) =>
              n.href === "/services" ? (
                <li key={n.href} className="border-b border-ink-800">
                  <div className="flex items-center">
                    <Link
                      href="/services"
                      onClick={fermerTout}
                      className="flex-1 py-3 font-display text-lg font-semibold uppercase text-ink-100"
                    >
                      {n.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSousMenu((v) => !v)}
                      aria-expanded={sousMenu}
                      aria-controls="sous-menu-services"
                      className="p-3 text-ink-300"
                    >
                      <span className="sr-only">
                        {sousMenu ? "Replier les services" : "Déplier les services"}
                      </span>
                      <svg
                        className={`h-5 w-5 transition-transform ${sousMenu ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  {sousMenu && (
                    <div id="sous-menu-services" className="pb-4 pl-3">
                      <Link
                        href="/interventions"
                        onClick={fermerTout}
                        className="mt-3 block font-mono text-[11px] uppercase tracking-wider text-brand-400"
                      >
                        Interventions commune par commune
                      </Link>
                      {groupesResolus.map((g) => (
                        <div key={g.titre} className="mt-4 first:mt-1">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                            {g.titre}
                          </p>
                          <ul className="mt-2 space-y-0.5">
                            {g.items.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={fermerTout}
                                  className="block py-1.5 text-[15px] text-ink-300"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={fermerTout}
                    className="block border-b border-ink-800 py-3 font-display text-lg font-semibold uppercase text-ink-100"
                  >
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
