# Changelog — 2 September 2026 — "Ask me anything" chatbot

## New
- `chatbot.js` — the docked "Ask me anything…" bar on every page and its bottom
  sheet. Mobile first (full-width bar, two-thirds sheet, handle for full height,
  keyboard-aware), centred pill + card from 760px. Conversation survives page
  changes within the tab (sessionStorage). `index.html#ask` opens it on load.
  Three free questions a day per browser (localStorage), then a follow card
  (X / YouTube) that unlocks the chat for 30 days on tap — honour system,
  nothing sent to us. `FREE_PER_DAY = 0` switches it off.
- `chatbot-bird.webp` — the character on the bar and in the sheet header.
- `chatbot-knowledge.json` — GENERATED search index of the site for the worker
  (FAQ, gameplay systems, videos, every article and hub page, plus the digest).
- `chatbot-digest.md` — the Cumulative Dev Stream digest (2 Sep version).
- `build-chatbot-knowledge.mjs` — builds the JSON above; no dependencies.
- `.github/workflows/chatbot-knowledge.yml` — rebuilds and commits the JSON on
  every content push (needs "Read and write" workflow permissions once).
- Companion repo `yakkamon-chat-worker` (separate): the Cloudflare Worker that
  fetches docs.yakkamon.com live, searches the JSON, asks Claude, rate-limits.

## Changed
- Every page (53): `<script src="chatbot.js" defer></script>` added before
  `search.js`. Nav-only change — no `dateModified` bumps.
- `style.css`: new "Ask me anything bar" block at the end; `body.cb-bar-on`
  adds bottom padding so the bar never covers the footer.
- `privacy.html`: "What we collect" now lists the chat; new `#chatbot` section
  disclosing that questions go to our Worker → Anthropic and are not stored;
  sidebar link; "Last updated" → 2 September 2026; sitemap `<lastmod>` mirrored.
- `search.js`: one "Help" entry pointing at `index.html#ask`.
- `README.md`: new "The chatbot" section, worker table row, repo layout lines,
  new-page checklist line, house rule "The chat stores nothing".

## To do after merging (one-time)
1. Deploy `yakkamon-chat-worker`, add the `ANTHROPIC_API_KEY` secret.
2. Paste the worker URL into `WORKER_URL` at the top of `chatbot.js`.
3. Turn on "Read and write" workflow permissions so the Action can commit.
