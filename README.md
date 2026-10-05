# Colaberry Five Brands: multi-brand token system

One shared component library, five public brands. Each brand's look is stored as data (design tokens), so the same buttons, inputs, cards and emails render correctly for every brand in light and dark mode.

**Live viewer:** https://aleemcolaberry.github.io/Colaberry_FiveBrands/

The viewer shows every brand side by side: specimen components, logos, a login screen, the family line-up, the contrast audit, raw tokens, the component kit, email shells and the original brief.

## The request

In August 2026 the platform team asked for design profiles for five brand segments. The platform was being rebuilt as a multi-brand ecosystem: one backend and one data layer, but five brands that are commercially distinct, and in one case legally distinct. Each brand has its own domain, its own email sending identity and its own look, and the platform applies the right theme automatically based on which brand a visitor is on.

That made this a data problem, not a page-styling problem. The brief was explicit that the theme "has to be stored as data, not baked into a page, because the same components render for every brand". The output therefore had to arrive in a fixed, loadable shape.

### The five brands

| Brand | Slug | Audience | Direction asked for |
|---|---|---|---|
| Refactored.ai | `refactored` | Technical buyers and platform partners | Neutral, infrastructural, credible to engineers. It is the layer underneath the others, so it must not read as a Colaberry sub-brand. |
| Colaberry Enterprise | `colaberry-enterprise` | Enterprise executives, 35 to 60 | Clean, calm, authoritative. Closest to what already ships, so it is the baseline the others are differentiated against. |
| Colaberry Training | `colaberry-training` | Career changers and self-directed learners | Warmer and more encouraging than Enterprise. Same family, different temperature. |
| Career Pathways Network | `cpn` | Scholarship applicants, community partners, donors | Dignity and access, not charity. A separate organisation, so it must be visually independent of Colaberry, not a recolour. |
| AI Flotation | `ai-flotation` | Owners and operators at small and mid-size businesses | Confident, spare, technical without being cold. Sells competence, not inspiration. |

**Family rule:** if all five sit side by side, only the two Colaberry brands should look related.

### What had to be delivered

1. **Eleven colour tokens per brand, each with a light and a dark value:** `bg`, `bgElevated`, `fg`, `fgMuted`, `accent`, `accentContrast`, `accentSoft`, `line`, `success`, `warning`, `danger`.
2. **Per-brand type and shape:** heading font, body font, base type scale, corner radius and one shadow value, with any licensed typeface flagged as a cost decision.
3. **Accessibility as a hard gate.** Every pairing below must meet WCAG 2.1 AA in both modes, with the measured ratios sent alongside the palette:
   - `fg` on `bg` and on `bgElevated`: 4.5:1 minimum
   - `fgMuted` on `bg`: 4.5:1 minimum
   - `accentContrast` on `accent`: 4.5:1 minimum (button labels)
   - `accent` on `bg`: 3:1 minimum (links and focus rings)
4. **Email identity per brand:** header, footer, button style and a legal footer block with mailing address and unsubscribe line, built as table-based HTML with inline styles so it survives email clients.
5. **One JSON object per brand in an agreed shape**, so it can be loaded with no interpretation: brand slug, theme key, support email, typography, `light`, `dark`, contrast ratios and email notes.

Suggested order: Refactored.ai first (the parent the others must differ from), then Career Pathways Network, then AI Flotation, then the two Colaberry brands.

## How this repository answers it

| Asked for | Where it is |
|---|---|
| Colour tokens, light and dark | [`tokens/`](tokens/) (one JSON file per brand) and [`tokens.js`](tokens.js) (the same data as a module) |
| Type, radius, shadow | The same token files; fonts and licences are also listed in [`registry.json`](registry.json) |
| The JSON object per brand | [`exports/`](exports/) (`*.payload.json`, in the requested shape) |
| Measured contrast ratios | `contrastRatios` inside each payload, and the Contrast audit tab of the viewer |
| Email identity | [`emails/`](emails/) (one table-based, inline-styled shell per brand) |
| Reviewable mockups | The live viewer, [`Multi-Brand Tokens (standalone).html`](<Multi-Brand Tokens (standalone).html>) |

Beyond the brief, the repository also includes:

- **Generated stylesheets** in [`dist/`](dist/): one CSS file per design system with the tokens as CSS variables and a small set of `.b-*` components (button, field, input, card, badge, alert, plus motion utilities).
- **A short brand guide per system** (`dist/*.brand.md`) with the token table, motion values, usage rules and a ready-made prompt for building with that brand.
- **Motion tokens per brand:** three durations, easing curves, enter distance and press scale, collapsed under `prefers-reduced-motion`.
- **Logo marks** in [`assets/`](assets/).
- **A registry** ([`registry.json`](registry.json)) that maps each `systemId` to every artifact belonging to it.

### Design systems

