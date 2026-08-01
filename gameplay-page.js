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
  detail.innerHTML = `
    <div class="gp-detail-icon">${current.icon}</div>
    <h2>${current.title}</h2>
    <p>${current.detail}</p>
  `;
  document.title = `${current.title} — Gameplay — Yakkamon Portal`;
  if (window.scrollY !== keepY) window.scrollTo(0, keepY);
  requestAnimationFrame(() => {
    if (window.scrollY !== keepY) window.scrollTo(0, keepY);
  });
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

  window.addEventListener("popstate", function () {
    const s = new URLSearchParams(window.location.search).get("system");
    gpShow(s || YAKKAMON_GAMEPLAY[0].slug, { push: false });
  });
}

document.addEventListener("DOMContentLoaded", renderGameplayPage);
