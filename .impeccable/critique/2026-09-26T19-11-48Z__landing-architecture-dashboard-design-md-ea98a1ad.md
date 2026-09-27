---
target: .worktrees/refactor-landing-architecture/dashboard/DESIGN.md
total_score: 25
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 3
target_identity: "file:/mnt/data/tcyber/Projects/Tcyberobs/1-Projects/p000-Active/EthioBio AI Assistant/.worktrees/refactor-landing-architecture/dashboard/DESIGN.md"
target_fingerprint: "sha256:0a1bbcbb5fd710195169ab6b37abb7fa96b82f2e307071bd5c3576fecebe736b"
target_path: /mnt/data/tcyber/Projects/Tcyberobs/1-Projects/p000-Active/EthioBio AI Assistant/.worktrees/refactor-landing-architecture/dashboard/DESIGN.md
timestamp: 2026-09-26T19-11-48Z
slug: landing-architecture-dashboard-design-md-ea98a1ad
---
# Critique — .worktrees/refactor-landing-architecture/dashboard/DESIGN.md

Method: dual-agent (A: ses_f2105bf96ffeLj0t3AT796GsFC · B: ses_f2105bf8affeRkRDAUGYhdIUQX)
Mode: Persuade (marketing surface) · Date: 2026-09-26 · Run 3 for `landing-architecture-dashboard-design-md-ea98a1ad`

