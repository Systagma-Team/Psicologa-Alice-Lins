// Bancada de auditoria de UI/UX/acessibilidade (Chrome real via Playwright + axe-core).
// Não faz parte das dependências do projeto. Para rodar:
//   npm i --no-save playwright-core axe-core
//   npm run build && npx astro preview --port 4322
//   node scripts/audit.mjs http://localhost:4322/ audit-out      (CHROME_PATH=... se o Chrome não estiver no caminho padrão)
// Mede 12 larguras (320–1920): estouro horizontal, alvos de toque, imagens, console, axe,
// teclado, menu, movimento reduzido, sem JS, paisagem, zoom e espaçamento de texto.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const URL = process.argv[2] || 'http://localhost:4322/';
const OUT = process.argv[3] || 'out';
fs.mkdirSync(OUT, { recursive: true });

const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const widths = [320, 360, 375, 390, 430, 600, 768, 820, 1024, 1280, 1440, 1920];
const heightFor = (w) => (w < 600 ? 800 : w < 1024 ? 1000 : 900);

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const report = { url: URL, viewports: {}, axe: {}, keyboard: {}, misc: {} };

async function scrollAll(page) {
  // Rolagem real (roda do mouse): dispara lazy-load e IntersectionObserver como um usuário
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h + 400; y += 350) {
    await page.mouse.wheel(0, 350);
    await page.waitForTimeout(110);
  }
  await page.waitForTimeout(1000);
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; scrollTo(0, 0); });
  await page.waitForTimeout(1000);
}

// ---------- 1. Viewports ----------
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: heightFor(w) }, deviceScaleFactor: 1, hasTouch: w < 1024 });
  const page = await ctx.newPage();
  const consoleMsgs = [];
  const failed = [];
  page.on('console', (m) => ['error', 'warning'].includes(m.type()) && consoleMsgs.push(`${m.type()}: ${m.text()}`));
  page.on('pageerror', (e) => consoleMsgs.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => failed.push(r.url() + ' ' + r.failure()?.errorText));
  page.on('response', (r) => r.status() >= 400 && failed.push(r.url() + ' HTTP ' + r.status()));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await scrollAll(page);

  const data = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const de = document.documentElement;
    const over = [...document.querySelectorAll('body *')]
      .filter((e) => {
        const r = e.getBoundingClientRect();
        const cs = getComputedStyle(e);
        return r.width > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && (r.right > vw + 1 || r.left < -1);
      })
      .map((e) => e.tagName + '.' + (e.className?.toString().slice(0, 40) || ''))
      .slice(0, 8);
    const small = [...document.querySelectorAll('a, button, summary')]
      .filter((e) => {
        const r = e.getBoundingClientRect();
        const cs = getComputedStyle(e);
        if (r.width === 0 || cs.display === 'none' || cs.visibility === 'hidden') return false;
        if (e.closest('p, li > p') && cs.display === 'inline') return false; // links em texto corrido
        return r.height < 43.5 || r.width < 43.5;
      })
      .map((e) => `${e.tagName}:${e.textContent.trim().slice(0, 24)}:${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`);
    const imgs = [...document.images].map((i) => ({ alt: i.alt.slice(0, 28), nat: `${i.naturalWidth}x${i.naturalHeight}`, shown: `${Math.round(i.getBoundingClientRect().width)}x${Math.round(i.getBoundingClientRect().height)}`, ok: i.complete && i.naturalWidth > 0 }));
    const header = document.querySelector('[data-header]');
    const brand = document.querySelector('.brand__logo')?.getBoundingClientRect();
    const h1 = document.querySelector('h1');
    const lineH = parseFloat(getComputedStyle(h1).lineHeight);
    // comprimento de linha em parágrafos
    const longLine = [...document.querySelectorAll('p')].map((p) => {
      const cs = getComputedStyle(p);
      const chars = Math.round(p.getBoundingClientRect().width / (parseFloat(cs.fontSize) * 0.5));
      return chars;
    }).sort((a, b) => b - a)[0];
    const hiddenReveal = [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity === '0').length;
    return {
      vw, scrollW: de.scrollWidth, over, small,
      badImgs: imgs.filter((i) => !i.ok).length,
      imgs,
      headerH: Math.round(header.getBoundingClientRect().height),
      logo: brand ? `${Math.round(brand.width)}x${Math.round(brand.height)}` : null,
      h1Size: getComputedStyle(h1).fontSize, h1Lines: Math.round(h1.getBoundingClientRect().height / lineH),
      approxMaxCharsPerLine: longLine, hiddenReveal, pageH: de.scrollHeight,
    };
  });
  report.viewports[w] = { ...data, console: consoleMsgs, failed };
  await page.screenshot({ path: path.join(OUT, `full-${w}.png`), fullPage: true });
  await ctx.close();
}

