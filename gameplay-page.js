// Renders the sidebar + detail view on gameplay.html, and runs the page's
// navigation helpers (added October 14, 2026 with the page redesign): the
// grouped sidebar, the phone-only system picker, the sticky jump bar, the
// quick-reference filter and the collapsible folds.
//
// Clicking a system swaps the detail panel in place instead of reloading
// the page, so the reader stays exactly where they were scrolled to.
// The URL still updates (?system=slug), so links stay shareable and the
// browser's back button works as expected.

// Sidebar groups. Every slug in YAKKAMON_GAMEPLAY must appear in exactly one
// group; anything left over is rendered under "More" so a new system can
// never vanish from the list.
const GP_GROUPS = [
  { label: "The shape of it", slugs: ["two-halves", "core-loop"] },
  { label: "Your Yakkamon", slugs: ["creature-collecting", "genesis-legendaries", "rarity-tiers", "utilities-auras", "boost-stacking", "breeding-genetics", "evolutions"] },
  { label: "The farm", slugs: ["type-locking", "work-cycle", "upkeep", "storage-bins", "monster-care", "your-base"] },
  { label: "The world", slugs: ["regional-exploration", "logistics", "day-night-cycle", "seasonal-system"] },
  { label: "Hunting", slugs: ["hunting", "crafting-hunting", "contracts"] },
  { label: "Battles", slugs: ["combat-system", "arena-battles"] },
  { label: "Economy & launch", slugs: ["economy-layers", "endgame", "platform-access"] }
];

function gpFind(slug) {
  return YAKKAMON_GAMEPLAY.find(g => g.slug === slug) || YAKKAMON_GAMEPLAY[0];
}

function gpGrouped() {
  const seen = new Set();
  const groups = GP_GROUPS.map(gr => ({
    label: gr.label,
    items: gr.slugs.map(s => { seen.add(s); return YAKKAMON_GAMEPLAY.find(g => g.slug === s); }).filter(Boolean)
  })).filter(gr => gr.items.length);
  const rest = YAKKAMON_GAMEPLAY.filter(g => !seen.has(g.slug));
  if (rest.length) groups.push({ label: "More", items: rest });
  return groups;
}

function gpRenderDetail(current) {
  const detail = document.getElementById("gp-detail");
  if (!detail) return;
  // Hold the scroll position across the swap: replacing the panel's
  // contents can otherwise make the browser re-anchor and jump.
  const keepY = window.scrollY;
  const like = current.like
    ? `<div class="gp-like"><span class="gp-like-tag">LIKE THIS</span><p>${current.like}</p></div>`
    : "";
  detail.innerHTML = `
    <div class="gp-detail-icon">${current.icon}</div>
    <h2>${current.title}</h2>
    <p>${current.detail}</p>
    ${like}
  `;
  document.title = `${current.title} — Gameplay — Yakkamon Portal`;
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
  const layout = document.querySelector(".docs-layout") || document.getElementById("gp-detail");
  if (!layout) return;
  const y = layout.getBoundingClientRect().top + window.scrollY - gpStickyOffset();
  window.scrollTo({ top: Math.max(0, y), behavior: behavior || "smooth" });
}

function gpSetActive(slug) {
  const sidebar = document.getElementById("gp-sidebar-list");
  if (sidebar) {
    sidebar.querySelectorAll("a").forEach(a => {
      const isActive = a.dataset.slug === slug;
      a.classList.toggle("active", isActive);
      if (isActive) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  const select = document.getElementById("gp-select");
  if (select && select.value !== slug) select.value = slug;
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
    history.pushState({ system: current.slug }, "", "?system=" + encodeURIComponent(current.slug));
    if (window.scrollY !== y) window.scrollTo(0, y);
  }
}

function renderGameplayPage() {
  const sidebar = document.getElementById("gp-sidebar-list");
  const detail = document.getElementById("gp-detail");
  if (!sidebar || !detail || typeof YAKKAMON_GAMEPLAY === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("system") || (YAKKAMON_GAMEPLAY[0] && YAKKAMON_GAMEPLAY[0].slug);
  const current = gpFind(slug);
  const groups = gpGrouped();

  // Real hrefs are kept so the list still works without JS, and so links
  // can be opened in a new tab or copied.
  sidebar.innerHTML = groups.map(gr => {
    const head = '<li class="sidebar-group" aria-hidden="true">' + gr.label + '</li>';
    const items = gr.items.map(g => {
      const active = g.slug === current.slug;
      return '<li><a href="?system=' + encodeURIComponent(g.slug) + '" data-slug="' + g.slug + '"' +
             ' class="' + (active ? "active" : "") + '"' + (active ? ' aria-current="true"' : "") +
             '>' + g.title + '</a></li>';
    }).join("");
    return head + items;
  }).join("");

  // Phone-only picker (the long list is hidden under 760px by CSS).
  const select = document.getElementById("gp-select");
  if (select) {
    const tmp = document.createElement("div");
    select.innerHTML = groups.map(gr => {
      tmp.innerHTML = gr.label; const label = tmp.textContent;
      return '<optgroup label="' + label.replace(/"/g, "&quot;") + '">' + gr.items.map(g => {
        tmp.innerHTML = g.title;
        return '<option value="' + g.slug + '"' + (g.slug === current.slug ? " selected" : "") + '>' + tmp.textContent + '</option>';
      }).join("") + '</optgroup>';
    }).join("");
    select.addEventListener("change", function () {
      gpShow(select.value);
      gpScrollToDetail();
    });
  }

  gpRenderDetail(current);

  sidebar.addEventListener("click", function (e) {
    const link = e.target.closest("a[data-slug]");
    if (!link) return;
    // Let modified clicks (new tab, new window) behave normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    gpShow(link.dataset.slug);
    // The list is sticky and scrolls on its own on desktop, so the panel's
    // top can be above the viewport by the time a lower item is clicked —
    // bring it back rather than leave the reader staring at the list.
    if (detail.getBoundingClientRect().top < gpStickyOffset()) gpScrollToDetail();
  });

  // Any other in-page link to ?system=… (the banner's "Start with…", cross-
  // links inside a panel's own text, the quick reference, the Genesis cards)
  // swaps the panel too — and scrolls it into view, because a full reload
  // would land at the top of the page, which reads as the link doing nothing.
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href]");
    if (!link || link.closest("#gp-sidebar-list")) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    let url;
    try { url = new URL(link.getAttribute("href"), window.location.href); } catch (err) { return; }
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
    const s = url.searchParams.get("system");
    if (!s || !YAKKAMON_GAMEPLAY.some(g => g.slug === s)) return;
    e.preventDefault();
    gpShow(s);
    gpScrollToDetail();
  });

  // A deep link from another page (?system=slug in the URL on arrival)
  // should land on the panel it names, not on the sections above it.
  if (params.get("system") && gpFind(params.get("system")).slug === params.get("system") && !window.location.hash) {
    requestAnimationFrame(function () { gpScrollToDetail("auto"); });
  }

  window.addEventListener("popstate", function () {
    const s = new URLSearchParams(window.location.search).get("system");
    gpShow(s || YAKKAMON_GAMEPLAY[0].slug, { push: false });
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
