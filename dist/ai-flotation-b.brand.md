# AI Flotation — Option B — Harbor

`systemId: ai-flotation-b` — registry.json maps this ID to the tokens, stylesheet, email, payload and assets of this system.

Workflow intake to delivered system.

## Use it
1. Load fonts: `<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet">`
2. Link `dist/ai-flotation-b.css` — CSS variables + `.b-*` components (btn, input, field, card, badge, alert).
3. Dark mode: `data-theme="dark"` on `<html>`. Hover/press/focus states are derived automatically.

## Tokens
| Token | Light | Dark |
|---|---|---|
| bg | `#F6F8F7` | `#0E1413` |
| bgElevated | `#FFFFFF` | `#17201E` |
| fg | `#14201D` | `#E9EFED` |
| fgMuted | `#4C5B57` | `#A2B1AC` |
| accent | `#0E6E63` | `#46C2AF` |
| accentContrast | `#FFFFFF` | `#062B25` |
| accentSoft | `#D8EEE9` | `#123B35` |
| line | `#D6DEDB` | `#2C3936` |
| success | `#1F7A3D` | `#57BE7C` |
| warning | `#8F6400` | `#DFA83E` |
| danger | `#BB3131` | `#F0736B` |

Type: **Manrope** headings / **Manrope** body (OFL (Google Fonts)) · scale 16px × 1.3 · radius 6px · shadow `0 1px 3px rgba(10,20,18,0.18)`

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
> Using the AI Flotation design system: link `dist/ai-flotation-b.css`, use the `.b-*` components or the CSS variables, keep one filled primary action per view, support `data-theme="dark"`, 44px touch targets, motion via the `--motion-*`/`--ease-*` tokens. Voice: confident, spare, concrete; sells competence, not inspiration. Build: [what you want].
