# Yakkamon Player Portal — pixel edition

Design: pixel-cartoon (Press Start 2P display font, VT323 body font, hard
block borders and offset "pressed-button" shadows, flat retro-game colors).

Navigation: fixed top tabs, each a real page — Home / News / Gameplay /
Community / Stats. No scrolling hub; every tab is its own destination.

No installation, no coding, no build step. Just plain web files.

All CSS and JavaScript are inlined directly into each HTML page (not
loaded from separate files) so the site works no matter how you open or
preview it — some viewers block external stylesheet/script files loaded
via a relative path, which caused blank sections in earlier versions.
The `js/*.js` files are kept in the folder as the source of truth for
editing content — after editing one, its content needs to be pasted back
into the matching `<script>` block in the HTML file(s) that use it.

## 1. See it on your computer

Unzip, then double-click **index.html**. Click through the tabs at the top.

## 2. Editing content

Content lives directly inside a `<script>` block near the bottom of most
HTML files (search for `const YAKKAMON_GAMEPLAY` or `const YAKKAMON_TWEETS`).
Edit it the same way as before — copy one block, paste, edit the text —
just do it inside the HTML file itself:

- **Gameplay systems** — `gameplay.html`, in `YAKKAMON_GAMEPLAY`.

**Community page** is fully static now — no placeholder tweets. It links
out to @YakkamonWorld and @playyakkamon on X, shows Discord as "Coming
Soon" (no link yet), and links to the official docs and pre-registration
site. When the Discord opens, just add the real invite link to the
"Join Discord" button and swap the "Coming Soon" badge for something
else.

**News posts work differently** — each post is its own real HTML file
(`article-{slug}.html`), not a template driven by a URL. This is because
some viewers don't reliably pass `?post=slug`-style URL parameters through
when opening local files, which caused "Read more" to fail. Static files
side-step that entirely. To add a news post:

1. Open `news.html` and find `const YAKKAMON_POSTS` near the bottom.
   Copy one post block, paste it in, edit the text (this makes the card
   show up on the News page).
2. Copy any existing `article-*.html` file (e.g.
   `article-free-mint-october-1.html`), rename it to
   `article-your-slug.html` — the slug must match what you used in step 1.
3. Inside that copied file, find the `<div class="article-head">` block
   and update the badge category, title, date, and the paragraphs inside
   `<div class="article-body">`.

More steps than before, but every article is now a plain, working page —
nothing can fail to load.

## 3. About the "Community" tab

No fake tweets anymore — `community.html` just links out to
@YakkamonWorld and @playyakkamon on X, since pulling a real live feed
needs the X API (paid, needs a small backend to call safely) or an
official embed widget. Happy to build that real backend connection in
Claude Code whenever you're ready for it. Discord shows as "Coming Soon"
until there's a real invite link to add.

## 4. Going live

Drag the whole `yakkamon-pixel` folder onto https://app.netlify.com/drop
for a free live URL. Any static host works — it's plain HTML/CSS/JS.

## File map

```
yakkamon-pixel/
├── index.html                          ← Home tab (fully static, no script needed)
├── pre-registration.html                ← Pre-registration tab (fully static)
├── news.html                            ← News tab (sidebar + archive, content inlined)
├── gameplay.html                        ← Gameplay tab (sidebar + detail, content inlined)
├── community.html                       ← Community tab (tweets + links, content inlined)
├── stats.html                           ← Stats tab (locked trainer lookup teaser, static)
├── article-free-mint-october-1.html     ← individual news article (static)
├── article-genesis-airdrop-5000.html    ← individual news article (static)
├── article-flower-deposits-explained.html ← individual news article (static)
├── article-reward-track-explained.html  ← individual news article (static)
├── css/style.css                        ← reference copy of the styling (also inlined per page)
└── js/                                  ← reference copy of gameplay.js — see section 2
```
