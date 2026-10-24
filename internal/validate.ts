import { LANGS, MARKERS, type Lang, parseCurriculum, loadEntry, listDictionaryFiles, listPacks, allowedTargets, entryExists } from "./lib.ts";

const problems: string[] = [];
const requireEnglish = process.argv.includes("--require-en");

function check(lang: Lang, pack: string | null) {
  const label = `${pack ? `Paket ${pack}` : "Haupt"} / ${lang}`;
  const sections = parseCurriculum(pack);
  const terms = sections.flatMap((s) => s.terms);
  const allowed = allowedTargets(pack);
  const files = new Set(listDictionaryFiles(lang, pack));
  const markers = MARKERS[lang];
  let missing = 0;

  for (const t of terms) {
    if (!files.has(t)) {
      missing++;
      if (lang === "de" || requireEnglish) problems.push(`${label}: ${t}: Datei fehlt`);
      continue;
    }
    const e = loadEntry(t, lang, pack);
    const name = `${label}: ${t}`;
    if (lang === "en" && !e.title) problems.push(`${name}: title fehlt`);
    if (!e.description) problems.push(`${name}: description fehlt`);
    else if (e.description.length > 140) problems.push(`${name}: description zu lang (${e.description.length} Zeichen)`);
    if (e.wordCount < 180) problems.push(`${name}: zu kurz (${e.wordCount} Wörter)`);
    if (e.wordCount > 560) problems.push(`${name}: zu lang (${e.wordCount} Wörter)`);
    if (e.links.length < 2) problems.push(`${name}: weniger als zwei Links`);
    for (const l of e.links) {
      if (!allowed.has(l)) problems.push(`${name}: Link auf unbekannten oder nicht erlaubten Begriff "${l}"`);
      if (l === t) problems.push(`${name}: verlinkt auf sich selbst`);
    }
    const dialogueHits = e.body.split(markers.dialogue).length - 1;
    if (dialogueHits !== 1) problems.push(`${name}: genau ein Block "${markers.dialogue}" nötig (gefunden: ${dialogueHits})`);
    else {
      const after = e.body.slice(e.body.indexOf(markers.dialogue));
      const quotes = after.split("\n").filter((l) => /^>\s*\S/.test(l));
      if (quotes.length < 2 || quotes.length > 4) problems.push(`${name}: Dialog braucht 2 bis 4 Zeilen (gefunden: ${quotes.length})`);
    }
    if (/[—]| – /.test(e.body)) problems.push(`${name}: Gedankenstrich im Text`);
    if (/^#+\s/m.test(e.body)) problems.push(`${name}: Überschriften sind in Einträgen nicht erlaubt`);
  }
  for (const f of files) if (!terms.includes(f)) problems.push(`${label}: ${f}: Datei ohne Curriculum-Eintrag`);
  return { count: terms.length, missing };
}

const summary: string[] = [];
const packs = listPacks();
for (const lang of LANGS) {
  for (const pack of [null, ...packs.map((p) => p.id)]) {
    const { count, missing } = check(lang, pack);
    summary.push(`${pack ?? "Haupt"}/${lang}: ${count - missing}/${count}`);
  }
}
// Every pack term must not collide with a main term.
const mainTerms = new Set(parseCurriculum(null).flatMap((s) => s.terms));
for (const p of packs) {
  for (const t of parseCurriculum(p.id).flatMap((s) => s.terms)) {
    if (mainTerms.has(t)) problems.push(`Paket ${p.id}: "${t}" existiert bereits im Hauptwörterbuch`);
    if (!entryExists(t, "de", p.id) && entryExists(t, "de", null)) problems.push(`Paket ${p.id}: "${t}" liegt im falschen Ordner`);
  }
}

if (problems.length) {
  console.error(problems.map((p) => `  - ${p}`).join("\n"));
  console.error(`\n${problems.length} Problem(e).`);
  process.exit(1);
}
console.log(`Alle Einträge in Ordnung (${summary.join(", ")}).`);
