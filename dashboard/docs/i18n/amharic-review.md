# Amharic translation review sheet

> **Generated file — do not edit by hand.** Regenerate with
> `node scripts/gen-amharic-review.mjs` after any key change; write corrections into
> the `Notes` column (or the `Amharic` column) and apply them to `messages/am.json`.

## How to review

Work one batch at a time — Batch 1 first (it is the public marketing surface). For each row:

1. **Meaning** — does the Amharic say what the English says, in natural, contemporary Amharic?
   No machine-translation stiffness, no literal word-for-word calques.
2. **Register** — polite, consistent address (`እርስዎ` / `እርስዎች`) matching the product voice
   (direct, editorial, no hype). Keep the register consistent across the batch.
3. **Terminology** — one term per concept across the whole catalog (grade, unit, page, quiz,
   mastery, streak, assignment). Flag synonym drift in `Notes` instead of fixing one row only.
4. **Placeholders** — ICU tokens must survive **byte-for-byte**: `{name}`, `{score}`,
   `{count, plural, one {…} other {…}}`. A mangled placeholder breaks rendering at runtime.
   Leave them exactly as they are; move them if Amharic word order needs it.
5. **Do not translate** — mono notation and codes (`09 /`, `EN + AM`, `→`, `F = ma`), product
   names (`EthioSci`, `@ethiobio_bot`), and fixed acronyms. If a row is notation-only, tick it.
6. **Length** — Amharic runs long. Display strings should stay short enough not to wrap badly
   (hero/showcase lines ≤ 26 syllables); buttons and labels must not overflow at 360px.
7. If the **English** itself is wrong or unclear, say so in `Notes` — do not silently retranslate.

Tick `☑` when the row is approved. Leave it blank when it needs another pass.

## Status

| Batch | Scope | Keys | Status |
| --- | --- | --- | --- |
| 1 | Marketing surface (public — review first) | 187 | ⬜ not started |
| 2 | App shell, auth and core learner flows | 654 | ⬜ not started |
| 3 | Remaining product areas | 717 | ⬜ not started |

## Batch 1 — Marketing surface (public — review first)

### `landing.*` — 187 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `landing.cta_app` | Launch App | መተግበሪያውን ይክፈቱ | ☐ | |
| `landing.stats_kicker` | 11 / Live data | 11 / ቀጥታ መረጃ | ☐ | |
| `landing.stats_title` | Platform <mint>Numbers</mint> | የመድረክ <mint>ቁጥሮች</mint> | ☐ | |
| `landing.stats_students` | Active Students | ንቁ ተማሪዎች | ☐ | |
| `landing.stats_quizzes` | Quizzes Completed | የተጠናቀቁ ፈተናዎች | ☐ | |
| `landing.stats_lessons` | Lesson Plans | የትምህርት እቅዶች | ☐ | |
| `landing.stats_assets` | Knowledge Assets | የእውቀት ሀብቶች | ☐ | |
| `landing.footer_tagline` | Empowering secondary science students and teachers across Ethiopia with textbook-grounded AI intelligence. | ለኢትዮጵያ ሁለተኛ ደረጃ የሳይንስ ተማሪዎች እና መምህራን በመማሪያ መጽሐፍ ላይ የተመሠረተ የAI እውቀትን እያበረታታ | ☐ | |
| `landing.footer_resources` | Resources | ሀብቶች | ☐ | |
| `landing.footer_portal` | Portal | ፖርታል | ☐ | |
| `landing.banner_teacher` | More for teachers: assign practice, track progress — | ለመምህራን ተጨማሪ: ልምምድ ይመድቡ፣ እድገትን ይከታተሉ — | ☐ | |
| `landing.banner_signup_free` | Sign up free | በነፃ ይመዝገቡ | ☐ | |
| `landing.banner_dismiss` | Dismiss banner | ማስታወቂያውን ዝጋ | ☐ | |
| `landing.hero_cta_start` | Start learning | መማር ይጀምሩ | ☐ | |
| `landing.faq_nav` | FAQ | ተደጋጋሚ ጥያቄዎች | ☐ | |
| `landing.faq_kicker` | 12 / Answers | 12 / መልሶች | ☐ | |
| `landing.faq_title` | Frequently asked <mint>questions</mint> | ተደጋጋሚ <mint>ጥያቄዎች</mint> | ☐ | |
| `landing.faq_q1` | Is EthioSci free? | ኢትዮሳይ ነፃ ነው? | ☐ | |
| `landing.faq_a1` | Yes — free for learners. EthioSci is sustained by grants and supporters. | አዎ — ለተማሪዎች ነፃ ነው። ኢትዮሳይ በእርዳታ እና በደጋፊዎች ይተዳደራል። | ☐ | |
| `landing.faq_q2` | Which subjects and grades? | ምን ርዕሰ ጉዳዮች እና ክፍሎች? | ☐ | |
| `landing.faq_a2` | Biology, chemistry, physics and mathematics for Grades 7–12, aligned to the Ethiopian curriculum. | ባዮሎጂ፣ ኬሚስትሪ፣ ፊዚክስ እና ሒሳብ ለ7–12 ክፍል፣ ከኢትዮጵያ ሥርዓተ ትምህርት ጋር የተስተካከለ። | ☐ | |
| `landing.faq_q3` | Do you support Amharic? | አማርኛን ትደግፋላችሁ? | ☐ | |
| `landing.faq_a3` | Yes — the app and the answers work in both Amharic and English. | አዎ — መተግበሪያው እና መልሶቹ በአማርኛ እና በእንግሊዝኛ ይሰራሉ። | ☐ | |
| `landing.faq_q4` | How does EthioSci work on Telegram? | ኢትዮሳይ በቴሌግራም እንዴት ይሰራል? | ☐ | |
| `landing.faq_a4` | Search @ethiobio_bot — ask questions and take quizzes with low data usage. | @ethiobio_bot ይፈልጉ — ጥያቄዎችን ይጠይቁ እና አነስተኛ ውሂብ በመጠቀም ፈተናዎችን ይውሰዱ። | ☐ | |
| `landing.faq_q5` | Where do answers come from? | መልሶቹ ከየት ይመጣሉ? | ☐ | |
| `landing.faq_a5` | Ethiopian textbooks with citations — every answer is grounded in the curriculum. | ከኢትዮጵያ የመማሪያ መጽሐፍት ከማጣቀሻ ጋር — እያንዳንዱ መልስ በሥርዓተ ትምህርቱ ላይ የተመሠረተ ነው። | ☐ | |
| `landing.faq_q6` | What do teachers get? | መምህራን ምን ያገኛሉ? | ☐ | |
| `landing.faq_a6` | A lesson-plan copilot, practice assignments and progress tracking. | የትምህርት እቅድ ረዳት፣ የልምምድ ምደባዎች እና የእድገት ክትትል። | ☐ | |
| `landing.faq_q7` | How does adaptive quizzing work? | ተለምዷዊ ፈተና እንዴት ይሰራል? | ☐ | |
| `landing.faq_a7` | Difficulty adapts to each student's answers, with an explanation after every question. | ችግሩ በተማሪው መልስ ይስተካከላል፣ ከእያንዳንዱ ጥያቄ በኋላ ማብራሪያ ይሰጣል። | ☐ | |
| `landing.faq_q8` | How is student data handled? | የተማሪ ውሂብ እንዴት ይያዛል? | ☐ | |
| `landing.faq_a8` | Minimal data, no ads. Your date of birth is used only for an age-appropriate experience. | አነስተኛ ውሂብ፣ ምንም ማስታወቂያ የለም። የትውልድ ቀንዎ ለእድሜ ተስማሚ ተሞክሮ ብቻ ይጠቅማል። | ☐ | |
| `landing.footer_login` | Log in | ይግቡ | ☐ | |
| `landing.nav_learn` | Learn | ተማሩ | ☐ | |
| `landing.nav_subjects` | Subjects | ርዕሶች | ☐ | |
| `landing.nav_how` | How it works | እንዴት እንደሚሰራ | ☐ | |
| `landing.nav_teachers` | For teachers | ለአስተማሪዎች | ☐ | |
| `landing.nav_aria_main` | Main | ዋና ዝርዝር | ☐ | |
| `landing.nav_menu_open` | Open menu | ዝርዝሩን ክፈት | ☐ | |
| `landing.nav_menu_close` | Close menu | ዝርዝሩን ዝጋ | ☐ | |
| `landing.footer_telegram` | Telegram Bot | የቴሌግራም ቦት | ☐ | |
| `landing.footer_workspace` | Teacher Workspace | የአስተማሪ የሥራ ቦታ | ☐ | |
| `landing.footer_student` | Student Center | የተማሪ ማዕከል | ☐ | |
| `landing.footer_copyright` | © {year} EthioSci. All rights reserved. | © {year} EthioSci. መብቱ የተጠበቀነው። ⚠️ | ☐ | |
| `landing.hero_label_1` | EthioSci / AI science learning | EthioSci / የኤአይ የሳይንስ መማር | ☐ | |
| `landing.hero_label_2` | Curriculum / 7–12 | ትምህርት / 7–12 | ☐ | |
| `landing.hero_label_3` | Lang / EN + AM | ቋንቋ / EN + AM | ☐ | |
| `landing.hero_title_1` | Science, | ሳይንስ፣ | ☐ | |
| `landing.hero_title_2` | built for | ለኢትዮጵያ | ☐ | |
| `landing.hero_title_3` | Ethiopia. | የተገነባ። | ☐ | |
| `landing.hero_body` | EthioSci answers Biology, Chemistry, Physics and Mathematics questions straight from Ethiopian textbooks — with the grade, unit and page it came from — then turns every answer into practice until you master it. | EthioSci የባዮሎጂ፣ ኬሚስትሪ፣ ፊዚክስና ሒሳብ ጥያቄዎችን ከኢትዮጵያ መጻሕፍት መሰረት በመውሰድ ይመልሳል — ከየት እንደመጣ ክፍል፣ ዩኒትና ገጽ ጋር — እያንዳንዱንም መልስ ወደ ልምምድ በመቀየር እስኪሸነፉ። | ☐ | |
| `landing.hero_cta_explore` | Explore EthioSci | EthioSci ይመልከቱ | ☐ | |
| `landing.hero_image_alt` | DNA double helix in mint and violet light | በአረንጓዴና ሐምራዊ ብርሃን ውስጥ ያለ የ DNA ሁለት ወለል ቅርጽ | ☐ | |
| `landing.hero_step_question` | Question | ጥያቄ | ☐ | |
| `landing.hero_step_understand` | Understand | መረዳት | ☐ | |
| `landing.hero_step_retrieve` | Retrieve | ማምጣት | ☐ | |
| `landing.hero_step_verify` | Verify | ማረጋገጥ | ☐ | |
| `landing.hero_step_explain` | Explain | ማብራራት | ☐ | |
| `landing.hero_step_master` | Master | ማሸነፍ | ☐ | |
| `landing.ask_kicker` | 01 / Ask EthioSci | 01 / EthioSci ጠይቅ | ☐ | |
| `landing.ask_title` | Ask a science <mint>question.</mint> | የሳይንስ <mint>ጥያቄ ጠይቅ።</mint> | ☐ | |
| `landing.ask_desc` | Every answer is grounded in the Ethiopian curriculum and comes with the page it was drawn from. | እያንዳንዱ መልስ በኢትዮጵያ ትምህርቱ መሰረት ነው፣ ከወሰደበት ገጽ ጋር ይመጣል። | ☐ | |
| `landing.ask_question` | Why does DNA replicate before cell division? | ከሴል ክፍል ከመባጠው በፊት ለምን DNA ይባዛል? | ☐ | |
| `landing.ask_answer` | Before a cell divides, each new cell needs a complete copy of the genetic instructions. DNA replication happens in the S phase of interphase: the double helix unwinds, and each strand acts as a template for a new complementary strand. This is called semi-conservative replication — so both daughter cells receive identical DNA. | ከሴል ክፍል ከመባጠው በፊት አዲስ ሴል ሁሉ የወለድ መመሪያውን ሙሉ ቅጂ ያስፈልጋል። የ DNA ማባዛት በካርቦኩሌት የመደምሰሰ ዘመን (S ደረጃ) ይፈጠራል፡፡ ሁለቱም መስመሮች አዲስ ማጎልበቂ መስመር ምሳሌ ስሆኑ፣ ሁለቱ የሚመጡ ሴሎች ተመሳሳይ DNA ይቀበላሉ። | ☐ | |
| `landing.ask_cite_1` | Grade 10 · Biology · Unit 3 | 10ኛ ክፍል · ባዮሎጂ · ዩኒት 3 | ☐ | |
| `landing.ask_cite_2` | [1] Grade 10 · Unit 3 · Biochemical Molecules · p. 72 | [1] 10ኛ ክፍል · ዩኒት 3 · የባዮካሚካል ንጥላዎች · ገ. 72 | ☐ | |
| `landing.subj_kicker` | 02 / Subjects | 02 / የሳይንስ ዓይነቶች | ☐ | |
| `landing.subj_title_1` | One assistant. | አንድ ዋና አስጠጋ። | ☐ | |
| `landing.subj_title_2` | Four science worlds. | አራት የሳይንስ ዓለማት። | ☐ | |
| `landing.subj_tile_label` | Subject | ዓይነት | ☐ | |
| `landing.subj_explore` | Explore | ይመልከቱ | ☐ | |
| `landing.subj_note_biology` | Cells, genetics, DNA, ecology and the human body. | ሴሎች፣ ወለድ፣ DNA፣ ሥነ ምህዳርና የሰው ሰውነት። | ☐ | |
| `landing.subj_note_chemistry` | Atomic structure, bonding, reactions and the periodic table. | የአቶም መዋቅር፣ አናባጭ ኃይሎች፣ ምርቶችና የደረጃ ሰንጠረዥ። | ☐ | |
| `landing.subj_note_physics` | Motion, forces, waves, electricity and energy. | እንቅስቃሴ፣ ኃይሎች፣ ሳምባ፣ ኤሌክትሪክ ኃይልና አነርጂ። | ☐ | |
| `landing.subj_note_mathematics` | Algebra, geometry, functions and statistics. | አልጀብራ፣ ጂኦሜጥሪ፣ ፋንክሽኖችና ስታቲስቲክስ። | ☐ | |
| `landing.subj_tile_biology_alt` | Fluorescent micrograph of plant and animal cells | በማይክሮስኮፕ የተነሳ የእንቅስቃሴ እጽዋትና የእንስሳት ሴሎች ምስል | ☐ | |
| `landing.subj_tile_chemistry_alt` | Ball-and-stick molecular model | የኬሚካል ሞዴል ምስል | ☐ | |
| `landing.subj_tile_physics_alt` | Light wave interference pattern | የብርሃን ሳምባዎች ቅርጽ | ☐ | |
| `landing.subj_tile_mathematics_alt` | Chalk geometric construction with equations | በሳጥን የተሳሉ ጂኦሜትሪ ንድፍና ስሌቶች | ☐ | |
| `landing.pipe_kicker` | 03 / How EthioSci thinks | 03 / EthioSci እንዴት እንደሚሰብ | ☐ | |
| `landing.pipe_title_1` | Not just answers. | መልስ ብቻ አይደለም። | ☐ | |
| `landing.pipe_title_2` | A learning pipeline. | የመማር ስርዓት። | ☐ | |
| `landing.pipe_stage_1_name` | Ask | ጠይቅ | ☐ | |
| `landing.pipe_stage_1_desc` | Type it or say it — English or Amharic | ጻፉ ወይም ይናገሩ — በእንግሊዝኛ ወይም በአማርኛ | ☐ | |
| `landing.pipe_stage_2_name` | Understand | አስተውል | ☐ | |
| `landing.pipe_stage_2_desc` | Homework, a lesson, or a quick fact | የቤት ሥራ፣ ትምህርት ወይም ፈጣን መረጃ | ☐ | |
| `landing.pipe_stage_3_name` | Find | ፈልግ | ☐ | |
| `landing.pipe_stage_3_desc` | We search the textbooks for your grade | የእርስዎን ክፍል መጻሕፍት እንፈልጋለን | ☐ | |
| `landing.pipe_stage_4_name` | Match | አምረጡ | ☐ | |
| `landing.pipe_stage_4_desc` | Only pages for your grade | የእርስዎን ክፍል ገጾች ብቻ | ☐ | |
| `landing.pipe_stage_5_name` | Explain | አብራራ | ☐ | |
| `landing.pipe_stage_5_desc` | In clear words, at your level | በግልጽ ቃላት፣ በእርስዎ ደረጃ | ☐ | |
| `landing.pipe_stage_6_name` | Check | አረጋግጥ | ☐ | |
| `landing.pipe_stage_6_desc` | Every claim checked against the textbook | እያንዳንዱ ጥቅም ከመጻሕፍት ጋር የተረጋገጠ ነው | ☐ | |
| `landing.pipe_stage_7_name` | Teach | አስተማር | ☐ | |
| `landing.pipe_stage_7_desc` | At your grade level, with examples | በእርስዎ የክፍል ደረጃ፣ ምሳሌዎች ጋር | ☐ | |
| `landing.pipe_stage_8_name` | Practice | ልምምዱ | ☐ | |
| `landing.pipe_stage_8_desc` | Questions until it sticks | እስኪገስግስ ጥያቄዎች ይመልሱ | ☐ | |
| `landing.trust_kicker` | 04 / Grounded learning | 04 / የተመሰረተ መማር | ☐ | |
| `landing.trust_title` | From textbook to <mint>explanation.</mint> | ከመጻሕፍት ወደ <mint>ማብራራት።</mint> | ☐ | |
| `landing.trust_chain_1` | Ethiopian textbook | የኢትዮጵያ መጽሐፍ | ☐ | |
| `landing.trust_chain_2` | Retrieval | ማምጣት | ☐ | |
| `landing.trust_chain_3` | Evidence | ምስክር መረጃ | ☐ | |
| `landing.trust_chain_4` | AI explanation | የኤአይ ማብራራት | ☐ | |
| `landing.trust_chain_5` | Source citation | የምንጭ ማጣቀሻ | ☐ | |
| `landing.trust_cites_label` | Every answer cites | እያንዳንዱ መልስ ያጣቀሳል | ☐ | |
| `landing.trust_citation` | (Grade X, Unit Y: Title, p. Z) | (ክፍል X፣ ዩኒት Y: ርዕስ፣ ገ. Z) | ☐ | |
| `landing.trust_image_alt` | Open biology textbook with cell diagrams and handwritten margin notes | ሴል ንድፎችና በእጅ የተጻፉ ጎኖች ባሉበት ክፍት የባዮሎጂ መጽሐፍ | ☐ | |
| `landing.trust_caption_1` | Source / verified | ምንጭ / የተረጋገጠ | ☐ | |
| `landing.trust_caption_2` | Unlike generic chatbots, answers stay on the page | ከአጠቃላይ መገናኛዎች በተለየ መልሶች በተጠቀመው ገጽ ላይ ይቀመጣሉ | ☐ | |
| `landing.journ_kicker` | 05 / Student journey | 05 / የተማሪ ጉዞ | ☐ | |
| `landing.journ_title` | Ask. Practice. <mint>Master.</mint> | ጠይቅ። ልምምድ። <mint>ተሸነፍ።</mint> | ☐ | |
| `landing.journ_step_1` | Ask | ጠይቅ | ☐ | |
| `landing.journ_desc_1` | AI Q&A | የኤአይ ጥያቄ-መልስ | ☐ | |
| `landing.journ_step_2` | Practice | ልምምድ | ☐ | |
| `landing.journ_desc_2` | Adaptive quizzes | ተስማሚ ጥያቄዎች | ☐ | |
| `landing.journ_step_3` | Score | ውጤት | ☐ | |
| `landing.journ_desc_3` | XP · levels | XP · ደረጃዎች | ☐ | |
| `landing.journ_step_4` | Identify weakness | የሚቸግርን ማወቅ | ☐ | |
| `landing.journ_desc_4` | Topic mastery | የርዕስ ብቃት | ☐ | |
| `landing.journ_step_5` | Recover | መልመድ | ☐ | |
| `landing.journ_desc_5` | Recovery plans | የመልመድ እቅዶች | ☐ | |
| `landing.journ_step_6` | Review | ማሰላሰል | ☐ | |
| `landing.journ_desc_6` | Spaced repetition | የጊዜ ተከታታይ ልምምድ | ☐ | |
| `landing.journ_step_7` | Master | ማሸነፍ | ☐ | |
| `landing.journ_desc_7` | Streaks · achievements | ቀጠሎች · ስኬቶች | ☐ | |
| `landing.quiz_kicker` | 06 / Try a quiz | 06 / ጥያቄ ይሞክሩ | ☐ | |
| `landing.quiz_title` | Practice that feels <mint>like play.</mint> | ልምምድ እንደ ጨዋታ <mint>ይሰማሃል።</mint> | ☐ | |
| `landing.quiz_desc` | Instant feedback, XP for every attempt, and a recovery plan when you miss. | ፈጣን መልስ፣ ለእያንዳንዱ ሙከራ XP፣ ከተሳናፈ ጊዜው የመልመድ እቅድ። | ☐ | |
| `landing.quiz_label` | Biology / Grade 10 | ባዮሎጂ / 10ኛ ክፍል | ☐ | |
| `landing.quiz_progress_1` | Question 1 of 2 | ጥያቄ 1 ከ 2 | ☐ | |
| `landing.quiz_progress_2` | Question 2 of 2 | ጥያቄ 2 ከ 2 | ☐ | |
| `landing.quiz_question` | Which molecule carries genetic information in most living organisms? | በብዙ ሕያው ነገሮች ውስጥ የወለድ መመሪያን የሚሸከም የትኛው ማዕበል ነው? | ☐ | |
| `landing.quiz_question_2` | Which molecule do cells use as their main energy currency? | ሴሎች በዋናነት ለኃይል የሚጠቀሙት የትኛው ወጪ ነው? | ☐ | |
| `landing.quiz_group_label` | Answers | መልሶች | ☐ | |
| `landing.quiz_correct` | ✓ Correct | ✓ ትክክል | ☐ | |
| `landing.quiz_feedback_right` | DNA stores hereditary instructions. Streak +1 🔥 | DNA የወለድ መመሪያዎችን ይይዛል። ተከታታይነት +1 🔥 | ☐ | |
| `landing.quiz_feedback_wrong` | Not quite — DNA is the answer. Added to your review plan. | ትክክል አይደለም — DNA ነው መልሱ። ወደ ማሰላሰል እቅድ ተጨምሯል። | ☐ | |
| `landing.quiz_feedback_right_2` | ATP powers the cell's work. Streak +1 🔥 | ATP ለሴሉ ኃይል ይሰጣል። ተከታታይነት +1 🔥 | ☐ | |
| `landing.quiz_feedback_wrong_2` | Not quite — ATP is the cell's energy currency. Added to your review plan. | ትክክል አይደለም — ATP የሴሉን ዋና የኃይል ምንጭ ነው። ወደ ማሰላሰል እቅድ ተጨምሯል። | ☐ | |
| `landing.quiz_retry` | Try again | እንደገና ሞክር | ☐ | |
| `landing.quiz_next` | Next question | ቀጣይ ጥያቄ | ☐ | |
| `landing.aud_kicker_teacher` | 07 / For teachers | 07 / ለአስተማሪዎች | ☐ | |
| `landing.aud_word_plan` | Plan | አቅጥ | ☐ | |
| `landing.aud_word_assign` | Assign | ተልክ | ☐ | |
| `landing.aud_word_review` | Review | ፈትሽ | ☐ | |
| `landing.aud_word_monitor` | Monitor | ተከታተል | ☐ | |
| `landing.aud_t_item_1` | Lesson planning | የትምህርት እቅድ | ☐ | |
| `landing.aud_t_item_2` | Assignments | ሥራዎች | ☐ | |
| `landing.aud_t_item_3` | Student monitoring & progress | የተማሪዎች ተከታታይነትና እድገት | ☐ | |
| `landing.aud_t_item_4` | Content review | የይዘት ፈትሽ | ☐ | |
| `landing.aud_teacher_alt` | Science teacher planning lessons at a classroom desk | በትምህርት ቤት ዶስክ ላይ ትምህርት እቅድ የሚያዘጋጅ የሳይንስ አስተማሪ | ☐ | |
| `landing.aud_kicker_parent` | 08 / For parents | 08 / ለወላጆች | ☐ | |
| `landing.aud_parent_words` | See · Understand · Support | ይመልከቱ · ይገንዘቡ · ያግዙ | ☐ | |
| `landing.readout_rag_active` | RAG / active | RAG / ንቁ | ☐ | |
| `landing.readout_status_online` | ● Status / online | ● ሁነታ / ኦንላይን | ☐ | |
| `landing.readout_mode_learn` | Mode / learn | ዘዴ / መማር | ☐ | |
| `landing.readout_rag_verified` | RAG / Verified / Curriculum grounded | RAG / ተረጋግጨል / በትምህርት ሥርዓት የተመሰረተ | ☐ | |
| `landing.tag_curriculum_grounded` | Curriculum grounded | በትምህርት ሥርዓት የተመሰረተ | ☐ | |
| `landing.aud_p_item_1` | Weekly progress summaries | ሳምንታዊ የእድገት ማጠቃለያ | ☐ | |
| `landing.aud_p_item_2` | Bilingual reports (EN + AM) | የሁለት ቋንቋ ሪፖርቶች (EN + AM) | ☐ | |
| `landing.aud_p_item_3` | Mastery trends & learning activity | የብቃት አዝማሚያዎችና የመማር እንቅስቃሴ | ☐ | |
| `landing.aud_parent_alt` | Parent and student reviewing study progress on a phone | ወላጅና ልጅ በስልክ የመማር እድገት ያያያሉ | ☐ | |
| `landing.amh_learn_en` | Learn science | Learn science | ☐ | |
| `landing.amh_learn_am` | ሳይንስን ተማር | ሳይንስን ተማር | ☐ | |
| `landing.amh_body` | Ask in Amharic or English. Explanations and parent reports follow the language you learn in. | በአማርኛ ወይም በእንግሊዝኛ ይጠይቁ። ማብራሪያዎችና የወላጆች ሪፖርቶች በሚማሩት ቋንቋ ይከናወናሉ። | ☐ | |
| `landing.stream_kicker` | 10 / Learning stream | 10 / የመማር ፍሰት | ☐ | |
| `landing.stream_title` | A day of learning, <mint>live.</mint> | የቀን መማር፣ <mint>በቀጥታ።</mint> | ☐ | |
| `landing.stream_ev_1_text` | Completed Cell Biology Quiz | የሴል ባዮሎጂ ጥያቄ ጨረሰ | ☐ | |
| `landing.stream_ev_1_metric` | +120 XP | +120 XP | ☐ | |
| `landing.stream_ev_2_text` | Mastered Newton's Laws | የኒውተን ሕጎችን አሸነፈ | ☐ | |
| `landing.stream_ev_2_metric` | 87% → 94% | 87% → 94% | ☐ | |
| `landing.stream_ev_3_text` | Review recommended: Chemical Bonding | ልምምድ ይመከራል: የኬሚካል አናባጭ | ☐ | |
| `landing.stream_ev_3_metric` | Spaced review | የጊዜ ተከታታይ ልምምድ | ☐ | |
| `landing.cta_title` | Ready to learn science differently? | ሳይንስን በተለየ መንገድ መማር ይፈልጋሉ? | ☐ | |
| `landing.cta_sub` | Start with a question. Build understanding. | ከጥያቄ ይጀምሩ። ግንዛቤ ይገንቡ። | ☐ | |
| `landing.cta_secondary` | View the platform | መድረኩን ይመልከቱ | ☐ | |
| `landing.loading_demo` | Ask demo loading | የጥያቄ ማሳያ በመጫን ላይ | ☐ | |
| `landing.loading_quiz` | Quiz demo loading | ሞክሮ ጥያቄ በመጫን ላይ | ☐ | |
| `landing.loading_stats` | Platform numbers loading | የመድረኩ ቁጥሮች በመጫን ላይ | ☐ | |
| `landing.stats_aria` | Platform numbers | የመድረኩ ቁጥሮች | ☐ | |
| `landing.stats_badge` | Real-Time platform counts | በቀጥታ የመድረኩ ቁጥሮች | ☐ | |
| `landing.stats_error` | Live counts are unavailable right now. | የቀጥታ ቁጥሮች አሁን አይገኙም። | ☐ | |
| `landing.tag_cited` | Cited: grade, unit, page | የሚጠቅሰው፦ ክፍል፣ ክፍለ ጊዜ፣ ገጽ | ☐ | |
| `landing.tag_free_learners` | Free for learners | ለተማሪዎች ነፃ | ☐ | |
| `landing.tag_bilingual` | Amharic + English | አማርኛ + እንግሊዝኛ | ☐ | |

