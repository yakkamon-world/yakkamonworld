// Renders the "Every system, explained" section on gameplay.html — the
// grouped system board and the reader underneath it — and runs the page's
// other navigation helpers: the sticky jump bar, the quick-reference filter
// and the collapsible folds.
//
// Redesigned October 14, 2026 (second pass): the narrow sticky sidebar and
// the phone-only <select> are gone. All 27 systems now sit on one wide board,
// a row per group, and the chosen system opens in a reader panel below with
// lighter body text, the paragraph lead-ins promoted to subheadings, an
// "In this system" list on the long ones, and previous / next buttons.
// On phones the board folds behind one "All 27 systems" button.
//
// Picking a system swaps the reader in place instead of reloading the page.
// The URL still updates (?system=slug), so links stay shareable and the
// browser's back button works as expected.

// Board groups, in board order. Every slug in YAKKAMON_GAMEPLAY must appear
// in exactly one group; anything left over is rendered under "More" so a new
// system can never vanish from the board. `key` picks the group's color
// (.gp-g-<key> in style.css). Previous / next in the reader follow this order.
const GP_GROUPS = [
  { key: "shape", label: "The shape of it", slugs: ["two-halves", "core-loop"] },
  { key: "yakkamon", label: "Your Yakkamon", slugs: ["creature-collecting", "genesis-legendaries", "rarity-tiers", "utilities-auras", "boost-stacking", "breeding-genetics", "evolutions"] },
  { key: "farm", label: "The farm", slugs: ["type-locking", "work-cycle", "upkeep", "storage-bins", "monster-care", "your-base"] },
  { key: "world", label: "The world", slugs: ["regional-exploration", "logistics", "day-night-cycle", "seasonal-system"] },
  { key: "hunting", label: "Hunting", slugs: ["hunting", "crafting-hunting", "contracts"] },
  { key: "battles", label: "Battles", slugs: ["combat-system", "arena-battles"] },
  { key: "economy", label: "Economy & launch", slugs: ["economy-layers", "endgame", "platform-access"] }
];

function gpFind(slug) {
  return YAKKAMON_GAMEPLAY.find(g => g.slug === slug) || YAKKAMON_GAMEPLAY[0];
}

function gpGrouped() {
  const seen = new Set();
  const groups = GP_GROUPS.map(gr => ({
    key: gr.key,
    label: gr.label,
    items: gr.slugs.map(s => { seen.add(s); return YAKKAMON_GAMEPLAY.find(g => g.slug === s); }).filter(Boolean)
  })).filter(gr => gr.items.length);
  const rest = YAKKAMON_GAMEPLAY.filter(g => !seen.has(g.slug));
  if (rest.length) groups.push({ key: "more", label: "More", items: rest });
  return groups;
}

// Every system in board order, each with its group.
function gpOrder() {
  const out = [];
  gpGrouped().forEach(gr => gr.items.forEach(sys => out.push({ sys: sys, group: gr })));
  return out;
}

