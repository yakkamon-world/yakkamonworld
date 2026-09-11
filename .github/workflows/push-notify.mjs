// Compares posts.js with the version before this push, and sends one OneSignal
// push notification per newly added post (see the safety rails in
// .github/workflows/push-notify.yml). Runs in GitHub Actions only.

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const APP_ID = process.env.ONESIGNAL_APP_ID || "";
const API_KEY = process.env.ONESIGNAL_REST_API_KEY || "";
const BEFORE = process.env.BEFORE_SHA || "";

if (!APP_ID || !API_KEY) {
  console.log("OneSignal secrets not configured yet — nothing to do.");
  process.exit(0);
}

function postsFrom(source) {
  // posts.js is a plain `const YAKKAMON_POSTS = [ ... ]` file.
  const posts = new Function(source + "\n;return YAKKAMON_POSTS;")();
  if (!Array.isArray(posts)) throw new Error("YAKKAMON_POSTS is not an array");
  return posts;
}

const current = postsFrom(readFileSync("posts.js", "utf8"));

let previous = [];
if (BEFORE && !/^0+$/.test(BEFORE)) {
  try {
    previous = postsFrom(execSync(`git show ${BEFORE}:posts.js`, { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }));
  } catch {
    console.log("No readable posts.js before this push — treating as no new posts (first run safety).");
    process.exit(0);
  }
} else {
  console.log("No previous commit to compare against — skipping.");
  process.exit(0);
}

const oldSlugs = new Set(previous.map((p) => p.slug));
const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
const fresh = current.filter((p) => {
  if (oldSlugs.has(p.slug)) return false;
  const t = Date.parse(p.date); // "Sep 11, 2026"
  if (Number.isNaN(t)) return false;
  return Math.abs(Date.now() - t) <= THREE_DAYS;
});

if (fresh.length === 0) {
  console.log("posts.js changed, but no new recent posts — nothing to send.");
  process.exit(0);
}

const toSend = fresh.slice(0, 3);
console.log(`New posts: ${toSend.map((p) => p.slug).join(", ")}`);

let failed = false;
for (const post of toSend) {
  const body = {
    app_id: APP_ID,
    target_channel: "push",
    included_segments: ["All"],
    headings: { en: "YakkamonWorld \u2014 new post" },
    contents: { en: post.title },
    url: `https://yakkamonworld.com/article-${post.slug}.html`,
    chrome_web_icon: "https://yakkamonworld.com/favicon-192.png",
  };
  const res = await fetch("https://api.onesignal.com/notifications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Key ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });
  const out = await res.json().catch(() => ({}));
  if (res.ok && out.id) {
    console.log(`Sent "${post.title}" \u2192 notification id ${out.id}`);
  } else {
    failed = true;
    console.error(`FAILED for ${post.slug}: HTTP ${res.status} ${JSON.stringify(out)}`);
  }
}
process.exit(failed ? 1 : 0);
