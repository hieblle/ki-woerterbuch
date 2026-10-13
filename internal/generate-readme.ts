import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, parseCurriculum, loadEntry, listDictionaryFiles, slugify } from "./lib.ts";

const templatePath = join(ROOT, "internal", "README.template.md");
const template = readFileSync(templatePath, "utf8");
if (!template.includes("<!-- TOC -->") || !template.includes("<!-- CURRICULUM -->")) {
  console.error("README.template.md braucht die Marker <!-- TOC --> und <!-- CURRICULUM -->");
  process.exit(1);
}

const sections = parseCurriculum();
const seen = new Set<string>();
const allTerms = sections.flatMap((s) => s.terms);
for (const t of allTerms) {
  if (seen.has(t)) {
    console.error(`Begriff doppelt im Curriculum: ${t}`);
    process.exit(1);
  }
  seen.add(t);
}
const orphans = listDictionaryFiles().filter((f) => !seen.has(f));
if (orphans.length) {
  console.error(`Einträge ohne Curriculum-Eintrag: ${orphans.join(", ")}`);
  process.exit(1);
}

function rewriteLinks(md: string): string {
  return md.replace(/\]\(\.\/([^)]+?)\.md\)/g, (_m, file) => `](#${slugify(decodeURIComponent(file))})`);
}

const toc: string[] = [];
const body: string[] = [];
for (const s of sections) {
  const heading = `Kapitel ${s.number}: ${s.title}`;
  toc.push(`<details>\n<summary><strong>${heading}</strong> (${s.terms.length} Begriffe)</summary>\n`);
  for (const t of s.terms) toc.push(`- [${t}](#${slugify(t)})`);
  toc.push(`\n</details>\n`);

  body.push(`## ${heading}\n`);
  for (const t of s.terms) {
    const e = loadEntry(t);
    body.push(`### ${t}\n`);
    const meta: string[] = [];
    if (e.english) meta.push(`Englisch: *${e.english}*`);
    if (meta.length) body.push(meta.join(" · ") + "\n");
    body.push(rewriteLinks(e.body) + "\n");
  }
}

const out =
  "<!-- Diese Datei wird generiert. Änderungen bitte in internal/README.template.md oder dictionary/ vornehmen. -->\n\n" +
  template.replace("<!-- TOC -->", toc.join("\n")).replace("<!-- CURRICULUM -->", body.join("\n"));
writeFileSync(join(ROOT, "README.md"), out);
console.log(`README.md erzeugt: ${sections.length} Kapitel, ${allTerms.length} Begriffe.`);
