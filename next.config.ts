import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },

  /**
   * Migration depuis l'ancien site WordPress.
   * /zinguerie/ est 1er sur "zinguerie les andelys" et
   * /renovation-de-toitures/ 4e : ces redirections préservent ces positions.
   */
  async redirects() {
    return [
      { source: "/zinguerie", destination: "/services/zinguerie", permanent: true },
      { source: "/renovation-de-toitures", destination: "/services/renovation-toiture", permanent: true },
      { source: "/reparation-deau-en-urgence", destination: "/services/fuite-toiture", permanent: true },
      { source: "/galerie", destination: "/realisations", permanent: true },
      { source: "/gallery", destination: "/realisations", permanent: true },
    ];
  },
};

export default nextConfig;
