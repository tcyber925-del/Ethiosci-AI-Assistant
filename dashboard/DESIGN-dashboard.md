---
name: EthioSci Dashboard
description: "EthioSci app shell — a light, calm educational-intelligence workspace: hairline-bordered cards on #FAFAFA, teal accent, Inter body / Spectral display / JetBrains Mono labels, Impact `.verge-display` headings, and a collapsible 256/72px sidebar."
colors:
  bg: "#FAFAFA"
  surface: "#FFFFFF"
  textPrimary: "#0F172A"
  textSecondary: "#64748B"
  border: "#E5E7EB"
  borderStrong: "#94A3B8"
  accent: "#14B8A6"
  accentHover: "#0D9488"
  accentMuted: "rgba(20,184,166,0.1)"
  success: "#15803D" # darkened from #22C55E for 4.5:1 text (Drift §9)
  warning: "#B45309" # darkened from #F59E0B for 4.5:1 text (Drift §9)
  error: "#DC2626"   # darkened from #EF4444 for 4.5:1 text (Drift §9)
  purple: "#7C3AED"
  purpleRule: "#6D28D9"
  inverted: "#FFFFFF" # deprecated — accent fills use textPrimary (see Colors)
  linkHover: "#0D9488"
  focus: "#0284C7"
  primary: "#10b981"
typography:
  body:
    fontFamily: "var(--font-inter), system-ui, var(--font-ethiopic), 'Noto Sans Ethiopic', 'Ebrima', 'Abyssinica SIL', sans-serif"
    fontSize: "14px / 16px"
    lineHeight: 1.5
  display:
    fontFamily: "Impact, 'Arial Black', 'Helvetica Neue Condensed', Helvetica, sans-serif"
    fontWeight: 900
    textTransform: "uppercase"
    letterSpacing: "0.8px"
  serif:
    fontFamily: "var(--font-spectral), Georgia, var(--font-ethiopic), 'Noto Sans Ethiopic', 'Ebrima', 'Abyssinica SIL', serif"
  label:
    fontFamily: "var(--font-jbmono), 'Space Mono', 'Courier New', monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "1.4px"
    textTransform: "uppercase"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  "2xl": "16px"
  card: "20px"
  feature: "24px"
  pill: "9999px"
spacing:
  gutter: "20px / 32px (sm) / 40px (lg)"
  container: "1300px"
  sidebar-expanded: "256px"
  sidebar-collapsed: "72px"
motion:
  page: "180ms cubic-bezier(0.16, 1, 0.3, 1)"
  card: "150ms"
  stagger: "50ms per index"
---

# Design System: EthioSci Dashboard (App Shell)

## Overview

**Creative North Star: "Calm Educational Intelligence."** (see `CONTEXT.md`)
A modern learning workspace where insights matter more than raw statistics — inspired by
Linear, Notion, Stripe Dashboard and Khan Academy. _Avoid:_ admin panel, SaaS template,
generic dashboard.

The dashboard is the **opposite polarity** of the marketing surface: a light working
ground (`#FAFAFA`) ruled by hairlines and dense enough to scan, where the dark editorial
world of `DESIGN.md` never appears. Its one inherited Verge gesture is typographic —
`Impact` display headings (`.verge-display`) over a mono readout voice (`.verge-label`) —
and one structural one: the StoryStream rail on `ActivityTimeline`.

**Key Characteristics:**
- Light ground `#FAFAFA`, white surfaces, 1px `#E5E7EB` hairlines as the only dividers
- Teal `#14B8A6` as the single accent; semantic `success/warning/error` for state only
- `.verge-display` (Impact 900, uppercase, +0.8px) for headings; `.verge-label` (JetBrains
  Mono 11px/600/1.4px uppercase) for every label; Inter for body; Spectral serif for
  `.text-display`/`.text-heading`
- Card radius `20px`, dense-UI radius `rounded-lg`/`rounded-xl` (8/12px), pills `full` —
  a **denser ladder than marketing's** 2/4/20/24/30/40
- Depth by hairline; shadows exist only on modals/overlays (8 occurrences repo-wide)
- 180ms `cubic-bezier(0.16, 1, 0.3, 1)` motion; no scroll reveals, no gradients
- Fully translated under `v2.*` (+ `workspace.*`, `assignments.*`, `studio.*`, `graph.*`,
  `twin.*`, `analytics.*`, `admin.*`)

## Scope & Token Authority

