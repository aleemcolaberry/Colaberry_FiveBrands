# Multi-brand design system — action plan & Claude Design prompt pack

Working notes for the five-brand token contract requested by Ali (brief dated Aug 21, 2026).

---

## 0. Context block — paste at the top of every Claude Design session

> I'm designing a multi-brand system. One shared component library renders five public brands; each brand's look is stored as data (design tokens in JSON), not baked into pages. The same buttons, inputs and cards must work for all five.
>
> The five brands:
> - **Refactored.ai** (`refactored`) — the parent platform. Audience: technical buyers, platform partners, white-label tenants. Neutral, infrastructural, credible to engineers. Must NOT look like a Colaberry sub-brand.
> - **Colaberry Enterprise** (`colaberry-enterprise`) — enterprise learning and capability programs. Executives 35–60. Clean, calm, authoritative; Bloomberg meets Salesforce, not consumer SaaS. This is the baseline.
> - **Colaberry Training** (`colaberry-training`) — open-enrollment classes and a free-class funnel. Career changers, self-directed learners. Same family as Enterprise, warmer temperature.
> - **Career Pathways Network** (`cpn`) — a nonprofit and separate legal entity. Three audiences: scholarship applicants, church/community partners, donors. Dignity and access, not charity. Used on cheap phones in poor lighting. Must be visually independent of Colaberry — not a recolor.
> - **AI Flotation** (`ai-flotation`) — a build shop: workflow intake to delivered system. Owners and operators at small and mid-size businesses. Confident, spare, technical without being cold. Sells competence, not inspiration.
>
> Family rule: if all five sit side by side, only the two Colaberry brands should look related. Refactored, CPN and AI Flotation must each read as independent.
>
> Hard constraints for every brand: light AND dark mode; WCAG 2.1 AA — fg on bg ≥ 4.5, fg on bgElevated ≥ 4.5, fgMuted on bg ≥ 4.5, accentContrast on accent ≥ 4.5, accent on bg ≥ 3.0, in both modes. Tokens: bg, bgElevated, fg, fgMuted, accent, accentContrast, accentSoft, line, success, warning, danger; plus heading font, body font, type scale, radius, one shadow. Prefer open-licence typefaces; flag any paid face with its licence type.

---

## 1. Brand direction blocks — slot one into any prompt below

Replace `[BRAND BLOCK]` in the prompts with the relevant block. The "starting territory" lines are optional nudges — swap in your own.

### Refactored.ai
- Role: parent platform, the layer underneath everything else.
- Feel: neutral, infrastructural, engineer-credible. Documentation-grade calm.
- Must NOT: share hue, type family or shape language with either Colaberry brand; look like a marketing site.
- Starting territory: near-neutral palette with one restrained accent, grotesque or mono-influenced type, precise geometry, small radius.
- Watch for: becoming so neutral it has no identity at favicon size.

### Colaberry Enterprise (baseline)
- Role: enterprise learning programs.
- Feel: clean, calm, authoritative. Bloomberg meets Salesforce.
- Must NOT: read as consumer SaaS (pastel, bubbly radius, playful marks).
- Starting territory: deep, low-saturation accent; humanist sans for body, tighter grotesque or serif for headings; generous whitespace; 4–6px radius.
- Note: closest to what already ships — reuse existing assets where they hold up.

### Colaberry Training
- Role: open enrollment and the free-class funnel.
- Feel: same family as Enterprise, warmer and more encouraging.
- Must: visibly belong with Enterprise (shared type family, shared mark construction).
- Differentiate by: warmer accent hue, slightly larger radius, friendlier heading weight — temperature, not identity.
- Note: already in progress. Use the in-flight work as the reference for depth and format.

### Career Pathways Network (CPN)
- Role: nonprofit, separate legal entity. Scholars, community/church partners, donors.
- Feel: dignity and access. Confident, warm, institutional enough for a donor deck, human enough for a scholarship form.
- Must NOT: be a Colaberry recolor; use pity or charity tropes (hands, hearts, outlines of people).
- Practical: highest contrast of the five, no thin weights, larger type scale and tap targets — cheap phones, bad lighting.
- Starting territory: an accent that isn't blue (Refactored and Enterprise will likely own cool hues), sturdy type with real x-height, 8px radius.

### AI Flotation
- Role: build shop, workflow intake to delivered system.
- Feel: confident, spare, technical without being cold. Sells competence.
- Must NOT: startup-inspirational (gradients, rockets, "the future of"); cold enterprise grey either.
- Starting territory: a single decisive accent, disciplined grid, monospace details for labels, tight radius.

