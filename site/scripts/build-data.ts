import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";
import { LANGS, MARKERS, type Lang, parseCurriculum, loadEntry, slugify, dictDir, listPacks, entryExists, sectionTitle } from "../../internal/lib.ts";

type Node = {
  id: string; // slug of the German key, identical in every language
  key: string; // German file name
  name: string; // display name in this language
  english?: string;
  aliases: string[];
  description: string;
  pack: string | null;
  chapter: number;
  index: number;
  html: string;
  misconception?: string;
  dialogue: string[];
  links: string[]; // outgoing slugs
  markdown: string;
};

marked.use({
  renderer: {
    link({ href, text }) {
      const m = href.match(/^\.\/(.+?)\.md$/);
      if (m) {
        const slug = slugify(decodeURIComponent(m[1]));
        return `<a href="?term=${slug}" data-term="${slug}">${text}</a>`;
      }
      return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
    },
  },
});

const packs = listPacks();

function buildLang(lang: Lang) {
  const markers = MARKERS[lang];
  const nodes: Node[] = [];
  const chaptersMain = parseCurriculum(null).map((s) => ({ number: s.number, title: sectionTitle(s, lang) }));
  const packMeta = packs.map((p) => ({
    id: p.id,
    title: p.title[lang],
    stand: p.stand[lang],
    description: p.description[lang],
    chapters: parseCurriculum(p.id).map((s) => ({ number: s.number, title: sectionTitle(s, lang) })),
  }));

  let skipped = 0;
  for (const pack of [null, ...packs.map((p) => p.id)]) {
    const sections = parseCurriculum(pack);
    let index = 0;
    for (const s of sections) {
      for (const term of s.terms) {
        index += 1;
        // Fall back to the German entry when a translation is still missing.
        const useLang: Lang = entryExists(term, lang, pack) ? lang : "de";
        if (useLang !== lang) skipped++;
        const e = loadEntry(term, useLang, pack);
        const m = MARKERS[useLang];
        let md = e.body;
        const dialogue: string[] = [];
        const at = md.indexOf(m.dialogue);
        if (at >= 0) {
          for (const line of md.slice(at).split("\n")) {
            const q = line.match(/^>\s*(.+)$/);
            if (q) dialogue.push(q[1].trim().replace(/^[„"“]|[“"”]$/g, ""));
          }
          md = md.slice(0, at).trim();
        }
        let misconception: string | undefined;
        const miscRe = new RegExp(`^${m.misconception.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*([\\s\\S]*?)(?=\\n\\s*\\n|$)`, "m");
        md = md.replace(miscRe, (_x, text) => {
          misconception = text.replace(/\s+/g, " ").trim();
          return "";
        });
        const encoded = md.trim().replace(/\]\(\.\/([^)]+?)\.md\)/g, (_x, f) => `](./${encodeURIComponent(f)}.md)`);
        const html = (marked.parse(encoded) as string).trim();
        nodes.push({
          id: e.slug,
          key: term,
          name: e.title,
          english: e.english,
          aliases: e.aliases,
          description: e.description,
          pack,
          chapter: s.number,
          index,
          html,
          misconception,
          dialogue,
          links: e.links.map(slugify),
          markdown: readFileSync(join(dictDir(useLang, pack), `${term}.md`), "utf8"),
        });
      }
    }
  }

  const ids = new Set(nodes.map((n) => n.id));
  const seen = new Set<string>();
  const links: { source: string; target: string }[] = [];
  for (const n of nodes) {
    for (const t of n.links) {
      if (!ids.has(t) || t === n.id) continue;
      const key = [n.id, t].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      links.push({ source: n.id, target: t });
    }
  }
  const out = { lang, generatedAt: new Date().toISOString(), chapters: chaptersMain, packs: packMeta, nodes, links };
  const dir = join(import.meta.dirname, "..", "src", "generated");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `dictionary.${lang}.json`), JSON.stringify(out));
  const note = skipped ? ` (${skipped} ohne Übersetzung, deutsch übernommen)` : "";
  console.log(`Graph-Daten ${lang}: ${nodes.length} Begriffe, ${links.length} Verbindungen${note}.`);
}

for (const lang of LANGS) buildLang(lang);