Normative for: `src/app/(dashboard)/**`, `src/components/dashboard-v2/**`, and the app
chrome they compose. **Out of scope:** the `(marketing)` route group — that is
`DESIGN.md`, and its token vocabulary (`ink/slate/mint/violet/sun/pink/flame/volt`,
Anton/Space Grotesk/Space Mono, `.mk-surface`) is banned here.

Authority order, highest first:

| # | Source | Status |
|---|---|---|
| 1 | `src/app/globals.css` → `:root { --v2-* }` | **Live tokens — the source of truth** |
| 2 | `tailwind.config.ts` | Maps `--v2-*` (via `color-mix` for alpha) into `v2-*` utilities; also exposes the legacy names below |
| 3 | `src/styles/design-system.ts` → `motion` | Live; shared with marketing (180ms / 800ms reveal pair) |
| 4 | `src/styles/design-system.ts` → `radii`, `marketing`, `marketingTypography` | Live, **marketing-owned** — available as utilities but not this surface's vocabulary |
| 5 | `src/styles/design-system.ts` → `colors`, `typography`, `spacing`, `shadows` | ✅ **DELETED** — they held the Verge-dark palette (`#131313`, `#3cffd0`, `#3860be`), contradicting the live light tokens. The six values `marketing` derived from `colors` were inlined into it, so the file now exports only `radii`, `motion`, `marketing`, `marketingTypography` — all four imported somewhere. |

Two color vocabularies coexist in markup today and both are "valid":

- **`v2-*`** (canonical): `bg-v2-surface`, `text-v2-text-primary`, `border-v2-border`,
  `text-v2-accent`, `bg-v2-bg` …
- **Legacy light-SaaS names**: `bg-background` / `bg-background-secondary` /
  `text-foreground` / `text-foreground-muted` / `border-border` / `bg-card` /
  `bg-primary` — these resolve to the same `--v2-*` vars, **except `primary`, which is a
  separate emerald scale (`#10b981`) not a `--v2-*` token.**

Measured usage (dashboard-v2 + `(dashboard)` pages): `text-foreground-muted` ×408,
`text-foreground` ×229 vs `text-v2-text-secondary` ×223, `text-v2-text-primary` ×188;
`bg-v2-surface` ×117, `bg-background-secondary` ×85, `bg-card` ×69, `bg-primary` ×50.
**New code uses `v2-*`.** See Known Drift §1.

## Colors

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--v2-bg` | `#FAFAFA` | Page ground, alternating grid cells |
| `--v2-surface` | `#FFFFFF` | Cards, panels, modals, sidebar search |
| `--v2-text-primary` | `#0F172A` | Headings, values, primary copy |
| `--v2-text-secondary` | `#64748B` | Labels, captions, meta, subtitles |
| `--v2-border` | `#E5E7EB` | Every hairline: card outlines, dividers, grid gaps |
| `--v2-border-strong` | `#94A3B8` | Stronger affordance border (rarely used) |
| `--v2-accent` | `#14B8A6` | The accent: primary button fill, active states, trend text, hover borders, sidebar hatch |
| `--v2-accent-hover` | `#0D9488` | Accent hover + link hover (also `--v2-link-hover`) |
| `--v2-accent-muted` | `rgba(20,184,166,.1)` | Accent wash for badges |
| `--v2-success` | `#15803D` | Up-trend, positive state (was `#22C55E`, 2.18:1 as text) |
| `--v2-warning` | `#B45309` | Attention state, XP events (was `#F59E0B`, 2.06:1 as text) |
| `--v2-error` | `#DC2626` | Destructive / down-trend / logout hover (was `#EF4444`, 3.61:1 as text) |
| `--v2-purple` | `#7C3AED` | Tutor events, secondary event accent |
| `--v2-purple-rule` | `#6D28D9` | **The StoryStream rail** and sidebar active rail |
| `--v2-inverted` | `#FFFFFF` | **Deprecated** — was the white-on-accent text color; accent fills now take `--v2-text-primary` (7.17:1). No references remain (only the token definition). |
| `--v2-focus` | `#0284C7` | Focus ring — 2px + offset (sky-600; see Elevation & Focus) |

### Contrast (measured)

WCAG 2.1 relative luminance, computed from the tokens on their real backgrounds.
Text needs 4.5:1 (≥24px or ≥18.66px bold: 3:1); interactive boundaries need 3:1 (1.4.11).

