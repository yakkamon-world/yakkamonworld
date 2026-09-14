# Changelog — September 14, 2026 — The Mint Desk

A live numbers panel under the free-mint wave tiles on Home and Early Access, replacing the
fine-print line that used to sit there. Built on main `f0bbee9`, which matched the uploaded zip
byte-for-byte.

## What it shows

Two bands, deliberately nothing else:

- **Minted** — a supply bar, minted against 10,000, owners, remaining, and a five-cell row giving
  the split across the waves.
- **Market** — OpenSea floor, top offer, listed count, 24h volume, and Ronin Market's status, which
  until September 21 is simply "Sept 21". A note underneath says plainly that OpenSea is the only
  live venue and the team advises against trading before Ronin Market opens.

The title bar carries the freshness line on the right: **"Updated 03:29 UTC · next in 1:20"**,
ticking down every second. The countdown runs off the worker's own `updated` stamp and the
`everyMs` it reports, so it says when the DATA was refreshed rather than when the page last asked.
When it reaches zero the script fetches again; if the worker is running late the line reads
"due now" instead of counting into negative numbers. Same pattern as the leaderboard's freshness
line, and it means a frozen desk is visibly frozen.

## New files

- `mint-desk.js` — reads `/mint` on the mint worker and fills the `data-md-*` slots. Ticks once a
  second for the countdown, refetches when the countdown expires (never more often than every 15
  seconds), pauses entirely on a hidden tab. **Inert until its `WORKER` constant at the top holds a real
  URL** — the same pattern as `push-alerts.js`. That is deliberate: a desk showing frozen numbers
  during mint week is worse than one showing none, so with no feed the markup's own dashes stay.
- `WORKER-yakkamon-mint-worker/` — **not part of this repo.** The worker's `index.js`,
  `wrangler.jsonc` and `package.json`, to be deployed as a separate Cloudflare Worker like the
  counter and leaderboard ones. Setup steps are in `SETUP-MINT-DESK.md`, also not for the repo.

## Changed files

- `index.html`, `pre-registration.html` — the `<p class="fm-fine">` line is **removed** and the
  `<div class="md" id="mint-desk">` block takes its place, between the wave tiles and the CTA row.
  `mint-desk.js` added before `</body>`. Same markup on both pages — edit them together.
- `style.css` — the hero grid gained a `desk` row in both its `grid-template-areas` declarations
  (base and the ≤1000px variant); the two `.fm-fine` rules are retired and replaced by the `.md-*`
  block; under 760px the desk's wave row drops from five columns to two.
- `search.js` — two entries pointing at `index.html#mint-desk` and `pre-registration.html#mint-desk`.
  441 entries.
- `sitemap.xml` — `<lastmod>` 2026-09-14 on `/` and pre-registration. 60 URLs, unchanged.
- `README.md` — a "Change what The Mint Desk shows" common task and a repo-layout line, both
  warning that the dashes are the no-JS state rather than placeholders to fill in by hand.

## What the fine print took with it

The removed line carried four internal links — the whitelist checker, the odds article, the
mint-page article and the collection-page article — plus "one mint per wallet per wave", the
October 14 reveal date and the +250-points-per-mint note. **None of that has been relocated.** The
checker still has its own CTA button, and every fact still lives in the guide and the FAQ, but the
home page no longer states them. Worth a decision rather than leaving it to drift.

## How per-wave counts work

Nothing publishes a per-wave mint count. The worker records total supply at each wave boundary the
first time it sees it and subtracts to get the count, so the figures are derived from timestamps,
not read. A wave whose boundary the worker missed reports null and shows a dash rather than a
guess — which means the worker should be running before Wave 2 opens, or Wave 1's mark is lost.

## Data sources, and what is deliberately missing

- **Minted** comes from `totalSupply()` on the collection over the public Ronin RPC. Free, no key,
  authoritative, and it cannot be read from a browser — hence the worker.
- **Floor, owners and 24h volume** come from OpenSea's v2 collection stats endpoint, which needs an
  API key and so must stay server-side.
- **Top offer and listed count are not in that endpoint.** The worker returns null for both and the
  desk shows a dash. They are reachable through other OpenSea endpoints; that is a second pass, not
  a reason to publish a number the source cannot stand behind.

## Checks

`node --check` on every .js/.mjs including the worker; `wrangler.jsonc` parses; every JSON-LD block
parses; tag balance clean on both edited pages; sitemap parses (60 URLs); 0 broken internal links
or anchors; Playwright at 320/375/768/1280 on Home and Early Access — 0px horizontal overflow, the
desk's five wave cells collapsing to two columns under 760px.
