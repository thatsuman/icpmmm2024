import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://icpmmm2024.in',
  integrations: [
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
