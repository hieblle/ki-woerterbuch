import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, LANGS, type Lang, parseCurriculum, loadEntry, listDictionaryFiles, listPacks, slugify, entryExists, sectionTitle } from "./lib.ts";

const T = {
  de: { chapter: "Kapitel", terms: "Begriffe", english: "Englisch", generated: "Diese Datei wird generiert. Änderungen bitte in internal/templates/ oder dictionary/ vornehmen." },
  en: { chapter: "Chapter", terms: "terms", english: "German", generated: "This file is generated. Edit internal/templates/ or dictionary-en/ instead." },
};

function readmeName(lang: Lang, pack: string | null): string {
  return `README${pack ? `-${pack}` : ""}${lang === "en" ? ".en" : ""}.md`;
}

function generate(lang: Lang, pack: string | null): boolean {
  const templatePath = join(ROOT, "internal", "templates", `README${pack ? `-${pack}` : ""}.${lang}.template.md`);
  if (!existsSync(templatePath)) {
    console.warn(`Übersprungen (keine Vorlage): ${templatePath.replace(ROOT + "/", "")}`);
    return false;
  }
  const template = readFileSync(templatePath, "utf8");
  if (!template.includes("<!-- TOC -->") || !template.includes("<!-- CURRICULUM -->")) {
    throw new Error(`${templatePath} braucht die Marker <!-- TOC --> und <!-- CURRICULUM -->`);
  }
  const sections = parseCurriculum(pack);
  const terms = sections.flatMap((s) => s.terms);
  const seen = new Set<string>();
  for (const t of terms) {
    if (seen.has(t)) throw new Error(`Begriff doppelt im Curriculum: ${t}`);
    seen.add(t);
  }
  const orphans = listDictionaryFiles(lang, pack).filter((f) => !seen.has(f));
  if (orphans.length) throw new Error(`Einträge ohne Curriculum-Eintrag (${pack ?? "Haupt"}/${lang}): ${orphans.join(", ")}`);
  const missing = terms.filter((t) => !entryExists(t, lang, pack));
  if (missing.length) {
    console.warn(`Übersprungen (${missing.length} fehlende Einträge in ${pack ?? "Haupt"}/${lang}): ${readmeName(lang, pack)}`);
    return false;
  }
  const inPack = new Set(terms);
  const mainReadme = readmeName(lang, null);
  const rewriteLinks = (md: string) =>
    md.replace(/\]\(\.\/([^)]+?)\.md\)/g, (_m, file) => {
      const key = decodeURIComponent(file);
      const anchor = `#${slugify(key)}`;
      return pack && !inPack.has(key) ? `](${mainReadme}${anchor})` : `](${anchor})`;
    });
  const t = T[lang];
  const toc: string[] = [];
  const body: string[] = [];
  for (const s of sections) {
    const heading = `${t.chapter} ${s.number}: ${sectionTitle(s, lang)}`;
    toc.push(`<details>\n<summary><strong>${heading}</strong> (${s.terms.length} ${t.terms})</summary>\n`);
    for (const term of s.terms) toc.push(`- [${loadEntry(term, lang, pack).title}](#${slugify(term)})`);
    toc.push(`\n</details>\n`);
    body.push(`## ${heading}\n`);
    for (const term of s.terms) {
      const e = loadEntry(term, lang, pack);
      // Heading carries the German key as anchor id so links work in both languages.
      body.push(lang === "de" || e.title === term ? `### ${e.title}\n` : `### ${e.title} <a id="${slugify(term)}"></a>\n`);
      const meta: string[] = [];
      if (lang === "de" && e.english) meta.push(`${t.english}: *${e.english}*`);
      if (lang === "en" && e.title !== term) meta.push(`${t.english}: *${term}*`);
      if (meta.length) body.push(meta.join(" · ") + "\n");
      body.push(rewriteLinks(e.body) + "\n");
    }
  }
  const out = `<!-- ${t.generated} -->\n\n` + template.replace("<!-- TOC -->", toc.join("\n")).replace("<!-- CURRICULUM -->", body.join("\n"));
  writeFileSync(join(ROOT, readmeName(lang, pack)), out);
  console.log(`${readmeName(lang, pack)} erzeugt: ${sections.length} ${t.chapter}, ${terms.length} ${t.terms}.`);
  return true;
}

for (const lang of LANGS) {
  generate(lang, null);
  for (const p of listPacks()) generate(lang, p.id);
}
