// ---------------------------------------------------------------------------
// /flower — live $FLOWER price for the site masthead
//
// Drop this into the yakkamon-counter-worker repo and wire the route in
// alongside /count, /status and /refresh:
//
//   if (url.pathname === "/flower") return handleFlower(request, env, ctx);
//
// Why this lives in the worker instead of the browser: the site calls it on
// every page load of every page, and we don't want that hitting a third party
// from each visitor's IP — same reason the YouTube embed came off the home
// page. It also keeps us clear of CoinGecko's rate limit, since the edge
// cache collapses all of it into one upstream call per minute.
//
// TOKEN ID: `flower-2` is Flower (Base / Polygon / Ronin), the token Yakkamon
// actually uses. `sunflower-land` is the OLD SFL token at a different price.
// Do not swap these.
// ---------------------------------------------------------------------------

const COINGECKO =
  "https://api.coingecko.com/api/v3/simple/price" +
  "?ids=flower-2&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true";

const TTL_SECONDS = 60;          // how long the edge cache holds a reading
const KV_KEY = "flower:last";    // last good reading, for when CoinGecko is down

const CORS = {
  "Access-Control-Allow-Origin": "https://yakkamonworld.com",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
};

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${TTL_SECONDS}`,
      ...CORS,
      ...extraHeaders,
    },
  });
}

export async function handleFlower(request, env, ctx) {
  if (request.method === "OPTIONS") return new Response(null, { headers: CORS });

  // 1. Edge cache. One upstream call per minute no matter the traffic.
  const cache = caches.default;
  const cacheKey = new Request(new URL(request.url).origin + "/flower", { method: "GET" });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  let payload = null;

  // 2. Upstream.
  try {
    const res = await fetch(COINGECKO, {
      headers: { Accept: "application/json" },
      cf: { cacheTtl: TTL_SECONDS, cacheEverything: true },
    });
    if (res.ok) {
      const data = await res.json();
      const coin = data && data["flower-2"];
      if (coin && typeof coin.usd === "number" && coin.usd > 0) {
        payload = {
          usd: coin.usd,
          change24h: typeof coin.usd_24h_change === "number" ? coin.usd_24h_change : null,
          checkedAt: new Date().toISOString(),
          stale: false,
        };
        // Keep the last good reading so a CoinGecko outage degrades quietly.
        if (env.YAKKAMON_KV) {
          ctx.waitUntil(env.YAKKAMON_KV.put(KV_KEY, JSON.stringify(payload)));
        }
      }
    }
  } catch {
    /* fall through to KV */
  }

  // 3. Last good reading, honestly labelled. The site hides the widget once
  //    a reading is over an hour old, so `stale` isn't load-bearing there —
  //    but /flower shouldn't lie about what it's returning either.
  if (!payload && env.YAKKAMON_KV) {
    try {
      const raw = await env.YAKKAMON_KV.get(KV_KEY);
      if (raw) payload = { ...JSON.parse(raw), stale: true };
    } catch {
      /* nothing cached yet */
    }
  }

  if (!payload) return json({ error: "unavailable" }, 503, { "Cache-Control": "no-store" });

  const out = json(payload);
  ctx.waitUntil(cache.put(cacheKey, out.clone()));
  return out;
}
