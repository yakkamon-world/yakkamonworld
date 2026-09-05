# Changelog — 5 September 2026 — news labels regrouped

The four old news categories (`event` / `community` / `guideline` / `tips`, plus an
unused `patch`) had drifted: "Event" covered everything from an official rule change
to our own economy analysis, and "Community" held dev-stream recaps, corrections and
site-feature launches side by side. All 41 posts were re-read and regrouped into six
labels that say what a post actually is.

| Key | Label | Posts | What goes here |
|---|---|---|---|
| `official` | Official News | 14 | Announcements, rule changes, dates, reveals from the team |
| `devstream` | Dev Stream | 5 | Stream recaps and decision gradings |
| `analysis` | Analysis | 7 | YakkamonWorld's own readings, strategy pieces, open corrections |
| `guide` | Guide | 6 | Step-by-step walkthroughs |
| `tips` | Tip | 4 | One actionable tip |
| `portal` | Portal Update | 5 | New site pages and features |

## Files

- `posts.js` — every `category` remapped; `tip-split-flower-deposits` (7 Aug) moved above the 5 Aug posts so the archive is strictly newest-first.
- `news.js` — new label maps; sidebar counts derived from the label map; old `?category=event|community|guideline|patch` URLs resolve to the nearest new group.
- `home-news.js` — new badge labels.
- `style.css` — `.badge-*` rules replaced (official red, devstream purple, analysis ink, guide yellow, tips sky, portal green).
- 41 × `article-*.html` — badge class + text updated. Metadata-only change: no `dateModified` bump, no sitemap change.
- `index.html`, `news.html`, `search.js` — the "patch notes, events and community updates" blurbs rewritten to match the new labels (sitemap lastmod for home + news → 2026-09-05).
- `search.js` — six entries for the category filter views.
- `README.md` — category list in "Add a news article".
