# SEO local — Alice Lins (Natal/RN)

Pesquisa, decisões e plano. Datas e resultados de busca: **observados em 26/09/2026** pelo navegador do painel
(o Google detectou "Natal, RN"). Resultados variam por usuário, local e momento.

Legenda: **VERIFICADO** (medido/observado) · **INFERIDO** · **VALIDAÇÃO PROFISSIONAL** (depende da Alice) · **AÇÃO MANUAL** (exige conta/login).

## 1. Estados que não podem ser confundidos

| Estado | Situação da Home | Evidência |
|---|---|---|
| Rastreável (crawlable) | VERIFICADO | Servidor responde 200; `robots.txt` sem bloqueios |
| Indexável (indexable) | VERIFICADO | Sem `noindex`; canonical agora presente |
| **Indexada** | **VERIFICADO** | `site:alicelins.me` lista a Home com o título e a descrição atuais |
| **Ranqueando / visível** | **PARCIAL** | Aparece para *"alice lins psicóloga natal"*. **Não** aparece entre os primeiros para a busca genérica (o topo é Local Pack + diretórios). Sem dados do Search Console: BASELINE DATA NOT YET AVAILABLE |

Um teste de dados estruturados válido **não** prova nada disso.

## 2. O que a pesquisa mostrou

### Autocomplete real do Google (Brasil, pt-BR)
- **"psicóloga natal" é ambíguo**: a maioria das sugestões são pessoas chamadas *Natália*. Quem quer a cidade digita **"natal rn"** ou **"em natal"** → sempre escrever **Natal/RN**.
- Modificadores reais que aparecem: *rn, online, infantil, TCC, unimed, hapvida, gratuito, bem avaliados, vagas, zona norte, perto de mim*.
- Sem sugestões para a marca "alice lins psicóloga" (demanda ainda pequena).

### SERP de "psicóloga em natal rn"
1. **Local Pack** no topo (mapa + fichas do Google Meu Negócio com nota, avaliações, telefone, horário, "Site", "Rotas").
2. "As pessoas também perguntam": **"Qual o valor de uma sessão de psicólogo?"**, "atendimento gratuito em Natal", TDAH, fibromialgia.
3. Orgânico: **diretórios/agregadores** (Doctoralia, Mindee, MedGuias, GetNinjas, Telepesquisa), **perfis de Instagram** de psicólogas e clínicas. Sites individuais são minoria.

### Concorrentes analisados (títulos, H1, tamanho, schema)
| Tipo | Exemplo | Palavras | Canonical | Schema | Meta description |
|---|---|---|---|---|---|
| Individual | anabeatrizpsicologa.com | 525 | não | nenhum | **não** |
| Clínica | revalorizarpsicologia.com.br | 546 | sim | Organization, WebSite… | sim |
| Clínica | institutopensare.com | 1.592 | não | nenhum | sim |
| Diretório | doctoralia / mindee / psitto | 900–1.200 | sim | Org/WebSite/FAQ | sim |
| **Este site** | alicelins.me | **827** | **sim (agora)** | WebSite + ProfessionalService + Person | sim |

Conclusão: tecnicamente o site já está **acima dos concorrentes individuais**. O que o Google favorece nessa busca é a **ficha local** e a autoridade dos diretórios, não o texto da página.

### Colisão de nome (achado crítico)
- Para *"alice lins psicóloga"* o Google exibe o perfil de uma **homônima no Recife** ("Alice Lins - Psicóloga", Boa Viagem). Para *"alice lins"* + Natal, a primeira página tem resultados de conteúdo adulto de outra pessoa de mesmo nome.
- O Instagram **@alicelinspsi** é de **outra profissional** (perfil "Alice Lins | Psicóloga", 539 seguidores, associada ao CRP 02). A Alice é **@psialicelins**.
- Referências externas consistentes com a Alice: registro do **SIGAA/UFRN** (extensão) e uma página do Escavador com o nome completo. O nome completo **"Alice Lins Mendes Barreto"** é o identificador mais único.