// ---------- 2. axe (mobile, desktop, menu aberto) ----------
async function runAxe(page, label) {
  await page.evaluate(axeSource);
  const res = await page.evaluate(() =>
    axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] } }),
  );
  report.axe[label] = {
    violations: res.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 4).map((n) => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\n').slice(0, 3).join(' | ')) })),
    incomplete: res.incomplete.map((v) => ({ id: v.id, nodes: v.nodes.length, sample: v.nodes[0]?.target.join(' ') })),
    passes: res.passes.length,
  };
}
for (const [label, w, h] of [['mobile375', 375, 800], ['tablet820', 820, 1000], ['desktop1440', 1440, 900]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await scrollAll(page);
  await runAxe(page, label);
  if (w === 375) {
    await page.click('[data-menu-toggle]');
    await page.waitForTimeout(400);
    await runAxe(page, 'mobile375-menu-open');
  }
  await ctx.close();
}

// ---------- 3. Teclado ----------
for (const [label, w, h] of [['desktop1440', 1440, 900], ['mobile375', 375, 800]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  const stops = [];
  for (let i = 0; i < 45; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(60);
    const info = await page.evaluate(() => {
      const e = document.activeElement;
      if (!e || e === document.body) return null;
      const r = e.getBoundingClientRect();
      const cs = getComputedStyle(e);
      const header = document.querySelector('[data-header]').getBoundingClientRect();
      const outlined = cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0;
      return {
        tag: e.tagName, text: (e.getAttribute('aria-label') || e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30),
        outlined, outlineColor: cs.outlineColor,
        obscuredByHeader: r.top < header.bottom - 1 && r.bottom > header.top && r.height > 0 && e.closest('[data-header]') === null,
        offscreen: r.bottom < 0 || r.top > innerHeight, top: Math.round(r.top),
      };
    });
    if (!info) break;
    stops.push(info);
  }
  report.keyboard[label] = {
    count: stops.length,
    notOutlined: stops.filter((s) => !s.outlined).map((s) => s.tag + ':' + s.text),
    obscured: stops.filter((s) => s.obscuredByHeader).map((s) => s.tag + ':' + s.text),
    offscreen: stops.filter((s) => s.offscreen).map((s) => s.tag + ':' + s.text),
    order: stops.map((s) => s.text).join(' > '),
  };
  await ctx.close();
}

// ---------- 4. Menu móvel, teclado, ESC ----------
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 800 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  const t = page.locator('[data-menu-toggle]');
  const before = await t.getAttribute('aria-expanded');
  await t.press('Enter');
  const opened = await t.getAttribute('aria-expanded');
  const navVisible = await page.locator('[data-nav]').isVisible();
  await page.keyboard.press('Escape');
  const closed = await t.getAttribute('aria-expanded');
  const focusOnToggle = await page.evaluate(() => document.activeElement?.hasAttribute('data-menu-toggle'));
  await t.click();
  await page.locator('[data-nav] a', { hasText: 'Trajetória' }).click();
  await page.waitForTimeout(900);
  const afterLink = await t.getAttribute('aria-expanded');
  const y = await page.evaluate(() => scrollY);
  const trajTop = await page.evaluate(() => Math.round(document.getElementById('trajetoria').getBoundingClientRect().top));
  const headerH = await page.evaluate(() => Math.round(document.querySelector('[data-header]').getBoundingClientRect().height));
  report.misc.menu = { before, opened, navVisible, closedByEsc: closed, focusReturnedToToggle: focusOnToggle, closedAfterLink: afterLink, scrolledTo: y, sectionTopAfterAnchor: trajTop, headerH };
  await ctx.close();
}

// ---------- 5. Reduced motion, sem JS, landscape, zoom ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  report.misc.reducedMotion = await page.evaluate(() => ({ hiddenReveal: [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity === '0').length, scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior }));
  await ctx.close();
}
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 800 }, javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'load' });
  report.misc.noJs = await page.evaluate(() => ({
    hiddenReveal: [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity === '0').length,
    navDisplay: getComputedStyle(document.querySelector('[data-nav]')).display,
    toggleDisplay: getComputedStyle(document.querySelector('[data-menu-toggle]')).display,
    scrollW: document.documentElement.scrollWidth, vw: document.documentElement.clientWidth,
  }));
  await page.screenshot({ path: path.join(OUT, 'nojs-375-top.png') });
  await ctx.close();
}
{
  const ctx = await browser.newContext({ viewport: { width: 667, height: 375 }, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.click('[data-menu-toggle]');
  await page.waitForTimeout(300);
  report.misc.landscapeMenu = await page.evaluate(() => { const n = document.querySelector('[data-nav]').getBoundingClientRect(); return { navBottom: Math.round(n.bottom), vh: innerHeight, cutOff: n.bottom > innerHeight }; });
  await page.screenshot({ path: path.join(OUT, 'landscape-667-menu.png') });
  await ctx.close();
}
{
  // zoom 200% (viewport 720 CSS px equivalente a 1440 @200%) e 400% (320 px)
  const ctx = await browser.newContext({ viewport: { width: 320, height: 256 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  report.misc.zoom400 = await page.evaluate(() => ({ scrollW: document.documentElement.scrollWidth, vw: document.documentElement.clientWidth }));
  await ctx.close();
}
{
  // espaçamento de texto WCAG 1.4.12
  const ctx = await browser.newContext({ viewport: { width: 375, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important} p{margin-bottom:2em!important}' });
  await scrollAll(page);
  report.misc.textSpacing = await page.evaluate(() => ({ scrollW: document.documentElement.scrollWidth, vw: document.documentElement.clientWidth }));
  await page.screenshot({ path: path.join(OUT, 'textspacing-375.png'), fullPage: true });
  await ctx.close();
}
{
  // DOM: ids duplicados, headings, landmarks, links
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  report.misc.dom = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map((e) => e.id);
    const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
    const anchors = [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href')).filter((h) => h.length > 1 && !document.querySelector(h));
    const blank = [...document.querySelectorAll('a[target=_blank]')].filter((a) => !/noopener/.test(a.rel)).length;
    const meta = (n) => document.querySelector(`meta[${n}]`)?.content;
    return {
      lang: document.documentElement.lang, title: document.title, dupIds: dup, brokenAnchors: anchors, blankWithoutNoopener: blank,
      description: meta('name=description'), ogImage: meta('property="og:image"') || null, canonical: document.querySelector('link[rel=canonical]')?.href || null,
      viewport: meta('name=viewport'), themeColor: meta('name=theme-color'), colorScheme: meta('name=color-scheme') || null,
      landmarks: ['header', 'nav', 'main', 'footer'].map((t) => t + ':' + document.querySelectorAll(t).length).join(' '),
      headings: [...document.querySelectorAll('h1,h2,h3')].map((h) => h.tagName + ' ' + h.textContent.trim().slice(0, 32)),
      links: [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')).filter((h) => !h.startsWith('#')),
    };
  });
  await ctx.close();
}

await browser.close();
fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
console.log('OK ->', path.join(OUT, 'report.json'));
