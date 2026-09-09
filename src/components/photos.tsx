"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/content/images";

/* ---------------- Visionneuse ---------------- */

function Visionneuse({
  photos,
  index,
  onFermer,
  onNaviguer,
}: {
  photos: Photo[];
  index: number;
  onFermer: () => void;
  onNaviguer: (i: number) => void;
}) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
      if (e.key === "ArrowRight") onNaviguer((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNaviguer((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    // On bloque le défilement de la page pendant l'ouverture.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [index, photos.length, onFermer, onNaviguer]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onFermer}
    >
      <button
        type="button"
        onClick={onFermer}
        aria-label="Fermer"
        className="absolute right-4 top-4 z-10 p-3 text-ink-200 transition-colors hover:text-brand-300"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Photo précédente"
            onClick={(e) => {
              e.stopPropagation();
              onNaviguer((index - 1 + photos.length) % photos.length);
            }}
            className="absolute left-2 z-10 p-3 text-ink-200 transition-colors hover:text-brand-300 sm:left-6"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Photo suivante"
            onClick={(e) => {
              e.stopPropagation();
              onNaviguer((index + 1) % photos.length);
            }}
            className="absolute right-2 z-10 p-3 text-ink-200 transition-colors hover:text-brand-300 sm:right-6"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <figure
        className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[78vh] w-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="mx-auto max-h-[78vh] w-auto object-contain"
          />
        </div>
        <figcaption className="text-center text-sm leading-relaxed text-ink-300">
          {photo.alt}
          {photos.length > 1 && (
            <span className="ml-3 font-mono text-xs text-ink-500">
              {index + 1} / {photos.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

/* ---------------- Bloc photo ---------------- */

/**
 * Affiche une photo si elle existe, sinon le bloc généré en CSS.
 * Un clic ouvre la visionneuse — sauf si `zoom` vaut false.
 */
export function PhotoBlock({
  label,
  photo,
  className = "",
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  zoom = true,
}: {
  label: string;
  photo?: Photo | null;
  className?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  zoom?: boolean;
}) {
  const [ouvert, setOuvert] = useState(false);

  if (!photo) {
    return (
      <div className={`photo-placeholder flex items-end overflow-hidden ${ratio} ${className}`}>
        <span className="m-4 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">{label}</span>
      </div>
    );
  }

  const contenu = (
    <>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent p-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-200">{label}</span>
      </figcaption>
    </>
  );

  if (!zoom) {
    return (
      <figure className={`relative overflow-hidden bg-ink-800 ${ratio} ${className}`}>{contenu}</figure>
    );
  }

  return (
    <>
      <figure className={`relative overflow-hidden bg-ink-800 ${ratio} ${className}`}>
        <button
          type="button"
          onClick={() => setOuvert(true)}
          aria-label={`Agrandir : ${label} — ${photo.alt}`}
          className="group absolute inset-0 h-full w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          {contenu}
          <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-ink-950/70 text-ink-100 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <LoupeIcon />
          </span>
        </button>
      </figure>
      {ouvert && (
        <Visionneuse photos={[photo]} index={0} onFermer={() => setOuvert(false)} onNaviguer={() => {}} />
      )}
    </>
  );
}

/* ---------------- Grille ---------------- */

/** Grille de photos — page Réalisations et blocs « nos chantiers ». */
export function PhotoGrid({ photos, className = "" }: { photos: Photo[]; className?: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const fermer = useCallback(() => setIndex(null), []);
  const naviguer = useCallback((i: number) => setIndex(i), []);

  if (photos.length === 0) return null;

  return (
    <>
      <div className={`grid gap-px bg-ink-800 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Agrandir : ${p.alt}`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden bg-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-ink-950/70 text-ink-100 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <LoupeIcon />
            </span>
          </button>
        ))}
      </div>

      {index !== null && (
        <Visionneuse photos={photos} index={index} onFermer={fermer} onNaviguer={naviguer} />
      )}
    </>
  );
}

function LoupeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
    </svg>
  );
}
