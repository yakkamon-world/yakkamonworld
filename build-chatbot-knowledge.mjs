#!/usr/bin/env node
/*
  CHATBOT KNOWLEDGE BUILDER
  =========================
  Turns the site's own content into chatbot-knowledge.json, which the
  yakkamon-chat-worker fetches from https://yakkamonworld.com/chatbot-knowledge.json
  and searches before every answer.

  Run it from the repo root whenever content changes:

      node build-chatbot-knowledge.mjs

  (The GitHub Action in .github/workflows/chatbot-knowledge.yml runs it for you
  on every push to main and commits the result, so the manual run is only needed
  if the Action is disabled.)

  What goes in, and in which tier:
    tier 1  OFFICIAL   docs.yakkamon.com pages (markdown snapshot; the worker also
                       fetches these live and prefers the live copy) and
                       chatbot-official-posts.md — the team's own X posts, verbatim
    tier 2  SITE       faq.js, gameplay.js, videos.js, every article and hub page
    tier 3  STREAMS    chatbot-digest.md — the Cumulative Dev Stream digest

  No dependencies. Node 18+.
*/
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const SITE = "https://yakkamonworld.com/";
const OUT = path.join(ROOT, "chatbot-knowledge.json");
const MAX_CHUNK = 1500;   // characters; long sections are split on paragraph breaks

/*
  Official docs pages. The list is DISCOVERED at build time:
    1. https://docs.yakkamon.com/llms.txt  — GitBook's own index of top-level pages
    2. every ".md" link found inside those pages — sub-pages that llms.txt does not
       list (e.g. /pre-registration/free-mint/ronin-wave, published 8 Sep 2026)
  DOCS_PAGES below is (a) the fallback if llms.txt cannot be fetched and (b) the
  set of pages the chat worker fetches LIVE by itself. Those are tagged kind "docs"
  (the worker swaps in its live copy); every other page discovered here is tagged
  kind "post" so the worker keeps the snapshot next to its live docs — the same
  path the "Source:" sections of chatbot-official-posts.md use. When the worker
  learns to discover pages itself, add them to DOCS_PAGES.
*/
const DOCS_HOST = "https://docs.yakkamon.com/";
const DOCS_PAGES = [
  ["about-yakkamon", "About Yakkamon"],
  ["team", "The Team"],
  ["faq", "Official FAQ"],
  ["pre-registration/early-access-airdrop", "Early Access and Rewards"],
  ["pre-registration/important-dates", "Important Dates"],
  ["pre-registration/legendary-founder-nfts", "NFT Airdrop"],
  ["pre-registration/flower-deposits", "$FLOWER Deposits"],
  ["pre-registration/free-mint", "Free Mint"],
  ["content/yakkapedia", "Yakkapedia"],
];
// Legal / press pages: true but useless for a visitor's question — skipped.
const DOCS_SKIP = /(^|\/)(media-kit|terms[^/]*|privacy[^/]*|legal[^/]*)$/i;

const chunks = [];
let seq = 0;
function add(t, title, url, text, extra = {}) {
  text = clean(text);
  if (!text || text.length < 40) return;
  for (const piece of split(text)) {
    chunks.push({ id: `${t}-${++seq}`, t, title, url, ...extra, text: piece });
  }
}

/* ---------- text helpers ---------- */
function decode(s) {
  return s
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&rsquo;|&lsquo;/g, "’")
    .replace(/&ldquo;|&rdquo;/g, '"').replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "…").replace(/&times;/g, "×").replace(/&rarr;/g, "→")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}
