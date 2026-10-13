import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";
import { parseCurriculum, loadEntry, slugify, DICT_DIR } from "../../internal/lib.ts";

type Node = {
  id: string; // slug
  name: string;
  english?: string;
  aliases: string[];
  description: string;
  chapter: number;
  index: number;
  html: string;
  misconception?: string;
  dialogue: string[];
  links: string[]; // outgoing slugs
  markdown: string;
};

const sections = parseCurriculum();
const chapters = sections.map((s) => ({ number: s.number, title: s.title, terms: s.terms.map(slugify) }));
const nodes: Node[] = [];
const linkPairs: { source: string; target: string }[] = [];
let index = 0;

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

for (const s of sections) {
  for (const term of s.terms) {
    const e = loadEntry(term);
    index += 1;
    let md = e.body;

    // Dialogue block
    const dialogue: string[] = [];
    const at = md.indexOf("_Im Alltag:_");
    if (at >= 0) {
      const tail = md.slice(at);
      for (const line of tail.split("\n")) {
        const q = line.match(/^>\s*(.+)$/);
        if (q) dialogue.push(q[1].trim().replace(/^[„"“]|[“"”]$/g, ""));
      }
      md = md.slice(0, at).trim();
    }

    // Misconception
    let misconception: string | undefined;
    md = md.replace(/^_Typischer Irrtum:_\s*([\s\S]*?)(?=\n\s*\n|$)/m, (_m, text) => {
      misconception = text.replace(/\s+/g, " ").trim();
      return "";
    });

    const html = (marked.parse(md.trim()) as string).trim();
    nodes.push({
      id: e.slug,
      name: term,
      english: e.english,
      aliases: e.aliases,
      description: e.description,
      chapter: s.number,
      index,
      html,
      misconception,
      dialogue,
      links: e.links.map(slugify),
      markdown: readFileSync(join(DICT_DIR, `${term}.md`), "utf8"),
    });
  }
}

const ids = new Set(nodes.map((n) => n.id));
const seen = new Set<string>();
for (const n of nodes) {
  for (const t of n.links) {
    if (!ids.has(t) || t === n.id) continue;
    const key = [n.id, t].sort().join("|");
    if (seen.has(key)) continue;
    seen.add(key);
    linkPairs.push({ source: n.id, target: t });
  }
}

const out = { generatedAt: new Date().toISOString(), chapters, nodes, links: linkPairs };
mkdirSync(join(import.meta.dirname, "..", "src", "generated"), { recursive: true });
writeFileSync(join(import.meta.dirname, "..", "src", "generated", "dictionary.json"), JSON.stringify(out));
console.log(`Graph-Daten: ${nodes.length} Begriffe, ${linkPairs.length} Verbindungen.`);
