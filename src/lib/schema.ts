import { SITE } from "../consts";

// schema.org/Architect is a LocalBusiness subtype — the most accurate type
// for a design-and-build studio, and one AI answer engines map directly to
// "architecture firm" queries.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Architect",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: "Hafızasız Tasarım",
    description: SITE.description,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.founded,
    image: `${SITE.domain}/og-default.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: SITE.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    knowsAbout: SITE.keywords,
    sameAs: Object.values(SITE.social),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE.domain).toString(),
    })),
  };
}

export function projectSchema(project: {
  title: string;
  city: string;
  year: number;
  summary: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    about: `Interior architecture project in ${project.city}, Türkiye`,
    dateCreated: String(project.year),
    description: project.summary,
    url: new URL(project.path, SITE.domain).toString(),
    creator: {
      "@type": "Architect",
      name: SITE.name,
    },
    ...(project.image
      ? { image: new URL(project.image, SITE.domain).toString() }
      : {}),
  };
}

export function articleSchema(article: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    url: new URL(article.path, SITE.domain).toString(),
    author: {
      "@type": "Organization",
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
  };
}

export function productSchema(product: {
  title: string;
  material: string;
  summary: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.summary,
    material: product.material,
    url: new URL(product.path, SITE.domain).toString(),
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    ...(product.image
      ? { image: new URL(product.image, SITE.domain).toString() }
      : {}),
  };
}
