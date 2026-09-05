import { site } from "@/lib/site";
import { services } from "@/content/services";
import { villes } from "@/content/villes";
import { avisAccueil } from "@/content/avis";

function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data) };
}

/** RoofingContractor complet — à poser une seule fois, sur l'accueil. */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phoneSchema,
    email: site.email,
    image: `${site.url}/og.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: villes.map((v) => ({
      "@type": "City",
      name: v.nom,
      postalCode: v.cp,
      addressCountry: "FR",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travaux de couverture",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
    // Avis individuels : Google exige qu'ils soient affichés sur la page,
    // recopiés mot pour mot, et signés du nom de leur auteur. C'est le cas.
    review: avisAccueil.map((a) => ({
      "@type": "Review",
      author: { "@type": "Person", name: a.auteur },
      datePublished: a.date,
      reviewBody: a.texte,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(a.note),
        bestRating: "5",
        worstRating: "1",
      },
    })),
    sameAs: [site.social.google],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

/** Organization + WebSite — sitewide, dans le layout racine. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        telephone: site.phoneSchema,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "fr-FR",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: villes.map((v) => ({
      "@type": "City",
      name: v.nom,
      postalCode: v.cp,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

export function FaqSchema({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

export function BreadcrumbSchema({ trail }: { trail: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.href}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

/** Article — pages guides. */
export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}
