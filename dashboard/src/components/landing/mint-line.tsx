import type { ReactNode } from 'react'

/**
 * Rich-text `<mint>` renderer for `t.rich('…title…')` — closes the first
 * line and renders the tagged phrase as the headline's single mint line, the
 * same title_1 / title_2 split that PipelineSection and SubjectsSection build
 * with two keys.
 *
 * Lives in this server-safe module (NOT in `Reveal.tsx`, which is a
 * `'use client'` file): a server component importing a function from a client
 * module only receives a client reference, and next-intl fails with
 * `FORMATTING_ERROR: Value for "mint" must be of type function`.
 */
export function mintLine(chunks: ReactNode) {
  return (
    <>
      <br />
      <span className="text-mint">{chunks}</span>
    </>
  )
}
