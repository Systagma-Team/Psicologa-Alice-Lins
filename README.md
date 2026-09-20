# Alice Lins — Psicóloga

Site estático em [Astro](https://astro.build), sem backend e sem formulário. O resultado de `npm run build` (pasta `dist/`) pode ser publicado gratuitamente em Cloudflare Pages, Netlify, Vercel ou GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run check    # tipos
```

## Estrutura

```
src/
  data/site.ts          dados profissionais e de contato (fonte única)
  styles/tokens.css     design tokens (paleta da Alice + escalas do kit)
  styles/base.css       reset, tipografia, layout, foco, movimento
  layouts/BaseLayout    head, header, footer, scripts
  components/           Button, SectionHeading, InfoRow, FAQItem, ...
  components/sections/  seções da Home
  assets/               fotos e símbolo (ver docs/PENDING.md)
references/             kit de referência (Behance + perfil da cliente)
docs/PENDING.md         o que ainda falta confirmar/receber
```

## Regras do projeto

- Só dados confirmados; o restante fica como `CONFIRMAR` (ver `docs/PENDING.md`).
- Sem depoimentos, números de pacientes, avaliações ou promessas de resultado.
- Nenhuma cor, fonte ou espaçamento fixo nos componentes: usar os tokens.
- `node scripts/contrast.mjs` confere o contraste WCAG da paleta.
