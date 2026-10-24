import "./style.css";
import ForceGraph3D from "3d-force-graph";
import SpriteText from "three-spritetext";
import { CanvasTexture, Color, Fog, Group, Sprite, SpriteMaterial, Vector3 } from "three";
import { UI, type Lang } from "./i18n.ts";

const REPO_URL = "https://github.com/hieblle/ki-woerterbuch";

type Chapter = { number: number; title: string };
type PackMeta = { id: string; title: string; stand: string; description: string; chapters: Chapter[] };
type RawNode = {
  id: string;
  key: string;
  name: string;
  english?: string;
  aliases: string[];
  description: string;
  pack: string | null;
  chapter: number;
  index: number;
  html: string;
  misconception?: string;
  dialogue: string[];
  links: string[];
  markdown: string;
};
type Data = { lang: Lang; chapters: Chapter[]; packs: PackMeta[]; nodes: RawNode[]; links: { source: string; target: string }[] };
type Node = RawNode & { x?: number; y?: number; z?: number; fx?: number; fy?: number; fz?: number; degree: number };
type Link = { source: string | Node; target: string | Node };
type NodeObj = { node: Node; group: Group; disc: Sprite; ring: Sprite; mark: Sprite; label: SpriteText };

const loaders: Record<Lang, () => Promise<Data>> = {
  de: () => import("./generated/dictionary.de.json").then((m) => m.default as unknown as Data),
  en: () => import("./generated/dictionary.en.json").then((m) => m.default as unknown as Data),
};

// ---------- Settings from URL, storage, browser ----------
const $ = (id: string) => document.getElementById(id)!;
const params = new URLSearchParams(location.search);
function store(key: string, value: string | null) {
  try {
    value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value);
  } catch {}
}
function stored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function detectLang(): Lang {
  const p = params.get("lang");
  if (p === "de" || p === "en") return p;
  const s = stored("lang");
  if (s === "de" || s === "en") return s;
  return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}
