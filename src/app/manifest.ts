import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Manifeste minimal : il sert surtout a donner a Android l'icone en 192 et
 * 512 px, deja generees depuis le logo fourni par l'entreprise.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description:
      "Couvreur zingueur aux Andelys et dans l'Eure : rénovation de toiture, réparation de fuite, démoussage et zinguerie.",
    start_url: "/",
    display: "browser",
    lang: "fr-FR",
    background_color: "#12100e",
    theme_color: "#12100e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
