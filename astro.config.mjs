import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danhpaiva.github.io',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