---

## 2. Prompts

Work through A → H for each brand in Ali's order: Refactored → CPN → AI Flotation → Enterprise → Training.

### Prompt A — Logo exploration
```
[CONTEXT BLOCK]
[BRAND BLOCK]

Explore logo directions for this brand. Give me three distinct directions, labelled A, B and C. For each: a wordmark, a standalone mark, and one sentence on why it fits the audience. Show every direction three ways — black on white, white on black, and at favicon scale (16 px). Keep each direction workable as a flat single-colour mark: no gradients, no photographic effects, no more than two weights. Avoid sector clichés (circuit traces, brains, graduation caps, upward arrows, hands, hearts). Respect the Must NOT lines above and do not reuse any element from the other four brands.
```

### Prompt B — Logo refinement and lockup set
```
[CONTEXT BLOCK]
[BRAND BLOCK]

Refine direction [A/B/C] for this brand. Produce: primary horizontal lockup, stacked lockup, standalone mark, monochrome black, reversed white, and a favicon/app-icon crop. Define clear space (as a multiple of a mark unit) and minimum sizes for print and screen. Then tell me: (1) the single hex value from this logo that should become the brand's --accent token, (2) what the mark's geometry implies for corner radius (sharp / 4px / 8px / 12px+), and (3) which typeface family the wordmark suggests for headings.
```

### Prompt C — Derive tokens from the logo
```
[CONTEXT BLOCK]
[BRAND BLOCK]

The approved logo uses accent [#HEX] and implies [radius] and [type direction]. Build the full token set with light and dark values for: bg, bgElevated, fg, fgMuted, accent, accentContrast, accentSoft, line, success, warning, danger.

Rules: dark mode is not an inversion — pick a dark bg tinted toward the brand hue, and make bgElevated slightly lighter than bg in dark mode (not darker). The accent will likely need a lighter tint in dark mode to reach 3:1 on the dark bg; keep the hue. accentSoft should read as a tinted background — roughly 8–12% accent over bg. fgMuted must still hit 4.5:1 on bg in both modes. success, warning and danger must be distinguishable from accent and from each other, including for red-green colour blindness.

Also give: heading font and body font (open-licence options first; if you recommend a paid face, name the licence type needed for web + email), a base type scale (base size and ratio, with the resulting sizes), radius, and one shadow value for elevated surfaces.

Output a table with every hex value, then render all 11 tokens as swatches in a light column and a dark column.
```

### Prompt D — Contrast audit and fixes
```
Check these token pairs for WCAG 2.1 AA in both light and dark and report the exact ratio to one decimal place:
- fg on bg (need ≥ 4.5)
- fg on bgElevated (need ≥ 4.5)
- fgMuted on bg (need ≥ 4.5)
- accentContrast on accent (need ≥ 4.5)
- accent on bg (need ≥ 3.0)

For any failure, propose the smallest hex change that passes while keeping the hue, and show before and after. Tokens:
[PASTE TOKEN TABLE]
```
Tip: also paste the final hex values into a regular Claude chat and ask for the ratios to be computed in code, so the numbers you send Ali are measured rather than estimated.

### Prompt E — Style tile in both modes
```
[CONTEXT BLOCK]

Using only these tokens — no new colours — render a style tile for [BRAND] in two panels side by side, light and dark:
- Heading and body samples at the type scale
- Primary, secondary and ghost buttons in default, hover, focus (focus ring uses accent), and disabled
- A text input with label, helper text in fgMuted, and an error state using danger
- A card on bgElevated with a line border and the shadow value
- A banner on accentSoft
- Success, warning and danger alerts
- An inline link in body text
- The brand's primary lockup in the header of each panel

Tokens:
[PASTE TOKEN TABLE]
```

### Prompt F — Email identity
```
[CONTEXT BLOCK]
[BRAND BLOCK]

Design the transactional email identity for this brand, sending from [domain]. Produce: a header (logo as a PNG placeholder no taller than 48 px, on bg or on accent — choose one and say why), a footer, a primary button style, and a legal footer block with placeholders for the sending entity's mailing address and an unsubscribe line.

Then output it as table-based HTML with every style inline: no external CSS, no SVG, no web fonts (fall back to [system stack]), max width 600 px, and colours that survive dark-mode inversion in Gmail and Outlook (no white logo on transparent). Give the button hex on its own line as email.buttonHex.
```

