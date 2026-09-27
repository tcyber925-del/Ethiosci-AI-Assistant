'use client'

import { useTranslations } from 'next-intl'
import { useInView } from '@/hooks/useInView'
import { Label } from './Reveal'

/**
 * "03 / How EthioSci thinks" — the eight-stage pipeline grid, written for a
 * general audience: plain-verb stage names and benefit-first descriptions
 * (copy lives in `messages/*` under `pipe_stage_*`, EN + AM). Cells light up
 * progressively when scrolled into view (the last stage lands on mint); this
 * is a state-driven CSS transition, not an entrance animation, so it stays
 * CSS rather than framer-motion.
 */
const stageKeys = [
  'pipe_stage_1_name',
  'pipe_stage_2_name',
  'pipe_stage_3_name',
  'pipe_stage_4_name',
  'pipe_stage_5_name',
  'pipe_stage_6_name',
  'pipe_stage_7_name',
  'pipe_stage_8_name',
] as const

const descKeys = [
  'pipe_stage_1_desc',
  'pipe_stage_2_desc',
  'pipe_stage_3_desc',
  'pipe_stage_4_desc',
  'pipe_stage_5_desc',
  'pipe_stage_6_desc',
  'pipe_stage_7_desc',
  'pipe_stage_8_desc',
] as const

/** Proof chips a learner, teacher or parent can check — translated copy. */
const wordTagKeys = [
  'tag_cited',
  'tag_curriculum_grounded',
  'tag_free_learners',
  'tag_bilingual',
] as const

export default function PipelineSection() {
  const t = useTranslations('landing')
  const { ref, inView } = useInView<HTMLOListElement>(0.2)

  return (
    <section id="how" className="border-t">
      <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-8">
        <Label>{t('pipe_kicker')}</Label>
        <h2 className="display mt-6 text-[48px] md:text-[88px]">
          {t('pipe_title_1')}
          <br />
          <span className="text-mint">{t('pipe_title_2')}</span>
        </h2>

        <ol
          ref={ref}
          className="mt-14 grid gap-px overflow-hidden rounded-feature border bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {stageKeys.map((nameKey, i) => {
            const last = i === stageKeys.length - 1
            return (
              <li
                key={nameKey}
                className={`p-6 transition-colors duration-500 ${
                  inView ? (last ? 'bg-mint text-ink' : 'bg-ink') : 'bg-ink'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`size-2.5 rounded-full transition-colors duration-500 ${
                      inView ? (last ? 'bg-ink' : 'bg-mint') : 'bg-slate'
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  />
                  <span className={`label-mono ${last && inView ? 'text-ink' : 'text-meta'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="display mt-8 text-4xl">{t(nameKey)}</h3>
                <p className={`mt-2 text-sm ${last && inView ? 'text-ink' : 'text-soft'}`}>
                  {t(descKeys[i])}
                </p>
              </li>
            )
          })}
        </ol>

        <ul className="mt-6 flex flex-wrap gap-2">
          {wordTagKeys.map((key) => (
            <li key={key} className="label-mono rounded-input border px-3 py-2 text-meta">
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
