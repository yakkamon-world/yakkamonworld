// Renders the sidebar + detail view on gameplay.html
//
// Clicking a system swaps the detail panel in place instead of reloading
// the page, so the reader stays exactly where they were scrolled to.
// The URL still updates (?system=slug), so links stay shareable and the
// browser's back button works as expected.

function gpFind(slug) {
  return YAKKAMON_GAMEPLAY.find(g => g.slug === slug) || YAKKAMON_GAMEPLAY[0];
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

function gpScrollToDetail(behavior) {
  const layout = document.querySelector(".docs-layout") || document.getElementById("gp-detail");
  if (!layout) return;
  const topbar = document.querySelector(".topbar");
  const offset = topbar && getComputedStyle(topbar).position === "sticky" ? topbar.offsetHeight + 12 : 12;
  const y = layout.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, y), behavior: behavior || "smooth" });
}

function gpSetActive(slug) {
  const sidebar = document.getElementById("gp-sidebar-list");
  if (!sidebar) return;
  sidebar.querySelectorAll("a").forEach(a => {
    const isActive = a.dataset.slug === slug;
    a.classList.toggle("active", isActive);
    if (isActive) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
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

  // Real hrefs are kept so the list still works without JS, and so links
  // can be opened in a new tab or copied.
  sidebar.innerHTML = YAKKAMON_GAMEPLAY.map(g => {
    const active = g.slug === current.slug;
    return '<li><a href="?system=' + encodeURIComponent(g.slug) + '" data-slug="' + g.slug + '"' +
           ' class="' + (active ? "active" : "") + '"' + (active ? ' aria-current="true"' : "") +
           '>' + g.title + '</a></li>';
  }).join("");

  gpRenderDetail(current);

  sidebar.addEventListener("click", function (e) {
    const link = e.target.closest("a[data-slug]");
    if (!link) return;
    // Let modified clicks (new tab, new window) behave normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    gpShow(link.dataset.slug);
  });

  // Any other in-page link to ?system=… (the banner's "Start with the
  // Legendaries", cross-links inside a panel's own text, the quick
  // reference) swaps the panel too — and scrolls it into view, because a
  // full reload would land at the top of the page with the poster in the
  // way, which reads as the link doing nothing.
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
  // should land on the panel it names, not on the poster above it.
  if (params.get("system") && gpFind(params.get("system")).slug === params.get("system")) {
    requestAnimationFrame(function () { gpScrollToDetail("auto"); });
  }

  window.addEventListener("popstate", function () {
    const s = new URLSearchParams(window.location.search).get("system");
    gpShow(s || YAKKAMON_GAMEPLAY[0].slug, { push: false });
  });
}

document.addEventListener("DOMContentLoaded", renderGameplayPage);