| Foreground on background | Ratio | Verdict |
|---|---|---|
| `--v2-text-primary` on `--v2-bg` | 17.1:1 | ✓ headings, values |
| `--v2-text-secondary` on `--v2-bg` | 4.56:1 | ✓ labels/captions — barely; do not go darker |
| `--v2-text-secondary` on `--v2-surface` | 4.76:1 | ✓ |
| `--v2-purple-rule` on `--v2-bg` | 6.81:1 | ✓ rail, active marker |
| `--v2-error` on `--v2-bg` / surface | 4.63 / 4.83:1 | ✓ text (was `#EF4444` at 3.61:1 — large-text only) |
| `--v2-text-primary` on `--v2-accent` | 7.17:1 | ✓ **the required pairing on accent fills** (buttons, tiles, badges, chat bubbles) |
| `--v2-inverted` (white) on `--v2-accent` | 2.49:1 | ✗ — **why accent fills moved to ink**; token deprecated, no longer used |
| `--v2-accent` on `--v2-bg` / surface | 2.38 / 2.49:1 | **✗ as text** — accent-as-text (e.g. `text-v2-accent` labels) fails 4.5:1 |
| `--v2-accent-hover` on `--v2-bg` | 3.59:1 | ✗ as body text; ✓ as a boundary |
| `primary` `#10b981` on `--v2-bg` | 2.43:1 | ✗ as text and as a boundary |
| `--v2-success` / `--v2-warning` on `--v2-bg` | 4.81 / 4.81:1 | ✓ text (were `#22C55E`/`#F59E0B` at 2.18/2.06:1 — darkened to clear 1.4.3) |
| `--v2-focus` on `--v2-bg` / surface | 3.92 / 4.10:1 | ✓ focus indicator (was `#0EA5E9` at 2.66:1 — darkened to clear 1.4.11) |
| `--v2-border` on `--v2-bg` | 1.19:1 | structure only — never an affordance |
| `--v2-border-strong` on `--v2-bg` | 2.46:1 | ✗ as an interactive boundary |

### Named Rules
**The Hairline Rule.** Structure is 1px `--v2-border` — card outlines, section dividers,
`gap-px` grid separators, sidebar `border-r`. If two things need separating, draw a
hairline; don't tint, don't shadow.
**The Single-Accent Rule.** `--v2-accent` marks the one thing to act on in a region
(primary button, active nav, hovered card border). It is never decoration, never a page
background, never body text.
**The Inverted-Pairing Rule.** Text on an accent fill is **ink** (`--v2-text-primary`,
7.17:1) — never white (2.49:1). Applies to buttons, subject/metric cells, badges, active
nav rows, chat bubbles and icon tiles; `--v2-inverted` is deprecated.
**The State-Color Rule.** `success/warning/error/purple` encode meaning only (trend
direction, event type, destructive action) — never brand emphasis. The three are
deliberately the *darkened* 4.5:1 shades, so they are legal as text (11px trend labels,
`bg-*-10` chips) as well as tints, borders and icons — don't reintroduce the vivid
originals.
**The Two-Greens Warning.** `primary` (emerald `#10b981`) and `--v2-accent` (teal
`#14B8A6`) are different greens that read as one color at a glance. `bg-primary` exists
only for legacy reasons; **new code uses `v2-accent`.**

## Typography

Loaded in `src/app/layout.tsx` via `next/font`: `--font-inter`, `--font-spectral`,
`--font-jbmono`, `--font-ethiopic` (Noto Sans Ethiopic) for the shell;
`--font-anton`, `--font-grotesk`, `--font-spacemono` are loaded at the root but belong to
the marketing surface.

**Character:** a status readout and a dashboard. Impact shouts the page title in
compressed uppercase; JetBrains Mono states every label, unit and trend in tracked-out
11px caps; Inter explains quietly; Spectral (`.text-display`/`.text-heading`) supplies the
serif counterpoint for section heads.

### Hierarchy

