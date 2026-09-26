# Eficácia comercial do site — diagnóstico, medição e próximos passos

> Este site é o consultório digital de uma psicóloga (pessoa física, saúde, regulada pelo CFP), não uma empresa B2B.
> "Conversão" aqui é **um paciente (ou responsável) iniciar uma conversa** pelo WhatsApp. Cada decisão abaixo
> aplica isso ao contexto real, dentro do que a profissão permite.

## 1. O negócio, separando fato de inferência

| Confirmado no projeto | Inferência razoável | Falta |
|---|---|---|
| Psicóloga clínica, CRP 17/9333, UFRN, fenomenologia-existencial | Atendimento **individual** (o site não diz) | Valores, forma de pagamento |
| Natal/RN: presencial no Espaço Possibilitar (Tirol Way Office) e online (Meet, link pelo WhatsApp) | Visitantes chegam do Instagram, do Google e de indicação | Convênio/reembolso, horários, cancelamento |
| Crianças, adolescentes, adultos e idosos | Quem procura terapia costuma hesitar por preço, medo do primeiro dia e dúvida sobre sigilo | Demandas que ela quer receber (ansiedade, luto…) |
| Sessões semanais de 50 min; 1ª conversa dedicada a conhecer a pessoa | Ela é psicóloga em início de carreira (formação recente) | Títulos, pós, supervisão, e-Psi |
| Contato: WhatsApp (principal), e-mail, Instagram; sem formulário | | Tempo de resposta |

**Ação de conversão esperada:** clique no WhatsApp → conversa → conversa inicial → sessões semanais.
O que acontece depois do clique (resposta, agenda) está fora do site e é onde a conversão realmente se fecha.

## 2. Restrições profissionais (não são "opinião de marketing")

Pesquisa nas fontes do sistema Conselhos (CFP e CRPs) e a **Nota Técnica CFP 1/2022**:

- **Depoimentos de pacientes não devem ser usados** em divulgação, mesmo com consentimento. Por isso o site **não terá** prova social do tipo "avaliações". A confiança vem de evidências verificáveis (registro, formação, local real, processo transparente).
- Preço pode ser **informado**, mas não usado como propaganda: nada de "desconto", "primeira sessão grátis", "valor acessível", "vagas limitadas".
- Sem promessa de resultado nem sensacionalismo. O texto atual já cumpre ("não trabalho com promessas").
- Vale conferir com o **CRP-17** antes de publicar (a Alice é a responsável ética pelo conteúdo).

## 3. Funil (adaptado)

```
DESCOBERTA  →  ENTENDIMENTO  →  CONFIANÇA  →  AVALIAÇÃO  →  INTENÇÃO  →  CONTATO  →  CONVERSA (lead)
Instagram/     "quem é, onde,    CRP, UFRN,    como é a 1ª    seção de     clique no    (fora do site:
Google/        como, para quem"  foto real,    conversa,      contato      WhatsApp/    Alice conta)
indicação      (Hero)            endereço      sigilo, FAQ                 e-mail
```

**Onde estava fraco:** *Entendimento*. A cidade e a modalidade só apareciam de 4 a 6 telas abaixo.
**Onde continua fraco:** *Avaliação* — a pergunta mais comum de quem nunca fez terapia (valor) não tem resposta.

### Profundidade de informação (medida por script, celular 390×844)

"DOBRA" = visível na primeira tela. Números = telas de rolagem até a primeira resposta.

| Pergunta do paciente | Antes | Depois |
|---|---|---|
| Onde atende (cidade)? | 6,3* | **DOBRA** |
| Presencial ou online? | 6,2 | **DOBRA** |
| Para quem (idades)? | 1,5 | **DOBRA** |
| Como dou o primeiro passo? | 5,3 | **DOBRA** |
| Duração/frequência das sessões | 5,9 | 1,7 |
| Como é a primeira conversa? | 5,5 | 4,1 |
| Sigilo | ausente | 10,3 (FAQ) |
| Valor / convênio / cancelamento | ausente | **ausente — falta informação** |
| Demandas (ansiedade, luto…) | 8,1 | 8,3 |

\* "Natal" aparecia antes só em "UFRN, campus Natal" (formação), não como local de atendimento.

## 4. Jornadas simuladas (versão anterior à otimização)

