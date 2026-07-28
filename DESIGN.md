# DESIGN.md — Te Votas si Votas

Design system for the **Te Votas si Votas** civic voter-education site (tevotassivotas.com).
AI agents: read this before creating or editing any UI. Match it exactly — do not invent new
colors, fonts, or spacing values.

---

## 1. Brand in one line

A bold, high-contrast **political poster** aesthetic in the colors of the Puerto Rican flag.
Editorial, urgent, civic. Think campaign rally signage, not a soft SaaS landing page.

**Never** make this look generic/AI-default: no purple, no pastel gradients, no rounded-2xl
cards, no drop-shadow-heavy "friendly" look. It should feel like a printed manifesto.

---

## 2. Color

Use these CSS variables. Do not introduce colors outside this palette.

```css
--red:        #CF0A2C;  /* PR flag red — primary accent, CTAs, emphasis */
--blue:       #002868;  /* PR flag blue — secondary sections, "yes" side */
--white:      #FFFFFF;
--dark:       #080808;  /* near-black — hero + dark sections */
--gray:       #F4F4F4;  /* light section background */
--gray-mid:   #888888;  /* muted labels/footers */
```

Supporting tints (already in use — reuse, don't replace):
- `#4B82E8` — lighter blue accent (timeline dots, alternating years, hero subline)
- `#A8D1FF` — pale blue, used on the blue "Sí Votas" comparison column
- `#161616` — the dark "No Votas" comparison column
- Overlays: white text at `rgba(255,255,255,0.8 / 0.6 / 0.55 / 0.4)` for hierarchy on dark.

**Section backgrounds** rotate for rhythm: `--dark`, `--blue`, `--red`, `--gray`.
Alternate them so no two adjacent sections share a background.

**Contrast rule:** flag red (#CF0A2C) on dark or white only. Never red text on blue or blue on red.

---

## 3. Typography

```css
--f-head: 'Big Shoulders Display', Impact, sans-serif;  /* ALL headings, always weight 900 */
--f-body: 'Inter', system-ui, sans-serif;               /* body, labels, nav */
```

- **Headings** — `Big Shoulders Display`, `font-weight: 900`, tight `line-height` (0.88–1.0),
  slight positive `letter-spacing` (~0.02em). Big and loud: hero title uses `clamp(5rem, 16vw, 13rem)`.
- **Section titles** — `clamp(2.8rem, 5.5vw, 4.5rem)`, line-height 1.
- **Eyebrows** (kicker labels above titles) — `Inter`, 0.72rem, weight 700, `text-transform: uppercase`,
  `letter-spacing: 0.25em`, colored `--red` (or white-alpha on colored sections).
- **Body** — `Inter`, ~1.1rem, line-height 1.6–1.7, `max-width: 62ch`, slightly reduced opacity on dark.

Never use a heading font for body text, and never render Big Shoulders below weight 900.

---

## 4. Layout & spacing

- Content container: `max-width: 1200px`, centered.
- Section padding: `6rem 2rem` desktop, `4rem 1.5rem` at ≤768px.
- Spacing scale is rem-based: 0.5 / 0.75 / 1 / 1.5 / 2 / 2.5 / 3.5 rem. Stay on it — no arbitrary px.
- Grids are **edge-to-edge with thin seams**: stat/officials cards sit on a 1–2px background-colored
  gap (a grid line), not floating with gaps + shadows.

---

## 5. Signature motifs (reuse these — they are the brand)

- **Flag bar:** a row of 5 equal stripes `red / white / red / white / red`, 4–6px tall. Used as a
  divider at the bottom of the hero and in the footer.
- **Eyebrow → Title → Subtitle** stack opens most sections.
- **Giant faint star (★)** watermark behind the red register/CTA section.
- **Alternating accent cycle:** every 3rd item cycles red → blue → white (timeline dots & years use this).
- **Scroll hint** with a gentle float animation at the bottom of the hero.

---

## 6. Components

**Buttons** (`.btn`): `Big Shoulders Display` 900, ~1.4rem, `padding: 0.9rem 2.25rem`, **no border-radius
by default** (sharp, poster-like), hover = `translateY(-2px)` + slight opacity drop. Variants: `--red`,
`--blue`, `--white` (white bg / red text), `--outline-white`, `--dark`.

**Cards** are flat: solid or subtle `rgba(255,255,255,0.04)` fill, a colored top-border accent
(`3px` red or blue), hover lifts `translateY(-3px)` with at most a soft shadow. No heavy elevation.

**Timeline:** vertical line with a red→blue→red gradient; dots alternate accent colors; year in
Big Shoulders, colored; title bold Inter; muted description. (This is the site's showpiece — treat
new timeline work as hero-quality.)

**Navbar:** fixed, transparent over hero, gains `rgba(8,8,8,0.95)` + blur on scroll. CTA is a solid red block.

---

## 7. Motion

- Purposeful and snappy, not decorative. Prefer scroll-reveal (fade + slight rise) as sections enter,
  and quick hover transforms (0.2s). The hero scroll-hint floats on a 2.5s loop.
- **Always** respect `@media (prefers-reduced-motion: reduce)` — disable transforms/animation there.

---

## 8. Voice & content (critical)

- **Language: Spanish (Puerto Rico).** All UI copy is in PR Spanish.
- **Vocabulary:** use **"papeleta"** for a ballot — **never "boleta."** Use local civic terms
  (Gobernador, Comisionado Residente, Alcalde, Legislatura Municipal, CEE, plebiscito, estadidad, ELA).
- Tone: direct, urgent, empowering, factually accurate. Second person ("tu voto", "¿estarás ahí?").
- Political history and figures must be accurate — this is educational civic content, not marketing fluff.

---

## 9. Accessibility

- Maintain 4.5:1 contrast for body text (the near-black/white and red-on-white combos pass; verify any new pairing).
- Never rely on color alone — pair with icons/text (e.g. the ✓/✗ comparison uses shape + color).
- Every interactive element keyboard-reachable; use real `<button>`/`<a>`, not clickable divs.
- Section landmarks have `id`s for in-page nav; keep them.

---

## 10. Stack

React + Vite, plain CSS (no Tailwind, no CSS-in-JS, no UI kit). Styles live in `src/index.css`
using the variables above. Keep it dependency-free — do not add libraries for things CSS can do.