| Role | Face | Size | Weight | Notes |
|---|---|---|---|---|
| Page title | `.verge-display` (Impact) | `text-4xl` 36px (`text-3xl` 30px in dense pages) | 900 | `leading-none`, uppercase, +0.8px |
| Hero title | `.verge-display` | 48px → 60px (`md`) → 72px (`lg`) | 900 | `dashboard-v2/HeroSection` |
| Sidebar wordmark | `.verge-display` | 32px | 900 | `SidebarV2` |
| Section heading | Inter | 24px `text-2xl` | 900 (`font-black`) | e.g. `ActivityTimeline h2` |
| Metric value | Inter | 30–36px `text-3xl`/`text-4xl` | 900 | `MetricStrip`, `InsightCard` |
| Serif display / heading | `.text-display` / `.text-heading` (Spectral) | 32px / 20px | 700 | legacy route styling |
| Subhead | Inter | 14px | 600 | `.text-subhead` |
| Body / label | Inter | 16px / 14px | 400–600 | `.text-body` 14px, `text-base` 16px |
| Caption | Inter | 12px | 400 | `.text-small`, `text-xs` |
| Mono label | `.verge-label` (JetBrains Mono) | 11px | 600 | uppercase, 1.4px tracking |
| Mono data | `.text-mono` (JetBrains Mono) | 12px | 400 | tables / codes |

### Named Rules
**The Readout Rule.** Every label, kicker, unit, trend word and column header is
`.verge-label` — mono, uppercase, 11px, 1.4px tracking. Sentences are never mono.
**One-Face-Per-Job.** Impact is headings only (`.verge-display`); Spectral is the serif
exception (`.text-display`/`.text-heading`); Inter is body and values; JetBrains Mono is
labels. `.verge-display` and `.mk-surface .display` (Anton) never mix in one view.

### Amharic / Ethiopic
- Every shell stack ends in `var(--font-ethiopic)` / `'Noto Sans Ethiopic'` (body,
  `.text-display`, `.text-heading`, `.text-mono`).
- `html[lang='am'] body { line-height: 1.65 }`; `.text-display` → 2.75rem and
  `.text-heading` → 2rem leading under `lang="am"`.
- **`.verge-display` and `.verge-label` both name the Ethiopic faces** (`Impact …
  Helvetica, var(--font-ethiopic), 'Noto Sans Ethiopic', sans-serif`) — required because
  both render translated `v2.*` copy (page titles, `MetricStrip`/`InsightCard` labels)
  and neither Latin face carries fidel. Verified emitted in the compiled stylesheet.
- Uppercase is a no-op for fidel, but **letter-spacing is not**: `.verge-display`'s
  +0.8px and `.verge-label`'s 1.4px tracking are Latin-tuned and have no `lang="am"`
  override yet (marketing's `.label-mono` does — see `DESIGN.md`). Open: Known Drift §11.

## Layout

### Shell

```
src/app/(dashboard)/layout.tsx
└─ <div class="flex h-screen overflow-hidden">
   ├─ SidebarV2            256px expanded / 72px collapsed, framer width animation,
   │                       border-r border-v2-border, bg-v2-bg, SVG hatch pattern
   └─ <div class="flex-1 flex flex-col overflow-hidden">
      ├─ BioPattern        background texture
      ├─ SubjectGradeSelector   (right-aligned, px-5 pt-3 sm:px-8 lg:px-10)
      └─ ShellPadding → page content
```

Each page wraps its content in **`DashboardLayout`**:
`ContextHeader` (breadcrumbs) → `motion.main` → `max-w-[1300px]` centered container.

- **Gutters:** `px-5` (20px) → `sm:px-8` (32px) → `lg:px-10` (40px); vertical `py-5` →
  `lg:py-6`.
- **Container:** `max-w-[1300px]`.
- **Breakpoints:** Tailwind defaults as used — `sm` 640 / `md` 768 / `lg` 1024 /
  `xl` 1280. No custom breakpoints.
- **Sidebar:** `animate({ width: collapsed ? 72 : 256 })`; active route marked by a 1px
  `bg-v2-purple-rule` rail at `-left-3`; hover raises border/text to accent;
  search + collapse toggle inside.
- **Page anatomy:** `HeroSection` (border-b, pb-6, mb-8) → `MetricStrip` →
  insight-card grid → panels (`AIInsightPanel`, `LearningProgress`, `ActivityTimeline`).

### Density
Generous between sections (`mb-8`, `gap-4`/`gap-6`), tight inside cards (`p-5`/`p-6`,
16–24px). Card titles sit on `.verge-label` with `mt-3` values — the label/value gap is
consistent across `MetricStrip` and `InsightCard`.

## Elevation & Depth

No gradients, no glows. Depth is tonal (`bg` ↔ `bg-surface`), by hairline, and by
overlap/texture (`BioPattern`, sidebar hatch pattern).

| Level | Treatment | Use |
|---|---|---|
| 0 | 1px `--v2-border` | Default card/panel outline, grid gap |
| 1 | 1px `--v2-border` → `hover:border-v2-accent` (150ms) | Card hover — **the standard interaction, no lift, no scale** |
| 2 | 1px `--v2-accent` / `border-v2-accent` + `bg-v2-accent/10` | Selected / focused-within state |
| 3 | `--v2-purple-rule` 1px rail | Active nav and StoryStream timeline spine |
| 4 | `shadow-xl` / `shadow-lg` | **Modals and diagram tooltips only** (8 occurrences) |

**The No-Lift Rule.** Hover changes border/text color in 150ms. Cards never translate,
scale or shadow on hover (exception: `knowledge-graph` selected node `scale-125`).

### Focus

Keyboard focus is a 2px `--v2-focus` ring drawn with the house pattern:

```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-focus
```

`--v2-focus` is `#0284C7` — **3.92:1** on `--v2-bg` and 4.10:1 on `--v2-surface`, clearing
WCAG 1.4.11's 3:1 indicator floor (the original sky-500 `#0EA5E9` measured 2.66:1 and was
darkened; ~24 auth/ui controls already consume this token, so they were repaired too).
The 7 controls in `SidebarV2` / `ContextHeader` / `HeroSection` that carried the dead
`focus-visible:verge-focus` class now use this pattern. Marketing keeps its own mint
`outline` ring — the two surfaces do not share a focus treatment.

