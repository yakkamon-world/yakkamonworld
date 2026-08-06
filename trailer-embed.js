// Click-to-play trailer embed ("facade" pattern).
//
// Why not a plain <iframe src="youtube.com/embed/...">: a live YouTube
// iframe pulls roughly 1-1.5 MB of scripts on page load, blocks the main
// thread on mobile, and sets third-party cookies before the visitor has
// asked for a video. On the home page that cost lands right on top of the
// ticket and countdown, which are the things people actually came for.
//
// So the page ships a poster image and a play button (~30 KB total). The
// real iframe is only created when someone clicks it. Nothing loads from
// YouTube until then, apart from the poster if you use the ytimg fallback.
//
// To change the video, edit data-video-id in index.html. Nothing here
// needs touching.

(function () {
  "use strict";

  // youtube-nocookie.com sets no cookies, which is better for privacy — but a
  // cookieless request with autoplay is also what YouTube's anti-bot heuristic
  // looks like, and it can answer with "Sign in to confirm you're not a bot"
  // instead of the video. The normal embed host is far less likely to trip it.
  // Nothing loads from YouTube until the visitor clicks either way, so the
  // privacy cost of this is small.
  var EMBED_HOST = "https://www.youtube.com";
  var warmed = false;

  // Open the connections the moment intent shows (hover / touch / focus),
  // so the click itself has less to wait for.
  function warm() {
    if (warmed) return;
    warmed = true;
    ["https://www.youtube.com", "https://i.ytimg.com", "https://www.google.com"].forEach(function (href) {
      var l = document.createElement("link");
      l.rel = "preconnect";
      l.href = href;
      document.head.appendChild(l);
    });
  }

  function play(facade) {
    // Self-hosted route: set data-video-src="trailer.mp4" on the facade and
    // YouTube is bypassed entirely. Nothing to rate-limit, nothing to gate.
    var localSrc = facade.getAttribute("data-video-src");
    if (localSrc) {
      var v = document.createElement("video");
      v.src = localSrc;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.setAttribute("poster", facade.querySelector("img") ? facade.querySelector("img").src : "");
      facade.parentNode.replaceChild(v, facade);
      v.focus();
      return;
    }

    var id = facade.getAttribute("data-video-id");
    if (!id || id === "VIDEO_ID") return;   // not configured yet — let the fallback link handle it

    var frame = document.createElement("iframe");
    // origin= tells YouTube which page the embed is on. It's a legitimacy
    // signal as well as an API requirement, and helps avoid the bot check.
    var auto = facade.getAttribute("data-autoplay") === "0" ? "0" : "1";
    frame.src = EMBED_HOST + "/embed/" + encodeURIComponent(id) +
                "?autoplay=" + auto + "&rel=0&playsinline=1" +
                "&origin=" + encodeURIComponent(window.location.origin);
    frame.title = facade.getAttribute("data-title") || "Trailer";
    frame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    frame.setAttribute("allowfullscreen", "");
    frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    frame.setAttribute("loading", "eager");

    facade.parentNode.replaceChild(frame, facade);
    frame.focus();
  }

  function setup(facade) {
    var id = facade.getAttribute("data-video-id");

    // Poster: prefer the self-hosted file, fall back to YouTube's own
    // thumbnail if it isn't there, so a missing image never leaves a hole.
    var img = facade.querySelector("img");
    if (img && id && id !== "VIDEO_ID") {
      // maxresdefault.jpg only exists for HD uploads, so fall back to
      // hqdefault.jpg, which YouTube generates for every video.
      img.addEventListener("error", function onErr() {
        img.removeEventListener("error", onErr);
        img.removeAttribute("srcset");   // srcset wins over src, so it has to go first
        img.removeAttribute("sizes");
        img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg";
      });
    }

    ["pointerenter", "touchstart", "focusin"].forEach(function (evt) {
      facade.addEventListener(evt, warm, { once: true, passive: true });
    });

    facade.addEventListener("click", function (e) {
      e.preventDefault();
      play(facade);
    });
  }

  function init() {
    var nodes = document.querySelectorAll(".yt-facade[data-video-id]");
    Array.prototype.forEach.call(nodes, setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
