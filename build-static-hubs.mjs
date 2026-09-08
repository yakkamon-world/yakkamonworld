#!/usr/bin/env node
/*
  STATIC HUB BUILDER
  ==================
  Writes a static, crawlable copy of the JavaScript-rendered hubs straight
  into their HTML, so the pages carry real content before any script runs:

    news.html    -> #news-sidebar-list (category list with counts)
                    #archive-grid      (every post card, newest first)
    index.html   -> #home-news-grid    (latest 5 posts, same rows home-news.js draws)
    videos.html  -> #videos-root       (every video, same blocks videos-render.js draws)
                    #vid-count         (video total)
    faq.html     -> #faq-meta, #faq-pills, #faq-content (every topic and question)

  The runtime scripts (news.js, home-news.js, videos-render.js, faq-render.js)
  still run on load and replace this markup with their own identical output,
  so nothing changes for a visitor with JavaScript - but a crawler, a reader
  with scripts blocked, or a reviewer on a slow connection sees the finished
  page instead of "Loading...".

  The output sits between marker comments so the build is repeatable:

      <!-- static-hubs:start archive --> ... <!-- static-hubs:end archive -->

  Run it from the repo root after editing posts.js, videos.js or faq.js:

      node build-static-hubs.mjs

  The GitHub Action in .github/workflows/chatbot-knowledge.yml runs it on
  every push to main and commits the result, so the manual run is only
  needed if the Action is disabled. No dependencies. Node 18+.
*/
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

// Evaluate a browser data file (const/var at top level) and pull out its globals.
function loadData(file, names) {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(read(file).replace(/\bconst\s+/g, "var "), ctx, { filename: file });
  const out = {};
  for (const n of names) {
    if (typeof ctx[n] === "undefined") throw new Error(`${file} did not define ${n}`);
    out[n] = ctx[n];
  }
  return out;
}

