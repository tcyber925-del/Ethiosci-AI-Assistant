'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { motion as motionTokens } from '@/styles/design-system'
import { Label, Reveal } from './Reveal'
import { mintLine } from './mint-line'

/**
 * "06 / Try a quiz" — a mocked adaptive-quiz card on the violet band. Two
 * real questions: Q1's designed correct answer is A (DNA), Q2's is B (ATP),
 * and the counter/progress bar only advance when the question actually does
 * (Question 1 of 2 → 2 of 2). Answered options stay focusable via
 * `aria-disabled` + an onClick guard — never `disabled` — so keyboard focus
 * is never dropped to `<body>`. The feedback line is an always-mounted
 * `role="status"` region so screen readers announce results. Result row
 * rises in with framer-motion instead of the source's CSS keyframe.
 * Client-side only: no API call, per the design brief.
 */
const options: [string, string][] = [
  ['A', 'DNA'],
  ['B', 'ATP'],
  ['C', 'Glucose'],
  ['D', 'Protein'],
]

export default function QuizDemoSection() {
  const t = useTranslations('landing')
  const [qIndex, setQIndex] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const questionRef = useRef<HTMLHeadingElement>(null)

  const questions = [
    {
      text: t('quiz_question'),
      correct: 'A',
      right: t('quiz_feedback_right'),
      wrong: t('quiz_feedback_wrong'),
    },
    {
      text: t('quiz_question_2'),
      correct: 'B',
      right: t('quiz_feedback_right_2'),
      wrong: t('quiz_feedback_wrong_2'),
    },
  ]
  const current = questions[qIndex]
  const correct = pick === current.correct
  const xp = pick ? (correct ? 120 : 20) : 0

  const nextQuestion = () => {
    setQIndex((i) => i + 1)
    setPick(null)
    // The heading node persists across the state update, so focusing it here
    // lands the user on the new question instead of resetting to <body>.
    requestAnimationFrame(() => questionRef.current?.focus())
  }

  return (
    <section className="border-t bg-violet">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-24 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label-mono text-white/85">{t('quiz_kicker')}</p>
          <h2 className="display mt-6 text-[48px] md:text-[80px]">
            {t.rich('quiz_title', { mint: mintLine })}
          </h2>
          <p className="mt-6 max-w-sm text-white/85">{t('quiz_desc')}</p>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="rounded-feature bg-ink p-6 md:p-8">
            <div className="flex items-center justify-between">
              <Label>{t('quiz_label')}</Label>
              <p
                className={`label-mono font-bold transition-colors ${pick ? 'text-mint' : 'text-meta'}`}
                aria-live="polite"
              >
                +{xp} XP
              </p>
            </div>

            <div className="mt-4 h-1 w-full rounded-full bg-slate">
              <div
                className="h-full rounded-full bg-mint transition-all duration-700"
                style={{ width: qIndex === 0 ? '50%' : '100%' }}
              />
            </div>
            <p className="label-mono mt-2 text-meta">
              {qIndex === 0 ? t('quiz_progress_1') : t('quiz_progress_2')}
            </p>

            <h3 ref={questionRef} tabIndex={-1} className="mt-6 text-2xl font-bold md:text-3xl">
              {current.text}
            </h3>

            <div
              className="mt-6 grid gap-3 sm:grid-cols-2"
              role="group"
              aria-label={t('quiz_group_label')}
            >
              {options.map(([k, v]) => {
                const chosen = pick === k
                const isRight = Boolean(pick) && k === current.correct
                return (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={chosen}
                    aria-disabled={Boolean(pick)}
                    onClick={() => {
                      if (pick) return
                      setPick(k)
                    }}
                    className={`flex min-h-14 items-center gap-4 rounded-card border border-white/40 px-5 text-left text-lg transition-all duration-300 ${
                      isRight
                        ? 'scale-[1.02] !border-mint bg-mint text-ink focus-visible:outline-ink'
                        : chosen
                          ? '!border-pink text-pink'
                          : pick
                            ? 'opacity-60'
                            : 'hover:border-mint'
                    }`}
                  >
                    <span className="label-mono">{k}</span>
                    {v}
                    {isRight && <span className="label-mono ml-auto">{t('quiz_correct')}</span>}
                  </button>
                )
              })}
            </div>

            {/* Always-mounted live region: inserting content into an existing
                role="status" node is what screen readers actually announce. */}
            <p className="sr-only" role="status">
              {pick ? (correct ? current.right : current.wrong) : ''}
            </p>

            {pick && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: Number.parseInt(motionTokens.reveal, 10) / 1000,
                  ease: motionTokens.revealEasing,
                }}
                className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-5"
              >
                <p className="text-soft">{correct ? current.right : current.wrong}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setPick(null)}
                    className="label-mono min-h-11 rounded-stage border px-4 font-bold hover:border-mint hover:text-mint"
                  >
                    {t('quiz_retry')}
                  </button>
                  {qIndex === 0 && (
                    <button
                      type="button"
                      onClick={nextQuestion}
                      className="label-mono min-h-11 rounded-stage border border-mint px-4 font-bold text-mint hover:bg-mint hover:text-ink"
                    >
                      {t('quiz_next')} <span aria-hidden className="ml-1">→</span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
