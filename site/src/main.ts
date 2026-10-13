import "./style.css";
import ForceGraph3D from "3d-force-graph";
import SpriteText from "three-spritetext";
import { Vector3 } from "three";
import data from "./generated/dictionary.json";

type Node = (typeof data.nodes)[number] & { x?: number; y?: number; z?: number; degree: number };
type Link = { source: string | Node; target: string | Node };

const REPO_URL = "https://github.com/dbrains-academy/ki-woerterbuch";
const README_URL = `${REPO_URL}#`;

const CHAPTER_COLORS: Record<number, string> = {
  1: "#7f3ffa",
  2: "#3ddca8",
  3: "#2d9cdb",
  4: "#f2994a",
  5: "#e056a0",
  6: "#f64d3f",
  7: "#d4a017",
  8: "#5b6cff",
};

const nodes: Node[] = data.nodes.map((n) => ({ ...n, degree: 0 }));
const byId = new Map(nodes.map((n) => [n.id, n]));
const links: Link[] = data.links.map((l) => ({ ...l }));
const neighbors = new Map<string, Set<string>>();
for (const l of links) {
  const s = l.source as string;
  const t = l.target as string;
  byId.get(s)!.degree++;
  byId.get(t)!.degree++;
  if (!neighbors.has(s)) neighbors.set(s, new Set());
  if (!neighbors.has(t)) neighbors.set(t, new Set());
  neighbors.get(s)!.add(t);
  neighbors.get(t)!.add(s);
}
const chapterTitle = (n: number) => data.chapters.find((c) => c.number === n)?.title ?? "";

