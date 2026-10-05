# Refactored.ai — Option A — Terminal

`systemId: refactored-a` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Platform infrastructure for AI-driven learning products.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`
2. Link `dist/refactored-a.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#F7FAFC` | `#0C141B` |
| bgElevated | `#FFFFFF` | `#14202A` |
| fg | `#16222C` | `#E8F0F6` |
| fgMuted | `#4E6172` | `#9FB3C2` |
| accent | `#1F76B4` | `#5CA7DA` |
| accentContrast | `#FFFFFF` | `#06202F` |
| accentSoft | `#DDEEF9` | `#123246` |
| line | `#D5E0E8` | `#263743` |
| success | `#1A7F37` | `#4AC26B` |
| warning | `#9A6700` | `#D4A72C` |
| danger | `#C93C37` | `#F2655F` |

Type: **IBM Plex Mono** headings / **IBM Plex Sans** body (OFL (Google Fonts)) · scale 16px × 1.2 · radius 4px · shadow `0 1px 2px rgba(8,12,16,0.24)`

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
> Using the Refactored.ai design system: link `dist/refactored-a.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: plain, precise, engineer-credible; no hype. Build: [what you want].
