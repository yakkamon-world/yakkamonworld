# YakkamonWorld

The unofficial Yakkamon player portal — [yakkamonworld.com](https://yakkamonworld.com)

A plain static site. No framework, no build step, no `node_modules`. Every file
in this repo is served exactly as it sits here.

---

## Table of contents

- [How it's built](#how-its-built)
- [Running it locally](#running-it-locally)
- [Deployment](#deployment)
- [The workers](#the-workers)
- [Repo layout](#repo-layout)
- [Common tasks](#common-tasks)
- [House rules](#house-rules)
- [Pre-ship checks](#pre-ship-checks)
- [Known quirks](#known-quirks)

---

## How it's built

**Flat structure.** Everything lives in the repo root. No `css/`, no `js/`, no
`assets/`. This is deliberate — it keeps every relative link one segment long,
so a page copied from anywhere still resolves.

**One stylesheet.** `style.css` is the single source of truth for site-wide
styling. A few pages (`leaderboard.html`, some articles) carry a small
page-specific `<style>` block inline rather than bloating the shared file.

**Content lives in data files, not markup.** `posts.js`, `gameplay.js` and
`videos.js` hold the content; small render scripts turn them into pages. Adding
a news post or a video means editing a data file, not hand-writing HTML.

**Articles are real pages.** Each news post also gets its own static
`article-<slug>.html` — not a template driven by a URL parameter, but a
complete, independently crawlable page. This costs some duplication in the
shared header and footer, and buys reliability and SEO.

**Design language — "Comic Book Pop."** Bangers (display) + Nunito (body), both
from Google Fonts via `@import` at the top of `style.css`. Thick ink borders,
hard offset shadows, cream background with a subtle dot texture.

| Token | Value | Used for |
|---|---|---|
| `--cream` | `#FFF4D6` | page background |
| `--ink` | `#1A1A2E` | text, borders, dark blocks |
| `--sky` | `#2FA8E8` | primary accent |
| `--yellow` | `#FFD23F` | highlights, warning callouts |
| `--red` | `#FF3B3B` | alerts, focus rings |
| `--green` | `#3FAE5C` | success, "LIKE THIS" blocks |
| `--purple` | `#8A5CF0` | occasional accent |

**Navigation** is ten tabs, each a real page:
Home / Early Access / News / Gameplay / Community / Leaderboard / Tips /
Videos / FAQ / Contact.

> The "Early Access" tab still points at `pre-registration.html` (the URL is
> kept so inbound links don't break), but since 2 Sep 2026 the page's title,
> `<h1>`, footer link, home tile, breadcrumb and search entries all say
> "Early Access" too. One label per page — see House rules.

`about.html`, `privacy.html` and `gameplay-guide.html` are intentionally **not**
in the nav — the mobile header is already tall — and are reached from the footer
or from the pages they belong to.

---

## Running it locally

Clone and open `index.html` in a browser. That's it.

Most things work over `file://`. Two caveats:

- Pages that fetch from a worker (the leaderboard, the sign-up counter) show
  their empty or fallback state, since the workers are on a different origin.
- For the real thing, any static server will do: `python3 -m http.server 8000`

---

## Deployment

**Cloudflare Workers static assets**, wired to this repo through the Cloudflare
Git integration. Push to `main` and it deploys. There is no CI workflow in this
repo — Cloudflare watches the branch directly.

`wrangler.jsonc` is the whole config:

```jsonc
{
  "name": "yakkamonworld",
  "compatibility_date": "2026-07-29",
  "assets": { "directory": "." }
}
```

`"directory": "."` is why the flat structure matters — the repo root *is* the
served directory, so **every file here is publicly fetchable.** Don't commit
anything you wouldn't want served, including working notes.

---

## The workers

The site is static, but three Cloudflare Workers back it. Each lives in its own
repo — **none of their code is in here.**

| Worker | Repo | Feeds |
|---|---|---|
| Counter | `yakkamon-counter-worker` | `signup-counter.js`, plus the `/flower` price route `leaderboard.js` uses |
| Leaderboard | `yakkamon-leaderboard-worker` | `leaderboard.js` — pulls a Dune query, caches in KV |
| Access bot | `yakkamon-access-bot` | Telegram only, not used by the site |

> **Deploy gotcha:** pushing to `yakkamon-counter-worker` does **not** deploy it
> — that repo has no CI workflow. It must be deployed by hand from the
> Cloudflare dashboard (Quick Edit → *Save and deploy*). This site's repo
> deploys from Git fine; the counter worker is the exception.

---

## Repo layout

```
yakkamonworld/                    ← flat: no css/ or js/ subdirectories
│
├─ PAGES (53 .html)
│  ├─ index.html                  Home — ticket card, counter, timeline, latest news
│  ├─ pre-registration.html       "Early Access" tab — points, tiers, important dates
│  ├─ news.html                   News archive with category sidebar
│  ├─ gameplay.html               25 gameplay systems, sidebar + detail panel
│  ├─ gameplay-guide.html         Same material as one long mobile-readable page
│  ├─ community.html              Our channels, then the official ones
│  ├─ leaderboard.html            Deposit leaderboard (Base + Ronin, via Dune)
│  ├─ tips.html                   Trainer tips
│  ├─ videos.html                 Video index
│  ├─ faq.html                    FAQ
│  ├─ contact.html                Contact form
│  ├─ about.html                  Who we are, how we work, content usage
│  ├─ privacy.html                Privacy + analytics consent controls
│  └─ article-*.html              One static page per news post (35)
│
├─ CONTENT DATA — edit these to change what the site says
│  ├─ posts.js                    News posts (YAKKAMON_POSTS), newest first
│  ├─ gameplay.js                 Gameplay systems (25 entries)
│  ├─ videos.js                   Video index (17 entries, 4 blocks)
│  └─ search.js                   SEARCH_INDEX + the search overlay behaviour
│
├─ RENDERERS — how that data is displayed
│  ├─ news.js                     News archive + category filtering
│  ├─ home-news.js                Latest posts on Home
│  ├─ gameplay-page.js            Gameplay sidebar + detail swap
│  ├─ videos-render.js            Video list from videos.js
│  └─ leaderboard.js              Fetches + renders the board, holds the LADDER bands
│
├─ WIDGETS
│  ├─ signup-counter.js           Live sign-up count (Home, Early Access)
│  ├─ prereg-ticket.js            Ticket-card countdown (Home)
│  ├─ timeline-countdown.js       Timeline countdowns (Home, Early Access)
│  ├─ deposit-week.js             Current $FLOWER multiplier week
│  └─ contact-form.js             Contact form relay
│
├─ INFRASTRUCTURE
│  ├─ analytics.js                GA4, consent-gated — loaded in <head> everywhere
│  ├─ privacy-consent.js          Consent controls on privacy.html + about.html
│  ├─ style.css                   All shared styling
│  ├─ sitemap.xml                 53 URLs — keep in sync with new pages
│  ├─ robots.txt                  Open to search engines and AI answer engines
│  ├─ BingSiteAuth.xml            Bing Webmaster verification — must stay at root
│  ├─ wrangler.jsonc              Cloudflare config
│  └─ CHANGELOG-2026-08-21.md     One-off change log for the 21 Aug gameplay rewrite.
│                                 Note: publicly fetchable, like everything else here.
│
└─ IMAGES
   ├─ favicon.ico / -32 / -192 / apple-touch-icon
   ├─ og-default.png              1200×630 — default social card
   ├─ gameplay-poster.png         1800×1704 — in-page field guide poster (rendered from gameplay-poster-source.html)
   ├─ gameplay-poster-full.png    4000×3787 — full size, under X's 4096px limit
   ├─ gameplay-poster-source.html  the poster as HTML — edit, render at 1800px wide, replace both PNGs
   ├─ yakkamon-roster*.jpg        Official roster sheets — original 18, the 21-sheet (25 Aug), current 22-sheet (31 Aug), each with a -2x
   ├─ free-mint-banner.webp       Free mint banner (Home + Early Access), links to the guide
   ├─ free-mint-banner-2x.webp    Same, 2x for high-DPI
   ├─ prereg-ticket.webp          Old ticket card art (still used by article-yakkamon-referral-code)
   ├─ faq-og-status.png           FAQ social card
   └─ news-*.jpg / news-*.png     Per-article images
```

---

## Common tasks

### Add a news article

Four files. A `posts.js` entry without a matching article file produces a card
that 404s, so these always ship together.

1. **`posts.js`** — copy a whole `{ … }` block to the **top** of the array
   (newest first) and edit it. `category` must be one of `community`, `event`,
   `guideline`, `tips`.
2. **`article-<slug>.html`** — copy the most recent article file so you inherit
   the current header and footer. The filename slug must match `slug` exactly.
   Then update `<title>` (ends in ` | YakkamonWorld`), the canonical link, all
   four OG/Twitter title+description pairs, the Article JSON-LD block
   (`headline`, `description`, `mainEntityOfPage`, `datePublished`,
   `dateModified`), the `<h1>`, the badge class and the date. Every article
   also carries a breadcrumb: the visible `<nav class="crumbs">` trail at the
   top of `.article-head` (Home › News › *article title*) and a matching
   `BreadcrumbList` JSON-LD block — the third item's `name` in both must be the
   new `<h1>` text.
3. **`search.js`** — add entries near the top. The convention is one for the
   article itself plus a few phrased as questions a reader would actually type,
   all pointing at the same URL.
4. **`sitemap.xml`** — add a `<url>` block **with a `<lastmod>`** equal to the
   article's `dateModified`. Every URL in the sitemap carries one (backfilled
   2 Sep 2026), so whenever you bump an article's `dateModified`, mirror it
   here — a sitemap whose dates are only sometimes right gets ignored.

### Add a video

1. **`videos.js`** — paste an object at the top of its block. Blocks are
   `start` (sorted oldest-first), `tactics`, `analysis` and `trailers` (all
   newest-first). The renderer sorts by `ep` number, so paste position doesn't
   matter — the block does.
2. **`videos.html`** — bump the hardcoded `<span id="vid-count">` fallback and
   the JSON-LD `dateModified`.
3. **`search.js`** — add entries, and bump the "All N episodes in one place"
   excerpt.

No thumbnails, deliberately: YouTube thumbnails hotlink `i.ytimg.com`, a
third-party request on every page load.

### Add a gameplay system

Edit `gameplay.js`. Every entry needs `slug`, `title`, `desc`, `detail`, `icon`
and `like` (the plain-English analogy that renders as the green "LIKE THIS"
block). **Never rename an existing slug** — `?system=` deep links are used
throughout the articles and would break silently.

Then update the quick-reference table in `gameplay.html`, the matching section
in `gameplay-guide.html`, and add search entries.

### Add a whole new page

Copy an existing page rather than starting from scratch — the shared `<head>`,
masthead, tab strip, search overlay and footer all come along for free.

- [ ] Favicon tags + `<link rel="stylesheet" href="style.css">`
- [ ] `<script src="analytics.js"></script>` in `<head>`
- [ ] Search overlay markup + `<script src="search.js"></script>` before `</body>`
- [ ] `active` class on the correct nav tab
- [ ] Canonical, OG and Twitter tags updated (all four title/description pairs)
- [ ] `<title>` is front-loaded with the page name and ends in ` | YakkamonWorld`
- [ ] Breadcrumb: `<nav class="crumbs">` as the first child of `.page-head`
      (Home › *page label*) plus a `BreadcrumbList` JSON-LD block in `<head>`;
      the label must match the nav tab / footer link text for that page
- [ ] Entries added to `search.js`
- [ ] `<url>` added to `sitemap.xml`

---

## House rules

**One label per page, everywhere.** A page is called the same thing in its nav
tab, footer link, `<title>`, `<h1>`, breadcrumb and search entries — Google
builds sitelinks from titles and anchor text, and three names for one URL
dilute all three. `<title>` is front-loaded with that name and ends in
` | YakkamonWorld`. (`pre-registration.html` = "Early Access".)

**Breadcrumbs are structural, not editorial.** Adding or relabelling the
crumbs / `BreadcrumbList` on an article is a nav-only change: no
`dateModified` bump. `faq.html` and `videos.html` now carry two JSON-LD
blocks (FAQPage/CollectionPage + BreadcrumbList) — when regenerating the FAQ
block from `faq.js`, replace only the FAQPage one.

**British English throughout.** "Optimise", "the maths checks out",
"refertilise". The X account is American — that split is known and accepted.

**Corrections are published, not hidden.** Evergreen and reference pages get
fixed in place. Dated news posts get a visible correction callout and a bumped
`dateModified` (mirrored to that URL's `<lastmod>` in `sitemap.xml`), never a
silent rewrite. Dated commentary that was accurate when
published is left alone. The site has publicly corrected its own wrong analysis
before; that's the standard.

**`dateModified` only exists on `article-*.html`.** Bump it when the body
changes. A footer-only or nav-only edit is not a body change.

**Sourcing.** Many circulating screenshots are UI mock-ups, so placeholder
values (999,999 currency, level 99 caps) are flagged as such. The
quick-reference table names its source per row.

**Game content and images are © Thought Farm**, used for reference and
commentary. Every page footer says so and links to `about.html#usage`.

**No ads.** `privacy.html` and `about.html` both state this plainly. If that
ever changes, both pages must be rewritten *first*.

---

## Pre-ship checks

Run before pushing anything non-trivial.

```bash
# 1. JavaScript syntax
for f in *.js; do node --check "$f" || echo "FAIL $f"; done

# 2. Every JSON-LD block parses
python3 -c "
import re,glob,json
for f in sorted(glob.glob('*.html')):
    for m in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>',open(f).read(),re.S):
        try: json.loads(m)
        except Exception as e: print('BAD',f,e)"

# 3. Sitemap is valid XML
python3 -c "from xml.dom import minidom; d=minidom.parse('sitemap.xml'); print(len(d.getElementsByTagName('url')),'urls')"

# 4. No broken internal links
python3 -c "
import re,glob,os
for f in sorted(glob.glob('*.html')):
    for m in re.findall(r'(?:href|src)=\"([^\"]+)\"',open(f).read()):
        if m.startswith(('http','#','mailto:','data:','//')): continue
        t=m.split('#')[0].split('?')[0]
        if t and not os.path.exists(t): print('BROKEN',f,m)"

# 5. Every posts.js slug has an article file
node -e "
const fs=require('fs'),vm=require('vm');
const s=fs.readFileSync('posts.js','utf8'),i=s.indexOf('];')+2;
const c={o:null};vm.createContext(c);vm.runInContext(s.slice(0,i)+'\no=YAKKAMON_POSTS;',c);
c.o.forEach(p=>{if(!fs.existsSync('article-'+p.slug+'.html'))console.log('MISSING',p.slug)});
console.log(c.o.length,'posts checked')"

# 6. Favicon coverage — should print nothing
grep -L 'rel="icon"' *.html
```

A Playwright pass at 320 / 375 / 430 / 768 / 1280 catches mobile overflow. Load
pages over `file://` — Chromium can't reach localhost through the container
proxy — and when hunting overflow, ignore elements inside an ancestor with
`overflow-x: auto|scroll`, since those are swipeable by design.

---

## Known quirks

Hard-won, easy to re-break.

**`overflow-x: clip`, not `hidden`.** `html,body{overflow-x:hidden}` turns
`<body>` into a scroll container, which silently kills `position:sticky` on the
tab strip. `clip` gives the same runaway-width protection without creating a
scrollport.

**Never use the `padding` shorthand on a class applied alongside `.wrap`.**
`.page-head` and `.article-head` used to, which reset the `24px` side padding
`.wrap` supplies — putting every `<h1>` and category badge flush against both
phone screen edges, on every page. Use `padding-top` / `padding-bottom`.

**Flex and grid children need explicit `min-width: 0`**, or they refuse to
shrink below their content width on mobile.

**`.tab-wide { grid-column: 1/-1 }` only works on the *last* tab.** Mid-grid it
forces a new row and leaves empty cells. That's why Contact carries it, not
Videos.

**The topbar is `position: static` under 760px** on purpose — the mobile tab
grid is ~243px tall, so sticking it would eat half the screen.

**An author `display: inline-flex` beats the browser's default
`[hidden]{display:none}`.** Anything hidden via the `hidden` attribute needs an
explicit `[hidden]{display:none}` rule.

**The footer "LATEST NEWS" column is static** across all 48 pages and is not
generated from `posts.js`. It has not been refreshed for recent articles.

**`deposit-week.js` starts week 1 at 00:00 UTC on 10 Aug**, but the official
deposit windows turn at **02:00 UTC** — so for two hours every Monday the site
shows next week's multiplier early. Not fixed.

**Nine pages load `deposit-week.js` without containing a `.deposit-week`
element.** Harmless, but they are dead script tags.

**`index.html` is canonicalised to `/`**, not `/index.html`, and the sitemap
matches. Keep those two agreeing.

**Search is a hand-maintained index.** There is no crawler. If you don't add a
`search.js` entry, the page is genuinely unfindable on the site.
