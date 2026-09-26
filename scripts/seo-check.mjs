// Verificação de SEO técnico de uma URL de produção (ou preview). Sem dependências.
//   node scripts/seo-check.mjs https://alicelins.me
// Confirma o que É verificável a partir do servidor: status, redirecionamentos, robots, sitemap,
// canonical, metadados e dados estruturados. NÃO comprova indexação nem posição no Google
// (isso só o Search Console informa).
const base = (process.argv[2] || 'https://alicelins.me').replace(/\/$/, '');
// Em preview local o canonical aponta para a produção:
//   EXPECT_ORIGIN=https://alicelins.me node scripts/seo-check.mjs http://localhost:4322
const expected = (process.env.EXPECT_ORIGIN || base).replace(/\/$/, '');
const local = /^http:\/\/(localhost|127\.0\.0\.1)/.test(base);
const toBase = (u) => u.replace(expected, base);
const rows = [];
const add = (req, ok, ev) => rows.push([ok === null ? 'MANUAL' : ok ? 'OK' : 'FALHA', req, ev]);

const get = async (path, opts = {}) => {
  try {
    const r = await fetch(base + path, { redirect: 'manual', ...opts });
    return { status: r.status, loc: r.headers.get('location'), ct: r.headers.get('content-type') || '', xr: r.headers.get('x-robots-tag'), text: r.status < 300 || r.status === 404 ? await r.text() : '' };
  } catch (e) {
    return { status: 0, err: e.message, text: '' };
  }
};

const home = await get('/');
add('Home responde 200', home.status === 200, `HTTP ${home.status}`);
const html = home.text;
const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
add('Canonical da Home = URL canônica', canon === expected + '/', canon || 'ausente');
add('Home sem noindex', !/name="robots"[^>]*noindex/i.test(html) && !home.xr?.includes('noindex'), 'meta robots / X-Robots-Tag');
const title = html.match(/<title>([^<]*)<\/title>/)?.[1] || '';
const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '';
add('Título 30–60 caracteres', title.length >= 30 && title.length <= 60, `${title.length}: ${title}`);
add('Descrição 70–160 caracteres', desc.length >= 70 && desc.length <= 160, `${desc.length} caracteres`);
add('Um único <h1>', (html.match(/<h1[\s>]/g) || []).length === 1, (html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] || '').replace(/<[^>]+>/g, '').trim());
add('<html lang="pt-BR">', /<html[^>]*lang="pt-BR"/.test(html), '');
const og = html.match(/property="og:image" content="([^"]+)"/)?.[1];
if (og) {
  const r = await fetch(toBase(og), { method: 'HEAD' }).catch(() => null);
  add('og:image absoluta e acessível', !!r && r.status === 200 && (r.headers.get('content-type') || '').startsWith('image/'), `${og} → ${r?.status}`);
} else add('og:image absoluta e acessível', false, 'ausente');

// favicon: o Google exige quadrado, lado múltiplo de 48 px, URL estável e rastreável
const iconHrefs = [...html.matchAll(/<link rel="icon"[^>]*href="([^"]+)"/g)].map((m) => m[1]);
add('Favicon declarado no <head>', iconHrefs.length > 0, iconHrefs.join(' , ') || 'ausente');
for (const href of iconHrefs) {
  const r = await fetch(new URL(href, base + '/'), { headers: { 'User-Agent': 'Googlebot-Image/1.0' } }).catch(() => null);
  const buf = r ? Buffer.from(await r.arrayBuffer()) : Buffer.alloc(0);
  const isPng = buf.length > 24 && buf.slice(1, 4).toString() === 'PNG';
  const isIco = buf.length > 22 && buf.readUInt16LE(2) === 1;
  const w = isPng ? buf.readUInt32BE(16) : isIco ? buf[6] || 256 : 0;
  const h = isPng ? buf.readUInt32BE(20) : isIco ? buf[7] || 256 : 0;
  add(`Favicon ${href}: 200, quadrado, múltiplo de 48 px`, r?.status === 200 && w > 0 && w === h && w % 48 === 0, `HTTP ${r?.status} · ${w}x${h}`);
}
const ico = await fetch(base + '/favicon.ico').catch(() => null);
add('/favicon.ico responde 200 (endereço padrão dos rastreadores)', ico?.status === 200 && (ico.headers.get('content-type') || '').includes('icon') || ico?.status === 200 && (ico.headers.get('content-type') || '').startsWith('image/'), `HTTP ${ico?.status} · ${ico?.headers.get('content-type')}`);

