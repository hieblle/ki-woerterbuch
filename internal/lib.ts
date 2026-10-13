import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

export const ROOT = join(import.meta.dirname, "..");
export const DICT_DIR = join(ROOT, "dictionary");
export const CURRICULUM = join(ROOT, "internal", "Curriculum.md");

export type Section = { number: number; title: string; terms: string[] };

export type Entry = {
  term: string;
  slug: string;
  description: string;
  english?: string;
  aliases: string[];
  body: string; // markdown without frontmatter
  links: string[]; // linked term names (resolved file names)
  wordCount: number;
};

export function slugify(term: string): string {
  // GitHub-style heading slugs: lowercase, drop punctuation except hyphens, spaces to hyphens
  return term
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function parseCurriculum(): Section[] {
  const lines = readFileSync(CURRICULUM, "utf8").split("\n");
  const sections: Section[] = [];
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    const h = line.match(/^## Kapitel (\d+) — (.+)$/);
    if (h) {
      sections.push({ number: Number(h[1]), title: h[2].trim(), terms: [] });
      continue;
    }
    if (line.startsWith("## ")) throw new Error(`Ungültige Kapitelzeile: ${line}`);
    const b = line.match(/^- (.+)$/);
    if (b) {
      if (!sections.length) throw new Error(`Begriff ohne Kapitel: ${line}`);
      const term = b[1];
      if (term !== term.trim() || /[*_`\[]/.test(term)) throw new Error(`Ungültiger Begriff: ${term}`);
      sections[sections.length - 1].terms.push(term);
      continue;
    }
    throw new Error(`Unerwartete Zeile im Curriculum: ${line}`);
  }
  return sections;
}

export function parseFrontmatter(src: string): { data: Record<string, any>; body: string } {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: src };
  const data: Record<string, any> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, rawVal] = kv;
    let val: any = rawVal.trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      val = val
        .slice(1, -1)
        .split(",")
        .map((s: string) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      val = val.replace(/^["']|["']$/g, "");
    }
    data[key] = val;
  }
  return { data, body: src.slice(m[0].length) };
}

export function loadEntry(term: string): Entry {
  const file = join(DICT_DIR, `${term}.md`);
  if (!existsSync(file)) throw new Error(`Eintrag fehlt: dictionary/${term}.md`);
  const src = readFileSync(file, "utf8");
  const { data, body } = parseFrontmatter(src);
  const trimmed = body.trim();
  const links: string[] = [];
  for (const m of trimmed.matchAll(/\]\(\.\/([^)]+?)\.md\)/g)) {
    const target = decodeURIComponent(m[1]);
    if (!links.includes(target)) links.push(target);
  }
  const wordCount = trimmed
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  return {
    term,
    slug: slugify(term),
    description: String(data.description ?? ""),
    english: data.english ? String(data.english) : undefined,
    aliases: Array.isArray(data.aliases) ? data.aliases : [],
    body: trimmed,
    links,
    wordCount,
  };
}

export function listDictionaryFiles(): string[] {
  return readdirSync(DICT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => basename(f, ".md"));
}
