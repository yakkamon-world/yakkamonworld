# Changelog — October 14, 2026 (second pass) — Gameplay: the Systems section redesigned

## Why

The first October 14 redesign kept the 27 systems in a narrow, sticky sidebar (230px, its own scrollbar,
most titles wrapping onto two lines) next to a panel of heavy semi-bold text with bold phrases throughout.
Feedback: the long narrow navigation and the "stressed" text were hard to use. This batch replaces both.
No system's content changed. Built on main `aaf1b5e`, which matched the uploaded zip byte-for-byte.

## Changed — `gameplay.html` `#systems`

- **System board** (`#gp-map`) replaces the sidebar and the phone `<select>`: one wide board, one row per
  group, the group's name and count in a colored label cell on the left and its systems as chips (icon +
  title) on the right. All 27 are visible at once. Seven group colors (neutral, yellow, green, blue,
  orange, red, purple), so a system's group is recognizable on the board and in the reader. The chosen
  system's chip is yellow with a shadow.
- **Reader** (`#gp-detail`, now an `<article class="gp-reader">`) under the board, full width:
  - a header band in the group's color with the icon, group name, "System N of 27, about an N-minute read",
    round previous / next arrows, and the title;
  - the "Like this" analogy as a yellow note at the top of the text (was a green box at the bottom);
  - an **"In this system"** list on the eleven systems with four or more parts (open on wide screens,
    folded on phones), linking to each part;
  - the body in a centered column of about 80 characters per line, weight 500 instead of 600, line height
    1.75; the `<br><br>` runs become real paragraphs, and a bold sentence that opens a paragraph ("Beds are
    capacity.", "1. The setup stage.", "Unpublished:") becomes a subheading — the bold no longer carries
    the structure, so far less of the text is bold; remaining inline bold is 700;
  - previous / next cards at the bottom (the last system offers "Back to all 27 systems").
- **Phones (≤760px):** the board folds behind one yellow "All 27 systems" bar that also shows what you're
  reading; picking a system closes it and scrolls to the reader. "Back to all 27 systems" opens it.
- Section intro rewritten: "Seven groups, twenty-seven systems. Pick one and it opens in the reader below…".

## Changed — code

- `gameplay-page.js` — systems half rewritten: `GP_GROUPS` gains a `key` per group (its color); board
  render, reader render (`gpBuildProse` does the paragraph / subheading pass at runtime from the unchanged
  `detail` HTML; subheading ids are `gp-<slug>-<n>`, so `?system=hunting#gp-hunting-3` deep-links a part),
  previous / next in board order, focus moves to the reader title after a pick, smooth scroll respects
  reduced motion. Kept: `?system=` URLs and back / forward, every in-page `?system=` link swapping the
  reader (Genesis cards, banner, quick reference), deep links landing on the reader, the jump bar, the
  folds and the quick-reference filter. Plain `#anchor` links are now left to the browser.
- `style.css` — new `.gp-map*`, `.gp-chip*`, `.gp-reader*`, `.gp-note`, `.gp-toc`, `.gp-prose`, `.gp-pn`,
  `.gp-g-<key>` block; removed the old `.gp-detail*`, `.gp-systems` sidebar, `.sidebar-group` and
  `.gp-select` rules.
- `gameplay.js` — comments only (header note, field docs: how `detail` paragraphs and lead-ins render).

## Fixed alongside

- The first October 14 batch added `.sidebar-list{display:none}` under 760px **unscoped**, which hid the
  category lists on **News, Early Access, Tips, About, Contact and Privacy** on phones (only the empty
  "CATEGORIES" box showed). Removed with the sidebar; all six lists show on phones again.

## Checklist

- Sitemap: no change — `gameplay.html` lastmod is already 2026-10-14; no new URL.
- dateModified: none needed — layout only; the page has no JSON-LD dateModified and its visible
  "Updated October 14" line is already today.
- Chatbot: no change needed — it reads the systems from `gameplay.js` data, which is unchanged.
- Search (`search.js`, 516 entries, unchanged count): the stale "Gameplay systems — The seven core systems"
  entry rewritten for the 27 systems in seven groups and pointed at `gameplay.html#systems`; "The core loop"
  now opens `gameplay.html?system=core-loop` directly.
- Internal links: previous / next between all 27 systems, plus the "In this system" part links.
- `README.md` — gameplay.html and gameplay-page.js descriptions, the add-a-system task (paragraph and
  lead-in convention, group key + color, hand-written counts), new Known quirk **GAMEPLAY SYSTEM BOARD +
  READER** (including the unscoped-sidebar warning).

## Checks run

`node --check` on every `.js` / `.mjs` (clean); HTMLParser tag balance on `gameplay.html` clean; Playwright
over `file://` with the site fonts injected at 320 / 375 / 430 / 768 / 1024 / 1280 on `gameplay.html`
(default, `?system=genesis-legendaries`, `?system=hunting#gp-hunting-4`, `?system=platform-access`, board
opened on phones) and on News, Early Access, Tips, About, Contact, Privacy, the field guide and Home: zero
horizontal overflow, no page errors, every sidebar list visible. Runtime: 27 chips in 7 rows; picking a
chip updates the URL, swaps the reader, scrolls it under the sticky bars and focuses the title; arrows and
footer cards step through the board order; "In this system" links land each part under the sticky bars;
Back steps out of a part jump without rebuilding, then back to the previous system; the Genesis caption
link swaps the reader; `?system=` deep links land on the reader; `#roster` still opens its fold; an
unknown slug falls back to the first system; all 27 systems render with no empty or nested paragraphs;
on a phone the board starts folded, opens, closes after a pick, and the bar shows the current system.
