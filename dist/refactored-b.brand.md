# Refactored.ai — Option B — Geometric

`systemId: refactored-b` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Platform infrastructure for AI-driven learning products.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap" rel="stylesheet">`
2. Link `dist/refactored-b.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#FAFAFA` | `#101214` |
| bgElevated | `#FFFFFF` | `#191C1F` |
| fg | `#191C1F` | `#EAEDEF` |
| fgMuted | `#535A61` | `#A3AAB1` |
| accent | `#256FA6` | `#7CBCE8` |
| accentContrast | `#FFFFFF` | `#0A2434` |
| accentSoft | `#E1EFF8` | `#173248` |
| line | `#DDDFE2` | `#2C3136` |
| success | `#1A7F37` | `#4AC26B` |
| warning | `#9A6700` | `#D4A72C` |
| danger | `#C93C37` | `#F2655F` |

Type: **Outfit** headings / **Outfit** body (OFL (Google Fonts)) · scale 16px × 1.25 · radius 8px · shadow `0 2px 6px rgba(12,16,20,0.10)`

## Motion
Instrumental — fast and exact; nothing decorative.

| Role | Value | Used for |
|---|---|---|
| fast | `90ms` | hover, press, toggles |
| base | `160ms` | menus, toasts, accordions |
| slow | `240ms` | modals, view changes |

Easing: standard `cubic-bezier(0.2,0,0,1)` · enter `cubic-bezier(0,0,0.2,1)` · exit `cubic-bezier(0.3,0,1,1)` · press scale 0.99 · enter distance 6px.
Exits run at fast with the exit curve. `prefers-reduced-motion` collapses all motion — guaranteed by the stylesheet.

## Rules
- Reference semantic tokens (`--bg`, `--accent`, …), never raw hex.
- One filled primary action per view; accent marks only primary action + active state.
- Touch targets ≥ 44px; fgMuted is the lightest text allowed on bg.
- Motion uses the `--motion-*` / `--ease-*` tokens (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); never hand-pick durations.
- All five AA pairs are guaranteed by these values in both modes (measured ratios: `exports/`).
- Voice: plain, precise, engineer-credible; no hype.

## Prompt recipe
> Using the Refactored.ai design system: link `dist/refactored-b.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: plain, precise, engineer-credible; no hype. Build: [what you want].
