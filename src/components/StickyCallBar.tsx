import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, FileIcon } from "./ui";

/**
 * Barre d'appel fixe en bas d'écran, mobile uniquement.
 * Le métier se vend au téléphone : le numéro ne doit jamais être
 * à plus d'un pouce du doigt.
 */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-ink-700 bg-ink-900/95 backdrop-blur lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 bg-brand-500 py-4 font-display text-lg font-bold uppercase text-white"
      >
        <PhoneIcon className="h-5 w-5" />
        Appeler
      </a>
      <Link
        href="/devis-gratuit"
        className="flex items-center justify-center gap-2 py-4 font-display text-lg font-bold uppercase text-brand-300"
      >
        <FileIcon className="h-5 w-5" />
        Devis
      </Link>
    </div>
  );
}
