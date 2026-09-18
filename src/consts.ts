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
    "Design Without Memories is an architectural design and implementation studio delivering residential, commercial and restoration projects from concept to completion across Türkiye.",
  descriptionTr:
    "Design Without Memories, Türkiye genelinde konut, ticari ve restorasyon projelerini konseptten anahtar teslime kadar yürüten bir mimari tasarım ve uygulama stüdyosudur.",
  founded: "2011",
  email: "studio@dewime.com",
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
    instagram: "https://instagram.com/dewime",
    linkedin: "https://linkedin.com/company/dewime",
    pinterest: "https://pinterest.com/dewime",
  },
  geo: {
    lat: 41.0082,
    lng: 28.9784,
  },
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/non-places", label: "Non-Places" },
  { href: "/design", label: "Design Memory" },
  { href: "/interior-projects", label: "Interior Projects" },
  { href: "/products", label: "Products Design" },
  { href: "/practice", label: "Practice" },
  { href: "/contact", label: "Contact Us" },
] as const;
