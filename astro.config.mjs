import { defineConfig } from 'astro/config';

// Site 100% estático: o conteúdo de `dist/` pode ser publicado gratuitamente
// em Cloudflare Pages, Netlify, Vercel ou GitHub Pages.
// `site` é a fonte única do domínio canônico (canonical, og:url, sitemap, robots, dados estruturados).
export default defineConfig({
  site: 'https://alicelins.me',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
});
