// Renders the latest 5 news posts on the Home page.
// Pulls from the same YAKKAMON_POSTS data used by news.html, so this
// section always stays in sync automatically — no separate copy to
// maintain. Posts are expected newest-first in posts.js.
// Rendered as a compact one-row-per-post list (not full cards) so it
// stays short on the homepage — full detail lives on the News page.

(function () {
  const BADGE_LABEL = { patch: "Patch Notes", event: "Event", community: "Community", guideline: "Guideline", tips: "Tip" };

  function badgeHTML(category) {
    return `<span class="badge badge-${category}">${BADGE_LABEL[category] || category}</span>`;
  }

  function render() {
    const grid = document.getElementById("home-news-grid");
    if (!grid || typeof YAKKAMON_POSTS === "undefined") return;

    const HOME_NEWS_COUNT = 5;
    const latest = YAKKAMON_POSTS.slice(0, HOME_NEWS_COUNT);
    if (latest.length === 0) {
      grid.innerHTML = '<div class="empty-state">No news posted yet.</div>';
      return;
    }

    grid.className = "home-news-list";
    grid.innerHTML = latest.map((post) => `
      <a class="home-news-row" href="article-${post.slug}.html">
        ${badgeHTML(post.category)}
        <h3>${post.title}</h3>
        <time>${post.date}</time>
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
