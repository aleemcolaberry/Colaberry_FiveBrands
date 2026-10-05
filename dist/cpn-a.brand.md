# Career Pathways Network — Option A — Grove

`systemId: cpn-a` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Scholarships and career pathways, built on dignity and access.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet">`
2. Link `dist/cpn-a.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#FFFDF8` | `#101311` |
| bgElevated | `#FFFFFF` | `#1A1E1A` |
| fg | `#1C1B18` | `#F3F1E9` |
| fgMuted | `#4E4B42` | `#B9B5A6` |
| accent | `#1D6A4C` | `#5CC08E` |
| accentContrast | `#FFFFFF` | `#0B2417` |
| accentSoft | `#DFF0E6` | `#17352A` |
| line | `#DDD8CB` | `#33382F` |
| success | `#256C3A` | `#6BCB93` |
| warning | `#8A5A00` | `#E3B341` |
| danger | `#B3261E` | `#F0736B` |

Type: **Bitter** headings / **Atkinson Hyperlegible** body (OFL (Google Fonts)) · scale 17px × 1.333 · radius 12px · shadow `0 1px 4px rgba(28,27,24,0.14)`

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
> Using the Career Pathways Network design system: link `dist/cpn-a.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: dignified, plain language, direct; never charity tropes. Build: [what you want].