> **Provenance:** A had no browser in its sub-session — it worked from source, both-locale SSR HTML, and today's `.playwright-mcp/` captures; every pixel-dependent claim was spot-verified in the parent session (noted inline). Rubric correction disclosed: A initially scored on a 0–3 scale after a prompt error; scores were re-issued against the official 0–4 criteria before synthesis (per-change justifications retained). B ran the CLI detector and the live overlay; A completed without seeing any detector output.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Quiz progress bound to question, always-mounted `role="status"`, `aria-busy` skeletons, honest `stats_error` on the live 500 |
| 2 | Match System / Real World | 3 | 185/185 bilingual parity + `<html lang="am">` SSR verified; dev jargon concentrated in the section-03 diagram (`LangGraph`, `Dense + BM25`, `Cross-encoder`) and one English word leaked into the AM kicker |
| 3 | User Control and Freedom | 3 | Locale switch reversible, banner dismissible, quiz retry/next, reduced-motion honored — but the first nav item targets an id absent from SSR, and no skip link |
| 4 | Consistency and Standards | 3 | Radius ladder, `NN /` kickers, one-mint-line ×12, pixel-exact 2px/3px focus ring all hold — against 5 isolated drifts (the Priority Issues below) |
| 5 | Error Prevention | 3 | No fabricated stats (skeleton → em dash → `stats_error`), `aria-disabled` never drops focus, `fetchWithTimeout` + cancel flag, JSON-Ld duplicates FAQ |
| 6 | Recognition Rather Than Recall | 3 | Numbered kickers index the page, footer repeats nav — but "Learn" and four "Explore →" tiles resolve to the same ask-demo target; no FAQ entry in header |
| 7 | Flexibility and Efficiency | n/a | Persuade surface — accelerators do not apply (excluded) |
| 8 | Aesthetic and Minimalist Design | 3 | Zero shadows/gradients beyond the two sanctioned exceptions; hairline defaults via `:where()`; mint `#3cffd0` / ink `#131313` pixel-sampled on-token |
| 9 | Error Recovery | 2 | Quiz wrong-path exemplary; stats failure names the problem but **no retry**, and a pre-hydration dead click gives zero feedback |
| 10 | Help and Documentation | 2 | 8 real FAQ answers (JSON-Ld too) — but post-hydration only, and **no `/privacy`/`/terms` links on the marketing surface** despite FAQ #8 asking about student data |
| **Total** | | **25/36** | **69% — Acceptable, one point shy of Good** (9 scored; #7 n/a; applicable max 36) |

Run 2: 26/36 (72%) · Run 1: 24/36 (67%). Same heuristic set, same denominator — like-for-like.

## Fix-Pass Verification: run 2's five findings — all five resolved

| Run-2 finding | This run's independent evidence |
|---|---|
| **P1** focus ring invisible on closing band / dead class on FAQ | A, blind: *"Focus visibility is exactly to spec, twice"* — pixel-verified 2px mint/3px offset on FAQ, 2px ink `(19,19,19)` on the mint band; parent re-measured live ✓ |
| **P1** quiz counter lies (`Question 1 of 1` → advanced without content) | A: progress bound strictly to `qIndex`; parent live: EN `Question 1 of 2 → 2 of 2`, AM `ጥያቄ 1 ከ 2 → 2 ከ 2`, bar 50% → 100% ✓ |
| **P1** quiz `disabled` drops keyboard focus, no live region | A: *"a model interaction"* — `aria-disabled` + guard, always-mounted `role="status"`, focus moves to the new question ✓ |
| **P1** toggle 63×24px, half the 44px floor | A: 44px segments; parent measured **77×44** desktop, **82×44 / 70×44** in the AM hamburger; DESIGN.md no longer codifies the old size ✓ |
| **P2** mint line ships in 2 of 9 h2s; missing h2s; accordion dashboard type | A, blind: *"every section h2 carries exactly one mint line (verified across all 12 in SSR)"*; Audiences h2s present; FAQ triggers measure 16px ✓ |

Three runtime defects surfaced by the parent's live verification and fixed before this critique: three server sections rendered literal `landing.*_title` keys (`mintLine` lived in a `'use client'` module → next-intl got a client reference, not a function → moved to server-safe `mint-line.tsx`; literal keys now **0**); a mixed-hash font compile rendered Times New Roman (stale HTML/CSS after gstatic fetch failures → `.next` wipe + restart; all 7 font variables resolve, Anton/Space Grotesk/Ethiopic confirmed loaded); the FAQ trigger's `text-base` lost the cascade to `text-sm` (→ `!text-base`, measured **16px**). QA after all fixes: i18n strict **185/185**, tsc clean, lint clean, **181/181 tests**.

## Design Specificity Verdict — **SPECIFIC**

**LLM assessment (A):** Authored for this product, not a category kit. The kicker map is a composition manifest (`01 / … 12 / Answers` with two named exceptions); `locales.am` frontmatter encodes fidel-specific `line-height 1.06 / letter-spacing 0 / font-synthesis: none`; the contrast table carries product-specific verdicts (`ink on volt 4.98:1`, `white/70 banned on violet`); provenance and history are baked in (ported font stacks, brief-pinning, "the fabricated fallback numbers were removed"). Generic residue ≈ one fifth: token names, radius numbers, the 1280/12-col paragraph, focus-ring boilerplate.

**Deterministic scan (B, CLI, from worktree root):** exit 2 — **94 findings** = 8 primary + 86 advisory. Four-way classification: **0 genuine** · **4 prose gaps** (FAQ/Stats `md:text-[56px]` ×2; scrollbar `#444444`/`#666666` ×2 — reclassified from run 2's "genuine" bucket this run, with justification: deliberate, `.mk-surface`-scoped, spec has no scrollbar token — either way the fix is spec prose) · **59 dashboard-world** — critically, **all 8 primary findings live in dashboard code, and `(marketing)/` produced zero findings of any severity** · **31 false positives**. B proved the false-positive mechanism empirically (probe file): the font-size ramp is built only from frontmatter scalars → envelope `{11, 16, 40, 120}px`, so every documented per-slot step flags by construction. Tool quirk recorded: `impeccable detect "…/(marketing)"` silently exits 0 — scan from `dashboard/`.

**Visual overlays (B):** injection succeeded (preflight mutation → `detect.js` injected and executed → console group **`[impeccable] 7 anti-patterns found`**): `layout-transition` ×2 (sticky header `transition: padding`), `all-caps-body` ×3 (the uppercase `label-mono` kickers — spec-sanctioned label style → false positive), `em-dash-overuse` (14 em-dashes in body copy — genuine style note neither A nor the CLI flagged), `nested-cards` ×2 (one on a `div.hidden` — unreliable), `codex-grid-background` (the reasoned ignore; overlay receives no project config), `dark-glow #ffba00` (appeared only on a later collect — timing-sensitive, recorded as unreliable). Per the flow the live server was stopped (8400 verified down), all injection/overlay nodes, styles and globals removed, title restored — verified twice plus a full reload; `git status` identical to pre-run; the dev server was untouched (200 after cleanup). The overlay is no longer displayed.

**Agreement map:** A and B never disagreed — the rule families barely overlap. The CLI's 86 advisories are all documented-but-unread ramp steps or dashboard-world; A's findings (touch floor, mint dilution, `v2-*` leak) fall in rule families the CLI doesn't have. The overlay is what caught A's misses (em-dash density, `transition: padding`).

## Overall Impression

The fix-pass landed exactly where it aimed: all five run-2 findings are independently verified resolved, bilingual parity and the focus ring now survive pixel inspection, and the deterministic scan's marketing-route finding count is **zero**. The score moving 26 → 25 is not a regression in the build — it is (a) blind-run variance and (b) this run surfacing **pre-existing issues that were never in the approved scope**: the touch floor is broken by nav/footer links the spec itself mandates at 44px, the three sections that perform the product's thesis ship behind `ssr:false` while `#learn` doesn't exist pre-hydration, and two explicit Don'ts (mint dilution, `v2-*` token) are violated by shared components. Biggest single opportunity: close the trust gap — make the proof sections server-rendered and put `#learn` where six links already point.

## What's Working

1. **Focus visibility is exactly to spec, twice.** Mint outline 2px/3px on the FAQ trigger and ink `(19,19,19)` on the mint closing band — both pixel-sampled, both matching the spec's Named Rule.
2. **Bilingual parity is real, not claimed.** Key-set diff of `landing` = ∅ at 185/185; `Cookie: NEXT_LOCALE=am` returns fully translated markup; the only 4 identical values are sanctioned literals.
3. **No invented proof, and the failure state is designed.** `StatsSection` renders em dashes + `stats_error` under the live 500 — the spec's "don't invent proof" rule honored in actual failure, console-confirmed today.
4. **The quiz demo is a model interaction** — honest counter, focus-preserving `aria-disabled`, always-mounted live region, focus advanced to the next question, `motion-reduce` on the XP pulse.

## Priority Issues (new — none were in the approved fix scope; report-only per the critique contract)

**[P0] Sub-44px touch targets on header nav, footer links, banner CTA — the spec's own floor is broken**
*Why it matters:* `DESIGN.md:414` — "Do honor the floor of the accessibility brief: **44px minimum targets**." Casey taps footer links on every visit.
*Evidence (parent-verified live):* header nav links `display:inline`, no padding → **21px** tall (A estimated 13px; measured 21px); footer links `py-1` → **28px** tall ×5 measured; TeacherBanner CTA absent in this session (dismissed state) — A's screenshot estimate ≈14px. Mobile menu rows and all buttons/quiz options **do** comply — this is specific to nav/footer/banner.
*Fix:* header links `inline-flex min-h-11 items-center`; footer `[&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center`; banner link a `before:-inset-2` hit expander (the dismiss button already does this).
*Suggested command*: `$impeccable harden`

**[P1] The persuasion engine is JS-gated, and `#learn` doesn't exist until it loads**
*Why it matters:* Jordan's trust verdict forms in exactly the three sections shipped as `ssr:false` skeletons; on a failed/slow bundle (realistic on Ethiopian mobile networks) the hero copy, hero CTAs and all four subject tiles sit at `opacity:0`, and six links point at an id that **does not exist in either locale's SSR (parent-verified: `id="learn"` = 0)**. FAQ answers (including "Is EthioSci free? → Yes") exist only post-hydration. Contradicts the spec's own "the page performs its own thesis."
*Fix:* render AskDemo/Stats copy server-side (hydrate the animation only); put `id="learn"` on the skeleton section so anchors resolve pre-hydration; mount FAQ panels with `hidden`/`max-h-0` instead of unmounting; give `Reveal` a `@media (scripting: none)` safety.
*Suggested command*: `$impeccable harden`

**[P1] Hazard-Tape Rule broken twice by diluted mint**
*Why it matters:* Named Rule (`DESIGN.md:205-207, :427-428`) — "Never dilute them into translucent washes, glows, or gradient stops."
*Evidence (parent grep-confirmed):* `StatsSection.tsx:68` `border border-mint/30 bg-mint/10`; `AskDemoSection.tsx:77` `border border-mint/50`. Contrast is fine (14.4:1) — the violation is the rule itself, and it's a pattern, not a typo. Neither is in the spec's exception list.
*Fix:* badge → solid `bg-mint text-ink` (or ink panel + full-strength mint dot); citation chip → solid `border-mint` on ink.
*Suggested command*: `$impeccable polish`

**[P1] Banned dashboard token `v2-text-secondary` renders the FAQ chevron — and it measures 2.89:1**
*Why it matters:* Spec Don't (`DESIGN.md:437-438`) bans `v2-*` on this surface; interactive indicators have a 3:1 floor.
*Evidence (parent-verified):* `Accordion.tsx:110` (default `contentClassName`) + `:140` (chevron); computed color `rgb(100,116,139)` = `#64748B` on slate `#2d2d2d` → **2.89:1**. The only `v2-*` leak into marketing — via the shared Accordion.
*Fix:* add a `chevronClassName` prop; marketing passes `text-meta` (6.1:1 on ink).
*Suggested command*: `$impeccable harden`

**[P2] English word hardcoded into the Amharic page: `09 / Lang / EN + AM`**
*Why it matters:* Spec Don't — "all visible strings come from `messages/*`." The hero's twin phrase *is* localized (`ቋንቋ / EN + AM`), so the page says it right twice and wrong once.
*Evidence (parent curl-confirmed in AM SSR):* `AmharicSection.tsx:21` literal → 1 hit under `NEXT_LOCALE=am`.
*Fix:* add `landing.lang_kicker` (EN/AM), render via `t()`, keep numerals literal.
*Suggested command*: `$impeccable clarify`

## Persona Red Flags

**Jordan (first-timer):** The #1 objection — "Is EthioSci free?" — exists in messages, JSON-Ld and FAQ, but **not in the SSR document** (0 accordion panels server-rendered). No `/privacy` or `/terms` link anywhere on the marketing surface while FAQ #8 discusses student data. Platform numbers render four em dashes today (500 in this env) — the handling is spec-perfect, the effect is an empty proof section. Stack-tag jargon (`LangGraph`, `Cross-encoder`) sits in the main diagram.

**Riley (stress tester):** 6 links → `#learn` that doesn't exist pre-hydration; nav "Learn", footer "Learn" and four "Explore →" tiles resolve to the same target ("Explore Biology" lands on a generic chat); no skip link (WCAG gap, not a spec violation); pre-hydration click = zero feedback. What passes: clean heading order, `aria-expanded`/`aria-controls`, `role="group"`+`aria-pressed` toggle, focus-preserving quiz options, decorative SVG `aria-hidden`.

**Casey (distracted mobile):** Footer is the pinch point — **28px** targets vs the 44px floor (P0). Top ~250px of the 390px viewport is banner+header+menu chrome when the menu is open. Positives verified: hamburger 44px, language segments 44px, no horizontal overflow (`scrollW == clientW` = 375), Amharic quiz keeps all options ≥56px, reduced-motion respected (`MotionConfig` + CSS overrides).

## Minor Observations

- **B's overlay caught what LLM + CLI missed:** 14 em-dashes in body copy; `transition: padding` on the sticky header (layout-property animation).
- **New spec-prose drifts (A):** TeacherBanner copy 12px vs spec 14px; footer copyright 12px vs spec 14px; FAQ panel `px-4` vs ladder `p-5+`; FAQ `mx-auto max-w-3xl` breaks the 1280 rail (undocumented composition exception); lazy skeletons' `animate-pulse` lacks `motion-reduce:animate-none`.
- **Detector prose gaps (B, carried):** scrollbar `#444444`/`#666666` undocumented; FAQ/Stats `md:text-[56px]` step not enumerated in Hierarchy.
- **Cleared since run 2:** `scroll-padding` — A checked and judged `py-24` clears the compacted sticky header (not a defect). Run-2's claim stands corrected.
- **Carried, still open/report-only:** root `force-dynamic`, Anton fallback metrics, Spectral delivery, `favicon.ico` 404 (no `icons` in layout), `console.log` `StatsSection:37`, `/privacy`+`/terms` h1→h3 jump, quiz wrong state has no `✗` label, global `html { scroll-behavior: smooth }` leaks past `.mk-surface`, one never-used woff2 preload (console warning), `final-en-hero.png` captured mid-animation (unverified whether users ever see it), Clerk dev-keys warning, `public-stats` 500 (environment, not code).
- **A's unverified:** end-to-end tab order, CLS impact of the TeacherBanner's post-hydration dismissal, any route other than `/`.

## Questions to Consider

1. The page's whole argument is "we verify every claim" — what does a keyboard user conclude when the FAQ chevron is a 2.89:1 gray and a footer link is half the spec's own touch floor?
2. The three sections that *prove* the product (typed answer, quiz, live numbers) are the three that require JavaScript — is that a performance decision worth keeping, or the wrong trade for the target network?
3. The spec bans mint dilution by name, twice — are the two translucent chips oversights, or has "mint on demand" quietly become the rule?
