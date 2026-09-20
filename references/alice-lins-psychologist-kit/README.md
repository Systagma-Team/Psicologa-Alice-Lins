# Psychologist Behance Kit

Implementation/reference package built from the public Behance project **Psychologist Web Design** by **Designs Xpert**.

Source:
https://www.behance.net/gallery/190809487/Psychologist-Web-Design

## Most important files

- `CLAUDE.md` — persistent instructions for Claude Code.
- `CLAUDE-START-PROMPT.md` — first prompt to use with Claude.
- `reference-board.html` — loads all five original Behance boards in one page.
- `IMPLEMENTATION.md` — architecture and implementation rules.
- `SOURCES.md` — exact source URLs and extraction limits.
- `assets/source-assets.json` — machine-readable source manifest.
- `assets/download-assets.ps1` — Windows asset downloader.
- `assets/download-assets.sh` — macOS/Linux asset downloader.
- `design-system/tokens.css` — reconstructed CSS tokens.
- `styleguide.html` — preview of the reconstructed implementation system.

## Important distinction

### Source-derived
- project metadata;
- Figma/Photoshop tool declaration;
- project tags;
- five original public Behance source-board URLs.

### Reconstructed
- semantic color palette;
- font substitutes;
- spacing;
- radii;
- component architecture;
- page/content architecture.

The reconstructed values are intentionally marked as reconstructed and must be visually checked against the five original boards.

## Windows asset download

```powershell
cd assets
Set-ExecutionPolicy -Scope Process Bypass
.\download-assets.ps1
```

## macOS/Linux asset download

```bash
cd assets
chmod +x download-assets.sh
./download-assets.sh
```

The images will be saved under `assets/downloaded/`.

## Using with Claude Code

Put the entire folder inside the repository, for example:

```text
your-project/
├─ src/
├─ public/
├─ package.json
└─ references/
   └─ psychologist-behance-kit/
```

Then tell Claude to read:
`references/psychologist-behance-kit/CLAUDE.md`

You can also paste the contents of `CLAUDE-START-PROMPT.md` as the first task prompt.


## Alice Lins client layer

This version includes a real client-specific layer based on Instagram screenshots supplied by the project owner.

See `client-profile/`.

The Behance case should now be treated primarily as **layout/UI inspiration**, while Alice's own public identity, language, professional data and visual branding take priority for the final website.