// dados estruturados
const ld = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>(.*?)<\/script>/gs)].map((m) => m[1]);
try {
  const g = ld.map((s) => JSON.parse(s));
  const nodes = g.flatMap((j) => j['@graph'] || [j]);
  const types = nodes.map((n) => [].concat(n['@type']).join('/'));
  add('JSON-LD é JSON válido', true, types.join(', '));
  const biz = nodes.find((n) => [].concat(n['@type']).includes('ProfessionalService'));
  add('ProfessionalService com image e logo absolutos', !!biz?.image && String(biz.logo).startsWith('http'), `image=${[].concat(biz?.image).length}`);
  add('Sem priceRange/aggregateRating/review (dados não verificados)', !JSON.stringify(nodes).match(/priceRange|aggregateRating|"review"/), '');
} catch (e) {
  add('JSON-LD é JSON válido', false, e.message);
}

// robots + sitemap
const robots = await get('/robots.txt');
add('robots.txt 200 e sem "Disallow: /"', robots.status === 200 && !/^\s*Disallow:\s*\/\s*$/m.test(robots.text), `HTTP ${robots.status}`);
const sm = robots.text.match(/^Sitemap:\s*(\S+)/im)?.[1];
add('robots.txt referencia o sitemap canônico', sm === expected + '/sitemap.xml', sm || 'ausente');
const sitemap = await get('/sitemap.xml');
const locs = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
add('sitemap.xml 200, XML e só URLs canônicas', sitemap.status === 200 && sitemap.ct.includes('xml') && locs.length > 0, `${locs.length} URL(s): ${locs.join(' ')}`);
for (const u of locs) {
  const r = await fetch(toBase(u), { redirect: 'manual' }).catch(() => null);
  add(`Sitemap → ${u} responde 200 sem redirect`, r?.status === 200, `HTTP ${r?.status}`);
}

// variantes de URL
if (!local) {
  const h = await fetch(base.replace('https://', 'http://') + '/', { redirect: 'manual' }).catch(() => null);
  add('http → https (301)', h?.status === 301 && (h.headers.get('location') || '').startsWith('https://'), `HTTP ${h?.status} → ${h?.headers.get('location')}`);
  const www = await fetch(base.replace('https://', 'https://www.') + '/', { redirect: 'manual' }).catch(() => null);
  add('www → apex (301)', www?.status === 301 && (www.headers.get('location') || '').startsWith(base), `HTTP ${www?.status} → ${www?.headers.get('location')}`);
  const idx = await get('/index.html');
  add('/index.html → / (301)', idx.status === 301, `HTTP ${idx.status} ${idx.loc || ''}`);
} else add('Redirecionamentos http/www e /index.html', null, 'só verificáveis na produção (Netlify/Cloudflare)');
const nf = await get('/pagina-que-nao-existe');
add('404 real (status 404) e noindex', nf.status === 404 && /noindex/i.test(nf.text), `HTTP ${nf.status}`);
const pv = await get('/privacidade/');
add('/privacidade/ 200 e noindex', pv.status === 200 && /noindex/i.test(pv.text), `HTTP ${pv.status}`);

// links internos
const hrefs = [...new Set([...html.matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)].map((m) => m[1]))].filter((p) => !p.startsWith('/_astro') && !p.startsWith('/img') && !/\.(png|jpg|svg|ico)$/.test(p));
for (const p of hrefs) {
  const r = await fetch(base + p, { redirect: 'manual' }).catch(() => null);
  add(`Link interno ${p} responde 200`, r?.status === 200, `HTTP ${r?.status}`);
}

add('Search Console: propriedade verificada e sitemap enviado', null, 'exige login Google (não verificável daqui)');
add('Google Business Profile', null, 'exige login Google (não verificável daqui)');

console.log(`\nSEO técnico — ${base}\n`);
for (const [s, req, ev] of rows) console.log(`${s.padEnd(7)} ${req.padEnd(58)} ${ev}`);
const falhas = rows.filter((r) => r[0] === 'FALHA').length;
console.log(`\n${rows.filter((r) => r[0] === 'OK').length} OK · ${falhas} FALHA · ${rows.filter((r) => r[0] === 'MANUAL').length} MANUAL`);
process.exit(falhas ? 1 : 0);