Three brands were explored in two directions, so there are eight systems in total. A `systemId` is permanent and is stamped inside every artifact for that system.

| `systemId` | Brand | Direction | Fonts (heading / body) |
|---|---|---|---|
| `refactored-a` | Refactored.ai | Option A, Terminal | IBM Plex Mono / IBM Plex Sans |
| `refactored-b` | Refactored.ai | Option B, Geometric | Outfit |
| `colaberry-enterprise` | Colaberry Enterprise | Single direction | Roboto |
| `colaberry-training` | Colaberry Training | Single direction | Roboto |
| `cpn-a` | Career Pathways Network | Option A, Grove | Bitter / Atkinson Hyperlegible |
| `cpn-b` | Career Pathways Network | Option B, Vestry | Source Serif 4 / Public Sans |
| `ai-flotation-a` | AI Flotation | Option A, Forge | Space Grotesk / Archivo |
| `ai-flotation-b` | AI Flotation | Option B, Harbor | Manrope |

All fonts are open-licensed Google Fonts (OFL or Apache-2.0), so no typeface needs a paid licence.

### Accessibility results

Each payload records ten measured ratios: the five required pairs in light and in dark. Across all eight systems, as recorded in `exports/`:

- The lowest text pairing is 4.7:1 (`accentContrast` on `accent`, Colaberry Training, light). The gate is 4.5:1.
- The lowest `accent` on `bg` is 4.5:1 (Colaberry Training, light). The gate is 3:1.

### Two changes to the requested JSON shape

- `contrastRatios` is split into `light` and `dark`, and adds `fgOnBgElevated`, because the accessibility gate asks for that pair in both modes.
- Each payload also carries `systemId`, `motion` and `logoKit`. Brands with two directions have one payload per direction (`*.a.payload.json`, `*.b.payload.json`) that share a `themeKey`.

## Using a brand

1. Pick a `systemId` from the table above.
2. Load its fonts and link its stylesheet:

   ```html
   <link rel="stylesheet" href="dist/cpn-a.css">
   ```

3. Use the semantic variables (`--bg`, `--fg`, `--accent` and so on) or the `.b-*` classes. Never use raw hex values.
4. For dark mode, set `data-theme="dark"` on `<html>`. Hover, press and focus states are derived by the stylesheet.

[`dist/starter.html`](dist/starter.html) is a plain HTML page styled only by a generated stylesheet. Open it with `?brand=<systemId>` (add `&theme=dark` for dark mode), for example:
https://aleemcolaberry.github.io/Colaberry_FiveBrands/dist/starter.html?brand=ai-flotation-a

The brand guide beside each stylesheet (`dist/<systemId>.brand.md`) has the font link, the full token table and the usage rules for that system.

## Repository layout

```
index.html                              Live viewer (copy of the standalone file, for GitHub Pages)
Multi-Brand Tokens (standalone).html    Self-contained viewer, all assets inlined
Multi-Brand Tokens.dc.html              Viewer source as authored in Claude Design
standalone-src.html, support.js         Source and runtime used to build the standalone viewer
registry.json                           Index: systemId to tokens, stylesheet, guide, payload, email, assets
tokens/                                 Token source, one JSON file per brand
tokens.js                               The same tokens as a JavaScript module
dist/                                   Generated CSS and brand guide per system, plus starter.html
exports/                                Hand-off payloads in the requested JSON shape
emails/                                 Email shell per brand
assets/                                 Logo marks and wordmarks
uploads/                                Reference files supplied during the design work
github.md                               Sync notes from the Claude Design project
```

## Open items

These are visible in the files and need a decision or real data before production use:

- **Direction choice** for the three brands with two options (Refactored.ai, Career Pathways Network, AI Flotation). Both options are kept here until one is chosen.
- **Support email** is `TBD` in the payloads for Refactored.ai, Colaberry Enterprise and Colaberry Training.
- **Mailing addresses** in the email footers are placeholders and must be replaced with each organisation's real address before any send.
- **Email logos** are referenced by relative path. They need to be hosted at a public URL before sending, and the three SVG marks need a PNG export first.

## Related repositories

Each brand also has a fuller design system in its own repository:

- [Refactored.ai Design System](https://github.com/aleemcolaberry/Refactored.ai-Design-System)
- [Colaberry Enterprise Design System](https://github.com/aleemcolaberry/Colaberry-Enterprise-Design-System)
- [Colaberry Training Design System](https://github.com/aleemcolaberry/Colaberry-Training-Design-System)
- [Career Pathways Network Design System](https://github.com/aleemcolaberry/Career-Pathways-Network-Design-System)
- [AI Flotation Design System](https://github.com/aleemcolaberry/AI-Flotation-Design-System)

## Credits

Designed by Mohammad Abdul Aleem, Lead AI Product Designer at Colaberry, using Claude Design. This repository is a synced copy of that Claude Design project.