function stripHtml(s) {
  return decode(
    s.replace(/<script[\s\S]*?<\/script>/gi, "")
     .replace(/<style[\s\S]*?<\/style>/gi, "")
     .replace(/<!--[\s\S]*?-->/g, "")
     .replace(/<\/(p|div|li|tr|h[1-6]|section|blockquote|figcaption|dt|dd)>/gi, "\n")
     .replace(/<br\s*\/?>/gi, "\n")
     .replace(/<\/t[hd]>/gi, " | ")
     .replace(/<[^>]+>/g, "")
  );
}
function clean(s) {
  return s.replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function split(text) {
  if (text.length <= MAX_CHUNK) return [text];
  const out = [];
  let cur = "";
  for (const para of text.split(/\n\n+/)) {
    if ((cur + "\n\n" + para).length > MAX_CHUNK && cur) { out.push(cur.trim()); cur = para; }
    else cur = cur ? cur + "\n\n" + para : para;
    while (cur.length > MAX_CHUNK * 1.4) { out.push(cur.slice(0, MAX_CHUNK).trim()); cur = cur.slice(MAX_CHUNK); }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}
function loadDataFile(file, globalName) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const ctx = {};
  vm.runInNewContext(src + `\n;__out = ${globalName};`, ctx, { filename: file });
  return ctx.__out;
}
function titleOf(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? decode(m[1]).replace(/\s*\|\s*YakkamonWorld\s*$/i, "").trim() : "";
}
function datesOf(html) {
  const p = html.match(/"datePublished"\s*:\s*"([^"]+)"/), m = html.match(/"dateModified"\s*:\s*"([^"]+)"/);
  const out = {};
  if (p) out.published = p[1];
  if (m) out.updated = m[1];
  return out;
}

/* ---------- tier 2: FAQ ---------- */
const faq = loadDataFile("faq.js", "FAQ_CATEGORIES");
for (const cat of faq) {
  for (const item of cat.items) {
    add(2, `FAQ: ${decode(item.q)}`, `${SITE}faq.html#${item.id}`, `Q: ${decode(item.q)}\nA: ${stripHtml(item.a)}`, { kind: "faq" });
  }
}

/* ---------- tier 2: gameplay systems ---------- */
const gameplay = loadDataFile("gameplay.js", "YAKKAMON_GAMEPLAY");
for (const sys of gameplay) {
  const body = [sys.desc, stripHtml(sys.detail || ""), sys.like ? `Like this: ${stripHtml(sys.like)}` : ""].filter(Boolean).join("\n\n");
  add(2, `Gameplay: ${decode(sys.title)}`, `${SITE}gameplay.html?system=${sys.slug}`, body, { kind: "gameplay" });
}

/* ---------- tier 2: videos ---------- */
try {
  const videos = loadDataFile("videos.js", "YAKKAMON_VIDEOS");
  const list = Array.isArray(videos) ? videos : Object.values(videos).flat();
  for (const v of list) {
    if (!v || !v.id) continue;
    add(2, `Video: ${decode(v.title)}`, `https://www.youtube.com/watch?v=${v.id}`,
        `YakkamonWorld video, episode ${v.ep || "?"} (${v.runtime || "?"}): ${decode(v.title)}. ${stripHtml(v.blurb || "")}`, { kind: "video" });
  }
} catch (e) { console.warn("videos.js skipped:", e.message); }

/* ---------- tier 2: pages and articles ---------- */
const SKIP = new Set(["gameplay-poster-source.html", "privacy.html", "contact.html", "news.html"]);
for (const file of fs.readdirSync(ROOT).filter(f => f.endsWith(".html")).sort()) {
  if (SKIP.has(file)) continue;
  const html = fs.readFileSync(path.join(ROOT, file), "utf8");
  const foot = html.indexOf("<footer");
  let start = html.indexOf("<main");
  if (start < 0) start = html.search(/class="[^"]*article-head[^"]*"/);
  if (start < 0) start = html.search(/class="[^"]*gg-sec[^"]*"/);
  if (start < 0 || foot < 0) continue;
  const body = html.slice(start, foot);
  const pageTitle = titleOf(html) || file;
  const dates = datesOf(html);
  const isArticle = file.startsWith("article-");
  // split on h2 so each chunk is one section
  const parts = body.split(/(?=<h2\b)/i);
  for (const part of parts) {
    const h = part.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i);
    const heading = h ? clean(stripHtml(h[1])) : "";
    const idm = part.match(/<h2\b[^>]*\bid="([^"]+)"/i);
    const url = SITE + (file === "index.html" ? "" : file) + (idm ? `#${idm[1]}` : "");
    const text = stripHtml(part);
    add(2, heading ? `${pageTitle} — ${heading}` : pageTitle, url, text, { kind: isArticle ? "article" : "page", ...dates });
  }
}

