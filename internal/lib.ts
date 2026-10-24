import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

export const ROOT = join(import.meta.dirname, "..");
export const LANGS = ["de", "en"] as const;
export type Lang = (typeof LANGS)[number];

export type Section = { number: number; title: string; titleEn: string; terms: string[] };
export type Pack = { id: string; title: Record<Lang, string>; stand: Record<Lang, string>; description: Record<Lang, string> };

export type Entry = {
  term: string; // German key, equals the file name in dictionary/
  title: string; // display name in the requested language
  slug: string;
  pack: string | null;
  description: string;
  english?: string;
  aliases: string[];
  body: string; // markdown without frontmatter
  links: string[]; // linked term keys (file names)
  wordCount: number;
};

// Localized markers inside entries.
export const MARKERS: Record<Lang, { misconception: string; dialogue: string }> = {
  de: { misconception: "_Typischer Irrtum:_", dialogue: "_Im Alltag:_" },
  en: { misconception: "_Common misconception:_", dialogue: "_In practice:_" },
};

export function dictDir(lang: Lang, pack: string | null = null): string {
  const base = join(ROOT, lang === "de" ? "dictionary" : "dictionary-en");
  return pack ? join(base, "packs", pack) : base;
}

export function curriculumPath(pack: string | null = null): string {
  return pack ? join(ROOT, "internal", "packs", `${pack}.md`) : join(ROOT, "internal", "Curriculum.md");
}

export function slugify(term: string): string {
  // GitHub-style heading slugs: lowercase, drop punctuation except hyphens, spaces to hyphens
  return term
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function listPacks(): Pack[] {
  const dir = join(ROOT, "internal", "packs");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const id = basename(f, ".md");
      const { data } = parseFrontmatter(readFileSync(join(dir, f), "utf8"));
      const loc = (key: string): Record<Lang, string> => ({
        de: String(data[`${key}_de`] ?? data[key] ?? ""),
        en: String(data[`${key}_en`] ?? data[key] ?? ""),
      });
      return { id, title: loc("title"), stand: loc("stand"), description: loc("description") };
    });
}

export function parseCurriculum(pack: string | null = null): Section[] {
  const src = readFileSync(curriculumPath(pack), "utf8");
  const { data, body } = parseFrontmatter(src);
  const titlesEn: string[] = Array.isArray(data.chapters_en) ? data.chapters_en : [];
  const sections: Section[] = [];
  for (const raw of body.split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    const h = line.match(/^## Kapitel (\d+) — (.+)$/);
    if (h) {
      const title = h[2].trim();
      sections.push({ number: Number(h[1]), title, titleEn: titlesEn[sections.length] ?? title, terms: [] });
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
    throw new Error(`Unerwartete Zeile im Curriculum (${pack ?? "Haupt"}): ${line}`);
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

export function entryExists(term: string, lang: Lang, pack: string | null = null): boolean {
  return existsSync(join(dictDir(lang, pack), `${term}.md`));
}

export function loadEntry(term: string, lang: Lang = "de", pack: string | null = null): Entry {
  const file = join(dictDir(lang, pack), `${term}.md`);
  if (!existsSync(file)) throw new Error(`Eintrag fehlt: ${file.replace(ROOT + "/", "")}`);
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
    title: data.title ? String(data.title) : term,
    slug: slugify(term),
    pack,
    description: String(data.description ?? ""),
    english: data.english ? String(data.english) : undefined,
    aliases: Array.isArray(data.aliases) ? data.aliases : [],
    body: trimmed,
    links,
    wordCount,
  };
}

export function listDictionaryFiles(lang: Lang = "de", pack: string | null = null): string[] {
  const dir = dictDir(lang, pack);
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".md"))
    .map((d) => basename(d.name, ".md"));
}

/** Link targets allowed from an entry: main terms always, pack terms only from inside the same pack. */
export const sectionTitle = (s: Section, lang: Lang) => (lang === "en" ? s.titleEn : s.title);

export function allowedTargets(pack: string | null): Set<string> {
  const main = parseCurriculum(null).flatMap((s) => s.terms);
  const extra = pack ? parseCurriculum(pack).flatMap((s) => s.terms) : [];
  return new Set([...main, ...extra]);
}
