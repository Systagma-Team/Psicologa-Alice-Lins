import type { APIRoute } from 'astro';

// Sem bloqueios: tudo que é público deve ser rastreável (inclusive CSS/JS/imagens de renderização).
// Obs.: o Cloudflare (DNS do domínio) acrescenta seu bloco de "content signals" no topo deste arquivo.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