**Decisão:** usar sempre o nome completo e o CRP em pontos de identidade (eyebrow do Hero, dados estruturados, rodapé) e "Psicóloga" + cidade junto do nome curto.

## 3. Modelo de intenção → página

| Cluster | Exemplos | Intenção | Página alvo |
|---|---|---|---|
| **A. Local profissional** | psicóloga em Natal RN, psicólogo Natal, psicóloga clínica Natal | Encontrar profissional na cidade | **Home** (H1 "Psicóloga clínica em Natal/RN") |
| **B. Marca** | Alice Lins psicóloga, Alice Lins Mendes Barreto, psialicelins | Achar a profissional específica | **Home** + Instagram + Google Meu Negócio |
| C. Serviço | psicoterapia online Natal | Atendimento online | Home (Atendimento, FAQ). Página própria só se houver conteúdo real (e-Psi) |
| D. Público | psicóloga para crianças/adolescentes/idosos Natal | Público específico | Home cita o público. **Sem** página "infantil" (não é especialidade declarada) |
| E. Por problema | ansiedade, luto… Natal | Buscar ajuda por sintoma | **Não implementado**: exige demandas validadas pela Alice; sem diagnóstico |
| F. Informacional | como funciona a 1ª sessão, quanto custa, abordagem fenomenológica | Pesquisa antes de decidir | Roadmap de conteúdo (seção 8), condicionado à validação |

## 4. Decisões de arquitetura

- **A Home é a landing principal** dos clusters A e B. Motivos: site de uma profissional; a Home individual é o tipo de página que rankeia; 827 palavras e resposta completa (quem, onde, como, público, contato) já na primeira tela.
- **Página local dedicada (/psicologa-natal/ etc.): REJEITADA.** Seria quase idêntica à Home (doorway/canibalização) e não agrega informação nova. Reavaliar apenas se surgir conteúdo local distinto e validado (ex.: como chegar, estacionamento, foto do espaço).
- **Páginas indexáveis:** só `/`. **Utilitárias com `noindex`:** `/privacidade/` e `/404`. Ficam fora do sitemap.
- Nenhuma página por sintoma/bairro/cidade vizinha.

## 5. Entidade e dados estruturados

`WebSite → ProfessionalService (consultório) → Person (Alice)`, ligados por `@id`; todos os campos existem visíveis na página.

- **Preservado:** o `ProfessionalService` validado pelo Google (mesmos dados).
- **Mudou:** virou `@graph` com `@id`; `Person` separada (nome completo, `alternateName` "Alice Lins", CRP, UFRN); `WebSite`; `contactPoint`.
- **`image`: resolvido** com fotos reais públicas e estáveis — `/img/og-alice-lins.jpg` (1200×630) e `/img/alice-lins-1x1.jpg`; `logo` em `/img/logo-alice-lins.png`.
- **`priceRange`: NÃO adicionado** (valor não informado; não vou inventar). O aviso opcional permanece.
- **Não incluído de propósito:** `aggregateRating`/`review` (depoimentos e avaliações são vedados pela Nota Técnica CFP 1/2022), endereço de rua (só a cidade é confirmada), `hasMap`.
- **`sameAs`:** só o Instagram oficial **@psialicelins**. Nunca o @alicelinspsi.
- Reexecutar o **Rich Results Test** após o deploy (AÇÃO MANUAL).

## 6. SEO local (o sistema, não só o site)

O Local Pack é a porta de entrada dessa busca. **Sem ficha no Google Meu Negócio o site compete só pelo orgânico**, dominado por diretórios.