// ---------- Theme ----------
const root = document.documentElement;
function currentTheme(): "light" | "dark" {
  const forced = root.dataset.theme;
  if (forced === "dark" || forced === "light") return forced;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function themeColors() {
  const dark = currentTheme() === "dark";
  return {
    bg: dark ? "#191525" : "#f8f7fc",
    label: dark ? "#e5e1fa" : "#211740",
    labelDim: dark ? "rgba(229,225,250,0.25)" : "rgba(33,23,64,0.25)",
    link: dark ? "rgba(166,159,230,0.22)" : "rgba(33,23,64,0.16)",
    linkHi: dark ? "rgba(255,255,255,0.85)" : "rgba(127,63,250,0.9)",
    nodeDim: dark ? "#3a3357" : "#d9d4ee",
  };
}

// ---------- State ----------
let selected: Node | null = null;
let hovered: Node | null = null;
let chapterFilter: number | null = null;

function isActive(n: Node): boolean {
  if (chapterFilter !== null && n.chapter !== chapterFilter) return false;
  const focus = selected ?? hovered;
  if (!focus) return true;
  return n.id === focus.id || neighbors.get(focus.id)?.has(n.id) === true;
}
function linkActive(l: Link): boolean {
  const s = (l.source as Node).id ?? (l.source as string);
  const t = (l.target as Node).id ?? (l.target as string);
  const focus = selected ?? hovered;
  if (chapterFilter !== null) {
    if (byId.get(s)!.chapter !== chapterFilter && byId.get(t)!.chapter !== chapterFilter) return false;
  }
  if (!focus) return true;
  return s === focus.id || t === focus.id;
}

// ---------- Graph ----------
const el = document.getElementById("graph")!;
const Graph = new ForceGraph3D(el, { controlType: "orbit" })
  .graphData({ nodes, links })
  .backgroundColor(themeColors().bg)
  .showNavInfo(false)
  .nodeVal((n) => 1 + (n as Node).degree * 0.45)
  .nodeOpacity(0.95)
  .nodeResolution(16)
  .nodeColor((n) => {
    const node = n as Node;
    const focus = selected ?? hovered;
    if (!isActive(node)) return themeColors().nodeDim;
    return CHAPTER_COLORS[node.chapter];
  })
  .nodeThreeObject((n) => {
    const node = n as Node;
    const sprite = new SpriteText(node.name.toUpperCase());
    sprite.material.depthWrite = false;
    sprite.fontFace = "Montserrat, Open Sans, sans-serif";
    sprite.fontWeight = "600";
    sprite.color = isActive(node) ? themeColors().label : themeColors().labelDim;
    sprite.textHeight = 2 + Math.min(node.degree, 12) * 0.08;
    const r = Math.cbrt(1 + node.degree * 0.45) * 4;
    sprite.position.y = r + 3;
    (sprite as any).__node = node;
    return sprite;
  })
  .nodeThreeObjectExtend(true)
  .linkColor((l) => (linkActive(l as Link) ? themeColors().linkHi : themeColors().link))
  .linkWidth((l) => (linkActive(l as Link) && (selected || hovered) ? 1.2 : 0))
  .linkOpacity(0.3)
  .onNodeHover((n) => {
    const node = (n as Node | null) ?? null;
    if (hovered === node) return;
    hovered = node;
    el.style.cursor = node ? "pointer" : "grab";
    refresh();
  })
  .onNodeClick((n) => selectNode(n as Node, true))
  .onBackgroundClick(() => {
    if (selected) closePanel();
  });

Graph.warmupTicks(80).cooldownTime(5000);
Graph.d3Force("charge")?.strength(-140);
Graph.d3Force("link")?.distance(() => 34);
Graph.cameraPosition({ x: 0, y: 0, z: 420 });

let refreshQueued = false;
function refresh() {
  if (refreshQueued) return;
  refreshQueued = true;
  requestAnimationFrame(() => {
    refreshQueued = false;
    Graph.nodeColor(Graph.nodeColor());
    Graph.linkColor(Graph.linkColor());
    Graph.linkWidth(Graph.linkWidth());
    // update label colors without rebuilding sprites
    Graph.scene().traverse((obj: any) => {
      if (obj.__node) obj.color = isActive(obj.__node) ? themeColors().label : themeColors().labelDim;
    });
  });
}

function fitAll() {
  Graph.cameraPosition({ x: 0, y: 0, z: 420 }, { x: 0, y: 0, z: 0 }, 800);
}

function focusNode(node: Node) {
  if (node.x === undefined || node.y === undefined || node.z === undefined) return;
  const isMobile = innerWidth <= 760;
  const distance = isMobile ? 150 : 110;
  const nodePos = new Vector3(node.x, node.y, node.z);
  const hyp = nodePos.length() || 1;
  const camPos = nodePos.clone().multiplyScalar(1 + distance / hyp);
  // Shift the view so the node is not hidden behind the panel.
  const cam = Graph.camera() as any;
  const fov = ((cam.fov ?? 75) * Math.PI) / 180;
  const worldPerPx = (2 * distance * Math.tan(fov / 2)) / innerHeight;
  const viewDir = nodePos.clone().sub(camPos).normalize();
  let worldUp = new Vector3(0, 1, 0);
  if (Math.abs(viewDir.dot(worldUp)) > 0.9) worldUp = new Vector3(0, 0, 1);
  const right = viewDir.clone().cross(worldUp).normalize();
  const up = right.clone().cross(viewDir).normalize();
  const shift = isMobile
    ? up.clone().multiplyScalar(-0.33 * innerHeight * worldPerPx)
    : right.clone().multiplyScalar((Math.min(440, innerWidth * 0.5) / 2) * worldPerPx);
  const target = nodePos.clone().add(shift);
  const pos = camPos.clone().add(shift);
  Graph.cameraPosition({ x: pos.x, y: pos.y, z: pos.z }, { x: target.x, y: target.y, z: target.z }, 900);
}

// ---------- Panel ----------
const panel = document.getElementById("panel")!;
const $ = (id: string) => document.getElementById(id)!;
$("p-total").textContent = String(nodes.length);
$("info-count").textContent = String(nodes.length);
($("info-repo") as HTMLAnchorElement).href = REPO_URL;

function selectNode(node: Node, pushHistory: boolean) {
  selected = node;
  renderPanel(node);
  panel.hidden = false;
  focusNode(node);
  refresh();
  if (pushHistory) setUrl({ term: node.id });
  hideHint();
}

function closePanel() {
  selected = null;
  panel.hidden = true;
  refresh();
  setUrl({ term: null });
}

function renderPanel(node: Node) {
  $("p-chapter").textContent = `Kapitel ${node.chapter} · ${chapterTitle(node.chapter)}`;
  $("p-index").textContent = String(node.index);
  $("p-title").textContent = node.name;
  $("p-english").textContent = node.english ?? "";
  $("p-desc").textContent = node.description;
  $("p-html").innerHTML = node.html;
  const misc = $("p-misc-wrap");
  misc.hidden = !node.misconception;
  $("p-misc").textContent = node.misconception ?? "";

  const dialog = $("p-dialog");
  dialog.innerHTML = "";
  node.dialogue.forEach((line, i) => {
    const b = document.createElement("div");
    b.className = `bubble ${i % 2 === 0 ? "q" : "a"}`;
    b.textContent = line;
    dialog.appendChild(b);
  });
  $("p-dialog-wrap").hidden = node.dialogue.length === 0;

  const linksEl = $("p-links");
  linksEl.innerHTML = "";
  const related = [...(neighbors.get(node.id) ?? [])]
    .map((id) => byId.get(id)!)
    .sort((a, b) => a.index - b.index);
  for (const r of related) {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.innerHTML = `<span class="dot" style="background:${CHAPTER_COLORS[r.chapter]}"></span>${r.name}`;
    chip.addEventListener("click", () => selectNode(r, true));
    linksEl.appendChild(chip);
  }
  $("p-links-wrap").hidden = related.length === 0;

  ($("p-read") as HTMLAnchorElement).href = README_URL + node.id;
  ($("p-prev") as HTMLButtonElement).disabled = node.index <= 1;
  ($("p-next") as HTMLButtonElement).disabled = node.index >= nodes.length;
  $("p-prev").textContent = node.index > 1 ? `← ${nodes[node.index - 2].name}` : "← Anfang";
  $("p-next").textContent = node.index < nodes.length ? `${nodes[node.index].name} →` : "Ende →";
  panel.querySelector(".panel-body")!.scrollTop = 0;
}

panel.addEventListener("click", (ev) => {
  const a = (ev.target as HTMLElement).closest("a[data-term]") as HTMLAnchorElement | null;
  if (a) {
    ev.preventDefault();
    const n = byId.get(a.dataset.term!);
    if (n) selectNode(n, true);
  }
});
$("btn-close").addEventListener("click", closePanel);
$("p-prev").addEventListener("click", () => selected && selected.index > 1 && selectNode(nodes[selected.index - 2], true));
$("p-next").addEventListener("click", () => selected && selected.index < nodes.length && selectNode(nodes[selected.index], true));
$("p-share").addEventListener("click", async () => {
  if (!selected) return;
  const url = new URL(location.href);
  url.search = `?term=${selected.id}`;
  await copy(url.toString(), "Link kopiert");
});
$("p-copy").addEventListener("click", async () => {
  if (!selected) return;
  await copy(selected.markdown, "Markdown kopiert");
});

async function copy(text: string, msg: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast(msg);
  } catch {
    toast("Kopieren nicht möglich");
  }
}
let toastTimer = 0;
function toast(msg: string) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (t.hidden = true), 1800);
}

