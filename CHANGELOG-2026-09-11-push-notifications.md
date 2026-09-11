# Changelog — September 11, 2026 — News push notifications (desktop, Android, iPhone)

A NEWS ALERTS bell now sits in the masthead's social row on every page. Visitors who
tap it and choose Allow get a push notification the moment a new post lands in
`posts.js` on main — sent automatically by a new GitHub Action through OneSignal,
with the article title as the text and the article as the click-through. Desktop
and Android work from a plain browser visit; iPhone visitors tapping the bell in
Safari get a three-step Add-to-Home-Screen card (iOS only delivers web push from
the installed app, iOS 16.4+). Built on main `<fill at upload>`, pulled fresh from
GitHub.

## New files
- `push-alerts.js` — injects the bell into `.mh-social` at runtime (button styled
  as a fourth `follow-badge`), loads the OneSignal v16 SDK, and owns the states:
  "News Alerts" → "Alerts On ✓" (green) → "Alerts Blocked" (permission denied).
  Clicking toggles the subscription. On iOS Safari (not installed) the click opens
  the install-steps card instead. INERT until the OneSignal App ID is pasted at the
  top of the file — no bell renders, nothing loads, so it deploys safely before the
  OneSignal account exists.
- `OneSignalSDKWorker.js` — the push service worker (one importScripts line). Must
  stay at the repo root under exactly this name forever; browsers cache the
  registration.
- `manifest.webmanifest` — web-app manifest (standalone display, cream background,
  ink theme, 192 + 512 icons). This is what iPhones install from Add to Home Screen.
- `favicon-512.png` — the 192 icon upscaled (flat art, clean at 512) for the manifest.
- `.github/workflows/push-notify.yml` + `.github/scripts/push-notify.mjs` — on any
  push to main touching `posts.js` (and not the chatbot Action's "(auto)" commit),
  the script diffs posts.js against the commit before the push, finds new slugs,
  and POSTs one notification per new post to api.onesignal.com. Safety rails: only
  posts dated within 3 days (a restored backup can't blast old articles), max 3 per
  push, exits green with "not configured" until the two repo secrets exist
  (`ONESIGNAL_APP_ID`, `ONESIGNAL_REST_API_KEY`).
- `CHANGELOG-2026-09-11-push-notifications.md` — this file.

## Changed files
- ALL 60 pages except `gameplay-poster-source.html` — two additions each:
  `<link rel="manifest" href="manifest.webmanifest">` after the apple-touch-icon
  line, and `<script src="push-alerts.js" defer></script>` before `</body>`. The
  bell itself is injected by the script, so no masthead markup changed.
- `style.css` — "News-alerts bell" block at the end: button reset for the badge,
  the green `.yw-on` state, and the `.yw-tip` install card (white card, 4px ink
  border, offset shadow, comic h3).
- `faq.js` — two new questions in Start here (132 total): "How do I get notified
  when news drops?" and "How do I get news alerts on my iPhone?" (the three
  Safari steps). FAQPage JSON-LD and the static `<details>` copy rebuilt with
  `build-static-hubs.mjs`.
- `search.js` — two Help entries for the two FAQ answers (429 total).
- `sitemap.xml` — faq.html lastmod already 2026-09-11 from today's earlier batch;
  no other URL changed (no new page).
- `README.md` — repo-layout lines for the five new files, a "News push
  notifications" common-task section, and a PUSH ALERTS known-quirks note
  (worker-file rename warning, inert-until-configured, the iPhone rule).

## Verified
- `node --check` on every .js/.mjs; workflow YAML parses; tag balance on all 61
  pages; every JSON-LD block in faq.html parses; sitemap parses (59 URLs).
- Playwright: unconfigured script renders NOTHING (0 bells); with a dummy App ID
  the bell renders with the right label at desktop width; iPhone UA click opens
  the install card and scrim-click closes it; zero horizontal overflow at 375.
- The sender script parses the real posts.js (46 posts) and builds the correct
  article URL from the top slug.

## Chatbot
The two FAQ answers are tier-2 sources via faq.js; the knowledge Action rebuilds
on push, so the chatbot can explain the bell and the iPhone steps.

## Not in the repo
`SETUP-PUSH-NOTIFICATIONS.md` (delivered alongside) — the click-by-click OneSignal
account setup, the App ID paste, and the two GitHub secrets. Do not upload it;
nothing in it is secret, but it's a one-time instruction sheet, not site content.
