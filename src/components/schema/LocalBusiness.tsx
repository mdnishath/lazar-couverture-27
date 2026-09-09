import { site } from "@/lib/site";
import { services } from "@/content/services";
import { villes } from "@/content/villes";
import { avisAccueil } from "@/content/avis";
import { galerie } from "@/content/images";

function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data) };
}

/**
 * Une commune desservie.
 *
 * `postalCode` et `addressCountry` ne sont PAS des proprietes de `City` : le
 * validateur schema.org les signale sur chaque commune. Le code postal se
 * declare dans une `PostalAddress` imbriquee, et il compte ici — c'est lui qui
 * leve l'ambiguite entre communes homonymes.
 */
function commune(nom: string, cp: string) {
  return {
    "@type": "City",
    name: nom,
    address: {
      "@type": "PostalAddress",
      addressLocality: nom,
      postalCode: cp,
      addressCountry: "FR",
    },
  };
}

/** RoofingContractor complet — à poser une seule fois, sur l'accueil. */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legal.denomination,
    alternateName: site.legal.enseigne,
    description: `${site.tagline} : renovation de toiture, reparation de fuite, demoussage, zinguerie et gouttieres.`,
    url: site.url,
    telephone: site.phoneSchema,
    email: site.email,
    logo: `${site.url}/logo.png`,
    // Plusieurs photos reelles plutot qu'une seule vignette de marque :
    // Google en choisit une, autant qu'il ait des chantiers a choisir.
    image: [`${site.url}/og.jpg`, ...galerie.slice(0, 6).map((g) => `${site.url}${g.src}`)],
    // Le SIRET est le seul identifiant qu'un concurrent ne peut pas revendiquer.
    identifier: [
      { "@type": "PropertyValue", propertyID: "SIRET", value: site.legal.siret },
      { "@type": "PropertyValue", propertyID: "SIREN", value: site.legal.siren },
    ],
    foundingDate: site.legal.creation,
    founder: { "@type": "Person", name: site.legal.dirigeant },
    knowsLanguage: "fr-FR",
    currenciesAccepted: "EUR",
    paymentAccepted: "Especes, virement, cheque",
    hasMap: site.social.google,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Devis et interventions",
      telephone: site.phoneSchema,
      email: site.email,
      areaServed: "FR",
      availableLanguage: "fr",
    },
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
    areaServed: villes.map((v) => commune(v.nom, v.cp)),
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
        legalName: site.legal.denomination,
        url: site.url,
        telephone: site.phoneSchema,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/logo.png`,
          width: 1050,
          height: 309,
        },
        identifier: {
          "@type": "PropertyValue",
          propertyID: "SIRET",
          value: site.legal.siret,
        },
        sameAs: [site.social.google],
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
    areaServed: villes.map((v) => commune(v.nom, v.cp)),
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

/**
 * Reference courte vers l'entreprise. Le `@id` seul suffit sur l'accueil, ou
 * l'entite complete est declaree ; ailleurs on rappelle le minimum pour que la
 * page reste comprehensible isolement, comme Google la lit souvent.
 */
const entreprise = {
  "@type": "RoofingContractor",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phoneSchema,
} as const;

/**
 * Page de liste : services, guides, communes, interventions.
 * Sans elle, Google voit une suite de liens sans savoir qu'ils forment un
 * ensemble — et choisit lui-meme lesquels valent d'etre suivis.
 */
export function ListeSchema({
  nom,
  description,
  url,
  type = "CollectionPage",
  elements,
}: {
  nom: string;
  description: string;
  url: string;
  type?: "CollectionPage" | "ContactPage" | "AboutPage";
  elements: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": url,
    name: nom,
    description,
    url,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${site.url}/#website` },
    about: entreprise,
    ...(elements.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: elements.length,
            itemListElement: elements.map((e, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: e.name,
              url: `${site.url}${e.href}`,
            })),
          },
        }
      : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

/**
 * Galerie de chantiers. Les photos portent deja leurs metadonnees EXIF ;
 * ce balisage les rend lisibles par Google Images, avec la legende et le
 * proprietaire des droits.
 */
export function GalerieSchema({
  url,
  photos,
}: {
  url: string;
  photos: { src: string; width: number; height: number; alt: string; titre: string; legende: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": url,
    name: `Realisations — ${site.name}`,
    url,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${site.url}/#website` },
    about: entreprise,
    associatedMedia: photos.map((p) => ({
      "@type": "ImageObject",
      contentUrl: `${site.url}${p.src}`,
      url: `${site.url}${p.src}`,
      width: p.width,
      height: p.height,
      name: p.titre,
      caption: p.legende,
      description: p.alt,
      creditText: site.name,
      creator: { "@id": `${site.url}/#organization` },
      copyrightNotice: `© ${site.name}`,
      // `license` est le champ que Google exige pour le badge « Licensable » ;
      // sans lui l'image reste indexee mais ne porte aucune mention de droits.
      // Il pointe la clause de propriete intellectuelle, pas la page entiere.
      license: `${site.url}/mentions-legales#licence-images`,
      acquireLicensePage: `${site.url}/mentions-legales#licence-images`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

/**
 * Page commune. Un `Service` dont la zone est la commune seule : c'est ce qui
 * distingue « couvreur a Vernon » de la page d'accueil aux yeux de Google,
 * sinon les deux se disputent la meme requete.
 */
export function VilleSchema({
  ville,
  cp,
  url,
  prestations,
}: {
  ville: string;
  cp: string;
  url: string;
  prestations: { name: string; slug: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Couvreur a ${ville} (${cp})`,
    serviceType: "Travaux de couverture et de zinguerie",
    url,
    provider: entreprise,
    areaServed: commune(ville, cp),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Prestations a ${ville}`,
      itemListElement: prestations.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${p.name} a ${ville}`,
          url: `${site.url}/services/${p.slug}`,
        },
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}
