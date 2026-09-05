/**
 * Source unique de vérité pour le NAP (Nom, Adresse, Téléphone).
 * Ne JAMAIS écrire ces valeurs en dur ailleurs dans le projet.
 * L'ancien site avait trois numéros différents : c'est ce fichier qui empêche
 * que cela se reproduise.
 */
export const site = {
  name: "Lazar Couverture 27",
  legalName: "Lazar Couverture 27",
  tagline: "Couvreur aux Andelys et dans l'Eure",
  url: "https://lazarcouverture27.com",

  // Numéro principal de l'entreprise. Vérifié sur la fiche Google le
  // 1er septembre 2026 : la fiche porte bien ce numéro, la cohérence NAP
  // site / fiche est donc acquise. Reste à l'aligner sur les annuaires.
  phone: "+33 6 41 17 27 88",
  phoneHref: "tel:+33641172788",
  phoneSchema: "+33641172788",

  email: "contact@lazarcouverture27.com",

  address: {
    street: "Rue Guynemer",
    postalCode: "27700",
    city: "Les Andelys",
    region: "Eure",
    country: "FR",
  },

  geo: { lat: 49.2462834, lng: 1.4043573 },

  hours: {
    label: "Lundi au samedi, 7h30 – 19h30",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:30", closes: "19:30" },
    ],
  },

  rating: { value: "5.0", count: 48 },

  social: {
    google: "https://maps.app.goo.gl/bWSMBmM5kD6fdLCWA",
  },
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/guides", label: "Guides" },
  { href: "/zone-intervention", label: "Zone d'intervention" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
] as const;
