// Renders the full news archive with sidebar category filtering (news.html)
// Filtering via ?category= URL parameter so sidebar links are plain <a> tags.

const BADGE_LABEL_N = { patch: "Patch Notes", event: "Event", community: "Community", guideline: "Guideline", tips: "Tip" };
const CATEGORY_LABELS = { all: "All posts", tips: "Tips", guideline: "Guidelines", patch: "Patch Notes", event: "Events", community: "Community" };

function badgeHTMLN(category) {
  return `<span class="badge badge-${category}">${BADGE_LABEL_N[category] || category}</span>`;
}

function currentCategory() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category") || "all";
}

function renderSidebar() {
  const list = document.getElementById("news-sidebar-list");
  if (!list || typeof YAKKAMON_POSTS === "undefined") return;
  const active = currentCategory();
  const counts = { all: YAKKAMON_POSTS.length, tips: 0, guideline: 0, patch: 0, event: 0, community: 0 };
  YAKKAMON_POSTS.forEach(p => counts[p.category] = (counts[p.category] || 0) + 1);

  list.innerHTML = Object.keys(CATEGORY_LABELS).map(cat => `
    <li><a href="?category=${cat}" class="${cat === active ? "active" : ""}">
      ${CATEGORY_LABELS[cat]}<span class="sidebar-count">${counts[cat] || 0}</span>
    </a></li>
  `).join("");
}

function renderArchive() {
  const grid = document.getElementById("archive-grid");
  if (!grid || typeof YAKKAMON_POSTS === "undefined") return;
  const active = currentCategory();
  const posts = active === "all" ? YAKKAMON_POSTS : YAKKAMON_POSTS.filter(p => p.category === active);
  if (posts.length === 0) {
    grid.innerHTML = `<div class="empty-state">No posts in this category yet.</div>`;
    return;
  }
  grid.innerHTML = posts.map(post => `
    <a class="card" href="article-${post.slug}.html">
      <div class="card-top">${badgeHTMLN(post.category)}<time>${post.date}</time></div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <span class="read-more">Read more &rarr;</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderArchive();
});
