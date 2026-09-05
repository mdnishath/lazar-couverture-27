import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Rendu de texte avec liens inline, écrits en `[libellé](url)`.
 *
 * Le lien vit DANS la phrase, sur le mot-clé de l'affirmation qu'il source.
 * Une liste de sources en fin de page ne sert à rien : un moteur qui reprend
 * une phrase doit trouver la source attachée à cette phrase, pas 800 mots
 * plus bas.
 *
 * Les liens externes s'ouvrent dans un nouvel onglet et portent rel="noopener".
 */
const PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function RichText({ children, className = "" }: { children: string; className?: string }) {
  return <p className={className}>{parseInline(children)}</p>;
}

export function parseInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  PATTERN.lastIndex = 0;

  while ((m = PATTERN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    const external = /^https?:\/\//.test(href);

    out.push(
      external ? (
        <a
          key={`${href}-${m.index}`}
          href={href}
          target="_blank"
          rel="noopener nofollow"
          className="text-brand-300 underline decoration-brand-500/50 underline-offset-2 transition-colors hover:text-brand-200 hover:decoration-brand-300"
        >
          {label}
        </a>
      ) : (
        <Link
          key={`${href}-${m.index}`}
          href={href}
          className="text-brand-300 underline decoration-brand-500/50 underline-offset-2 transition-colors hover:text-brand-200 hover:decoration-brand-300"
        >
          {label}
        </Link>
      ),
    );
    last = m.index + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Version texte brut — pour les métadonnées et le JSON-LD, où le markup n'a rien à faire. */
export function stripInline(text: string): string {
  return text.replace(PATTERN, "$1");
}
