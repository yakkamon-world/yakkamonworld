# Yakkamon Player Portal — pixel edition

Design: pixel-cartoon (Press Start 2P display font, VT323 body font, hard
block borders and offset "pressed-button" shadows, flat retro-game colors).

Navigation: fixed top tabs, each a real page — Home / News / Gameplay /
Community / Stats. No scrolling hub; every tab is its own destination.

No installation, no coding, no build step. Just plain web files.

All pages share **one real CSS file** (`css/style.css`) via a normal
`<link>` tag, and the News/Gameplay pages load their content from real
`.js` files via `<script src>`. Earlier drafts of this site had
everything pasted inline into every page instead — that was a workaround
for a preview tool that blocked external files, not something a real
browser needs. Once this is deployed on an actual host, external files
load completely normally, so the site now uses the cleaner, standard
setup: one CSS file to edit instead of ten copies, same for the JS.

## 1. See it on your computer

Unzip, then double-click **index.html**. Click through the tabs at the top.
(If you open it locally rather than through a real web server, some
browsers restrict `file://` pages from loading other local files — this
is a browser security rule, not a bug. It'll work perfectly once deployed
to Cloudflare Pages, GitHub Pages, Netlify, or any other real host.)

## 2. Editing content

- **Site-wide styling** — edit `css/style.css`. One file, every page
  picks up the change automatically.
- **News posts** — edit `js/posts.js` (search for `const YAKKAMON_POSTS`).
  Copy a post block, paste, edit the text — this makes the card show up
  on the News page. Then also create the matching article page (see
  below) so "Read more" has somewhere to go.
- **Gameplay systems** — edit `js/gameplay.js`.
- **Gameplay/News rendering logic** — `js/gameplay-page.js` and
  `js/news.js`. Only touch these if you want to change *how* things are
  displayed, not the content itself.

**Community page** is fully static — no placeholder tweets. It links out
to @YakkamonWorld and @playyakkamon on X, shows Discord as "Coming Soon"
(no link yet), and links to the official docs and pre-registration site.
When the Discord opens, add the real invite link and swap the "Coming
Soon" badge for something else.

**News articles are individual static pages** (`article-{slug}.html`)
rather than one template driven by a URL parameter — this was originally
a reliability fix, but it's also just simpler to reason about: every
article is a real, complete page. To add one:

1. Add a post block to `js/posts.js` (this makes the card appear).
2. Copy any existing `article-*.html` file, rename it to
   `article-your-slug.html` — the slug must match what you used in step 1.
3. Inside that copied file, update the badge category, title, date, and
   the paragraphs inside `<div class="article-body">`.

## 3. About the "Community" tab

No fake tweets — pulling a real live feed needs the X API (paid, needs a
small backend to call safely) or an official embed widget. Happy to
build that real backend connection in Claude Code whenever you're ready
for it.

## 4. Going live

You're most likely deploying this via GitHub + Cloudflare Pages (or
Netlify/Vercel) rather than the drag-and-drop method — any static host
works fine since it's plain HTML/CSS/JS with zero build step. Framework
preset: none. Build command: none. Output directory: `/`.

## 5. Adding a new page — checklist

Every page on this site shares the same `<head>` boilerplate: favicon
tags, the stylesheet link, and the search overlay markup. The easiest and
safest way to add a new page is to **copy an existing page** (e.g. copy
`article-access-code-today.html` for a new article) rather than writing
one from scratch — that way all of this comes along automatically:

- [ ] Favicon tags present (`rel="icon"`, `apple-touch-icon`)
- [ ] `<link rel="stylesheet" href="style.css">`
- [ ] Search button + search overlay markup, and `<script src="search.js">`
  before `</body>`
- [ ] Correct `active` class on the matching nav tab
- [ ] Added to `search.js`'s `SEARCH_INDEX` array so it's actually findable
- [ ] If it's a news post: added to `posts.js` too

To double check nothing was missed across the whole site at once, this
one-liner checks every page for the favicon tags specifically:
```
grep -L 'rel="icon"' *.html   # should print nothing if all pages are covered
```

## File map

```
yakkamon-pixel/
├── index.html                          ← Home tab
├── pre-registration.html                ← Pre-registration tab
├── news.html                            ← News tab (sidebar + archive)
├── gameplay.html                        ← Gameplay tab (sidebar + detail)
├── community.html                       ← Community tab
├── stats.html                           ← Stats tab (locked trainer lookup teaser)
├── article-free-mint-october-1.html     ← individual news article
├── article-genesis-airdrop-5000.html    ← individual news article
├── article-flower-deposits-explained.html ← individual news article
├── article-reward-track-explained.html  ← individual news article
├── css/style.css                        ← all site styling (single source of truth)
└── js/
    ├── posts.js           ← news content — edit this to add/change posts
    ├── gameplay.js         ← gameplay systems content
    ├── news.js             ← renders the news sidebar + archive grid
    └── gameplay-page.js    ← renders the gameplay sidebar + detail view
```