---

## Batch 2 — App shell, auth and core learner flows

### `sidebar.*` — 26 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `sidebar.dashboard` | Dashboard | ዳሽቦርድ | ☐ | |
| `sidebar.classroom` | Classroom | ክፍል | ☐ | |
| `sidebar.school` | School | ትምህርት ቤት | ☐ | |
| `sidebar.parent` | Parent | ወላጅ | ☐ | |
| `sidebar.recovery` | Recovery | ማገገሚያ | ☐ | |
| `sidebar.quizzes` | Quizzes | ፈተናዎች | ☐ | |
| `sidebar.lessons` | Lesson Plans | የትምህርት እቅዶች | ☐ | |
| `sidebar.unit_plans` | Unit Plans | የዩኒት እቅዶች | ☐ | |
| `sidebar.students` | Students | ተማሪዎች | ☐ | |
| `sidebar.monitoring` | Monitoring | ክትትል | ☐ | |
| `sidebar.diagrams` | Diagrams | ሥዕላዊ መግለጫዎች | ☐ | |
| `sidebar.ask` | Ask Q&A | ጥያቄ ጠይቅ | ☐ | |
| `sidebar.admin_panel` | Admin Panel | የአስተዳዳሪ ፓነል | ☐ | |
| `sidebar.parent_dashboard` | Parent Dashboard | የወላጅ ዳሽቦርድ | ☐ | |
| `sidebar.teacher_dashboard` | Teacher Dashboard | የመምህር ዳሽቦርድ | ☐ | |
| `sidebar.student_dashboard` | Student Dashboard | የተማሪ ዳሽቦርድ | ☐ | |
| `sidebar.sign_out` | Sign Out | ውጣ | ☐ | |
| `sidebar.grade_curriculum` | Grade 9-12 curriculum | ከ9-12 ክፍል ሥርዓተ ትምህርት | ☐ | |
| `sidebar.language` | Language | ቋንቋ | ☐ | |
| `sidebar.english` | English | እንግሊዝኛ | ☐ | |
| `sidebar.amharic` | Amharic | አማርኛ | ☐ | |
| `sidebar.workspace` | Workspace | የስራ ቦታ | ☐ | |
| `sidebar.workspace_browse` | Browse | አስስ | ☐ | |
| `sidebar.workspace_upload` | Upload | ስቀል | ☐ | |
| `sidebar.workspace_search` | Search | ፈልግ | ☐ | |
| `sidebar.workspace_processing` | Processing | በሂደት ላይ | ☐ | |

### `login.*` — 24 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `login.email` | Email | ኢሜይል | ☐ | |
| `login.password` | Password | የይለፍ ቃል | ☐ | |
| `login.sign_in` | Sign In | ግባ | ☐ | |
| `login.create_account` | Create Account | መለያ ፍጠር | ☐ | |
| `login.create_and_sign_in` | Create & Sign In | ፍጠር እና ግባ | ☐ | |
| `login.please_wait` | Please wait... | እባክዎ ይጠብቁ... | ☐ | |
| `login.already_have_account` | Already have an account? | መለያ አለዎት? | ☐ | |
| `login.brand_short` | EthioSci | EthioSci | ☐ | |
| `login.email_placeholder` | teacher@school.edu | teacher@school.edu | ☐ | |
| `login.error` | Sign-in failed | መግባት አልተሳካም | ☐ | |
| `login.password_placeholder` | •••••••• | •••••••• | ☐ | |
| `login.continue_with_google` | Continue with Google | በጉግል ይቀጥሉ | ☐ | |
| `login.verify_email_title` | Verify your email | ኢሜይልዎን ያረጋግጡ | ☐ | |
| `login.check_email` | Check your email for a verification code. | የማረጋገጫ ኮድ ለማግኘት ኢሜይልዎን ይፈትሹ። | ☐ | |
| `login.verify_code` | Verification code | የማረጋገጫ ኮድ | ☐ | |
| `login.verify_code_placeholder` | 6-digit code | 6-አሃዝ ኮድ | ☐ | |
| `login.verify_button` | Verify | አረጋግጥ | ☐ | |
| `login.forgot_password` | Forgot password? | የይለፍ ቃል ረስተዋል? | ☐ | |
| `login.new_here` | New to EthioSci? | ኢትዮሳይ አዲስ ነዎት? | ☐ | |
| `login.continue_with_microsoft` | Continue with Microsoft | በማይክሮሶፍት ይቀጥሉ | ☐ | |
| `login.sign_in_subtitle` | Log in to continue learning. | ለመቀጠል ይግቡ። | ☐ | |
| `login.or_email` | or sign in with email | ወይም በኢሜይል ይግቡ | ☐ | |
| `login.hide_password` | Hide password | የይለፍ ቃል ደብቅ | ☐ | |
| `login.show_password` | Show password | የይለፍ ቃል አሳይ | ☐ | |

### `signup.*` — 40 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `signup.join_title` | Join EthioSci as… | ኢትዮሳይን እንደ … ይቀላቀሉ | ☐ | |
| `signup.join_subtitle` | Choose your role to get started. | ለመጀመር ሚናዎን ይምረጡ። | ☐ | |
| `signup.role_learner` | Learner | ተማሪ | ☐ | |
| `signup.role_learner_desc` | Grades 7–12 science lessons, quizzes and tutoring. | ለ7–12 ክፍል የሳይንስ ትምህርት፣ ፈተናዎች እና አጋዥ ትምህርት። | ☐ | |
| `signup.role_teacher` | Teacher | መምህር | ☐ | |
| `signup.role_teacher_desc` | Lesson plans, practice assignments and class progress. | የትምህርት እቅዶች፣ የልምምድ ምደባዎች እና የክፍል እድገት ክትትል። | ☐ | |
| `signup.role_parent` | Parent | ወላጅ | ☐ | |
| `signup.role_parent_desc` | Follow your child's learning and results. | የልጅዎን ትምህርት እና ውጤት ይከታተሉ። | ☐ | |
| `signup.step_of` | Step {current} of {total} | ደረጃ {current} ከ {total} ⚠️ | ☐ | |
| `signup.choose_different_role` | Choose a different role | የተለየ ሚና ይምረጡ | ☐ | |
| `signup.back` | Back | ተመለስ | ☐ | |
| `signup.learner_dob_title` | When were you born? | የትውልድ ቀንዎ መቼ ነው? | ☐ | |
| `signup.learner_dob_subtitle` | We use this to keep your experience age-appropriate. | ይህን ለእድሜ ተስማሚ ተሞክሮ እንጠቀምበታለን። | ☐ | |
| `signup.dob_label` | Date of birth | የትውልድ ቀን | ☐ | |
| `signup.dob_required` | Please select your date of birth. | እባክዎ የትውልድ ቀንዎን ይምረጡ። | ☐ | |
| `signup.dob_invalid` | That date doesn't look right. | ያ ቀን ትክክል አይመስልም። | ☐ | |
| `signup.month` | Month | ወር | ☐ | |
| `signup.day` | Day | ቀን | ☐ | |
| `signup.year` | Year | ዓመት | ☐ | |
| `signup.next` | Next | ቀጣይ | ☐ | |
| `signup.consent_title` | Parent or guardian email | የወላጅ ወይም የአሳዳጊ ኢሜይል | ☐ | |
| `signup.consent_body` | You're under 13, so a parent or guardian needs to give consent before your account can be activated. We'll send them a notice. | ዕድሜዎ ከ13 በታች ነው፣ ስለዚህ መለያዎ ከመንቃቱ በፊት ወላጅ ወይም አሳዳጊ ፈቃድ መስጠት አለበት። ማስታወቂያ እንልካለን። | ☐ | |
| `signup.parent_email_label` | Parent or guardian email | የወላጅ ወይም የአሳዳጊ ኢሜይል | ☐ | |
| `signup.parent_email_hint` | Used only to send the consent notice. | ለፈቃድ ማስታወቂያ ብቻ ይጠቅማል። | ☐ | |
| `signup.parent_email_placeholder` | parent@example.com | parent@example.com | ☐ | |
| `signup.parent_email_invalid` | Enter a valid parent email. | ትክክለኛ የወላጅ ኢሜይል ያስገቡ። | ☐ | |
| `signup.continue` | Continue | ቀጥል | ☐ | |
| `signup.consent_pending_title` | Waiting for consent | ፈቃድ በመጠበቅ ላይ | ☐ | |
| `signup.consent_pending_body` | Your account will be activated once a parent or guardian confirms. You can close this page for now. | ወላጅ ወይም አሳዳጊ ሲያረጋግጡ መለያዎ ይነቃል። ለአሁን ይህን ገጽ መዝጋት ይችላሉ። | ☐ | |
| `signup.back_home` | Back to home | ወደ መነሻ ገጽ ተመለስ | ☐ | |
| `signup.account_title` | Create your {role} account | የ{role} መለያ ይፍጠሩ ⚠️ | ☐ | |
| `signup.tos_agree` | I agree to the <tos>Terms of Service</tos> and <privacy>Privacy Policy</privacy>. | ከ<tos>የአገልግሎት ውል</tos> እና <privacy>የግላዊነት ፖሊሲ</privacy> ጋር እስማማለሁ። | ☐ | |
| `signup.tos_required_error` | Please accept the Terms of Service to continue. | ለመቀጠል እባክዎ የአገልግሎት ውሉን ይቀበሉ። | ☐ | |
| `signup.continue_with_microsoft` | Continue with Microsoft | በማይክሮሶፍት ይቀጥሉ | ☐ | |
| `signup.or_email` | or sign up with email | ወይም በኢሜይል ይመዝገቡ | ☐ | |
| `signup.password_hint` | At least 8 characters | ቢያንስ 8 ቁምፊዎች | ☐ | |
| `signup.hide_password` | Hide password | የይለፍ ቃል ደብቅ | ☐ | |
| `signup.show_password` | Show password | የይለፍ ቃል አሳይ | ☐ | |
| `signup.resend_code` | Resend code | ኮዱን እንደገና ላክ | ☐ | |
| `signup.code_resent` | Code resent — check your inbox. | ኮድ ተልኳል — ኢሜይልዎን ይፈትሹ። | ☐ | |

### `onboarding.*` — 18 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `onboarding.loading` | Loading… | በመጫን ላይ… | ☐ | |
| `onboarding.title` | Let's set up your account | መለያዎን እናዋቅር | ☐ | |
| `onboarding.subtitle_student` | Tell us a bit about your learning. | ስለ ትምህርትዎ ትንሽ ይንገሩን። | ☐ | |
| `onboarding.subtitle_teacher` | Tell us what you teach. | የሚያስተምሩትን ይንገሩን። | ☐ | |
| `onboarding.subtitle_parent` | Finish setting up your family account. | የቤተሰብ መለያዎን ማዋቀር ይጨርሱ። | ☐ | |
| `onboarding.error` | Something went wrong | አንድ ችግር ተፈጠረ | ☐ | |
| `onboarding.grade_label` | Grade | ክፍል | ☐ | |
| `onboarding.grade_placeholder` | Select your grade | ክፍልዎን ይምረጡ | ☐ | |
| `onboarding.grade_option` | Grade {grade} | ክፍል {grade} ⚠️ | ☐ | |
| `onboarding.subject_label` | Subject | ርዕሰ ጉዳይ | ☐ | |
| `onboarding.subject_optional_hint` | Optional — you can add more later. | አማራጭ — በኋላ ማከል ይችላሉ። | ☐ | |
| `onboarding.subject_placeholder` | Select a subject | ርዕሰ ጉዳይ ይምረጡ | ☐ | |
| `onboarding.subject_biology` | Biology | ባዮሎጂ | ☐ | |
| `onboarding.subject_chemistry` | Chemistry | ኬሚስትሪ | ☐ | |
| `onboarding.subject_physics` | Physics | ፊዚክስ | ☐ | |
| `onboarding.subject_mathematics` | Mathematics | ሒሳብ | ☐ | |
| `onboarding.saving` | Saving… | በማስቀመጥ ላይ… | ☐ | |
| `onboarding.finish` | Finish | ጨርስ | ☐ | |

### `forgot_password.*` — 15 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `forgot_password.title` | Reset your password | የይለፍ ቃልዎን ያስጀምሩ | ☐ | |
| `forgot_password.subtitle` | Enter your email and we'll send you a 6-digit code. | ኢሜይልዎን ያስገቡ፣ 6-አሃዝ ኮድ እንልክልዎታለን። | ☐ | |
| `forgot_password.email_label` | Email | ኢሜይል | ☐ | |
| `forgot_password.email_placeholder` | you@school.edu | you@school.edu | ☐ | |
| `forgot_password.send_code` | Send code | ኮድ ላክ | ☐ | |
| `forgot_password.code_label` | Verification code | የማረጋገጫ ኮድ | ☐ | |
| `forgot_password.code_placeholder` | 6-digit code | 6-አሃዝ ኮድ | ☐ | |
| `forgot_password.new_password_label` | New password | አዲስ የይለፍ ቃል | ☐ | |
| `forgot_password.new_password_placeholder` | At least 8 characters | ቢያንስ 8 ቁምፊዎች | ☐ | |
| `forgot_password.set_password` | Set new password | አዲስ የይለፍ ቃል አዘጋጅ | ☐ | |
| `forgot_password.back_to_login` | Back to log in | ወደ መግቢያ ተመለስ | ☐ | |
| `forgot_password.check_email` | Check your email for the code. | ኮዱን ለማግኘት ኢሜይልዎን ይፈትሹ። | ☐ | |
| `forgot_password.success_title` | Password reset | የይለፍ ቃል ተቀይሯል | ☐ | |
| `forgot_password.success_body` | Your password has been updated. You can log in now. | የይለፍ ቃልዎ ተዘምኗል። አሁን መግባት ይችላሉ። | ☐ | |
| `forgot_password.invalid_code` | That code didn't work. Try again. | ያ ኮድ አልሰራም። እንደገና ይሞክሩ። | ☐ | |

### `errors.*` — 38 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `errors.generic` | Something went wrong. Please try again. | ይቅርታ፣ የሆነ ችግር ተፈጥሯል። እባክዎ እንደገና ይሞክሩ። | ☐ | |
| `errors.retry` | Try again | እንደገና ይሞክሩ | ☐ | |
| `errors.error_title` | Something went wrong | የሆነ ችግር ተፈጥሯል | ☐ | |
| `errors.boundary_message` | We encountered an unexpected problem. | ያልተጠበቀ ችግር አጋጥሞናል። | ☐ | |
| `errors.refresh_page` | Refresh Page | ገጹን አድስ | ☐ | |
| `errors.http.400` | The request could not be completed. | ጥያቄው ሊጠናቀቅ አልቻለም። | ☐ | |
| `errors.http.401` | Your session is invalid or has expired. Please sign in again. | ክፍለ ጊዜዎ ጊዜው አልፎበታል ወይም የተሳሳተ ነው። እባክዎ እንደገና ይግቡ። | ☐ | |
| `errors.http.403` | You don't have permission to do this. | ይህን ለማድረግ ፈቃድ የለዎትም። | ☐ | |
| `errors.http.404` | The item you're looking for could not be found. | የፈለጉት ነገር ሊገኝ አልቻለም። | ☐ | |
| `errors.http.409` | This action conflicts with existing data. | ይህ እርምጃ ካለው መረጃ ጋር ይጋጫል። | ☐ | |
| `errors.http.422` | Please check the highlighted fields. | እባክዎ ምልክት የተደረገባቸውን መስኮች ያረጋግጡ። | ☐ | |
| `errors.http.429` | Too many requests. Please try again shortly. | በጣም ብዙ ጥያቄዎች። እባክዎ ትንሽ ቆይተው ይሞክሩ። | ☐ | |
| `errors.http.500` | Something went wrong on our side. Please try again in a moment. | በእኛ በኩል ችግር ተፈጥሯል። እባክዎ ትንሽ ቆይተው ይሞክሩ። | ☐ | |
| `errors.categories.authentication` | Please sign in to continue. | ለመቀጠል እባክዎ ይግቡ። | ☐ | |
| `errors.categories.authorization` | You don't have permission to do this. | ይህን ለማድረግ ፈቃድ የለዎትም። | ☐ | |
| `errors.categories.validation` | Please check your input and try again. | እባክዎ ያስገቡትን ይመልከቱ እና እንደገና ይሞክሩ። | ☐ | |
| `errors.categories.conflict` | This action conflicts with existing data. | ይህ እርምጃ ካለው መረጃ ጋር ይጋጫል። | ☐ | |
| `errors.categories.not_found` | The item you're looking for could not be found. | የፈለጉት ነገር ሊገኝ አልቻለም። | ☐ | |
| `errors.categories.rate_limit` | Too many requests. Please try again shortly. | በጣም ብዙ ጥያቄዎች። እባክዎ ትንሽ ቆይተው ይሞክሩ። | ☐ | |
| `errors.categories.network` | Please check your internet connection and try again. | እባክዎ የበይነመረብ ግንኙነትዎን ያረጋግጡ እና እንደገና ይሞክሩ። | ☐ | |
| `errors.categories.server` | Something went wrong on our side. Please try again in a moment. | በእኛ በኩል ችግር ተፈጥሯል። እባክዎ ትንሽ ቆይተው ይሞክሩ። | ☐ | |
| `errors.categories.service` | This service is temporarily unavailable. Please try again in a moment. | አገልግሎቱ በአሁኑ ጊዜ አይገኝም። እባክዎ ትንሽ ቆይተው ይሞክሩ። | ☐ | |
| `errors.categories.client` | The request could not be completed. | ጥያቄው ሊጠናቀቅ አልቻለም። | ☐ | |
| `errors.categories.unknown` | Something went wrong. Please try again. | የሆነ ችግር ተፈጥሯል። እባክዎ እንደገና ይሞክሩ። | ☐ | |
| `errors.codes.auth_invalid_credentials` | Invalid email or password. Please check your credentials and try again. | ኢሜይል ወይም የይለፍ ቃል ትክክል አይደለም። እባክዎ ያረጋግጡ እና እንደገና ይሞክሩ። | ☐ | |
| `errors.codes.auth_invalid_otp` | The verification code is invalid. Please try again. | የማረጋገጫ ኮዱ ትክክል አይደለም። እባክዎ እንደገና ይሞክሩ። | ☐ | |
| `errors.codes.auth_otp_expired` | The verification code has expired. Please request a new one. | የማረጋገጫ ኮዱ ጊዜው አልፏል። እባክዎ አዲስ ኮድ ይጠይቁ። | ☐ | |
| `errors.codes.auth_token_expired` | Your session has expired. Please sign in again. | ክፍለ ጊዜዎ ጊዜው አልፏል። እባክዎ እንደገና ይግቡ። | ☐ | |
| `errors.codes.auth_refresh_expired` | Your session has expired. Please sign in again. | ክፍለ ጊዜዎ ጊዜው አልፏል። እባክዎ እንደገና ይግቡ። | ☐ | |
| `errors.codes.auth_user_inactive` | This account is inactive. Please contact support. | ይህ መለያ አገልግሎት ላይ የለም። እባክዎ ድጋፍን ያግኙ። | ☐ | |
| `errors.codes.rate_limit_exceeded` | Too many requests. Please try again shortly. | በጣም ብዙ ጥያቄዎች። እባክዎ ትንሽ ቆይተው ይሞክሩ። | ☐ | |
| `errors.validation.generic` | Please check the {field} field. | እባክዎ የ{field} መስክን ያርሙ። ⚠️ | ☐ | |
| `errors.validation.missing` | Please fill in the {field} field. | እባክዎ የ{field} መስክን ይሙሉ። ⚠️ | ☐ | |
| `errors.validation.string_type` | Please enter valid text in the {field} field. | እባክዎ በ{field} መስክ ውስጥ የተሟላ ጽሑፍ ያስገቡ። ⚠️ | ☐ | |
| `errors.validation.integer_type` | Please enter a number in the {field} field. | እባክዎ በ{field} መስክ ውስጥ ቁጥር ያስገቡ። ⚠️ | ☐ | |
| `errors.validation.value_error` | Please enter a valid value for the {field} field. | እባክዎ ለ{field} መስክ ትክክለኛ እሴት ያስገቡ። ⚠️ | ☐ | |
| `errors.upload.unsupported_type` | Unsupported file type. Please upload a supported document (PDF, TXT, or MD). | ያልተደገፈ የፋይል አይነት። እባክዎ የሚደገፍ ሰነድ (PDF፣ TXT ወይም MD) ያስገቡ። | ☐ | |
| `errors.upload.too_large` | That file is too big. | ፋይሉ በጣም ትልቅ ነው። | ☐ | |

