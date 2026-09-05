import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },

  /**
   * Migration depuis l'ancien site WordPress.
   * /zinguerie/ est 1er sur "zinguerie les andelys" et
   * /renovation-de-toitures/ 4e : ces redirections préservent ces positions.
   */
  /**
   * En-tetes de securite. Aucun effet direct sur le classement, mais ce sont
   * les points que releve un audit et que voit un client qui fait verifier son
   * site. `Strict-Transport-Security` n'est pose que par l'hebergeur en HTTPS.
   */
  async headers() {
    return [
      {
        source: "/:chemin*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Les photos sont immuables : leur nom change quand leur contenu change.
        source: "/photos/:chemin*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  async redirects() {
    /**
     * Les URL indexees par Google se terminent toutes par un slash
     * (`/zinguerie/`). Sans le `{/}?`, Next normalisait d'abord le slash puis
     * redirigeait : deux sauts au lieu d'un sur la page la mieux classee.
     */
    return [
      { source: "/zinguerie{/}?", destination: "/services/zinguerie", permanent: true },
      { source: "/renovation-de-toitures{/}?", destination: "/services/renovation-toiture", permanent: true },
      { source: "/reparation-deau-en-urgence{/}?", destination: "/services/fuite-toiture", permanent: true },
      { source: "/galerie{/}?", destination: "/realisations", permanent: true },
      { source: "/gallery{/}?", destination: "/realisations", permanent: true },
    ];
  },
};

export default nextConfig;
