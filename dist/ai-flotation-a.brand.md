# AI Flotation — Option A — Forge

`systemId: ai-flotation-a` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Workflow intake to delivered system.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Archivo:wght@400;500;600&display=swap" rel="stylesheet">`
2. Link `dist/ai-flotation-a.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#F7F6F4` | `#121110` |
| bgElevated | `#FFFFFF` | `#1C1A18` |
| fg | `#1A1917` | `#EDEAE6` |
| fgMuted | `#56524B` | `#ADA79E` |
| accent | `#BA430E` | `#F0813C` |
| accentContrast | `#FFFFFF` | `#221206` |
| accentSoft | `#FBE4D5` | `#3A2313` |
| line | `#DEDAD3` | `#35322E` |
| success | `#1F7A3D` | `#57BE7C` |
| warning | `#8F6400` | `#DFA83E` |
| danger | `#BB3131` | `#F0736B` |

Type: **Space Grotesk** headings / **Archivo** body (OFL (Google Fonts)) · scale 16px × 1.3 · radius 2px · shadow `0 1px 2px rgba(20,18,16,0.30)`

## Motion
Decisive — crisp, immediate, no flourish.

| Role | Value | Used for |
|---|---|---|
| fast | `80ms` | hover, press, toggles |
| base | `140ms` | menus, toasts, accordions |
| slow | `210ms` | modals, view changes |

Easing: standard `cubic-bezier(0.3,0,0,1)` · enter `cubic-bezier(0.16,0,0,1)` · exit `cubic-bezier(0.4,0,1,1)` · press scale 0.99 · enter distance 5px.
Exits run at fast with the exit curve. `prefers-reduced-motion` collapses all motion — guaranteed by the stylesheet.

## Rules
- Reference semantic tokens (`--bg`, `--accent`, …), never raw hex.
- One filled primary action per view; accent marks only primary action + active state.
- Touch targets ≥ 44px; fgMuted is the lightest text allowed on bg.
- Motion uses the `--motion-*` / `--ease-*` tokens (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); never hand-pick durations.
- All five AA pairs are guaranteed by these values in both modes (measured ratios: `exports/`).
- Voice: confident, spare, concrete; sells competence, not inspiration.

## Prompt recipe
> Using the AI Flotation design system: link `dist/ai-flotation-a.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: confident, spare, concrete; sells competence, not inspiration. Build: [what you want].