function gpEsc(s) {
  return String(s).replace(/&(?![a-z#0-9]+;)/gi, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function gpSystemHref(slug) {
  return "?system=" + encodeURIComponent(slug);
}

// ---- Board ----
function gpRenderMap(currentSlug) {
  const wrap = document.getElementById("gp-map-groups");
  if (!wrap) return;
  const label = document.querySelector("#gp-map-toggle .gp-map-toggle-label");
  if (label) label.textContent = "All " + YAKKAMON_GAMEPLAY.length + " systems";
  // Real hrefs are kept so every system can be opened in a new tab or copied.
  wrap.innerHTML = gpGrouped().map(gr => {
    const n = gr.items.length;
    const chips = gr.items.map(g => {
      const active = g.slug === currentSlug;
      return '<li><a class="gp-chip' + (active ? " active" : "") + '" href="' + gpSystemHref(g.slug) + '" data-slug="' + g.slug + '"' +
             (active ? ' aria-current="true"' : "") + '>' +
             '<span class="gp-chip-icon" aria-hidden="true">' + g.icon + '</span>' +
             '<span class="gp-chip-name">' + g.title + '</span></a></li>';
    }).join("");
    return '<div class="gp-map-row gp-g-' + gr.key + '">' +
             '<p class="gp-map-label"><span class="gp-map-name">' + gr.label.replace(/&(?!amp;)/g, "&amp;") + '</span>' +
             '<span class="gp-map-n">' + n + (n === 1 ? " system" : " systems") + '</span></p>' +
             '<ul class="gp-map-list">' + chips + '</ul>' +
           '</div>';
  }).join("");
}

function gpSetActive(slug) {
  document.querySelectorAll("#gp-map-groups a.gp-chip").forEach(a => {
    const isActive = a.dataset.slug === slug;
    a.classList.toggle("active", isActive);
    if (isActive) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
  const now = document.getElementById("gp-map-now");
  if (now) {
    const tmp = document.createElement("div");
    tmp.innerHTML = gpFind(slug).title;
    now.textContent = "Reading: " + tmp.textContent;
  }
}

// Phones only: the board folds behind the "All 27 systems" button.
function gpMapIsFolding() {
  const toggle = document.getElementById("gp-map-toggle");
  return !!toggle && getComputedStyle(toggle).display !== "none";
}

function gpMapOpen(open) {
  const map = document.getElementById("gp-map");
  const toggle = document.getElementById("gp-map-toggle");
  if (!map || !toggle) return;
  map.classList.toggle("open", !!open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

// ---- Reader ----

// The panel text in gameplay.js is one run of HTML with <br><br> between
// paragraphs. Turn it into real paragraphs, and promote a bold lead-in
// sentence at the start of a paragraph ("Beds are capacity.", "1. The setup
// stage.", "Unpublished:") into a subheading, so the bold isn't doing the
// work of structure. Lists, tables and other blocks pass through untouched.
function gpBuildProse(html, slug) {
  const src = document.createElement("div");
  src.innerHTML = html;
  const box = document.createElement("div");
  box.className = "gp-prose";
  const BLOCK = /^(DIV|UL|OL|TABLE|FIGURE|BLOCKQUOTE|H3|H4|P)$/;
  let p = null;
  let brs = 0;

  function flush() {
    if (p) {
      while (p.firstChild && p.firstChild.nodeType === 3 && !p.firstChild.textContent.trim()) p.removeChild(p.firstChild);
      while (p.lastChild && (p.lastChild.nodeName === "BR" || (p.lastChild.nodeType === 3 && !p.lastChild.textContent.trim()))) p.removeChild(p.lastChild);
      if (p.childNodes.length) box.appendChild(p);
    }
    p = null;
  }

  Array.from(src.childNodes).forEach(node => {
    if (node.nodeName === "BR") { brs++; if (brs >= 2) { flush(); brs = 0; } return; }
    if (node.nodeType === 3 && !node.textContent.trim()) { if (p) p.appendChild(node); return; }
    if (brs === 1 && p) p.appendChild(document.createElement("br"));
    brs = 0;
    if (node.nodeType === 1 && BLOCK.test(node.nodeName)) { flush(); box.appendChild(node); return; }
    if (!p) p = document.createElement("p");
    p.appendChild(node);
  });
  flush();

  const heads = [];
  Array.from(box.children).forEach(para => {
    if (para.nodeName !== "P") return;
    const first = para.firstChild;
    if (!first || first.nodeName !== "STRONG") return;
    const text = first.textContent.trim();
    const ok = text.length <= 100 && (/[.?!]$/.test(text) || (/:$/.test(text) && text.length <= 30));
    if (!ok) return;
    const h = document.createElement("h3");
    h.className = "gp-sub";
    h.innerHTML = first.innerHTML;
    // Drop the sentence's own full stop / colon; keep ? and !.
    const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    let last = null, t;
    while ((t = walker.nextNode())) if (t.textContent.trim()) last = t;
    if (last) last.textContent = last.textContent.replace(/[.:]\s*$/, "");
    h.id = "gp-" + slug + "-" + (heads.length + 1);
    para.removeChild(first);
    while (para.firstChild && para.firstChild.nodeType === 3 && !para.firstChild.textContent.trim()) para.removeChild(para.firstChild);
    if (para.firstChild && para.firstChild.nodeType === 3) para.firstChild.textContent = para.firstChild.textContent.replace(/^\s+/, "");
    box.insertBefore(h, para);
    if (!para.childNodes.length) box.removeChild(para);
    heads.push(h);
  });
  return { box: box, heads: heads };
}

function gpRenderDetail(current) {
  const detail = document.getElementById("gp-detail");
  if (!detail) return;
  // Hold the scroll position across the swap: replacing the panel's
  // contents can otherwise make the browser re-anchor and jump.
  const keepY = window.scrollY;

  const order = gpOrder();
  const i = Math.max(0, order.findIndex(o => o.sys.slug === current.slug));
  const group = (order[i] || {}).group || { key: "more", label: "More" };
  const prev = i > 0 ? order[i - 1].sys : null;
  const next = i < order.length - 1 ? order[i + 1].sys : null;

  const built = gpBuildProse(current.detail, current.slug);
  const words = built.box.textContent.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));

  const tmp = document.createElement("div");
  function plain(html) { tmp.innerHTML = html; return tmp.textContent; }

  const step = (sys, dir) => sys
    ? '<a class="gp-step ' + dir + '" href="' + gpSystemHref(sys.slug) + '" aria-label="' + (dir === "prev" ? "Previous" : "Next") + ' system: ' + gpEsc(plain(sys.title)) + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + (dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7") + '" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>'
    : '<span class="gp-step ' + dir + ' off" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="' + (dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7") + '" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  const pn = (sys, dir) => sys
    ? '<a class="gp-pn ' + dir + '" href="' + gpSystemHref(sys.slug) + '"><small>' + (dir === "prev" ? "Previous" : "Next up") + '</small><span>' + sys.title + '</span></a>'
    : '<a class="gp-pn ' + dir + ' gp-pn-all" href="#systems" data-gp-all><small>' + (dir === "prev" ? "Start of the list" : "That was the last one") + '</small><span>Back to all ' + order.length + ' systems</span></a>';

  const note = current.like
    ? '<aside class="gp-note"><p class="gp-note-tag">Like this</p><p>' + current.like + '</p></aside>'
    : "";

  // Long systems get an "In this system" list of their subheadings — open on
  // wide screens, folded on phones so it doesn't push the text a screen down.
  const tocOpen = !window.matchMedia || !window.matchMedia("(max-width: 760px)").matches;
  const toc = built.heads.length >= 4
    ? '<details class="gp-toc"' + (tocOpen ? " open" : "") + '><summary><span class="gp-toc-label">In this system</span>' +
      '<span class="gp-toc-n">' + built.heads.length + ' parts</span></summary><ul>' +
      built.heads.map(h => '<li><a href="#' + h.id + '">' + h.innerHTML + '</a></li>').join("") +
      '</ul></details>'
    : "";

  detail.className = "gp-reader gp-g-" + group.key;
  detail.innerHTML =
    '<header class="gp-reader-head">' +
      '<div class="gp-reader-bar">' +
        '<span class="gp-reader-icon" aria-hidden="true">' + current.icon + '</span>' +
        '<span class="gp-reader-meta"><span class="gp-reader-group">' + group.label.replace(/&(?!amp;)/g, "&amp;") + '</span>' +
        '<span class="gp-reader-pos">System ' + (i + 1) + ' of ' + order.length + ', about a ' + minutes + '-minute read</span></span>' +
        '<span class="gp-reader-steps">' + step(prev, "prev") + step(next, "next") + '</span>' +
      '</div>' +
      '<h2 class="gp-reader-title" id="gp-reader-title" tabindex="-1">' + current.title + '</h2>' +
    '</header>' +
    '<div class="gp-reader-body">' + note + toc + '<div class="gp-prose-slot"></div></div>' +
    '<nav class="gp-reader-foot" aria-label="Previous and next system">' + pn(prev, "prev") + pn(next, "next") + '</nav>';
  detail.querySelector(".gp-prose-slot").replaceWith(built.box);

  document.title = `${plain(current.title)} — Gameplay — Yakkamon Portal`;
  if (window.scrollY !== keepY) window.scrollTo(0, keepY);
  requestAnimationFrame(() => {
    if (window.scrollY !== keepY) window.scrollTo(0, keepY);
  });
}

function gpStickyOffset() {
  const topbar = document.querySelector(".topbar");
  const jump = document.querySelector(".gp-jump");
  let offset = 12;
  if (topbar && getComputedStyle(topbar).position === "sticky") offset += topbar.offsetHeight;
  if (jump && getComputedStyle(jump).position === "sticky") offset += jump.offsetHeight;
  return offset;
}

function gpScrollToDetail(behavior) {
  const reader = document.getElementById("gp-detail");
  if (!reader) return;
  const y = reader.getBoundingClientRect().top + window.scrollY - gpStickyOffset();
  const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: Math.max(0, y), behavior: behavior || (calm ? "auto" : "smooth") });
}

function gpShow(slug, opts) {
  const push = !opts || opts.push !== false;
  const current = gpFind(slug);
  gpRenderDetail(current);
  gpSetActive(current.slug);

  if (push) {
    // pushState never scrolls on its own, but keep the position explicitly
    // so a future change here can't reintroduce the jump to top.
    const y = window.scrollY;
    history.pushState({ system: current.slug }, "", gpSystemHref(current.slug));
    if (window.scrollY !== y) window.scrollTo(0, y);
  }
}

function renderGameplayPage() {
  const detail = document.getElementById("gp-detail");
  if (!detail || typeof YAKKAMON_GAMEPLAY === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("system") || (YAKKAMON_GAMEPLAY[0] && YAKKAMON_GAMEPLAY[0].slug);
  const current = gpFind(slug);

  gpRenderMap(current.slug);
  gpRenderDetail(current);
  gpSetActive(current.slug);

  const toggle = document.getElementById("gp-map-toggle");
  if (toggle) toggle.addEventListener("click", function () {
    gpMapOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Every in-page link to ?system=… (the board, previous / next, the banner's
  // links, cross-links inside a panel's own text, the quick reference, the
  // Genesis cards) swaps the reader and brings it into view, because a full
  // reload would land at the top of the page, which reads as the link doing
  // nothing.
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href]");
    if (!link) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    // "Back to all N systems": on phones, open the folded board too.
    if (link.hasAttribute("data-gp-all")) {
      if (gpMapIsFolding()) gpMapOpen(true);
      return;
    }

    // Plain #anchor links (the "In this system" list, the jump bar) are
    // ordinary in-page jumps, even though they resolve against ?system=….
    if (link.getAttribute("href").charAt(0) === "#") return;
    let url;
    try { url = new URL(link.getAttribute("href"), window.location.href); } catch (err) { return; }
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
    const s = url.searchParams.get("system");
    if (!s || !YAKKAMON_GAMEPLAY.some(g => g.slug === s)) return;
    e.preventDefault();
    gpShow(s);
    if (gpMapIsFolding()) gpMapOpen(false);
    gpScrollToDetail();
    const title = document.getElementById("gp-reader-title");
    if (title) title.focus({ preventScroll: true });
  });

  // A deep link from another page (?system=slug in the URL on arrival)
  // should land on the reader, not on the sections above it.
  if (params.get("system") && gpFind(params.get("system")).slug === params.get("system") && !window.location.hash) {
    requestAnimationFrame(function () { gpScrollToDetail("auto"); });
  }

  window.addEventListener("popstate", function () {
    const s = new URLSearchParams(window.location.search).get("system");
    const want = gpFind(s || YAKKAMON_GAMEPLAY[0].slug);
    // A hash jump inside the same system (the "In this system" links) also
    // fires popstate on Back — don't rebuild the panel for that.
    const shown = document.getElementById("gp-reader-title");
    const tmp = document.createElement("div"); tmp.innerHTML = want.title;
    if (shown && shown.textContent === tmp.textContent) return;
    gpShow(want.slug, { push: false });
  });
}

// ---- Jump bar: sticky offset under the tab strip, and the active pill ----
function gpJumpBar() {
  const jump = document.querySelector(".gp-jump");
  if (!jump) return;
  const topbar = document.querySelector(".topbar");
  function setOffset() {
    const sticky = topbar && getComputedStyle(topbar).position === "sticky";
    document.documentElement.style.setProperty("--gp-top", (sticky ? topbar.offsetHeight : 0) + "px");
  }
  setOffset();
  window.addEventListener("resize", setOffset);

  const links = Array.from(jump.querySelectorAll('a[href^="#"]'));
  const targets = links.map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  if ("IntersectionObserver" in window && targets.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    targets.forEach(t => io.observe(t));
  }

  // Jumping to a folded section opens its fold, so "Quick Reference" shows
  // the table rather than a closed box.
  jump.addEventListener("click", function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const sec = document.getElementById(a.getAttribute("href").slice(1));
    if (!sec) return;
    const fold = sec.matches("details") ? sec : sec.querySelector("details.gp-fold");
    if (fold) fold.open = true;
  });
}

// ---- Folds: open the fold that holds a deep-link target (#roster, #numbers-table, a table row…) ----
function gpOpenFoldForHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const fold = target.closest("details.gp-fold");
  if (fold && !fold.open) fold.open = true;
  const sec = target.matches("section") ? target.querySelector("details.gp-fold") : null;
  if (sec && !sec.open) sec.open = true;
  requestAnimationFrame(function () {
    const y = target.getBoundingClientRect().top + window.scrollY - gpStickyOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  });
}

// ---- Quick-reference filter ----
function gpNumbersFilter() {
  const input = document.getElementById("gp-filter");
  const table = document.getElementById("gp-numbers-table");
  const empty = document.getElementById("gp-filter-empty");
  const fold = document.getElementById("numbers-table");
  if (!input || !table) return;
  const rows = Array.from(table.querySelectorAll("tr")).filter(tr => !tr.querySelector("th"));
  let timer = null;
  function apply() {
    const q = input.value.trim().toLowerCase();
    let hits = 0;
    rows.forEach(tr => {
      const hit = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
      tr.hidden = !hit;
      tr.classList.toggle("gp-numbers-hit", !!q && hit);
      if (hit) hits++;
    });
    if (empty) empty.hidden = !(q && hits === 0);
    if (q && fold && !fold.open) fold.open = true;
  }
  input.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(apply, 80);
  });
  input.addEventListener("search", apply);
}

document.addEventListener("DOMContentLoaded", function () {
  renderGameplayPage();
  gpJumpBar();
  gpNumbersFilter();
  gpOpenFoldForHash();
});
window.addEventListener("hashchange", gpOpenFoldForHash);