let lang: Lang = detectLang();
let t = UI[lang];
const enabledPacks = new Set<string>(
  (params.get("ext") ?? stored("packs") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
);

// Loader texts right away, before data arrives.
function applyStaticTexts() {
  t = UI[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  $("loader-title").innerHTML = t.titleHtml;
  $("brand-title").textContent = t.title;
  $("info-title").textContent = t.title;
  $("info-eyebrow").textContent = t.about;
  $("info-license-label").textContent = t.licenseLabel;
  $("info-license").innerHTML = t.license;
  ($("search-input") as HTMLInputElement).placeholder = t.searchPlaceholder;
  $("search-input").setAttribute("aria-label", t.searchPlaceholder);
  $("hint").textContent = t.hint;
  $("l-explain").textContent = t.explanation;
  $("l-misc").textContent = t.misconception;
  $("l-dialog").textContent = t.dialogue;
  $("l-links").textContent = t.connectedWith;
  $("p-read").textContent = t.readInDictionary;
  $("p-share").textContent = t.copyLink;
  $("p-copy").textContent = t.copyMarkdown;
  $("ext-title").textContent = t.extensions;
  $("btn-ext").setAttribute("aria-label", t.extensions);
  $("btn-ext").title = t.extensions;
  $("btn-theme").setAttribute("aria-label", t.theme);
  $("btn-theme").title = t.theme;
  $("btn-close").setAttribute("aria-label", t.close);
  $("btn-info-close").setAttribute("aria-label", t.close);
  $("legend").setAttribute("aria-label", t.chapters);
  document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}
applyStaticTexts();

// ---------- Data (all languages share ids and structure) ----------
let data: Data = await loaders[lang]();
const nodes: Node[] = data.nodes.map((n) => ({ ...n, degree: 0 }));
const byId = new Map(nodes.map((n) => [n.id, n]));
const allLinks: Link[] = data.links.map((l) => ({ ...l }));
const neighbors = new Map<string, Set<string>>();
for (const l of allLinks) {
  const s = l.source as string;
  const tt = l.target as string;
  if (!neighbors.has(s)) neighbors.set(s, new Set());
  if (!neighbors.has(tt)) neighbors.set(tt, new Set());
  neighbors.get(s)!.add(tt);
  neighbors.get(tt)!.add(s);
}
const linkId = (end: string | Node) => (typeof end === "string" ? end : end.id);
const packById = () => new Map(data.packs.map((p) => [p.id, p]));
const isVisible = (n: Node) => n.pack === null || enabledPacks.has(n.pack);
const visibleNodes = () => nodes.filter(isVisible);
const visibleLinks = () => allLinks.filter((l) => isVisible(byId.get(linkId(l.source))!) && isVisible(byId.get(linkId(l.target))!));
function recomputeDegrees() {
  for (const n of nodes) n.degree = 0;
  for (const l of visibleLinks()) {
    byId.get(linkId(l.source))!.degree++;
    byId.get(linkId(l.target))!.degree++;
  }
}
recomputeDegrees();
let maxDegree = Math.max(...nodes.map((n) => n.degree));
for (const p of [...enabledPacks]) if (!packById().has(p)) enabledPacks.delete(p);

function chapterLabel(n: Node): string {
  const list = n.pack ? (packById().get(n.pack)?.chapters ?? []) : data.chapters;
  return list.find((c) => c.number === n.chapter)?.title ?? "";
}
function visibleNeighbors(n: Node): Node[] {
  return [...(neighbors.get(n.id) ?? [])]
    .map((id) => byId.get(id)!)
    .filter(isVisible)
    .sort((a, b) => (a.pack === b.pack ? a.index - b.index : a.pack === null ? -1 : 1));
}
function packNeighbors(n: Node): Map<string, Node[]> {
  const out = new Map<string, Node[]>();
  for (const id of neighbors.get(n.id) ?? []) {
    const m = byId.get(id)!;
    if (m.pack && m.pack !== n.pack) {
      if (!out.has(m.pack)) out.set(m.pack, []);
      out.get(m.pack)!.push(m);
    }
  }
  for (const list of out.values()) list.sort((a, b) => a.index - b.index);
  return out;
}

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
let engineStopped = false;
let loaderDone = false;
let unfolded = false; // set once the intro animation has placed every node
let selected: Node | null = null;
let hovered: Node | null = null;
let chapterFilter: string | null = null; // "main:1" or "<pack>:2"
const objects = new Map<string, NodeObj>();

const chapterKey = (n: Node) => `${n.pack ?? "main"}:${n.chapter}`;
const inFilter = (n: Node) => chapterFilter === null || chapterKey(n) === chapterFilter;
const focusTarget = (): Node | null => selected ?? hovered;
function linkActive(l: Link): boolean {
  const f = focusTarget();
  if (!f) return false;
  return linkId(l.source) === f.id || linkId(l.target) === f.id;
}

// ---------- Textures and node visuals ----------
function circleTexture(size = 256, ring = false): CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const r = size / 2;
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
const discTex = circleTexture();
const ringTex = circleTexture(256, true);
const radiusOf = (n: Node) => 2.2 + Math.sqrt(n.degree) * 1.55;
const toneOf = (n: Node) => {
  const p = palette();
  const tt = Math.sqrt(n.degree / Math.max(1, maxDegree));
  return p.nodeLow.clone().lerp(p.nodeHigh, tt);
};
const growing = new Map<Group, number>();
function animateGrow() {
  const now = performance.now();
  for (const [g, start] of growing) {
    const tt = Math.min(1, (now - start) / 700);
    g.scale.setScalar(Math.max(0.001, 1 - Math.pow(1 - tt, 3)));
    if (tt >= 1) growing.delete(g);
  }
  if (growing.size) requestAnimationFrame(animateGrow);
}

// ---------- Graph ----------
const el = $("graph");
const Graph = new ForceGraph3D(el, {
  controlType: "orbit",
  rendererConfig: { antialias: true, alpha: false, powerPreference: "high-performance" },
})
  .graphData({ nodes: visibleNodes(), links: visibleLinks() })
  .backgroundColor(palette().bg)
  .showNavInfo(false)
  .enableNodeDrag(false)
  .nodeLabel(() => "")
  .nodeThreeObject((n) => {
    const node = n as Node;
    const r = radiusOf(node);
    const g = new Group();
    const disc = new Sprite(new SpriteMaterial({ map: discTex, color: toneOf(node), transparent: true, depthWrite: false }));
    disc.scale.set(r * 2, r * 2, 1);
    const ring = new Sprite(new SpriteMaterial({ map: ringTex, color: palette().accent, transparent: true, depthWrite: false }));
    ring.scale.set(r * 2.9, r * 2.9, 1);
    ring.visible = false;
    const mark = new Sprite(new SpriteMaterial({ map: ringTex, color: palette().accent, transparent: true, depthWrite: false, opacity: 0.45 }));
    mark.scale.set(r * 2.35, r * 2.35, 1);
    mark.visible = node.pack !== null;
    const label = new SpriteText(node.name.toUpperCase());
    label.material.depthWrite = false;
    label.fontFace = "Montserrat, Open Sans, sans-serif";
    label.fontWeight = "600";
    label.textHeight = 2.5 + (node.degree / Math.max(1, maxDegree)) * 0.8;
    label.position.y = r + 2.6;
    label.color = palette().label;
    g.add(disc, ring, mark, label);
    if (!unfolded) g.scale.setScalar(0.001);
    else if (node.pack) {
      g.scale.setScalar(0.001);
      growing.set(g, performance.now());
      if (growing.size === 1) requestAnimationFrame(animateGrow);
    }
    objects.set(node.id, { node, group: g, disc, ring, mark, label });
    return g;
  })
  .nodeThreeObjectExtend(false)
  .linkWidth(0)
  .linkOpacity(1)
  .linkColor((l) => (!unfolded ? "rgba(0,0,0,0)" : linkActive(l as Link) ? palette().linkActive : palette().linkIdle))
  .linkDirectionalParticles((l) => (linkActive(l as Link) ? 3 : 0))
  .linkDirectionalParticleWidth(1.4)
  .linkDirectionalParticleSpeed(0.0045)
  .linkDirectionalParticleColor(() => palette().accent)
  .onNodeHover((n) => {
    const node = (n as Node | null) ?? null;
    if (hovered === node) return;
    hovered = node;
    el.style.cursor = node ? "pointer" : "grab";
    if (!selected) setAutoRotate(!node, node ? 0 : 1500);
    paint();
  })
  .onNodeClick((n) => selectNode(n as Node, true))
  .onBackgroundClick(() => {
    if (selected) closePanel();
    closeExt();
  });

// Layout is computed up front; the visible "unfold" is animated separately (see intro).
Graph.warmupTicks(140).cooldownTicks(0);
Graph.d3Force("charge")?.strength(-150);
Graph.d3Force("link")?.distance(() => 36);
Graph.cameraPosition({ x: 0, y: 0, z: 1100 });
{
  const controls = Graph.controls() as any;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.6;
  controls.zoomSpeed = 0.7;
  controls.minDistance = 60;
  controls.maxDistance = 900;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.25;
  controls.addEventListener("start", () => setAutoRotate(false));
  controls.addEventListener("end", () => {
    if (!selected && !hovered) setAutoRotate(true, 2500);
  });
}
const HOME_DISTANCE = 470;
let rotateTimer = 0;
function setAutoRotate(on: boolean, delay = 0) {
  const controls = Graph.controls() as any;
  clearTimeout(rotateTimer);
  if (!on) {
    controls.autoRotate = false;
    return;
  }
  rotateTimer = window.setTimeout(() => (controls.autoRotate = true), delay);
}
function applyFog() {
  const p = palette();
  Graph.scene().fog = new Fog(p.bg, p.fogNear, p.fogFar);
}
applyFog();

// Updates colors, rings and labels without rebuilding objects.
function paint() {
  const p = palette();
  for (const o of objects.values()) {
    const n = o.node;
    if (!isVisible(n)) continue;
    const active = inFilter(n);
    const isSel = selected?.id === n.id;
    const isHov = hovered?.id === n.id;
    const f = focusTarget();
    const isNeighbor = f ? neighbors.get(f.id)?.has(n.id) === true : false;
    (o.disc.material as SpriteMaterial).color.copy(toneOf(n));
    (o.disc.material as SpriteMaterial).opacity = active ? 1 : 0.12;
    o.ring.visible = isSel || isHov;
    (o.ring.material as SpriteMaterial).color.set(p.accent);
    (o.ring.material as SpriteMaterial).opacity = isSel ? 1 : 0.55;
    (o.mark.material as SpriteMaterial).color.set(p.accent);
    (o.mark.material as SpriteMaterial).opacity = active ? 0.45 : 0.08;
    o.label.color = isSel || isHov || isNeighbor ? p.labelStrong : p.label;
    o.label.material.opacity = active ? 1 : 0.15;
  }
  Graph.linkColor(Graph.linkColor());
  Graph.linkDirectionalParticles(Graph.linkDirectionalParticles());
}

function returnHome() {
  const cam = Graph.camera() as any;
  const controls = Graph.controls() as any;
  const dir = cam.position.clone().sub(controls.target);
  if (dir.length() < 1e-3) dir.set(0, 0, 1);
  dir.normalize().multiplyScalar(HOME_DISTANCE);
  Graph.cameraPosition({ x: dir.x, y: dir.y, z: dir.z }, { x: 0, y: 0, z: 0 }, 1100);
  setAutoRotate(true, 1200);
}

function focusNode(node: Node) {
  if (node.x === undefined || node.y === undefined || node.z === undefined) return;
  setAutoRotate(false);
  const cam = Graph.camera() as any;
  const controls = Graph.controls() as any;
  const nodePos = new Vector3(node.x, node.y, node.z);
  const currentTarget: Vector3 = controls.target.clone();
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

// ---------- Intro: loader, camera approach, node reveal ----------
const loader = $("loader");
const loaderFill = $("loader-fill");
const introStart = performance.now();
const INTRO_MIN_MS = 1500;
let progress = 0;
const progressTimer = window.setInterval(() => {
  progress = Math.min(0.9, progress + 0.07);
  loaderFill.style.width = `${progress * 100}%`;
}, 90);

Graph.onEngineStop(() => {
  if (!engineStopped) {
    engineStopped = true;
    maybeUnfold();
  }
  onEngineSettled();
});
{
  let last = "";
  const poll = () => {
    if (engineStopped) return;
    const vis = visibleNodes();
    const ready = vis.every((n) => n.x !== undefined);
    const sig = ready ? vis.map((n) => `${n.x!.toFixed(1)},${n.y!.toFixed(1)}`).join("|") : "";
    if (ready && sig === last) {
      engineStopped = true;
      maybeUnfold();
      return;
    }
    last = sig;
    requestAnimationFrame(poll);
  };
  requestAnimationFrame(poll);
}

function maybeUnfold() {
  if (unfolded || !engineStopped || !loaderDone) return;
  unfolded = true;
  const start = performance.now();
  const travel = 2000;
  const stagger = 600;
  const order = [...objects.values()].sort((a, b) => b.node.degree - a.node.degree);
  const delays = new Map(order.map((o, i) => [o.node.id, (i / order.length) * stagger]));
  const tick = () => {
    const now = performance.now();
    let pending = false;
    for (const o of objects.values()) {
      const n = o.node;
      const tt = Math.min(1, Math.max(0, (now - start - delays.get(n.id)!) / travel));
      const eased = 1 - Math.pow(1 - tt, 3);
      o.group.position.set((n.x ?? 0) * eased, (n.y ?? 0) * eased, (n.z ?? 0) * eased);
      o.group.scale.setScalar(Math.max(0.001, Math.min(1, eased * 1.4)));
      if (tt < 1) pending = true;
    }
    if (pending) requestAnimationFrame(tick);
    else {
      paint();
      if (selected) focusNode(selected);
    }
  };
  requestAnimationFrame(tick);
}

function finishIntro() {
  clearInterval(progressTimer);
  loaderFill.style.width = "100%";
  setTimeout(() => {
    loader.classList.add("done");
    loaderDone = true;
    maybeUnfold();
    if (!selected) Graph.cameraPosition({ x: 0, y: 0, z: HOME_DISTANCE }, { x: 0, y: 0, z: 0 }, 2600);
  }, 250);
}
Promise.all([document.fonts?.ready ?? Promise.resolve()]).then(() => {
  const elapsed = performance.now() - introStart;
  setTimeout(finishIntro, Math.max(0, INTRO_MIN_MS - elapsed));
});

// ---------- Packs (extensions) ----------
let settleTimer = 0;
function onEngineSettled() {
  // Release pinned nodes after a pack was added and the new nodes found their place.
  for (const n of nodes) {
    delete n.fx;
    delete n.fy;
    delete n.fz;
  }
  Graph.cooldownTicks(0);
}
function setPackEnabled(id: string, on: boolean, pushHistory = true) {
  if (!packById().has(id)) return;
  if (on === enabledPacks.has(id)) return;
  if (on) {
    enabledPacks.add(id);
    // Pin existing nodes, seed new nodes next to their neighbors, let them settle briefly.
    for (const n of visibleNodes()) {
      if (n.pack === id) continue;
      n.fx = n.x;
      n.fy = n.y;
      n.fz = n.z;
    }
    for (const n of nodes) {
      if (n.pack !== id || n.x !== undefined) continue;
      const placed = [...(neighbors.get(n.id) ?? [])].map((k) => byId.get(k)!).filter((m) => m.x !== undefined && isVisible(m) && m.pack !== id);
      const c = placed.length
        ? placed.reduce((a, m) => a.add(new Vector3(m.x, m.y, m.z)), new Vector3()).divideScalar(placed.length)
        : new Vector3();
      const len = c.length() || 1;
      const outward = c.clone().multiplyScalar(1 + 40 / len);
      n.x = outward.x + (Math.random() - 0.5) * 30;
      n.y = outward.y + (Math.random() - 0.5) * 30;
      n.z = outward.z + (Math.random() - 0.5) * 30;
    }
    Graph.warmupTicks(0).cooldownTicks(120);
    clearTimeout(settleTimer);
    settleTimer = window.setTimeout(onEngineSettled, 4000);
  } else {
    enabledPacks.delete(id);
    for (const n of nodes) if (n.pack === id) objects.delete(n.id);
    if (selected?.pack === id) closePanel();
    if (chapterFilter?.startsWith(`${id}:`)) chapterFilter = null;
  }
  recomputeDegrees();
  maxDegree = Math.max(...visibleNodes().map((n) => n.degree));
  Graph.graphData({ nodes: visibleNodes(), links: visibleLinks() });
  store("packs", [...enabledPacks].join(",") || null);
  if (pushHistory) setUrl({ ext: [...enabledPacks].join(",") || null }, true);
  renderExt();
  renderLegend();
  paint();
  if (selected) renderPanel(selected);
  if (!on) setTimeout(() => Graph.warmupTicks(140).cooldownTicks(0), 0);
}
function renderExt() {
  const list = $("ext-list");
  list.innerHTML = "";
  for (const p of data.packs) {
    const label = document.createElement("label");
    label.className = "ext-item";
    const count = nodes.filter((n) => n.pack === p.id).length;
    label.innerHTML = `<input type="checkbox" ${enabledPacks.has(p.id) ? "checked" : ""} /><div><strong>${p.title}</strong><span>${p.description}</span><span class="stand">${t.terms(count)} · ${t.stand} ${p.stand}</span></div>`;
    label.querySelector("input")!.addEventListener("change", (e) => setPackEnabled(p.id, (e.target as HTMLInputElement).checked));
    list.appendChild(label);
  }
  const badge = $("ext-badge");
  badge.hidden = enabledPacks.size === 0;
  badge.textContent = String(enabledPacks.size);
  $("btn-ext").parentElement!.hidden = data.packs.length === 0;
}
function closeExt() {
  $("ext-pop").hidden = true;
  $("btn-ext").setAttribute("aria-expanded", "false");
}
$("btn-ext").addEventListener("click", (e) => {
  e.stopPropagation();
  const pop = $("ext-pop");
  pop.hidden = !pop.hidden;
  $("btn-ext").setAttribute("aria-expanded", String(!pop.hidden));
});
$("ext-pop").addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", closeExt);

// ---------- Panel ----------
const panel = $("panel");
($("info-repo") as HTMLAnchorElement).href = REPO_URL;

function selectNode(node: Node, pushHistory: boolean) {
  if (node.pack && !enabledPacks.has(node.pack)) setPackEnabled(node.pack, true, false);
  selected = node;
  renderPanel(node);
  panel.hidden = false;
  focusNode(node);
  paint();
  if (pushHistory) setUrl({ term: node.id, ext: [...enabledPacks].join(",") || null });
  hideHint();
}
function closePanel() {
  selected = null;
  panel.hidden = true;
  paint();
  setUrl({ term: null });
  returnHome();
}
function readmeUrl(node: Node): string {
  const file = `README${node.pack ? `-${node.pack}` : ""}${lang === "en" ? ".en" : ""}.md`;
  return file === "README.md" ? `${REPO_URL}#${node.id}` : `${REPO_URL}/blob/main/${file}#${node.id}`;
}
function renderPanel(node: Node) {
  const list = visibleNodes();
  const pos = list.indexOf(node);
  $("p-chapter").textContent = `${t.chapter} ${node.chapter} · ${chapterLabel(node)}`;
  $("p-index").textContent = String(pos + 1);
  $("p-total").textContent = String(list.length);
  const packEl = $("p-pack");
  if (node.pack) {
    const p = packById().get(node.pack)!;
    packEl.hidden = false;
    packEl.textContent = `${t.extension} ${p.title} · ${t.stand} ${p.stand}`;
  } else packEl.hidden = true;
  $("p-title").textContent = node.name;
  $("p-english").textContent = lang === "de" ? (node.english ?? "") : node.name !== node.key ? node.key : "";
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
  const related = visibleNeighbors(node);
  for (const r of related) linksEl.appendChild(chip(r));
  $("p-links-wrap").hidden = related.length === 0;

  // Terms in other packs that link here.
  const wrap = $("p-packlinks-wrap");
  const pl = $("p-packlinks");
  const enable = $("p-packlinks-enable") as HTMLButtonElement;
  pl.innerHTML = "";
  wrap.hidden = true;
  enable.hidden = true;
  const groups = packNeighbors(node);
  for (const [pid, list2] of groups) {
    const p = packById().get(pid);
    if (!p) continue;
    wrap.hidden = false;
    if (enabledPacks.has(pid)) {
      $("l-packlinks").textContent = `${t.inExtension} ${p.title}`;
      for (const r of list2) pl.appendChild(chip(r));
    } else {
      $("l-packlinks").textContent = `${t.extension} ${p.title}`;
      enable.hidden = false;
      enable.textContent = t.showPackTerms(list2.length, p.title);
      enable.onclick = () => {
        setPackEnabled(pid, true);
        renderPanel(node);
      };
    }
    break;
  }

  ($("p-read") as HTMLAnchorElement).href = readmeUrl(node);
  const prev = list[pos - 1];
  const next = list[pos + 1];
  ($("p-prev") as HTMLButtonElement).disabled = !prev;
  ($("p-next") as HTMLButtonElement).disabled = !next;
  $("p-prev").textContent = prev ? `← ${prev.name}` : `← ${t.start}`;
  $("p-next").textContent = next ? `${next.name} →` : `${t.end} →`;
  panel.querySelector(".panel-body")!.scrollTop = 0;
}
function chip(n: Node): HTMLButtonElement {
  const c = document.createElement("button");
  c.className = "chip";
  c.textContent = n.name;
  c.addEventListener("click", () => selectNode(n, true));
  return c;
}
function stepSelected(dir: 1 | -1) {
  if (!selected) return;
  const list = visibleNodes();
  const target = list[list.indexOf(selected) + dir];
  if (target) selectNode(target, true);
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
$("p-prev").addEventListener("click", () => stepSelected(-1));
$("p-next").addEventListener("click", () => stepSelected(1));
$("p-share").addEventListener("click", async () => {
  if (!selected) return;
  const url = new URL(location.href);
  url.search = "";
  url.searchParams.set("term", selected.id);
  if (lang === "en") url.searchParams.set("lang", "en");
  if (selected.pack) url.searchParams.set("ext", selected.pack);
  await copy(url.toString(), t.linkCopied);
});
$("p-copy").addEventListener("click", async () => {
  if (!selected) return;
  await copy(selected.markdown, t.markdownCopied);
});
async function copy(text: string, msg: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast(msg);
  } catch {
    toast(t.copyFailed);
  }
}
let toastTimer = 0;
function toast(msg: string) {
  const tt = $("toast");
  tt.textContent = msg;
  tt.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (tt.hidden = true), 1800);
}

// ---------- Search ----------
const input = $("search-input") as HTMLInputElement;
const results = $("search-results") as HTMLUListElement;
let cursor = 0;
let matches: Node[] = [];
let hiddenMatches = new Map<string, number>();

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function score(n: Node, q: string): number {
  const name = norm(n.name);
  const alts = [n.english ?? "", n.key, ...n.aliases].map(norm);
  if (name === q) return 0;
  if (name.startsWith(q)) return 1;
  if (alts.some((a) => a === q || a.startsWith(q))) return 2;
  if (name.includes(q) || alts.some((a) => a.includes(q))) return 3;
  if (norm(n.description).includes(q)) return 4;
  return -1;
}
function search(query: string) {
  const q = norm(query.trim());
  hiddenMatches = new Map();
  if (!q) return [];
  const scored = nodes.map((n) => ({ n, s: score(n, q) })).filter((x) => x.s >= 0);
  for (const x of scored) {
    if (!isVisible(x.n)) hiddenMatches.set(x.n.pack!, (hiddenMatches.get(x.n.pack!) ?? 0) + 1);
  }
  return scored
    .filter((x) => isVisible(x.n))
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
  if (!matches.length && !hiddenMatches.size) {
    results.innerHTML = `<li class="r-empty">${t.noResults}</li>`;
    return;
  }
  matches.forEach((n, i) => {
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", String(i === cursor));
    const sub = lang === "de" ? n.english : n.name !== n.key ? n.key : "";
    const packTag = n.pack ? ` <span class="r-chapter">${packById().get(n.pack)?.title ?? n.pack}</span>` : "";
    li.innerHTML = `<span class="r-name">${n.name}${sub ? ` <span class="r-chapter">${sub}</span>` : ""}${packTag}</span><span class="r-desc">${n.description}</span>`;
    li.addEventListener("mousedown", (e) => {
      e.preventDefault();
      choose(n);
    });
    results.appendChild(li);
  });
  for (const [pid, count] of hiddenMatches) {
    const p = packById().get(pid);
    if (!p) continue;
    const li = document.createElement("li");
    li.innerHTML = `<span class="r-hint">${t.hiddenMatches(count, p.title)}</span>`;
    li.addEventListener("mousedown", (e) => {
      e.preventDefault();
      setPackEnabled(pid, true);
      matches = search(input.value);
      renderResults();
      input.focus();
    });
    results.appendChild(li);
  }
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
input.addEventListener("blur", () =>
  setTimeout(() => {
    if (document.activeElement !== input) results.hidden = true;
  }, 120),
);
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
  const el = e.target as HTMLInputElement;
  const typing = el.tagName === "INPUT" && el.type !== "checkbox";
  if (e.key === "/" && !typing) {
    e.preventDefault();
    input.focus();
    input.select();
  } else if (e.key === "Escape" && !typing) {
    if (!$("info").hidden) $("info").hidden = true;
    else if (!$("ext-pop").hidden) closeExt();
    else if (selected) closePanel();
  } else if (!typing && selected && e.key === "ArrowRight") stepSelected(1);
  else if (!typing && selected && e.key === "ArrowLeft") stepSelected(-1);
});

// ---------- Legend (chapter filter) ----------
const legend = $("legend");
function renderLegend() {
  legend.innerHTML = "";
  const add = (key: string, num: number, title: string, packTitle?: string) => {
    const b = document.createElement("button");
    b.setAttribute("aria-pressed", String(chapterFilter === key));
    b.innerHTML = `<span class="num">${packTitle ? "+" : num}</span>${title}`;
    if (packTitle) b.title = packTitle;
    b.addEventListener("click", () => {
      chapterFilter = chapterFilter === key ? null : key;
      renderLegend();
      paint();
    });
    legend.appendChild(b);
  };
  for (const c of data.chapters) add(`main:${c.number}`, c.number, c.title);
  for (const p of data.packs) {
    if (!enabledPacks.has(p.id)) continue;
    for (const c of p.chapters) add(`${p.id}:${c.number}`, c.number, c.title, p.title);
  }
}

// ---------- Language ----------
async function setLang(next: Lang) {
  if (next === lang) return;
  lang = next;
  store("lang", lang);
  data = await loaders[lang]();
  const byKey = new Map(data.nodes.map((n) => [n.id, n]));
  for (const n of nodes) Object.assign(n, byKey.get(n.id));
  for (const o of objects.values()) o.label.text = o.node.name.toUpperCase();
  applyStaticTexts();
  renderInfo();
  renderExt();
  renderLegend();
  if (selected) renderPanel(selected);
  if (input.value) {
    matches = search(input.value);
    renderResults();
  }
  setUrl({ lang: lang === "en" ? "en" : null }, true);
}
document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang as Lang)));

