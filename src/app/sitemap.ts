import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services, serviceSlugs, servicesBySlug } from "@/content/services";
import { villes, villeSlugs } from "@/content/villes";
import { combos } from "@/content/combos";
import { guides } from "@/content/guides";
import { photoPrincipale, photoVille, galerie, photoHero } from "@/content/images";

/**
 * Date de derniere revision editoriale du site.
 *
 * Volontairement une constante, et non `new Date()` : avec la date de build,
 * chaque deploiement annoncait 82 pages « modifiees », y compris celles dont
 * pas une ligne n'avait bouge. Google finit par ignorer un `lastmod` qui ment.
 * A remonter quand le contenu change vraiment.
 */
const REVISION = new Date("2026-09-05");

const abs = (chemin: string) => `${site.url}${chemin}`;

/**
 * Les URL d'images doivent etre absolues dans un sitemap, et uniques : deux
 * prestations peuvent partager le meme dossier photo, ce qui produisait la
 * meme image deux fois sous la meme URL.
 */
const img = (...chemins: string[]) => [...new Set(chemins)].map(abs);

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * `/mentions-legales` en est volontairement absente : la page est en
   * `noindex`. L'annoncer dans le sitemap enverrait deux ordres contraires.
   */
  const statiques: { p: string; pr: number; images: string[] }[] = [
    { p: "", pr: 1.0, images: img("/og.jpg", photoHero.src) },
    { p: "/services", pr: 0.9, images: img(...services.slice(0, 6).map((s) => photoPrincipale(s.photoDir).src)) },
    { p: "/zone-intervention", pr: 0.8, images: img(photoHero.src) },
    { p: "/devis-gratuit", pr: 0.9, images: img("/og.jpg") },
    { p: "/interventions", pr: 0.7, images: img(photoHero.src) },
    { p: "/realisations", pr: 0.7, images: img(...galerie.map((g) => g.src)) },
    { p: "/guides", pr: 0.7, images: img("/og.jpg") },
    { p: "/avis", pr: 0.7, images: img("/og.jpg") },
    { p: "/a-propos", pr: 0.5, images: img(photoHero.src) },
    { p: "/contact", pr: 0.7, images: img("/og.jpg") },
  ];

  return [
    ...statiques.map(({ p, pr, images }) => ({
      url: abs(p),
      lastModified: REVISION,
      changeFrequency: "monthly" as const,
      priority: pr,
      images,
    })),

    ...serviceSlugs.map((slug) => {
      const s = servicesBySlug.get(slug);
      return {
        url: abs(`/services/${slug}`),
        lastModified: REVISION,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        images: s ? img(photoPrincipale(s.photoDir).src) : [],
      };
    }),

    ...villeSlugs.map((slug) => ({
      url: abs(`/couvreur/${slug}`),
      lastModified: REVISION,
      changeFrequency: "monthly" as const,
      // La commune d'implantation pese plus que les communes limitrophes.
      priority: villes.find((v) => v.slug === slug)?.distanceKm === 0 ? 0.9 : 0.7,
      images: img(photoVille(slug).src),
    })),

    ...combos.map((c) => {
      const s = servicesBySlug.get(c.service);
      return {
        url: abs(`/interventions/${c.service}-${c.ville}`),
        lastModified: REVISION,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        images: s ? img(photoPrincipale(s.photoDir).src) : [],
      };
    }),

    ...guides.map((g) => {
      const s = servicesBySlug.get(g.services[0] ?? "");
      return {
        url: abs(`/guides/${g.slug}`),
        // Ici la date est reelle : c'est celle de publication du guide.
        lastModified: new Date(g.datePublished),
        changeFrequency: "yearly" as const,
        priority: 0.6,
        images: s ? img(photoPrincipale(s.photoDir).src) : [],
      };
    }),
  ];
}
