# Changelog — September 16, 2026 — Search Console "Alternate page with proper canonical tag"

Built on the uploaded `yakkamonworld-main 3.zip` (main as of Sept 15). No page
content changed in this batch.

## What the report actually contained (67 URLs, all last crawled Sept 9 or earlier)
- **Extension-less addresses** (`/faq`, `/article-…`) — crawled while the old
  `auto-trailing-slash` handling was live, i.e. BEFORE the Sept 10 fix. Verified
  live today: every one now 301s to its `.html` page, which carries the matching
  canonical. Nothing to change; on recrawl these rows move to "Page with redirect",
  which is the normal state for a redirecting URL.
- **`?system=` / `?category=` addresses** (`/gameplay?system=upkeep`,
  `/news?category=guide`) — 301 to `/gameplay.html?system=…` / `/news.html?category=…`
  (query string carried, as designed), which canonicalize to the plain hub page.
  That is exactly what "Alternate page with proper canonical tag" describes and it
  is the intended behavior for filtered views. These rows will stay in this bucket;
  that is correct, not an error.
- **`http://` addresses** (`http://yakkamonworld.com/article-ronin-wave` etc.) —
  the real defect. Verified live today: the whole site answers with a **200 over
  plain http**, no redirect to https and no HSTS header. Every `http://` URL
  Google finds is therefore a live duplicate of its `https://` canonical.

## Root cause
Cloudflare's zone setting **Always Use HTTPS** is off (or was never on) for
yakkamonworld.com. Neither `_redirects` nor `wrangler.jsonc` can redirect on
scheme, so this cannot be fixed from the repo alone.

## Fix — dashboard (the part that matters)
Cloudflare dashboard → yakkamonworld.com → **SSL/TLS → Edge Certificates →
Always Use HTTPS → On.** (Optional, same page: "Automatic HTTPS Rewrites" On.)
Takes effect within a minute; `http://yakkamonworld.com/` then answers 301 →
`https://yakkamonworld.com/`.

## Added (repo)
- `_headers` — `Strict-Transport-Security: max-age=31536000` on every path.
  Browsers that have loaded the site once over https stop asking for `http://`
  at all. Deliberately no `preload` / `includeSubDomains`.
- `README.md` — Deployment section: new paragraph on HTTP → HTTPS being a
  dashboard setting; `_headers` added to the file tree.

## Not changed
- `sitemap.xml`, `dateModified`, `search.js`, chatbot sources, internal links — no
  page content changed. Audit of the repo found zero extension-less or `http://`
  internal URLs (canonicals, og:url, JSON-LD `@id`, sitemap, posts.js, search.js,
  push-notify all use `https://…/<page>.html`).

## Search Console follow-up (after the toggle is on)
1. Page indexing → "Alternate page with proper canonical tag" → **Validate fix**.
2. Expect: `http://` rows and extension-less rows drain into "Page with redirect"
   over the next crawls (normal); `?system=` / `?category=` rows remain (correct).
3. Optional: URL Inspection on `https://yakkamonworld.com/` → Request indexing,
   to nudge a recrawl of the home page and its links.
