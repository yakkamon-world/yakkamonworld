// Renders the latest 3 news posts on the Home page.
// Pulls from the same YAKKAMON_POSTS data used by news.html, so this
// section always stays in sync automatically — no separate copy to
// maintain. Posts are expected newest-first in posts.js.

(function () {
  const BADGE_LABEL = { patch: "Patch Notes", event: "Event", community: "Community" };

  function badgeHTML(category) {
    return `<span class="badge badge-${category}">${BADGE_LABEL[category] || category}</span>`;
  }

  function render() {
    const grid = document.getElementById("home-news-grid");
    if (!grid || typeof YAKKAMON_POSTS === "undefined") return;

    const latest = YAKKAMON_POSTS.slice(0, 3);
    if (latest.length === 0) {
      grid.innerHTML = '<div class="empty-state">No news posted yet.</div>';
      return;
    }

    grid.innerHTML = latest.map((post) => `
      <a class="card" href="article-${post.slug}.html">
        <div class="card-top">${badgeHTML(post.category)}<time>${post.date}</time></div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="read-more">Read more &rarr;</span>
      </a>
    `).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
