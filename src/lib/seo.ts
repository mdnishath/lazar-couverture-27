import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { Photo } from "@/content/photos";

/**
 * Metadonnees d'une page, en un seul endroit.
 *
 * Sans image Open Graph, un lien partage par un client sur Facebook ou dans un
 * groupe WhatsApp de commune s'affiche en petite vignette grise. Chaque page a
 * une photo de chantier : autant la donner. On repasse ensuite par `og.jpg`
 * uniquement pour les pages qui n'illustrent aucun chantier.
 */
export type MetaOptions = {
  title: string;
  description: string;
  /** Chemin canonique, avec le slash initial. `/` pour l'accueil. */
  path: string;
  /** Photo de la page. `og.jpg` sert de repli. */
  image?: Photo;
  /** `article` pour les guides seulement : ailleurs c'est une page de site. */
  type?: "website" | "article";
  /** Date de publication ISO, pour les guides. */
  publishedTime?: string;
  /** Pages de service : laisser Google les indexer, mais pas les archiver. */
  noindex?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  noindex = false,
}: MetaOptions): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const img = image
    ? { url: image.src, width: image.width, height: image.height, alt: image.alt }
    : {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.tagline}`,
      };

  return {
    // `absolute` : les titres portent deja la marque quand elle sert. Le
    // gabarit du layout ajouterait un second « | Lazar Couverture 27 ».
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "fr_FR",
      siteName: site.name,
      title,
      description,
      url,
      images: [img],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