// ---------- Search ----------
const input = $("search-input") as HTMLInputElement;
const results = $("search-results") as HTMLUListElement;
let cursor = 0;
let matches: Node[] = [];

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
function search(q: string): Node[] {
  const t = norm(q.trim());
  if (!t) return [];
  const score = (n: Node) => {
    const name = norm(n.name);
    const alts = [n.english ?? "", ...n.aliases].map(norm);
    if (name === t) return 0;
    if (name.startsWith(t)) return 1;
    if (alts.some((a) => a === t || a.startsWith(t))) return 2;
    if (name.includes(t) || alts.some((a) => a.includes(t))) return 3;
    if (norm(n.description).includes(t)) return 4;
    return -1;
  };
  return nodes
    .map((n) => ({ n, s: score(n) }))
    .filter((x) => x.s >= 0)
    .sort((a, b) => a.s - b.s || a.n.index - b.n.index)
    .slice(0, 8)
    .map((x) => x.n);
}
function renderResults() {
  results.innerHTML = "";
  if (!input.value.trim()) {
    results.hidden = true;
    return;
  }
  results.hidden = false;
  if (!matches.length) {
    results.innerHTML = `<li class="r-empty">Kein Begriff gefunden</li>`;
    return;
  }
  matches.forEach((n, i) => {
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", String(i === cursor));
    li.innerHTML = `<span class="r-name"><span class="dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${CHAPTER_COLORS[n.chapter]}"></span>${n.name}${n.english ? ` <span class="r-chapter">${n.english}</span>` : ""}</span><span class="r-desc">${n.description}</span>`;
    li.addEventListener("mousedown", (e) => {
      e.preventDefault();
      choose(n);
    });
    results.appendChild(li);
  });
}
function choose(n: Node) {
  input.value = n.name;
  results.hidden = true;
  input.blur();
  selectNode(n, true);
}
input.addEventListener("input", () => {
  matches = search(input.value);
  cursor = 0;
  renderResults();
  setUrl({ q: input.value || null }, true);
});
input.addEventListener("focus", () => {
  matches = search(input.value);
  renderResults();
});
input.addEventListener("blur", () => setTimeout(() => (results.hidden = true), 120));
input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    cursor = Math.min(cursor + 1, matches.length - 1);
    renderResults();
    e.preventDefault();
  } else if (e.key === "ArrowUp") {
    cursor = Math.max(cursor - 1, 0);
    renderResults();
    e.preventDefault();
  } else if (e.key === "Enter") {
    if (matches[cursor]) choose(matches[cursor]);
  } else if (e.key === "Escape") {
    input.value = "";
    results.hidden = true;
    input.blur();
    setUrl({ q: null }, true);
  }
});
document.addEventListener("keydown", (e) => {
  const typing = (e.target as HTMLElement).tagName === "INPUT";
  if (e.key === "/" && !typing) {
    e.preventDefault();
    input.focus();
    input.select();
  } else if (e.key === "Escape" && !typing) {
    if (!$("info").hidden) $("info").hidden = true;
    else if (selected) closePanel();
  } else if (!typing && selected && e.key === "ArrowRight" && selected.index < nodes.length) {
    selectNode(nodes[selected.index], true);
  } else if (!typing && selected && e.key === "ArrowLeft" && selected.index > 1) {
    selectNode(nodes[selected.index - 2], true);
  }
});