// ---------- Info, theme, hint ----------
function renderInfo() {
  $("info-body").innerHTML = t.infoBody(nodes.filter((n) => n.pack === null).length, data.packs.map((p) => p.title));
}
$("btn-info").addEventListener("click", () => ($("info").hidden = false));
$("btn-info-close").addEventListener("click", () => ($("info").hidden = true));
$("info").addEventListener("click", (e) => {
  if (e.target === $("info")) $("info").hidden = true;
});
$("btn-theme").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  store("theme", next);
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
function setUrl(patch: Record<string, string | null | undefined>, replace = false) {
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
    if (n.pack && !enabledPacks.has(n.pack)) setPackEnabled(n.pack, true, false);
    selected = n;
    renderPanel(n);
    panel.hidden = false;
    paint();
    if (!initial) focusNode(n);
  } else if (!initial) {
    selected = null;
    panel.hidden = true;
    paint();
    returnHome();
  }
}
addEventListener("popstate", () => readUrl(false));

renderInfo();
renderExt();
renderLegend();
readUrl(true);
addEventListener("resize", () => Graph.width(innerWidth).height(innerHeight));
(window as any).__graph = Graph;
(window as any).__byId = byId;
(window as any).__state = () => ({ engineStopped, loaderDone, unfolded, selected: selected?.id ?? null, lang, packs: [...enabledPacks] });
