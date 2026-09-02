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
                       fetches these live and prefers the live copy)
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
    const url = SITE + file + (idm ? `#${idm[1]}` : "");
    const text = stripHtml(part);
    add(2, heading ? `${pageTitle} — ${heading}` : pageTitle, url, text, { kind: isArticle ? "article" : "page", ...dates });
  }
}

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
      .replace(/\n---\n# Agent Instructions[\s\S]*$/, "")     // GitBook's trailing agent notes
      .replace(/\{%\s*hint[^%]*%\}/g, "\n").replace(/\{%\s*endhint\s*%\}/g, "\n")
      .replace(/<figure>[\s\S]*?<\/figure>/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")                 // links → text
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
  ));
}
if (typeof fetch === "function") {
  for (const [slug, title] of DOCS_PAGES) {
    const url = `https://docs.yakkamon.com/${slug}`;
    try {
      const r = await fetch(url + ".md", { headers: { "user-agent": "YakkamonWorld-Portal/1.0" } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const text = docsToText(await r.text());
      const parts = text.split(/\n(?=#{1,3} )/);
      for (const part of parts) {
        const h = part.match(/^#{1,3}\s+(.*)$/m);
        add(1, h && h[1].trim() !== title ? `Official docs: ${title} — ${h[1].trim()}` : `Official docs: ${title}`, url, part.replace(/^#{1,3}\s+/gm, ""), { kind: "docs" });
      }
    } catch (e) { console.warn(`docs snapshot skipped for ${slug}: ${e.message}`); }
  }
}

/* ---------- write ---------- */
const out = { built: new Date().toISOString(), site: SITE, counts: { official: 0, site: 0, streams: 0 }, chunks };
for (const c of chunks) out.counts[c.t === 1 ? "official" : c.t === 2 ? "site" : "streams"]++;
fs.writeFileSync(OUT, JSON.stringify(out));
console.log(`chatbot-knowledge.json: ${chunks.length} chunks (${out.counts.official} official, ${out.counts.site} site, ${out.counts.streams} streams), ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB`);
