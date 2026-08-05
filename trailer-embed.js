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

  var EMBED_HOST = "https://www.youtube-nocookie.com";  // no cookies until playback
  var warmed = false;

  // Open the connections the moment intent shows (hover / touch / focus),
  // so the click itself has less to wait for.
  function warm() {
    if (warmed) return;
    warmed = true;
    ["https://www.youtube-nocookie.com", "https://www.google.com"].forEach(function (href) {
      var l = document.createElement("link");
      l.rel = "preconnect";
      l.href = href;
      document.head.appendChild(l);
    });
  }

  function play(facade) {
    var id = facade.getAttribute("data-video-id");
    if (!id || id === "VIDEO_ID") return;   // not configured yet — let the fallback link handle it

    var frame = document.createElement("iframe");
    frame.src = EMBED_HOST + "/embed/" + encodeURIComponent(id) +
                "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
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
      img.addEventListener("error", function onErr() {
        img.removeEventListener("error", onErr);
        img.removeAttribute("srcset");   // srcset wins over src, so it has to go first
        img.removeAttribute("sizes");
        img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/maxresdefault.jpg";
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
