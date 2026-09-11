// OneSignal push-notification service worker.
// MUST stay at the repo root under exactly this name — browsers register it
// once and cache the registration, so renaming or moving it breaks alerts
// for every existing subscriber. Do not add anything else to this file.
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
