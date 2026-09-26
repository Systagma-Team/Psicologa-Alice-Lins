import { defineConfig } from 'astro/config';

// Site 100% estático: o conteúdo de `dist/` pode ser publicado gratuitamente
// em Cloudflare Pages, Netlify, Vercel ou GitHub Pages.
// Quando o domínio existir, definir `site: 'https://...'` (canonical e sitemap).
export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
});
