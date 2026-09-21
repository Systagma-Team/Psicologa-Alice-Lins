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

> **Foto `alice 2.jpeg`:** mostra um livro de ludoterapia e brinquedos ao fundo, o que pode sugerir atendimento infantil. Confirmar se ela quer essa foto no site enquanto o público atendido não estiver definido.

## Dados

- [x] WhatsApp: `+55 84 99707-1178` (9º dígito acrescentado após o DDD). Editar em `src/data/site.ts`.
- [x] Instagram oficial: `@psialicelins`.
- [ ] Cidade e endereço (se houver atendimento presencial).
- [ ] Dias e horários.
- [ ] Como funciona o primeiro contato/agendamento e a duração/frequência dos encontros.
- [ ] Modalidades ativas hoje (presencial e/ou online). Atendimento online exige observar as regras do CFP (incluindo cadastro e-Psi).
- [ ] Públicos atendidos hoje.
- [ ] Áreas de atuação que ela deseja divulgar (luto, sobrecarga, medo, ansiedade **não** foram apresentados como especialidades).
- [ ] Política de cancelamento (opcional).
- [ ] Domínio (para `site` em `astro.config.mjs`, canonical e sitemap).

## Textos para a Alice revisar

- **"Trajetória" → card "Encontros"**: usa o relato dela (crianças, adolescentes, adultos e idosos, presencial e online; luto, sobrecarga, medo, ansiedade) como experiência passada, não como serviço atual.
- **FAQ**: a resposta sobre a abordagem fenomenológico-existencial foi redigida a partir do discurso dela; a da terapia usa a frase dela ("não busca calar o sofrimento, mas compreender o que ele anuncia").
- **Aviso de emergência** (FAQ e rodapé): cita CVV 188 e SAMU 192. Aprovar ou ajustar.
- **Seção "Como funciona" e modalidades**: está em modo rascunho (`showDraftSections: true` em `src/data/site.ts`). Enquanto houver `CONFIRMAR`, publicar com `false` esconde a seção.

## O que não foi usado do Behance (de propósito)

Estatísticas, depoimentos e nota média, contagem de clientes, "Meet our team", blog, formulário de agendamento e fotos de banco. O contato é feito por WhatsApp, e-mail e Instagram, sem formulário.

## Não usar das imagens do Instagram

- Print da videochamada (aparece interface do app).
- Cenários institucionais (SEPA, Centro Anita Garibaldi, Justiça Federal) como se fossem vínculos ou áreas de atuação.
- Curtidas, seguidores e comentários como prova social.
