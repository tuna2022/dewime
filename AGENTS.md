# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/portfolio site for Design Without Memories, a (placeholder-named) architecture design-and-build studio in Istanbul. Built with Astro 7 (static output) + Tailwind CSS v4. Content is placeholder business data pending the real company's details — see "Placeholder data" below before treating any copy as real.

## Commands

```sh
npm run dev              # dev server at localhost:4321
npm run dev -- --background   # same, backgrounded — manage with `astro dev stop|status|logs`
npm run build             # production build to ./dist/
npm run preview           # preview the production build locally
npx astro check            # typecheck .astro files + content collection schemas
```

There is no lint script and no test suite configured.

## Architecture

**Content lives in collections, not hardcoded in pages.** `src/content.config.ts` defines four collections (`practice`, `interiorProjects`, `products`, `faq`) backed by markdown files in `src/content/<folder>/*.md` (folder names are kebab-case: `practice`, `interior-projects`, `products`, `faq`), loaded via Astro's `glob()` content loader and validated with Zod schemas. Pages (`src/pages/practice/index.astro`, `src/pages/practice/[id].astro`, etc.) pull from these via `getCollection()`/`render()` — add a new discipline, project or product by adding a markdown file with the right frontmatter, not by editing a page template. `[id].astro` routes use `getStaticPaths()` to generate one page per entry. Site nav is About (`/about`) → Interior Projects (`/interior-projects`) → Products Design (`/products`) → Practice (`/practice`) → Contact Us (`/contact`), defined in `NAV_LINKS` in `src/consts.ts`.

**All business identity data is centralized in `src/consts.ts`** (`SITE` object: name, address, phone, email, service area cities, social links, geo coordinates) and `NAV_LINKS`. Every component/page reads from here rather than hardcoding the company name/contact info — when real business details replace the placeholders, this is the one file that must change for most of the site to update.

**SEO/AEO is structural, not incidental.** This site targets both traditional search and AI answer engines (see comments in `public/robots.txt` allowing GPTBot/ClaudeBot/PerplexityBot/etc.):
- `src/components/SEO.astro` renders canonical/OG/Twitter meta from page-level props.
- `src/layouts/BaseLayout.astro` always injects an `Architect`-type (schema.org LocalBusiness subtype) JSON-LD organization block via `src/lib/schema.ts:organizationSchema()`, plus any page-specific schema passed through its `jsonLd` prop (array or single object) — pages compose `breadcrumbSchema()`, `faqSchema()`, `projectSchema()`, `productSchema()` from the same file.
- `src/pages/llms.txt.ts` is an API route that regenerates `/llms.txt` (the llmstxt.org convention for AI crawlers) directly from the content collections at build time, so it can't drift out of sync with the actual pages.
- `astro.config.mjs`'s `site` value and `SITE.domain` in `consts.ts` must be kept in sync manually (there's a comment marking this) — both feed canonical URLs, the sitemap, and JSON-LD `@id`/`url` fields.

**Bilingual (EN/TR) approach:** primary copy is English, but Turkish surfaces through real content rather than a parallel `/tr` site: Turkish city names, service terms (e.g. `titleTr` frontmatter field on services), `lang="tr"` inline spans, `alternateName`/`og:locale:alternate` in schema/meta. There is no i18n routing — don't assume `/tr/*` pages exist.

**Design tokens live in `src/styles/global.css`** under a Tailwind v4 `@theme` block (materials-inspired palette: `--color-canvas/ink/stone/patina/bronze`, three font roles — `--font-display` (Fraunces), `--font-body` (Archivo), `--font-mono` (IBM Plex Mono)). The recurring `.coord-mark` component class (small-caps mono eyebrow label with a diamond marker) is the site's signature motif, used at the start of most sections — it's `display: flex` deliberately (not `inline-flex`) so it always takes its own line even when it directly follows another inline element like a back-link.

**`src/components/PlaceholderPlate.astro`** stands in for project/service photography everywhere an `<img>` would eventually go — it renders a deterministic abstract contour pattern from a `seed` prop plus an accessible label describing what photo belongs there. Swap these for real `<img>` tags as photography becomes available; grep for `PlaceholderPlate` to find every remaining spot.

## Placeholder data

Company name, address, phone, domain, and all project/service copy in `src/content/` are placeholders invented to give the site a coherent identity before real business details exist. `public/og-default.svg` is likewise a placeholder Open Graph image (note: some platforms like Facebook/LinkedIn don't render SVG OG images — replace with a real 1200×630 JPG/PNG).
