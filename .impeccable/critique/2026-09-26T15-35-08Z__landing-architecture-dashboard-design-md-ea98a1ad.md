---
target: .worktrees/refactor-landing-architecture/dashboard/DESIGN.md
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/mnt/data/tcyber/Projects/Tcyberobs/1-Projects/p000-Active/EthioBio AI Assistant/.worktrees/refactor-landing-architecture/dashboard/DESIGN.md"
target_fingerprint: "sha256:c3a864a16fdae88901fc217c317c55aa3bb069519b871cd74b0875547cab6e32"
target_path: /mnt/data/tcyber/Projects/Tcyberobs/1-Projects/p000-Active/EthioBio AI Assistant/.worktrees/refactor-landing-architecture/dashboard/DESIGN.md
timestamp: 2026-09-26T15-35-08Z
slug: landing-architecture-dashboard-design-md-ea98a1ad
closed: true
---
# Critique — .worktrees/refactor-landing-architecture/dashboard/DESIGN.md

Method: dual-agent (A: ses_f21bb5202ffeplpwVFj58ucvlG · B: ses_f21bb51efffephmK2x2dOxqBLF)
Mode: Persuade (marketing surface) · Date: 2026-09-26

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Skeletons + aria-busy, quiz aria-live — but hero ● Status / online and RAG / active are fake telemetry; language switch gives no feedback |
| 2 | Match System / Real World | 2 | Curriculum language excellent, but RAG / Verified, Mode / learn, Spaced review leak dev-jargon to Grade-7 students and parents |
| 3 | User Control and Freedom | 3 | Reversible EN/AM, quiz Try again — TeacherBanner dismiss permanent in localStorage, no skip-to-content on 13-section page |
| 4 | Consistency and Standards | 3 | Three auth verbs in first viewport → three destinations; ClosingSection no kicker; link-hover mint vs frontmatter link #3860be |
| 5 | Error Prevention | 2 | dynamic() lazy sections have no error boundary (stuck aria-busy skeleton), no raster fallback, quiz drops focus to body when disabling |
| 6 | Recognition Rather Than Recall | 3 | Four Explore → tiles all route to #learn; 01–12 ordinals carry no navigational meaning |
| 7 | Flexibility and Efficiency | n/a | Persuade read-through surface — accelerators do not apply |
| 8 | Aesthetic and Minimalist Design | 3 | Excellent micro-discipline — but hero runs five simultaneous animations; 13 equal-volume Anton shouts, no quiet |
| 9 | Error Recovery | 3 | Quiz wrong-path exemplary; stats_error no retry; failed lazy chunk undiagnosable |
| 10 | Help and Documentation | 2 | FAQ at position 12/13; nothing answers "Is it really free?" at the decision point |
| **Total** | | **24/36 (67%)** | **Acceptable** (9 heuristics scored; #7 n/a; misses Good by one point on #2/#5) |

## Design Specificity Verdict

Composition is unmistakably EthioSci (numbered kickers 01–12, six-stage hero engine, subject tiles Sun/Flame/Volt, Grade 10 · Unit 3 · p. 72 citation chips, bilingual Learn science / ሳይንስን ተማር, role-first signup routing). Visual language is inherited wholesale from DESIGN-theverge.md: #131313, #3cffd0, #5200ff, 2/4/20/24/30/40 radius ladder, hairline elevation, mono-uppercase labels. Roughly one-third product-authored, two-thirds category-interchangeable.

Craft rules are real (Hazard-Tape, Hairline, One-Face-Per-Job, Round-Ladder, No-Shadow each name failure + replacement; token fence keeps dashboard v2 world out). Structural hedging: the doc never states who the reader is — "Grades 7–12", "student", "parent", "Ethiopian classroom", "trust", "low bandwidth" appear nowhere. No audience, no emotional target, no trust strategy.

i18n claim false: line 175 says every stack ends in var(--font-ethiopic), but marketingTypography.label/.label-mono (globals.css:330) end at 'Courier New', monospace — that stack carries every translated button/nav link at 11px uppercase 0.18em tracking. Anton has no Ethiopic glyphs (Amharic hero falls back at line-height 0.9); AmharicSection.tsx:23 uses an undocumented font-ethiopic font-black 112px token.

Deterministic scan: DESIGN.md 0 findings; marketing pages 0 findings; globals.css + tailwind.config.ts 13 findings (2 warnings: side-tab globals.css:246, border-accent-on-rounded globals.css:110; advisories: undocumented #1a1a2e/#444444/#666666, 6 off-ramp font sizes, 0.5rem radius, codex-grid-background); landing components 23 design-system-font-size advisories. Detector parsed DESIGN.md as design-system context (10 of 13 styling findings vanish with --no-config). 15 of 23 landing advisories are false positives (flagged px values appear verbatim in DESIGN.md prose; frontmatter ramp holds only 3 fontSize entries). codex-grid-background waived in project config but fired from repo-root cwd (config discovery is cwd-relative). Under-reporting: tailwind.config.ts 13 undocumented hex → 0 findings; --v2-* colors unflagged. side-tab/border-accent warnings sit in dashboard-v2 styles the doc's fence excludes.

## Overall Impression

Craft rules good, implementation fidelity high where specified. But a craft spec pretending to be a persuasion spec: two-thirds inherited visual language, zero audience modeling, a false central i18n claim, no measured contrast despite an "accessibility floor" section. Biggest opportunity: make the Amharic voice and the parent/teacher trust arc first-class, documented, measured parts of the system.

## What's Working

- "Don't invent proof" with teeth (lines 334–337): fabricated-stats failure named, GET /auth/public-stats mandated, skeleton → em dash + stats_error recovery specified — implemented in StatsSection.tsx.
- Rules prescribe a replacement, not just a prohibition; token fence (314–316, 340–341) makes the marketing/dashboard boundary enforceable.
- High implementation fidelity: hero 7/5 and AskDemo 4/8 splits, py-5 → py-2 header compression past 40px, mint 2px/3px focus ring, mix-blend-luminosity 40→70% hover, 175-key EN/AM parity gate.

## Priority Issues

**[P1] Ethiopic type system unspecified; line 175 i18n claim false.** Every translated button renders at 11px uppercase 0.18em tracking with no Ethiopic face; Amharic hero falls back at line-height 0.9 (fidel collision risk). Fix: add a `locales:` frontmatter block (Ethiopic display face, size/leading ≥1.15 for lang="am", min label 14px, tracking ~0.04em, append var(--font-ethiopic) to label stack); correct line 175. → `$impeccable typeset`

**[P1] No contrast/a11y measurement despite "accessibility floor".** text-white/70 11px on violet ≈ 4.06:1; link #3860be on ink ≈ 3.2:1; .14 hairline ≈ 1.5:1 (below 3:1 for quiz-option affordance borders). Detector cannot see contrast. Fix: measured contrast table per token-pair; forbid white/70 on violet; ≥3:1 interactive borders; mark large-text-only combos. → `$impeccable audit`

**[P2] Frontmatter not buildable alone; stale tokens.** Detector proved it: 23 off-ramp advisories, 15 false positives, because the real ramp lives only in prose. clamp(48px,7vw,104px) unused by any component; label.fontWeight 400 vs code's 700; body no lineHeight; no motion/breakpoints/states/zIndex/spacing blocks; link #3860be dead. Fix: generate frontmatter from design-system.ts; delete dead tokens. → `$impeccable document`

**[P2] Spec contradicts itself and its implementation.** Hardcoded-copy ban (338) vs literal-mono blessing (318) → RAG / Verified ships untranslated; gradient ban (329) vs documented .sci-grid gradients (304); kicker rule (203) broken by ClosingSection/AudiencesSection; header hover mint (286) vs link token; "16 border-t separators" (201) vs 19 in code. Fix: one normative source per rule; bound mono exemption to numerals/units; sanction .sci-grid; delete dead link token. → `$impeccable document`

**[P2] Persuade layer missing: no audience, trust strategy, CTA hierarchy, anchor mechanics.** Three first-viewport CTAs → three destinations; four Explore tiles → #learn; no scroll-padding-top (sticky header buries every kicker/headline). Fix: Audience & Conversion section (one primary action, Launch App demoted), Anchor rule, distinct tile destinations or relabel. → `$impeccable shape`

## Persona Red Flags

**Jordan (First-Timer)** — Clicks `Launch App` (most confident CTA), lands on login with no visible create-account. Hero chips and ● Status / online look live but are inert. RAG / Verified, Spaced review unexplained at the decision point.

**Riley (Stress Tester)** — Four identical Explore → tiles jump to one anchor (promise/behavior mismatch). Quiz disables focused option (QuizDemoSection.tsx:66) → focus collapses to body. TeacherBanner dismiss permanent, no undo. LazySections no error boundary → stuck aria-busy skeleton forever. "16 separators" claim checkably wrong.

**Casey (Distracted Mobile)** — No scroll-padding-top: anchors land under the ~70px sticky header. ~4 thumb-scrolls of min-h-[320px] decoration before first interactive payoff. 3G: eager 1280×1280 hero raster + framer-motion + backdrop-blur first, the three proof demos behind skeletons; CTA only at position 1 and 13, no sticky/bottom action.

## Minor Observations

- display fontSize clamp decorative — headlines use arbitrary Tailwind values; doc/impl drifted.
- AudiencesSection leading-tight and AmharicSection leading-none are undocumented overrides of the 0.9 token.
- DESIGN-theverge.md:97 warned Anton should loosen to ~0.95; new doc commits 0.9 with no recorded decision.
- uppercase + 0.18em tracking meaningless for Ethiopic; never stated.
- Lines 181–182 "Headline" definition garbled (footer column heads inside the role).
- TeacherBanner dismiss p-1 ~22px — below the doc's own 44px floor (line 256).
- Eight shipping rasters claimed, never inventoried; no perf/bandwidth budget beyond "lazy-loaded".
- Detector gotcha: .impeccable/ config lives at worktree root; running from repo root loses the codex-grid-background waiver.

## Questions to Consider

1. Is "Night-Lab Console" the right emotional contract for a parent deciding whether to trust an AI with their child's homework — or the generated design's taste absorbed because the brief pinned it?
2. If Anton and Space Mono carry no Ethiopic glyphs and the label stack carries every translated button, what is the Amharic voice of EthioSci — why isn't it a first-class frontmatter token?
3. 90 lines on radii and hairlines, zero on contrast ratios while three shipped combos fail WCAG — on whose authority does the spec say so?
4. Is the primary action Start learning, Launch App, or Sign up free — and why does the system opine on 4px vs 2px corners but not that?
