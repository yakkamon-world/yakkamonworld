// FAQ content, one category per entry. Rendered by faq-render.js.
// Every question id is unique and doubles as a deep link (faq.html#<id>);
// category ids are the OLD section anchors, kept so existing links resolve.
var FAQ_CATEGORIES = [
 {
  "id": "general",
  "name": "Start here",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "Is YakkamonWorld the official Yakkamon website?",
    "a": "<p>No. The official pre-registration site is <a href=\"https://yakkamon.com/\" target=\"_blank\" rel=\"noopener\">yakkamon.com</a>, and the official documentation is at <a href=\"https://docs.yakkamon.com\" target=\"_blank\" rel=\"noopener\">docs.yakkamon.com</a>. This site is a fan-run portal that explains things in plainer language and isn't affiliated with the Yakkamon team or SunflowerLand.</p>",
    "id": "is-yakkamonworld-the-official-yakkamon-website"
   },
   {
    "q": "What is Yakkamon?",
    "a": "<p>A creature collector crossed with idle farming. You hunt and catch wild monsters out in the world, then put them to work farming, gathering and producing around the clock &mdash; so your farm keeps running while you're away. You can craft gear and take other trainers on in the arena.</p>",
    "id": "what-is-yakkamon"
   },
   {
    "q": "Who makes Yakkamon?",
    "a": "<p><strong>Thought Farm</strong>, the team behind Sunflower Land: over <strong>1 million players</strong>, more than <strong>100 open-source contributors</strong>, and over five years of building live and in the open.</p>",
    "id": "who-makes-yakkamon"
   },
   {
    "q": "Is Yakkamon free to pre-register?",
    "a": "<p>Yes. Season 0 pre-registration is free and needs nothing but an email address. You don't need a wallet, and you don't need to be an existing Sunflower Land player.</p>",
    "id": "is-yakkamon-free-to-pre-register"
   },
   {
    "q": "Do I need to be an existing Sunflower Land player?",
    "a": "<p>No. Yakkamon is a completely new game and anyone can pre-register with just an email address. Sunflower Land players are welcome &mdash; your Bumpkin Level decides when your <a href=\"article-yakkamon-referral-code.html\">access code</a> unlocks &mdash; but nothing about Sunflower Land is a requirement.</p>",
    "id": "do-i-need-to-be-an-existing-sunflower-land"
   },
   {
    "q": "Which network does Yakkamon run on?",
    "a": "<p><strong>Ronin</strong>, a blockchain built for games with much lower fees than networks like Ethereum. It's also where the free mint happens in mid-September.</p>",
    "id": "which-network-does-yakkamon-run-on"
   },
   {
    "q": "What is the official Yakkamon website?",
    "a": "<p><strong>yakkamon.com</strong> is the only official Yakkamon website. The official X account is <a href=\"https://x.com/yakkamon_game\" target=\"_blank\" rel=\"noopener\">@yakkamon_game</a> and the official documentation is at <a href=\"https://docs.yakkamon.com\" target=\"_blank\" rel=\"noopener\">docs.yakkamon.com</a>.</p>\n    <div class=\"prereg-callout warning\"><strong>Yakkamon will never ask you for a seed phrase or a private key.</strong> Pre-registration only ever asks for an email address. Anyone asking for anything more &mdash; in a DM, a giveaway or a lookalike site &mdash; is trying to steal from you. This site (yakkamonworld.com) is an unofficial fan portal and will never ask you for anything at all.</div>",
    "id": "what-is-the-official-yakkamon-website"
   },
   {
    "q": "Is there a video version of any of this?",
    "a": "<p>Yes. We run a YouTube channel at <a href=\"https://www.youtube.com/@YakkamonWorld\" target=\"_blank\" rel=\"noopener\">youtube.com/@YakkamonWorld</a> with short 2&ndash;3 minute explainers covering pre-registration, access codes, the free mint and each gameplay system. Every episode is indexed on our <a href=\"videos.html\">videos page</a>, each one linked to the written version &mdash; the same ground as this site, for anyone who'd rather watch than read. The channel is also linked from the <a href=\"community.html\">Community page</a>.</p>\n    <p>Two to start with: <a href=\"https://www.youtube.com/watch?v=cLRGC67tmLQ\" target=\"_blank\" rel=\"noopener\">What Is Yakkamon? The 2-Minute Explainer &#8599;</a> covers the game, the team behind it and why pre-registration matters. <a href=\"https://www.youtube.com/watch?v=tkD362tQUa0\" target=\"_blank\" rel=\"noopener\">How To Pre-Register &#8599;</a> walks through signing up, and the verification step that decides whether you can mint in mid-September.</p>",
    "id": "is-there-a-video-version-of-any-of-this"
   },
   {
    "q": "Where can I ask a question that isn't answered here?",
    "a": "<p>We run an unofficial Telegram channel and chat group. The channel posts pre-registration updates as tiers unlock; the chat group is where you can ask anything, and our access bot will tell you your access date if you send it your Bumpkin Level. Join at <a href=\"https://t.me/YakkamonWorld\" target=\"_blank\" rel=\"noopener\">t.me/YakkamonWorld</a>, or see the <a href=\"community.html\">Community page</a> for all the links.</p>",
    "id": "where-can-i-ask-a-question-that-isn-t"
   },
   {
    "q": "Do I need to know about crypto, or own a wallet, to take part?",
    "a": "<p>Not to pre-register &mdash; that only needs an email address. A wallet only becomes relevant if you want to take part in the <a href=\"pre-registration.html#free-mint\">Free Mint in mid-September</a>, since that's an on-chain claim. If you plan to do that, you'll want a <span class=\"jargon\" title=\"A browser extension or app that holds your on-chain items and lets you approve transactions, similar to a bank app but for blockchain assets.\">Ronin-compatible wallet</span> set up beforehand. The <a href=\"pre-registration.html#genesis-monsters\">Genesis Monster airdrop</a> at launch doesn't require any action or wallet setup on your part &mdash; it's based purely on your final leaderboard rank.</p>",
    "id": "do-i-need-to-know-about-crypto-or-own"
   }
  ]
 },
 {
  "id": "sunflowerland-guide",
  "name": "How to pre-register",
  "intro": "",
  "rich": "<p>If you already play Sunflower Land, your Bumpkin Level decides when your access code becomes available. Codes unlock for the highest levels first, then a new tier opens each day:</p>\n\n    <div class=\"table-scroll\"><table class=\"prereg-table\">\n      <tr><th>Bumpkin Level</th><th>Access date</th></tr>\n      <tr><td>150+</td><td>Jul 30, 2026</td></tr>\n      <tr><td>100+</td><td>Jul 31, 2026</td></tr>\n      <tr><td>50+</td><td>Aug 1, 2026</td></tr>\n      <tr><td>20+</td><td>Aug 2, 2026</td></tr>\n    </table></div>\n\n    <div class=\"prereg-callout info\">Under Level 20, or not on Sunflower Land at all? No problem &mdash; referral codes are <strong>open to everyone</strong> now. Register with a code from any trainer who has already joined: no Sunflower Land account, no Bumpkin level, no wallet needed.</div>\n\n    <h3 style=\"font-family:var(--font-display); font-size:1.1rem; margin:28px 0 14px\">Step 1: Find Yakkamon in the Plaza</h3>\n    <p>Head to the Plaza in Sunflower Land and look for the <strong>\"Yakkamon\"</strong> sign next to Stella. Click on it to open the access code panel.</p>\n    <img src=\"news-yakkamon-npc-plaza.png\" alt=\"The Yakkamon sign next to Stella in the Sunflower Land Plaza, highlighted in red\">\n    <p class=\"img-caption\">The Yakkamon booth sits right next to Stella in the Plaza.</p>\n    <p>From there, click <strong>\"Get Access Code\"</strong> to receive your unique code.</p>\n\n    <h3 style=\"font-family:var(--font-display); font-size:1.1rem; margin:28px 0 14px\">Step 2: Sign up with your code</h3>\n    <p>Once you have your code, go to <a href=\"https://yakkamon.com/?code=UDBVPX\" target=\"_blank\" rel=\"noopener\">yakkamon.com</a> and enter it on the \"Enter Trainer Code\" screen, then hit Confirm. <span class=\"ref-note\">(That link carries our code <strong>YAKKA-UDBVPX</strong> &mdash; it gets you a Gold Box, and we earn points.)</span></p>\n    <img src=\"news-trainer-code-screen.png\" alt=\"The Enter Trainer Code screen on yakkamon.com, with a code entered and a Confirm button\">\n    <p class=\"img-caption\">Enter your code exactly as shown, then confirm to complete pre-registration.</p>\n\n    <p>Full walkthrough with more detail is in the <a href=\"article-access-code-today.html\">original news post</a>.</p>",
  "items": []
 },
 {
  "id": "decoder",
  "name": "Decoder",
  "intro": "<p>The official docs use several different names for the same things, which trips almost everyone up. Here's what each term means and what else it gets called.</p>",
  "rich": "<div class=\"decoder\">\n      <div class=\"dc-term \">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#129370;</span><h3>MONSTER EGG</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>Monster Pack</li><li>starter egg</li><li>sign-up egg</li><li>Platinum egg</li></ul></div>\n        <p class=\"dc-what\">The item you get just for signing up. Its tier (Platinum &rarr; Basic) depends only on <strong>sign-up order</strong>.<span class=\"dc-warn\">Not an NFT. No wallet needed.</span></p>\n      </div>\n      <div class=\"dc-term nft\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#127873;</span><h3>GENESIS AIRDROP</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>Trainer Point airdrop</li><li>NFT Airdrop</li><li>Genesis Drop</li></ul></div>\n        <p class=\"dc-what\">The <strong>5,000</strong> monster NFTs given to the top 5,000 trainers on points. Lands automatically at launch. All four names mean the same event. <a href=\"article-genesis-airdrop-5000.html\">Full breakdown &rarr;</a></p>\n      </div>\n      <div class=\"dc-term nft\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#128009;</span><h3>GENESIS MONSTER</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>Monster NFT</li><li>Legendary Founder NFT</li><li>founding monster</li></ul></div>\n        <p class=\"dc-what\">The creature itself &mdash; the NFT you receive from the airdrop. Top <strong>1,000</strong> get the <strong>Legendary</strong> version.</p>\n      </div>\n      <div class=\"dc-term nft\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#127381;</span><h3>FREE MINT</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>Ronin free mint</li><li>October mint</li></ul></div>\n        <p class=\"dc-what\"><strong>10,000</strong> blind mints in <strong>mid-September</strong>, open to every verified pre-registered trainer. Decided by the whitelist, not by rank.</p>\n      </div>\n      <div class=\"dc-term rank\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#127942;</span><h3>TRAINER NUMBER</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>rank</li><li>leaderboard position</li><li>points rank</li></ul></div>\n        <p class=\"dc-what\">Your permanent position among founding players. Earned purely on <strong>points</strong> &mdash; never on sign-up date.</p>\n      </div>\n      <div class=\"dc-term rank\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#128200;</span><h3>TIER</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>trainer tier</li><li>reward tier</li></ul></div>\n        <p class=\"dc-what\">A band on the leaderboard your rank falls into. Decides which egg you receive and which wave you're in.</p>\n      </div>\n      <div class=\"dc-term rank\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#128674;</span><h3>WAVE</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>access wave</li><li>early access wave</li></ul></div>\n        <p class=\"dc-what\">The batch you're let into the game with. Wave 1 enters first, Wave 4 last.<span class=\"dc-warn\">Rank 100,001+ gets no wave at all.</span></p>\n      </div>\n      <div class=\"dc-term \">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#127793;</span><h3>BUMPKIN LEVEL</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>Sunflower Land level</li><li>SFL level</li></ul></div>\n        <p class=\"dc-what\">Your level in Sunflower Land. Decides <strong>when your access code unlocks</strong> during pre-registration &mdash; nothing else.<span class=\"dc-warn\">Does NOT affect your leaderboard rank.</span></p>\n      </div>\n      <div class=\"dc-term tech\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#127793;</span><h3>$FLOWER</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>FLOWER</li><li>the token</li></ul></div>\n        <p class=\"dc-what\">The shared token across the studio's games. Yakkamon launches <strong>no new token</strong>. Deposits earn points and stay withdrawable tax-free.</p>\n      </div>\n      <div class=\"dc-term tech\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#9981;</span><h3>GAS</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>network fee</li><li>transaction fee</li></ul></div>\n        <p class=\"dc-what\">A small fee paid to the network to complete an on-chain action &mdash; like a card processing fee, but it goes to the network, not to Yakkamon. On Ronin it's usually cents.</p>\n      </div>\n      <div class=\"dc-term tech\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#9939;</span><h3>RONIN</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>the network</li><li>the chain</li></ul></div>\n        <p class=\"dc-what\">The blockchain Yakkamon runs on, built for games with much lower fees than Ethereum. Where the free mint happens.</p>\n      </div>\n      <div class=\"dc-term rank\">\n        <div class=\"dc-term-head\"><span class=\"dc-ico\" aria-hidden=\"true\">&#128273;</span><h3>EARLY ACCESS</h3></div>\n        <div class=\"dc-aka\"><span class=\"dc-aka-label\">ALSO CALLED</span><ul class=\"dc-chips\"><li>EA</li><li>launch</li><li>Nov / Dec 2026</li></ul></div>\n        <p class=\"dc-what\">When the game opens, in waves by rank. Only the top <strong>100,000</strong> trainers on points get in.<span class=\"dc-warn\">Pre-registering alone does not qualify you.</span></p>\n      </div>\n    </div>\n\n    <div class=\"prereg-callout info\"><strong>The one that catches people out:</strong> the <strong>free mint</strong> and the <strong>Genesis airdrop</strong> are two completely separate rewards. You can receive both &mdash; see <a href=\"#mint-vs-airdrop\">section 4</a>.</div>",
  "items": []
 },
 {
  "id": "ranks-tiers",
  "name": "Ranks & waves",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "What's the difference between my rank, my tier, and my wave?",
    "a": "<p>Three words that get used close together, so they're easy to blur:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Trainer number</strong> (your rank) &mdash; your exact position on the leaderboard, like #4,521. It's permanent, and it's what every other reward is calculated from.</li>\n      <li><strong>Tier</strong> &mdash; a points milestone you've passed on the <a href=\"pre-registration.html#reward-track\">reward track</a> (for example, 1,000 points unlocks Tier I). Passing a tier unlocks its reward on its own.</li>\n      <li><strong>Wave</strong> &mdash; the batch you're let into the game with when early access opens. Higher ranks are in earlier waves.</li>\n    </ul>",
    "id": "what-s-the-difference-between-my-rank-my-tier"
   },
   {
    "q": "What does my rank actually get me?",
    "a": "<p>Your trainer number decides two things at once: which <strong>Genesis egg</strong> (the egg your founding monster hatches from) you're given, and which wave you play in. Here's the full ladder:</p>\n\n    <div class=\"rank-ladder\">\n\n      <div class=\"rl-row gold\">\n        <div class=\"rl-rank\">RANK 1&ndash;3</div>\n        <div class=\"rl-prize\"><span class=\"rl-medal\" aria-hidden=\"true\">&#127785;</span> <strong>Storm</strong> + <span class=\"rl-medal\" aria-hidden=\"true\">&#11036;</span> <strong>Echo</strong></div>\n        <div class=\"rl-wave\">WAVE 1</div>\n      </div>\n\n      <div class=\"rl-row gold\">\n        <div class=\"rl-rank\">RANK 4&ndash;10</div>\n        <div class=\"rl-prize\"><span class=\"rl-medal\" aria-hidden=\"true\">&#127785;</span> <strong>Storm</strong> + <span class=\"rl-medal\" aria-hidden=\"true\">&#127800;</span> <strong>Bloom</strong></div>\n        <div class=\"rl-wave\">WAVE 1</div>\n      </div>\n\n      <div class=\"rl-row gold\">\n        <div class=\"rl-rank\">RANK 11&ndash;50</div>\n        <div class=\"rl-prize\"><span class=\"rl-medal\" aria-hidden=\"true\">&#127785;</span> <strong>Storm</strong> &mdash; the newest and hardest to earn</div>\n        <div class=\"rl-wave\">WAVE 1</div>\n      </div>\n\n      <div class=\"rl-row silver\">\n        <div class=\"rl-rank\">RANK 51&ndash;250</div>\n        <div class=\"rl-prize\"><span class=\"rl-medal\" aria-hidden=\"true\">&#11036;</span> Echo</div>\n        <div class=\"rl-wave\">WAVE 1</div>\n      </div>\n\n      <div class=\"rl-row bronze\">\n        <div class=\"rl-rank\">RANK 251&ndash;500</div>\n        <div class=\"rl-prize\"><span class=\"rl-medal\" aria-hidden=\"true\">&#127800;</span> Bloom</div>\n        <div class=\"rl-wave\">WAVE 1</div>\n      </div>\n\n      <div class=\"rl-row rare\">\n        <div class=\"rl-rank\">RANK 501&ndash;2,000</div>\n        <div class=\"rl-prize\"><span class=\"rl-medal\" aria-hidden=\"true\">&#127754;</span> Tide</div>\n        <div class=\"rl-wave\">WAVE 1&ndash;2</div>\n      </div>\n\n      <div class=\"rl-row plain\">\n        <div class=\"rl-rank\">RANK 2,001&ndash;5,000</div>\n        <div class=\"rl-prize\">Rare Egg</div>\n        <div class=\"rl-wave\">WAVE 2</div>\n      </div>\n\n      <div class=\"rl-row plain\">\n        <div class=\"rl-rank\">RANK 5,001&ndash;20,000</div>\n        <div class=\"rl-prize\">Early access &mdash; no airdrop at this rank</div>\n        <div class=\"rl-wave\">WAVE 3</div>\n      </div>\n\n      <div class=\"rl-row plain\">\n        <div class=\"rl-rank\">RANK 20,001&ndash;100,000</div>\n        <div class=\"rl-prize\">Early access &mdash; no airdrop at this rank</div>\n        <div class=\"rl-wave\">WAVE 4</div>\n      </div>\n\n      <div class=\"rl-row out\">\n        <div class=\"rl-rank\">RANK 100,001+</div>\n        <div class=\"rl-prize\">&#10060; No early access &mdash; you wait for full launch</div>\n        <div class=\"rl-wave\">&mdash;</div>\n      </div>\n\n    </div>\n\n    <div class=\"rl-key\">\n      <span>&#127785;&#11036;&#127800;&#127754; <strong>Genesis Legendaries</strong> &mdash; top 2,000</span>\n      <span>&#10024; <strong>Rare Egg</strong> &mdash; ranks 2,001&ndash;5,000</span>\n      <span><strong>Waves 1&ndash;4</strong> &mdash; who gets in first</span>\n    </div>\n\n    <div class=\"prereg-callout success\"><strong>Twice as many Legendaries.</strong> Legendary monsters used to stop at rank 1,000. They now run all the way to rank <strong>2,000</strong>. <strong>Storm</strong> is new and sits above the old top tier &mdash; only the top 50 are airdropped one, and the top 10 receive Storm plus a second Genesis Legendary.</div>\n    <div class=\"prereg-callout info\"><strong>Every band held or improved.</strong> Echo is the monster that used to be Legendary Egg A, Bloom was Egg B, and Tide was Egg C &mdash; each with its utility lifted. Storm was added above the ladder rather than pushing anyone down it. Monster utilities are due in <strong>September</strong>.</div>\n\n    <div class=\"prereg-callout warning\"><strong>There is a hard cutoff at rank 100,000.</strong> Pre-registering does not qualify you for early access on its own &mdash; you have to finish inside the top 100,000 on points. Everyone below that waits for full launch.</div>\n    <p class=\"rl-note\">Of those who do get in, the top <strong>5,000</strong> also receive a <strong>Genesis Monster NFT</strong>, and within that the top <strong>1,000</strong> get the Legendary version.</p>",
    "id": "what-does-my-rank-actually-get-me"
   },
   {
    "q": "When do I find out my rank?",
    "a": "<p>Trainer numbers and tiers are revealed shortly before early access opens in <strong>November or December 2026</strong>. Until then the leaderboard is still moving, so a rank you hold today isn't locked in &mdash; and neither is anyone else's.</p>",
    "id": "when-do-i-find-out-my-rank"
   },
   {
    "q": "Does signing up early guarantee me a good rank?",
    "a": "<p>No, and this is the single most common misunderstanding. Signing up early sets your <strong>Monster Egg tier</strong> (which starting egg you get) and nothing else. It doesn't reserve a leaderboard position and it doesn't guarantee early access. Every rank is won on points.</p>",
    "id": "does-signing-up-early-guarantee-me-a-good-rank"
   },
   {
    "q": "How do I actually earn points?",
    "a": "<ul class=\"prereg-list\">\n      <li><strong>Daily nurture</strong> &mdash; tap your egg 3 times, once a day. Pays 6 points rising to <strong>10 a day</strong> at a 30-day streak, with a 36-hour grace period &mdash; though that only covers a whole missed day if you nurture after <a href=\"tips.html#streak-timing\">12:00 UTC</a>.</li>\n      <li><strong>Quests</strong> &mdash; link your Discord and Twitter/X accounts, post weekly, and take part in the community.</li>\n      <li><strong>Referrals</strong> &mdash; points for every friend who signs up through you.</li>\n      <li><strong>The free mint</strong> &mdash; minting the Genesis Monster on Ronin in mid-September also earns points (see <a href=\"#mint-vs-airdrop\">section 4</a>).</li>\n      <li><strong>$FLOWER deposits</strong> &mdash; <strong>open now</strong> (since 9 Aug, 8:00 PM ET / 10 Aug UTC). Points are boosted two ways: a <strong>weekly multiplier</strong> paying <strong>3&times;</strong> through the opening week and falling 0.2&times; each week until it rests at 1&times; (week 3 held at 2.8&times; after the week-2 pause), plus a <strong>size bonus rated per deposit</strong> that doubles at every step &mdash; +10% at 50 $FLOWER up to <strong>+80%</strong> at 50,000. <a href=\"tips.html#weekly-flower\">The full schedule &rarr;</a></li>\n    </ul>\n    <p>Daily actions compound: streaks and referrals stack over time, so an early start is genuinely harder for someone else to overtake later.</p>\n    <div class=\"prereg-callout info\"><strong>The exact numbers:</strong> referrals pay <strong>75</strong> each &mdash; your first five instantly, and after that only once your friend has <strong>linked a wallet and deposited 100 $FLOWER</strong> &mdash; the mid-September free mint pays <strong>250</strong>, and one-time quests (Discord, X, wallet) pay 10 each. Ninety days of perfect nurture is roughly 856 points. <a href=\"article-leaderboard-guideline.html\">Full leaderboard guideline &rarr;</a></div>",
    "id": "how-do-i-actually-earn-points"
   },
   {
    "q": "Is there more than one leaderboard?",
    "a": "<p>Yes, and they pay out completely differently:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Final ranking</strong> &mdash; your all-time points total. It never resets and pays out once, at early access in November or December 2026. This is what decides your trainer number, your Genesis Monster and your wave.</li>\n      <li><strong>Weekly ranking</strong> &mdash; based only on the points you earn that week, and it resets every week. It pays a resource box, food box, raffle ticket and loot box, every week until early access.</li>\n    </ul>\n    <p>Most people only play the first one. The weekly board is a fresh contest each week against everyone else's weekly total &mdash; not their all-time one &mdash; which makes it far more winnable. <a href=\"tips.html#weekly-flower\">How to play both at once &rarr;</a></p>",
    "id": "is-there-more-than-one-leaderboard"
   },
   {
    "q": "What time of day should I nurture?",
    "a": "<p><strong>After 12:00 UTC</strong>, and then keep to roughly that time. The game day rolls over at midnight UTC, and separately you get 36 hours from your last nurture before the streak resets. Those two clocks only line up in your favor in the second half of the UTC day: nurture at 08:00 and your window expires partway through tomorrow, so a missed day still breaks the run; nurture at 20:00 and it stretches past tomorrow entirely.</p>\n    <p>Noon UTC is 8:00 AM in New York, 1:00 PM in London, 8:00 PM in Manila and 9:00 PM in Tokyo &mdash; so in the Americas you're usually fine already, while further east a morning nurture leaves you no slack at all. <a href=\"tips.html#streak-timing\">The full reasoning &rarr;</a></p>",
    "id": "what-time-of-day-should-i-nurture"
   },
   {
    "q": "Can I reach a Legendary rank without depositing $FLOWER?",
    "a": "<p>The top 50 &mdash; the Storm band &mdash; is realistically a paid bracket, since a large deposit made in the opening week is worth tens of thousands of points and no amount of free play matches that. Below it things are genuinely contestable, and the Legendary line now sits at rank 2,000 rather than 1,000. Referrals pay 75 points each and are <strong>uncapped</strong> &mdash; your first five instantly, and after that only once your friend has <strong>linked a wallet and deposited 100 $FLOWER</strong> of their own. Roughly 66 valid referrals are worth as much as a 5,000 $FLOWER deposit &mdash; but past your fifth, each one now depends on a friend spending money. A free player with real reach can compete for the 101&ndash;1,000 Legendary bands; without it, aim at the top 5,000 where the Rare Egg A band starts. <a href=\"article-free-to-play-guide.html\">The free-to-play guide &rarr;</a></p>",
    "id": "can-i-reach-a-legendary-rank-without-depositing-flower"
   },
   {
    "q": "What if I'm not Bumpkin Level 100+, or don't play Sunflower Land at all?",
    "a": "<p>You're not shut out. Your Bumpkin Level only affects <em>when your access code unlocks</em> during pre-registration &mdash; it has nothing to do with your leaderboard rank. Lower tiers opened automatically day by day, and <strong>anyone can now</strong> use a referral code from another trainer. See the <a href=\"article-access-code-today.html\">access code walkthrough</a>.</p>",
    "id": "what-if-i-m-not-bumpkin-level-100-or"
   },
   {
    "q": "Is the Genesis Monster tradable, or is it locked to my account?",
    "a": "<p>Fully tradable. Genesis Monsters arrive with in-game XP already on them, they're revealed live when early access launches, and they will never be minted again &mdash; so the supply is fixed at 5,000 forever.</p>",
    "id": "is-the-genesis-monster-tradable-or-is-it-locked"
   }
  ]
 },
 {
  "id": "mint-vs-airdrop",
  "name": "The three rewards",
  "intro": "",
  "rich": "<p>Three different things get handed out before and at launch, and they're easy to mix up because all three involve monsters. Here's what separates them:</p>\n\n    <div class=\"reward-compare\">\n\n      <div class=\"rc-card egg\">\n        <div class=\"rc-head\"><span class=\"rc-emoji\" aria-hidden=\"true\">&#129370;</span><h3>MONSTER EGG</h3></div>\n        <p class=\"rc-tagline\">Your welcome gift for signing up.</p>\n        <ul class=\"rc-rows\">\n          <li><span class=\"rc-label\">HOW YOU GET IT</span><span class=\"rc-val\">Sign up with an email. That's the whole requirement.</span></li>\n          <li><span class=\"rc-label\">WHAT DECIDES IT</span><span class=\"rc-val\">Sign-up order, and <strong>only</strong> your egg tier &mdash; nothing else</span></li>\n          <li><span class=\"rc-label\">SUPPLY</span><span class=\"rc-val\">Up to 500,000 &mdash; Platinum, Gold, Silver, Bronze, then Basic</span></li>\n          <li><span class=\"rc-label\">IS IT AN NFT?</span><span class=\"rc-val rc-no\">No &mdash; gems and in-game items</span></li>\n          <li><span class=\"rc-label\">WALLET NEEDED?</span><span class=\"rc-val rc-no\">No</span></li>\n          <li><span class=\"rc-label\">WHEN IT ARRIVES</span><span class=\"rc-val\">Appears on your farm the first time you log in</span></li>\n        </ul>\n      </div>\n\n      <div class=\"rc-card mint\">\n        <div class=\"rc-head\"><span class=\"rc-emoji\" aria-hidden=\"true\">&#127381;</span><h3>FREE MINT</h3></div>\n        <p class=\"rc-tagline\">A Genesis Monster NFT you claim yourself.</p>\n        <ul class=\"rc-rows\">\n          <li><span class=\"rc-label\">HOW YOU GET IT</span><span class=\"rc-val\">Mint it on Ronin in <strong>mid-September</strong></span></li>\n          <li><span class=\"rc-label\">WHAT DECIDES IT</span><span class=\"rc-val\">The <strong>verified whitelist</strong> &mdash; rank is irrelevant and speed is not the gate. One mint per verified trainer, while the 10,000 last</span></li>\n          <li><span class=\"rc-label\">SUPPLY</span><span class=\"rc-val\">10,000 only &mdash; with <strong>5 Legendaries</strong> hidden inside</span></li>\n          <li><span class=\"rc-label\">IS IT AN NFT?</span><span class=\"rc-val rc-yes\">Yes</span></li>\n          <li><span class=\"rc-label\">WALLET NEEDED?</span><span class=\"rc-val rc-yes\">Yes &mdash; plus a little RON for gas</span></li>\n          <li><span class=\"rc-label\">WHEN IT ARRIVES</span><span class=\"rc-val\">Wallet on the day &mdash; but sealed until the Early Access reveal</span></li>\n        </ul>\n      </div>\n\n      <div class=\"rc-card airdrop\">\n        <div class=\"rc-head\"><span class=\"rc-emoji\" aria-hidden=\"true\">&#127873;</span><h3>GENESIS AIRDROP</h3></div>\n        <p class=\"rc-tagline\">The prize for finishing high on points (the docs call this the <strong>Trainer Point airdrop</strong>).</p>\n        <ul class=\"rc-rows\">\n          <li><span class=\"rc-label\">HOW YOU GET IT</span><span class=\"rc-val\">Finish in the <strong>top 5,000</strong> on the leaderboard</span></li>\n          <li><span class=\"rc-label\">WHAT DECIDES IT</span><span class=\"rc-val\">Your points rank &mdash; nothing else</span></li>\n          <li><span class=\"rc-label\">SUPPLY</span><span class=\"rc-val\">5,010 Monster NFTs across 5,000 trainers &mdash; the top 2,000 receive a Genesis Legendary</span></li>\n          <li><span class=\"rc-label\">IS IT AN NFT?</span><span class=\"rc-val rc-yes\">Yes</span></li>\n          <li><span class=\"rc-label\">WALLET NEEDED?</span><span class=\"rc-val rc-yes\">Yes</span></li>\n          <li><span class=\"rc-label\">WHEN IT ARRIVES</span><span class=\"rc-val\">Airdropped automatically at early access &mdash; no action needed</span></li>\n        </ul>\n      </div>\n\n    </div>\n\n    <div class=\"rc-verdict\">\n      <p><strong>The one thing worth understanding:</strong> signing up early sets your Monster Egg tier and <em>nothing else</em>. It does not reserve you a leaderboard place, and it does not guarantee early access. Every rank is won on points.</p>\n      <p>And the three are linked &mdash; <strong>minting in mid-September earns you points</strong>, which pushes your leaderboard rank, which is what decides your Genesis Airdrop and which early-access wave you're in. The free mint isn't just a free NFT; it's a rung on the ladder.</p>\n    </div>\n\n    <p><strong>When does the leaderboard for the Genesis Drop end?</strong></p>\n    <p>Trainer numbers and tiers are revealed shortly before early access opens in <strong>November or December 2026</strong>. The leaderboard finalises <strong>one week before launch</strong>, though the exact date is still to be announced. Your points decide your rank, and your rank decides which Genesis egg you receive and which early-access wave you join, so every point still counts right up to the reveal.</p>\n\n    <p><strong>What is \"gas,\" and do I need real money?</strong></p>\n    <p>Gas is a tiny processing fee paid in the network's own currency to complete an on-chain action &mdash; similar to a card processing fee, except it goes to the network, not to Yakkamon. On Ronin this is usually a small fraction of a dollar. You'll need a small amount of RON (Ronin's currency) sitting in your wallet to cover it.</p>\n\n    <p><strong>What is Ronin?</strong></p>\n    <p>Ronin is the blockchain network Yakkamon runs on &mdash; built specifically for games, with much lower fees than networks like Ethereum. Items living on Ronin (like your Genesis monster) are provably yours and can be traded with other players, rather than being locked inside one company's database.</p>",
  "items": []
 },
 {
  "id": "egg-tiers",
  "name": "Eggs & referrals",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "What does signing up early actually get me?",
    "a": "<p>One thing: your <strong>Monster Egg</strong> tier. Eggs are handed out in registration order, and once a tier fills up it's gone.</p>\n    <div class=\"table-scroll\"><table class=\"prereg-table\">\n      <tr><th>Sign-up position</th><th>Monster Egg</th></tr>\n      <tr><td>1 &ndash; 10,000</td><td>&#128142; Platinum</td></tr>\n      <tr><td>10,001 &ndash; 25,000</td><td>&#129351; Gold</td></tr>\n      <tr><td>25,001 &ndash; 50,000</td><td>&#129352; Silver</td></tr>\n      <tr><td>50,001 &ndash; 100,000</td><td>&#129353; Bronze</td></tr>\n      <tr><td>100,001 &ndash; 500,000</td><td>Basic</td></tr>\n    </table></div>\n    <p>A Platinum egg is <strong>mainly a cosmetic and early-collectible difference</strong> &mdash; the team has confirmed the sign-up tiers function that way rather than as a power difference. Every monster works as a worker for you regardless of which egg it came from. It is not a head start on the leaderboard and carries no claim on early access.</p>",
    "id": "what-does-signing-up-early-actually-get-me"
   },
   {
    "q": "What does &ldquo;the leaderboard locks&rdquo; mean?",
    "a": "<p>It&rsquo;s the moment your rank stops moving and the airdrop is settled. The team&rsquo;s wording is that you have to <strong>earn your rank and hold it until the leaderboard locks</strong> &mdash; and that once it does, <strong>the airdrop is closed for good</strong>.</p>\n    <p>Two things follow from that, and they matter more than most people realise:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Reaching a rank isn&rsquo;t enough &mdash; you have to still be there at the end.</strong> Sitting in the top 2,000 today guarantees nothing if others pass you before the lock.</li>\n      <li><strong>It only happens once.</strong> There is no second airdrop, no later window, and no way to buy in afterwards.</li>\n    </ul>\n    <div class=\"prereg-callout info\"><strong>The lock now has a position, if not a date.</strong> The official Important Dates page puts it <strong>one week before early access launch</strong>, with rewards sent out three days later. Launch itself is November or December, so the exact day is still to be announced &mdash; and the team has said the leaderboard will be <a href=\"article-dev-stream-graded.html\">hidden as launch approaches</a> so it can&rsquo;t be gamed on the final day. Practically: don&rsquo;t plan to coast and sprint at the end, because you won&rsquo;t be able to see the finish line.</div>",
    "id": "what-does-the-leaderboard-locks-mean"
   },
   {
    "q": "I signed up late &mdash; am I locked out of the airdrop?",
    "a": "<p>No. The team is explicit about this: the leaderboard is points-based, so <strong>a trainer who signs up today and plays daily can pass someone who signed up on day one and stopped showing up</strong>.</p>\n    <p>Sign-up date decides your Monster Egg tier and nothing else. Every airdrop position is earned on points, and there is <strong>no sale and no way to buy in</strong> &mdash; the Monster NFTs are only ever awarded by leaderboard rank.</p>",
    "id": "i-signed-up-late-am-i-locked-out-of"
   },
   {
    "q": "What are the four Genesis Legendaries?",
    "a": "<p>They're the founding set of Legendary monsters, earned on leaderboard rank alone. As of 12 August they have names, and the old &ldquo;Legendary Egg A/B/C&rdquo; labels are retired:</p>\n    <div class=\"table-scroll\"><table class=\"prereg-table\">\n      <tr><th>Monster</th><th>Ranks</th><th>Roughly how many</th><th>Previously called</th></tr>\n      <tr><td>&#127785; <strong>Storm</strong></td><td>1 &ndash; 50</td><td>50</td><td><em>new</em></td></tr>\n      <tr><td>&#11036; <strong>Echo</strong></td><td>1&ndash;3, 51 &ndash; 250</td><td>203</td><td>Legendary Egg A</td></tr>\n      <tr><td>&#127800; <strong>Bloom</strong></td><td>4&ndash;10, 251 &ndash; 500</td><td>257</td><td>Legendary Egg B</td></tr>\n      <tr><td>&#127754; <strong>Tide</strong></td><td>501 &ndash; 2,000</td><td>1,500</td><td>Legendary Egg C</td></tr>\n    </table></div>\n    <p class=\"tip-caption\">Supply figures are official. The airdrop totals <strong>5,010 Monster NFTs across 5,000 trainers</strong> &mdash; the extra ten are the second monsters going to ranks 1&ndash;10.</p>",
    "id": "what-are-the-four-genesis-legendaries"
   },
   {
    "q": "Is Storm better than the others?",
    "a": "<p><strong>Storm is the exception to the &ldquo;all the same power level&rdquo; rule.</strong> The team describes it as the newest monster in the set and the hardest to earn &mdash; it sits <em>above</em> everything else, and the only way to be airdropped one is to finish in the top 50.</p>\n    <p>Echo, Bloom and Tide are the three that were previously Legendary Eggs A, B and C. Those differ in species and role rather than raw strength, and each has had its utility <strong>lifted</strong> in this update. Storm is the one genuinely at the top.</p>\n    <div class=\"prereg-callout info\"><strong>The top 10 get two.</strong> Ranks 1&ndash;3 receive Storm and Echo; ranks 4&ndash;10 receive Storm and Bloom. Everyone from 11 to 2,000 receives a single Genesis Legendary.</div>",
    "id": "is-storm-better-than-the-others"
   },
   {
    "q": "Did anyone lose out in the 12 August change?",
    "a": "<p>No band did. Every rank either kept the monster it was in line for &mdash; with its utility lifted &mdash; or moved up into a better one. <strong>Storm was added above the ladder rather than pushing anyone down it</strong>, and the Legendary bracket doubled in size, running to rank 2,000 where it used to stop at 1,000.</p>\n    <p>The band that gained most is <strong>1,001&ndash;2,000</strong>, which was in line for a Rare Egg and now receives Tide, a Genesis Legendary. <a href=\"article-reward-ladder-analysis.html\">Our full analysis &rarr;</a></p>",
    "id": "did-anyone-lose-out-in-the-12-august-change"
   },
   {
    "q": "How is this different from the sign-up egg tiers?",
    "a": "<p>Completely different systems, and they get confused constantly.</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Sign-up egg tiers</strong> (Platinum, Gold, Silver, Bronze, Basic) come from <em>when you registered</em>, and the team has said they&rsquo;re mainly cosmetic and early-collectible.</li>\n      <li><strong>The four Genesis Legendaries</strong> (Storm, Echo, Bloom, Tide) come from <em>your points rank</em>, are limited to the <strong>top 2,000</strong> trainers, and are genuine Legendary monsters.</li>\n    </ul>\n    <p>One is decided the day you sign up and matters least. The other is earned over months. <a href=\"#ranks-tiers\">The full rank ladder &rarr;</a></p>",
    "id": "how-is-this-different-from-the-sign-up-egg"
   },
   {
    "q": "What is the egg counter I keep seeing?",
    "a": "<p>It tracks <strong>Monster Egg tiers only</strong> &mdash; how many Platinum sign-up slots are left. That is all it tracks. It is <em>not</em> an early-access counter, and it is <em>not</em> counting down Genesis Monster NFTs. When a tier fills, the only thing you've missed is that egg type; everything that actually decides your rank is still wide open.</p>",
    "id": "what-is-the-egg-counter-i-keep-seeing"
   },
   {
    "q": "Is my Monster Egg an NFT?",
    "a": "<p>No. It's an in-game item &mdash; nothing to mint, nothing to claim, no wallet needed. It simply appears on your farm the first time you log into Yakkamon.</p>",
    "id": "is-my-monster-egg-an-nft"
   },
   {
    "q": "I signed up late. Am I out of the running?",
    "a": "<p>Not at all. A Basic egg holder who earns points every day will finish above a Platinum egg holder who signed up and never came back. Rank is earned, not reserved.</p>",
    "id": "i-signed-up-late-am-i-out-of-the"
   },
   {
    "q": "How do referral points work &mdash; and can they be taken away?",
    "a": "<p>Yes, they can. Referrals are <strong>reviewed before rewards are finalized</strong>, so referral points stay provisional until then. A referral only counts if the friend is a real, separate person with a verified account who actually takes part in pre-registration. Each counting referral is worth <strong>75 points</strong>. <strong>Your first five referrals are instant.</strong> From the sixth onward, your friend must <strong>link a wallet</strong> and <strong>deposit 100 $FLOWER</strong> of their own before the points land &mdash; linking Discord and X no longer verifies a referral, because bot accounts cleared that bar in bulk. A sign-up alone pays nothing. <a href=\"article-referral-rule-change-flower-deposit.html\">The rule change &rarr;</a></p>\n    <p>These don't count:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Unverified accounts</strong> &mdash; sign-ups that never complete verification.</li>\n      <li><strong>Multi-accounting</strong> &mdash; referring yourself with alt accounts, throwaway emails, or shared devices and wallets.</li>\n      <li><strong>Bots and automation</strong> &mdash; bulk or scripted sign-ups.</li>\n      <li><strong>Inactive sign-ups</strong> &mdash; accounts made purely to farm a referral bonus, with no real activity.</li>\n    </ul>\n    <div class=\"prereg-callout warning\"><strong>Removed referrals are deducted from your total</strong>, which can lower your trainer number and your tier. Serious or repeated abuse can disqualify an account from pre-registration rewards entirely.</div>",
    "id": "how-do-referral-points-work-and-can-they-be"
   },
   {
    "q": "How does the reward track work?",
    "a": "<p>It runs on a <strong>7-day cycle</strong> rather than fixed points milestones. Every week a new list of rewards appears for you to claim; claimed items go into your inventory and stay there, and you'll be able to claim them in-game once you have early access. Each new list <strong>replaces</strong> the last, so anything left unclaimed is gone &mdash; check back weekly.</p>",
    "id": "how-does-the-reward-track-work"
   }
  ]
 },
 {
  "id": "genesis",
  "name": "Genesis monsters",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "What exactly is a Genesis Monster?",
    "a": "<p>A Genesis Monster is one of 5,000 founding creatures handed out free when early access opens through the <strong>Genesis airdrop</strong> (the official docs also call this the <strong>Trainer Point airdrop</strong> or the <strong>NFT airdrop</strong> &mdash; all three names mean the same thing), as a thank-you to players who backed Yakkamon before launch. There is no sale, no second window, and no way to buy in afterwards. Once the leaderboard locks, the Genesis line closes permanently.</p>",
    "id": "what-exactly-is-a-genesis-monster"
   },
   {
    "q": "Are they just collectibles, or do they actually do something?",
    "a": "<p>They're playable creatures that sit at the top end of the power curve &mdash; not cosmetic items. Three things make them worth having:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Born with XP</strong> &mdash; each one arrives already carrying in-game experience, so you start ahead of anyone who caught their first creature on launch day.</li>\n      <li><strong>Fully tradable</strong> &mdash; hold it, build your roster around it, or trade it on-chain. It's yours.</li>\n      <li><strong>Specialized</strong> &mdash; some are built for <strong>battle</strong>, some for <strong>gathering</strong> (resource production), and others for different corners of the game entirely. Some are simply stronger than others.</li>\n    </ul>",
    "id": "are-they-just-collectibles-or-do-they-actually-do"
   },
   {
    "q": "Do I get to choose which one I get?",
    "a": "<p>No &mdash; and you won't even know what you have until launch day. At early access launch there's a <strong>Genesis Reveal Event</strong> (a live unwrapping), where every Genesis Monster is revealed at once. Some trainers will find a top-tier battler, some a gathering monster that quietly produces resources for months, and a few will reveal something the rest of the server spends the season trying to trade for.</p>",
    "id": "do-i-get-to-choose-which-one-i-get"
   },
   {
    "q": "Is the airdrop first come, first served?",
    "a": "<p>No. The <a href=\"article-genesis-airdrop-5000.html\">5,000 Genesis Monster NFTs</a> go to the top 5,000 trainers on the <strong>points leaderboard</strong> &mdash; not the first 5,000 to sign up. Registering on day one earns you nothing here; points do.</p>",
    "id": "is-the-airdrop-first-come-first-served"
   },
   {
    "q": "So what decides whether I get one at all?",
    "a": "<p>Only your final leaderboard rank on points:</p>\n    <div class=\"table-scroll\"><table class=\"prereg-table\">\n      <tr><th>Leaderboard rank (by points)</th><th>Airdrop</th></tr>\n      <tr><td>1 &ndash; 1,000</td><td><strong>Legendary</strong> Monster NFT</td></tr>\n      <tr><td>1,001 &ndash; 5,000</td><td>Monster NFT</td></tr>\n      <tr><td>5,001+</td><td>Not eligible for the airdrop</td></tr>\n    </table></div>\n    <div class=\"prereg-callout warning\"><strong>This is not first come, first served.</strong> Monster NFTs are awarded on points, not on how early you signed up. Signing up doesn't reserve one &mdash; you have to earn the rank and hold it until the leaderboard locks. There is no sale, no second window, and no way to buy in later.</div>\n    <div class=\"prereg-callout success\"><strong>Late to pre-registration? You're not locked out.</strong> A trainer who signs up today and grinds daily can pass someone who signed up on day one and stopped showing up.</div>\n\n    <p>Only your final leaderboard rank:</p>",
    "id": "so-what-decides-whether-i-get-one-at-all"
   }
  ]
 },
 {
  "id": "free-mint",
  "name": "Free mint",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "What is the free mint?",
    "a": "<p>In <strong>mid-September</strong>, a free mint goes live on Ronin. Mint one and you're holding an exclusive early Yakkamon monster. It costs nothing beyond the network fee (gas) &mdash; there's no mint price.</p>",
    "id": "what-is-the-free-mint"
   },
   {
    "q": "How many are there?",
    "a": "<p><strong>Only 10,000 can be minted.</strong> When the last one goes, the free mint closes and these early monsters can't be obtained again &mdash; no restock, no second wave. But the team has been explicit that this <strong>is not a race against bots</strong>: the mint runs on a verified whitelist, one mint per trainer, and a wallet that isn't on the list is blocked at the contract however fast it moves or however much gas it pays. What matters is <strong>being verified in time</strong>, not being quick on the day.</p>\n    <div class=\"prereg-callout warning\"><strong>Speed only helps if you're on the whitelist.</strong> The mint runs on a <strong>secure, verified whitelist</strong> &mdash; only verified pre-registered trainers can mint, one per trainer. A wallet that isn't on the list cannot mint at all, however fast it is or however much gas it pays. Get <strong>verified well before the mid-September mint window</strong>.</div>",
    "id": "how-many-are-there"
   },
   {
    "q": "Do I need a good rank to take part?",
    "a": "<p>No &mdash; and this is what separates it from the airdrop. The free mint is open to <strong>every verified</strong> pre-registered trainer whatever your leaderboard position. It's decided by the <strong>verified whitelist</strong>, not by points and not by speed. You do have to be pre-registered and verified before the mint opens in mid-September, though; there's no joining after the fact.</p>",
    "id": "do-i-need-a-good-rank-to-take-part"
   },
   {
    "q": "Do I need to do anything before mint day?",
    "a": "<p>Yes &mdash; <strong>complete your verification</strong>. The mint is whitelist-gated, and only verified pre-registered accounts make the list. Signing up isn't enough on its own; an unverified account can't mint. The whitelist also means:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>One mint per trainer.</strong> Alt accounts, throwaway emails and shared wallets don't stack.</li>\n      <li><strong>Bots are filtered out beforehand</strong>, using the same review applied to referrals.</li>\n      <li><strong>No gas war.</strong> Paying more gas can't jump the queue if you aren't whitelisted.</li>\n    </ul>",
    "id": "do-i-need-to-do-anything-before-mint-day"
   },
   {
    "q": "Do I get to see what I minted?",
    "a": "<p>Not straight away. You're minting <strong>blind</strong> &mdash; all 10,000 stay sealed until <strong>Early Access launches</strong>, and that's the moment every one of them is revealed at once. Nobody knows what's in the pool until the doors open.</p>",
    "id": "do-i-get-to-see-what-i-minted"
   },
   {
    "q": "Is there anything rare in there?",
    "a": "<p>Yes. Seeded into the 10,000 are <strong>5 Legendary monsters</strong> &mdash; the exact same legendary, top-of-the-power-curve creatures handed out in the Trainer Point airdrop (the Genesis airdrop). Five mints out of ten thousand. Someone is going to open one.</p>",
    "id": "is-there-anything-rare-in-there"
   },
   {
    "q": "Why bother if I'm already pre-registered?",
    "a": "<p>Because minting <strong>earns pre-registration points</strong>, and points decide your trainer number, your Genesis airdrop, and your access wave. The mint isn't a side quest &mdash; it feeds directly into your leaderboard rank. It also runs a full month ahead of early access, so mint holders are the founding trainers.</p>",
    "id": "why-bother-if-i-m-already-pre-registered"
   },
   {
    "q": "Do I need to mint to get my Monster Egg?",
    "a": "<p>No &mdash; the two are completely unrelated. Your Monster Egg is already yours from signing up and appears on your farm automatically. The free mint is a separate, optional event for a different thing entirely: an NFT monster.</p>",
    "id": "do-i-need-to-mint-to-get-my-monster"
   },
   {
    "q": "What do I do with it once I've minted?",
    "a": "<p>You'll be able to deposit minted monsters into Yakkamon once you have game access.</p>\n\n    <div class=\"prereg-callout warning\"><strong>The free mint and the Genesis airdrop are not the same thing.</strong> The mint is 10,000 monsters, open to every <strong>verified</strong> trainer, gated by the whitelist rather than by speed, claimed by you in mid-September. The airdrop (also called the <strong>Trainer Point airdrop</strong>) is 5,000 monsters, top 5,000 on points only, landing automatically at launch. You can receive both &mdash; see <a href=\"#mint-vs-airdrop\">section 4</a>.</div>",
    "id": "what-do-i-do-with-it-once-i-ve"
   },
   {
    "id": "i-deposited-on-base-do-i-need-a-ronin",
    "q": "I deposited on Base — do I need a Ronin wallet?",
    "a": "<p><strong>Yes.</strong> Base is fine for deposits &mdash; the points count the same &mdash; but the free mint happens <strong>only on Ronin</strong>, in mid-September. If you plan to mint, set up a Ronin-compatible wallet and complete verification <strong>before the window opens</strong>; a Base wallet cannot mint, however verified the trainer behind it is.</p>"
   }
  ]
 },
 {
  "id": "flower",
  "name": "$FLOWER deposits",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "What is $FLOWER, and is it a new token?",
    "a": "<p>No, it isn't new. Yakkamon deliberately doesn't launch its own token &mdash; it reuses <strong>$FLOWER</strong>, the same one already running across the studio's other games. That means you can start building an in-game balance before early access even opens.</p>",
    "id": "what-is-flower-and-is-it-a-new-token"
   },
   {
    "q": "What does depositing actually do for me?",
    "a": "<p>Two things at once, and this is the part people miss:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>It credits your in-game balance.</strong> The $FLOWER is held for you and waiting the moment you get access.</li>\n      <li><strong>It earns leaderboard points.</strong> Two boosts stack. A <strong>weekly multiplier</strong> &mdash; 3&times; through the opening week, then 0.2&times; less every week until it settles at 1&times; &mdash; held at 2.8&times; for week 3 after the week-2 deposit pause. And a <strong>size bonus rated per deposit</strong>, doubling at each step from +10% at 50 $FLOWER to +80% at 50,000. Splitting one deposit into several smaller ones earns <em>less</em>, because each piece gets its own smaller bonus.</li>\n    </ul>\n    <p>You aren't trading one for the other. You keep the $FLOWER <em>and</em> the points, and those points push you toward better trainer tiers, earlier access waves, and the Genesis airdrop.</p>",
    "id": "what-does-depositing-actually-do-for-me"
   },
   {
    "q": "Are the points one-time, or do I keep earning while my $FLOWER sits there?",
    "a": "<p><strong>One-time, per deposit.</strong> Each deposit is scored once, in the week it confirms, and that&rsquo;s the end of it &mdash; a deposit sitting in your balance doesn&rsquo;t keep generating points.</p>\n    <p>But every deposit earns its own points, so several deposits each pay out. The catch is that each one is also scored on <em>its own size</em>: a single 5,000 $FLOWER transfer earns the +40% bonus, while ten transfers of 500 earn ten separate +20% bonuses instead. That&rsquo;s why splitting costs you.</p>\n    <p>Two things are locked in at the moment you send, and neither changes afterwards:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>The week you deposit in</strong> sets the multiplier &mdash; 3&times; in the opening week, falling 0.2&times; weekly to a 1&times; floor (week 3 held at 2.8&times;).</li>\n      <li><strong>The size of that single transfer</strong> sets the bonus tier.</li>\n    </ul>\n    <p><a href=\"article-flower-deposit-guideline.html\">The full deposit guideline &rarr;</a></p>",
    "id": "are-the-points-one-time-or-do-i-keep"
   },
   {
    "q": "When did deposits open, and why do the docs say 10 August?",
    "a": "<p>Deposits <strong>opened on 9 August at 8:00 PM ET</strong>, which is when deposit addresses were issued. They&rsquo;re live now. The official docs say 10 August because they quote the <strong>UTC</strong> date &mdash; 8:00 PM ET is midnight UTC, already the 10th in London and everywhere east of it. Same instant, two calendar dates. Minimum deposit is 5 $FLOWER on Base or Ronin, and points land in the week the deposit confirms.</p>",
    "id": "when-did-deposits-open-and-why-do-the-docs"
   },
   {
    "q": "Should I deposit all at once or spread it out?",
    "a": "<p>All at once, and as early as you can &mdash; both bonuses push the same way. The <strong>weekly multiplier</strong> is 3&times; in the opening week and falls 0.2&times; weekly to a floor of 1&times; (week 3 was held at 2.8&times; after the week-2 pause), and the <strong>size bonus is rated per deposit</strong>, so the full amount has to land in one transfer. Concretely: 5,000 $FLOWER sent once in the opening week earns <strong>17,000 points</strong>; the same 5,000 sent as ten deposits of 500 once the multiplier bottoms out earns <strong>6,000</strong>. <a href=\"tips.html#weekly-flower\">The full breakdown &rarr;</a></p>",
    "id": "should-i-deposit-all-at-once-or-spread-it"
   },
   {
    "q": "Can I get my $FLOWER back if I change my mind?",
    "a": "<p>Yes. There's no lock-up and no penalty. You can withdraw with <strong>no withdrawal tax</strong> once you have game access.</p>",
    "id": "can-i-get-my-flower-back-if-i-change"
   },
   {
    "q": "Where do I get $FLOWER in the first place?",
    "a": "<p>Two routes. You can <strong>earn it free</strong> by playing <a href=\"https://www.sunflower-land.com/\" target=\"_blank\" rel=\"noopener\">Sunflower Land</a> &mdash; selling crops, deliveries, seasonal chapters &mdash; since $FLOWER is that game&rsquo;s in-game token. Or you can <strong>buy it</strong> &mdash; $FLOWER is the same ERC20 token on <strong>both Base and Ronin</strong>, at one identical contract address, and Yakkamon accepts deposits on either. <strong>Neither chain needs bridging:</strong> you can swap for it on Base, or directly inside the Ronin Wallet. Use whichever chain your funds are already on.</p>\n    <p>For anything to do with acquiring or depositing it, work from <a href=\"https://docs.yakkamon.com/pre-registration/flower-deposits\" target=\"_blank\" rel=\"noopener\">the official Yakkamon deposits guideline</a> &mdash; which now publishes the contract address and the buy links for both chains &mdash; and the deposit panel in your own trainer dashboard. <strong>Never take a contract address or deposit address from a reply or a DM</strong>, and check anything a swap interface shows you against the official docs page &mdash; fake tokens with the same name and ticker are a common way people lose money. <a href=\"article-flower-deposit-guideline.html\">Full breakdown &rarr;</a></p>",
    "id": "where-do-i-get-flower-in-the-first-place"
   },
   {
    "q": "Which deposit week am I in right now?",
    "a": "<p>The rate steps down every week, so it depends when you read this. Week one (10&ndash;16 Aug) paid <strong>3&times;</strong>, and it normally falls 0.2&times; each week &mdash; with one exception: depositing was paused during week 2, so week 3 (24&ndash;30 Aug) was held at <strong>2.8&times;</strong> and the schedule shifted a week, resting at 1&times; from around 26 October. The <a href=\"article-flower-deposit-guideline.html\">deposit guideline</a> carries the full week-by-week table with a live indicator showing the current rate.</p>",
    "id": "which-deposit-week-am-i-in-right-now"
   },
   {
    "q": "When can I actually withdraw &mdash; is it this year?",
    "a": "<p>Yes, this year, but with two qualifications. The official guideline says your $FLOWER can be spent in-game or withdrawn <strong>once you gain access to the game</strong>, and early access opens in <strong>November or December 2026</strong>. Note that access is staged by wave, so your own unlock follows your wave rather than launch day &mdash; and Wave 4 has no confirmed timing yet.</p>\n    <p><strong>Access is staged by wave, not a single date.</strong> Wave 1 is the top 1,000 on points, wave 2 runs to 5,000, and so on. If withdrawal follows access, a later wave waits longer than an earlier one. No exact dates have been announced for any wave.</p>\n    <p><strong>And it isn&rsquo;t instant even then</strong> &mdash; percentage-based limits apply for the first few weeks after launch, capping how much you can take out in a period. So &ldquo;deposit now, withdraw everything on day one&rdquo; isn&rsquo;t a plan that&rsquo;s available.</p>\n    <div class=\"prereg-callout info\"><strong>One honest flag:</strong> the docs say &ldquo;once you gain access to the game&rdquo; without spelling out whether that means <em>your</em> wave or the general launch. We read it as your wave, but that&rsquo;s our inference rather than something stated &mdash; worth asking the team directly if the timing matters to you.</div>",
    "id": "when-can-i-actually-withdraw-is-it-this-year"
   },
   {
    "q": "What are the withdrawal limits I've heard about?",
    "a": "<p>For security, percentage-based limits may apply during the <strong>first few weeks after launch</strong>. These cap how much can be withdrawn in a given period &mdash; they don't stop you withdrawing. It's a standard safeguard while the game economy stabilises, and the limits are lifted as things settle.</p>",
    "id": "what-are-the-withdrawal-limits-i-ve-heard-about"
   },
   {
    "q": "Is depositing risky?",
    "a": "<p>We're not financial advisors and can't tell you whether to deposit &mdash; that's your call. What we can say factually: $FLOWER isn't a new speculative token, deposits are held on-chain rather than in a company account, there's no lock-up, and withdrawal is tax-free. As with any on-chain asset, smart-contract and platform risk still apply, the same as with any blockchain system.</p>",
    "id": "is-depositing-risky"
   },
   {
    "id": "why-didn-t-the-multiplier-drop-in-week-3",
    "q": "Why didn't the multiplier drop in week 3?",
    "a": "<p>Because depositing was <strong>paused during week 2</strong>, the team held the week&nbsp;3 multiplier at <strong>2.8&times;</strong> rather than dropping it to 2.6&times;. The usual 0.2&times; weekly step resumed from week&nbsp;4, which pushes every later week &mdash; and the 1.0&times; floor &mdash; <strong>one week later</strong> than first scheduled: the floor now arrives from <strong>26 October</strong>. The full corrected week-by-week table is on the <a href=\"tips.html\">Tips page</a> and in the <a href=\"article-flower-deposit-guideline.html\">deposit guideline</a>.</p>"
   },
   {
    "id": "when-do-flower-deposits-close",
    "q": "When do $FLOWER deposits close?",
    "a": "<p>The final deposit window ends on <strong>16 November at 01:59 UTC</strong>. Weeks turn at 02:00 UTC each Monday, and the multiplier sits at its 1.0&times; floor from 26 October through to the close &mdash; so there is no scheduled moment after that where waiting earns you a better rate.</p>"
   }
  ]
 },
 {
  "id": "leaderboard",
  "name": "Leaderboard",
  "intro": "<p>About the live <a href=\"leaderboard.html\">deposit leaderboard</a> on this site.</p>",
  "rich": "",
  "items": [
   {
    "id": "where-can-i-see-the-live-deposit-leaderboard",
    "q": "Where can I see the live deposit leaderboard?",
    "a": "<p>Right here on this site &mdash; the <a href=\"leaderboard.html\">Deposit Leaderboard</a> ranks every address that has deposited $FLOWER, built from public blockchain data on <strong>both Base and Ronin</strong>. Paste your deposit address to find your rank, see how far the next reward band is, and plan what a climb would cost.</p>"
   },
   {
    "id": "why-is-my-leaderboard-score-lower-than-the-game",
    "q": "Why is my leaderboard score lower than the game shows?",
    "a": "<p>Because the board can only see the blockchain. It counts <strong>deposit points</strong> &mdash; amount &times; (week multiplier + size bonus) &mdash; exactly as the game scores them. Your <strong>streak, referral and quest points live off-chain</strong>, so your real total in the game is higher than your on-chain row. Treat the board as your deposit ranking, not your full score.</p>"
   },
   {
    "id": "what-s-the-difference-between-my-wallet-address-and",
    "q": "What's the difference between my wallet address and my deposit address?",
    "a": "<p>They are different addresses, and mixing them up is the most common lookup mistake. Every trainer gets their <strong>own deposit address</strong>, shown in the game, valid on both Base and Ronin &mdash; that receiving address is your identity on-chain. You can send $FLOWER to it from any wallet and it still counts to you. When searching the <a href=\"leaderboard.html\">leaderboard</a>, use the <strong>deposit address</strong>, not the wallet you sent from.</p>"
   },
   {
    "id": "how-often-does-the-leaderboard-update",
    "q": "How often does the leaderboard update?",
    "a": "<p>Roughly <strong>every six hours</strong>. The page shows when it was last recalculated and a countdown to the next update, both next to the Full Ranking heading and under the table. Deposits confirm on-chain immediately &mdash; they just take up to one refresh cycle to appear in the rankings.</p>"
   }
  ]
 },
 {
  "id": "gameplay",
  "name": "Playing the game",
  "intro": "<p>Short answers on how the game itself plays. The long versions live on the <a href=\"gameplay.html\">Gameplay page</a> &mdash; 22 systems, each explained with a plain-English analogy &mdash; and in the <a href=\"gameplay-guide.html\">field guide</a>.</p>",
  "rich": "",
  "items": [
   {
    "id": "can-any-monster-gather-any-resource",
    "q": "Can any monster gather any resource?",
    "a": "<p>No &mdash; and this single rule shapes the whole game. Every resource is <strong>gated to a type</strong>: a Grass type gathers Wood, and a Fire type is refused outright (&ldquo;Fire type cannot harvest wood!&rdquo;). So collecting more species literally unlocks more of the map's materials, and <strong>a narrow roster caps what you can produce</strong> no matter how well you play. Full write-up under <a href=\"gameplay.html?system=type-locking\">type locking</a>.</p>"
   },
   {
    "id": "are-rarer-monsters-always-better",
    "q": "Are rarer monsters always better?",
    "a": "<p>No. Rarity is set <strong>at the species level</strong> &mdash; there's no rare version of a common monster &mdash; and the team has been specific that <strong>the best commons can beat middling rares</strong> and roughly match a low-end legendary on raw stats. What rares and legendaries have is higher potential as they level, plus scarcer, higher-impact traits. Per-monster utilities are due in <strong>September</strong>, and until then nobody can rank species honestly.</p>"
   },
   {
    "id": "should-i-collect-duplicates-of-my-best-monster",
    "q": "Should I collect duplicates of my best monster?",
    "a": "<p>No &mdash; the game is designed against it. <strong>Identically named boosts don't stack</strong>: two monsters with &ldquo;Wood Gatherer I&rdquo; give you the effect once. Differently named or higher-ranked boosts do stack. The stated intent is to reward <strong>breadth</strong> &mdash; a wide roster with one strong specialist per job beats five copies of your best monster. See <a href=\"gameplay.html?system=boost-stacking\">boost stacking</a>.</p>"
   },
   {
    "id": "does-my-farm-keep-running-while-i-m-offline",
    "q": "Does my farm keep running while I'm offline?",
    "a": "<p>Yes, with two catches. Monsters repeat their work cycles automatically, including while you're away &mdash; but their haul lands in <strong>storage bins that cap</strong> (20 slots early, expandable later), and time spent at a full bin is production lost. Monsters also get <strong>hungry, hurt and tired</strong>, and one in a bad state isn't earning. So the game runs without you; it just doesn't run <em>well</em> without you for long.</p>"
   },
   {
    "id": "how-many-yakkamon-are-there",
    "q": "How many Yakkamon are there?",
    "a": "<p><strong>Twenty-one</strong> have been officially shown so far, on the roster sheet &mdash; you can see it on the <a href=\"gameplay.html\">Gameplay page</a> &mdash; out of roughly <strong>50&ndash;60 species at launch</strong>. The rest of the roster arrives after launch across chapter releases, each typically paired with a new region. No names, types or rarities have been attached to the portraits yet: <a href=\"article-yakkamon-roster-revealed.html\">what can and can't be read into the sheet</a>.</p>"
   },
   {
    "id": "do-the-yakkamon-have-names-yet",
    "q": "Do the Yakkamon have names yet?",
    "a": "<p>No &mdash; none are published, and the team has said monster names are <strong>not final and may be community-influenced</strong>. Any name you see circulating is a fan's guess, including ours.</p>"
   },
   {
    "id": "what-are-shinies",
    "q": "What are shinies?",
    "a": "<p>The official economy post mentioned them once: every monster NFT has unique traits, <strong>including collectible shinies</strong>. That's the entire published record &mdash; no odds, no mechanics, no pictures. They read as a collectability axis separate from the rarity tiers, but treat anything beyond that one sentence as speculation for now. Background in our <a href=\"article-economy-explained.html\">economy breakdown</a>.</p>"
   },
   {
    "id": "when-can-i-battle-other-players",
    "q": "When can I battle other players?",
    "a": "<p>After launch &mdash; the PvP arena and tournaments are <strong>post-launch features</strong>, arriving once the core game has settled. Worth knowing early: the team expects the market to value <strong>gathering specialists first</strong> and shift toward battle-stat monsters once the arena establishes, and they've said they'll let that shift happen rather than intervene.</p>"
   }
  ]
 },
 {
  "id": "economy",
  "name": "Money & the market",
  "intro": "<p>What's been published about money, markets and trading &mdash; and what hasn't. The full analysis is in <a href=\"article-economy-explained.html\">our economy breakdown</a>.</p>",
  "rich": "",
  "items": [
   {
    "id": "is-yakkamon-free-to-play",
    "q": "Is Yakkamon free to play?",
    "a": "<p>Yes &mdash; free-to-play is confirmed, and it runs as a <strong>browser web app</strong> with no download. A wallet only matters for the on-chain parts: the free mint, the airdrop, and trading. You can play the whole game without any of those.</p>"
   },
   {
    "id": "can-i-earn-real-money-playing-for-free",
    "q": "Can I earn real money playing for free?",
    "a": "<p>Honestly: <strong>that hasn't been stated, and the design leans against it</strong>. The official economy post splits assets in two &mdash; easily gathered free-to-play resources are kept deliberately separate from the effort-gated tradeable ones, with the stated reason that gathering loops can use automation. Our reading is that the free layer buys <em>progress</em> rather than income, and value concentrates in what a script can't farm &mdash; but that's our inference, not something the team has said. <a href=\"article-economy-explained.html\">The full argument &rarr;</a></p>"
   },
   {
    "id": "where-will-i-trade-monsters",
    "q": "Where will I trade monsters?",
    "a": "<p>Two places, in order. The free mint and the trainer airdrop launch exclusively on the <strong>Ronin marketplace</strong>; an <strong>in-game marketplace</strong> follows after launch, running on $FLOWER with a percentage fee applied as a soft burn. Until launch, the Ronin marketplace is the only venue that will exist.</p>"
   },
   {
    "id": "can-i-sell-any-monster-i-catch",
    "q": "Can I sell any monster I catch?",
    "a": "<p>Not necessarily. Basic monsters have <strong>limited tradeability</strong>, and some must be hunted yourself rather than bought. The tiers behave differently on-chain: Legendaries are NFTs, rares are SFTs with supply set by how hard players hunt during their window, and commons are plain game assets. So you can't simply buy your way out of a gap &mdash; or sell your way out of every surplus.</p>"
   },
   {
    "id": "is-flower-deflationary",
    "q": "Is $FLOWER deflationary?",
    "a": "<p>The team says the game is &ldquo;built deflationary&rdquo;, with marketplace fees applied as a <strong>soft burn</strong> &mdash; burned <em>or</em> recycled into rewards. Worth being precise here: the fee percentage, the burn share and the emission schedule are all unpublished, so the claim can't be checked yet. Not false &mdash; just currently unfalsifiable, which is our standing note until numbers land.</p>"
   }
  ]
 },
 {
  "id": "launch",
  "name": "Launch timing",
  "intro": "",
  "rich": "",
  "items": [
   {
    "q": "When does the game actually come out?",
    "a": "<p>Early access opens in <strong>November or December 2026</strong>, and it rolls out in waves rather than all at once. <strong>Wave 1</strong> enters on launch day, <strong>Wave 2</strong> a week later, <strong>Wave 3</strong> a week after that, and <strong>Wave 4</strong> is confirmed closer to launch. A full public launch date beyond early access hasn't been announced. <a href=\"pre-registration.html#important-dates\">The full schedule &rarr;</a></p>",
    "id": "when-does-the-game-actually-come-out"
   },
   {
    "q": "Is there a hard date?",
    "a": "<p>The official docs now narrow early access to <strong>November or December 2026</strong>, and give the free mint as <strong>mid-September</strong>. No exact early-access day has been announced, so our timeline shows the quarter rather than a specific date &mdash; check the <a href=\"news.html\">News page</a> for confirmation once one is set.</p>",
    "id": "is-there-a-hard-date"
   },
   {
    "q": "Do I lose my place if I can't play on day one?",
    "a": "<p>No. Your wave decides when the door opens for you, not how long it stays open. Your trainer number is permanent, and your Genesis Monster is airdropped to you regardless of when you first log in.</p>",
    "id": "do-i-lose-my-place-if-i-can-t"
   },
   {
    "q": "Does Yakkamon mean Sunflower Land gets less attention?",
    "a": "<p>The team's answer is no, and they've published their reasoning in some detail. The short version:</p>\n    <ul class=\"prereg-list\">\n      <li><strong>Sunflower Land is still shipping.</strong> Over the same six months Yakkamon has been in development, Sunflower Land committed to a <strong>two-year roadmap</strong>, open-source contributors went <em>up</em>, and the release cadence kept climbing.</li>\n      <li><strong>A creature collector doesn't belong inside a farming game.</strong> Bolting one onto Sunflower Land would have taken years and slowed both games down. Spinning it out lets each be built at its own pace.</li>\n      <li><strong>Both games grow the same ecosystem.</strong> There's no new token &mdash; Yakkamon runs on <strong>$FLOWER</strong>, the same one used across the studio's games. More games means more places to use it.</li>\n      <li><strong>The team is growing.</strong> They're actively hiring designers, developers, moderators and community managers.</li>\n      <li><strong>Five years of shared foundations.</strong> The same team has worked together for over five years, so architecture, tooling and hard-won lessons carry directly from one game to the other rather than being rebuilt.</li>\n    </ul>\n    <p>It's worth reading their <a href=\"https://docs.yakkamon.com/faq\" target=\"_blank\" rel=\"noopener\">full answer</a> if this is a concern for you &mdash; and Sunflower Land is live today, so you can judge the release cadence yourself.</p>",
    "id": "does-yakkamon-mean-sunflower-land-gets-less-attention"
   }
  ]
 }
];
