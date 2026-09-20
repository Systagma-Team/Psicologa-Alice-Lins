# Psychologist Web Design — Implementation Guide

## 1. Fonte principal

Este kit parte do projeto público **Psychologist Web Design**, de **Designs Xpert**, publicado no Behance em 05/02/2024.

Behance:
https://www.behance.net/gallery/190809487/Psychologist-Web-Design

O próprio projeto declara uso de **Figma** e **Adobe Photoshop** e está categorizado com termos como psychologist, psychology, therapy, Health, doctor, psychologist website, UI/UX e Web Design.

## 2. O que foi realmente extraído

- metadados do projeto;
- ferramentas declaradas;
- tags do projeto;
- os cinco URLs de imagem-fonte usados pelas pranchas do Behance.

Consulte `assets/source-assets.json`.

## 3. O que não está disponível como dado estruturado

A página pública não expõe em texto:
- família tipográfica exata;
- pesos tipográficos exatos;
- paleta hexadecimal;
- variables/tokens do Figma;
- componentes e variants;
- constraints/auto-layout;
- assets internos isolados quando a prancha é uma imagem achatada.

Por isso esses itens NÃO são chamados de extração exata neste pacote.

## 4. Hierarquia de autoridade para implementação

1. `assets/downloaded/*.png` depois que os cinco boards forem baixados.
2. `reference-board.html`.
3. `design-system/*` como camada de implementação reconstruída.
4. Decisões da aplicação/projeto existente.

Quando houver conflito visual entre os tokens reconstruídos e a prancha original, a prancha original vence.

## 5. Arquitetura recomendada

```text
Site
├─ Header
│  ├─ Logo / nome profissional
│  ├─ Navegação
│  └─ CTA de contato/agendamento
├─ Hero
│  ├─ Posicionamento profissional
│  ├─ Texto de acolhimento
│  ├─ CTA
│  └─ Foto profissional
├─ Sobre
│  ├─ Biografia
│  ├─ Formação
│  └─ Registro profissional
├─ Áreas de atuação
│  └─ SpecialtyCard[]
├─ Abordagem / Como funciona
├─ Modalidades de atendimento
├─ FAQ
├─ CTA final
└─ Footer
```

## 6. Regras de UX para um psicólogo

- Priorizar confiança, legibilidade e calma sobre efeitos visuais.
- Evitar linguagem que prometa cura, resultado ou transformação garantida.
- A formação, registro e especialidades devem ser dados reais do profissional.
- Não inventar depoimentos, números de pacientes, avaliações ou certificações.
- Não usar ilustrações dramáticas de sofrimento como elemento promocional.
- Formulários devem coletar apenas o mínimo necessário para contato inicial.
- Informações sensíveis devem ser tratadas conforme a infraestrutura real do projeto.
- Se houver botão de WhatsApp, não sugerir que ele é um canal de emergência.
- O site não deve se apresentar como atendimento de emergência/crise salvo se esse serviço realmente existir.

## 7. Responsividade

Desktop:
- grid editorial;
- hero com texto + retrato;
- bastante respiro;
- conteúdo de leitura entre 620–760px.

Mobile:
- uma coluna;
- CTA de contato facilmente alcançável;
- títulos sem quebras artificiais rígidas;
- cards empilhados;
- menu simples;
- preservar dados profissionais antes de blocos puramente promocionais.

## 8. Assets

Execute:

### Windows
```powershell
cd assets
Set-ExecutionPolicy -Scope Process Bypass
.\download-assets.ps1
```

### macOS/Linux
```bash
cd assets
chmod +x download-assets.sh
./download-assets.sh
```

O ambiente usado para montar este pacote não conseguiu resolver o CDN do Behance diretamente, por isso os cinco URLs originais e os scripts de download foram preservados no pacote.
