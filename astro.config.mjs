// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Keep in sync with SITE.domain in src/consts.ts — needed for sitemap
  // URLs, canonical links and Open Graph tags to resolve correctly.
  site: 'https://www.dewime.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});