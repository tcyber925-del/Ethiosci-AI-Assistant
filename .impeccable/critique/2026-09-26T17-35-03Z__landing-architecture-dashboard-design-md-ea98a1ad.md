---
target: .worktrees/refactor-landing-architecture/dashboard/DESIGN.md
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 4
target_identity: "file:/mnt/data/tcyber/Projects/Tcyberobs/1-Projects/p000-Active/EthioBio AI Assistant/.worktrees/refactor-landing-architecture/dashboard/DESIGN.md"
target_fingerprint: "sha256:cbd5603c9590f90ac10a474888ca5cd821309ac72a6b459d1d880170895485db"
target_path: /mnt/data/tcyber/Projects/Tcyberobs/1-Projects/p000-Active/EthioBio AI Assistant/.worktrees/refactor-landing-architecture/dashboard/DESIGN.md
timestamp: 2026-09-26T17-35-03Z
slug: landing-architecture-dashboard-design-md-ea98a1ad
---
# Critique — .worktrees/refactor-landing-architecture/dashboard/DESIGN.md

Method: dual-agent (A: ses_f21524d28ffeSbDxx4hHaf2SWl · B: ses_f21524d14ffeW9B2iiDACya0sz)
Mode: Persuade (marketing surface) · Date: 2026-09-26

