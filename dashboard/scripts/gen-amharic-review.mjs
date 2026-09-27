#!/usr/bin/env node
/**
 * Generate the Amharic translation review sheet from messages/{en,am}.json.
 *
 * The sheet is the artifact a native speaker works in: one row per key with the
 * English source, the current Amharic, a tick box and a notes column. Reviewers
 * never edit the JSON directly — corrections are applied back to messages/am.json
 * from their notes, then verified with `npm run i18n:check:strict`.
 *
 * Regenerate after any key is added or changed (the sheet is generated, never
 * hand-edited):
 *
 *   node scripts/gen-amharic-review.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EN_PATH = path.join(ROOT, "messages", "en.json");
const AM_PATH = path.join(ROOT, "messages", "am.json");
const OUT_PATH = path.join(ROOT, "docs", "i18n", "amharic-review.md");

/** Batch 1 is the public marketing surface; everything else ships behind login. */
const BATCHES = [
  {
    id: 1,
    title: "Marketing surface (public — review first)",
    include: (ns) => ns === "landing",
  },
  {
    id: 2,
    title: "App shell, auth and core learner flows",
    include: (ns) =>
      [
        "v2",
        "common",
        "errors",
        "login",
        "signup",
        "onboarding",
        "forgot_password",
        "sidebar",
        "legal",
        "subjectgrade",
        "quiz",
        "ask",
        "gamification",
        "student",
        "parent",
        "teacher",
        "classroom",
      ].includes(ns),
  },
  {
    id: 3,
    title: "Remaining product areas",
    include: () => true,
  },
];

function flatten(obj, prefix = "", out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = v;
  }
  return out;
}

function cell(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function placeholders(value) {
  return [...String(value ?? "").matchAll(/\{[^{}]*\}/g)].map((m) => m[0]);
}

const en = flatten(JSON.parse(fs.readFileSync(EN_PATH, "utf8")));
const am = flatten(JSON.parse(fs.readFileSync(AM_PATH, "utf8")));

const missingAm = Object.keys(en).filter((k) => !(k in am));
const extraAm = Object.keys(am).filter((k) => !(k in en));
if (missingAm.length || extraAm.length) {
  console.error("Catalogs are out of parity — run `npm run i18n:check:strict` first.");
  if (missingAm.length) console.error("  missing in am.json:", missingAm.slice(0, 10));
  if (extraAm.length) console.error("  extra in am.json:", extraAm.slice(0, 10));
  process.exit(1);
}

const namespaces = [...new Set(Object.keys(en).map((k) => k.split(".")[0]))];
const batches = BATCHES.map((b) => ({
  ...b,
  namespaces: namespaces.filter((ns) => b.include(ns) && !BATCHES.slice(0, BATCHES.indexOf(b)).some((p) => p.include(ns)),
  ),
})).filter((b) => b.namespaces.length > 0);

const lines = [];
lines.push("# Amharic translation review sheet");
lines.push("");
lines.push("> **Generated file — do not edit by hand.** Regenerate with");
lines.push("> `node scripts/gen-amharic-review.mjs` after any key change; write corrections into");
lines.push("> the `Notes` column (or the `Amharic` column) and apply them to `messages/am.json`.");
lines.push("");
lines.push("## How to review");
lines.push("");
lines.push("Work one batch at a time — Batch 1 first (it is the public marketing surface). For each row:");
lines.push("");
lines.push("1. **Meaning** — does the Amharic say what the English says, in natural, contemporary Amharic?");
lines.push("   No machine-translation stiffness, no literal word-for-word calques.");
lines.push("2. **Register** — polite, consistent address (`እርስዎ` / `እርስዎች`) matching the product voice");
lines.push("   (direct, editorial, no hype). Keep the register consistent across the batch.");
lines.push("3. **Terminology** — one term per concept across the whole catalog (grade, unit, page, quiz,");
lines.push("   mastery, streak, assignment). Flag synonym drift in `Notes` instead of fixing one row only.");
lines.push("4. **Placeholders** — ICU tokens must survive **byte-for-byte**: `{name}`, `{score}`,");
lines.push("   `{count, plural, one {…} other {…}}`. A mangled placeholder breaks rendering at runtime.");
lines.push("   Leave them exactly as they are; move them if Amharic word order needs it.");
lines.push("5. **Do not translate** — mono notation and codes (`09 /`, `EN + AM`, `→`, `F = ma`), product");
lines.push("   names (`EthioSci`, `@ethiobio_bot`), and fixed acronyms. If a row is notation-only, tick it.");
lines.push("6. **Length** — Amharic runs long. Display strings should stay short enough not to wrap badly");
lines.push("   (hero/showcase lines ≤ 26 syllables); buttons and labels must not overflow at 360px.");
lines.push("7. If the **English** itself is wrong or unclear, say so in `Notes` — do not silently retranslate.");
lines.push("");
lines.push("Tick `☑` when the row is approved. Leave it blank when it needs another pass.");
lines.push("");
lines.push("## Status");
lines.push("");
lines.push("| Batch | Scope | Keys | Status |");
lines.push("| --- | --- | --- | --- |");
for (const b of batches) {
  const count = b.namespaces.reduce(
    (n, ns) => n + Object.keys(en).filter((k) => k.startsWith(`${ns}.`)).length,
    0,
  );
  lines.push(`| ${b.id} | ${b.title} | ${count} | ⬜ not started |`);
}
lines.push("");

for (const b of batches) {
  lines.push(`## Batch ${b.id} — ${b.title}`);
  lines.push("");
  for (const ns of b.namespaces) {
    const keys = Object.keys(en).filter((k) => k.startsWith(`${ns}.`));
    if (keys.length === 0) continue;
    lines.push(`### \`${ns}.*\` — ${keys.length} keys`);
    lines.push("");
    lines.push("| Key | English | Amharic | ✓ | Notes |");
    lines.push("| --- | --- | --- | :---: | --- |");
    for (const key of keys) {
      const flag = placeholders(en[key]).join(" ") ? ` ⚠️` : "";
      lines.push(`| \`${key}\` | ${cell(en[key])} | ${cell(am[key])}${flag} | ☐ | |`);
    }
    lines.push("");
  }
  lines.push("---");
  lines.push("");
}

lines.push("_Rows marked ⚠️ contain ICU placeholders — copy them through unchanged._");
lines.push("");

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, lines.join("\n"));
console.log(
  `Wrote ${path.relative(ROOT, OUT_PATH)} — ` +
    `${Object.keys(en).length} keys in ${batches.length} batches ` +
    `(${(fs.statSync(OUT_PATH).size / 1024).toFixed(0)} KB)`,
);