## Shapes

Shipped radius ladder (actual class counts across `dashboard-v2` + `(dashboard)`):

| Class | px | Uses | Use |
|---|---|---|---|
| `rounded-md` | 6 | 1 | small controls |
| `rounded-lg` | 8 | 150 | inputs, dense UI, inline chips |
| `rounded-xl` | 12 | 146 | buttons, generic cards, modals |
| `rounded-2xl` / `rounded-[16px]` | 16 | 1 + 1 | (duplicate values — see Known Drift §6) |
| `rounded-[20px]` | 20 | 102 | **the card radius**: `MetricStrip`, `InsightCard`, sidebar items, dialogs |
| `rounded-[24px]` | 24 | 3 | hero CTA pill, feature panels |
| `rounded-full` | pill | 97 | avatars, badges, status dots, progress bars |

**The Density Rule.** Cards are 20px; anything dense inside a card is `rounded-lg`/`xl`
(8/12px); anything pill-shaped is `rounded-full`. `rounded-card`/`rounded-feature`/
`rounded-stage`/`rounded-cta` (20/24/30/40) exist globally from the marketing scale —
prefer them over new arbitrary values when you need 20 or 24.

## Components

### Shell
- **`SidebarV2`** — 256/72px, `border-r border-v2-border`, SVG hatch pattern tinted
  `text-v2-accent`, `.verge-display` wordmark (32px), search field (`rounded-[20px]`,
  `border-v2-border`, hover → accent), nav rows `h-11 rounded-[20px] px-3` with the
  `bg-v2-purple-rule` active rail, destructive row `hover:border-v2-error
  hover:text-v2-error`, collapse toggle 24px circle.
- **`ContextHeader`** — breadcrumb trail; links `transition-colors
  hover:text-v2-link-hover`.
- **`DashboardLayout`** — breadcrumbs + `motion.main`, entrance `opacity 0→1, y 8→0`,
  180ms `cubic-bezier(0.16,1,0.3,1)`, `max-w-[1300px]`.
- **`ShellPadding` / `BioPattern` / `SubjectGradeSelector`** — chrome around page content.

### Data display
- **`HeroSection`** — `verge-label` eyebrow in accent (optional `secondary` slot),
  `.verge-display` h1 at 48/60/72px, `text-base text-v2-text-secondary` subtitle,
  `border-b border-v2-border pb-6 mb-8`; optional action pill: `h-11 rounded-[24px]
  bg-v2-accent text-v2-text-primary px-6`, label in `.verge-label` inheriting ink.
- **`MetricStrip`** — one container, `rounded-[20px] border border-v2-border`, internal
  `grid gap-px bg-v2-border` so cells are separated by hairlines; cells `min-h-28 px-6
  py-5` alternating `bg-v2-surface` / `bg-v2-bg`; the accent cell flips to
  `bg-v2-accent text-v2-text-primary` (label at `/75` = 4.61:1).
- **`InsightCard`** — `rounded-[20px] border border-v2-border bg-v2-surface p-6`,
  `.verge-label` title, `text-4xl font-black` value, trend row with
  `TrendingUp`/`TrendingDown` in success/error, `text-xs` context line; hover
  `border-v2-accent` over 150ms; grid stagger `delay = index * 50ms`.