### `common.*` — 75 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `common.loading` | Loading... | በመጫን ላይ... | ☐ | |
| `common.error` | Something went wrong | የሆነ ስህተት ተፈጥሯል | ☐ | |
| `common.retry` | Retry | ደግሞ ሞክር | ☐ | |
| `common.save` | Save | አስቀምጥ | ☐ | |
| `common.cancel` | Cancel | ሰርዝ | ☐ | |
| `common.copy` | Copy | ቅዳ | ☐ | |
| `common.copied` | Copied | ተቅዷል | ☐ | |
| `common.back` | Back | ተመለስ | ☐ | |
| `common.refresh` | Refresh | አድስ | ☐ | |
| `common.search` | Search | ፈልግ | ☐ | |
| `common.filter` | Filter | አጣራ | ☐ | |
| `common.previous` | Previous | ቀዳሚ | ☐ | |
| `common.next` | Next | ቀጣይ | ☐ | |
| `common.no_data` | No data available | ምንም መረጃ የለም | ☐ | |
| `common.actions` | Actions | ተግባራት | ☐ | |
| `common.status` | Status | ሁኔታ | ☐ | |
| `common.created` | Created | የተፈጠረ | ☐ | |
| `common.type` | Type | አይነት | ☐ | |
| `common.students` | Students | ተማሪዎች | ☐ | |
| `common.students_subtitle` | View registered users | የተመዘገቡ ተጠቃሚዎችን ይመልከቱ | ☐ | |
| `common.students_load_error` | We couldn't load your students | ተማሪዎችን መጫን አልቻልንም | ☐ | |
| `common.no_students` | No students yet | ገና ምንም ተማሪዎች የሉም | ☐ | |
| `common.no_students_desc` | Students will appear here when they interact with the bot | ተማሪዎች ከቦት ጋር ሲገናኙ እዚህ ይታያሉ | ☐ | |
| `common.telegram_id` | Telegram ID | የቴሌግራም መለያ | ☐ | |
| `common.role` | Role | ሚና | ☐ | |
| `common.language` | Language | ቋንቋ | ☐ | |
| `common.english` | English | እንግሊዝኛ | ☐ | |
| `common.amharic` | Amharic (አማርኛ) | አማርኛ | ☐ | |
| `common.terms_of_service` | Terms of Service | የአገልግሎት ውል | ☐ | |
| `common.privacy_policy` | Privacy Policy | የግላዊነት ፖሊሲ | ☐ | |
| `common.grade` | Grade | ክፍል | ☐ | |
| `common.joined` | Joined | የተቀላቀለበት | ☐ | |
| `common.quiz_attempts` | Quiz Attempts | የፈተና ሙከራዎች | ☐ | |
| `common.average_score` | Average Score | አማካይ ውጤት | ☐ | |
| `common.weak_areas` | Weak Areas | ደካማ ቦታዎች | ☐ | |
| `common.no_quiz_data` | No quiz data yet | ገና ምንም የፈተና መረጃ የለም | ☐ | |
| `common.no_quiz_data_desc` | Student has not taken any quizzes | ተማሪ ምንም ፈተና አልወሰደም | ☐ | |
| `common.back_to_students` | Back to students | ወደ ተማሪዎች ተመለስ | ☐ | |
| `common.recent_activity` | Recent Activity | የቅርብ ጊዜ እንቅስቃሴ | ☐ | |
| `common.no_recent_activity` | No recent activity | ምንም የቅርብ ጊዜ እንቅስቃሴ የለም | ☐ | |
| `common.activity_desc` | Activity will appear here as the student interacts | ተማሪ ሲገናኝ እንቅስቃሴ እዚህ ይታያል | ☐ | |
| `common.just_now` | just now | አሁን | ☐ | |
| `common.minutes_ago` | {m}m ago | ከ{m} ደቂቃ በፊት ⚠️ | ☐ | |
| `common.hours_ago` | {h}h ago | ከ{h} ሰዓት በፊት ⚠️ | ☐ | |
| `common.days_ago` | {d}d ago | ከ{d} ቀን በፊት ⚠️ | ☐ | |
| `common.models_loading` | Loading models... | ሞዴሎችን በመጫን ላይ... | ☐ | |
| `common.refresh_models` | Refresh models list | የሞዴሎች ዝርዝር አድስ | ☐ | |
| `common.no_data_yet` | No data yet | ገና ምንም መረጃ የለም | ☐ | |
| `common.loading_users` | Loading users... | ተጠቃሚዎችን በመጫን ላይ... | ☐ | |
| `common.no_users_found` | No users found | ምንም ተጠቃሚዎች አልተገኙም | ☐ | |
| `common.search_hint` | Try a different search term or role filter | የተለየ የፍለጋ ቃል ወይም የሚና ማጣሪያ ይሞክሩ | ☐ | |
| `common.view` | View | ይመልከቱ | ☐ | |
| `common.no_logs_yet` | No logs yet | ገና ምንም ምዝግብ የለም | ☐ | |
| `common.name` | Name | ስም | ☐ | |
| `common.model_label` | Model | ሞዴል | ☐ | |
| `common.start_with_quiz` | Start with a Quiz | በፈተና ይጀምሩ | ☐ | |
| `common.continue_learning` | Continue Learning | መማር ይቀጥሉ | ☐ | |
| `common.minutes` | min | ደቂቃ | ☐ | |
| `common.start_journey` | Start Your Learning Journey | የመማር ጉዞዎን ይጀምሩ | ☐ | |
| `common.start_journey_desc` | Take a quiz to get personalized recommendations | ግላዊ ምክሮችን ለማግኘት ፈተና ይውሰዱ | ☐ | |
| `common.no_readiness` | No readiness data yet — take quizzes to assess your readiness. | ገና ምንም የዝግጁነት መረጃ የለም — ዝግጁነትዎን ለመገምገም ፈተና ይውሰዱ። | ☐ | |
| `common.exam_readiness` | Exam Readiness | የፈተና ዝግጁነት | ☐ | |
| `common.load_error` | Unable to load readiness data | የዝግጁነት መረጃ መጫን አልተቻለም | ☐ | |
| `common.projected` | Projected: | ትንበያ፡ | ☐ | |
| `common.topics_evaluated` | {count} topics evaluated | {count} ርዕሶች ተገምግመዋል ⚠️ | ☐ | |
| `common.risk_topics` | Risk Topics | አደገኛ ርዕሶች | ☐ | |
| `common.forget_risk` | forget risk: {pct}% | የመርሳት አደጋ፡ {pct}% ⚠️ | ☐ | |
| `common.recommended_actions` | Recommended Actions | የሚመከሩ እርምጃዎች | ☐ | |
| `common.low_confidence` | low confidence | ዝቅተኛ እምነት | ☐ | |
| `common.section_recovery_actions` | Recovery Tasks | የማገገሚያ ተግባራት | ☐ | |
| `common.section_review_actions` | Review Topics | የመከለሻ ርዕሶች | ☐ | |
| `common.section_quiz_opportunities` | Quiz Opportunities | የፈተና እድሎች | ☐ | |
| `common.section_tutor_actions` | Tutor Sessions | የአስተማሪ ክፍለ ጊዜዎች | ☐ | |
| `common.xp` | XP | XP | ☐ | |
| `common.play_audio` | Play audio | ድምጽ አጫውት | ☐ | |

### `student.*` — 38 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `student.dashboard.title` | Student Dashboard | የተማሪ ዳሽቦርድ | ☐ | |
| `student.dashboard.total_xp` | Total XP | ጠቅላላ XP | ☐ | |
| `student.dashboard.study_streak` | Study Streak | የተከታታይ ትምህርት | ☐ | |
| `student.dashboard.mastery_progress` | Mastery Progress | የእውቀት እድገት | ☐ | |
| `student.dashboard.weak_topics` | Weak Topics | ደካማ ርዕሶች | ☐ | |
| `student.dashboard.recent_activity` | Recent Activity | የቅርብ ጊዜ እንቅስቃሴ | ☐ | |
| `student.dashboard.no_weak_topics` | No weak topics found — great job! | ምንም ደካማ ርዕሶች አልተገኙም — ጥሩ ሥራ! | ☐ | |
| `student.dashboard.no_activity` | No recent activity | ምንም የቅርብ ጊዜ እንቅስቃሴ የለም | ☐ | |
| `student.dashboard.readiness` | Exam Readiness | የፈተና ዝግጁነት | ☐ | |
| `student.dashboard.welcome_back` | Welcome back! | እንኳን በደህና ተመለሱ! | ☐ | |
| `student.dashboard.no_learning_data` | No learning data yet | ገና የትምህርት መረጃ የለም | ☐ | |
| `student.dashboard.no_learning_desc` | Start by joining a classroom or taking your first quiz. Your progress, achievements, and recommendations will appear here. | በክፍል መቀላቀል ወይም የመጀመሪያ ፈተናዎን በመውሰድ ይጀምሩ። እድገትዎ፣ ስኬቶችዎ እና ምክሮች እዚህ ይታያሉ። | ☐ | |
| `student.dashboard.back_to_students` | Back to students | ወደ ተማሪዎች ተመለስ | ☐ | |
| `student.dashboard.student_label` | Student #{id} | ተማሪ #{id} ⚠️ | ☐ | |
| `student.dashboard.grade_with_level` | Grade {grade} | ክፍል {grade} ⚠️ | ☐ | |
| `student.dashboard.quiz_attempts` | Quiz Attempts | የፈተና ሙከራዎች | ☐ | |
| `student.dashboard.average_score` | Average Score | አማካይ ውጤት | ☐ | |
| `student.dashboard.weak_areas` | Weak Areas | ደካማ ቦታዎች | ☐ | |
| `student.dashboard.no_quiz_data` | No quiz data yet | ገና ምንም የፈተና መረጃ የለም | ☐ | |
| `student.dashboard.no_quiz_data_desc` | Student has not taken any quizzes | ተማሪ ምንም ፈተና አልወሰደም | ☐ | |
| `student.dashboard.no_readiness` | No readiness data yet — take quizzes to assess your readiness. | ገና ምንም የዝግጁነት መረጃ የለም — ዝግጁነትዎን ለመገምገም ፈተና ይውሰዱ። | ☐ | |
| `student.dashboard.exam_readiness` | Exam Readiness | የፈተና ዝግጁነት | ☐ | |
| `student.dashboard.streak` | Streak | ተከታታይ ቀናት | ☐ | |
| `student.dashboard.days` | days | ቀናት | ☐ | |
| `student.dashboard.best` | Best: | ምርጥ፡ | ☐ | |
| `student.dashboard.areas_to_improve` | Areas to Improve | ማሻሻል የሚገባቸው መስኮች | ☐ | |
| `student.dashboard.recent_achievements` | Recent Achievements | የቅርብ ጊዜ ስኬቶች | ☐ | |
| `student.dashboard.achievements` | Achievements | ስኬቶች | ☐ | |
| `student.dashboard.level` | Level | ደረጃ | ☐ | |
| `student.dashboard.topic_mastery` | Topic Mastery | የርዕስ እውቀት ደረጃ | ☐ | |
| `student.dashboard.due_reviews` | Due for Review | መከለስ ያለባቸው | ☐ | |
| `student.dashboard.score` | Score | ውጤት | ☐ | |
| `student.dashboard.attempts` | Attempts | ሙከራዎች | ☐ | |
| `student.dashboard.mastery_label` | Mastery: | የእውቀት ደረጃ፡ | ☐ | |
| `student.mastery.title` | Topic Mastery | የርዕስ እውቀት | ☐ | |
| `student.mastery.score` | Score | ውጤት | ☐ | |
| `student.mastery.attempts` | Attempts | ሙከራዎች | ☐ | |
| `student.mastery.no_data` | No mastery data yet | ገና ምንም የእውቀት መረጃ የለም | ☐ | |

### `parent.*` — 24 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `parent.dashboard.title` | Parent Dashboard | የወላጅ ዳሽቦርድ | ☐ | |
| `parent.dashboard.amharic_summary` | አማርኛ | አማርኛ | ☐ | |
| `parent.dashboard.subtitle` | Track your child's science learning progress | የልጅዎን የሳይንስ ትምህርት እድገት ይከታተሉ | ☐ | |
| `parent.dashboard.no_children_title` | No children linked yet | ገና ምንም ልጆች አልተገናኙም | ☐ | |
| `parent.dashboard.no_children_subtitle` | Contact your school admin to link your child's account | የልጅዎን መለያ ለማገናኘት የትምህርት ቤቱን አስተዳዳሪ ያግኙ | ☐ | |
| `parent.dashboard.parent_access_required` | Parent Access Required | የወላጅ መዳሰሻ ያስፈልጋል | ☐ | |
| `parent.dashboard.parent_access_desc` | This page is for parents only. If you'd like to track a child's progress, register a new account with the Parent role. | ይህ ገጽ ለወላጆች ብቻ ነው። የልጅ እድገትን ለመከታተል ከፈለጉ በወላጅ ሚና አዲስ መለያ ይመዝግቡ። | ☐ | |
| `parent.dashboard.switch_account` | Switch Account | መለያ ቀይር | ☐ | |
| `parent.dashboard.grade_label` | Grade | ክፍል | ☐ | |
| `parent.dashboard.overall_readiness` | Overall Readiness | አጠቃላይ ዝግጁነት | ☐ | |
| `parent.dashboard.exam_readiness` | Exam readiness score | የፈተና ዝግጁነት ነጥብ | ☐ | |
| `parent.dashboard.current_streak` | Current Streak | የአሁኑ ተከታታይ | ☐ | |
| `parent.dashboard.total_xp_label` | total XP | ጠቅላላ XP | ☐ | |
| `parent.dashboard.topics_mastered` | Topics Mastered | የተቆጣጠሩ ርዕሶች | ☐ | |
| `parent.dashboard.topics_with_data` | Topics with data | መረጃ ያላቸው ርዕሶች | ☐ | |
| `parent.dashboard.mastery_by_topic` | Mastery by Topic | በርዕስ የእውቀት ደረጃ | ☐ | |
| `parent.dashboard.no_mastery_data` | No mastery data yet | ገና የእውቀት ደረጃ መረጃ የለም | ☐ | |
| `parent.dashboard.recent_quizzes` | Recent Quizzes | የቅርብ ጊዜ ፈተናዎች | ☐ | |
| `parent.dashboard.no_quizzes_taken` | No quizzes taken yet | ገና ምንም ፈተናዎች አልተወስዱም | ☐ | |
| `parent.dashboard.weekly_summary_title` | Weekly Summary | ሳምንታዊ ማጠቃለያ | ☐ | |
| `parent.dashboard.generate_new` | Generate New | አዲስ ፍጠር | ☐ | |
| `parent.dashboard.generating` | Generating... | በማመንጨት ላይ... | ☐ | |
| `parent.dashboard.performance_needs_attention` | Performance needs attention | አፈጻጸም ትኩረት ያስፈልገዋል | ☐ | |
| `parent.dashboard.no_summary_hint` | No summary yet. Click "Generate New" to create one. | ገና ማጠቃለያ የለም። ለመፍጠር "አዲስ ፍጠር" ን ይጫኑ። | ☐ | |

### `teacher.*` — 5 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `teacher.dashboard.title` | Teacher Dashboard | የመምህር ዳሽቦርድ | ☐ | |
| `teacher.dashboard.total_students` | Students | ተማሪዎች | ☐ | |
| `teacher.dashboard.recent_activity` | Recent Activity | የቅርብ ጊዜ እንቅስቃሴ | ☐ | |
| `teacher.dashboard.no_classrooms` | No classrooms yet | ገና ምንም ክፍሎች የሉም | ☐ | |
| `teacher.dashboard.no_activity` | No recent activity | ምንም የቅርብ ጊዜ እንቅስቃሴ የለም | ☐ | |

### `classroom.*` — 28 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `classroom.title` | My Classrooms | ክፍሎቼ | ☐ | |
| `classroom.create` | Create Classroom | ክፍል ፍጠር | ☐ | |
| `classroom.students` | Students | ተማሪዎች | ☐ | |
| `classroom.no_classrooms` | No classrooms yet | ገና ምንም ክፍሎች የሉም | ☐ | |
| `classroom.back` | Back to Classrooms | ወደ ክፍሎች ተመለስ | ☐ | |
| `classroom.student_grade` | Grade | ክፍል | ☐ | |
| `classroom.no_students` | No students in this classroom | በዚህ ክፍል ውስጥ ተማሪዎች የሉም | ☐ | |
| `classroom.grade` | Grade: | ክፍል፡ | ☐ | |
| `classroom.classroom_name_placeholder` | Classroom name | የክፍል ስም | ☐ | |
| `classroom.no_classrooms_subtitle` | Create your first classroom to get started. | ለመጀመር የመጀመሪያ ክፍልዎን ይፍጠሩ። | ☐ | |
| `classroom.classroom_health` | Classroom Health | የክፍል ጤና | ☐ | |
| `classroom.readiness_distribution` | Readiness Distribution | የዝግጁነት ስርጭት | ☐ | |
| `classroom.band_strong` | Strong | ጠንካራ | ☐ | |
| `classroom.band_ready` | Ready | ዝግጁ | ☐ | |
| `classroom.band_developing` | Developing | በማደግ ላይ | ☐ | |
| `classroom.band_critical` | Critical | ወሳኝ | ☐ | |
| `classroom.no_readiness_data` | No readiness data available. | የዝግጁነት መረጃ የለም። | ☐ | |
| `classroom.topic_heatmap` | Topic Heatmap | የርዕስ ሙቀት ካርታ | ☐ | |
| `classroom.no_topic_data` | No topic data available yet. | ገና የርዕስ መረጃ የለም። | ☐ | |
| `classroom.at_risk_students` | At-Risk Students | በአደጋ ላይ ያሉ ተማሪዎች | ☐ | |
| `classroom.no_risk_students` | No students at risk — all on track. | በአደጋ ላይ ያሉ ተማሪዎች የሉም — ሁሉም በትክክለኛ መንገድ ላይ ናቸው። | ☐ | |
| `classroom.readiness_suffix` | readiness | ዝግጁነት | ☐ | |
| `classroom.intervention_queue` | Intervention Queue | የጣልቃ ገብነት ተራ | ☐ | |
| `classroom.no_interventions` | No interventions needed — all students on track. | ምንም ጣልቃ ገብነት አያስፈልግም — ሁሉም ተማሪዎች በትክክለኛ መንገድ ላይ ናቸው። | ☐ | |
| `classroom.more_count` | more | ተጨማሪ | ☐ | |
| `classroom.priority_label` | priority | ቅድሚያ | ☐ | |
| `classroom.no_data_title` | No classroom data yet | ገና የክፍል መረጃ የለም | ☐ | |
| `classroom.no_data_subtitle` | Enroll students to see classroom intelligence. | የክፍል ብልሃትን ለማየት ተማሪዎችን ይመዝግቡ። | ☐ | |

### `quiz.*` — 64 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `quiz.title` | Quizzes | ፈተናዎች | ☐ | |
| `quiz.generate` | Generate Quiz | ፈተና ፍጠር | ☐ | |
| `quiz.topic` | Topic | ርዕስ | ☐ | |
| `quiz.grade` | Grade | ክፍል | ☐ | |
| `quiz.questions` | Questions | ጥያቄዎች | ☐ | |
| `quiz.score` | Score | ውጤት | ☐ | |
| `quiz.no_quizzes` | No quizzes found | ምንም ፈተናዎች አልተገኙም | ☐ | |
| `quiz.back` | Back to Quizzes | ወደ ፈተናዎች ተመለስ | ☐ | |
| `quiz.generate_title` | Generate Quiz | ፈተና ፍጠር | ☐ | |
| `quiz.question_count` | Number of questions | የጥያቄዎች ብዛት | ☐ | |
| `quiz.generating` | Generating... | በማመንጨት ላይ... | ☐ | |
| `quiz.subtitle` | Review and manage generated quizzes | የተፈጠሩ ፈተናዎችን ይገምግሙ እና ያስተዳድሩ | ☐ | |
| `quiz.filter_draft` | Draft | ረቂቅ | ☐ | |
| `quiz.filter_published` | Published | የታተመ | ☐ | |
| `quiz.filter_archived` | Archived | የተከማጨ | ☐ | |
| `quiz.generate_hint` | Click "Generate" to create a new quiz | አዲስ ፈተና ለመፍጠር "ፍጠር" ን ይጫኑ | ☐ | |
| `quiz.col_title` | Title | ርዕስ | ☐ | |
| `quiz.col_grade` | Grade | ክፍል | ☐ | |
| `quiz.col_topic` | Topic | ርዕስ | ☐ | |
| `quiz.col_questions` | Questions | ጥያቄዎች | ☐ | |
| `quiz.col_status` | Status | ሁኔታ | ☐ | |
| `quiz.col_created` | Created | የተፈጠረ | ☐ | |
| `quiz.grade_level` | Grade Level | የክፍል ደረጃ | ☐ | |
| `quiz.model` | Model | ሞዴል | ☐ | |
| `quiz.type` | Type | ዓይነት | ☐ | |
| `quiz.multiple_choice` | Multiple Choice | ባለ ብዙ ምርጫ | ☐ | |
| `quiz.true_false` | True/False | እውነት/ሐሰት | ☐ | |
| `quiz.mixed` | Mixed | ድብልቅ | ☐ | |
| `quiz.details_no_questions` | No questions found for this quiz | ለዚህ ፈተና ምንም ጥያቄዎች አልተገኙም | ☐ | |
| `quiz.details_grade` | Grade | ክፍል | ☐ | |
| `quiz.details_topic` | Topic | ርዕስ | ☐ | |
| `quiz.details_questions` | Questions | ጥያቄዎች | ☐ | |
| `quiz.details_status` | Status | ሁኔታ | ☐ | |
| `quiz.details_created` | Created: | የተፈጠረ፡ | ☐ | |
| `quiz.details_updating` | Updating... | በማዘመን ላይ... | ☐ | |
| `quiz.approve` | Approve | አጽድቅ | ☐ | |
| `quiz.reject` | Reject | ውድቅ አድርግ | ☐ | |
| `quiz.published` | Published | የታተመ | ☐ | |
| `quiz.explanation` | Explanation | ማብራሪያ | ☐ | |
| `quiz.previous` | Previous | ቀዳሚ | ☐ | |
| `quiz.next` | Next | ቀጣይ | ☐ | |
| `quiz.submit` | Submit | አስገባ | ☐ | |
| `quiz.submitting` | Submitting... | በማስገባት ላይ... | ☐ | |
| `quiz.result_title` | Quiz Complete! | ፈተናው ተጠናቋል! | ☐ | |
| `quiz.correct` | correct | ትክክል | ☐ | |
| `quiz.your_answer` | Your answer | የእርስዎ መልስ | ☐ | |
| `quiz.correct_answer` | Correct answer | ትክክለኛ መልስ | ☐ | |
| `quiz.continue_learning` | Continue Learning | መማር ይቀጥሉ | ☐ | |
| `quiz.retry_weak_topics` | Review Weak Topics | ደካማ ርዕሶችን ይገምግሙ | ☐ | |
| `quiz.question` | Question | ጥያቄ | ☐ | |
| `quiz.answer_placeholder` | Type your answer... | መልስዎን ይተይቡ... | ☐ | |
| `quiz.grade_label` | Grade | ክፍል | ☐ | |
| `quiz.take_title` | Take a Quiz | ፈተና ይውሰዱ | ☐ | |
| `quiz.take_subtitle` | Generate or choose a quiz to test your knowledge | እውቀትዎን ለመፈተሽ ፈተና ይፍጠሩ ወይም ይምረጡ | ☐ | |
| `quiz.generate_take_quiz` | Generate a Quiz | ፈተና ፍጠር | ☐ | |
| `quiz.generate_take_placeholder` | What topic? (e.g., 'Cell division', 'Photosynthesis') | ርዕሱ ምንድነው? (ለምሳሌ፡ 'የሕዋስ መከፋፈል', 'የዲ ኤን ኤ መዋቅር') | ☐ | |
| `quiz.published_quizzes` | Published Quizzes | የታተሙ ፈተናዎች | ☐ | |
| `quiz.view_history` | View History | ታሪክ ይመልከቱ | ☐ | |
| `quiz.history_title` | Quiz History | የፈተና ታሪክ | ☐ | |
| `quiz.history_subtitle` | Review your past quiz attempts | ያለፉትን የፈተና ሙከራዎችዎን ይገምግሙ | ☐ | |
| `quiz.no_attempts` | No quiz attempts yet | ገና ምንም የፈተና ሙከራ የለም | ☐ | |
| `quiz.take_first_quiz` | Take your first quiz | የመጀመሪያ ፈተናዎን ይውሰዱ | ☐ | |
| `quiz.take_another` | Take Another Quiz | ሌላ ፈተና ውሰድ | ☐ | |
| `quiz.back_to_history` | Back to History | ወደ ታሪክ ተመለስ | ☐ | |

