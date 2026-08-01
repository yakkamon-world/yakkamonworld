/*
  YAKKAMON PRE-REGISTRATION FORECAST  —  live table
  =================================================
  N(t) = S(t) + E(t)

  S(t)  Sunflower Land sign-ups. Bounded: the pool at every Bumpkin Level
        is public. Conversion falls steeply with level, modelled as a
        logistic  c(L) = cmax / (1 + e^(-a(L - L50))).  Each wave then
        saturates on an exponential approach after its gate opens.

  E(t)  Referral-driven sign-ups. Only from Aug 5. Each registered trainer
        pulls others in at a rate that decays as novelty fades, so it
        compounds off the running total but stays bounded.

  Every parameter is re-fitted against the recorded counter readings each
  time the page loads, so the projection self-corrects as data arrives.
  To add a reading, append to READINGS below.
*/
(function () {
  "use strict";

  // ---- Sunflower Land players by Bumpkin Level (public distribution) ----
  var LEVELS = {2:108912,3:42703,4:14767,5:21513,6:21467,7:11486,8:12307,9:10851,10:9585,11:7379,12:7559,13:6056,14:4376,15:4108,16:3782,17:3055,18:2893,19:2264,20:2385,21:1897,22:1920,23:2017,24:1279,25:2146,26:1224,27:1390,28:957,29:1019,30:1425,31:964,32:1179,33:869,34:830,35:672,36:943,37:808,38:609,39:442,40:896,41:596,42:467,43:1341,44:1140,45:966,46:965,47:925,48:818,49:656,50:904,51:816,52:720,53:721,54:715,55:728,56:771,57:661,58:692,59:573,60:905,61:740,62:715,63:759,64:612,65:684,66:661,67:574,68:628,69:468,70:548,71:400,72:395,73:351,74:274,75:249,76:285,77:223,78:201,79:143,80:170,81:141,82:167,83:119,84:112,85:107,86:106,87:85,88:109,89:81,90:111,91:94,92:108,93:85,94:71,95:68,96:56,97:50,98:46,99:33,100:82,101:63,102:45,103:30,104:35,105:46,106:33,107:36,108:29,109:26,110:34,111:28,112:30,113:14,114:27,115:27,116:23,117:23,118:23,119:18,120:14,121:22,122:29,123:16,124:21,125:15,126:16,127:19,128:16,129:17,130:22,131:11,132:12,133:15,134:16,135:20,136:10,137:12,138:15,139:14,140:10,141:10,142:6,143:12,144:6,145:10,146:10,147:6,148:5,149:5,150:18,151:6,152:9,153:7,154:5,155:3,156:1,157:9,158:8,159:5,160:14,161:1,162:4,163:3,164:6,165:9,166:5,167:1,168:2,169:7,170:4,171:2,172:9,173:3,174:5,175:4,176:5,177:3,178:4,179:3,180:6,181:3,182:2,183:5,184:2,185:5,186:4,187:2,188:2,189:6,190:7,191:3,192:3,193:3,194:2,195:2,196:3,197:4,199:2,200:107};

  // ---- Counter readings. Append new ones as they come in. --------------
  var READINGS = [
    { t: "2026-08-01T17:30:00Z", n: 741 },
    { t: "2026-08-01T19:31:00Z", n: 757 }
  ];

  // ---- Wave gates: [minLevel, maxLevel, opensISO] ----------------------
  var GATES = [
    [150, 999, "2026-07-31T00:00:00Z"],   // Jul 30, 8 PM ET
    [100, 149, "2026-08-01T00:00:00Z"],   // Jul 31
    [50,   99, "2026-08-02T00:00:00Z"],   // Aug 1
    [20,   49, "2026-08-03T00:00:00Z"]    // Aug 2
  ];
  var REFERRALS_OPEN = Date.parse("2026-08-06T00:00:00Z");  // Aug 5, 8 PM ET
  var DAY = 86400000;

  // Rows shown in the table
  var ROWS = [
    ["2026-07-30", "Lv 150+ opens"], ["2026-07-31", "Lv 100+ opens"],
    ["2026-08-01", "Lv 50+ opens"],  ["2026-08-02", "Lv 20+ opens"],
    ["2026-08-03", "Waves exhausted"], ["2026-08-05", "Referrals open"],
    ["2026-08-10", ""], ["2026-08-20", ""], ["2026-09-01", ""],
    ["2026-09-15", ""], ["2026-10-01", "FREE MINT"], ["2026-11-01", "EARLY ACCESS"]
  ];

  var G_CMAX = [0.45, 0.5, 0.55, 0.6, 0.65];
  var G_L50  = [55, 65, 75, 85, 95];
  var G_A    = [0.04, 0.055, 0.07, 0.09];
  var G_LAM  = [1.5, 2, 2.5, 3, 3.5, 4.5, 6];
  var G_RHO  = [0.005, 0.012, 0.025, 0.05, 0.09];
  var G_MU   = [0.02, 0.045, 0.08];

  function conv(L, cmax, L50, a) { return cmax / (1 + Math.exp(-a * (L - L50))); }

  // Terminal sign-ups per wave for a given conversion shape — precomputed
  // once per (cmax,L50,a) so the projection is just four exponentials.
  function terminals(cmax, L50, a) {
    var out = [0, 0, 0, 0];
    for (var k in LEVELS) {
      var L = +k, n = LEVELS[k];
      for (var i = 0; i < GATES.length; i++) {
        if (L >= GATES[i][0] && L <= GATES[i][1]) { out[i] += n * conv(L, cmax, L50, a); break; }
      }
    }
    return out;
  }

  function sflAt(t, term, lam) {
    var s = 0;
    for (var i = 0; i < GATES.length; i++) {
      var g = Date.parse(GATES[i][2]);
      if (t <= g) continue;
      s += term[i] * (1 - Math.exp(-lam * (t - g) / DAY));
    }
    return s;
  }

  // Full daily series of {t, N, S, E}
  function series(term, lam, rho, mu, endT) {
    var out = [], E = 0, step = DAY / 4;
    for (var t = Date.parse(GATES[0][2]); t <= endT; t += step) {
      var S = sflAt(t, term, lam);
      out.push({ t: t, N: S + E, S: S, E: E });
      if (t >= REFERRALS_OPEN) {
        E += rho * Math.exp(-mu * (t - REFERRALS_OPEN) / DAY) * (S + E) * (step / DAY);
      }
    }
    return out;
  }

  function valueAt(term, lam, rho, mu, t) {
    var S = sflAt(t, term, lam);
    if (t <= REFERRALS_OPEN) return S;
    var E = 0, step = DAY / 4;
    for (var x = REFERRALS_OPEN; x < t; x += step) {
      E += rho * Math.exp(-mu * (x - REFERRALS_OPEN) / DAY) * (sflAt(x, term, lam) + E) * (step / DAY);
    }
    return S + E;
  }

  // Least-squares fit + the ensemble of parameter sets that fit within tol
  function fit(readings) {
    var best = null, ens = [], all = [];
    var post = readings.some(function (r) { return Date.parse(r.t) > REFERRALS_OPEN; });
    for (var ci = 0; ci < G_CMAX.length; ci++)
      for (var li = 0; li < G_L50.length; li++)
        for (var ai = 0; ai < G_A.length; ai++) {
          var term = terminals(G_CMAX[ci], G_L50[li], G_A[ai]);
          for (var mi = 0; mi < G_LAM.length; mi++) {
            var lam = G_LAM[mi], sse = 0, ok = true;
            for (var r = 0; r < readings.length; r++) {
              var pred = post
                ? valueAt(term, lam, 0.025, 0.045, Date.parse(readings[r].t))
                : sflAt(Date.parse(readings[r].t), term, lam);
              sse += Math.pow(pred - readings[r].n, 2);
              if (Math.abs(pred - readings[r].n) > 0.05 * Math.max(readings[r].n, 1)) ok = false;
            }
            if (!best || sse < best.sse) best = { sse: sse, term: term, lam: lam };
            all.push({ sse: sse, term: term, lam: lam });
            if (ok) ens.push({ term: term, lam: lam });
          }
        }
    // A hard tolerance can leave a single survivor, which would publish a
    // band of zero width — false precision. Always keep the parameter sets
    // that fit nearly as well as the best one.
    all.sort(function (x, y) { return x.sse - y.sse; });
    var floor = Math.max(best.sse * 4, 1);
    var near = all.filter(function (p) { return p.sse <= floor; });
    if (near.length < 8) near = all.slice(0, 8);
    ens = near.map(function (p) { return { term: p.term, lam: p.lam }; });
    return { best: best, ens: ens };
  }

  function fmt(n) { return Math.round(n).toLocaleString("en-US"); }
  function dayLabel(iso) {
    var d = new Date(iso + "T12:00:00Z");
    return d.toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" });
  }

  function render(readings) {
    var host = document.getElementById("forecast-table");
    if (!host) return;

    var f = fit(readings);
    var endT = Date.parse("2026-11-02T00:00:00Z");
    var mid = series(f.best.term, f.best.lam, 0.025, 0.045, endT);

    // Band: sample the ensemble across the referral prior
    var ens = f.ens.slice(0, 30), runs = [];
    for (var i = 0; i < ens.length; i++)
      for (var ri = 0; ri < G_RHO.length; ri++)
        for (var ui = 0; ui < G_MU.length; ui++)
          runs.push(series(ens[i].term, ens[i].lam, G_RHO[ri], G_MU[ui], endT));

    function at(runArr, t) {
      var best = runArr[0];
      for (var i = 0; i < runArr.length; i++) { if (runArr[i].t <= t) best = runArr[i]; else break; }
      return best;
    }

    var last = readings[readings.length - 1];
    var html = '<div class="fc-now"><span class="fc-now-lab">ACTUAL</span>' +
      '<span class="fc-now-v">' + fmt(last.n) + '</span>' +
      '<span class="fc-now-s">' + new Date(last.t).toLocaleString("en-US",
        { timeZone: "America/New_York", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) +
      ' ET &middot; Sunflower Land players only</span></div>';

    html += '<div class="table-scroll"><table class="fc-table"><thead><tr>' +
      '<th>Date (8 PM ET)</th><th>Event</th><th class="n">Projected</th>' +
      '<th class="n">80% band</th><th class="n">SFL waves</th><th class="n">Referrals</th>' +
      '</tr></thead><tbody>';

    for (var r = 0; r < ROWS.length; r++) {
      var iso = ROWS[r][0], note = ROWS[r][1];
      var t = Date.parse(iso + "T00:00:00Z") + DAY;   // 8 PM ET that day
      var m = at(mid, t);
      var vals = [];
      for (var k = 0; k < runs.length; k++) vals.push(at(runs[k], t).N);
      vals.sort(function (a, b) { return a - b; });
      var lo = vals[Math.floor(vals.length * 0.1)], hi = vals[Math.floor(vals.length * 0.9)];
      // The band must always contain the central estimate — if a reading
      // sits outside what the parameter grid can reach, widen rather than
      // publish a mid that falls outside its own interval.
      if (m.N < lo) lo = m.N;
      if (m.N > hi) hi = m.N;
      var cls = (note === "FREE MINT" || note === "EARLY ACCESS") ? " class='key'" : (note ? " class='evt'" : "");
      html += "<tr" + cls + ">" +
        '<td class="d">' + dayLabel(iso) + "</td>" +
        '<td class="ev">' + note + "</td>" +
        '<td class="n big">' + fmt(m.N) + "</td>" +
        '<td class="n band">' + fmt(lo) + " &ndash; " + fmt(hi) + "</td>" +
        '<td class="n sfl">' + fmt(m.S) + "</td>" +
        '<td class="n ref">' + fmt(m.E) + "</td></tr>";
    }
    html += "</tbody></table></div>";
    html += '<p class="fc-note"><strong>Our projection, not official data.</strong> ' +
      'Only Lv 20+ can register directly &mdash; 54,202 Sunflower Land players. The other 295,063 sit below ' +
      'Lv 20 and need a referral code from Aug 5. Fitted conversion falls steeply with level, so the wave ' +
      'schedule alone tops out around 9,400; everything past that has to be referred in. The band is wide ' +
      'after Aug 5 because referral behaviour has no data behind it yet.</p>';

    host.innerHTML = html;
  }

  // Readings seen in this browser are remembered, so a returning visitor's
  // fit is built on a real time series rather than a single snapshot.
  var STORE = "yw_readings_v1";

  function loadStored() {
    try {
      var raw = localStorage.getItem(STORE);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function storeReading(iso, n) {
    try {
      var arr = loadStored();
      // Only keep a new point if the count actually moved.
      if (arr.length && arr[arr.length - 1].n === n) return arr;
      arr.push({ t: iso, n: n });
      if (arr.length > 200) arr = arr.slice(-200);
      localStorage.setItem(STORE, JSON.stringify(arr));
      return arr;
    } catch (e) { return loadStored(); }
  }

  function merge(a, b) {
    var seen = {}, out = [];
    a.concat(b).forEach(function (r) {
      var k = r.t + "|" + r.n;
      if (!seen[k]) { seen[k] = 1; out.push(r); }
    });
    out.sort(function (x, y) { return Date.parse(x.t) - Date.parse(y.t); });
    return out;
  }

  function start() {
    var host = document.getElementById("forecast-table");
    if (!host) return;

    render(merge(READINGS, loadStored()));

    // COUNTER_WORKER_URL already ends in /count — do not append to it.
    if (typeof COUNTER_WORKER_URL === "string" && COUNTER_WORKER_URL.indexOf("http") === 0) {
      fetch(COUNTER_WORKER_URL, { cache: "no-store" })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) {
          if (typeof d.claimed !== "number") return;
          var iso = d.checkedAt || new Date().toISOString();
          var stored = storeReading(iso, d.claimed);
          render(merge(READINGS, stored));
        })
        .catch(function (e) {
          console.warn("Forecast: live counter unavailable, using recorded readings.", e);
        });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