- **`ActivityTimeline`** — the StoryStream survivor: a 1px `bg-v2-purple-rule` rail at
  `left-[25px]` inside `pl-12`, event icon tiles (`border-*-70` colored per type: xp →
  warning, quiz → accent, tutor → purple, achievement → accent fill), relative timestamps
  from `v2.activity.*`, section eyebrow `.verge-label text-v2-accent` reading
  "storystream".
- **`LearningProgress`, `AIInsightPanel`, `DashboardSkeleton`** — same card language:
  hairline + `rounded-[20px]` + `.verge-label` titles.

### Buttons (observed patterns)
- **Primary:** `bg-v2-accent text-v2-text-primary` + **`hover:bg-white`**, `h-10`/`h-11`/
  `h-12`, `rounded-xl` or `rounded-[24px]`, `text-sm font-bold`, label in `.verge-label`
  *inheriting* the color (an inner `text-v2-inverted`/`text-white` pin is what caused the
  original white-on-white hover bug). Ink on teal = **7.17:1** at rest, ink on the white
  hover fill = 17.1:1 — both states pass. Auth buttons use the same pairing with
  `hover:bg-v2-accent-hover` (ink on `#0D9488` = 4.77:1).
- **Secondary / ghost:** transparent, `border border-v2-border
  text-v2-text-secondary` → `hover:border-v2-accent hover:text-v2-text-primary`.
- **Destructive:** `hover:border-v2-error hover:text-v2-error`.
- Disabled: `disabled:opacity-50`.

### Status & misc
- **No card/badge primitives.** The Verge-era `card-default`/`card-elevated`/
  `card-accent` and `badge-green`/`badge-yellow`/`badge-red`/`badge-muted` classes were
  **deleted** — referenced nowhere, with components hand-rolling the equivalent markup
  (`bg-*-10 text-*` chips, `rounded-[20px] border` cards). `hover:bg-card-hover` is
  unrelated: that is a live Tailwind *color* in `tailwind.config.ts`. See Known Drift §5.
- **Modals:** `bg-card border border-border rounded-xl shadow-xl` (legacy vocabulary).
- **Scrollbars:** 8px, `--v2-border` thumb; Recharts tooltips inherit `--v2-surface`.
- **`.prose`** (markdown output) inherits `--v2-*`; links `--v2-accent` + underline.

## Motion

| Moment | Value | Where |
|---|---|---|
| Page entrance | `opacity 0→1, y 8→0`, 180ms, `[0.16, 1, 0.3, 1]` | `DashboardLayout`, `HeroSection`, `MetricStrip` |
| Card entrance | `y 12→0`, 150ms, `delay = index * 50ms` | `InsightCard` |
| Hover feedback | `transition-colors` 150ms | cards, nav, buttons |
| Sidebar width | framer, 180ms | `SidebarV2` |
| Decorative loops | `cell-membrane` 12s / `cell-nucleus` 4s | sidebar bio-animation — **disabled under `prefers-reduced-motion`** |

No scroll reveals on this surface (that is marketing's 800ms `Reveal`). Every framer
entrance/transition in the dashboard tree runs under
`<MotionConfig reducedMotion="user">`, mounted in `src/app/(dashboard)/layout.tsx` —
the same guard the marketing layout uses — so a reduced-motion user gets no movement.
The CSS `cell-*` loops are independently disabled by the
`@media (prefers-reduced-motion: reduce)` block in `globals.css`.

## i18n

All visible shell strings come from `messages/{en,am}.json` under `v2.*` (plus
`workspace.*`, `assignments.*`, `studio.*`, `graph.*`, `twin.*`, `analytics.*`,
`admin.*`); EN/AM ship together — `npm run i18n:check` is strict. Still English-only:
`components/{agents,governance,misconceptions}`, API-driven content (quiz/lesson text,
AI summaries), and e2e strings. Word-bearing readouts must be keys, never literals;
pure notation (`09 /`, `F = ma`, `EN + AM`) stays literal.

## Do's and Don'ts

### Do
- **Do** use `v2-*` token names in new markup; the legacy `background`/`foreground`/
  `card`/`border` names exist only for older routes.
- **Do** separate with 1px `--v2-border` hairlines — `gap-px` grids, `border-b` section
  rules, card outlines.
- **Do** make hover a 150ms **color** change: `hover:border-v2-accent`,
  `hover:text-v2-text-primary`, `hover:text-v2-link-hover`. Accent buttons lighten with
  `hover:bg-white` alone — the label is already ink and needs no hover color.
- **Do** set `.verge-label` on every label, unit, trend and column header; keep
  `.verge-display` for headings only.
- **Do** put **ink** (`--v2-text-primary`, 7.17:1) text on `--v2-accent` fills — never
  white (2.49:1).
- **Do** keep card radius at `rounded-[20px]` (or `rounded-card`) and dense UI at
  `rounded-lg`/`rounded-xl`.
- **Do** keep status colors semantic: green = up/positive, amber = attention, red =
  down/destructive, purple = tutor events.
- **Do** wrap page content in `DashboardLayout` + `HeroSection` and keep headings in
  `v2.*` translation keys.
- **Do** reserve `shadow-xl` for modal/overlay layering.
- **Do** use the focus pattern in Elevation & Focus (`ring-2 ring-v2-focus`); it is the
  only focus treatment on this surface.

### Don't
- **Don't** import marketing tokens (`ink`, `mint`, `violet`, `sun`, `pink`, `flame`,
  `volt`, `.mk-surface`, `.display`, `.label-mono`) into `(dashboard)` markup.