function esc(str) {
  return String(str).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Replace (or create) the block between the markers inside the element
// whose opening tag contains `anchor`. The element must be non-self-closing.
function fill(html, anchor, name, content, { replaceInner = true } = {}) {
  const start = `<!-- static-hubs:start ${name} -->`;
  const end = `<!-- static-hubs:end ${name} -->`;
  const block = `${start}\n${content}\n${end}`;
  const s = html.indexOf(start), e = html.indexOf(end);
  if (s !== -1 && e !== -1) return html.slice(0, s) + block + html.slice(e + end.length);
  const i = html.indexOf(anchor);
  if (i === -1) throw new Error(`anchor not found: ${anchor}`);
  const open = html.indexOf(">", i) + 1;
  if (!replaceInner) return html.slice(0, open) + block + html.slice(open);
  // Skip to the element's closing tag: find the matching close by depth on the same tag name.
  const lt = html.lastIndexOf("<", i);
  const tag = /<([a-z0-9]+)/i.exec(html.slice(lt))[1];
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
  re.lastIndex = open;
  let depth = 1, m;
  while ((m = re.exec(html))) {
    depth += m[1] ? -1 : 1;
    if (depth === 0) return html.slice(0, open) + block + html.slice(m.index);
  }
  throw new Error(`unclosed element for ${anchor}`);
}

function write(file, html, before) {
  if (html !== before) { fs.writeFileSync(path.join(ROOT, file), html); console.log("updated", file); }
  else console.log("unchanged", file);
}

// ---------------------------------------------------------------- posts
const { YAKKAMON_POSTS } = loadData("posts.js", ["YAKKAMON_POSTS"]);
const BADGE = { official: "Official News", devstream: "Dev Stream", analysis: "Analysis", guide: "Guide", tips: "Tip", portal: "Portal Update" };
const CATS = { all: "All posts", official: "Official News", devstream: "Dev Streams", analysis: "Analysis", guide: "Guides", tips: "Tips", portal: "Portal Updates" };
const badge = (c) => `<span class="badge badge-${c}">${BADGE[c] || c}</span>`;

{
  const before = read("news.html");
  const counts = { all: YAKKAMON_POSTS.length };
  for (const p of YAKKAMON_POSTS) counts[p.category] = (counts[p.category] || 0) + 1;
  const sidebar = Object.keys(CATS).map((cat) =>
    `    <li><a href="?category=${cat}" class="${cat === "all" ? "active" : ""}">${CATS[cat]}<span class="sidebar-count">${counts[cat] || 0}</span></a></li>`
  ).join("\n");
  const cards = YAKKAMON_POSTS.map((post) =>
    `    <a class="card" href="article-${post.slug}.html">
      <div class="card-top">${badge(post.category)}<time>${post.date}</time></div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <span class="read-more">Read more &rarr;</span>
    </a>`
  ).join("\n");
  let html = fill(before, 'id="news-sidebar-list"', "sidebar", sidebar);
  html = fill(html, 'id="archive-grid"', "archive", cards);
  write("news.html", html, before);
}

{
  const before = read("index.html");
  const rows = YAKKAMON_POSTS.slice(0, 5).map((post) =>
    `      <a class="home-news-row" href="article-${post.slug}.html">
        ${badge(post.category)}
        <h3>${post.title}</h3>
        <time>${post.date}</time>
        <span class="read-more">Read more &rarr;</span>
      </a>`
  ).join("\n");
  write("index.html", fill(before, 'id="home-news-grid"', "home-news", rows), before);
}

// ---------------------------------------------------------------- videos
{
  const { YAKKAMON_VIDEO_BLOCKS, YAKKAMON_VIDEOS } = loadData("videos.js", ["YAKKAMON_VIDEO_BLOCKS", "YAKKAMON_VIDEOS"]);
  const WATCH = "https://www.youtube.com/watch?v=";
  const card = (v) => {
    const ep = v.ep ? `<span class="vid-ep">EP ${esc(v.ep)}</span>` : "";
    const time = v.runtime ? `<span class="vid-time">${esc(v.runtime)}</span>` : "";
    const related = v.related ? `<a class="vid-related" href="${esc(v.related.href)}">${esc(v.related.label)} &rarr;</a>` : "";
    return `      <li class="vid-item">
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
  };
  const blocks = YAKKAMON_VIDEO_BLOCKS.map((block) => {
    const items = YAKKAMON_VIDEOS.filter((v) => v.block === block.key)
      .sort((a, b) => { const d = Number(a.ep || 0) - Number(b.ep || 0); return block.sort === "asc" ? d : -d; });
    if (!items.length) return "";
    return `    <section class="vid-block">
      <div class="section-head"><h2>${esc(block.title)}</h2></div>
      <p class="vid-note">${esc(block.note)}</p>
      <ul class="vid-list">
${items.map(card).join("\n")}
      </ul>
    </section>`;
  }).filter(Boolean).join("\n");
  const before = read("videos.html");
  let html = fill(before, 'id="videos-root"', "videos", blocks);
  html = html.replace(/(<span id="vid-count">)\d+(<\/span>)/, `$1${YAKKAMON_VIDEOS.length}$2`);
  write("videos.html", html, before);
}

// ---------------------------------------------------------------- faq
{
  const { FAQ_CATEGORIES } = loadData("faq.js", ["FAQ_CATEGORIES"]);
  const total = FAQ_CATEGORIES.reduce((n, c) => n + c.items.length, 0);
  const meta = `${total} answers across ${FAQ_CATEGORIES.length} topics &mdash; pick a topic, or just start typing.`;
  const pills = FAQ_CATEGORIES.map((c, i) =>
    `    <button class="faq-pill" type="button" data-cat="${c.id}" aria-pressed="${i === 0 ? "true" : "false"}">${c.name}</button>`
  ).join("\n");
  const item = (it) =>
    `      <details class="faq-item" id="${it.id}"><summary><span class="faq-qtext">${it.q}</span></summary><div class="faq-a">${it.a}</div></details>`;
  const panes = FAQ_CATEGORIES.map((c) =>
    `    <section class="faq-pane prereg-section" id="${c.id}"><h2>${c.name}</h2>${c.intro || ""}${c.rich || ""}
${c.items.map(item).join("\n")}
    </section>`
  ).join("\n");
  const before = read("faq.html");
  let html = fill(before, 'id="faq-meta"', "faq-meta", meta);
  html = fill(html, 'id="faq-pills"', "faq-pills", pills);
  html = fill(html, 'id="faq-content"', "faq-content", panes);
  write("faq.html", html, before);
}
