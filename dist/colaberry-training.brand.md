# Colaberry Training

`systemId: colaberry-training` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Open-enrollment classes and the free-class funnel.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">`
2. Link `dist/colaberry-training.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#FDF8F4` | `#171210` |
| bgElevated | `#FFFFFF` | `#221B18` |
| fg | `#1A1A1A` | `#F6EFEA` |
| fgMuted | `#6B6B6B` | `#B8ACA4` |
| accent | `#E5121D` | `#FD5760` |
| accentContrast | `#FFFFFF` | `#2B0508` |
| accentSoft | `#FFDBDD` | `#3A1214` |
| line | `#E8DED6` | `#382E29` |
| success | `#468A2E` | `#8AC759` |
| warning | `#B26E00` | `#F0A93A` |
| danger | `#C20E1E` | `#FF8A90` |

Type: **Roboto** headings / **Roboto** body (Apache-2.0 (Google Fonts)) · scale 17px × 1.28 · radius 16px · shadow `0 3px 8px rgba(122,16,22,0.08), 0 1px 3px rgba(26,26,26,0.04)`

## Motion
Encouraging — warm, a little springy on arrival.

| Role | Value | Used for |
|---|---|---|
| fast | `140ms` | hover, press, toggles |
| base | `230ms` | menus, toasts, accordions |
| slow | `360ms` | modals, view changes |

Easing: standard `cubic-bezier(0.35,0,0.15,1)` · enter `cubic-bezier(0.34,1.3,0.64,1)` · exit `cubic-bezier(0.4,0,1,1)` · press scale 0.97 · enter distance 14px.
Exits run at fast with the exit curve. `prefers-reduced-motion` collapses all motion — guaranteed by the stylesheet.

## Rules
- Reference semantic tokens (`--bg`, `--accent`, …), never raw hex.
- One filled primary action per view; accent marks only primary action + active state.
- Touch targets ≥ 44px; fgMuted is the lightest text allowed on bg.
- Motion uses the `--motion-*` / `--ease-*` tokens (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); never hand-pick durations.
- All five AA pairs are guaranteed by these values in both modes (measured ratios: `exports/`).
- Voice: warm, encouraging, speak to "you"; no emoji.

## Prompt recipe
> Using the Colaberry Training design system: link `dist/colaberry-training.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: warm, encouraging, speak to "you"; no emoji. Build: [what you want].
