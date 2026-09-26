# Pendências para publicar o site da Alice

Nada abaixo foi inventado: cada item aguarda confirmação ou arquivo da Alice.

## Arquivos (assets)

| Item | Situação |
|---|---|
| Fotos (`src/assets/photos/alice.jpeg` no Hero; `alice 2.jpeg` no Sobre) | **Recebidas e em uso.** Se houver versões maiores que 1000×1500, trocar os arquivos. |
| Logos (`src/assets/brand/`) | **Recebidos e em uso** (cabeçalho, rodapé, seção do símbolo e favicon). São PNG: os derivados são gerados por `node scripts/prepare-brand.mjs`. |
| **Logo/símbolo em vetor (SVG, AI ou PDF)** | Desejável: o PNG serve, mas o vetor fica nítido em qualquer tamanho. Se vier, trocar os imports em `SiteHeader`, `SiteFooter` e `SymbolFigure`. |
| Versão do logo em bordô (para fundo claro) | Opcional: hoje o logo em cobre (`#C48C6C`) é usado direto no creme e no bordô. |
| `logo apresentacao.png` (mockup na parede, 2,2 MB) | Não usado no site. Pode virar imagem de compartilhamento ou de identidade depois. |
| Imagem de compartilhamento (Open Graph) | Falta; depende do domínio final. |
| Fontes oficiais da marca (se existirem) | Fraunces e Figtree são **substitutas**. O logo usa um serif de traço fino e sans-serif espaçada nas versaletes; se ela souber os nomes, aproximamos. |
| Paleta oficial | `#521A1B` (bordô) foi amostrado do Instagram; os cobres, dos PNGs dos logos. O restante é aproximação. |

> **Foto `alice 2.jpeg`:** mostra um livro de ludoterapia e brinquedos ao fundo. Como o público atendido inclui crianças (confirmado), a foto é coerente com o site.

## Dados

- [x] WhatsApp: `+55 84 99707-1178` (9º dígito acrescentado após o DDD). Editar em `src/data/site.ts`.
- [x] Instagram oficial: `@psialicelins`.
- [x] E-mail: `alicelinspsi@gmail.com`.
- [x] Atendimento presencial: Espaço Possibilitar (`@espaco_possibilitar`), Tirol Way Office, Natal/RN. Atalho para o Google Maps na seção "Como funciona" (busca por nome/endereço — confirmar se aponta para o local certo; sem coordenadas exatas informadas).
- [x] Como funciona o primeiro contato e os encontros (textos confirmados na seção "Como funciona").
- [x] Modalidades: presencial (Espaço Possibilitar) e online (Meet via link enviado pelo WhatsApp). Atendimento online: observar as regras do CFP (incluindo cadastro e-Psi).
- [ ] Dias e horários fixos (o site diz que são combinados por disponibilidade — não há uma agenda fixa a publicar).
- [x] Público atendido: crianças, adolescentes, adultos e idosos (faixa "Público" logo abaixo do Hero).
- [ ] Áreas de atuação que ela deseja divulgar (luto, sobrecarga, medo, ansiedade **não** foram apresentados como especialidades).
- [ ] Política de cancelamento (opcional).
- [ ] Domínio (para `site` em `astro.config.mjs`, canonical e sitemap).

## Textos para a Alice revisar

- **"Trajetória" → card "Encontros"**: usa o relato dela (crianças, adolescentes, adultos e idosos, presencial e online; luto, sobrecarga, medo, ansiedade) como experiência passada, não como serviço atual.
- **FAQ**: a resposta sobre a abordagem fenomenológico-existencial foi redigida a partir do discurso dela; a da terapia usa a frase dela ("não busca calar o sofrimento, mas compreender o que ele anuncia").
- **Aviso de emergência** (FAQ e rodapé): cita CVV 188 e SAMU 192. Aprovar ou ajustar.
- **Seção "Como funciona" e modalidades**: conteúdo confirmado. `showDraftSections` em `src/data/site.ts` só decide se a seção aparece; hoje está `true`.

## ⚠️ Identidade digital: conferir com urgência (SEO local)

Detalhes em [SEO.md](SEO.md).

- [ ] **@alicelinspsi é outra profissional** (perfil "Alice Lins | Psicóloga", 539 seguidores, ligada ao CRP 02). O perfil da Alice é **@psialicelins**. As artes dela mostram "@alicelinspsi" no cabeçalho: corrigir para não levar seguidores à outra pessoa.
- [ ] **E-mail alicelinspsi@gmail.com**: confirmar que é da Alice (a mesma sequência de letras identifica a homônima). Se não for, mensagens de pacientes podem chegar à pessoa errada.
- [ ] O nome "Alice Lins" tem **homônimas** nos resultados do Google. Usar sempre nome completo + CRP + Natal/RN nos perfis.
- [ ] Criar e alinhar o **Google Meu Negócio** (nome completo "Alice Lins Mendes Barreto — Psicóloga").

## Textos e decisões comerciais para a Alice aprovar (Fase 2)

Detalhes e justificativa em [COMMERCIAL.md](COMMERCIAL.md).

- [ ] **Hero:** "Alice Lins · Natal/RN", "Presencial em Natal/RN e online" e "Crianças, adolescentes, adultos e idosos" (o público subiu da faixa para o Hero; a faixa agora mostra "Sessões: semanais, de 50 minutos").
- [ ] **FAQ novo:** "Você atende presencialmente ou online?", "Como é a primeira conversa?" (texto dela em 2ª pessoa) e **"As conversas são sigilosas?"** (texto geral do Código de Ética — aprovar redação).
- [ ] **Ordem da página e menu:** "Atendimento" logo após o Sobre; "Símbolo" saiu do menu (a seção continua na página).
- [ ] **Título de busca:** "Alice Lins | Psicóloga clínica em Natal/RN (CRP 17/9333)".
- [ ] Conferir com o **CRP-17** que a divulgação está de acordo (Nota Técnica CFP 1/2022): sem depoimentos, sem desconto/gratuidade, sem promessa de resultado.

## Informações que faltam e mais aumentariam a conversão

1. Valor da sessão e formas de pagamento · 2. Convênio/reembolso · 3. Política de cancelamento/remarcação
4. Horários e tempo de resposta · 5. Demandas que deseja receber · 6. Como é o atendimento infantil/adolescente e se atende casais/famílias
7. Títulos (pós, cursos, supervisão) · 8. Cadastro e-Psi e link de consulta pública do CRP · 9. Foto do espaço de atendimento
10. Ferramenta de medição escolhida e política de privacidade (LGPD) · 11. URL da Systagma para o crédito virar link

## O que não foi usado do Behance (de propósito)

Estatísticas, depoimentos e nota média, contagem de clientes, "Meet our team", blog, formulário de agendamento e fotos de banco. O contato é feito por WhatsApp, e-mail e Instagram, sem formulário.

## Não usar das imagens do Instagram

- Print da videochamada (aparece interface do app).
- Cenários institucionais (SEPA, Centro Anita Garibaldi, Justiça Federal) como se fossem vínculos ou áreas de atuação.
- Curtidas, seguidores e comentários como prova social.