/* ---------- tier 1: official posts (verbatim team announcements not on the docs site) ---------- */
try {
  const md = fs.readFileSync(path.join(ROOT, "chatbot-official-posts.md"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  for (const sec of md.split(/\n(?=## )/)) {
    const h = sec.match(/^##\s+(.*)$/m);
    if (!h) continue;
    let body = sec.replace(/^##\s+.*$/m, "").trim();
    // Optional first line "Source: <url>" — cite that page instead of the X account
    // (used for docs.yakkamon.com pages the chat worker does not fetch live).
    let url = "https://x.com/yakkamon_game";
    const src = body.match(/^Source:\s*(https?:\/\/\S+)\s*\n?/);
    if (src) { url = src[1]; body = body.slice(src[0].length).trim(); }
    add(1, `Official post: ${h[1].trim()}`, url, body, { kind: "post" });
  }
} catch (e) { console.warn("chatbot-official-posts.md skipped:", e.message); }

/* ---------- tier 3: dev-stream digest ---------- */
try {
  const md = fs.readFileSync(path.join(ROOT, "chatbot-digest.md"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const secs = md.split(/\n(?=## )/);
  for (const sec of secs) {
    const h = sec.match(/^##\s+(.*)$/m);
    add(3, `Dev-stream digest: ${h ? h[1].trim() : "overview"}`, `${SITE}news.html`, sec, { kind: "stream" });
  }
} catch (e) { console.warn("chatbot-digest.md skipped:", e.message); }

/* ---------- tier 1: official docs snapshot (best effort; the worker fetches these live too) ---------- */
function docsToText(md) {
  return clean(stripHtml(
    md.replace(/^>.*?\n/, "")                                   // GitBook's llms.txt banner line
      .replace(/\n-{3,}\s*\n\s*#\s*Agent Instructions[\s\S]*$/, "")   // GitBook's trailing agent notes (blank line after --- or not)
      .replace(/\n#\s*Agent Instructions\s*\n[\s\S]*$/, "")
      .replace(/\{%\s*hint[^%]*%\}/g, "\n").replace(/\{%\s*endhint\s*%\}/g, "\n")
      .replace(/<figure>[\s\S]*?<\/figure>/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")                 // links → text
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
  ));
}
/* Normalise any docs link (absolute, root-relative, or relative to `fromSlug`) to a slug like
   "pre-registration/free-mint/ronin-wave"; null for anything off-site or not a page. */
function docsSlug(href, fromSlug = "") {
  if (!href) return null;
  href = href.trim().replace(/[)>"']+$/, "");
  if (/^(mailto:|tel:|javascript:)/i.test(href)) return null;
  let p;
  if (/^https?:\/\//i.test(href)) {
    if (!href.toLowerCase().startsWith(DOCS_HOST)) return null;
    p = href.slice(DOCS_HOST.length);
  } else if (href.startsWith("/")) {
    p = href.slice(1);
  } else if (!href.startsWith("#")) {
    const base = fromSlug.includes("/") ? fromSlug.slice(0, fromSlug.lastIndexOf("/") + 1) : "";
    p = base + href;
  } else return null;
  p = p.split(/[?#]/)[0].replace(/\.md$/i, "").replace(/\/+$/, "");
  if (!p || p === "llms.txt" || /\.(png|jpe?g|gif|webp|svg|pdf|csv|zip)$/i.test(p)) return null;
  const segs = [];
  for (const s of p.split("/")) { if (s === "..") segs.pop(); else if (s && s !== ".") segs.push(s); }
  return segs.join("/") || null;
}
function docsTitle(md, fallback) {
  const h = md.match(/^#\s+(.+)$/m);
  return h ? h[1].replace(/[*_`]/g, "").trim() : fallback;
}
async function fetchDocs(slug) {
  const r = await fetch(`${DOCS_HOST}${slug}.md`, { headers: { "user-agent": "YakkamonWorld-Portal/1.0" } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.text();
}
if (typeof fetch === "function") {
  const LIVE = new Map(DOCS_PAGES);            // slug → title of the pages the worker fetches live
  const queue = [];                            // [slug, title, fromIndex]
  const seen = new Set();
  const enqueue = (slug, title, fromIndex) => {
    if (!slug || seen.has(slug) || DOCS_SKIP.test(slug)) return;
    seen.add(slug); queue.push([slug, title || slug, fromIndex]);
  };
  // 1. index pages from llms.txt (fallback: the static list)
  try {
    const idx = await (await fetch(`${DOCS_HOST}llms.txt`, { headers: { "user-agent": "YakkamonWorld-Portal/1.0" } })).text();
    for (const m of idx.matchAll(/\[([^\]]*)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g)) enqueue(docsSlug(m[2]), m[1].trim(), true);
    if (!queue.length) throw new Error("no page links found");
    console.log(`docs index: ${queue.length} pages from llms.txt`);
  } catch (e) {
    console.warn(`llms.txt unavailable (${e.message}) — using the built-in page list`);
  }
  for (const [slug, title] of DOCS_PAGES) enqueue(slug, title, true);   // never lose the known pages
  // 2. fetch each page; any ".md" link inside it that is not yet known is a sub-page → fetch that too
  let extra = 0;
  const fetched = [];
  for (let i = 0; i < queue.length && i < 60; i++) {
    const [slug, queuedTitle, fromIndex] = queue[i];
    const url = DOCS_HOST + slug;
    try {
      const md = await fetchDocs(slug);
      fetched.push(slug);
      const title = LIVE.get(slug) || (fromIndex ? queuedTitle : docsTitle(md, queuedTitle));
      // markdown links "](/x.md)" and HTML links 'href="/x.md"' (GitBook emits tables as HTML)
      for (const m of md.matchAll(/(?:\]\(|href=")([^)"\s]+\.md(?:[#?][^)"\s]*)?)[)"]/g)) {
        const s = docsSlug(m[1], slug);
        if (s && !seen.has(s)) { enqueue(s, s.split("/").pop(), false); extra++; }
      }
      const text = docsToText(md);
      const parts = text.split(/\n(?=#{1,3} )/);
      const kind = LIVE.has(slug) ? "docs" : "post";
      for (const part of parts) {
        const h = part.match(/^#{1,3}\s+(.*)$/m);
        add(1, h && h[1].trim() !== title ? `Official docs: ${title} — ${h[1].trim()}` : `Official docs: ${title}`, url,
            part.replace(/^#{1,3}\s+/gm, ""), { kind });
      }
    } catch (e) { console.warn(`docs snapshot skipped for ${slug}: ${e.message}`); }
  }
  const kept = fetched.filter(s => !LIVE.has(s));
  console.log(`docs snapshot: ${fetched.length} pages (${extra} sub-pages found via in-page links); kept as snapshot-only: ${kept.join(", ") || "none"}`);
}

/* ---------- write ---------- */
const out = { built: new Date().toISOString(), site: SITE, counts: { official: 0, site: 0, streams: 0 }, chunks };
for (const c of chunks) out.counts[c.t === 1 ? "official" : c.t === 2 ? "site" : "streams"]++;
// Same content as last time → keep the old "built" stamp so the file is byte-identical and
// the GitHub Action has nothing to commit (matters for the 6-hourly scheduled runs).
try {
  const prev = JSON.parse(fs.readFileSync(OUT, "utf8"));
  if (prev && prev.built && JSON.stringify(prev.chunks) === JSON.stringify(chunks)) out.built = prev.built;
} catch { /* no previous file, or unreadable — write a fresh one */ }
fs.writeFileSync(OUT, JSON.stringify(out));
console.log(`chatbot-knowledge.json: ${chunks.length} chunks (${out.counts.official} official, ${out.counts.site} site, ${out.counts.streams} streams), ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB, built ${out.built}`);