### Google Meu Negócio (AÇÃO MANUAL — exige a conta da Alice)
- [ ] **Elegibilidade:** o atendimento é no Espaço Possibilitar (Tirol Way Office, espaço compartilhado). Conferir as diretrizes do Google para profissionais e espaços compartilhados antes de criar. Nunca inventar endereço nem criar ficha de escritório virtual.
- [ ] **Nome:** o nome real e completo — **"Alice Lins Mendes Barreto — Psicóloga"** (desambigua da homônima do Recife). Sem palavras-chave extras ("em Natal").
- [ ] **Categoria principal:** *Psicólogo*. Secundárias só se forem verdadeiras.
- [ ] **Site:** `https://alicelins.me/` · **Telefone:** +55 84 99707-1178 · **Link de agendamento:** o WhatsApp.
- [ ] **Endereço/atendimento:** VALIDAÇÃO PROFISSIONAL (endereço completo, horários, permissão do Espaço).
- [ ] **Descrição** (rascunho só com fatos confirmados, ≤750 caracteres): *"Psicóloga clínica (CRP 17/9333), formada pela UFRN, com abordagem fenomenológico-existencial. Atendo crianças, adolescentes, adultos e idosos, presencialmente no Espaço Possibilitar (Tirol Way Office, Natal/RN) e online. As sessões são semanais, de 50 minutos, em dia e horário combinados. O primeiro contato é pelo WhatsApp."*
- [ ] **Fotos reais:** retrato profissional, logo e, com autorização, o espaço.
- [ ] **Avaliações:** ver seção 9. Não solicitar, incentivar nem republicar.

### Consistência de dados (NAP + identidade)
Usar exatamente o mesmo em site, Google Meu Negócio, Instagram e diretórios: nome (**Alice Lins Mendes Barreto** / "Alice Lins"), **CRP 17/9333**, cidade **Natal/RN**, **+55 84 99707-1178**, `alicelins.me`, e-mail.

## 7. Implementado nesta fase

| Item | Detalhe |
|---|---|
| Domínio canônico | `site: https://alicelins.me` (canonical, `og:url`, sitemap, robots, JSON-LD) |
| `<link rel="canonical">` | Home = `https://alicelins.me/` (cobre `/index.html` e `?utm=`) |
| `robots.txt` | `User-agent: *` / `Allow: /` / `Sitemap:`; o Cloudflare acrescenta seu bloco de content signals |
| `sitemap.xml` | Só `/` (canônica e indexável) |
| Redirect | `/index.html` → `/` (301) no `netlify.toml` (**confirmar após o deploy**) |
| Open Graph/Twitter | `og:image` 1200×630 real, `og:url`, `twitter:card` |
| H1 | "Psicóloga *clínica* em Natal/RN." + eyebrow com o nome completo |
| Dados estruturados | grafo com `image`/`logo` (seção 5) |
| Privacidade | `/privacidade/` (`noindex`), link no rodapé |
| Cabeçalhos | `Permissions-Policy`, `X-Frame-Options` (além dos já existentes) |
| Ferramentas | `scripts/seo-check.mjs` (verifica produção); `scripts/audit.mjs` (UX/a11y) |

**Não feito, com motivo:** CSP (há scripts inline; exigiria hashes frágeis) · formulário (decisão do cliente) · Consent banner (não há cookies nem rastreadores) · blog (ver seção 8).

## 8. Conteúdo (condicionado à Alice)

Não publiquei artigos: conteúdo de saúde exige a expertise **validada** da Alice como autora. Ordem sugerida pela evidência da SERP; cada item só entra com texto dela:

1. **Quanto custa e como funciona o pagamento** — é a nº 1 em "As pessoas também perguntam". Precisa do valor (informar é permitido; sem desconto/gratuidade). *Maior alavanca de conversão.*
2. **Como funciona a primeira sessão de terapia** — dúvida central de quem nunca fez. Base: o texto da "conversa inicial" que ela já forneceu.
3. **O que é a abordagem fenomenológico-existencial** — diferencial real; expandir o FAQ com autoria dela.
4. **Terapia online: como funciona** — só com o cadastro e-Psi confirmado.
5. **Atendimento de crianças e adolescentes: o que os responsáveis precisam saber** — só com o método dela.

Regras: ≥ 700 palavras úteis, sem promessa de resultado, sem diagnóstico, autoria e CRP visíveis, link natural de volta à Home/contato. Qualidade acima de quantidade.

