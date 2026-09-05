import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceSlugs } from "@/content/services";
import { villeSlugs } from "@/content/villes";
import { comboSlugs } from "@/content/combos";
import { guideSlugs } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statiques = [
    { p: "", pr: 1.0 },
    { p: "/services", pr: 0.9 },
    { p: "/guides", pr: 0.7 },
    { p: "/interventions", pr: 0.7 },
    { p: "/zone-intervention", pr: 0.8 },
    { p: "/devis-gratuit", pr: 0.9 },
    { p: "/realisations", pr: 0.7 },
    { p: "/avis", pr: 0.7 },
    { p: "/a-propos", pr: 0.5 },
    { p: "/contact", pr: 0.7 },
    { p: "/mentions-legales", pr: 0.2 },
  ];

  return [
    ...statiques.map(({ p, pr }) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: pr,
    })),
    ...serviceSlugs.map((s) => ({
      url: `${site.url}/services/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...villeSlugs.map((v) => ({
      url: `${site.url}/couvreur/${v}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...comboSlugs.map((c) => ({
      url: `${site.url}/interventions/${c}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...guideSlugs.map((g) => ({
      url: `${site.url}/guides/${g}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
