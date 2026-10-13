import { parseCurriculum, loadEntry, listDictionaryFiles } from "./lib.ts";

const sections = parseCurriculum();
const terms = sections.flatMap((s) => s.terms);
const known = new Set(terms);
const problems: string[] = [];
const files = new Set(listDictionaryFiles());

for (const t of terms) {
  if (!files.has(t)) {
    problems.push(`${t}: Datei fehlt`);
    continue;
  }
  const e = loadEntry(t);
  if (!e.description) problems.push(`${t}: description fehlt`);
  else if (e.description.length > 140) problems.push(`${t}: description zu lang (${e.description.length} Zeichen)`);
  if (e.wordCount < 180) problems.push(`${t}: zu kurz (${e.wordCount} Wörter)`);
  if (e.wordCount > 520) problems.push(`${t}: zu lang (${e.wordCount} Wörter)`);
  if (e.links.length < 2) problems.push(`${t}: weniger als zwei Links`);
  for (const l of e.links) {
    if (!known.has(l)) problems.push(`${t}: Link auf unbekannten Begriff "${l}"`);
    if (l === t) problems.push(`${t}: verlinkt auf sich selbst`);
  }
  const alltag = e.body.match(/_Im Alltag:_/g) ?? [];
  if (alltag.length !== 1) problems.push(`${t}: genau ein Block "_Im Alltag:_" nötig (gefunden: ${alltag.length})`);
  else {
    const after = e.body.slice(e.body.indexOf("_Im Alltag:_"));
    const quotes = after.split("\n").filter((l) => /^>\s*\S/.test(l));
    if (quotes.length < 2 || quotes.length > 4) problems.push(`${t}: Dialog braucht 2 bis 4 Zeilen (gefunden: ${quotes.length})`);
  }
  if (/[—]| – /.test(e.body)) problems.push(`${t}: Gedankenstrich im Text`);
  if (/^#+\s/m.test(e.body)) problems.push(`${t}: Überschriften sind in Einträgen nicht erlaubt`);
}
for (const f of files) if (!known.has(f)) problems.push(`${f}: Datei ohne Curriculum-Eintrag`);

if (problems.length) {
  console.error(problems.map((p) => `  - ${p}`).join("\n"));
  console.error(`\n${problems.length} Problem(e).`);
  process.exit(1);
}
console.log(`Alle ${terms.length} Einträge in Ordnung.`);
