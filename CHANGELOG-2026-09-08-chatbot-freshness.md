# Changelog — 8 September 2026 — Chatbot freshness fix

Built on main `e1a1674` (pulled from GitHub at 14:45 UTC).

## The bug
Asked "Can I be in Wave 3 if I play already Axie Infinity?" at ~14:45 UTC, the chat answered from the
old state ("the team hasn't published the criteria") although `article-ronin-wave.html`, five new FAQ
entries and the official Ronin Wave page were all pushed at 14:17 and the Action had rebuilt
`chatbot-knowledge.json` at 14:18 (876 chunks).

The worker's `/status` showed why: `knowledge.built = 2026-09-08T02:43:24Z`, 846 chunks — the
**previous** rebuild. The Action committed its rebuild with `[skip ci]` in the message, and Cloudflare's
Git integration skips the deploy of any commit whose message contains `[skip ci]` / `[ci skip]`. So a
rebuilt JSON (and the rebuilt static hubs `index.html` / `news.html` / `faq.html` / `videos.html`) only
went live with the *next* manual upload. The chat — and the static hubs — were always one update behind.
Every "Rebuild chatbot knowledge" commit since 2 September was affected.

Second, smaller gap: the worker fetches a fixed set of 9 docs pages live, and the builder's snapshot used
the same fixed list, so the new official sub-page `pre-registration/free-mint/ronin-wave` was invisible to
both (the earlier batch today worked around it by summarising the page in `chatbot-official-posts.md`).

## Changed
- `.github/workflows/chatbot-knowledge.yml`
  - Commit message is now `Rebuild chatbot knowledge and static hubs (auto)` — no skip keyword, so
    Cloudflare deploys it. (GitHub never re-runs a workflow from a push made with the workflow's own
    token, so no loop; the job's `(auto)` guard is belt and braces.)
  - New step after the push: polls the live `chatbot-knowledge.json` until its `built` stamp matches
    (up to 10 min), then `POST`s the worker's `/refresh` so it reloads immediately. A worker without that
    endpoint answers 404 — harmless, it then refreshes on its own 10-minute timer. If Cloudflare has not
    deployed after 10 min the run prints a warning (not a failure) naming the Deployments page to check.
  - New `schedule` trigger every 6 hours, so a new or changed page on docs.yakkamon.com reaches the chat
    even on a day with no site upload. Quiet when nothing changed (see builder).
- `build-chatbot-knowledge.mjs`
  - Official docs are now **discovered**, not listed: `docs.yakkamon.com/llms.txt` gives the index, and
    every `.md` link found inside a fetched page (markdown or HTML `href`) adds a sub-page —
    `free-mint/ronin-wave` is found this way from the free-mint table. Media kit and legal pages are
    skipped. The old list is kept as the fallback if `llms.txt` is unreachable and as the definition of
    the pages the worker fetches live: those keep kind `docs`, everything else is kind `post` so the
    worker keeps the snapshot beside its live docs (same path as the `Source:` sections).
  - GitBook's trailing "Agent Instructions" block is now stripped correctly (its format has a blank line
    after the `---`); the old regex missed it, so 9 boilerplate chunks were in every build.
  - Unchanged content keeps the previous `built` stamp → byte-identical file → nothing to commit. This is
    what keeps the 6-hourly scheduled runs from producing empty commits and deploys.
- `README.md` — chatbot section rewritten around the real pipeline; new house rule: never `[skip ci]`
  in a commit message; "How long until the chat knows?" paragraph with the `/status` check.
- `chatbot-official-posts.md` — header note updated (the `Source:` trick is now a fallback, not the
  normal path). The Ronin Wave summary section is left in place as a safety net; it can be deleted once
  a rebuild's log shows `kept as snapshot-only: pre-registration/free-mint/ronin-wave`.

## Not changed (needs the worker repo)
- `yakkamon-chat-worker` still caches the JSON for up to 10 minutes and fetches only its fixed 9 docs
  pages. Planned: `POST /refresh` (drop caches; throttled), docs discovery from `llms.txt` + sub-pages
  (then move those slugs into `DOCS_PAGES` here), and a priority rule that lets YakkamonWorld content
  answer when the official docs are silent instead of "not confirmed".

## Verify after pushing
1. Actions tab → the run should end with `Deployed after ~N s.` and `worker /refresh → HTTP 200` (or 404
   until the worker is updated).
2. `https://yakkamon-chat-worker.yakkamonworld.workers.dev/status` → `knowledge.built` equals the `built`
   at the top of `https://yakkamonworld.com/chatbot-knowledge.json` (within 10 min of the deploy).
3. Ask the chat: "Can I be in Wave 3 if I play already Axie Infinity?" — it should name Atia's Blessing,
   Mystic Axies, marketplace trades and transfers, and point to the candidate lists.
