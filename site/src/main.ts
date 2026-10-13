import "./style.css";
import ForceGraph3D from "3d-force-graph";
import SpriteText from "three-spritetext";
import { CanvasTexture, Color, Fog, Group, Sprite, SpriteMaterial, Vector3 } from "three";
import data from "./generated/dictionary.json";

type Node = (typeof data.nodes)[number] & { x?: number; y?: number; z?: number; degree: number };
type Link = { source: string | Node; target: string | Node };
type NodeObj = { node: Node; disc: Sprite; ring: Sprite; label: SpriteText };

const REPO_URL = "https://github.com/dbrains-academy/ki-woerterbuch";
const README_URL = `${REPO_URL}#`;

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
const maxDegree = Math.max(...nodes.map((n) => n.degree));
const chapterTitle = (n: number) => data.chapters.find((c) => c.number === n)?.title ?? "";
const linkId = (end: string | Node) => (typeof end === "string" ? end : end.id);

// ---------- Theme ----------
const root = document.documentElement;
function currentTheme(): "light" | "dark" {
  const forced = root.dataset.theme;
  if (forced === "dark" || forced === "light") return forced;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function palette() {
  const dark = currentTheme() === "dark";
  return {
    bg: dark ? "#191525" : "#f1f0f6",
    nodeLow: new Color(dark ? "#3d3759" : "#d3cfe3"),
    nodeHigh: new Color(dark ? "#f3f0fd" : "#1a1233"),
    label: dark ? "#cfc9ea" : "#4d466c",
    labelStrong: dark ? "#f8f7fc" : "#211740",
    accent: dark ? "#a77dff" : "#7f3ffa",
    linkIdle: dark ? "rgba(166,159,230,0.06)" : "rgba(33,23,64,0.045)",
    linkActive: dark ? "rgba(167,125,255,0.75)" : "rgba(127,63,250,0.6)",
    fogNear: 260,
    fogFar: 760,
  };
}

// ---------- State ----------
let selected: Node | null = null;
let hovered: Node | null = null;
let chapterFilter: number | null = null;
const objects = new Map<string, NodeObj>();

function inFilter(n: Node) {
  return chapterFilter === null || n.chapter === chapterFilter;
}
function linkActive(l: Link): boolean {
  if (!selected) return false;
  return linkId(l.source) === selected.id || linkId(l.target) === selected.id;
}

// ---------- Textures ----------
function circleTexture(size = 128, ring = false): CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const r = size / 2;
  ctx.clearRect(0, 0, size, size);
  if (ring) {
    ctx.lineWidth = size * 0.045;
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.arc(r, r, r - ctx.lineWidth, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(r, r, r - 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}
const discTex = circleTexture(256);
const ringTex = circleTexture(256, true);

const radiusOf = (n: Node) => 2.2 + Math.sqrt(n.degree) * 1.55;
const toneOf = (n: Node) => {
  const p = palette();
  const t = Math.sqrt(n.degree / maxDegree);
  return p.nodeLow.clone().lerp(p.nodeHigh, t);
};

// ---------- Graph ----------
const el = document.getElementById("graph")!;
const Graph = new ForceGraph3D(el, {
  controlType: "orbit",
  rendererConfig: { antialias: true, alpha: false, powerPreference: "high-performance" },
})
  .graphData({ nodes, links })
  .backgroundColor(palette().bg)
  .showNavInfo(false)
  .enableNodeDrag(false)
  .nodeThreeObject((n) => {
    const node = n as Node;
    const r = radiusOf(node);
    const g = new Group();
    const disc = new Sprite(new SpriteMaterial({ map: discTex, color: toneOf(node), transparent: true, depthWrite: false }));
    disc.scale.set(r * 2, r * 2, 1);
    const ring = new Sprite(new SpriteMaterial({ map: ringTex, color: palette().accent, transparent: true, depthWrite: false }));
    ring.scale.set(r * 2.9, r * 2.9, 1);
    ring.visible = false;
    const label = new SpriteText(node.name.toUpperCase());
    label.material.depthWrite = false;
    label.fontFace = "Montserrat, Open Sans, sans-serif";
    label.fontWeight = "600";
    label.textHeight = 2.5 + (node.degree / maxDegree) * 0.8;
    label.position.y = r + 2.6;
    label.color = palette().label;
    g.add(disc, ring, label);
    objects.set(node.id, { node, disc, ring, label });
    return g;
  })
  .nodeThreeObjectExtend(false)
  .linkWidth(0)
  .linkOpacity(1)
  .linkColor((l) => (linkActive(l as Link) ? palette().linkActive : palette().linkIdle))
  .linkDirectionalParticles((l) => (linkActive(l as Link) ? 3 : 0))
  .linkDirectionalParticleWidth(1.4)
  .linkDirectionalParticleSpeed(0.0045)
  .linkDirectionalParticleColor(() => palette().accent)
  .onNodeHover((n) => {
    const node = (n as Node | null) ?? null;
    if (hovered === node) return;
    hovered = node;
    el.style.cursor = node ? "pointer" : "grab";
    paint();
  })
  .onNodeClick((n) => selectNode(n as Node, true))
  .onBackgroundClick(() => {
    if (selected) closePanel();
  });

Graph.warmupTicks(100).cooldownTime(4000);
Graph.d3Force("charge")?.strength(-150);
Graph.d3Force("link")?.distance(() => 36);
Graph.cameraPosition({ x: 0, y: 0, z: 400 });
{
  const controls = Graph.controls() as any;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.6;
  controls.zoomSpeed = 0.7;
  controls.minDistance = 60;
  controls.maxDistance = 900;
}
applyFog();

function applyFog() {
  const p = palette();
  Graph.scene().fog = new Fog(p.bg, p.fogNear, p.fogFar);
}

// Updates colors, rings and labels without rebuilding objects.
function paint() {
  const p = palette();
  for (const o of objects.values()) {
    const n = o.node;
    const active = inFilter(n);
    const isSel = selected?.id === n.id;
    const isHov = hovered?.id === n.id;
    const isNeighbor = selected ? neighbors.get(selected.id)?.has(n.id) === true : false;
    (o.disc.material as SpriteMaterial).color.copy(toneOf(n));
    (o.disc.material as SpriteMaterial).opacity = active ? 1 : 0.12;
    o.ring.visible = isSel || isHov;
    (o.ring.material as SpriteMaterial).color.set(p.accent);
    (o.ring.material as SpriteMaterial).opacity = isSel ? 1 : 0.55;
    o.label.color = isSel || isHov || isNeighbor ? p.labelStrong : p.label;
    o.label.material.opacity = active ? 1 : 0.15;
  }
  Graph.linkColor(Graph.linkColor());
  Graph.linkDirectionalParticles(Graph.linkDirectionalParticles());
}

function focusNode(node: Node) {
  if (node.x === undefined || node.y === undefined || node.z === undefined) return;
  const cam = Graph.camera() as any;
  const controls = Graph.controls() as any;
  const nodePos = new Vector3(node.x, node.y, node.z);
  const currentTarget: Vector3 = controls.target.clone();
  // Keep the viewing direction and roughly the current zoom. Only re-center on the node.
  const dir = cam.position.clone().sub(currentTarget);
  const dist = Math.min(Math.max(dir.length(), 170), 320);
  dir.normalize();
  const camPos = nodePos.clone().add(dir.clone().multiplyScalar(dist));
  const viewDir = dir.clone().negate();
  let worldUp = new Vector3(0, 1, 0);
  if (Math.abs(viewDir.dot(worldUp)) > 0.9) worldUp = new Vector3(0, 0, 1);
  const right = viewDir.clone().cross(worldUp).normalize();
  const up = right.clone().cross(viewDir).normalize();
  const fov = ((cam.fov ?? 75) * Math.PI) / 180;
  const worldPerPx = (2 * dist * Math.tan(fov / 2)) / innerHeight;
  const isMobile = innerWidth <= 760;
  const shift = isMobile
    ? up.clone().multiplyScalar(-0.3 * innerHeight * worldPerPx)
    : right.clone().multiplyScalar((Math.min(440, innerWidth * 0.5) / 2) * worldPerPx);
  const target = nodePos.clone().add(shift);
  const pos = camPos.clone().add(shift);
  Graph.cameraPosition({ x: pos.x, y: pos.y, z: pos.z }, { x: target.x, y: target.y, z: target.z }, 800);
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
  paint();
  if (pushHistory) setUrl({ term: node.id });
  hideHint();
}

function closePanel() {
  selected = null;
  panel.hidden = true;
  paint();
  setUrl({ term: null });
}

function renderPanel(node: Node) {
  $("p-chapter").textContent = `Kapitel ${node.chapter} · ${chapterTitle(node.chapter)}`;
  $("p-index").textContent = String(node.index);
  $("p-title").textContent = node.name;
  $("p-english").textContent = node.english ?? "";
  $("p-desc").textContent = node.description;
  $("p-html").innerHTML = node.html;
  $("p-misc-wrap").hidden = !node.misconception;
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
  const related = [...(neighbors.get(node.id) ?? [])].map((id) => byId.get(id)!).sort((a, b) => a.index - b.index);
  for (const r of related) {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = r.name;
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
    li.innerHTML = `<span class="r-name">${n.name}${n.english ? ` <span class="r-chapter">${n.english}</span>` : ""}</span><span class="r-desc">${n.description}</span>`;
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

// ---------- Legend (chapter filter) ----------
const legend = $("legend");
for (const c of data.chapters) {
  const b = document.createElement("button");
  b.setAttribute("aria-pressed", "false");
  b.innerHTML = `<span class="num">${c.number}</span>${c.title}`;
  b.addEventListener("click", () => {
    chapterFilter = chapterFilter === c.number ? null : c.number;
    legend.querySelectorAll("button").forEach((x, i) => x.setAttribute("aria-pressed", String(data.chapters[i].number === chapterFilter)));
    paint();
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
  Graph.backgroundColor(palette().bg);
  applyFog();
  paint();
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
    paint();
    if (initial) {
      let done = false;
      const go = () => {
        if (done) return;
        done = true;
        focusNode(n);
      };
      Graph.onEngineStop(go);
      setTimeout(go, 5500);
    } else focusNode(n);
  } else if (!initial) {
    selected = null;
    panel.hidden = true;
    paint();
  }
}
addEventListener("popstate", () => readUrl(false));
readUrl(true);

addEventListener("resize", () => Graph.width(innerWidth).height(innerHeight));
(window as any).__graph = Graph;
(window as any).__byId = byId;
