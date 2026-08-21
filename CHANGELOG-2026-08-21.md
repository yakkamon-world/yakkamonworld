# YakkamonWorld — Gameplay section revision, 21 August 2026

Source: third dev stream (21 Aug 2026), merged over the 6 Aug and 13 Aug streams.
Rule applied: later statements overwrite earlier ones; reversals are recorded, not deleted.

---

## Files changed

| File | Change |
|---|---|
| `gameplay.js` | **Rewritten.** 14 systems → 22. All existing slugs preserved. |
| `gameplay.html` | Quick reference 11 → 24 rows; unknowns list rebuilt; "updated" banner; new poster dimensions. |
| `gameplay-guide.html` | Six new sections; renumbered to 19; tables synced with `gameplay.html`. |
| `gameplay-poster.png` | **Replaced.** 1800×1373 (was 1800×1070). |
| `gameplay-poster-full.png` | **Replaced.** 4000×3051 (was 4000×2377). |
| `article-dev-stream-three-recap.html` | **New.** Long-form recap. |
| `article-gameplay-guide-live.html` | Added an "updated since publication" callout; poster dimensions fixed. |
| `posts.js` | New post at top of the array. |
| `search.js` | 16 new index entries. |
| `sitemap.xml` | New URL; `gameplay.html` changefreq monthly → weekly. |
| `style.css` | Three new classes: `.page-updated`, `.poster-rev`, `.gp-detail .gp-list`. |
| *48 HTML files* | Footer "Dev stream recap" link repointed to the new article. |

No files were deleted. No existing slug, anchor or URL was renamed.

---

## Gameplay systems: added

| Slug | Title |
|---|---|
| `rarity-tiers` | Rarity & What It Actually Buys |
| `upkeep` | Upkeep & Degradation |
| `boost-stacking` | How Boosts Stack |
| `breeding-genetics` | Breeding & Genetics |
| `evolutions` | Evolutions |
| `combat-system` | The Battle System |
| `endgame` | Progression & Endgame |
| `platform-access` | Playing It — Platform & Access |

## Gameplay systems: rewritten

- `two-halves` — added the stated 50/50 or 30/30/30 farm / combat / market time split
- `core-loop` — five steps → **six**, with "Maintain" added
- `creature-collecting` — species fixes rarity; hidden initial values; training values; age/weight cut; monsters are the boost items
- `your-base` — retitled "Your Base & Your Gym"; gym customisation vs land customisation; landscape
- `regional-exploration` — retitled "Regions & The World"; gathering vs hunting regions; exclusive biome pack
- `crafting-hunting` — how a hunt actually runs (lures, monster does the hunting, aggressive challengers)
- `day-night-cycle` — weather system; the player-originated legendary/weather lore
- `arena-battles` — retitled "Arena, Quests & Trading"; defers combat detail to `combat-system`; guilds deferred
- `type-locking` — added the limited-tradeability consequence
- `storage-bins` — cross-linked to degradation; corrected the bin figure to 84/120 to match the screenshot
- `seasonal-system` — biome pack as first hard evidence of seasonal reskinning
- `monster-care` — per-monster audio identity
- `genesis-legendaries` — tempered against the new rarity findings

## Removed from "Not confirmed yet"

- **Battle rules** — answered by `combat-system`
- **Rarity tiers** — answered by `rarity-tiers`; replaced with the narrower "rarity distribution" (species-per-tier and drop rates still unknown)

## Added to "Not confirmed yet"

- Upkeep numbers (degradation rate, fertiliser recipe, live group size)
- Final skill count per monster
- Real-time battle interaction (in testing)
- Evolution triggers — flagged as **unknown by design**
- Endgame feature set

---

## Positions that reversed

| Topic | Previous | Current (21 Aug) |
|---|---|---|
| Combat | "Basic combat," undefined | Lane-based 3v3 auto-battler, fixed lanes, ordered skills, MMR |
| PWA / mobile | 13 Aug: browser only, no mobile plans | Browser-first stands, but **PWA home-screen install recommended** — closer to the 6 Aug position |
| Login | Unspecified | **Email primary**, wallet optional |
| Rarity | Tier definitions only | **Fixed at species level**; no rare variants of commons |
| Rare vs common power | Implied rares strictly better | **Not a clean ladder** — best commons beat middling rares |
| Boosts | Not addressed | Same-named don't stack; differently named do |
| Upkeep | Not addressed | Plots degrade; fertiliser costs resources |
| Customisation | Not addressed | Gym yes; land probably not at launch |
| Pre-registered trainers | 45,000 | **100,000** |

---

## Known editorial tensions

1. **Rarity findings undercut existing airdrop coverage.** `article-genesis-legendaries.html` and
   `article-airdrop-breakdown.html` frame a Genesis Legendary as an unambiguous prize. The
   species-level rarity rule plus "best commons beat middling rares" complicates that. The new
   article states it plainly and `genesis-legendaries` was tempered — but the older articles carry
   no correction flag yet. Consider adding one, matching the pattern used on
   `article-after-the-race.html`.

2. **The mobile position is genuinely unresolved across three streams.** `platform-access` states
   all three positions in sequence rather than picking one. One-field edit if the team clarifies.

3. **Spelling.** Transcripts use Yakamon / Yakimon / Yakomon interchangeably. Site convention
   **Yakkamon** applied throughout without comment.

---

## Validation performed

- `node --check` on `gameplay.js`, `posts.js`, `search.js`, `gameplay-page.js` — all pass
- `sitemap.xml` parses as valid XML (48 URLs)
- 0 broken internal links across all HTML files
- 0 dangling `?system=` references — all 22 slugs resolve
- `<div>` / `<section>` tag balance verified on every touched file
- All 22 system entries have complete `slug`, `title`, `desc`, `detail`, `icon` and `like` fields
