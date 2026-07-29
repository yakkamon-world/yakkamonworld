// Renders the sidebar + detail view on gameplay.html

function renderGameplayPage() {
  const params = new URLSearchParams(window.location.search);
  let slug = params.get("system") || (YAKKAMON_GAMEPLAY[0] && YAKKAMON_GAMEPLAY[0].slug);
  const current = YAKKAMON_GAMEPLAY.find(g => g.slug === slug) || YAKKAMON_GAMEPLAY[0];

  const sidebar = document.getElementById("gp-sidebar-list");
  const detail = document.getElementById("gp-detail");
  if (!sidebar || !detail || typeof YAKKAMON_GAMEPLAY === "undefined") return;

  sidebar.innerHTML = YAKKAMON_GAMEPLAY.map(g => `
    <li><a href="?system=${g.slug}" class="${g.slug === current.slug ? "active" : ""}">${g.title}</a></li>
  `).join("");

  detail.innerHTML = `
    <div class="gp-detail-icon">${current.icon}</div>
    <h2>${current.title}</h2>
    <p>${current.detail}</p>
  `;
  document.title = `${current.title} — Gameplay — Yakkamon Portal`;
}

document.addEventListener("DOMContentLoaded", renderGameplayPage);