- **Don't** add gradients, glows, glass panels, or hover lift/scale on cards.
- **Don't** restore the old vivid status shades (`#22C55E`, `#F59E0B`, `#EF4444`) — they
  measured 2.18 / 2.06 / 3.61:1 as text — or use `--v2-accent` as body text (2.38:1).
- **Don't** put white on an accent fill — `text-white`, `text-v2-inverted`,
  `text-v2-inverted/75` all measure 2.49:1 or worse, and an inner white pin re-creates
  the white-on-white hover. Ink only; `--v2-inverted` is deprecated.
- **Don't** read `design-system.ts`'s `colors`/`typography`/`shadows` — dead, Verge-dark,
  contradicts this surface.
- **Don't** introduce the Verge dark canvas (`#131313`) or hazard accents here; that
  polarity lives on the marketing surface.
- **Don't** add a new radius value or a new green.
- **Don't** reference `focus-visible:verge-focus` (it never generated CSS — removed), or
  dial `--v2-focus` back below the 3:1 floor.
- **Don't** strip the Ethiopic entries from `.verge-display`/`.verge-label` — both render
  translated `v2.*` copy.

## Known Drift & Defects

Evidence-based, ordered by severity. These are **not** the spec — they are the gap
between this spec and the code. Items marked ✅ **FIXED** were closed during this audit
and are kept for the record; the rest are open, each with a proposed fix.

1. **Mixed token vocabulary.** `v2-*` and legacy names are used side by side (counts in
   Scope & Token Authority). `primary` (emerald `#10b981`) is a second green with no
   `--v2-*` equivalent. *Fix:* migrate legacy names route-by-route; retire `primary`.
2. ✅ **FIXED — primary button hover rendered white-on-white.** The pattern was
   `bg-v2-accent text-v2-inverted … hover:bg-white` with no `hover:text-*`, so the label
   vanished on hover (16 sites across 14 files). The label is now ink at rest (§8), so
   `hover:bg-white` alone is correct (ink on white = 17.1:1); the redundant
   `hover:text-v2-text-primary` that was added first was removed, and `HeroSection`'s
   inner `.verge-label` span no longer pins a color. The two marketing sites with
   `hover:bg-white` were already correct (`text-ink` at base).
3. ✅ **FIXED — `focus-visible:verge-focus` generated no CSS.** It was referenced 7×
   (`SidebarV2` ×5, `ContextHeader.tsx:24`, `HeroSection.tsx:41`) but no `vergeFocus`
   utility existed, so those elements fell back to the UA ring. All 7 now use the
   house pattern already present 24× across auth/ui:
   `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-focus`.
   The token itself also failed the 3:1 indicator floor (2.66:1), so
   `--v2-focus` moved `#0EA5E9 → #0284C7` (**3.92:1** on `--v2-bg`, 4.10:1 on surface);
   this also repairs the auth/ui rings that were already using it.
4. ✅ **FIXED — `.verge-display` had no Ethiopic entry.** Amharic `v2.*` page titles
   resolved through the generic `sans-serif` fallback. Both shell stacks now name
   `var(--font-ethiopic), 'Noto Sans Ethiopic'` before the generic — `.verge-display`
   and `.verge-label`, the latter being the higher-traffic risk since every
   `MetricStrip`/`InsightCard` label is translated.