> **Provenance note:** the multi-tab browser MCP was unavailable in Assessment A's sub-session (`browser.disconnected` on every attempt), so A worked from source, the SSR HTML of both locales, and the shipped CSS bundle instead of pixels. Pixel-dependent claims were spot-verified in the parent session (noted inline below). Assessment B ran the CLI detector and the live browser overlay normally.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Quiz readout flips to "Question 2 of 5" while question 1 and the same options stay on screen; nav has no current-section state. Good: `aria-busy` skeletons, `aria-live` XP, `aria-expanded` FAQ, `aria-pressed` EN/AM |
| 2 | Match System / Real World | 3 | Jargon leaks to parents/learners: `RAG / Verified / Curriculum grounded` and the `LangGraph · Hybrid RAG · Dense + BM25 · Cross-encoder` tag row are never defined |
| 3 | User Control and Freedom | 3 | AskDemo typing cannot be skipped/replayed; answering the quiz drops keyboard focus to `body`; mobile menu has no Esc; TeacherBanner dismiss permanent in localStorage |
| 4 | Consistency and Standards | 3 | 7 of 9 white-ground h2s omit the mandated mint line; AudiencesSection + AmharicSection ship no `h2` at all; FAQ accordion carries dashboard chrome (`focus-visible:outline-none`, dead `ring-v2-focus`, `text-sm font-medium`) |
| 5 | Error Prevention | 3 | `StatsSection` treats `active_students === 0` as failure; locale switch mid-typing resumes typewriter at old character index |
| 6 | Recognition Rather Than Recall | 3 | All four subject tiles read `Explore →` but land on the same `#learn`; no active nav state on a 13-section page |
| 7 | Flexibility and Efficiency of Use | n/a | Persuade surface — accelerators do not apply |
| 8 | Aesthetic and Minimalist Design | 3 | Hero fires mint on ~12 elements in the first viewport, diluting "mint = you can act on this"; pipeline's 6-tag row restates the 8 stages already shown |
| 9 | Error Recovery | 3 | `stats_error` names the problem but offers no retry; quiz recovery is excellent but the feedback paragraph has no `aria-live` (only XP does) |
| 10 | Help and Documentation | 2 | Help exists only as the collapsed 8-item FAQ at section 12; no contextual help where real questions form (the two demos) |
| **Total** | | **26/36** | **72% — Good** (9 heuristics scored; #7 n/a; applicable max 36) |

Previous run: 24/36 (67%).

## Design Specificity Verdict

**LLM assessment:** Authored for this product — with three blocks that are category-interchangeable. The page performs its own thesis: AskDemo types a real answer then reveals `Grade 10 · Biology · Unit 3` citation chips; Pipeline's eight stages mirror this repo's actual graph; Trust puts a `(Grade X, Unit Y, p. Z)` citation beside a photographed textbook; subject tiles carry `C₆H₁₂O₆ / Na⁺ + Cl⁻ / F = ma`; the bilingual showcase pairs `Learn science` with `ሳይንስን ተማር`. An unrelated edtech product could not drop its content in without rewriting the diagrams, formulas, citation language and kicker taxonomy. Interchangeable parts: Journey (7 gamified steps), Stats (4 metric cards), Audiences (teacher/parent split) — stock edtech furniture. The specific structural sameness: 13 linear `kicker → h2 → content → hairline` sections make the rhythm a template (which is the spec's own rule, so it reads as discipline), but **7 of 9 white-ground headlines ship without the mandated mint accent line** — flattening the very rhythm that makes the system feel authored.

**Deterministic scan (Assessment B, CLI, from worktree root):** exit 2 — **49 findings**: `design-system-font-size` 43 (advisory), `design-system-color` 3, `design-system-radius` 1, `side-tab` 1 (warning), `border-accent-on-rounded` 1 (warning). Three-way classification: **2 genuine** marketing items (`globals.css:294/298` — undocumented `#444444`/`#666666` scrollbar colors on `.mk-surface`-scoped selectors), **2 prose gaps** (FaqSection/StatsSection `md:text-[56px]` step not enumerated in Hierarchy), **10 dashboard-world** (all in `globals.css` outside the marketing block — the two warnings included), **35 false positives**. B empirically confirmed the ramp limitation: the detector builds `design-system-font-size`'s ramp only from frontmatter `typography.*.fontSize` (envelope {40,120,16,11}), so `text-[40px]`/`text-[120px]` pass while every documented per-slot step flags — and even DESIGN.md's own `locales:` `14px` flags. Zero findings in `(marketing)/` and `LanguageSwitcher.tsx`. The overlay agreed with the CLI on the dashboard-world items (`dark-glow #ffba00` on `body`, em-dash/all-caps on `body` v2 classes) and added marketing-side `nested-cards` ×2 (language-toggle track, Trust figcaption) plus `codex-grid-background` (already reasoned-ignored CLI-side; ignore rules don't apply to the overlay).

**Visual overlays:** injection succeeded — `detect.js` ran in the page (preflight mutation ✅, console group `[impeccable] 7 anti-patterns found`). Per the flow, the live server was stopped (port 8400 verified down), injection/preflight tags removed and the title restored, so the overlay is no longer displayed.

## Overall Impression

The four-command fix-pass landed where it aimed: the two original P1s (Amharic type system, measured contrast) and the spec-integrity P2 are resolved — A independently verified 181/181 EN/AM key parity, the Amharic CSS compensation, the honest contrast table (14.4:1, 4.98:1) enforced in code, and no spec self-contradictions in the audited areas. The score moved 24 → 26. What remains is no longer "the spec lies" but **interaction honesty and accessibility edges**: a quiz counter that claims a question 2, focus rings that vanish where users convert, and a language toggle half the touch-target floor. Biggest single opportunity: make the interactive proof (quiz) truthful and keyboard-complete — it is the page's trust argument.

## What's Working

1. **Spec-to-build token discipline that survives compilation.** `.mk-surface` scopes the type stack, hairline borders, mint focus ring; radius ladder and the no-shadow/no-gradient rule hold in shipped CSS; the measured contrast table is honest and enforced (`bg-volt text-ink` in SubjectsSection).
2. **Bilingual parity as a system, not a translation pass.** 181/181 keys both files (verified key-set diff = ∅), Ethiopic compensation in CSS (`lang='am' .display` 1.06/0/600/synthesis-none, labels 14px/0.04em), Ethiopic fallback in every stack, word-bearing readouts translated while notation stays literal.
3. **The demo sections demonstrate instead of claiming — and stats refuse to fabricate.** Typed answer + citation chips, quiz correct/wrong/retry/XP loop, and skeleton → em dash → `stats_error` with the live badge gated on real data.

## Priority Issues

**[P1] What**: The mint focus ring is invisible on the closing band and the FAQ's focus indicator is a dead-class blue ring. `:where(.mk-surface) :focus-visible { outline: 2px solid #3cffd0 }` (specificity 0,1,0) is overridden on all 8 FAQ buttons by `Accordion.tsx:129`'s `focus-visible:outline-none` (0,2,0; built CSS has no `@layer`), leaving `ring-v2-focus` — **not defined in tailwind.config.ts** (parent-verified: 0 occurrences) → Tailwind default blue at ~1.9:1 on slate. On the mint closing band, the 3px-offset mint outline falls on `bg-mint` → mint-on-mint 1:1, both CTAs have no perceivable focus.
**Why it matters**: keyboard/low-vision users get no indicator on the help section and on the two highest-intent buttons — on a surface whose spec sells the mint focus ring as "the system's only raised moment".
**Fix**: drop `focus-visible:outline-none` from Accordion; define or delete `v2-focus`; ink outline modifier on the closing band (`outline-color: #131313`, 3:1+ on mint).
**Suggested command**: $impeccable harden

**[P1] What**: The quiz demo's status readout lies. Answering flips `ጥያቄ 1 ከ 5` → `ጥያቄ 2 ከ 5` (parent-verified live: readout advanced, h3 text identical) and the bar 20% → 40%, while the question, options and card stay unchanged — there is no question 2.
**Why it matters**: the one interactive proof of "adaptive quizzing" contradicts itself in its own status line; Riley's test ("appears to work and produces a wrong result") fails exactly here.
**Fix**: hold at `Question 1 of 5` until a second question exists, ship a real 2-question sequence, or relabel as a one-question sample (`Sample / 1 of 5`). Never advance a counter without content behind it.
**Suggested command**: $impeccable clarify

**[P1] What**: Answering the quiz sets `disabled` on all four options → keyboard focus drops to `body`; "Try again" is only reachable by re-tabbing a 13-section page. Feedback paragraph has no `aria-live` (only XP does); `role="radio"` in `role="radiogroup"` has no roving tabindex or arrow-key handling.
**Why it matters**: the page's main interaction ejects keyboard and screen-reader users at the moment of engagement.
**Fix**: `aria-disabled` + click guard instead of `disabled`, move focus to the result row, `aria-live="polite"` on feedback, implement arrow keys or drop `role="radio"` for plain buttons + `aria-pressed`.
**Suggested command**: $impeccable harden

**[P1] What**: EN/AM toggle segments are **63×24px** (parent-measured) in header and hamburger — half the 44px floor the same spec mandates (`min-h-11`/`min-h-12`), and DESIGN.md itself documents the failing size (`Inputs/Fields → Language toggle: text-xs, px-2.5 py-1`) while the Buttons section mandates ≥44px. Two segments sit adjacent in one track; a mis-tap silently switches language.
**Why it matters**: EN/AM parity is a headline brand feature and its control is the smallest target on the page; half the audience reaches every CTA through it.
**Fix**: `min-h-11` + `px-4` on both segments; delete the small values from DESIGN.md so the spec stops codifying the failure.
**Suggested command**: $impeccable harden

**[P2] What**: Section-skeleton drift: the Do's rule "Anton h2 that carries exactly one mint line" ships in **2 of 9** white-ground h2s (parent-verified: Pipeline, Subjects only); `AudiencesSection` and `AmharicSection` ship **no `h2` at all** (display lines are `<p>`); the FAQ accordion brings dashboard typography (`text-sm font-medium`) to a surface whose One-Face-Per-Job rule assigns all buttons to `label-mono`.
**Why it matters**: 7 sections read flat (the Journey→Stream valley); missing h2s break screen-reader section traversal; undocumented exceptions make DESIGN.md untrustworthy as a contract.
**Fix**: add one mint line to those h2s (documenting Closing/Amharic exceptions) **or** narrow the rule to what the build does; convert Audiences/Amharic display lines to headings; document or fix the accordion's button typography and drop its `v2-*` classes.
**Suggested command**: $impeccable audit

## Persona Red Flags

**Jordan (First-Timer)**: "Is EthioSci free?" — the #1 objection — exists only collapsed in FAQ #12; nothing above the fold says free. `RAG / Verified / Curriculum grounded` and the stack tag row read as jargon a parent assumes they should know. All four `Explore →` tiles go to the same generic demo (Mathematics tile lands on a Biology chat) — label promises, destination doesn't deliver. No visible support path except an external Telegram link.

**Riley (Stress Tester)**: Quiz answers → counter claims question 2 over an unchanged question, options become `disabled`. `/auth/public-stats` 500s on this instance → four em dashes + gray error line, no retry; `active_students === 0` would also read as failure. On `/privacy` and `/terms` all seven in-page anchors (`#learn`, `#subjects`, …) have no targets — nav/footer links silently do nothing; on `/` the anchors are missing pre-hydration (`AskDemoSection` is `ssr: false`). Language switch mid-typing resumes the typewriter at the old index. Banner dismiss: permanent, no undo.

**Casey (Distracted Mobile)**: toggle segments 24px (half the floor; mis-tap switches language). Primary CTAs live in top half / very bottom; nothing actionable in the thumb zone during 10 sections of scrolling. Journey's 7-step strip and Pipeline's 500ms staggers are not gated by `prefers-reduced-motion` (only `.anim-*`/`.caret` are). *(Claim that the AM header overflows 390px was **disproven** in parent pixel-check: −15px, no horizontal overflow.)*

## Minor Observations

- `console.log('Stats fetch error…')` left in `StatsSection.tsx:37` (parent-verified) — production console noise (mirrors the earlier `debug: true` cleanup pattern).
- Zero `scroll-padding-top`/`scroll-margin` in CSS (parent-verified) → anchors land under the sticky header (the original P2's "Anchor rule" fix — still open).
- `/privacy`, `/terms` heading order jumps `h1 → h3` (footer heads).
- `ring-v2-focus` dead class also on `Select`, `OAuthButton`, ~10 auth pages — one theme entry fixes all.
- Quiz wrong state has no `✗` label (correct has `✓ Correct`) — color + one text cue.
- Genuine detector items: undocumented scrollbar colors `#444444`/`#666666` on marketing selectors; FAQ/Stats `md:text-[56px]` step missing from Hierarchy prose.
- Console: `favicon.ico` 404 + 4 unused woff2 preloads.
- Out-of-scope P2s carried from the audit (documented, not fixed): root `force-dynamic` on the landing page, Anton fallback metrics in `next/font`, Spectral font delivery.

## Questions to Consider

1. If "Is EthioSci free?" is the first FAQ entry, what would it take to put that answer where the objection forms — hero lede or the mint closing band — instead of collapsed at section 12?
2. The spec mandates exactly one mint line per h2 and the build ships it in 2 of 9 — is the rule still the rule, or has the surface quietly become "mint on demand"? Which one should bend?
3. Is the quiz demo a demo of one question or of a five-question flow? Right now it claims the second and shows the first — which of those are we willing to keep?
4. The page's whole argument is "we verify every claim" — what does a keyboard user conclude when their focus ring vanishes on the closing CTA and turns into a 1.9:1 blue ghost on the FAQ?
5. The pipeline tag row names your stack to a parent scrolling for a tutor: is the buyer a teacher, a ministry reviewer, or an engineer? What would that row look like if written for the first one?