## 9. Autoridade e reputação (legítimas)

- Trocar o **link do Instagram** da bio de `linktr.ee` para `alicelins.me` (o Linktree desvia autoridade do domínio).
- **Espaço Possibilitar** (@espaco_possibilitar): pedir que o perfil/página do espaço cite e linke o site da Alice — citação local real.
- Perfis profissionais verdadeiros: Lattes (se tiver), cadastro do CRP-17, registro da UFRN/extensão (já existe no SIGAA), e diretórios de saúde **após conferir com o CRP-17** as regras de avaliações/depoimentos.
- Conteúdo educativo próprio, entrevistas e participação em eventos.
- **Avaliações:** as normas do CFP orientam contra depoimentos de pacientes em divulgação. Não pedir, incentivar, comprar nem republicar avaliações; não confirmar publicamente que alguém é paciente. Confirmar a política com o **CRP-17** antes de qualquer processo.
- **Nunca:** links comprados, PBNs, diretórios de spam, perfis ou avaliações falsas.

## 10. Medição

Eventos já no código (sem cookies, sem envio externo): `contact_click` (canal + local), `faq_open`, `section_view`. Para o funil **Impressão → Clique → Landing → CTA → Contato**:

- **Impressão/Clique:** Search Console (AÇÃO MANUAL).
- **Landing e engajamento:** ferramenta cookieless (Plausible/Umami/Cloudflare Web Analytics; o Cloudflare já está no domínio).
- **CTA:** os eventos acima. **Contato → paciente:** só a Alice observa (a mensagem pré-preenchida "Vim pelo seu site…" ajuda).
- Acompanhar **tendência do cluster "psicóloga + Natal"** (soma de consultas), não uma palavra isolada.

### Search Console — passo a passo (AÇÃO MANUAL)
1. Criar a propriedade **Domínio** `alicelins.me` (verificação por TXT no DNS; o DNS é do Cloudflare).
2. Enviar `https://alicelins.me/sitemap.xml`.
3. **Inspeção de URL** de `https://alicelins.me/` (confirmar "URL está no Google" e o canonical escolhido).
4. Depois do deploy desta fase, **solicitar nova indexação** da Home e inspecionar `/privacidade/` (deve constar como *noindex*).
5. Baseline: anotar impressões, cliques, CTR e posição média; filtrar consultas com "natal", "alice lins", "psicóloga".

## 11. Matriz de qualidade

| Requisito | Status | Evidência |
|---|---|---|
| Rastreamento permitido | VERIFICADO | 200; `robots.txt` sem `Disallow` |
| Indexação permitida / Home indexada | VERIFICADO | Sem noindex; `site:alicelins.me` mostra a Home |
| Canonical da Home | VERIFICADO (build) · MANUAL (produção) | `seo-check`: `https://alicelins.me/`; confirmar no ar após o deploy |
| `robots.txt` próprio | VERIFICADO (build) · MANUAL (mescla com Cloudflare) | gerado; produção hoje só serve o bloco do Cloudflare |
| `sitemap.xml` | VERIFICADO (build) · MANUAL (produção hoje 404) | 1 URL canônica, 200 |
| Redirect `/index.html` → `/` | MANUAL | Configurado; só testável no Netlify/Cloudflare |
| HTTPS, http→https, www→apex | VERIFICADO | 301/301 e HSTS na produção |
| Dados estruturados (JSON válido, `@id` íntegros, image/logo) | VERIFICADO (local) · MANUAL (Rich Results Test) | 3 entidades; referências resolvem |
| Título e descrição únicos e no tamanho | VERIFICADO | 56 e 153 caracteres |
| Um H1, hierarquia correta | VERIFICADO | axe e `seo-check` |
| Layout 320–1920 px | VERIFICADO | 12 larguras, 0 estouros, 0 alvos < 44 px |
| Acessibilidade | VERIFICADO | Lighthouse 100; axe 0 violações; teclado ok |
| Performance desktop / mobile | VERIFICADO | 100 / 99 (Lighthouse local) |
| LCP / CLS | VERIFICADO | 1,8 s (mobile simulado) · 0 |
| INP | VERIFICADO (proxy) | ≈ 40 ms (CPU 4×) e 16 ms desktop, interações reais |
| Dados de campo do Google (CrUX) | PENDING | Sem tráfego suficiente |
| PageSpeed Insights | PENDING | API sem chave estourou a cota (429) |
| 404 e rotas inválidas | VERIFICADO | 404 real + `noindex` |
| Links internos/externos | VERIFICADO | Internos 200; WhatsApp, Instagram, Maps 200 |
| Formulários | NOT APPLICABLE | Não há formulário (decisão do cliente) |
| Política de privacidade | VERIFICADO | `/privacidade/`; revisar texto com a Alice |
| Consentimento | NOT APPLICABLE | Sem cookies nem rastreadores (produção sem `Set-Cookie`) |
| Segredos expostos | VERIFICADO | Varredura limpa; sem `.env`; `npm audit`: 0 |
| `console.log`/debug | VERIFICADO | Nenhum em `src/` |
| Chrome (desktop/mobile) e Edge | VERIFICADO | Chrome 12 larguras; Edge 5 |
| Safari/iOS | PENDING | Sem acesso |
| Search Console | MANUAL | Login Google |
| Google Meu Negócio | MANUAL | Login Google |
| Conteúdo indexado como esperado no ar | MANUAL | Após o deploy |

