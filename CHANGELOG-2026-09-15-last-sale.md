# Changelog — September 15, 2026 — The Mint Desk: OpenSea shows LAST SALE, not floor

Built on main `d05175a` (the uploaded zip matched it byte-for-byte). NOTE: the
Sept 15 Bad Eggs batch is NOT on main yet — if it is uploaded later, take its
`mint-desk.js`, `index.html` and `pre-registration.html` and reapply the three
edits below (they touch different lines).

## Changed
- `index.html`, `pre-registration.html` — in the OpenSea venue of `#mint-desk`, the
  `Floor` cell (`data-md-os-floor` / `-usd`) is now `Last sale`
  (`data-md-os-last` / `data-md-os-last-usd`). Ronin Market keeps its Floor cell.
- `mint-desk.js` — `venue()` fills a `-last` slot from `lastSale` / `lastSaleSymbol` /
  `lastSaleAt`, sub-line "≈ $x · 3h ago" (new `ago()` helper). The floor code path
  stays, so a page can show either cell by markup alone. Payload comment updated.
- `search.js` — Mint Desk excerpt: "OpenSea's last sale, top offer, listed count and
  24h volume" (excerpt only; entry count unchanged).
- `README.md` — Mint Desk section documents the last-sale field and its worker source.
- `WORKER-PATCH-last-sale.md` — NOT for the repo: the three edits for
  `yakkamon-mint-worker/index.js` (Cloudflare). Until deployed, the cell shows a dash.

## Not changed
- `sitemap.xml`, `dateModified` — a label swap in live chrome, no content change.
- Chatbot — nothing in its sources described the floor cell; the search excerpt is
  the only text that named it. Action rebuilds on push as usual.
