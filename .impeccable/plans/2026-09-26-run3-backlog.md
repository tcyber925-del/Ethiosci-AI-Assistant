# Run-3 critique backlog — approved action plan

Source: `.impeccable/critique/2026-09-26T19-11-48Z__landing-architecture-dashboard-design-md-ea98a1ad.md` (25/36)
Scope decision: **all 5 findings** · Priority: **touch floor + quick wins first** · SSR: **make them SSR**

Work happens in `.worktrees/refactor-landing-architecture` (branch `refactor-landing-architecture`).

| # | Command | Finding | Status |
|---|---------|---------|--------|
| 1a | harden | **[P0]** sub-44px touch targets: header nav 21px, footer 28px, banner CTA | code done (nav `inline-flex min-h-11`, footer `[&_a]:min-h-11`, banner `before:-inset-x-2/-y-4` hit expander), pending live measure |
| 1b | harden | **[P1]** `v2-text-secondary` chevron (Accordion.tsx:110,140 → `chevronClassName` + `text-meta`) | code done (`itemChevronClassName` prop; dashboard default unchanged), pending computed-style check |
| 2 | clarify | **[P2]** `AmharicSection.tsx:21` hardcoded `09 / Lang / EN + AM` → `landing.lang_kicker` (185→186; **needs native AM review before merge**) | code done (`09 / ቋንቋ / EN + AM`), i18n strict passes; **native review still required** |
| 3 | harden | **[P1]** SSR trust: AskDemo/Stats/quiz copy server-side, `id="learn"` on skeleton, FAQ panels pre-hydration, Reveal `scripting:none` | code done (`ssr:false` dropped, AskDemo pre-paint reset, always-mounted hidden FAQ panels, `.mk-reveal` + CSS rule), pending SSR-HTML verification |
| 4 | polish | **[P1]** mint dilution StatsSection:68 + AskDemoSection:77 → solid mint | code done (solid `bg-mint text-ink` badge w/ ink dot; `border-mint` chip), grep = 0 diluted mint |
| 5 | critique | QA sweep (i18n strict, tsc, lint, vitest) + 4th critique run | QA green: i18n strict 186 keys ✓, tsc ✓, lint (2 pre-existing warnings, no errors) ✓, vitest **181/181** ✓ (Accordion tests updated to always-mounted contract); live verify + critique pending |

Verification: live dev-server measurements for touch targets, SSR HTML grep for `id="learn"` / literal keys / FAQ panels, computed-style checks for chevron contrast, grep for `mint/` dilution = 0.
