export type Lang = "de" | "en";

type Strings = {
  title: string;
  titleHtml: string;
  about: string;
  licenseLabel: string;
  license: string;
  infoBody: (count: number, packs: string[]) => string;
  searchPlaceholder: string;
  noResults: string;
  hiddenMatches: (n: number, pack: string) => string;
  hint: string;
  chapter: string;
  chapters: string;
  explanation: string;
  misconception: string;
  dialogue: string;
  connectedWith: string;
  inExtension: string;
  extension: string;
  extensions: string;
  stand: string;
  terms: (n: number) => string;
  showPackTerms: (n: number, pack: string) => string;
  readInDictionary: string;
  copyLink: string;
  copyMarkdown: string;
  linkCopied: string;
  markdownCopied: string;
  copyFailed: string;
  start: string;
  end: string;
  theme: string;
  close: string;
};

export const UI: Record<Lang, Strings> = {
  de: {
    title: "KI-Wörterbuch für den Arbeitsalltag",
    titleHtml: "KI-Wörterbuch<br />für den Arbeitsalltag",
    about: "Über",
    licenseLabel: "Lizenz",
    license:
      'Inhalte CC BY 4.0, Code MIT. Idee und Aufbau inspiriert vom <a href="https://github.com/mattpocock/dictionary-of-ai-coding" target="_blank" rel="noopener">Dictionary of AI Coding</a> von Matt Pocock.',
    infoBody: (count, packs) =>
      `<p>Prompt, Kontextfenster, Halluzination, Agent: Die Begriffe rund um KI fallen ständig, und oft weiß niemand genau, was sie bedeuten.</p>
       <p>Dieses Wörterbuch erklärt ${count} Begriffe in einfacher Sprache, mit Beispielen aus dem Büro. Die Begriffe sind als Netz dargestellt, weil sie zusammenhängen: Klick auf einen Begriff und folge den Verbindungen.</p>
       ${packs.length ? `<p>Über das Puzzle-Symbol oben rechts lassen sich Erweiterungen zuschalten: ${packs.join(", ")}. Sie ergänzen das Netz um produktspezifische Begriffe.</p>` : ""}
       <p>Begleitmaterial zu den KI-Workshops von <a href="https://dbrains.academy" target="_blank" rel="noopener">dbrains academy</a>, Linz.</p>`,
    searchPlaceholder: "Begriff suchen …",
    noResults: "Kein Begriff gefunden",
    hiddenMatches: (n, pack) => `${n} ${n === 1 ? "Treffer" : "Treffer"} in der Erweiterung ${pack}. Einschalten?`,
    hint: "Ziehen zum Drehen · Scrollen zum Zoomen · Klick auf einen Begriff",
    chapter: "Kapitel",
    chapters: "Kapitel",
    explanation: "Erklärung",
    misconception: "Typischer Irrtum",
    dialogue: "Im Alltag",
    connectedWith: "Verbunden mit",
    inExtension: "In der Erweiterung",
    extension: "Erweiterung",
    extensions: "Erweiterungen",
    stand: "Stand",
    terms: (n) => `${n} Begriffe`,
    showPackTerms: (n, pack) => `${n} ${n === 1 ? "Begriff" : "Begriffe"} aus der Erweiterung ${pack} anzeigen`,
    readInDictionary: "Im Wörterbuch lesen",
    copyLink: "Link kopieren",
    copyMarkdown: "Markdown kopieren",
    linkCopied: "Link kopiert",
    markdownCopied: "Markdown kopiert",
    copyFailed: "Kopieren nicht möglich",
    start: "Anfang",
    end: "Ende",
    theme: "Hell/Dunkel umschalten",
    close: "Schließen",
  },
  en: {
    title: "AI Dictionary for Everyday Work",
    titleHtml: "AI Dictionary<br />for Everyday Work",
    about: "About",
    licenseLabel: "License",
    license:
      'Content CC BY 4.0, code MIT. Idea and structure inspired by the <a href="https://github.com/mattpocock/dictionary-of-ai-coding" target="_blank" rel="noopener">Dictionary of AI Coding</a> by Matt Pocock.',
    infoBody: (count, packs) =>
      `<p>Prompt, context window, hallucination, agent: AI vocabulary comes up all the time, and often nobody knows exactly what it means.</p>
       <p>This dictionary explains ${count} terms in plain language, with examples from everyday office work. The terms form a network because they are connected: click a term and follow the threads.</p>
       ${packs.length ? `<p>The puzzle icon in the top right adds extensions: ${packs.join(", ")}. They extend the network with product-specific terms.</p>` : ""}
       <p>Companion material for the AI workshops by <a href="https://dbrains.academy" target="_blank" rel="noopener">dbrains academy</a>, Linz, Austria.</p>`,
    searchPlaceholder: "Search a term …",
    noResults: "No term found",
    hiddenMatches: (n, pack) => `${n} ${n === 1 ? "match" : "matches"} in the ${pack} extension. Enable it?`,
    hint: "Drag to rotate · Scroll to zoom · Click a term",
    chapter: "Chapter",
    chapters: "Chapters",
    explanation: "Explanation",
    misconception: "Common misconception",
    dialogue: "In practice",
    connectedWith: "Connected with",
    inExtension: "In the extension",
    extension: "Extension",
    extensions: "Extensions",
    stand: "As of",
    terms: (n) => `${n} terms`,
    showPackTerms: (n, pack) => `Show ${n} ${n === 1 ? "term" : "terms"} from the ${pack} extension`,
    readInDictionary: "Read in the dictionary",
    copyLink: "Copy link",
    copyMarkdown: "Copy Markdown",
    linkCopied: "Link copied",
    markdownCopied: "Markdown copied",
    copyFailed: "Copying not possible",
    start: "Start",
    end: "End",
    theme: "Toggle light/dark",
    close: "Close",
  },
};
