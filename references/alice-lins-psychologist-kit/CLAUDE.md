# CLAUDE.md — Psychologist Website

## Mission

Build a professional psychologist website using the visual project in:
`psychologist-behance-kit/`

The visual reference is the Behance project:
https://www.behance.net/gallery/190809487/Psychologist-Web-Design

## Mandatory reading before UI implementation

Read:
- `README.md`
- `IMPLEMENTATION.md`
- `SOURCES.md`
- `design-system/colors.json`
- `design-system/typography.json`
- `design-system/spacing.json`
- `design-system/radii.json`
- `design-system/components.json`
- `design-system/content-architecture.json`
- `design-system/tokens.css`
- `docs/copy-guidelines.md`
- `docs/accessibility.md`
- `assets/source-assets.json`

Then inspect all images in `assets/downloaded/` if present.

If the images have not been downloaded yet, run the appropriate asset script before claiming visual fidelity.

## Source hierarchy

1. Downloaded Behance boards are the visual source of truth.
2. Source metadata/manifests are factual.
3. Design-system token values are reconstructed implementation defaults.
4. Existing project architecture and reusable components must be respected.

Do not call reconstructed colors or fonts "the original Behance tokens".

## Before coding

Analyze the existing repository and report:
1. framework and styling stack;
2. routes/pages;
3. reusable components;
4. current token/theme system;
5. asset handling;
6. implementation plan.

Do not replace an existing design system blindly.

## Implementation rules

- Reproduce the Behance visual language as closely as the available source boards support.
- Reuse real source imagery when usable.
- Do not create fake professional credentials.
- Do not create fake testimonials.
- Do not create fake patient counts or review ratings.
- Do not promise psychological/medical outcomes.
- Use accessible semantic HTML.
- Keep contact/booking clear but not aggressive.
- Make desktop, tablet and mobile intentional.
- Use tokens instead of repeating raw values.
- Keep repeated blocks as reusable components.
- Preserve content readability over decorative effects.
- Avoid generic SaaS dashboards or hospital aesthetics unless the boards clearly show them.

## Content placeholders

Any field that depends on the real professional must remain clearly marked, for example:
- `[NOME DO PROFISSIONAL]`
- `[CRP/REGISTRO]`
- `[ABORDAGEM]`
- `[FORMAÇÃO]`
- `[ÁREAS DE ATUAÇÃO]`
- `[CIDADE]`
- `[CONTATO]`

Never invent these.

## Validation

After each major page:
- compare against the downloaded source boards;
- verify responsive behavior;
- verify text contrast;
- verify keyboard focus;
- verify image cropping;
- verify no unsupported medical claims were introduced.


# Client-specific layer — Alice Lins

A real client profile now exists in `client-profile/`.

Before writing any page copy or professional information, read:

- `client-profile/professional-data.json`
- `client-profile/brand-voice.json`
- `client-profile/visual-identity.json`
- `client-profile/content-to-site-map.json`
- `client-profile/WEBSITE-COPY.md`
- `client-profile/SOURCE-NOTES.md`
- `client-profile/brand-overrides.css`

Also inspect the screenshots in:
`client-profile/sources/instagram/`

## Priority order

For CLIENT FACTS:
1. `client-profile/` source-derived data
2. user-provided project content
3. placeholders
4. NEVER invent missing professional data

For VISUAL LAYOUT:
1. Behance source boards
2. Alice's Instagram visual identity
3. reconstructed design-system defaults

For BRAND COLORS:
- Alice's actual brand identity overrides the generic reconstructed sage palette.
- Use `client-profile/brand-overrides.css` as the preferred semantic color layer.
- Do not claim approximate screenshot colors are exact Pantone/brand-master values.

## Confirm-before-publish items

Do not state as current services until confirmed:
- all age groups;
- presencial and online availability;
- luto, ansiedade, medo and sobrecarga as formal specialties;
- office location;
- scheduling availability.

These appear as experience in Alice's presentation post, not necessarily as current service offerings.

## Voice

Keep copy:
- reflective;
- warm;
- existential;
- grounded;
- non-commercial;
- free from promises of cure or guaranteed outcomes.

Prefer Alice's own conceptual vocabulary: escuta, presença, existência, dignidade, movimento, processo, construção, fluxo, abertura, caminhar junto.