### `ask.*` — 33 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `ask.title` | Ask Q&A | ጠይቅ ጥያቄ እና መልስ | ☐ | |
| `ask.ask_button` | Ask | ጠይቅ | ☐ | |
| `ask.thinking` | Thinking... | በማሰብ ላይ... | ☐ | |
| `ask.no_questions` | Ask a question to get started | ለመጀመር ጥያቄ ይጠይቁ | ☐ | |
| `ask.example_placeholder` | e.g., 'What is DNA replication?' | ለምሳሌ፡ 'ዲ ኤን ኤ ማባዛት ምንድነው?' | ☐ | |
| `ask.calling_model` | Calling {model}... | {model} እየጠራ ነው... ⚠️ | ☐ | |
| `ask.confidence` | confidence | እምነት | ☐ | |
| `ask.sources` | Sources | ምንጮች | ☐ | |
| `ask.no_questions_subtitle` | Example: "What is protein synthesis?" or "Explain evolution" | ለምሳሌ፡ "ፕሮቲን ውህደት ምንድነው?" ወይም "ዝግመተ ለውጥን አስረዳ" | ☐ | |
| `ask.graph_mode` | Graph | ግራፍ | ☐ | |
| `ask.chat_mode` | Chat | ቻት | ☐ | |
| `ask.grade_label` | Grade | ክፍል | ☐ | |
| `ask.recent_questions` | Recent Questions | የቅርብ ጥያቄዎች | ☐ | |
| `ask.loading_history` | Loading history... | ታሪክ በመጫን ላይ... | ☐ | |
| `ask.load_history_error` | Could not load history | ታሪክ መጫን አልተቻለም | ☐ | |
| `ask.search_history` | Search history | ታሪክ ፈልግ | ☐ | |
| `ask.no_history` | No questions yet | ገና ምንም ጥያቄዎች የሉም | ☐ | |
| `ask.no_search_results` | No matching questions | ምንም የሚዛመዱ ጥያቄዎች የሉም | ☐ | |
| `ask.today` | Today | ዛሬ | ☐ | |
| `ask.yesterday` | Yesterday | ትናንት | ☐ | |
| `ask.this_week` | This Week | በዚህ ሳምንት | ☐ | |
| `ask.retry` | Retry | ደግሞ ሞክር | ☐ | |
| `ask.server_error_hint` | The backend may be starting up. Please wait a moment and retry. | የኋላ መጨረሻው እየተነሳ ሊሆን ይችላል። እባክዎ ትንሽ ይጠብቁ እና እንደገና ይሞክሩ። | ☐ | |
| `ask.service_error_title` | AI assistant unavailable | የAI ረዳት አይገኝም | ☐ | |
| `ask.voice_button` | Voice input | የድምጽ ግቤት | ☐ | |
| `ask.voice_recording` | Recording... tap again to stop | በመቅዳት ላይ... ለማቆም እንደገና ይንኩ | ☐ | |
| `ask.voice_processing` | Processing audio... | ድምጽ በማስኬድ ላይ... | ☐ | |
| `ask.voice_error` | Voice input failed. Please try again or type. | የድምጽ ግቤት አልተሳካም። እባክዎ እንደገና ይሞክሩ ወይም ይተይቡ። | ☐ | |
| `ask.listening` | Listening... speak now | በማዳመጥ ላይ... አሁን ይናገሩ | ☐ | |
| `ask.listen` | Listen | አዳምጥ | ☐ | |
| `ask.take_quiz` | Take Quiz | ፈተና ውሰድ | ☐ | |
| `ask.new_chat` | New Chat | አዲስ ቻት | ☐ | |
| `ask.auth_required` | Please sign in again to continue | እባክዎ ለመቀጠል እንደገና ይግቡ | ☐ | |

