// Regenerates the FAQPage JSON-LD block in faq.html from faq.js.
// build-static-hubs.mjs rebuilds the visible <details>; this rebuilds the JSON-LD.
// Text transform is faithful to the site's existing house format: strip tags to
// spaces; decode a fixed set of named punctuation entities plus &#8599; (the ↗
// external-link arrow); keep &ndash;, &eacute; and emoji numeric refs literal.
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path";
const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,"$1"));
const read = f => fs.readFileSync(path.join(ROOT,f),"utf8");
const ctx={console}; vm.createContext(ctx);
vm.runInContext(read("faq.js").replace(/\bconst\s+/g,"var "),ctx,{filename:"faq.js"});
const NAMED={mdash:"\u2014",rarr:"\u2192",ldquo:"\u201c",rdquo:"\u201d",lsquo:"\u2018",rsquo:"\u2019",times:"\u00d7",middot:"\u00b7",amp:"&",hellip:"\u2026",nbsp:" "};
const decodeInline = s => s
  .replace(/&(mdash|rarr|ldquo|rdquo|lsquo|rsquo|times|middot|amp|hellip|nbsp);/g,(_,n)=>NAMED[n])
  .replace(/&#8599;/g,"\u2197");
const toText = h => decodeInline(h.replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();
const jstr = s => JSON.stringify(s); // proper JSON escaping for name/text
const entries=[];
for(const c of ctx.FAQ_CATEGORIES) for(const it of (c.items||[]))
  entries.push(`  {\n   "@type": "Question",\n   "name": ${jstr(decodeInline(it.q))},\n   "acceptedAnswer": {\n    "@type": "Answer",\n    "text": ${jstr(toText(it.a))}\n   }\n  }`);
const block = '<script type="application/ld+json">\n{\n "@context": "https://schema.org",\n "@type": "FAQPage",\n "mainEntity": [\n'
  + entries.join(",\n") + "\n ]\n}\n</script>";
let html = read("faq.html");
const re = /<script type="application\/ld\+json">\s*\{[\s\S]*?"@type": "FAQPage"[\s\S]*?\}\s*<\/script>/;
if(!re.test(html)){ console.error("FAQPage JSON-LD block not found"); process.exit(1); }
html = html.replace(re, block);
fs.writeFileSync(path.join(ROOT,"faq.html"), html);
console.log("FAQPage JSON-LD rebuilt:", entries.length, "questions");