## 12. Informações que dependem da Alice (VALIDAÇÃO PROFISSIONAL)

1. **Identidade:** confirmar o Instagram **@psialicelins**; corrigir nas artes o texto **"@alicelinspsi"** (é de outra pessoa); confirmar que o e-mail **alicelinspsi@gmail.com** é dela (a mesma sequência de letras identifica a homônima).
2. Endereço completo do atendimento, horários e autorização do Espaço Possibilitar para constar no Google.
3. Valor da sessão e pagamento (informar é permitido; sem promoção); convênio/reembolso; cancelamento.
4. Demandas que deseja receber e como funciona o atendimento de crianças e adolescentes.
5. Cadastro **e-Psi**; pós, cursos e supervisão; Lattes; link oficial de consulta do CRP.
6. Aprovar os textos sensíveis (sigilo, CVV/SAMU, primeira conversa, política de privacidade).
7. Conferir com o **CRP-17** a divulgação (Nota Técnica CFP 1/2022) e a política sobre avaliações no Google.
8. Foto do espaço de atendimento (com autorização).

## 13. Plano de 30 / 60 / 90 dias

**Dias 0–30 — fundamentos e linha de base**
- Fazer o deploy e rodar `node scripts/seo-check.mjs https://alicelins.me` (deve dar 0 FALHA; conferir redirect, sitemap e robots no ar).
- Search Console: verificar, enviar sitemap, inspecionar a Home, solicitar reindexação.
- Criar/otimizar o **Google Meu Negócio** (seção 6) e alinhar o Instagram.
- Corrigir o handle nas artes; confirmar o e-mail.
- Instalar uma medição cookieless e testar os eventos.
- Coletar da Alice os dados da seção 12.

**Dias 31–60 — dados e sinais**
- Ler consultas e páginas no Search Console; ver CTR e posição do cluster "psicóloga + Natal".
- Ajustar título/descrição só com base em CTR real.
- Publicar a primeira página de conteúdo (**valor e pagamento** ou **primeira sessão**), se a Alice validar.
- Citação do Espaço Possibilitar; perfis profissionais legítimos.

**Dias 61–90 — expandir o que funciona**
- Priorizar o que ganhou impressões; consolidar o que não ganhou.
- Segunda e terceira páginas de conteúdo; links internos naturais.
- Comparar `contact_click` por local e por origem; decidir onde investir.
- Revisar o Local Pack (presença, avaliações permitidas, fotos, perguntas).

*Nenhuma posição no Google é garantida. O objetivo é maximizar elegibilidade, relevância, confiança e facilidade de contato.*