// ---------- Legend ----------
const legend = $("legend");
for (const c of data.chapters) {
  const b = document.createElement("button");
  b.setAttribute("aria-pressed", "false");
  b.innerHTML = `<span class="dot" style="background:${CHAPTER_COLORS[c.number]}"></span>${c.title}`;
  b.addEventListener("click", () => {
    chapterFilter = chapterFilter === c.number ? null : c.number;
    legend.querySelectorAll("button").forEach((x, i) => x.setAttribute("aria-pressed", String(data.chapters[i].number === chapterFilter)));
    refresh();
  });
  legend.appendChild(b);
}

// ---------- Info, theme, hint ----------
$("btn-info").addEventListener("click", () => ($("info").hidden = false));
$("btn-info-close").addEventListener("click", () => ($("info").hidden = true));
$("info").addEventListener("click", (e) => {
  if (e.target === $("info")) $("info").hidden = true;
});
$("btn-theme").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
  applyTheme();
});
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
function applyTheme() {
  Graph.backgroundColor(themeColors().bg);
  refresh();
}

let hintHidden = false;
function hideHint() {
  if (hintHidden) return;
  hintHidden = true;
  $("hint").classList.add("hidden");
}
el.addEventListener("pointerdown", () => setTimeout(hideHint, 1500), { once: true });
setTimeout(hideHint, 9000);

// ---------- URL state ----------
function setUrl(patch: { term?: string | null; q?: string | null }, replace = false) {
  const url = new URL(location.href);
  for (const [k, v] of Object.entries(patch)) {
    if (v === null || v === undefined || v === "") url.searchParams.delete(k);
    else url.searchParams.set(k, v);
  }
  if (replace) history.replaceState(null, "", url);
  else history.pushState(null, "", url);
}
function readUrl(initial = false) {
  const p = new URLSearchParams(location.search);
  const q = p.get("q");
  if (q !== null) input.value = q;
  const term = p.get("term");
  if (term && byId.has(term)) {
    const n = byId.get(term)!;
    selected = n;
    renderPanel(n);
    panel.hidden = false;
    refresh();
    if (initial) {
      let done = false;
      Graph.onEngineStop(() => {
        if (done) return;
        done = true;
        focusNode(n);
      });
      setTimeout(() => {
        if (done) return;
        done = true;
        focusNode(n);
      }, 6500);
    } else focusNode(n);
  } else if (!initial) {
    selected = null;
    panel.hidden = true;
    refresh();
  }
}
addEventListener("popstate", () => readUrl(false));
readUrl(true);

addEventListener("resize", () => Graph.width(innerWidth).height(innerHeight));
(window as any).__graph = Graph;
(window as any).__byId = byId;