**A — Adulto com ansiedade, busca "psicóloga em Natal" no Google.** Primeira impressão: acolhedora e profissional. Entende quem é a Alice. *Não* vê "Natal", nem presencial/online, nem preço. Palavra "ansiedade" só na Trajetória (8 telas), como experiência passada. Objeções: quanto custa? é perto? funciona online? Provável saída: volta ao Google e abre outra profissional.

**B — Mãe/pai procurando psicóloga para uma criança.** "Crianças" aparece na faixa (1,5 tela). A foto com livro de ludoterapia ajuda. Falta: como é o atendimento infantil, como os pais participam (informação da Alice).

**C — Visitante do Instagram que quer conferir credenciais.** É o melhor caso: CRP no topo, UFRN, símbolo, tom coerente com os posts. Falta um caminho de verificação pública do CRP e informação sobre atendimento online cadastrado (e-Psi).

**D — Familiar buscando atendimento para pessoa idosa.** Mesmo caso do B para "idosos".

## 5. O que foi implementado (e por quê)

| Mudança | Serve a |
|---|---|
| Hero: "Alice Lins · Natal/RN" + "Presencial em Natal/RN e online" + público + "Uma mensagem pelo WhatsApp já é suficiente para começar" | ENTENDER, AGIR |
| Faixa de credenciais: "Público" subiu para o Hero; entra "Sessões: semanais, de 50 minutos" | ENTENDER |
| Seção **Atendimento** subiu para logo após o Sobre; menu "Atendimento" (saiu "Símbolo" do menu, a seção segue na página) | ENTENDER, AGIR |
| FAQ: "presencial ou online?", "como é a primeira conversa?", "as conversas são sigilosas?" (ordem = dúvidas de quem nunca fez terapia) | CONFIAR |
| Resumo (Onde · Como · Sessões · Primeiro passo) logo antes do botão final | AGIR (menos incerteza na decisão) |
| Rodapé: endereço, mapa e modalidade | CONFIAR (local real e verificável) |
| Título/descrição de busca com cidade, modalidade e público; dados estruturados (ProfessionalService) | DESCOBRIR |
| Medição de eventos (sem cookies, sem envio externo) | Aprender com dados reais |

**Deliberadamente não feito:** depoimentos, avaliações, contador de pacientes, urgência/escassez, formulário (decisão do cliente), blog, novas páginas "por volume de busca".

## 6. CTAs

- **Primário único:** WhatsApp ("Vamos conversar?" — voz da própria Alice). Aparece no cabeçalho (sempre visível, também no celular), Hero, FAQ, seção final e rodapé.
- **Secundários:** "Conhecer minha abordagem" (Hero e Sobre), e-mail e Instagram (seção final), Google Maps (Atendimento).
- Sem CTAs concorrendo: o único botão preenchido em cada dobra é o do WhatsApp.
- Fricção de contato: 1 clique até o WhatsApp com mensagem pré-preenchida ("Vim pelo seu site…", o que também permite à Alice saber a origem).

## 7. SEO com intenção comercial

| Intenção | Exemplos (a validar com uma ferramenta de volume) | Cobertura hoje |
|---|---|---|
| Marca | "Alice Lins psicóloga", "psialicelins" | Título, H1, Instagram, dados estruturados |
| Serviço + local | "psicóloga clínica Natal", "psicóloga Tirol Natal", "psicoterapia online Natal" | Título, descrição, Hero, rodapé |
| Público | "psicóloga infantil / adolescentes / idosos Natal" | Hero (público), sem página própria |
| Abordagem | "psicólogo fenomenológico existencial Natal", "o que é fenomenologia existencial" | Seção Abordagem + FAQ |
| Educacional | "como funciona a primeira sessão de terapia", "terapia online funciona?" | FAQ (parcial) |

**Realidade do mercado:** os primeiros resultados para "psicóloga Natal" são diretórios (Doctoralia, Psitto, MundoPsicologos, Mindee, PsicoNatal) e clínicas. Um site novo de uma única profissional não vence esses termos genéricos no curto prazo. As alavancas de maior impacto **não estão no código**:

1. **Google Meu Negócio** (perfil local) com o mesmo nome, endereço e telefone do site. É o principal para "perto de mim".
2. Cadastro consistente em 1–2 diretórios (mesmos dados) e link do site no Instagram e no Linktree.
3. Depois do domínio próprio: `canonical`, `sitemap.xml`, `robots.txt` e imagem de compartilhamento.
4. Conteúdo educativo só se a Alice quiser e dentro das regras do CFP ("caráter educativo").

## 8. Plano de medição

**Implementado no código** (`BaseLayout.astro`): publica em `window.dataLayer` (compatível com Google Tag Manager/GA4) e em `window.plausible`, se existir. Não envia nada para fora, não usa cookies e não guarda dados pessoais.

| Evento | Parâmetros | Pergunta que responde |
|---|---|---|
| `contact_click` | `channel` = whatsapp · email · instagram · instagram_espaco · google_maps; `location` = header · inicio · atendimento · duvidas · contato · footer | Quantas pessoas tentam falar e por onde |
| `faq_open` | `question` | Quais dúvidas pesam antes de contatar |
| `section_view` | `section` = atendimento · duvidas · contato | Até onde a leitura chega |

**Funil mensurável:** Visita → viu *Atendimento* → viu *Dúvidas* → viu *Contato* → `contact_click`. O último passo (conversa que virou paciente) só a Alice observa: pedir que anote "veio pelo site" (a mensagem pré-preenchida já ajuda).

**Para de fato ver os números falta instalar uma ferramenta** (não inventei credenciais). Sugestão por privacidade (LGPD) e simplicidade:

- **Cookieless** (Plausible, Umami ou Cloudflare Web Analytics): sem faixa de cookies, código de 1 linha; os eventos acima já funcionam com `plausible`.
- **GTM + GA4**: mais completo, mas exige aviso/consentimento de cookies e política de privacidade.
- **Netlify Analytics**: sem código, mede visitas no servidor, não mede cliques.
- Em qualquer caso, publicar uma **página de política de privacidade** (LGPD) — também é um sinal de confiança.

## 9. Informações que o negócio precisa fornecer (nada disso foi inventado)

**Alto impacto na conversão**
1. **Valor da sessão** e formas de pagamento (informar é permitido; sem promoção). É a dúvida nº 1.
2. **Convênio/reembolso** (emite recibo/nota para reembolso?).
3. **Cancelamento e remarcação** (política, se quiser publicar).
4. **Horários/turnos** aproximados e **tempo médio de resposta** no WhatsApp.
5. **Demandas** que deseja receber (ansiedade, luto, medo, sobrecarga…). Hoje só aparecem como experiência passada na Trajetória; é o que quem busca "por problema" procura.
6. **Como é o atendimento de crianças e adolescentes** (participação dos pais, primeira sessão) e se atende casais/famílias.

**Confiança**
7. Pós-graduação, cursos, supervisão, extensão/pesquisa com título comprovável.
8. **Cadastro e-Psi** (atendimento online) e o link oficial de consulta pública do CRP.
9. Foto do espaço de atendimento (com autorização do Espaço Possibilitar).
10. Aprovação dos textos sensíveis: sigilo, CVV/SAMU e "primeira conversa" em 2ª pessoa.

**Do lado da Systagma:** o crédito "Site criado pela Systagma" é um canal de aquisição do estúdio. Passando a URL, ele vira link (com `rel` adequado).

## 10. Próximos experimentos (hipóteses, não resultados)

Volume esperado é baixo; por isso testes sequenciais (antes/depois de algumas semanas), não A/B simultâneo.

1. **Valor visível vs. "a combinar"** — hipótese: publicar o valor aumenta cliques mais qualificados. Medir: `contact_click` por semana + relato da Alice.
2. **Rótulo do CTA**: "Vamos conversar?" vs. "Agendar uma conversa inicial".
3. **Mensagem pré-preenchida** mais específica ("Gostaria de saber sobre atendimento presencial/online") para reduzir o vai-e-vem inicial.
4. **Seção "Com o que posso ajudar"** (depois de a Alice escolher as demandas): esperar mais `section_view` de leitura e mais contatos vindos do Google.
5. **Foto do consultório** na seção Atendimento.
6. Comparar `contact_click` por `location` para decidir se o cabeçalho, o Hero ou a seção final concentra a decisão.

*Nenhuma dessas hipóteses foi validada; não há dados de conversão reais ainda.*
