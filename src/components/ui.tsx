import Link from "next/link";

// Les composants photo vivent dans photos.tsx (composant client : la
// visionneuse a besoin d'état). On les ré-exporte pour que les pages
// continuent de tout importer depuis "@/components/ui".
export { PhotoBlock, PhotoGrid } from "./photos";
import { site } from "@/lib/site";


/* ---------------- Boutons ---------------- */

export function CallButton({ className = "", label = "Appeler maintenant" }: { className?: string; label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`inline-flex items-center justify-center gap-2 bg-brand-500 px-6 py-3.5 font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-400 ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

export function QuoteButton({ className = "", label = "Devis gratuit" }: { className?: string; label?: string }) {
  return (
    <Link
      href="/devis-gratuit"
      className={`inline-flex items-center justify-center gap-2 border-2 border-brand-300 px-6 py-3.5 font-display text-lg font-bold uppercase tracking-wide text-brand-300 transition-colors hover:bg-brand-300 hover:text-ink-950 ${className}`}
    >
      <FileIcon />
      {label}
    </Link>
  );
}

export function CtaPair({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <CallButton />
      <QuoteButton />
    </div>
  );
}

/* ---------------- Icônes (inline, aucun paquet) ---------------- */

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function FileIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1Z" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* ---------------- Blocs de mise en page ---------------- */

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300">{children}</p>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-3 font-display text-4xl font-bold uppercase sm:text-5xl ${className}`}>{children}</h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-300">{children}</p>;
}

/* ---------------- Note Google ---------------- */

export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 border border-ink-700 bg-ink-900/80 px-4 py-2 ${className}`}
    >
      <span className="flex text-brand-300" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span className="font-mono text-sm text-ink-100">
        <strong className="text-brand-300">{site.rating.value.replace(".", ",")}</strong> sur{" "}
        {site.rating.count} avis Google
      </span>
    </div>
  );
}

/* ---------------- Fil d'Ariane ---------------- */

export function Breadcrumb({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="px-5 pt-6">
      <ol className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2 font-mono text-xs text-ink-400">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span className="text-ink-300">{t.name}</span>
            ) : (
              <Link href={t.href} className="transition-colors hover:text-brand-300">
                {t.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-8 divide-y divide-ink-700 border-y border-ink-700">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-xl font-semibold uppercase text-ink-50 transition-colors hover:text-brand-300">
            {item.q}
            <span
              className="mt-1 shrink-0 text-brand-400 transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-300">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
