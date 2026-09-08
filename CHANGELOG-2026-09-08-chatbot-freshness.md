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

## Second upload, same day (workflow v2)
The first upload landed as two commits 14 seconds apart (`bd148b7` content, `8ab3416` workflow). Run #16
built on the first, and its `git push` was rejected because main had already moved to the second — the
old "Commit if changed" step had no retry, so the run failed and nothing was committed. The second commit
did not start a run at all because the workflow file was not in the `paths` filter.
- Commit step now retries: on a rejected push it fetches main, rebuilds on the new head and pushes again
  (three tries), then fails loudly.
- `.github/workflows/chatbot-knowledge.yml` added to `paths`, so a workflow change triggers a run.

## Worker (shipped separately as `yakkamon-chat-worker-freshness.zip`)
- `POST /refresh` (rate-limited, 20 s gap) — the Action calls it after every deploy.
- Official pages discovered from `llms.txt` + in-page `.md` links (sub-pages), `DOCS` kept as fallback;
  `/status` now lists `docs.slugs`.
- Site JSON re-checked every 3 minutes with `If-None-Match` (a 304 is free); no edge caching of it.
- Cached answers keyed by the JSON's `built` stamp + a docs fingerprint — the six-hour answer cache can
  no longer serve a pre-change answer (this affected the five "most asked" chip questions most).
- Snapshot official chunks are replaced by URL (any page fetched live wins), so the `Source:` summary
  in `chatbot-official-posts.md` is automatically superseded by the live page.
- Rule 2b: when the official pages are silent, YakkamonWorld content answers (attributed) instead of
  "not confirmed".

## Verify after pushing
1. Actions tab → the run should end with `Deployed after ~N s.` and `worker /refresh → HTTP 200` (or 404
   until the worker is updated).
2. `https://yakkamon-chat-worker.yakkamonworld.workers.dev/status` → `knowledge.built` equals the `built`
   at the top of `https://yakkamonworld.com/chatbot-knowledge.json` (within 10 min of the deploy).
3. Ask the chat: "Can I be in Wave 3 if I play already Axie Infinity?" — it should name Atia's Blessing,
   Mystic Axies, marketplace trades and transfers, and point to the candidate lists.
