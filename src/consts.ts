// Central place-holder business data.
// Replace every value here once real company details are available —
// nothing else in the codebase needs to change.

export const SITE = {
  name: "Design Without Memories",
  legalName: "Design Without Memories Architecture Studio",
  tagline: "Spaces begin without memory",
  // English is the primary language; Turkish is layered in via place names,
  // structured data (areaServed, alternateName) and meta descriptions so
  // Turkish-language searches still surface the site. See src/lib/schema.ts.
  domain: "https://www.dewime.com",
  description:
    "Design Without Memories is an Istanbul-based interior design and implementation studio — home decor, wall decor, canvas wall art and office decor, brought physically to life from concept to completion across Türkiye.",
  descriptionTr:
    "Design Without Memories, İstanbul merkezli bir iç mimari ve uygulama stüdyosudur — ev dekorasyonu, duvar dekorasyonu, kanvas tablo ve ofis dekorasyonunu konseptten anahtar teslime kadar hayata geçirir.",
  founded: "2026",
  email: "tunakocayurt@gmail.com",
  phone: "+90 543 570 12 79",
  phoneDisplay: "+90 543 570 12 79",
  address: {
    street: "Dotshub Feriye, Ortaköy",
    district: "Beşiktaş",
    city: "Istanbul",
    cityTr: "İstanbul",
    region: "Istanbul",
    postalCode: "34000",
    country: "Türkiye",
    countryCode: "TR",
  },
  // Cities the studio actively serves — used in copy + LocalBusiness schema
  // "areaServed" so Turkish city-level searches have something to match.
  areaServed: ["Istanbul", "Bodrum", "Izmir", "Ankara", "Antalya"],
  social: {
    instagram: "https://instagram.com/dewime",
    linkedin: "https://linkedin.com/company/dewime",
    pinterest: "https://pinterest.com/dewime",
  },
  geo: {
    lat: 41.0082,
    lng: 28.9784,
  },
  // Site-wide target queries (EN + TR) for meta keywords, schema.org
  // "knowsAbout" and llms.txt — kept in one place so every page pulls the
  // same list rather than drifting per-page.
  keywords: [
    "home decor",
    "ev dekorasyonu",
    "decor",
    "dekorasyon",
    "wall decor",
    "duvar dekorasyonu",
    "home interior decor",
    "ev iç mekan dekorasyonu",
    "living room design",
    "oturma odası tasarımı",
    "canvas wall art",
    "kanvas tablo",
    "interior design",
    "iç mimari",
    "home interior",
    "ev iç mekanı",
    "office decor",
    "ofis dekorasyonu",
    "office wall decor",
    "ofis duvar dekorasyonu",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/non-places", label: "Non-Places" },
  { href: "/design-with-memory", label: "Design with Memory" },
  { href: "/#art-and-house", label: "Art and House" },
  { href: "/interior-projects", label: "Interior Projects" },
  { href: "/products", label: "Products Design" },
  { href: "/practice", label: "Practice" },
  { href: "/contact", label: "Contact Us" },
] as const;
