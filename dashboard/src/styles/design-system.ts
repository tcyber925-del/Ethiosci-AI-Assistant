/**
 * Design tokens for the dashboard shell and the marketing surface.
 *
 * Kept deliberately small: `radii`, `motion`, and the marketing pair. The
 * Verge-dark block (`colors` / `typography` / `spacing` / `shadows` — #131313
 * canvas, #3cffd0 accent) was deleted: nothing imported it, and advertising it
 * as the canonical palette contradicted the light shell. The six values
 * `marketing` still needed were inlined into it below.
 *
 * Normative specs: DESIGN.md (marketing), DESIGN-dashboard.md (shell).
 */
export const radii = {
  card: '20px',
  feature: '24px',
  button: '24px',
  pill: '9999px',
  input: '2px',
  micro: '4px',
  stage: '30px',
  cta: '40px',
} as const;

export const motion = {
  pageTransition: '180ms',
  sidebar: '180ms',
  cardReveal: '150ms',
  activityUpdate: '150ms',
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** Scroll-reveal entrance (marketing `Reveal`): rise + fade, once. */
  reveal: '800ms',
  /** Bezier [x1, y1, x2, y2] — the framer-motion form of cubic-bezier(0.2, 0.7, 0.2, 1). */
  revealEasing: [0.2, 0.7, 0.2, 1] as [number, number, number, number],
} as const;

/**
 * Marketing surface (the `(marketing)` route group: landing, privacy, terms).
 * The dark editorial world: near-black canvas, jelly-mint + ultraviolet,
 * Anton display / Space Grotesk body / Space Mono labels.
 *
 * Tailwind (`tailwind.config.ts`) imports this directly — these names are the
 * only color/radius vocabulary allowed in marketing markup. `ink`/`slate`/
 * `mint`/`violet`/`meta`/`soft` keep the Verge-derived hexes they were lifted
 * from (the `colors` block that held them is gone); the four accents carry no
 * hex in their source, so they are converted from their origin oklch coords.
 */
export const marketing = {
  /** Canvas / near-black page ground. */
  ink: '#131313',
  /** Raised surface: panels, tiles, figcaptions. */
  slate: '#2d2d2d',
  /** Primary accent: jelly mint. */
  mint: '#3cffd0',
  /** Secondary accent: ultraviolet. */
  violet: '#5200ff',
  /** Technical/meta text on ink. */
  meta: '#949494',
  /** Body text on ink. */
  soft: '#e9e9e9',
  /** Hairline rules and default border color (white at 14%). */
  line: 'rgba(255,255,255,.14)',
  /** Subject accent — Mathematics tile, highlights. */
  sun: '#ffe633',
  /** Subject accent — wrong-answer state, highlights. */
  pink: '#ff74bf',
  /** Subject accent — Chemistry stream events. */
  flame: '#ff7716',
  /** Subject accent — Physics tile and stream events. */
  volt: '#0c84fa',
} as const;

/**
 * Marketing type stacks. Loaded in `src/app/layout.tsx` via next/font; every
 * stack ends in the Ethiopic fallbacks because Anton/Space Grotesk/Space Mono
 * carry no Ethiopic glyphs.
 */
export const marketingTypography = {
  /** Condensed uppercase display face (`.display`). */
  display:
    'var(--font-anton), Impact, \'Arial Black\', var(--font-ethiopic), \'Noto Sans Ethiopic\', sans-serif',
  /** Body face (applied on the marketing surface root). */
  body:
    'var(--font-grotesk), var(--font-inter), system-ui, var(--font-ethiopic), \'Noto Sans Ethiopic\', sans-serif',
  /** Technical labels (`.label-mono`). */
  label:
    'var(--font-spacemono), var(--font-jbmono), var(--font-ethiopic), \'Noto Sans Ethiopic\', \'Courier New\', monospace',
} as const;
