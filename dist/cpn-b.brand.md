# Career Pathways Network — Option B — Vestry

`systemId: cpn-b` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Scholarships and career pathways, built on dignity and access.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,700&family=Public+Sans:wght@400;600&display=swap" rel="stylesheet">`
2. Link `dist/cpn-b.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#FCFAF7` | `#14111A` |
| bgElevated | `#FFFFFF` | `#1E1927` |
| fg | `#221D28` | `#F1EDF6` |
| fgMuted | `#57505F` | `#B3ABC0` |
| accent | `#6D4CA3` | `#B197E0` |
| accentContrast | `#FFFFFF` | `#1D1030` |
| accentSoft | `#EDE6F7` | `#2C2140` |
| line | `#DFD9D2` | `#362E44` |
| success | `#256C3A` | `#6BCB93` |
| warning | `#8A5A00` | `#E3B341` |
| danger | `#B3261E` | `#F0736B` |

Type: **Source Serif 4** headings / **Public Sans** body (OFL (Google Fonts)) · scale 17px × 1.3 · radius 12px · shadow `0 1px 4px rgba(30,24,38,0.14)`

## Motion
Steady — calm and unhurried; nothing startles.

| Role | Value | Used for |
|---|---|---|
| fast | `170ms` | hover, press, toggles |
| base | `280ms` | menus, toasts, accordions |
| slow | `420ms` | modals, view changes |

Easing: standard `cubic-bezier(0.45,0.05,0.25,1)` · enter `cubic-bezier(0.25,0,0.2,1)` · exit `cubic-bezier(0.5,0,0.8,1)` · press scale 0.985 · enter distance 10px.
Exits run at fast with the exit curve. `prefers-reduced-motion` collapses all motion — guaranteed by the stylesheet.

## Rules
- Reference semantic tokens (`--bg`, `--accent`, …), never raw hex.
- One filled primary action per view; accent marks only primary action + active state.
- Touch targets ≥ 44px; fgMuted is the lightest text allowed on bg.
- Motion uses the `--motion-*` / `--ease-*` tokens (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); never hand-pick durations.
- All five AA pairs are guaranteed by these values in both modes (measured ratios: `exports/`).
- Voice: dignified, plain language, direct; never charity tropes.

## Prompt recipe
> Using the Career Pathways Network design system: link `dist/cpn-b.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: dignified, plain language, direct; never charity tropes. Build: [what you want].