### Prompt G — Five-brand lineup test
```
[CONTEXT BLOCK]

Show all five brands' primary lockups on one board, first in light mode and again in dark mode, each on its own bg with its accent button underneath. Then critique against the family rule: only Colaberry Enterprise and Colaberry Training should look related; Refactored, CPN and AI Flotation must each read as independent. Flag any shared hue, type family or mark construction that breaks the rule and suggest the smallest fix.

Lockups and tokens:
[PASTE ALL FIVE]
```

### Prompt H — JSON export
```
Assemble the final payload for [BRAND] as JSON, exactly in this shape and with no commentary. Use themeKey equal to brandSlug. Report contrast ratios to one decimal.

{
  "brandSlug": "...",
  "themeKey": "...",
  "supportEmail": "...",
  "typography": { "heading": "...", "body": "...", "scale": "...", "radius": "...", "shadow": "..." },
  "light": { "bg": "", "bgElevated": "", "fg": "", "fgMuted": "", "accent": "", "accentContrast": "", "accentSoft": "", "line": "", "success": "", "warning": "", "danger": "" },
  "dark": { ...same keys... },
  "contrastRatios": {
    "light": { "fgOnBg": 0, "fgOnBgElevated": 0, "fgMutedOnBg": 0, "accentContrastOnAccent": 0, "accentOnBg": 0 },
    "dark":  { "fgOnBg": 0, "fgOnBgElevated": 0, "fgMutedOnBg": 0, "accentContrastOnAccent": 0, "accentOnBg": 0 }
  },
  "email": { "headerNotes": "...", "footerNotes": "...", "buttonHex": "..." }
}

Source values:
[PASTE FINAL TOKENS, TYPE, RATIOS, EMAIL NOTES]
```
Note: this nests `contrastRatios` by mode and adds `fgOnBgElevated`, which Ali's sample doesn't do. He invited format feedback — confirm with him before delivering (see §6).

---

## 3. Per-brand checklist

- [ ] Logo: 3 directions → 1 refined; horizontal, stacked, mark, mono, reversed, favicon
- [ ] Accent hex and radius pulled from the logo
- [ ] 11 tokens × light + dark
- [ ] 5 contrast pairs × 2 modes, all passing, ratios recorded
- [ ] Heading font, body font, scale, radius, shadow — licence status noted
- [ ] Style tile in both modes reviewed
- [ ] Email header, footer, button, legal block — table HTML, inline styles, PNG logo
- [ ] `themeKey` and `supportEmail` confirmed
- [ ] JSON filled and validated (paste into a JSON linter)
- [ ] Checked against the lineup board

## 4. Handoff package

- 5 × JSON payloads (one per brand) for `brands.metadata`
- 5 × email HTML files + header/footer/button notes for `sender_profiles`
- Logo asset pack per brand: SVG (web) + PNG @1x/@2x (email, favicons)
- Font licence summary: which faces, which licence, cost if any
- Lineup board (light + dark) as the visual proof of the family rule

## 5. Timeline template (solo, rough — adjust to your load)

| Stage | Working days |
|---|---|
| Refactored.ai — logo, tokens, audit, tile, email, JSON | 5–6 |
| CPN | 5–6 |
| AI Flotation | 4–5 |
| Colaberry Enterprise (baseline, reuse existing) | 3 |
| Colaberry Training (already in flight) | 2–3 |
| Lineup test, fixes, handoff | 2 |
| **Total** | **~21–25 days, about 5 weeks** |

Suggest checkpoints with Ali after Refactored (so the parent is locked before the others diverge from it) and after CPN (external stakeholders waiting).

## 6. Questions to send Ali with the timeline

1. **Logos** — his schema has no logo field. Confirm logos are in scope and where assets live: propose `metadata.logo` with `primary`, `mark`, `mono`, `emailPng` URLs, or an asset bucket per brand.
2. **Contrast format** — propose splitting `contrastRatios` into `light` / `dark` and adding `fgOnBgElevated`, since he asked for that pair in §3 of the brief.
3. **Legal footers** — mailing address and unsubscribe mechanism for each sending entity. CPN and AI Flotation presumably aren't at 200 Chisholm Place.
4. **Sending domains and support emails** — the list per brand (cpn.org and aiflotation.com are confirmed; the other three?) so `supportEmail` can be filled.
5. **`themeKey`** — plan is `themeKey = slug`. Ask whether variants (e.g. a donor-facing CPN theme) are anticipated, which would change the key scheme.
6. **Typefaces** — default to open-licence faces at zero cost; any licensed pick will come with a web + email licence quote before committing.
7. **Existing Colaberry assets** — request the current Enterprise palette and type files so the baseline is what actually ships, not a reconstruction.
