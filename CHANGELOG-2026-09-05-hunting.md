# Changelog — 5 September 2026 — Official Hunting post

## New
- `article-hunting-explained.html` (slug `hunting-explained`, category EVENT, dated 5 Sep, og-default) — long analysis of the
  official "Yakkamon – Hunting" post: the eight points, impacts on players, how to get an edge, recommendations by wave,
  six questions for the team. ~3,900 words.
- `posts.js` — new top entry (41 posts).
- `search.js` — 7 News entries for the article, 4 FAQ entries for the new questions, existing "How does hunting work?" excerpt refreshed.
- `sitemap.xml` — 54 URLs; new article with `<lastmod>2026-09-05`; faq / gameplay / gameplay-guide lastmod → 2026-09-05.
- `CHANGELOG-2026-09-05-hunting.md` (this file).

## Updated in place (evergreen pages, per the editorial line)
- `gameplay.js` — `crafting-hunting`: new paragraph block for the Hunting post (timetable on the in-game clock, three temperaments,
  wild Legendaries and Rares, spread across grounds and Regions, Seasons rotate the map); `desc` and `like` refreshed; the old
  "legendaries lean more on events" line corrected — the post puts Legendaries in ordinary grounds.
- `gameplay.html` — page-updated note → 5 September; quick reference +5 rows (Wild temperaments, Spawn timing, Wild Legendaries &
  Rares, Depleted grounds, Seasons and hunting), all sourced "Hunting post (5 Sep)"; NOT CONFIRMED YET +1 (Hunting rates).
- `gameplay-guide.html` — §14 Hunting half rewritten, +3 cards (timetable, temperaments, Legendaries), link to the article;
  quick reference +5 rows; unknowns +1.
- `faq.js` — "How does a hunt actually work?" rewritten; +4 gameplay questions (103 → 107):
  affectionate/greedy/angry, Legendary by hunting, time of day, grounds running out. `faq.html` FAQPage JSON-LD regenerated
  (round-trip verified against the existing block before editing).
- `article-regions-explained.html` — one Read-next link (nav-only, no dateModified bump).
- `README.md` — 54 pages / 54 URLs.

## Not done
- Poster NOT redrawn (Hunting panel still reflects the free-mint stream only).
- `chatbot-knowledge.json` not regenerated locally — the GitHub Action rebuilds it on push.
- No X cut written.
