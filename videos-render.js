// Renders the video index from videos.js into #videos-root.
// Text and links only — no thumbnails, no embeds, no third-party requests.

(function () {
  "use strict";

  const root = document.getElementById("videos-root");
  if (!root || typeof YAKKAMON_VIDEOS === "undefined") return;

  const WATCH = "https://www.youtube.com/watch?v=";

  function esc(str) {
    return String(str).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  }

  function card(v) {
    const ep = v.ep ? `<span class="vid-ep">EP ${esc(v.ep)}</span>` : "";
    const time = v.runtime ? `<span class="vid-time">${esc(v.runtime)}</span>` : "";
    const related = v.related
      ? `<a class="vid-related" href="${esc(v.related.href)}">${esc(v.related.label)} &rarr;</a>`
      : "";
    return `
      <li class="vid-item">
        <div class="vid-head">
          ${ep}${time}
          <a class="vid-title" href="${WATCH}${esc(v.id)}" target="_blank" rel="noopener">${esc(v.title)} &#8599;</a>
        </div>
        <p class="vid-blurb">${esc(v.blurb)}</p>
        <div class="vid-links">
          <a class="vid-watch" href="${WATCH}${esc(v.id)}" target="_blank" rel="noopener">&#9654; Watch on YouTube</a>
          ${related}
        </div>
      </li>`;
  }

  const html = YAKKAMON_VIDEO_BLOCKS.map((block) => {
    const items = YAKKAMON_VIDEOS.filter((v) => v.block === block.key);
    if (!items.length) return "";
    return `
      <section class="vid-block">
        <div class="section-head"><h2>${esc(block.title)}</h2></div>
        <p class="vid-note">${esc(block.note)}</p>
        <ul class="vid-list">${items.map(card).join("")}</ul>
      </section>`;
  }).join("");

  root.innerHTML = html;

  const count = document.getElementById("vid-count");
  if (count) count.textContent = YAKKAMON_VIDEOS.length;
})();
