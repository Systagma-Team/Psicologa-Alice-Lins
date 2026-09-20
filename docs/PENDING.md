# Pendências para publicar o site da Alice

Nada abaixo foi inventado: cada item aguarda confirmação ou arquivo da Alice.

## Arquivos (assets)

| Item | Onde entra | Situação atual |
|---|---|---|
| Foto profissional em alta resolução (retrato de estúdio) | `src/assets/photos/alice-portrait-provisional.jpg` (Hero) | **Provisória**: recorte de screenshot do Instagram (`scripts/crop-portrait.mjs`). Trocar o arquivo e, se preciso, o import em `ProfessionalPortrait.astro`. |
| Segunda foto (ex.: formatura ou consultório) | Seção "Sobre" | Hoje mostra uma frase dela; há espaço para uma foto. |
| **Símbolo original (SVG/PNG)**, versões clara e escura | `src/assets/brand/symbol.svg` (ou `.png`/`.webp`) | Espaço reservado; o arquivo é detectado automaticamente. **Não redesenhar.** |
| Favicon / imagem de compartilhamento (Open Graph) | `public/favicon.svg` | Favicon provisório (monograma "A"). |
| Fontes oficiais da marca (se existirem) | `src/styles/tokens.css` | Fraunces e Figtree são **substitutas**. |
| Paleta oficial | `src/styles/tokens.css` | Só `#521A1B` foi amostrado; o restante é aproximação. |

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
