// Renders the full news archive with sidebar category filtering (news.html)
// Filtering via ?category= URL parameter so sidebar links are plain <a> tags.

// Category keys live in posts.js. Keep these three maps (and style.css .badge-*) in sync.
const BADGE_LABEL_N = { official: "Official News", devstream: "Dev Stream", analysis: "Analysis", guide: "Guide", tips: "Tip", portal: "Portal Update" };
const CATEGORY_LABELS = { all: "All posts", official: "Official News", devstream: "Dev Streams", analysis: "Analysis", guide: "Guides", tips: "Tips", portal: "Portal Updates" };
// Old ?category= values still shared elsewhere resolve to the nearest new group.
const LEGACY_CATEGORY = { event: "official", community: "devstream", guideline: "guide", patch: "official" };

function badgeHTMLN(category) {
  return `<span class="badge badge-${category}">${BADGE_LABEL_N[category] || category}</span>`;
}

function currentCategory() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category") || "all";
  return LEGACY_CATEGORY[cat] || cat;
}

function renderSidebar() {
  const list = document.getElementById("news-sidebar-list");
  if (!list || typeof YAKKAMON_POSTS === "undefined") return;
  const active = currentCategory();
  const counts = { all: YAKKAMON_POSTS.length };
  Object.keys(CATEGORY_LABELS).forEach(c => { if (c !== "all") counts[c] = 0; });
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
