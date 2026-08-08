// CONTACT FORM
//
// The portal is a static site on Cloudflare Pages — there's no server to
// receive a POST — so the form hands off to a form-relay service that emails
// the submission to yakkamonworld@gmail.com.
//
// SETUP (one minute, no account needed):
//   1. Go to web3forms.com, enter yakkamonworld@gmail.com, and they email you
//      an access key.
//   2. Paste it into ACCESS_KEY below.
//   3. Done. Submissions arrive as email; nothing else to host or maintain.
//
// If ACCESS_KEY is left as the placeholder, the form doesn't break — it falls
// back to opening the visitor's mail client with everything pre-filled. So the
// page is usable the moment it's deployed, before you've set anything up.
//
// Prefer a different relay (Formspree, Getform, Basin)? Change ENDPOINT and the
// field names in buildPayload() — nothing else depends on the provider.

const ACCESS_KEY = "PASTE-YOUR-WEB3FORMS-ACCESS-KEY-HERE";
const ENDPOINT   = "https://api.web3forms.com/submit";
const FALLBACK_EMAIL = "yakkamonworld@gmail.com";

(function () {
  "use strict";

  const form   = document.getElementById("contact-form");
  const status = document.getElementById("cf-status");
  const button = document.getElementById("cf-submit");
  if (!form) return;

  const configured = ACCESS_KEY && !ACCESS_KEY.startsWith("PASTE-");

  function say(message, kind) {
    status.textContent = message;
    status.className = "cf-status " + (kind || "");
  }

  function buildPayload(data) {
    return {
      access_key: ACCESS_KEY,
      subject: "YakkamonWorld contact — " + (data.topic || "No topic"),
      from_name: "YakkamonWorld contact form",
      // Lets you hit reply in Gmail and answer the sender directly.
      replyto: data.email,
      name: data.name || "(not given)",
      email: data.email,
      topic: data.topic,
      message: data.message,
      botcheck: data.botcheck,
    };
  }

  // No relay configured yet — open the visitor's mail client instead, so the
  // form still does something useful.
  function mailtoFallback(data) {
    const subject = encodeURIComponent("[" + (data.topic || "Contact") + "] YakkamonWorld");
    const body = encodeURIComponent(
      "From: " + (data.name || "(not given)") +
      "\nEmail: " + data.email +
      "\nTopic: " + data.topic +
      "\n\n" + data.message
    );
    window.location.href = "mailto:" + FALLBACK_EMAIL + "?subject=" + subject + "&body=" + body;
    say("Opening your email app — if nothing happens, write to " + FALLBACK_EMAIL + " directly.", "ok");
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: a real person never fills a field they can't see.
    if (data.botcheck) return;

    if (!data.email || !data.topic || !data.message) {
      say("Please fill in your email, a topic, and a message.", "err");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      say("That email address doesn't look right — we can't reply without it.", "err");
      return;
    }

    if (!configured) { mailtoFallback(data); return; }

    button.disabled = true;
    say("Sending…", "");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(buildPayload(data)),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success !== false) {
        form.reset();
        say("Thanks — that's landed. We read everything, and we'll reply if it needs one.", "ok");
      } else {
        throw new Error(result.message || "Relay returned " + res.status);
      }
    } catch (err) {
      console.warn("Contact form send failed:", err);
      say("Something went wrong sending that. Please email " + FALLBACK_EMAIL + " directly — sorry.", "err");
    } finally {
      button.disabled = false;
    }
  });
})();