5. ✅ **FIXED — dead component classes.** The audit found 12 rules in `globals.css`
   with zero code references (verified project-wide, excluding this document):
   `card-default`, `card-elevated` (`shadow-lg`, which this spec otherwise bans),
   `card-accent`, `badge-green`/`yellow`/`red`/`muted`, `.verge-body`, plus
   `anim-pulse` (and its orphaned `@keyframes pulse-node`), `@keyframes cell-organelle`
   + `.cell-organelle`, and `.recharts-default-tooltip` / `.recharts-tooltip-label`.
   All deleted; the `cell-membrane`/`cell-nucleus` reduced-motion guard is untouched,
   and `.badge-*` had already been tree-shaken out of the shipped CSS — they never
   reached a browser. —1.6 KB.
6. **Radius duplication.** `rounded-[16px]` and `rounded-2xl` are both 16px;
   `rounded-[20px]`/`rounded-[24px]` literals coexist with `rounded-card`/`rounded-feature`
   (identical values). *Fix:* use the named scale.
7. ✅ **FIXED — no reduced-motion wrapper on the dashboard.** `MotionConfig
   reducedMotion="user"` existed only in `app/(marketing)/layout.tsx` while 8 dashboard
   files animated with framer-motion unguarded. It is now mounted in
   `src/app/(dashboard)/layout.tsx`, wrapping the whole shell tree (SidebarV2, chrome,
   page content); the CSS `cell-*` loops were already guarded separately.
8. ✅ **FIXED — accent-fill contrast.** White on `--v2-accent` measured 2.49:1 on every
   primary button's resting state, the `MetricStrip` accent cell (label at `/75`), the
   `ActivityTimeline` achievement tile, `SidebarV2`'s active row, chat bubbles, quiz
   chips and the auth submit buttons (`text-white`). **49 replacements across 32 files**
   now set accent-fill text to `--v2-text-primary` (**7.17:1**; `/75` label = 4.61:1;
   auth hover on `#0D9488` = 4.77:1) — the same inverted pairing `DESIGN.md` mandates
   for mint. `--v2-inverted` is left defined but unreferenced (see Colors).
9. ✅ **FIXED — status-color contrast.** `success`/`warning` as text measured 2.18 /
   2.06:1 and `error` 3.61:1 (large-text only), yet 57 call sites use them as text —
   11px trend labels in `InsightCard`/`ActivityTimeline`, `bg-*-10` status chips across
   22 files, `FormField`'s required asterisk. The three tokens were darkened in place to
   `#15803D` / `#B45309` / `#DC2626` → **4.81 / 4.81 / 4.63:1** on `--v2-bg` (5.02 /
   5.02 / 4.83:1 on surface), all also clearing the 3:1 non-text floor for the `/10`
   tints, borders, icons and chart fills. No call site changed; no solid status fill
   carries light text (all 51 fills are `/10` tints), so nothing else had to move.
10. ✅ **FIXED — dead Verge token block.** `typography`, `spacing` and `shadows` were
    imported nowhere and are gone. `colors` needed one correction to the original claim:
    it *was* still consumed — internally, by `marketing` (`ink: colors.background` …) —
    so rather than break that, its six values were inlined into `marketing` and all four
    exports deleted. `design-system.ts` now exports only `radii`, `motion`, `marketing`,
    `marketingTypography`, each imported by `tailwind.config.ts` or the landing
    components. —1.3 KB.
11. **No `lang="am"` type overrides on shell classes.** `.verge-display` (+0.8px) and
    `.verge-label` (1.4px, 11px) keep their Latin tracking and size under Amharic, while
    marketing ships `html[lang='am']` compensation for `.display`/`.label-mono`.
    *Fix:* mirror that block (larger label size, zero tracking, relaxed leading).

## Relationship to Other Documents

| Document | Status | Covers |
|---|---|---|
| **`DESIGN.md`** | normative | `(marketing)` — landing, privacy, terms |
| **`DESIGN-dashboard.md`** (this file) | normative | `(dashboard)` app shell + `dashboard-v2` |
| `docs/reference/theverge-extraction.md` | **non-normative reference** | extracted Verge (theverge.com) design language; source of the accent DNA, contains proprietary font specs and stale rules — do not build from it |
| `docs/archive/REDESIGN-PLAN-theverge.md` | archived | the 2025 plan to darken the dashboard; target never reached |
| `CONTEXT.md` | vocabulary | domain terms, component names, i18n rules |
