# Colaberry Enterprise

`systemId: colaberry-enterprise` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Enterprise learning and capability programs.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">`
2. Link `dist/colaberry-enterprise.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#F8F8F7` | `#0F0F0F` |
| bgElevated | `#FFFFFF` | `#1A1A1A` |
| fg | `#1A1A1A` | `#F4F4F4` |
| fgMuted | `#6B6B6B` | `#B4B4B4` |
| accent | `#2E6A86` | `#6F9DB6` |
| accentContrast | `#FFFFFF` | `#0F1E28` |
| accentSoft | `#EAF2F6` | `#1A3947` |
| line | `#D8D8D8` | `#2E2E2E` |
| success | `#468A2E` | `#8AC759` |
| warning | `#B26E00` | `#F0A93A` |
| danger | `#E5121D` | `#FF6B72` |

Type: **Roboto** headings / **Roboto** body (Apache-2.0 (Google Fonts)) · scale 16px × 1.25 · radius 8px · shadow `0 3px 8px rgba(26,26,26,0.06), 0 1px 3px rgba(26,26,26,0.04)`

## Motion
Composed — measured, quiet fades; nothing bounces.

| Role | Value | Used for |
|---|---|---|
| fast | `120ms` | hover, press, toggles |
| base | `200ms` | menus, toasts, accordions |
| slow | `300ms` | modals, view changes |

Easing: standard `cubic-bezier(0.4,0,0.2,1)` · enter `cubic-bezier(0,0,0.2,1)` · exit `cubic-bezier(0.4,0,1,1)` · press scale 0.985 · enter distance 8px.
Exits run at fast with the exit curve. `prefers-reduced-motion` collapses all motion — guaranteed by the stylesheet.

## Rules
- Reference semantic tokens (`--bg`, `--accent`, …), never raw hex.
- One filled primary action per view; accent marks only primary action + active state.
- Touch targets ≥ 44px; fgMuted is the lightest text allowed on bg.
- Motion uses the `--motion-*` / `--ease-*` tokens (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); never hand-pick durations.
- All five AA pairs are guaranteed by these values in both modes (measured ratios: `exports/`).
- Voice: calm, authoritative, proof-led; sentence case, no emoji.

## Prompt recipe
> Using the Colaberry Enterprise design system: link `dist/colaberry-enterprise.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: calm, authoritative, proof-led; sentence case, no emoji. Build: [what you want].
