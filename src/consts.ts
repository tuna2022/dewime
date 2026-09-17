// Central place-holder business data.
// Replace every value here once real company details are available —
// nothing else in the codebase needs to change.

export const SITE = {
  name: "Memoria Loci",
  legalName: "Memoria Loci Architecture Studio",
  tagline: "Architecture rooted in place",
  // English is the primary language; Turkish is layered in via place names,
  // structured data (areaServed, alternateName) and meta descriptions so
  // Turkish-language searches still surface the site. See src/lib/seo.ts.
  domain: "https://www.memorialoci.com",
  description:
    "Memoria Loci is an architectural design and implementation studio delivering residential, commercial and restoration projects from concept to completion across Türkiye.",
  descriptionTr:
    "Memoria Loci, Türkiye genelinde konut, ticari ve restorasyon projelerini konseptten anahtar teslime kadar yürüten bir mimari tasarım ve uygulama stüdyosudur.",
  founded: "2011",
  email: "studio@memorialoci.com",
  phone: "+90 212 000 00 00",
  phoneDisplay: "+90 212 000 00 00",
  whatsapp: "https://wa.me/902120000000",
  address: {
    street: "[Street Address]",
    district: "Levent",
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
    instagram: "https://instagram.com/memorialoci",
    linkedin: "https://linkedin.com/company/memorialoci",
    pinterest: "https://pinterest.com/memorialoci",
  },
  geo: {
    lat: 41.0082,
    lng: 28.9784,
  },
} as const;

// A Journal/Insights section (permit guides, material notes, project
// write-ups) would help both SEO and AEO once real articles exist — add it
// back here when there's content to publish rather than shipping empty pages.
export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;