### `gamification.*` — 43 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `gamification.title` | Gamification | ጌምፊኬሽን | ☐ | |
| `gamification.total_xp` | Total XP | ጠቅላላ XP | ☐ | |
| `gamification.level` | Level | ደረጃ | ☐ | |
| `gamification.study_streak` | Study Streak | የተከታታይ ትምህርት | ☐ | |
| `gamification.current` | Current | አሁን ያለ | ☐ | |
| `gamification.longest` | Longest | ረጅሙ | ☐ | |
| `gamification.mastery_progress` | Mastery Progress | የእውቀት እድገት | ☐ | |
| `gamification.recovery_progress` | Recovery Progress | የማገገሚያ እድገት | ☐ | |
| `gamification.achievements` | Achievements | ስኬቶች | ☐ | |
| `gamification.no_recovery_plans` | No Recovery Plans | ምንም የማገገሚያ እቅዶች የሉም | ☐ | |
| `gamification.recovery_desc` | Complete quizzes to identify weak areas and start a recovery plan. | ደካማ ቦታዎችን ለመለየት እና የማገገሚያ እቅድ ለመጀመር ፈተናዎችን ያጠናቅቁ። | ☐ | |
| `gamification.xp_and_level` | XP & Level | XP እና ደረጃ | ☐ | |
| `gamification.level_value` | Level {level} | ደረጃ {level} ⚠️ | ☐ | |
| `gamification.xp_count` | {count} XP | {count} XP ⚠️ | ☐ | |
| `gamification.xp_to_next_level` | {xp} XP to next level | {xp} XP ወደ ቀጣይ ደረጃ ⚠️ | ☐ | |
| `gamification.xp_earned_label` | {xp} XP earned | {xp} XP ተገኝቷል ⚠️ | ☐ | |
| `gamification.xp_to_next_level_value` | {xp} XP to Level {level} | {xp} XP ወደ ደረጃ {level} ⚠️ | ☐ | |
| `gamification.days` | days | ቀናት | ☐ | |
| `gamification.current_streak` | Current | አሁን ያለ | ☐ | |
| `gamification.longest_streak` | Longest | ረጅሙ | ☐ | |
| `gamification.unlocked_count` | {unlocked} / {total} unlocked | {unlocked} / {total} የተከፈቱ ⚠️ | ☐ | |
| `gamification.tasks_progress` | {completed}/{total} tasks | {completed}/{total} ተግባራት ⚠️ | ☐ | |
| `gamification.active_plans_count` | {count, plural, one {# active plan} other {# active plans}} | {count, plural, one {# ንቁ እቅድ} other {# ንቁ እቅዶች}} ⚠️ | ☐ | |
| `gamification.percent_complete` | {pct}% complete | {pct}% ተጠናቅቋል ⚠️ | ☐ | |
| `gamification.tasks_remaining` | {count, plural, one {# task remaining} other {# tasks remaining}} | {count, plural, one {# ተግባር ይቀራል} other {# ተግባራት ይቀራሉ}} ⚠️ | ☐ | |
| `gamification.achievement_first_steps` | First Steps | የመጀመሪያ እርምጃዎች | ☐ | |
| `gamification.achievement_first_steps_desc` | Complete your first quiz | የመጀመሪያ ፈተናዎን ያጠናቅቁ | ☐ | |
| `gamification.achievement_quiz_master` | Quiz Master | የፈተና ባለሙያ | ☐ | |
| `gamification.achievement_quiz_master_desc` | Complete 10 quizzes | 10 ፈተናዎችን ያጠናቅቁ | ☐ | |
| `gamification.achievement_perfect_score` | Perfect Score | ፍጹም ውጤት | ☐ | |
| `gamification.achievement_perfect_score_desc` | Get 100% on any quiz | በማንኛውም ፈተና 100% ያስመዝግቡ | ☐ | |
| `gamification.achievement_streak_starter` | Streak Starter | ተከታታይ ጀማሪ | ☐ | |
| `gamification.achievement_streak_starter_desc` | 3-day study streak | የ3 ቀን ተከታታይ ትምህርት | ☐ | |
| `gamification.achievement_dedicated` | Dedicated | ታታሪ | ☐ | |
| `gamification.achievement_dedicated_desc` | 7-day study streak | የ7 ቀን ተከታታይ ትምህርት | ☐ | |
| `gamification.achievement_scholar` | Scholar | ምሁር | ☐ | |
| `gamification.achievement_scholar_desc` | 30-day study streak | የ30 ቀን ተከታታይ ትምህርት | ☐ | |
| `gamification.achievement_xp_hunter` | XP Hunter | XP አዳኝ | ☐ | |
| `gamification.achievement_xp_hunter_desc` | Earn 1000 total XP | 1000 ጠቅላላ XP ያግኙ | ☐ | |
| `gamification.achievement_biology_expert` | Science Expert | የሳይንስ ኤክስፐርት | ☐ | |
| `gamification.achievement_biology_expert_desc` | Reach Level 5 | ደረጃ 5 ላይ ይድረሱ | ☐ | |
| `gamification.achievement_master_biologist` | Master Scientist | ዋና የሳይንስ ባለሙያ | ☐ | |
| `gamification.achievement_master_biologist_desc` | Reach Level 10 | ደረጃ 10 ላይ ይድረሱ | ☐ | |

### `v2.*` — 169 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `v2.nav.section_main` | Main | ዋና | ☐ | |
| `v2.nav.section_learning` | Learning | ትምህርት | ☐ | |
| `v2.nav.section_management` | Management | አስተዳደር | ☐ | |
| `v2.nav.section_workspace` | Workspace | የስራ ቦታ | ☐ | |
| `v2.nav.section_system` | System | ስርዓት | ☐ | |
| `v2.nav.section_admin` | Admin | አስተዳዳሪ | ☐ | |
| `v2.nav.overview` | Overview | አጠቃላይ እይታ | ☐ | |
| `v2.nav.dashboard` | Dashboard | ዳሽቦርድ | ☐ | |
| `v2.nav.student_dashboard` | Student Dashboard | የተማሪ ዳሽቦርድ | ☐ | |
| `v2.nav.parent` | Parent | ወላጅ | ☐ | |
| `v2.nav.single_lesson` | Single Lesson | ነጠላ ትምህርት | ☐ | |
| `v2.nav.single_lesson_sub` | Quick plan by grade & topic | በክፍል እና በርዕስ ፈጣን እቅድ | ☐ | |
| `v2.nav.unit_plan` | Unit Plan | የዩኒት እቅድ | ☐ | |
| `v2.nav.unit_plan_sub` | Multi-day comprehensive plan | የብዙ ቀን አጠቃላይ እቅድ | ☐ | |
| `v2.nav.assessment_studio` | Assessment Studio | የግምገማ ስቱዲዮ | ☐ | |
| `v2.nav.knowledge_graph` | Knowledge Graph | የእውቀት ግራፍ | ☐ | |
| `v2.nav.quizzes` | Quizzes | ፈተናዎች | ☐ | |
| `v2.nav.ask` | Ask Q&A | ጥያቄ ጠይቅ | ☐ | |
| `v2.nav.classroom` | Classroom | ክፍል | ☐ | |
| `v2.nav.students` | Students | ተማሪዎች | ☐ | |
| `v2.nav.school` | School | ትምህርት ቤት | ☐ | |
| `v2.nav.recovery` | Recovery | ማገገሚያ | ☐ | |
| `v2.nav.interventions` | Interventions | ጣልቃ ገብነቶች | ☐ | |
| `v2.nav.workspace_browse` | Browse | አስስ | ☐ | |
| `v2.nav.workspace_upload` | Upload | ስቀል | ☐ | |
| `v2.nav.workspace_search` | Search | ፈልግ | ☐ | |
| `v2.nav.workspace_processing` | Processing | በሂደት ላይ | ☐ | |
| `v2.nav.monitoring` | Monitoring | ክትትል | ☐ | |
| `v2.nav.diagrams` | Diagrams | ሥዕላዊ መግለጫዎች | ☐ | |
| `v2.nav.admin_dashboard` | Admin Dashboard | የአስተዳዳሪ ዳሽቦርድ | ☐ | |
| `v2.nav.review_queue` | Review Queue | የግምገማ ተራ | ☐ | |
| `v2.nav.content_review` | Content Review | የይዘት ግምገማ | ☐ | |
| `v2.nav.schools` | Schools | ትምህርት ቤቶች | ☐ | |
| `v2.nav.users` | Users | ተጠቃሚዎች | ☐ | |
| `v2.nav.agents` | Agents | ወኪሎች | ☐ | |
| `v2.nav.copilot` | Copilot | ረዳት | ☐ | |
| `v2.sidebar.brand_sub` | Science Learning Assistant | የሳይንስ ትምህርት ረዳት | ☐ | |
| `v2.sidebar.search` | Search | ፈልግ | ☐ | |
| `v2.sidebar.open_search_aria` | Open page search | የገጽ ፍለጋ ክፈት | ☐ | |
| `v2.sidebar.search_pages_aria` | Search pages | ገጾችን ፈልግ | ☐ | |
| `v2.sidebar.search_placeholder` | Search pages... | ገጾችን ፈልግ... | ☐ | |
| `v2.sidebar.no_results` | No results found for "{query}" | ለ"{query}" ምንም ውጤቶች አልተገኙም ⚠️ | ☐ | |
| `v2.sidebar.sign_out` | Sign out | ውጣ | ☐ | |
| `v2.sidebar.expand_aria` | Expand sidebar | ጎንዮሽን ዘርጋ | ☐ | |
| `v2.sidebar.collapse_aria` | Collapse sidebar | ጎንዮሽን ምጥ | ☐ | |
| `v2.insights.panel_label` | AI Panel | AI ፓነል | ☐ | |
| `v2.insights.title` | Insights | ግንዛቤዎች | ☐ | |
| `v2.activity.title` | Recent Activity | የቅርብ ጊዜ እንቅስቃሴ | ☐ | |
| `v2.activity.storystream` | StoryStream | ታሪክ ፍሰት | ☐ | |
| `v2.activity.type_xp` | XP Earned | XP አትረብ | ☐ | |
| `v2.activity.type_quiz` | Quiz Completed | ፈተና ተጠናቋል | ☐ | |
| `v2.activity.type_tutor` | Tutoring Session | የአስተማሪ ክፍለ ጊዜ | ☐ | |
| `v2.activity.type_achievement` | Achievement Unlocked | ስኬት ተከፍቷል | ☐ | |
| `v2.student.loading` | Loading your dashboard... | ዳሽቦርድዎን በመጫን ላይ... | ☐ | |
| `v2.student.welcome_back` | Welcome back, {name} | እንኳን በደህና ተመለሱ፣ {name} ⚠️ | ☐ | |
| `v2.student.hero_subtitle_focus` | Focus on {topic} — your lowest score is {score}% | በ{topic} ላይ ያተኩሩ — ዝቅተኛ ነጥብዎ {score}% ነው ⚠️ | ☐ | |
| `v2.student.hero_subtitle_readiness` | You're at {pct}% overall readiness | አጠቃላይ ዝግጁነትዎ {pct}% ነው ⚠️ | ☐ | |
| `v2.student.action_review` | Review {topic} | {topic} ግምገማ ⚠️ | ☐ | |
| `v2.student.badge_strong` | Strong readiness | ጠንካራ ዝግጁነት | ☐ | |
| `v2.student.badge_steady` | Steady progress | የተረጋጋ እድገት | ☐ | |
| `v2.student.badge_focused` | Focused improvement needed | የተያያዘ ማሻሻያ ያስፈልጋል | ☐ | |
| `v2.student.continue_learning` | Continue Learning | መማርን ይቀጥሉ | ☐ | |
| `v2.student.address_misconception` | Address {misconception} | {misconception}ን ያስተካክሉ ⚠️ | ☐ | |
| `v2.student.review_mastery` | Review — {pct}% mastery | ግምገማ — {pct}% የእውቀት ደረጃ ⚠️ | ☐ | |
| `v2.student.metric_readiness` | Readiness | ዝግጁነት | ☐ | |
| `v2.student.metric_xp` | Total XP | Total XP | ☐ | |
| `v2.student.metric_streak` | Streak | ተከታታይ ቀናት | ☐ | |
| `v2.student.streak_days` | {count, plural, one {# day} other {# days}} | {count, plural, one {# ቀን} other {# ቀናት}} ⚠️ | ☐ | |
| `v2.student.metric_level` | Level | ደረጃ | ☐ | |
| `v2.student.weekly_progress` | Weekly Progress | ሳምንታዊ እድገት | ☐ | |
| `v2.student.topic_mastery` | Topic Mastery | የርዕስ እውቀት ደረጃ | ☐ | |
| `v2.student.areas_to_improve` | Areas to Improve ({count}) | ማሻሻል የሚገባቸው መስኮች ({count}) ⚠️ | ☐ | |
| `v2.student.score_label` | Score: {pct}% | ውጤት፡ {pct}% ⚠️ | ☐ | |
| `v2.student.attempts_label` | Attempts: {count} | ሙከራዎች፡ {count} ⚠️ | ☐ | |
| `v2.student.achievements` | Achievements | ስኬቶች | ☐ | |
| `v2.student.insight_focus` | Focus on **{topic}** — your performance is at {score}%. Regular review will strengthen this area. | በ**{topic}** ላይ ያተኩሩ — አፈጻጸምዎ {score}% ነው። መደበኛ ግምገማ ይህን መስክ ያጠናክራል። ⚠️ | ☐ | |
| `v2.student.insight_reviews_due` | {count, plural, one {You have **# review** due. Spaced repetition keeps knowledge fresh.} other {You have **# reviews** due. Spaced repetition keeps knowledge fresh.}} | {count, plural, one {**# ግምገማ** አለብዎት። በክፍተት መድገም እውቀትን ሕያው ያደርጋል።} other {**# ግምገማዎች** አለብዎት። በክፍተት መድገም እውቀትን ሕያው ያደርጋል።}} ⚠️ | ☐ | |
| `v2.student.insight_best_streak` | {days, plural, one {Your best streak is **# day**. Can you beat it? Consistency is key to mastery.} other {Your best streak is **# days**. Can you beat it? Consistency is key to mastery.}} | {days, plural, one {ምርጥ ተከታታይነትዎ **# ቀን** ነው። ማሸነፍ ይችላሉ?} other {ምርጥ ተከታታይነትዎ **# ቀናት** ነው። ማሸነፍ ይችላሉ?}} ወጥነት ለችሎታ ቁልፍ ነው። ⚠️ | ☐ | |
| `v2.student.insight_streak` | {days, plural, one {**#-day streak!** You are building a strong learning habit. Keep it going.} other {**#-day streak!** You are building strong learning habits. Keep it going.}} | {days, plural, one {**የ# ቀን** ተከታታይ! ጠንካራ የትምህርት ልማድ እየገነቡ ነው። ይቀጥሉ።} other {**የ# ቀናት** ተከታታይ! ጠንካራ የትምህርት ልማድ እየገነቡ ነው። ይቀጥሉ።}} ⚠️ | ☐ | |
| `v2.student.milestone_first_review` | Complete first review | የመጀመሪያ ግምገማ ያጠናቅቁ | ☐ | |
| `v2.student.milestone_streak3` | 3-day streak | የ3 ቀን ተከታታይ | ☐ | |
| `v2.student.milestone_level5` | Level 5 | ደረጃ 5 | ☐ | |
| `v2.student.milestone_strengthen` | Strengthen {topic} | {topic} አጠናክር ⚠️ | ☐ | |
| `v2.student.recent_quizzes` | Recent Quiz Attempts | የቅርብ ጊዜ ፈተናዎች | ☐ | |
| `v2.student.view_all` | View all | ሁሉንም ይመልከቱ | ☐ | |
| `v2.student.load_error` | We couldn't load your dashboard | ዳሽቦርድዎን መጫን አልቻልንም | ☐ | |
| `v2.teacher.title` | Teaching Command Center | የትምህርት መቆጣጠሪያ ማዕከል | ☐ | |
| `v2.teacher.subtitle_active` | {count, plural, one {# student active} other {# students active}} | {count, plural, one {# ተማሪ ንቁ} other {# ተማሪዎች ንቁ}} ⚠️ | ☐ | |
| `v2.teacher.secondary_counts` | {quizzes} quizzes · {lessons} lessons · {attempts} attempts | {quizzes} ፈተናዎች · {lessons} ትምህርቶች · {attempts} ሙከራዎች ⚠️ | ☐ | |
| `v2.teacher.metric_students` | Students | ተማሪዎች | ☐ | |
| `v2.teacher.metric_quizzes` | Quizzes | ፈተናዎች | ☐ | |
| `v2.teacher.metric_lessons` | Lessons | ትምህርቶች | ☐ | |
| `v2.teacher.metric_attempts` | Attempts | ሙከራዎች | ☐ | |
| `v2.teacher.engagement_title` | Student Engagement | የተማሪ ተሳትፎ | ☐ | |
| `v2.teacher.engagement_value` | {count}/student | {count}/ተማሪ ⚠️ | ☐ | |
| `v2.teacher.engagement_context` | Average quiz attempts per student | በአማካይ የፈተና ሙከራዎች በአንድ ተማሪ | ☐ | |
| `v2.teacher.success_title` | Success Rate | የስኬት መጠን | ☐ | |
| `v2.teacher.success_trend` | {pct}% success | {pct}% ስኬት ⚠️ | ☐ | |
| `v2.teacher.success_context` | AI response success rate | የAI ምላሽ ስኬት መጠን | ☐ | |
| `v2.teacher.latency_title` | Avg Latency | አማካይ መዘግየት | ☐ | |
| `v2.teacher.latency_good` | Good | ጥሩ | ☐ | |
| `v2.teacher.latency_degraded` | Degraded | ዝቅ ያለ | ☐ | |
| `v2.teacher.latency_context` | Average AI response time | አማካይ የAI ምላሽ ጊዜ | ☐ | |
| `v2.teacher.recent_activity` | Recent Class Activity | የቅርብ ጊዜ የክፍል እንቅስቃሴ | ☐ | |
| `v2.teacher.no_activity` | No recent activity. | ምንም የቅርብ ጊዜ እንቅስቃሴ የለም። | ☐ | |
| `v2.teacher.status_ok` | OK | ስኬት | ☐ | |
| `v2.teacher.status_fail` | Fail | ያልተሳከ | ☐ | |
| `v2.teacher.insight_students` | {count, plural, one {**# student** is actively learning. Track class health to identify who needs support.} other {**# students** are actively learning. Track class health to identify those who need support.}} | {count, plural, one {**# ተማሪ** በንቃት እየተማረ ነው። ድጋፍ የሚያስፈልገውን ለመለየት የክፍል ጤናን ይከታተሉ።} other {**# ተማሪዎች** በንቃት እየተማሩ ነው። ድጋፍ የሚያስፈልጋቸውን ለመለየት የክፍል ጤናን ይከታተሉ።}} ⚠️ | ☐ | |
| `v2.teacher.insight_engagement` | Quiz engagement is high — **{count} attempts** logged. Review question performance to improve assessment quality. | የፈተና ተሳትፎ ከፍ ያለ ነው — **{count} ሙከራዎች** ተመዝግበዋል። የጥያቄ አፈጻጸምን በመገምገም የግምገማ ጥራት ያሻሽሉ። ⚠️ | ☐ | |
| `v2.teacher.insight_failed` | {count, plural, one {**# failed request** in recent logs. Check the AI infrastructure for potential issues.} other {**# failed requests** in recent logs. Check the AI infrastructure for potential issues.}} | {count, plural, one {በቅርብ ጊዜ ምዝግቦች ውስጥ **# ያልተሳካ ጥያቄ** አለ። ሊሆኑ የሚችሉ ችግሮችን ለመፈተሽ የAI መሠረተ ልማትን ይፈትሹ።} other {በቅርብ ጊዜ ምዝግቦች ውስጥ **# ያልተሳኩ ጥያቄዎች** አሉ። ሊሆኑ የሚችሉ ችግሮችን ለመፈተሽ የAI መሠረተ ልማትን ይፈትሹ።}} ⚠️ | ☐ | |
| `v2.teacher.insight_latency_healthy` | Average AI response time: **{seconds}s**. Model performance is healthy. | አማካይ የAI ምላሽ ጊዜ፡ **{seconds} ሰከንድ**። የሞዴል አፈጻጸም ጤናማ ነው። ⚠️ | ☐ | |
| `v2.teacher.insight_latency_degraded` | Average AI response time: **{seconds}s**. Model performance is degraded. | አማካይ የAI ምላሽ ጊዜ፡ **{seconds} ሰከንድ**። የሞዴል አፈጻጸም ዝቅ ያለ ነው። ⚠️ | ☐ | |
| `v2.teacher.load_error` | We couldn't load your dashboard | ዳሽቦርድዎን መጫን አልቻልንም | ☐ | |
| `v2.parent.title` | Your Child's Learning Journey | የልጅዎ የትምህርት ጉዞ | ☐ | |
| `v2.parent.subtitle_child` | {name} · Grade {grade} | {name} · ክፍል {grade} ⚠️ | ☐ | |
| `v2.parent.subtitle_select` | Select a child to view progress | እድገት ለማየት ልጅ ይምረጡ | ☐ | |
| `v2.parent.secondary_stats` | XP: {xp} · Streak: {days, plural, one {# day} other {# days}} | XP፡ {xp} · ተከታታይ፡ {days, plural, one {# ቀን} other {# ቀናት}} ⚠️ | ☐ | |
| `v2.parent.no_children` | No linked children found. | ምንም የተገናኙ ልጆች አልተገኙም። | ☐ | |
| `v2.parent.metric_topics` | Topics | ርዕሶች | ☐ | |
| `v2.parent.recent_quiz_results` | Recent Quiz Results | የቅርብ ጊዜ የፈተና ውጤቶች | ☐ | |
| `v2.parent.questions_label` | {score}/{total} questions | {score}/{total} ጥያቄዎች ⚠️ | ☐ | |
| `v2.parent.weekly_summary` | Weekly Summary | ሳምንታዊ ማጠቃለያ | ☐ | |
| `v2.parent.low_performance` | Low performance | ዝቅተኛ አፈጻጸም | ☐ | |
| `v2.parent.insight_weak` | {count, plural, one {# area needs attention: {topics}.} other {# areas need attention: {topics}.}} | {count, plural, one {# መስክ ትኩረት ያስፈልገዋል፡ {topics}.} other {# መስኮች ትኩረት ያስፈልጋቸዋል፡ {topics}.}} ⚠️ | ☐ | |
| `v2.parent.insight_strong` | {count, plural, one {# strength: {topics}. Keep up the good work!} other {# strengths: {topics}. Keep up the good work!}} | {count, plural, one {# ጠንካራ ጎን፡ {topics}. ጥሩ ሥራን ይቀጥሉ!} other {# ጠንካራ ጎኖች፡ {topics}. ጥሩ ሥራን ይቀጥሉ!}} ⚠️ | ☐ | |
| `v2.parent.insight_warning` | ⚠️ Low performance warning for this period. Consider scheduling additional support. | ⚠️ ለዚህ ጊዜ ዝቅተኛ አፈጻጸም ማስጠንቀቂያ። ተጨማሪ ድጋፍ ማዘጋጀት ይፈልጋሉ። | ☐ | |
| `v2.parent.insight_streak` | {days, plural, one {#-day streak! Consistency is building.} other {#-day streak! Consistency is building.}} | {days, plural, one {የ# ቀን ተከታታይ! ወጥነት እየገነባ ነው።} other {የ# ቀናት ተከታታይ! ወጥነት እየገነባ ነው።}} ⚠️ | ☐ | |
| `v2.parent.load_error` | We couldn't load your dashboard | ዳሽቦርድዎን መጫን አልቻልንም | ☐ | |
| `v2.school.title` | School Health Overview | የትምህርት ቤት ጤና አጠቃላይ እይታ | ☐ | |
| `v2.school.subtitle_schools` | {count, plural, one {# school managed} other {# schools managed}} | {count, plural, one {# ትምህርት ቤት ይመራል} other {# ትምህርት ቤቶች ይመራሉ}} ⚠️ | ☐ | |
| `v2.school.subtitle_none` | No schools found | ምንም ትምህርት ቤቶች አልተገኙም | ☐ | |
| `v2.school.secondary_stats` | {students} students · {teachers} teachers · {classrooms} classrooms | {students} ተማሪዎች · {teachers} መምህራን · {classrooms} ክፍሎች ⚠️ | ☐ | |
| `v2.school.metric_avg_health` | Avg Health | አማካይ ጤና | ☐ | |
| `v2.school.metric_teachers` | Teachers | መምህራን | ☐ | |
| `v2.school.metric_classrooms` | Classrooms | ክፍሎች | ☐ | |
| `v2.school.metric_at_risk` | At-Risk Classes | በአደጋ ላይ ያሉ ክፍሎች | ☐ | |
| `v2.school.health_distribution` | Health Distribution | የጤና ስርጭት | ☐ | |
| `v2.school.health_trend` | Health Trend (30 days) | የጤና አዝማሚያ (30 ቀናት) | ☐ | |
| `v2.school.at_risk_classrooms` | At-Risk Classrooms | በአደጋ ላይ ያሉ ክፍሎች | ☐ | |
| `v2.school.students_at_risk` | {count, plural, one {# student at risk} other {# students at risk}} | {count, plural, one {# ተማሪ በአደጋ ላይ} other {# ተማሪዎች በአደጋ ላይ}} ⚠️ | ☐ | |
| `v2.school.teacher_activity` | Teacher Activity | የመምህር እንቅስቃሴ | ☐ | |
| `v2.school.classes_label` | {count} classes | {count} ክፍሎች ⚠️ | ☐ | |
| `v2.school.avg_label` | {pct}% avg | {pct}% አማካይ ⚠️ | ☐ | |
| `v2.school.no_teacher_data` | No teacher data. | የመምህር መረጃ የለም። | ☐ | |
| `v2.school.select_school` | Select a school to view data. | መረጃ ለማየት ትምህርት ቤት ይምረጡ። | ☐ | |
| `v2.school.insight_intervention` | {students, plural, one {# student} other {# students}} across {classrooms, plural, one {# classroom} other {# classrooms}} need intervention. | {students, plural, one {# ተማሪ} other {# ተማሪዎች}} በ{classrooms, plural, one {# ክፍል} other {# ክፍሎች}} ውስጥ ጣልቃ ገብነት ያስፈልጋል። ⚠️ | ☐ | |
| `v2.school.insight_health_up` | School health increased by {points} points since last snapshot. | የትምህርት ቤት ጤና ካለፈው ስናፕሾት ጀምሮ በ{points} ነጥቦች ጨምሯል። ⚠️ | ☐ | |
| `v2.school.insight_health_down` | School health decreased by {points} points. Review at-risk classrooms. | የትምህርት ቤት ጤና በ{points} ነጥቦች ቀንሷል። በአደጋ ላይ ያሉ ክፍሎችን ይገምግሙ። ⚠️ | ☐ | |
| `v2.school.insight_critical` | {count, plural, one {# student} other {# students}} in critical readiness band. Immediate intervention recommended. | {count, plural, one {# ተማሪ} other {# ተማሪዎች}} በወሳኝ ዝግጁነት ባንድ ውስጥ። ወዲያውኑ ጣልቃ ገብነት ይመከራል። ⚠️ | ☐ | |
| `v2.school.load_error` | We couldn't load your dashboard | ዳሽቦርድዎን መጫን አልቻልንም | ☐ | |
| `v2.admin.title` | Platform Overview | የመድረክ አጠቃላይ እይታ | ☐ | |
| `v2.admin.subtitle_stats` | {students} active learners · {teachers} teachers · {users} users | {students} ንቁ ተማሪዎች · {teachers} መምህራን · {users} ተጠቃሚዎች ⚠️ | ☐ | |
| `v2.admin.badge_healthy` | Healthy system status | ጤናማ የስርዓት ሁኔታ | ☐ | |
| `v2.admin.users_title` | Platform Users | የመድረክ ተጠቃሚዎች | ☐ | |
| `v2.admin.users_context` | Total registered accounts | ጠቅላላ የተመዘገቡ መለያዎች | ☐ | |
| `v2.admin.new_users_title` | New Users | አዳዲስ ተጠቃሚዎች | ☐ | |
| `v2.admin.new_users_context` | Recent registrations | የቅርብ ጊዜ ምዝገባዎች | ☐ | |
| `v2.admin.recent_users` | Recent Users | የቅርብ ጊዜ ተጠቃሚዎች | ☐ | |
| `v2.admin.grade_label` | Grade {grade} | ክፍል {grade} ⚠️ | ☐ | |
| `v2.admin.no_recent_users` | No recent user registrations. | ምንም የቅርብ ጊዜ የተጠቃሚ ምዝገባዎች የሉም። | ☐ | |
| `v2.admin.recent_system` | Recent System Activity | የቅርብ ጊዜ የስርዓት እንቅስቃሴ | ☐ | |
| `v2.admin.no_system_activity` | No recent system activity. | ምንም የቅርብ ጊዜ የስርዓት እንቅስቃሴ የለም። | ☐ | |
| `v2.admin.insight_users` | {count} total users on the platform. Student-to-teacher ratio: {ratio}:1. | {count} ጠቅላላ ተጠቃሚዎች በመድረኩ ላይ። የተማሪ-ወደ-መምህር ጥምርታ፡ {ratio}:1። ⚠️ | ☐ | |
| `v2.admin.insight_attempts_strong` | {count} quiz attempts logged. Assessment engagement is strong. | {count} የፈተና ሙከራዎች ተመዝግበዋል። የግምገማ ተሳትፎ ጠንካራ ነው። ⚠️ | ☐ | |
| `v2.admin.insight_attempts_growing` | {count} quiz attempts logged. Assessment engagement is growing. | {count} የፈተና ሙከራዎች ተመዝግበዋል። የግምገማ ተሳትፎ እያደገ ነው። ⚠️ | ☐ | |
| `v2.admin.insight_failed` | ⚠️ {count, plural, one {# failed request} other {# failed requests}} in recent logs. AI infrastructure may need attention. | ⚠️ {count, plural, one {# ያልተሳካ ጥያቄ} other {# ያልተሳኩ ጥያቄዎች}} በቅርብ ጊዜ ምዝግቦች ውስጥ። የAI መሠረተ ልማት ትኩረት ሊያስፈልገው ይችላል። ⚠️ | ☐ | |
| `v2.admin.insight_adoption_fast` | {count, plural, one {# new user} other {# new users}} registered recently. Platform adoption is accelerating. | {count, plural, one {# አዲስ ተጠቃሚ} other {# አዳዲስ ተጠቃሚዎች}} በቅርቡ ተመዝግበዋል። የመድረክ ምዝገባ እያፋጠነ ነው። ⚠️ | ☐ | |
| `v2.admin.insight_adoption_steady` | {count, plural, one {# new user} other {# new users}} registered recently. Platform adoption is steady. | {count, plural, one {# አዲስ ተጠቃሚ} other {# አዳዲስ ተጠቃሚዎች}} በቅርቡ ተመዝግበዋል። የመድረክ ምዝገባ የተረጋጋ ነው። ⚠️ | ☐ | |
| `v2.admin.load_error` | We couldn't load your dashboard | ዳሽቦርድዎን መጫን አልቻልንም | ☐ | |

### `subjectgrade.*` — 8 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `subjectgrade.subject_label` | Subject | የመርገጫ አይነት | ☐ | |
| `subjectgrade.subject_selector` | Select subject and grade | ርገጫ አይነት እና ክዳኔ ይምረጡ | ☐ | |
| `subjectgrade.subject_biology` | Biology | ባዮሎጂ | ☐ | |
| `subjectgrade.subject_chemistry` | Chemistry | ኬሚስትሪ | ☐ | |
| `subjectgrade.subject_physics` | Physics | ፊዚክስ | ☐ | |
| `subjectgrade.subject_mathematics` | Mathematics | ሂሳብ | ☐ | |
| `subjectgrade.subject_coming_soon` | Coming soon | በቅርቡ ይመጣል | ☐ | |
| `subjectgrade.grade_label` | Grade | ክዳኔ | ☐ | |

### `legal.*` — 6 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `legal.terms_title` | Terms of Service | የአገልግሎት ውል | ☐ | |
| `legal.terms_updated` | Last updated: September 2026 | ለመጨረሻ ጊዜ የተዘመነ: መስከረም 2026 | ☐ | |
| `legal.terms_body` | By using EthioSci you agree to use the service for learning purposes, keep your account credentials private, and treat other users with respect. EthioSci provides educational content grounded in the Ethiopian curriculum; while we work hard for accuracy, always verify critical information with your teacher or official materials. | ኢትዮሳይን በመጠቀም አገልግሎቱን ለትምህርት ዓላማ እንደሚጠቀሙበት፣ የመለያ ማረጋገጫዎን በግላዊነት እንደሚይዙ እና ሌሎች ተጠቃሚዎችን በአክብሮት እንደሚያስተናግዱ ይስማማሉ። ኢትዮሳይ በኢትዮጵያ ሥርዓተ ትምህርት ላይ የተመሠረተ የትምህርት ይዘት ያቀርባል; ለትክክለኛነት ጥረት ብንያደርግም ወሳኝ መረጃን ሁልጊዜ ከመምህርዎ ወይም ከይፋዊ ቁሳቁሶች ያረጋግጡ። | ☐ | |
| `legal.privacy_title` | Privacy Policy | የግላዊነት ፖሊሲ | ☐ | |
| `legal.privacy_body` | EthioSci collects only the minimum data needed to teach: an account, your role, and — for learners — a date of birth used to keep the experience age-appropriate. We do not sell personal data and we do not show ads. Answers are generated from Ethiopian textbooks and may include your subject and grade to improve relevance. | ኢትዮሳይ ለማስተማር የሚያስፈልገውን አነስተኛ ውሂብ ብቻ ይሰበስባል: መለያ፣ ሚናዎ፣ እና — ለተማሪዎች — ለእድሜ ተስማሚ ተሞክሮ የሚያገለግል የትውልድ ቀን። የግል ውሂብ አንሸጥም እና ማስታወቂያ አናሳይም። መልሶች ከኢትዮጵያ የመማሪያ መጽሐፍት ይዘጋጃሉ እና ተገቢነትን ለማሻሻል ርዕሰ ጉዳይዎን እና ክፍልዎን ሊያካትቱ ይችላሉ። | ☐ | |
| `legal.privacy_updated` | Last updated: September 2026 | ለመጨረሻ ጊዜ የተዘመነ: መስከረም 2026 | ☐ | |

---

## Batch 3 — Remaining product areas

### `admin.*` — 110 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `admin.dashboard.title` | Admin Dashboard | የአስተዳዳሪ ዳሽቦርድ | ☐ | |
| `admin.dashboard.total_users` | Total Users | ጠቅላላ ተጠቃሚዎች | ☐ | |
| `admin.dashboard.total_teachers` | Teachers | መምህራን | ☐ | |
| `admin.dashboard.total_students` | Students | ተማሪዎች | ☐ | |
| `admin.dashboard.recent_activity` | Recent Activity | የቅርብ ጊዜ እንቅስቃሴ | ☐ | |
| `admin.dashboard.dashboard` | Dashboard | ዳሽቦርድ | ☐ | |
| `admin.dashboard.subtitle` | EthioSci overview | የEthioSci አጠቃላይ እይታ | ☐ | |
| `admin.dashboard.quizzes` | Quizzes | ፈተናዎች | ☐ | |
| `admin.dashboard.lesson_plans` | Lesson Plans | የትምህርት እቅዶች | ☐ | |
| `admin.dashboard.quiz_attempts` | Quiz Attempts | የፈተና ሙከራዎች | ☐ | |
| `admin.dashboard.platform_users` | platform users | የመድረክ ተጠቃሚዎች | ☐ | |
| `admin.dashboard.request_latency` | Request Latency | የጥያቄ መዘግየት | ☐ | |
| `admin.dashboard.request_status` | Request Status | የጥያቄ ሁኔታ | ☐ | |
| `admin.dashboard.success` | Success | ስኬት | ☐ | |
| `admin.dashboard.failed` | Failed | ያልተሳከ | ☐ | |
| `admin.dashboard.success_rate` | Success rate | የስኬት መጠን | ☐ | |
| `admin.dashboard.col_model` | Model | ሞዴል | ☐ | |
| `admin.dashboard.col_latency` | Latency | መዘግየት | ☐ | |
| `admin.dashboard.no_request_data` | No request data yet | ገና የጥያቄ መረጃ የለም | ☐ | |
| `admin.dashboard.no_activity` | No recent activity | ምንም የቅርብ ጊዜ እንቅስቃሴ የለም | ☐ | |
| `admin.dashboard.error_load` | Failed to load dashboard | ዳሽቦርድ መጫን አልተሳካም | ☐ | |
| `admin.dashboard.overview` | Dashboard Overview | ዳሽቦርድ አጠቃላይ እይታ | ☐ | |
| `admin.dashboard.users` | Users | ተጠቃሚዎች | ☐ | |
| `admin.dashboard.lessons` | Lessons | ትምህርቶች | ☐ | |
| `admin.dashboard.recent_users` | Recent Users | የቅርብ ጊዜ ተጠቃሚዎች | ☐ | |
| `admin.dashboard.recent_model_logs` | Recent Model Logs | የቅርብ ጊዜ የሞዴል ምዝግቦች | ☐ | |
| `admin.dashboard.col_id` | ID | መለያ | ☐ | |
| `admin.dashboard.col_role` | Role | ሚና | ☐ | |
| `admin.dashboard.col_grade` | Grade | ክፍል | ☐ | |
| `admin.dashboard.col_created` | Created | የተፈጠረ | ☐ | |
| `admin.dashboard.col_type` | Type | ዓይነት | ☐ | |
| `admin.dashboard.col_status` | Status | ሁኔታ | ☐ | |
| `admin.users.title` | User Management | የተጠቃሚ አስተዳደር | ☐ | |
| `admin.users.email` | Email | ኢሜይል | ☐ | |
| `admin.users.role` | Role | ሚና | ☐ | |
| `admin.users.grade` | Grade | ክፍል | ☐ | |
| `admin.users.telegram` | Telegram | ቴሌግራም | ☐ | |
| `admin.users.children` | Children | ልጆች | ☐ | |
| `admin.users.status_active` | Active | ንቁ | ☐ | |
| `admin.users.status_inactive` | Inactive | ሥራ ላይ ያልሆነ | ☐ | |
| `admin.users.deactivate` | Deactivate | አሰናክል | ☐ | |
| `admin.users.activate` | Activate | አንቃ | ☐ | |
| `admin.users.users_subtitle` | {count} users registered | {count} ተጠቃሚዎች ተመዝግበዋል ⚠️ | ☐ | |
| `admin.users.search_placeholder_admin` | Search by email or Telegram ID... | በኢሜይል ወይም በቴሌግራም መለያ ይፈልጉ... | ☐ | |
| `admin.users.all` | All | ሁሉም | ☐ | |
| `admin.users.page_of` | Page {page} of {total} | ገጽ {page} ከ {total} ⚠️ | ☐ | |
| `admin.users.previous` | Previous | ቀዳሚ | ☐ | |
| `admin.users.next` | Next | ቀጣይ | ☐ | |
| `admin.schools.title` | Schools | ትምህርት ቤቶች | ☐ | |
| `admin.schools.add_school` | Add School | ትምህርት ቤት ጨምር | ☐ | |
| `admin.schools.name` | School Name | የትምህርት ቤት ስም | ☐ | |
| `admin.schools.school_name_placeholder` | School name | የትምህርት ቤት ስም | ☐ | |
| `admin.schools.school_info` | {teachers} teachers · {students} students · Grade {grade} | {teachers} መምህራን · {students} ተማሪዎች · ክፍል {grade} ⚠️ | ☐ | |
| `admin.monitoring.title` | Monitoring | ክትትል | ☐ | |
| `admin.monitoring.latency` | Latency | መዘግየት | ☐ | |
| `admin.monitoring.monitoring_subtitle` | Model performance and usage metrics | የሞዴል አፈጻጸም እና አጠቃቀም መለኪያዎች | ☐ | |
| `admin.monitoring.total_requests` | Total Requests | ጠቅላላ ጥያቄዎች | ☐ | |
| `admin.monitoring.failed_label` | Failed | ያልተሳኩ | ☐ | |
| `admin.monitoring.fallback_rate` | Fallback Rate | የመጠባበቂያ መጠን | ☐ | |
| `admin.monitoring.fallbacks_used` | Fallbacks Used | ጥቅም ላይ የዋሉ መጠባበቂያዎች | ☐ | |
| `admin.monitoring.fallbacks_triggered` | Fallbacks triggered: | የተቀሰቀሱ መጠባበቂያዎች፡ | ☐ | |
| `admin.monitoring.times` | {count} times | {count} ጊዜ ⚠️ | ☐ | |
| `admin.content.title` | Content Review | የይዘት ግምገማ | ☐ | |
| `admin.content.quiz` | Quiz Review | የፈተና ግምገማ | ☐ | |
| `admin.content.lesson` | Lesson Review | የትምህርት ግምገማ | ☐ | |
| `admin.content.approve` | Approve | አጽድቅ | ☐ | |
| `admin.content.reject` | Reject | ውድቅ አድርግ | ☐ | |
| `admin.content.published` | Published | የታተመ | ☐ | |
| `admin.content.draft` | Draft | ረቂቅ | ☐ | |
| `admin.content.archived` | Archived | የተከማጨ | ☐ | |
| `admin.content.all_types` | All Types | ሁሉም ዓይነቶች | ☐ | |
| `admin.content.all_status` | All Status | ሁሉም ሁኔታ | ☐ | |
| `admin.content.back_to_content` | Back to Content | ወደ ይዘት ተመለስ | ☐ | |
| `admin.content.grade_label` | Grade: | ክፍል፡ | ☐ | |
| `admin.content.topic` | Topic: | ርዕስ፡ | ☐ | |
| `admin.content.status_label` | Status: | ሁኔታ፡ | ☐ | |
| `admin.content.model` | Model: | ሞዴል፡ | ☐ | |
| `admin.content.questions` | Questions: | ጥያቄዎች፡ | ☐ | |
| `admin.content.created_label` | Created: | የተፈጠረ፡ | ☐ | |
| `admin.content.archive_quiz` | Archive Quiz | ፈተና አርክቪንግ | ☐ | |
| `admin.content.publish_quiz` | Publish Quiz | ፈተና አትም | ☐ | |
| `admin.content.archive_lesson` | Archive Lesson | ትምህርት አርክቪንግ | ☐ | |
| `admin.content.publish_lesson` | Publish Lesson | ትምህርት አትም | ☐ | |
| `admin.content.questions_heading` | Questions | ጥያቄዎች | ☐ | |
| `admin.content.type` | Type: | ዓይነት፡ | ☐ | |
| `admin.content.difficulty` | Difficulty: | ችግረት፡ | ☐ | |
| `admin.content.objective` | Objective | ዓላማ | ☐ | |
| `admin.content.prior_knowledge` | Prior Knowledge | ቅድመ እውቀት | ☐ | |
| `admin.content.explanation` | Explanation | ማብራሪያ | ☐ | |
| `admin.content.activities` | Activities | እንቅስቃሴዎች | ☐ | |
| `admin.content.periods` | Lesson Periods | የትምህርት ክፍለ ጊዜዎች | ☐ | |
| `admin.content.assessment` | Assessment | ግምገማ | ☐ | |
| `admin.content.homework` | Homework | የቤት ሥራ | ☐ | |
| `admin.content.teacher_notes` | Teacher Notes | የመምህር ማስታወሻዎች | ☐ | |
| `admin.content.col_title` | Title | ርዕስ | ☐ | |
| `admin.content.publish` | Publish | አትም | ☐ | |
| `admin.content.archive` | Archive | አርክቪንግ | ☐ | |
| `admin.review.title` | Review Queue | የግምገማ ተራ | ☐ | |
| `admin.review.subtitle` | Pipeline responses flagged by the Safety Node for teacher review | ለመምህር ግምገማ በደህንነት ኖድ የታያቸው የፓይፕላይን ምላሾች | ☐ | |
| `admin.review.error_load` | Failed to load review items | የግምገማ እቃዎችን መጫን አልተሳካም | ☐ | |
| `admin.review.error_resolve` | Failed to resolve item | እቃውን መፍታት አልተሳካም | ☐ | |
| `admin.review.filter_pending` | Pending | በመጠባበቅ ላይ | ☐ | |
| `admin.review.filter_resolved` | Resolved | የፈቱ | ☐ | |
| `admin.agents.title` | Agent Orchestrator | የወኪሎች አስተባባሪ | ☐ | |
| `admin.agents.description` | Registered agents, task execution, and execution history | የተመዘገቡ ወኪሎች፣ የተግባር አፈጻጸም እና የአፈጻጸም ታሪክ | ☐ | |
| `admin.agents.empty` | No agents registered. Check that the orchestrator is running. | ምንም ወኪሎች አልተመዘገቡም። አስተባባሪው እየሠራ መሆኑን ያረጋግጡ። | ☐ | |
| `admin.access.denied_title` | Access Denied | መዳሰሻ ተከልክሏል | ☐ | |
| `admin.access.denied_reason` | Access denied — admin privileges required | መዳሰሻ ተከልክሏል — የአስተዳዳሪ መብቶች ያስፈልጋል | ☐ | |
| `admin.access.back_to_dashboard` | Back to Dashboard | ወደ ዳሽቦርድ ተመለስ | ☐ | |
| `admin.access.verifying` | Verifying access... | መዳሰሻን በማረጋገጥ ላይ... | ☐ | |

### `unit_plans.*` — 39 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `unit_plans.title` | Unit Plans | የዩኒት እቅዶች | ☐ | |
| `unit_plans.create` | Create Unit Plan | የዩኒት እቅድ ፍጠር | ☐ | |
| `unit_plans.subtitle` | Generate multi-day lesson plans | የብዙ ቀን ትምህርት እቅዶችን ያመንጩ | ☐ | |
| `unit_plans.create_title` | Create Unit Plan | የዩኒት እቅድ ፍጠር | ☐ | |
| `unit_plans.no_plans` | No unit plans found | ምንም የዩኒት እቅዶች አልተገኙም | ☐ | |
| `unit_plans.create_hint` | Click "Create" to generate a new unit plan | አዲስ የዩኒት እቅድ ለመፍጠር "ፍጠር" ን ይጫኑ | ☐ | |
| `unit_plans.classroom_context` | Classroom (optional) | ክፍል (አማራጭ) | ☐ | |
| `unit_plans.classroom_reference_only` | None (reference only) | ምንም የለም (ማጣቀሻ ብቻ) | ☐ | |
| `unit_plans.col_title` | Unit Title | የዩኒት ርዕስ | ☐ | |
| `unit_plans.col_topic` | Topic | ርዕስ | ☐ | |
| `unit_plans.col_grade` | Grade | ክፍል | ☐ | |
| `unit_plans.col_days` | Days | ቀናት | ☐ | |
| `unit_plans.col_created` | Created | የተፈጠረ | ☐ | |
| `unit_plans.days` | Number of Days | የቀናት ብዛት | ☐ | |
| `unit_plans.unit_title` | Unit Title | የዩኒት ርዕስ | ☐ | |
| `unit_plans.unit_title_placeholder` | e.g., Cell Biology Week | ለምሳሌ፡ የሴል ባዮሎጂ ሳምንት | ☐ | |
| `unit_plans.grade_level` | Grade Level | ክፍል | ☐ | |
| `unit_plans.model` | Model | ሞዴል | ☐ | |
| `unit_plans.duration_minutes` | Duration (minutes) | ቆይታ (ደቂቃ) | ☐ | |
| `unit_plans.exit_ticket` | Exit Ticket | የመውጫ ቲኬት | ☐ | |
| `unit_plans.exit_ticket_hint` | Generate 3 review questions per day | በቀን 3 የግምገማ ጥያቄዎችን ያመንጩ | ☐ | |
| `unit_plans.differentiation` | Differentiation | ልዩነት | ☐ | |
| `unit_plans.differentiation_hint` | Activities for support/standard/advanced groups | ለድጋፍ/መደበኛ/ከፍተኛ ቡድኖች እንቅስቃሴዎች | ☐ | |
| `unit_plans.diagram_suggestions` | Diagram Suggestions | ሥዕላዊ መግለጫ ምክሮች | ☐ | |
| `unit_plans.diagram_suggestions_hint` | Suggest topic-related diagrams per day | በቀን ከትምህርቱ ጋር የተያያዙ ሥዕላዊ መግለጫዎችን ይጠቁሙ | ☐ | |
| `unit_plans.misconception_activities` | Misconception Activities | የተሳሳቱ አመለካከቶች እንቅስቃሴዎች | ☐ | |
| `unit_plans.misconception_activities_hint` | Activities to address known misconceptions | የታወቁ የተሳሳቱ አመለካከቶችን ለመፍታት እንቅስቃሴዎች | ☐ | |
| `unit_plans.back` | Back to Unit Plans | ወደ ዩኒት እቅዶች ተመለስ | ☐ | |
| `unit_plans.generating` | Creating... | በመፍጠር ላይ... | ☐ | |
| `unit_plans.details_days` | Days | ቀናት | ☐ | |
| `unit_plans.details_model` | Model | ሞዴል | ☐ | |
| `unit_plans.details_created` | Created | የተፈጠረ | ☐ | |
| `unit_plans.day_lesson` | Day {day}: {subtopic} | ቀን {day}: {subtopic} ⚠️ | ☐ | |
| `unit_plans.day_objective` | Objective | ዓላማ | ☐ | |
| `unit_plans.day_periods` | Periods | ክፍለ ጊዜዎች | ☐ | |
| `unit_plans.day_activities` | Activities | እንቅስቃሴዎች | ☐ | |
| `unit_plans.day_assessment` | Assessment | ግምገማ | ☐ | |
| `unit_plans.day_homework` | Homework | የቤት ሥራ | ☐ | |
| `unit_plans.day_teacher_notes` | Teacher Notes | የመምህር ማስታወሻዎች | ☐ | |

### `lesson.*` — 49 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `lesson.title` | Lesson Plans | የትምህርት እቅዶች | ☐ | |
| `lesson.create` | Create Lesson Plan | የትምህርት እቅድ ፍጠር | ☐ | |
| `lesson.topic` | Topic | ርዕስ | ☐ | |
| `lesson.grade` | Grade | ክፍል | ☐ | |
| `lesson.no_lessons` | No lesson plans found | ምንም የትምህርት እቅዶች አልተገኙም | ☐ | |
| `lesson.back` | Back to Lessons | ወደ ትምህርት እቅዶች ተመለስ | ☐ | |
| `lesson.create_title` | Create Lesson Plan | የትምህርት እቅድ ፍጠር | ☐ | |
| `lesson.generating` | Creating... | በመፍጠር ላይ... | ☐ | |
| `lesson.subtitle` | Review and manage generated lesson plans | የተፈጠሩ የትምህርት እቅዶችን ይገምግሙ እና ያስተዳድሩ | ☐ | |
| `lesson.filter_draft` | Draft | ረቂቅ | ☐ | |
| `lesson.filter_published` | Published | የታተመ | ☐ | |
| `lesson.filter_archived` | Archived | የተከማጨ | ☐ | |
| `lesson.create_hint` | Click "Create" to generate a new lesson plan | አዲስ የትምህርት እቅድ ለመፍጠር "ፍጠር" ን ይጫኑ | ☐ | |
| `lesson.classroom_context` | Classroom (optional) | ክፍል (አማራጭ) | ☐ | |
| `lesson.classroom_reference_only` | None (reference only) | ምንም የለም (ማጣቀሻ ብቻ) | ☐ | |
| `lesson.col_topic` | Topic | ርዕስ | ☐ | |
| `lesson.col_grade` | Grade | ክፍል | ☐ | |
| `lesson.col_objective` | Objective | ዓላማ | ☐ | |
| `lesson.col_status` | Status | ሁኔታ | ☐ | |
| `lesson.col_created` | Created | የተፈጠረ | ☐ | |
| `lesson.grade_level` | Grade Level | የክፍል ደረጃ | ☐ | |
| `lesson.model` | Model | ሞዴል | ☐ | |
| `lesson.duration_minutes` | Duration (minutes) | ቆይታ (ደቂቃዎች) | ☐ | |
| `lesson.exit_ticket` | Exit Ticket | የመውጫ ቲኬት | ☐ | |
| `lesson.exit_ticket_hint` | Generate 3 review questions | 3 የግምገማ ጥያቄዎችን ያመንጩ | ☐ | |
| `lesson.differentiation` | Differentiation | ልዩነት | ☐ | |
| `lesson.differentiation_hint` | Activities for support/standard/advanced groups | ለድጋፍ/መደበኛ/ከፍተኛ ቡድኖች እንቅስቃሴዎች | ☐ | |
| `lesson.diagram_suggestions` | Diagram Suggestions | ሥዕላዊ መግለጫ ምክሮች | ☐ | |
| `lesson.diagram_suggestions_hint` | Suggest topic-related diagrams | ከትምህርቱ ጋር የተያያዙ ሥዕላዊ መግለጫዎችን ይጠቁሙ | ☐ | |
| `lesson.misconception_activities` | Misconception Activities | የተሳሳቱ አመለካከቶች እንቅስቃሴዎች | ☐ | |
| `lesson.misconception_activities_hint` | Activities to address known misconceptions | የታወቁ የተሳሳቱ አመለካከቶችን ለመፍታት እንቅስቃሴዎች | ☐ | |
| `lesson.details_activities` | Activities | እንቅስቃሴዎች | ☐ | |
| `lesson.details_explanation` | Explanation | ማብራሪያ | ☐ | |
| `lesson.details_periods` | Lesson Periods | የትምህርት ክፍለ ጊዜዎች | ☐ | |
| `lesson.details_grade` | Grade | ክፍል | ☐ | |
| `lesson.details_topic` | Topic | ርዕስ | ☐ | |
| `lesson.details_questions` | Questions | ጥያቄዎች | ☐ | |
| `lesson.details_status` | Status | ሁኔታ | ☐ | |
| `lesson.details_created` | Created: | የተፈጠረ፡ | ☐ | |
| `lesson.details_updating` | Updating... | በማዘመን ላይ... | ☐ | |
| `lesson.approve` | Approve | አጽድቅ | ☐ | |
| `lesson.reject` | Reject | ውድቅ አድርግ | ☐ | |
| `lesson.published` | Published | የታተመ | ☐ | |
| `lesson.explanation` | Explanation | ማብራሪያ | ☐ | |
| `lesson.details_objective` | Objective | ዓላማ | ☐ | |
| `lesson.details_prior_knowledge` | Prior Knowledge | ቅድመ እውቀት | ☐ | |
| `lesson.details_assessment` | Assessment | ግምገማ | ☐ | |
| `lesson.details_homework` | Homework | የቤት ሥራ | ☐ | |
| `lesson.details_teacher_notes` | Teacher Notes | የመምህር ማስታወሻዎች | ☐ | |

### `monitoring.*` — 27 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `monitoring.title` | Monitoring | ክትትል | ☐ | |
| `monitoring.overview` | Overview | አጠቃላይ እይታ | ☐ | |
| `monitoring.no_data` | No monitoring data yet | ገና ምንም የክትትል መረጃ የለም | ☐ | |
| `monitoring.subtitle` | System performance and request tracking | የስርዓት አፈጻጸም እና የጥያቄ ክትትል | ☐ | |
| `monitoring.provider_status` | Provider Status | የአቅራቢ ሁኔታ | ☐ | |
| `monitoring.active_model` | Active model: | ንቁ ሞዴል፡ | ☐ | |
| `monitoring.error_load` | Failed to load monitoring data | የክትትል መረጃዎችን መጫን አልተሳካም | ☐ | |
| `monitoring.total_requests` | Total Requests | ጠቅላላ ጥያቄዎች | ☐ | |
| `monitoring.failed` | Failed | ያልተሳኩ | ☐ | |
| `monitoring.fallback_rate` | Fallback Rate | የመጠባበቂያ መጠን | ☐ | |
| `monitoring.fallbacks_used` | Fallbacks Used | ጥቅም ላይ የዋሉ መጠባበቂያዎች | ☐ | |
| `monitoring.request_success_rate` | Request Success Rate | የጥያቄ ስኬት መጠን | ☐ | |
| `monitoring.model_usage` | Model Usage | የሞዴል አጠቃቀም | ☐ | |
| `monitoring.request_logs` | Request Logs | የጥያቄ ምዝግቦች | ☐ | |
| `monitoring.type` | Type | ዓይነት | ☐ | |
| `monitoring.status` | Status | ሁኔታ | ☐ | |
| `monitoring.latency` | Latency | መዘግየት | ☐ | |
| `monitoring.success` | Success | ስኬት | ☐ | |
| `monitoring.time` | Time | ሰዓት | ☐ | |
| `monitoring.online` | Online | መስመር ላይ | ☐ | |
| `monitoring.offline` | Offline | መስመር ውጪ | ☐ | |
| `monitoring.voice_metrics` | Voice Metrics | የድምጽ መለኪያዎች | ☐ | |
| `monitoring.voice_recordings` | Total Recordings | ጠቅላላ ቅጂዎች | ☐ | |
| `monitoring.voice_by_language` | By Language | በቋንቋ | ☐ | |
| `monitoring.voice_by_direction` | By Direction | በአቅጣጫ | ☐ | |
| `monitoring.voice_by_modality` | By Modality | በሁነታ | ☐ | |
| `monitoring.voice_providers` | Voice Providers | የድምጽ አገልግሎት ሰጪዎች | ☐ | |

### `diagrams.*` — 21 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `diagrams.title` | Science Diagrams | የሳይንስ ሥዕላዊ መግለጫዎች | ☐ | |
| `diagrams.generate` | Generate Diagram | ሥዕላዊ መግለጫ ፍጠር | ☐ | |
| `diagrams.generating` | Generating... | በማመንጨት ላይ... | ☐ | |
| `diagrams.no_diagrams` | Generate a diagram to get started | ለመጀመር ሥዕላዊ መግለጫ ይፍጠሩ | ☐ | |
| `diagrams.diagrams_subtitle` | Generate and explore science diagrams with labeled structures | መለያ ያላቸው የሳይንስ ሥዕላዊ መግለጫዎችን ይፍጠሩ እና ያስሱ | ☐ | |
| `diagrams.prompt` | Prompt | መግለጫ | ☐ | |
| `diagrams.generate_button` | Generate | ፍጠር | ☐ | |
| `diagrams.label_diagram` | Label the Diagram | ሥዕላዊ መግለጫውን ሰይም | ☐ | |
| `diagrams.label_instruction` | Type the correct name for each numbered structure on the diagram. | በሥዕላዊ መግለጫው ላይ ለእ প্রতিটি ቁጥር ያለው መዋቅር ትክክለኛውን ስም ይተይቡ። | ☐ | |
| `diagrams.enter_label` | Enter label... | ስያሜ ያስገቡ... | ☐ | |
| `diagrams.validating` | Validating... | በማረጋገጥ ላይ... | ☐ | |
| `diagrams.submit_labels` | Submit Labels | ስያሜዎችን አስገባ | ☐ | |
| `diagrams.try_again` | Try Again | እንደገና ሞክር | ☐ | |
| `diagrams.score_label` | Score: {score}% | ውጤት፡ {score}% ⚠️ | ☐ | |
| `diagrams.correct_count` | ({correct}/{total} correct) | ({correct}/{total} ትክክል) ⚠️ | ☐ | |
| `diagrams.confirmed` | Confirmed | የተረጋገጠ | ☐ | |
| `diagrams.empty_label` | (empty) | (ባዶ) | ☐ | |
| `diagrams.no_diagrams_subtitle` | Choose a topic, set difficulty, and describe what you want to see | ርዕስ ይምረጡ፣ ችግረት ያዘጋጁ እና ማየት የሚፈልጉትን ይግለጹ | ☐ | |
| `diagrams.topic` | Topic | ርዕስ | ☐ | |
| `diagrams.difficulty` | Difficulty | ችግረት | ☐ | |
| `diagrams.grade_label` | Grade | ክፍል | ☐ | |

### `recovery.*` — 63 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `recovery.title` | Recovery Dashboard | የማገገሚያ ዳሽቦርድ | ☐ | |
| `recovery.weak_topics` | Weak Topics | ደካማ ርዕሶች | ☐ | |
| `recovery.active_plans` | Active Plans | ንቁ እቅዶች | ☐ | |
| `recovery.no_weak_topics` | No weak topics identified | ምንም ደካማ ርዕሶች አልተለዩም | ☐ | |
| `recovery.no_plans` | No active recovery plans | ምንም ንቁ የማገገሚያ እቅዶች የሉም | ☐ | |
| `recovery.subtitle` | Track weak topics, active recovery plans, and personalized recommendations | ደካማ ርዕሶችን፣ ንቁ የማገገሚያ እቅዶችን እና ግላዊ ምክሮችን ይከታተሉ | ☐ | |
| `recovery.student_id` | Student ID | የተማሪ መታወቂያ | ☐ | |
| `recovery.student_id_placeholder` | Enter student UUID... | የተማሪ UUID ያስገቡ... | ☐ | |
| `recovery.look_up` | Look up | ፈልግ | ☐ | |
| `recovery.quick_select` | Quick select: | ፈጣን ምርጫ፡ | ☐ | |
| `recovery.critical_topics` | Critical Topics | ወሳኝ ርዕሶች | ☐ | |
| `recovery.recommendations` | Recommendations | ምክሮች | ☐ | |
| `recovery.notifications` | Notifications | ማሳወቂያዎች | ☐ | |
| `recovery.mastery_overview` | Mastery Overview | የእውቀት ደረጃ አጠቃላይ እይታ | ☐ | |
| `recovery.progress_heatmap` | Progress Heatmap | የእድገት ሙቀት ካርታ | ☐ | |
| `recovery.recent_notifications` | Recent Notifications | የቅርብ ጊዜ ማሳወቂያዎች | ☐ | |
| `recovery.mark_all_read` | Mark all as read | ሁሉንም እንደተነበበ ምልክት አድርግ | ☐ | |
| `recovery.avg_score` | Avg Score | አማካይ ውጤት | ☐ | |
| `recovery.attempts` | Attempts | ሙከራዎች | ☐ | |
| `recovery.confidence` | Confidence | መተማመን | ☐ | |
| `recovery.misconceptions` | Misconceptions: | ስህተተኛ ግንዛቤዎች፡ | ☐ | |
| `recovery.no_weak_topics_subtitle` | Student is performing well across all topics | ተማሪው በሁሉም ርዕሶች በጥሩ ሁኔታ እያቀጠለ ነው | ☐ | |
| `recovery.enter_id_hint` | Enter a student UUID to get started | ለመጀመር የተማሪ UUID ያስገቡ | ☐ | |
| `recovery.enter_id_subtitle` | Type a UUID or select a student from the quick list above | UUID ይተይቡ ወይም ከላይ ካለው ፈጣን ዝርዝር ተማሪ ይምረጡ | ☐ | |
| `recovery.progress_over_time` | Progress over time | የጊዜ ሂደት እድገት | ☐ | |
| `recovery.tasks` | tasks completed | ተግባራት ተጠናቀዋል | ☐ | |
| `recovery.overdue` | overdue | ቀጠሮ ያለፈ | ☐ | |
| `recovery.due_today` | Due today | ዛሬ የሚያበቃ | ☐ | |
| `recovery.due_reviews` | Due for Review | ግምገማ የሚያስፈልጋቸው | ☐ | |
| `recovery.due` | due | የቀሩ | ☐ | |
| `recovery.d_interval` | d interval | ቀን ክፍተት | ☐ | |
| `recovery.topic` | topic | ርዕስ | ☐ | |
| `recovery.topics` | topics | ርዕሶች | ☐ | |
| `recovery.no_plans_instruction` | Generate a recovery plan using the auto-generate endpoint to start tracking progress | እድገትን መከታተል ለመጀመር በራስ-ሰር ማመንጫ ነጥቡን (auto-generate endpoint) በመጠቀም የማገገሚያ እቅድ ይፍጠሩ | ☐ | |
| `recovery.error_generic` | Error | ስህተት | ☐ | |
| `recovery.generating` | Loading... | በመጫን ላይ... | ☐ | |
| `recovery.details_prior_knowledge` | Prior Knowledge | ቅድመ እውቀት | ☐ | |
| `recovery.details_explanation` | Explanation | ማብራሪያ | ☐ | |
| `recovery.details_activities` | Activities | እንቅስቃሴዎች | ☐ | |
| `recovery.details_periods` | Lesson Periods | የትምህርት ክፍለ ጊዜዎች | ☐ | |
| `recovery.details_assessment` | Assessment | ግምገማ | ☐ | |
| `recovery.details_homework` | Homework | የቤት ሥራ | ☐ | |
| `recovery.details_teacher_notes` | Teacher Notes | የመምህር ማስታወሻዎች | ☐ | |
| `recovery.details_objective` | Objective | ዓላማ | ☐ | |
| `recovery.details_grade` | Grade | ክፍል | ☐ | |
| `recovery.details_topic` | Topic | ርዕስ | ☐ | |
| `recovery.details_questions` | Questions | ጥያቄዎች | ☐ | |
| `recovery.details_status` | Status | ሁኔታ | ☐ | |
| `recovery.details_created` | Created | የተፈጠረ | ☐ | |
| `recovery.details_updating` | Updating... | በማዘመን ላይ... | ☐ | |
| `recovery.no_topic_data` | No topic data available | ምንም የርዕስ መረጃ የለም | ☐ | |
| `recovery.progress_heatmap_desc` | Complete activities to see your progress heatmap | የእድገት ሙቀት ካርታዎን ለማየት እንቅስቃሴዎችን ያጠናቅቁ | ☐ | |
| `recovery.heatmap_less` | Less | አነስተኛ | ☐ | |
| `recovery.heatmap_more` | More | ብዙ | ☐ | |
| `recovery.last_28_days` | Last 28 days | የመጨረሻ 28 ቀናት | ☐ | |
| `recovery.not_enough_data` | Not enough data yet | ገና በቂ መረጃ የለም | ☐ | |
| `recovery.mastery_label` | Mastery | የእውቀት ደረጃ | ☐ | |
| `recovery.attempts_label` | Attempts | ሙከራዎች | ☐ | |
| `recovery.confidence_label` | Confidence | እምነት | ☐ | |
| `recovery.severity` | Severity | ከባድነት | ☐ | |
| `recovery.grade_with_num` | Grade {grade} | ክፍል {grade} ⚠️ | ☐ | |
| `recovery.misconceptions_label` | Misconceptions: | የተሳሳቱ አመለካከቶች፡ | ☐ | |
| `recovery.frequency` | ({count}x) | ({count}x) ⚠️ | ☐ | |

### `workspace.*` — 117 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `workspace.crumb_workspace` | Workspace | የስራ ቦታ | ☐ | |
| `workspace.crumb_dashboard` | Dashboard | ዳሽቦርድ | ☐ | |
| `workspace.dashboard_title` | Workspace Dashboard | የስራ ቦታ ዳሽቦርድ | ☐ | |
| `workspace.dashboard_subtitle` | Manage files, custom curriculum documents, collections, and search indexes in this workspace. | ፋይሎችን፣ ብጁ የሥርዓተ ትምህርት ሰነዶችን፣ ስብስቦችን እና የፍለጋ መረጃ ጠቋሚዎችን በዚህ የስራ ቦታ ያስተዳድሩ። | ☐ | |
| `workspace.error_load` | Failed to load workspace details | የስራ ቦታ ዝርዝሮችን መጫን አልተሳካም | ☐ | |
| `workspace.stat_total` | Total Assets | ጠቅላላ ንብረቶች | ☐ | |
| `workspace.stat_published` | Active & Published | ንቁ እና የታተመ | ☐ | |
| `workspace.stat_processing` | Processing | በሂደት ላይ | ☐ | |
| `workspace.stat_collections` | Collections | ስብስቦች | ☐ | |
| `workspace.card_upload_title` | Upload Files | ፋይሎችን ስቀል | ☐ | |
| `workspace.card_upload_desc` | Ingest new textbooks, quizzes, lesson plans or school schedules into this workspace's knowledge pool. | አዳዲስ መጽሐፍቶችን፣ ፈተናዎችን፣ የትምህርት እቅዶችን ወይም የትምህርት ቤት መርሐግብሮችን ወደዚህ የስራ ቦታ እውቀት ገንቢ ያስገቡ። | ☐ | |
| `workspace.card_browse_title` | Browse Assets | ንብረቶችን አስስ | ☐ | |
| `workspace.card_browse_desc` | Explore structural chapters, chunks, collection categories, and version histories of your workspace. | የሚዋቀሩ ምዕራፎችን፣ ቁራጭዎችን፣ የስብስብ ምድቦችን እና የስሪት ታሪኮችን ያስሱ። | ☐ | |
| `workspace.card_search_title` | Search Gateway | የፍለጋ ጌትዌይ | ☐ | |
| `workspace.card_search_desc` | Perform deep semantic queries scoped to this workspace and review dynamic footnote citations. | በዚህ የስራ ቦታ ውስጥ ጥልቅ ስሜታዊ ጥያቄዎችን ያካሂዱ እና ተለዋዋጭ የእግር ማስታወሻ ማጣቀሻዎችን ይገምግሙ። | ☐ | |
| `workspace.card_processing_title` | Processing Queue | የሂደት ተራ | ☐ | |
| `workspace.card_processing_desc` | Track active ingestion states (Parsing, Embedding, Indexing, and async educational Enrichment). | ንቁ የመጫን ሁኔታዎችን (መንበብ፣ ማጣመር፣ መረጃ ጠቋሚ እና አሲንክ ማበረታታት) ይከታተሉ። | ☐ | |
| `workspace.recent_assets` | Recent Workspace Assets | የቅርብ ጊዜ የስራ ቦታ ንብረቶች | ☐ | |
| `workspace.view_all` | View all | ሁሉንም ይመልከቱ | ☐ | |
| `workspace.col_title` | Title | ርዕስ | ☐ | |
| `workspace.col_state` | State | ሁኔታ | ☐ | |
| `workspace.col_uploaded` | Uploaded | የተሰቀለ | ☐ | |
| `workspace.no_assets` | No files uploaded to this workspace yet. | ገና ምንም ፋይሎች ወደዚህ የስራ ቦታ አልተሰቀሉም። | ☐ | |
| `workspace.collections` | Collections | ስብስቦች | ☐ | |
| `workspace.no_description` | No description | ምንም መግለጫ የለም | ☐ | |
| `workspace.no_collections` | No collections created yet. | ገና ምንም ስብስቦች አልተፈጠሩም። | ☐ | |
| `workspace.browse_error_load` | Failed to load assets and collections | ንብረቶችን እና ስብስቦችን መጫን አልተሳካም | ☐ | |
| `workspace.browse_error_create` | Failed to create collection | ስብስብ መፍጠር አልተሳካም | ☐ | |
| `workspace.browse_confirm_delete_asset` | Are you sure you want to soft delete this knowledge object? | ይህን የእውቀት ነገር በሊጥ መሰረዝ እርግጠኛ ነዎት? | ☐ | |
| `workspace.browse_error_delete_asset` | Failed to delete asset | ንብረት መሰረዝ አልተሳካም | ☐ | |
| `workspace.browse_confirm_delete_collection` | Are you sure you want to delete this collection? | ይህን ስብስብ መሰረዝ እርግጠኛ ነዎት? | ☐ | |
| `workspace.browse_error_delete_collection` | Failed to delete collection | ስብስብ መሰረዝ አልተሳካም | ☐ | |
| `workspace.crumb_browse` | Browse Assets | ንብረቶችን አስስ | ☐ | |
| `workspace.browse_title` | Browse Curriculum Assets | የሥርዓተ ትምህርት ንብረቶችን አስስ | ☐ | |
| `workspace.browse_subtitle` | Explore your document collections, download materials, and manage lifecycle versions. | የሰነድ ስብስቦችዎን ያስሱ፣ ቁሳቁሶችን ያውርዱ እና የህይወት ዑደት ስሪቶችን ያስተዳድሩ። | ☐ | |
| `workspace.create_collection` | Create Collection | ስብስብ ፍጠር | ☐ | |
| `workspace.all_assets` | All Assets | ሁሉም ንብረቶች | ☐ | |
| `workspace.browse_search_placeholder` | Search assets by title... | ንብረቶችን በርዕስ ይፈልጉ... | ☐ | |
| `workspace.download_title` | Download File | ፋይል አውርድ | ☐ | |
| `workspace.delete_asset_title` | Delete Asset | ንብረት ሰርዝ | ☐ | |
| `workspace.browse_empty_title` | No assets match your filters | ከማጣሪያዎችዎ ጋር የሚዛመዱ ንብረቶች የሉም | ☐ | |
| `workspace.browse_empty_hint` | Try refining your search query or upload new curriculum assets. | የፍለጋ ጥያቄዎን ያጣሩ ወይም አዳዲስ የሥርዓተ ትምህርት ንብረቶችን ይስቀሉ። | ☐ | |
| `workspace.modal_create_title` | Create New Collection | አዲስ ስብስብ ፍጠር | ☐ | |
| `workspace.field_collection_name` | Collection Name | የስብስብ ስም | ☐ | |
| `workspace.collection_name_placeholder` | e.g. Unit 3 Resources | ለምሳሌ የዩኒት 3 ግብዓቶች | ☐ | |
| `workspace.field_description` | Description | መግለጫ | ☐ | |
| `workspace.collection_desc_placeholder` | Summarize what files are grouped here... | እዚህ የተከማቹ ፋይሎችን በአጭሩ ይግለጹ... | ☐ | |
| `workspace.creating` | Creating... | በመፍጠር ላይ... | ☐ | |
| `workspace.crumb_upload` | Upload | ስቀል | ☐ | |
| `workspace.upload_error` | File upload failed | ፋይል መስቀል አልተሳካም | ☐ | |
| `workspace.upload_title` | Upload Assets | ንብረቶችን ስቀል | ☐ | |
| `workspace.upload_subtitle` | Ingest educational PDFs, textbooks, reference files, or markdown sheets into the knowledge gateway. | የትምህርት PDFዎችን፣ መጽሐፍቶችን፣ የማጣቀሻ ፋይሎችን ወይም ማርክዳውን ወረቀቶችን ወደ እውቀት ጌትዌይ ያስገቡ። | ☐ | |
| `workspace.upload_success` | File uploaded successfully! Redirecting to processing queue... | ፋይሉ በተሳክቷል ተሰቅሏል! ወደ ሂደት ተራ በመሄድ ላይ... | ☐ | |
| `workspace.file_selected_hint` | {size} MB · Click or drag to replace | {size} MB · ለመተካት ይጫኑ ወይም ይጎትቱ ⚠️ | ☐ | |
| `workspace.dropzone_title` | Click to upload or drag & drop | ለመስቀል ይጫኑ ወይም እዚህ ይጎትቱ | ☐ | |
| `workspace.dropzone_hint` | Supports PDF, TXT, or MD (max 50MB) | PDF፣ TXT ወይም MD ይደገፋል (እስከ 50MB) | ☐ | |
| `workspace.field_asset_title` | Asset Title | የንብረት ርዕስ | ☐ | |
| `workspace.asset_title_placeholder` | e.g. Grade 10 Cell Division Chapter | ለምሳሌ የ10ኛ ክፍል የሴል ክፍፈል ምዕራፍ | ☐ | |
| `workspace.ingesting` | Ingesting Asset... | ንብረት በማስገባት ላይ... | ☐ | |
| `workspace.submit_ingestion` | Submit for Ingestion | ለመጫን አስገባ | ☐ | |
| `workspace.crumb_search` | Search Gateway | የፍለጋ ጌትዌይ | ☐ | |
| `workspace.search_error` | Search execution failed | ፍለጋ አልተሳካም | ☐ | |
| `workspace.search_title` | Retrieval Search Gateway | የመልሶ-ማግኛ ፍለጋ ጌትዌይ | ☐ | |
| `workspace.search_subtitle` | Perform layer-scoped search queries against curriculum assets, textbooks, and notes in this workspace. | በዚህ የስራ ቦታ ውስጥ በሽመና የተመደቡ ጥያቄዎችን በሥርዓተ ትምህርት ንብረቶች፣ መጽሐፍቶች እና ማስታወሻዎች ላይ ያካሂዱ። | ☐ | |
| `workspace.search_placeholder` | Type a learning topic or concept (e.g. cellular respiration)... | የትምህርት ርዕስ ወይም ጽንሰ-ሀሳብ ይተይቡ (ለምሳሌ የሕዋስ ትንፋሽ)... | ☐ | |
| `workspace.results_count` | {count, plural, one {Found # matching source} other {Found # matching sources}} | {count, plural, one {# የሚዛመድ ምንጭ ተገኝቷል} other {# የሚዛመዱ ምንጮች ተገኝተዋል}} ⚠️ | ☐ | |
| `workspace.asset_id` | Asset ID: {id} | የንብረት መታወቂያ፡ {id} ⚠️ | ☐ | |
| `workspace.relevance` | Relevance: {pct}% | ተዛማጅነት፡ {pct}% ⚠️ | ☐ | |
| `workspace.chunk_label` | Chunk #{index} | ቁራጭ #{index} ⚠️ | ☐ | |
| `workspace.score_label` | Score: {score} | ነጥብ፡ {score} ⚠️ | ☐ | |
| `workspace.cited_as` | Cited as: | እንዲህ ጠቅስ፡ | ☐ | |
| `workspace.search_empty_title` | No results found | ምንም ውጤቶች አልተገኙም | ☐ | |
| `workspace.search_empty_hint` | Your search query didn't return any matching context within this workspace's indexed documents. | የፍለጋ ጥያቄዎ በዚህ የስራ ቦታ ማውጫ ውስጥ ካሉ ሰነዶች ምንም የሚዛመድ ይዘት አላስገኘም። | ☐ | |
| `workspace.crumb_processing` | Processing Queue | የሂደት ተራ | ☐ | |
| `workspace.processing_error` | Failed to fetch processing queue | የሂደት ተራን መጫን አልተሳካም | ☐ | |
| `workspace.processing_title` | Ingestion Queue | የመጫን ተራ | ☐ | |
| `workspace.processing_subtitle` | Watch structural parsing, vector embedding indexing, and educational enrichment updates. | የሚዋቀር መንበብን፣ የቬክተር ማጣመር መረጃ ጠቋሚን እና የትምህርት ማበረታታት ዝማኔዎችን ይከታተሉ። | ☐ | |
| `workspace.state_failed` | Failed | ያልተሳካ | ☐ | |
| `workspace.state_uploaded` | Uploaded / Queueing | ተሰቅሏል / በተራ ላይ | ☐ | |
| `workspace.state_processing` | Processing (Parsing & Vectoring) | በሂደት ላይ (መንበብ እና ቬክተር ማድረግ) | ☐ | |
| `workspace.state_pending_enrichment` | Published, Pending AI Enrichment | የታተመ፣ የAI ማበረታታት በመጠባበቅ ላይ | ☐ | |
| `workspace.state_active` | Active & Enriched | ንቁ እና የበረታ | ☐ | |
| `workspace.state_unknown` | Unknown | ያልታወቀ | ☐ | |
| `workspace.details_line` | ID: {id} · Type: {type} · Added: {date} | መታወቂያ፡ {id} · ዓይነት፡ {type} · የታከለ፡ {date} ⚠️ | ☐ | |
| `workspace.error_prefix` | Error: {message} | ስህተት፡ {message} ⚠️ | ☐ | |
| `workspace.processing_empty_title` | Queue is empty | ተራው ባዶ ነው | ☐ | |
| `workspace.processing_empty_hint` | No files are currently being processed. Head over to the Ingest page to upload reference documents. | ምንም ፋይሎች በሂደት ላይ የሉም። የማጣቀሻ ሰነዶችን ለመስቀል ወደ መጫኛ ገጽ ይሂዱ። | ☐ | |
| `workspace.crumb_error` | Error | ስህተት | ☐ | |
| `workspace.detail_error_load` | Failed to load knowledge object | የእውቀት ነገርን መጫን አልተሳካም | ☐ | |
| `workspace.detail_not_found` | Knowledge object not found | የእውቀት ነገር አልተገኘም | ☐ | |
| `workspace.bookmark_remove` | Remove bookmark | ዕልባት አስወግድ | ☐ | |
| `workspace.bookmark_add` | Bookmark | ዕልባት አድርግ | ☐ | |
| `workspace.download_action` | Download | አውርድ | ☐ | |
| `workspace.excerpt` | Excerpt | የይዘት ክፍል | ☐ | |
| `workspace.excerpt_source` | Source: {source} | ምንጭ፡ {source} ⚠️ | ☐ | |
| `workspace.key_terms` | Key Terms | ቁልፍ ቃላት | ☐ | |
| `workspace.not_enriched_title` | Not yet enriched | ገና አልበረታም | ☐ | |
| `workspace.not_enriched_hint` | AI enrichment is pending for this asset. | የAI ማበረታታት ለዚህ ንብረት በመጠባበቅ ላይ ነው። | ☐ | |
| `workspace.full_content` | Full Content | ሙሉ ይዘት | ☐ | |
| `workspace.loading_content` | Loading content... | ይዘት በመጫን ላይ... | ☐ | |
| `workspace.no_content` | No content available. | ምንም ይዘት የለም። | ☐ | |
| `workspace.content_error` | Failed to load content. | ይዘት መጫን አልተሳካም። | ☐ | |
| `workspace.details` | Details | ዝርዝሮች | ☐ | |
| `workspace.label_state` | State | ሁኔታ | ☐ | |
| `workspace.label_version` | Version | ስሪት | ☐ | |
| `workspace.label_enrichment` | Enrichment | ማበረታታት | ☐ | |
| `workspace.label_class` | Class | መደብ | ☐ | |
| `workspace.label_words` | Words | ቃላት | ☐ | |
| `workspace.label_chunks` | Chunks | ቁራጮች | ☐ | |
| `workspace.label_indexed_chunks` | Indexed Chunks | የተመዘገቡ ቁራጮች | ☐ | |
| `workspace.object_id` | Object ID | የነገር መታወቂያ | ☐ | |
| `workspace.active_workspace` | Active Workspace | ንቁ የስራ ቦታ | ☐ | |
| `workspace.no_active_workspace` | No active workspace | ምንም ንቁ የስራ ቦታ የለም | ☐ | |
| `workspace.no_workspaces` | No workspaces found | ምንም የስራ ቦታዎች አልተገኙም | ☐ | |
| `workspace.seed_create` | Seed / Create | ዘር / ፍጠር | ☐ | |
| `workspace.no_workspace_upload_hint` | You need an active workspace to upload files. Create one from your classroom first. | ፋይሎችን ለመስቀል ንቁ የስራ ቦታ ያስፈልግዎታል። መጀመሪያ ከክፍል ቤትዎ ይፍጠሩ። | ☐ | |
| `workspace.go_to_classroom` | Go to classroom | ወደ ክፍል ቤት ይሂዱ | ☐ | |

### `assignments.*` — 85 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `assignments.crumb` | Assignments | ስራዎች | ☐ | |
| `assignments.crumb_new` | New | አዲስ | ☐ | |
| `assignments.crumb_my` | My Assignments | የእኔ ስራዎች | ☐ | |
| `assignments.crumb_grade` | Grade | ደረጃ ስጥ | ☐ | |
| `assignments.error_load` | Failed to load assignments | ስራዎችን መጫን አልተሳካም | ☐ | |
| `assignments.error_load_detail` | Failed to load assignment | ስራውን መጫን አልተሳካም | ☐ | |
| `assignments.error_create` | Failed to create assignment | ስራ መፍጠር አልተሳካም | ☐ | |
| `assignments.error_no_workspace` | No workspace found | ምንም የስራ ቦታ አልተገኘም | ☐ | |
| `assignments.error_submit_grade` | Failed to submit grade | ደረጃ ማስገባት አልተሳካም | ☐ | |
| `assignments.error_submission` | Submission failed | ማስረከብ አልተሳካም | ☐ | |
| `assignments.not_found` | Assignment not found | ስራው አልተገኘም | ☐ | |
| `assignments.list_title` | Assignments | ስራዎች | ☐ | |
| `assignments.list_subtitle` | Create, publish, and review student submissions. | የተማሪ ስራዎችን ይፍጠሩ፣ ያትሙ እና ይገምግሙ። | ☐ | |
| `assignments.new_assignment` | New Assignment | አዲስ ስራ | ☐ | |
| `assignments.due_prefix` | Due: {date} | የሚያበቃ፡ {date} ⚠️ | ☐ | |
| `assignments.empty_title` | No assignments yet | ገና ምንም ስራዎች የሉም | ☐ | |
| `assignments.empty_hint` | Create your first assignment to get started. | ለመጀመር የመጀመሪያ ስራዎን ይፍጠሩ። | ☐ | |
| `assignments.late_badge` | Late | ዘግይቷል | ☐ | |
| `assignments.create_title` | Create Assignment | ስራ ፍጠር | ☐ | |
| `assignments.create_subtitle` | Set up a new assignment for your class. | ለክፍልዎ አዲስ ስራ ያዘጋጁ። | ☐ | |
| `assignments.created_success` | Assignment created! Redirecting... | ስራው ተፈጥሯል! በመሄድ ላይ... | ☐ | |
| `assignments.field_title` | Title * | ርዕስ * | ☐ | |
| `assignments.title_placeholder` | e.g. Cell Division Homework | ለምሳሌ የሴል ክፍፈል የቤት ሥራ | ☐ | |
| `assignments.field_description` | Description | መግለጫ | ☐ | |
| `assignments.desc_placeholder` | Brief overview... | አጭር መግለጫ... | ☐ | |
| `assignments.field_instructions` | Instructions | መመሪያዎች | ☐ | |
| `assignments.instructions_placeholder` | Detailed instructions for students... | ለተማሪዎች ዝርዝር መመሪያዎች... | ☐ | |
| `assignments.field_type` | Type | ዓይነት | ☐ | |
| `assignments.field_due_date` | Due Date | የማብቂያ ቀን | ☐ | |
| `assignments.field_max_attempts` | Max Attempts | ከፍተኛ ሙከራዎች | ☐ | |
| `assignments.allow_late` | Allow late submissions | ዘግይተው ማስረከብን ይፍቀዱ | ☐ | |
| `assignments.creating` | Creating... | በመፍጠር ላይ... | ☐ | |
| `assignments.create_submit` | Create Assignment | ስራ ፍጠር | ☐ | |
| `assignments.type_homework` | Homework | የቤት ሥራ | ☐ | |
| `assignments.type_quiz` | Quiz | ፈተና | ☐ | |
| `assignments.type_project` | Project | ፕሮጀክት | ☐ | |
| `assignments.type_lab` | Lab | ላቦራቶሪ | ☐ | |
| `assignments.type_essay` | Essay | ጽሑፍ | ☐ | |
| `assignments.type_worksheet` | Worksheet | የሥራ ወረቀት | ☐ | |
| `assignments.type_presentation` | Presentation | አቅራቢያ | ☐ | |
| `assignments.publish` | Publish | አትም | ☐ | |
| `assignments.submissions_heading` | Submissions ({count}) | ገቢ ስራዎች ({count}) ⚠️ | ☐ | |
| `assignments.no_submissions` | No submissions yet. | ገና ምንም ገቢ ስራዎች የሉም። | ☐ | |
| `assignments.student_label` | Student: {id} | ተማሪ፡ {id} ⚠️ | ☐ | |
| `assignments.attempt_label` | Attempt {n} | ሙከራ {n} ⚠️ | ☐ | |
| `assignments.grade_label` | Grade: {grade} | ደረጃ፡ {grade} ⚠️ | ☐ | |
| `assignments.details` | Details | ዝርዝሮች | ☐ | |
| `assignments.type_label` | Type: {type} | ዓይነት፡ {type} ⚠️ | ☐ | |
| `assignments.no_due_date` | No due date | የማብቂያ ቀን የለም | ☐ | |
| `assignments.max_attempts_label` | Max attempts: {count} | ከፍተኛ ሙከራዎች፡ {count} ⚠️ | ☐ | |
| `assignments.late_allowed` | Late allowed | ዘግይተው ማስረከብ ይፈቀዳል | ☐ | |
| `assignments.no_late` | No late submissions | ዘግይተው ማስረከብ አይፈቀድም | ☐ | |
| `assignments.grade_title` | Grade Submission | ስራ ደረጃ ስጥ | ☐ | |
| `assignments.grade_subtitle` | Review and provide feedback on student work. | የተማሪ ስራን ይገምግሙ እና አስተያየት ይስጡ። | ☐ | |
| `assignments.grade_saved` | Grade saved! Redirecting... | ደረጃ ተቀምጧል! በመሄድ ላይ... | ☐ | |
| `assignments.student_submission` | Student Submission | የተማሪ ስራ | ☐ | |
| `assignments.attempt_submitted` | Attempt #{n} · Submitted {date} | ሙከራ #{n} · ገብቷል {date} ⚠️ | ☐ | |
| `assignments.field_grade` | Grade (0-100) | ደረጃ (0-100) | ☐ | |
| `assignments.field_feedback` | Feedback | አስተያየት | ☐ | |
| `assignments.feedback_placeholder` | Write feedback for the student... | ለተማሪው አስተያየት ይጻፉ... | ☐ | |
| `assignments.saving` | Saving... | በማስቀመጥ ላይ... | ☐ | |
| `assignments.submit_grade` | Submit Grade | ደረጃ አስገባ | ☐ | |
| `assignments.my_title` | My Assignments | የእኔ ስራዎች | ☐ | |
| `assignments.my_subtitle` | View and submit your pending assignments. | ያልጠናቀቁ ስራዎችዎን ይመልከቱ እና ያስረክቡ። | ☐ | |
| `assignments.caught_up_title` | All caught up! | ሁሉም ተጠናቋል! | ☐ | |
| `assignments.caught_up_hint` | No pending assignments right now. | በአሁኑ ጊዜ ምንም የሚጠበቁ ስራዎች የሉም። | ☐ | |
| `assignments.submissions_label` | Submissions: {used} / {max} | ገቢ ስራዎች፡ {used} / {max} ⚠️ | ☐ | |
| `assignments.my_submissions` | My Submissions | የእኔ ስራዎች | ☐ | |
| `assignments.feedback_prefix` | Feedback: {comment} | አስተያየት፡ {comment} ⚠️ | ☐ | |
| `assignments.submit_work` | Submit Your Work | ስራዎን ያስረክቡ | ☐ | |
| `assignments.your_answer` | Your Answer | የእርስዎ መልስ | ☐ | |
| `assignments.answer_placeholder` | Type your answer here... | መልስዎን እዚህ ይጻፉ... | ☐ | |
| `assignments.submitted_success` | Submitted! | ገብቷል! | ☐ | |
| `assignments.submitting` | Submitting... | በማስረከብ ላይ... | ☐ | |
| `assignments.submit_action` | Submit | አስረክብ | ☐ | |
| `assignments.max_attempts_title` | Max attempts reached | ከፍተኛው ሙከራ ተጠናቋል | ☐ | |
| `assignments.max_attempts_hint` | You've used all {count} allowed attempts. | የተፈቀዱትን {count} ሙከራዎች በሙሉ ተጠቅመዋል። ⚠️ | ☐ | |
| `assignments.status_draft` | Draft | ረቂቅ | ☐ | |
| `assignments.status_published` | Published | የታተመ | ☐ | |
| `assignments.status_completed` | Completed | ተጠናቋል | ☐ | |
| `assignments.status_archived` | Archived | የተከማጨ | ☐ | |
| `assignments.status_submitted` | Submitted | ገብቷል | ☐ | |
| `assignments.status_under_review` | Under Review | በግምገማ ላይ | ☐ | |
| `assignments.status_reviewed` | Reviewed | ተገምግሟል | ☐ | |
| `assignments.status_revision_requested` | Revision Requested | ማሻሻል ተጠይቋል | ☐ | |

### `analytics.*` — 20 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `analytics.crumb_interventions` | Interventions | ጣልቃ ገብነቶች | ☐ | |
| `analytics.crumb_analytics` | Effectiveness Analytics | የውጤታዊነት ትንተና | ☐ | |
| `analytics.error_load` | Failed to load intervention analytics | የጣልቃ ገብነት ትንተና መጫን አልተሳካም | ☐ | |
| `analytics.title` | Intervention Effectiveness | የጣልቃ ገብነት ውጤታዊነት | ☐ | |
| `analytics.subtitle` | Measure, compare, and optimize Socratic reviews, recovery tasks, and adaptive practice outcomes. | የሶቅራቲክ ግምገማዎችን፣ የማገገሚያ ተግባራትን እና ማላማጭ ልምምዶችን ይለኩ፣ ያወዳድሩ እና ያመቻቹ። | ☐ | |
| `analytics.stat_global` | Global Avg Effectiveness | አጠቃላይ አማካይ ውጤታዊነት | ☐ | |
| `analytics.stat_top` | Top Performing Inoculation | ከፍተኛ አፈጻጸም ያለው ኢኖኩሌሽን | ☐ | |
| `analytics.stat_top_none` | None Logged | ምንም አልተመዘገበም | ☐ | |
| `analytics.stat_boost` | Recommendation Boost | የምክር ጭማሪ | ☐ | |
| `analytics.trends_title` | Ingestion Trends & Gains | የመጫን አዝማሚያዎች እና ጭማሪዎች | ☐ | |
| `analytics.trends_empty` | No historical trend data found. Apply and complete interventions to generate logs. | ምንም የታሪክ አዝማሚያ መረጃ አልተገኘም። ምዝግቦችን ለመፍጠር ጣልቃ ገብነቶችን ይተገብሩ እና ያጠናቅቁ። | ☐ | |
| `analytics.chart_avg` | Avg Effectiveness | አማካይ ውጤታዊነት | ☐ | |
| `analytics.comparison_title` | Strategy Comparison | የስትራቴጂ ንጽጽር | ☐ | |
| `analytics.comparison_empty` | No comparative strategy logs available. | ምንም የንጽጽር ስትራቴጂ ምዝግቦች የሉም። | ☐ | |
| `analytics.leaderboard_title` | Completed Intervention Leaderboard | የተጠናቀቁ ጣልቃ ገብነቶች ሰሌዳ | ☐ | |
| `analytics.col_type` | Type | ዓይነት | ☐ | |
| `analytics.col_topic` | Topic | ርዕስ | ☐ | |
| `analytics.col_date` | Date Completed | የተጠናቀቀበት ቀን | ☐ | |
| `analytics.col_score` | Effectiveness Score | የውጤታዊነት ነጥብ | ☐ | |
| `analytics.leaderboard_empty` | No completed interventions mapped to date. | እስካሁን ምንም የተጠናቀቁ ጣልቃ ገብነቶች አልተመዘገቡም። | ☐ | |

### `studio.*` — 37 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `studio.crumb_studio` | Assessment Studio | የግምገማ ስቱዲዮ | ☐ | |
| `studio.crumb_builder` | Builder | ገንቢ | ☐ | |
| `studio.error_failed` | Generation failed | ማመንጨት አልተሳካም | ☐ | |
| `studio.error_timeout` | Generation timed out | ማመንጨት ጊዜ አልፏል | ☐ | |
| `studio.error_generate` | Failed to generate assessment | ግምገማ ማመንጨት አልተሳካም | ☐ | |
| `studio.success_generated` | Successfully generated new {type} assessment! | አዲስ የ{type} ግምገማ በተሳክቷል ተፈጥሯል! ⚠️ | ☐ | |
| `studio.title` | Assessment Studio | የግምገማ ስቱዲዮ | ☐ | |
| `studio.subtitle` | Construct high-fidelity quizzes, diagnostic items, and adaptive science assessments. | ከፍተኛ-ታማኝነት ያላቸው ፈተናዎችን፣ የምርመራ እቃዎችን እና ማላማጭ የሳይንስ ግምገማዎችን ይገንቡ። | ☐ | |
| `studio.builder_title` | Assessment Builder | የግምገማ ገንቢ | ☐ | |
| `studio.field_grade` | Grade Level | የክፍል ደረጃ | ☐ | |
| `studio.grade_option` | Grade {g} | ክፍል {g} ⚠️ | ☐ | |
| `studio.field_diagnostic` | Diagnostic Type | የምርመራ ዓይነት | ☐ | |
| `studio.type_mastery` | Mastery Quiz | የችሎታ ፈተና | ☐ | |
| `studio.type_diagnostic` | Diagnostic Assessment | የምርመራ ግምገማ | ☐ | |
| `studio.type_readiness` | Exam Readiness | የፈተና ዝግጁነት | ☐ | |
| `studio.type_misconception` | Misconception Probe | የስህተተኛ ግንዛቤ ምርመራ | ☐ | |
| `studio.type_intervention` | Intervention Validation | የጣልቃ ገብነት ማረጋገጫ | ☐ | |
| `studio.field_topic` | Science Topic | የሳይንስ ርዕስ | ☐ | |
| `studio.topic_placeholder` | e.g. Aerobic Respiration, Mitosis vs Meiosis, Protein Synthesis | ለምሳሌ የኤሮቢክ ትንፋሽ፣ ማይቶሲስ እና ሜዮሲስ፣ የፕሮቲን ስንቴዝስ | ☐ | |
| `studio.field_count` | Question Count ({count}) | የጥያቄዎች ብዛት ({count}) ⚠️ | ☐ | |
| `studio.adaptive_label` | Adapt to Student Profile | ከተማሪ መገለጫ ጋር ያላምድ | ☐ | |
| `studio.field_types` | Question Types | የጥያቄ ዓይነቶች | ☐ | |
| `studio.qtype_multiple_choice` | Multiple Choice | ባለ ብዙ ምርጫ | ☐ | |
| `studio.qtype_true_false` | True / False | እውነት / ሐሰት | ☐ | |
| `studio.qtype_short_answer` | Short Answer | አጭር መልስ | ☐ | |
| `studio.qtype_diagram_label` | Diagram Labeling | የስዕል መሰየም | ☐ | |
| `studio.field_model` | LLM Generator Model | የLLM አመንጭ ሞዴል | ☐ | |
| `studio.generating` | Generating Assessment... | ግምገማ በማመንጨት ላይ... | ☐ | |
| `studio.create_submit` | Create Assessment | ግምገማ ፍጠር | ☐ | |
| `studio.library_title` | Generated Library | የተፈጠረ ቤተ-መጽሐፍት | ☐ | |
| `studio.library_empty` | No published assessments in this library. | በዚህ ቤተ-መጽሐፍት ውስጥ ምንም የታተሙ ግምገማዎች የሉም። | ☐ | |
| `studio.library_meta` | Grade {grade} · {count} items | ክፍል {grade} · {count} እቃዎች ⚠️ | ☐ | |
| `studio.preview_title` | Assessment Preview & Key | የግምገማ ቅድመ-ዕይታ እና ቁልፍ | ☐ | |
| `studio.item_label` | Item #{n} ({type}) | እቃ #{n} ({type}) ⚠️ | ☐ | |
| `studio.difficulty_label` | Difficulty: {level} | ከባድነት፡ {level} ⚠️ | ☐ | |
| `studio.correct_answer` | CORRECT ANSWER | ትክክለኛ መልስ | ☐ | |
| `studio.explanation` | EXPLANATION | ማብራሪያ | ☐ | |

### `graph.*` — 33 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `graph.crumb_graph` | Knowledge Graph | የእውቀት ግራፍ | ☐ | |
| `graph.crumb_map` | Interactive Map | በይነተገናኝ ካርታ | ☐ | |
| `graph.error_load` | Failed to load curriculum topics | የሥርዓተ ትምህርት ርዕሶችን መጫን አልተሳካም | ☐ | |
| `graph.error_chains` | Could not retrieve dependency paths | የጥገኛነት መንገዶችን ማግኘት አልተቻለም | ☐ | |
| `graph.error_self_prereq` | A topic cannot be a prerequisite of itself | አንድ ርዕስ የራሱ ቅድመ-ምህላት ሊሆን አይችልም | ☐ | |
| `graph.success_added` | Prerequisite relationship added successfully! | የቅድመ-ምህላት ግንኙነት በተሳክቷል ተጨምሯል! | ☐ | |
| `graph.error_establish` | Failed to establish relationship | ግንኙነት መመስረት አልተሳካም | ☐ | |
| `graph.confirm_remove` | Are you sure you want to remove this prerequisite relationship? | ይህን የቅድመ-ምህላት ግንኙነት ማስወገድ እርግጠኛ ነዎት? | ☐ | |
| `graph.error_edge_not_found` | Relationship edge not found | የግንኙነት ግስ አልተገኘም | ☐ | |
| `graph.success_removed` | Prerequisite relationship removed! | የቅድመ-ምህላት ግንኙነት ተወግዷል! | ☐ | |
| `graph.error_remove` | Failed to remove relationship | ግንኙነት ማስወገድ አልተሳካም | ☐ | |
| `graph.title` | Curriculum Knowledge Graph | የሥርዓተ ትምህርት እውቀት ግራፍ | ☐ | |
| `graph.subtitle` | Visualize semantic prerequisite paths and identify learner mastery gaps. | ስሜታዊ የቅድመ-ምህላት መንገዶችን ይመልከቱ እና የተማሪ ችሎታ ክፍተቶችን ይለዩ። | ☐ | |
| `graph.field_active_topic` | Active Curriculum Topic | ንቁ የሥርዓተ ትምህርት ርዕስ | ☐ | |
| `graph.topic_option` | Grade {grade} - Unit {unit}: {topic} | ክፍል {grade} - ዩኒት {unit}: {topic} ⚠️ | ☐ | |
| `graph.field_gap_profiler` | Student Gap Profiler | የተማሪ ክፍተት መገለጫ | ☐ | |
| `graph.no_student` | -- No Student Selected (Reference Mode) -- | -- ምንም ተማሪ አልተመረጠም (የማጣቀሻ ሁነታ) -- | ☐ | |
| `graph.student_id_label` | Student ID: {id} | የተማሪ መታወቂያ፡ {id} ⚠️ | ☐ | |
| `graph.connect_title` | Connect Prerequisite | ቅድመ-ምህላት አገናኝ | ☐ | |
| `graph.field_prereq_topic` | Select Prerequisite Topic | የቅድመ-ምህላት ርዕስ ይምረጡ | ☐ | |
| `graph.select_topic` | -- Select Topic -- | -- ርዕስ ይምረጡ -- | ☐ | |
| `graph.establish` | Establish Relationship | ግንኙነት መስርት | ☐ | |
| `graph.map_title` | Interactive Relationship Map | በይነተገናኝ የግንኙነት ካርታ | ☐ | |
| `graph.prereq_label` | Prerequisite | ቅድመ-ምህላት | ☐ | |
| `graph.gap_badge` | Gap ({score}) | ክፍተት ({score}) ⚠️ | ☐ | |
| `graph.mastered_badge` | Mastered | ተቆጣጥሯል | ☐ | |
| `graph.grade_label` | Grade {grade} | ክፍል {grade} ⚠️ | ☐ | |
| `graph.delete_prereq_title` | Delete Prerequisite | ቅድመ-ምህላት ሰርዝ | ☐ | |
| `graph.no_prereqs` | No prerequisite topics linked. | ምንም የቅድመ-ምህላት ርዕሶች አልተገናኙም። | ☐ | |
| `graph.active_focus` | Active Focus | ንቁ ትኩረት | ☐ | |
| `graph.active_meta` | Grade {grade} · Unit {unit} | ክፍል {grade} · ዩኒት {unit} ⚠️ | ☐ | |
| `graph.dependent_label` | Dependent | ጥገኛ | ☐ | |
| `graph.no_dependents` | No downstream dependents. | ምንም የታችኛው ጥገኞች የሉም። | ☐ | |

### `twin.*` — 39 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `twin.crumb_twin` | Digital Twin | ዲጂታል ትዊን | ☐ | |
| `twin.title` | Digital Twin | ዲጂታል ትዊን | ☐ | |
| `twin.subtitle` | Your virtual learner model — knowledge, mastery, misconceptions, retention, readiness, and interventions | የእርስዎ ምናባዊ የተማሪ ሞዴል — እውቀት፣ ችሎታ፣ ስህተተኛ ግንዛቤዎች፣ ማቆየት፣ ዝግጁነት እና ጣልቃ ገብነቶች | ☐ | |
| `twin.rebuilding` | Rebuilding... | እንደገና በመገንባት ላይ... | ☐ | |
| `twin.rebuild` | Rebuild | እንደገና ግንባ | ☐ | |
| `twin.empty_title` | No digital twin data yet | ገና የዲጂታል ትዊን መረጃ የለም | ☐ | |
| `twin.empty_hint` | Complete assessments and activities to build your twin | ትዊንዎን ለመገንባት ግምገማዎችን እና እንቅስቃሴዎችን ያጠናቅቁ | ☐ | |
| `twin.last_updated` | Last updated: {date} | መጨረሻ የተዘመነ፡ {date} ⚠️ | ☐ | |
| `twin.never` | Never | በፍጹም | ☐ | |
| `twin.score_label` | score | ነጥብ | ☐ | |
| `twin.active_count` | {count} active | {count} ንቁ ⚠️ | ☐ | |
| `twin.resolved_count` | · {count} resolved | · {count} የፈቱ ⚠️ | ☐ | |
| `twin.completed_count` | · {count} completed | · {count} የተጠናቀቁ ⚠️ | ☐ | |
| `twin.risk_title` | Risk Indicators | የአደጋ አመልካቾች | ☐ | |
| `twin.forecast_title` | Forecast ({count} topics · {date}) | ትንበያ ({count} ርዕሶች · {date}) ⚠️ | ☐ | |
| `twin.mastery_trend` | Mastery Trend | የችሎታ አዝማሚያ | ☐ | |
| `twin.readiness_label` | Readiness | ዝግጁነት | ☐ | |
| `twin.overall_label` | Overall | አጠቃላይ | ☐ | |
| `twin.projected_risks` | Projected Risks | የተተነበዩ አደጋዎች | ☐ | |
| `twin.retention_label` | Retention | ማቆየት | ☐ | |
| `twin.sim_title` | What If? — Simulate Interventions | ምን ይሆን? — ጣልቃ ገብነቶችን አስመስል | ☐ | |
| `twin.sim_hint` | Test how interventions would change projected outcomes | ጣልቃ ገብነቶች የተተነበዩ ውጤቶችን እንዴት እንደሚለውጡ ይሞክሩ | ☐ | |
| `twin.sim_boost` | Boost Mastery | ችሎታ ጨምር | ☐ | |
| `twin.sim_add_reviews` | Add Reviews | ግምገማዎች ጨምር | ☐ | |
| `twin.sim_resolve` | Resolve Misconception | ስህተተኛ ግንዛቤ ፍታ | ☐ | |
| `twin.add_action` | Add Action | ድርጊት ጨምር | ☐ | |
| `twin.run_action` | Run | ያሂዱ | ☐ | |
| `twin.clear_action` | Clear | አጽዳ | ☐ | |
| `twin.baseline_vs` | Baseline vs Simulated | መነሻ እና የተለመደ | ☐ | |
| `twin.risks_resolved` | All projected risks resolved | ሁሉም የተተነበዩ አደጋዎች ተፈትተዋል | ☐ | |
| `twin.dim_knowledge` | Knowledge | እውቀት | ☐ | |
| `twin.dim_mastery` | Mastery | ችሎታ | ☐ | |
| `twin.dim_misconceptions` | Misconceptions | ስህተተኛ ግንዛቤዎች | ☐ | |
| `twin.dim_retention` | Retention | ማቆየት | ☐ | |
| `twin.dim_readiness` | Readiness | ዝግጁነት | ☐ | |
| `twin.dim_interventions` | Interventions | ጣልቃ ገብነቶች | ☐ | |
| `twin.health_healthy` | Healthy | ጤናማ | ☐ | |
| `twin.health_needs_attention` | Needs attention | ትኩረት ያስፈልገዋል | ☐ | |
| `twin.health_at_risk` | At risk | በአደጋ ላይ | ☐ | |

### `agents.*` — 33 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `agents.card_status_idle` | Idle | ቅመት ላይ | ☐ | |
| `agents.card_status_busy` | Busy | ሥራ ላይ | ☐ | |
| `agents.card_status_error` | Error | ስህተት | ☐ | |
| `agents.capability_tutoring` | Tutoring | አስተማሪ | ☐ | |
| `agents.capability_quiz_generation` | Quiz Generation | ፈተና ማመንጨት | ☐ | |
| `agents.capability_assessment_creation` | Assessment Creation | ግምገማ መፍጠር | ☐ | |
| `agents.capability_lesson_planning` | Lesson Planning | የትምህርት እቅድ | ☐ | |
| `agents.capability_diagnostic_assessment` | Diagnostic Assessment | የምርመራ ግምገማ | ☐ | |
| `agents.capability_translation` | Translation | ትርጉም | ☐ | |
| `agents.capability_safety_review` | Safety Review | የደህንነት ግምገማ | ☐ | |
| `agents.capability_diagram_generation` | Diagram Generation | ስዕል ማመንጨት | ☐ | |
| `agents.capability_student_progress` | Student Progress | የተማሪ እድገት | ☐ | |
| `agents.execute_title` | Execute Task | ተግባር አፈጽም | ☐ | |
| `agents.field_agent` | Agent | ወኪል | ☐ | |
| `agents.select_agent` | Select an agent... | ወኪል ይምረጡ... | ☐ | |
| `agents.field_task` | Task | ተግባር | ☐ | |
| `agents.task_placeholder` | Describe the task for the agent... | ተግባሩን ለወኪሉ ይግለጹ... | ☐ | |
| `agents.executing` | Executing... | በማፈጸም ላይ... | ☐ | |
| `agents.execute` | Execute | አፈጽም | ☐ | |
| `agents.result_failed` | Failed | ያልተሳካ | ☐ | |
| `agents.result_success` | Success | ተሳክቷል | ☐ | |
| `agents.reflections_error` | Failed to load reflections | ምዝግቦችን መጫን አልተሳካም | ☐ | |
| `agents.recent_executions` | Recent Executions | የቅርብ ጊዜ አፈጻጸሞች | ☐ | |
| `agents.no_executions` | No executions yet. Run a task above to see results here. | ገና ምንም አፈጻጸሞች የሉም። ውጤቶችን እዚህ ለማየት ከላይ ተግባር ያሂዱ። | ☐ | |
| `agents.col_agent` | Agent | ወኪል | ☐ | |
| `agents.col_task` | Task | ተግባር | ☐ | |
| `agents.col_verdict` | Verdict | ውሳኔ | ☐ | |
| `agents.col_confidence` | Confidence | መተማመን | ☐ | |
| `agents.col_duration` | Duration | ቆይታ | ☐ | |
| `agents.col_time` | Time | ሰዓት | ☐ | |
| `agents.verdict_success` | success | ስኬት | ☐ | |
| `agents.verdict_failure` | failure | ውድቀት | ☐ | |
| `agents.verdict_partial` | partial | በከፊል | ☐ | |

### `governance.*` — 20 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `governance.loading` | Loading review queue... | የግምገማ ተራን በመጫን ላይ... | ☐ | |
| `governance.empty` | No items pending review | ምንም ግምገማ የሚጠብቁ እቃዎች የሉም | ☐ | |
| `governance.grade_label` | Grade {grade} | ክፍል {grade} ⚠️ | ☐ | |
| `governance.reviewed` | Reviewed | ተገምግሟል | ☐ | |
| `governance.pending` | Pending | በመጠባበቅ ላይ | ☐ | |
| `governance.user_message` | User Message | የተጠቃሚ መልእክት | ☐ | |
| `governance.response` | Response | ምላሽ | ☐ | |
| `governance.no_response` | (no response) | (ምንም ምላሽ የለም) | ☐ | |
| `governance.safety_issues` | Safety Issues | የደህንነት ችግሮች | ☐ | |
| `governance.none` | None | ምንም | ☐ | |
| `governance.safety_action` | Safety Action | የደህንነት እርምጃ | ☐ | |
| `governance.groundedness` | Groundedness | መሠረታዊነት | ☐ | |
| `governance.hallucination_rate` | Hallucination Rate | የሃሉሲኔሽን መጠን | ☐ | |
| `governance.review_notes` | Review Notes | የግምገማ ማስታወሻዎች | ☐ | |
| `governance.resolve` | Resolve | ፍታ | ☐ | |
| `governance.modal_title` | Resolve Review Item | የግምገማ እቃ ፍታ | ☐ | |
| `governance.trace_label` | Trace: {id} | ትሬስ፡ {id} ⚠️ | ☐ | |
| `governance.notes_label` | Review Notes (optional) | የግምገማ ማስታወሻዎች (አማራጭ) | ☐ | |
| `governance.notes_placeholder` | Add notes about your review... | ስለ ግምገማዎ ማስታወሻዎች ይጨምሩ... | ☐ | |
| `governance.confirm_resolve` | Confirm & Resolve | አረጋግጥ እና ፍታ | ☐ | |

### `misconceptions.*` — 17 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `misconceptions.error_fetch` | Failed to fetch misconception profile | የስህተተኛ ግንዛቤ መገለጫን መጫን አልተሳካም | ☐ | |
| `misconceptions.error_resolve` | Failed to resolve misconception | ስህተተኛ ግንዛቤን መፍታት አልተሳካም | ☐ | |
| `misconceptions.error_resolve_topic` | Failed to resolve topic misconceptions | የርዕስ ስህተተኛ ግንዛቤዎችን መፍታት አልተሳካም | ☐ | |
| `misconceptions.empty_title` | No misconceptions detected | ምንም ስህተተኛ ግንዛቤዎች አልተገኙም | ☐ | |
| `misconceptions.empty_hint` | The student has demonstrated clear understanding across all assessed science topics so far. | ተማሪው እስካሁን በሁሉም የተገመገሙ የሳይንስ ርዕሶች ግልጽ ግንዛቤ አሳይቷል። | ☐ | |
| `misconceptions.stat_total` | Total Patterns | ጠቅላላ ንድፎች | ☐ | |
| `misconceptions.stat_unresolved` | Active Unresolved | ንቁ ያልተፈቱ | ☐ | |
| `misconceptions.stat_trend` | Trend | አዝማሚያ | ☐ | |
| `misconceptions.trend_neutral` | Neutral | ገለልተኛ | ☐ | |
| `misconceptions.breakdown_title` | Breakdown by Topic | በርዕስ መከፋፈል | ☐ | |
| `misconceptions.active_patterns` | {count, plural, one {# active pattern} other {# active patterns}} | {count, plural, one {# ንቁ ንድፍ} other {# ንቁ ንድፎች}} ⚠️ | ☐ | |
| `misconceptions.resolve_topic` | Resolve Topic | ርዕስ ፍታ | ☐ | |
| `misconceptions.concept_gap` | Concept Gap | የጽንሰ-ሀሳብ ክፍተት | ☐ | |
| `misconceptions.logged_count` | Logged {count}x | {count}x ተመዝግቧል ⚠️ | ☐ | |
| `misconceptions.wrong_answer` | Wrong Answer: | ተሳሳተ መልስ፡ | ☐ | |
| `misconceptions.resolved` | Resolved | ተፈትቷል | ☐ | |
| `misconceptions.resolve` | Resolve | ፍታ | ☐ | |

### `copilot.*` — 7 keys

| Key | English | Amharic | ✓ | Notes |
| --- | --- | --- | :---: | --- |
| `copilot.title` | Teacher Copilot | የመምህር ረዳት | ☐ | |
| `copilot.subtitle` | Ask anything about your class, materials, and planning. | ስለ ክፍልዎ፣ ቁሳቁሶች እና እቅድ ማውጣት ማንኛውንም ነገር ይጠይቁ። | ☐ | |
| `copilot.empty_hint` | Ask about your class's progress, generate an assessment, or plan tomorrow's lesson. Answers are grounded in your workspace materials. | ስለ ክፍልዎ እድገት ይጠይቁ፣ ግምገማ ያዘጋጁ፣ ወይም የነገ ትምህርት ያቅዱ። መልሶች በስራ ቦታ ቁሳቁሶችዎ ላይ የተመሰረቱ ናቸው። | ☐ | |
| `copilot.placeholder` | Ask your copilot… | ረዳትዎን ይጠይቁ… | ☐ | |
| `copilot.thinking` | Thinking… | በማሰብ ላይ… | ☐ | |
| `copilot.open_lessons` | Open Lessons | ትምህርቶችን ክፈት | ☐ | |
| `copilot.open_assessment` | Assessment Studio | የግምገማ ስቱዲዮ | ☐ | |

---

_Rows marked ⚠️ contain ICU placeholders — copy them through unchanged._
