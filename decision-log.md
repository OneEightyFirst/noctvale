# Decision Log

Decisions made during design, with reasoning. Newest entries at the top.

## How to use this log

`decision-log.md` is the primary handoff artifact for current design state.

- Keep `## Ideas` near the top for provisional concepts and unresolved design
  decisions.
- Add one dated section per commit below `## Ideas` and its divider.
- Use `## YYYY-MM-DD — Title`; match the title to the commit intent.
- Write `**Decision:**` for what changed and `**Reasoning:**` for why it changed.
- Remove or update Ideas entries when they become implemented rules.
- Do not include commit hashes.
- Log **game rules and setting** changes here. Log **builder data and enforcement**
  in `app/rules-updates.md`. Log **builder UX** changes here when they are not
  covered by a rules update.

Before writing a dated entry, run `date '+%Y-%m-%d %H:%M %Z'` and use the shell
date.

## Ideas

Concepts under discussion. Remove an entry when it is implemented and capture
the final rule in the dated decision-log entry for that commit.

**Actionable work lives in `todo.md`.** This section holds provisional design
only — not duplicate checklists.

**Variable Presence ranges.** Explore replacing fixed target and charge reach with a fighter-facing **Presence** value measured in inches. Each ancestry would set a baseline **Presence** by size and silhouette: larger fighters project farther, smaller fighters project less, and effects such as **Hide** could reduce a fighter's **Presence**, potentially to **0"**. Weapons would have shorter printed ranges than they do now. A ranged attack would be able to target a fighter within the weapon's printed range plus the target's **Presence**. A **Charge** would be able to reach a target within the charging fighter's **Movement** + the charging fighter's **Presence** + the target's **Presence**.

Open questions:

- Is **Presence** printed on ancestry profiles, derived from base size, or granted by keywords such as **Large**?
- Does **Presence** replace or modify engagement range, or does it only affect targeting and **Charge** reach?
- How much should current weapon ranges shrink if target **Presence** extends practical reach?
- Which effects besides **Hide** can raise or lower **Presence**, and should any fighter be prevented from reducing it to **0"**?

**The Mask of Many Faces.** Explore an Infernal spell or Domain feat that lets a fighter replace an enemy fighter's position with their own. If written as a spell, the swap would happen when the spell is cast. If written as a feat, the fighter could use it during their activation, possibly once per battle or under another timing limit. The acting player would pick up their fighter and place them where an enemy fighter within a set range stood. The displaced enemy fighter would not go **Out of Action**; instead, they would be removed from the battlefield and placed by their controlling player within that player's deployment zone at the start of the next round, then activate normally when eligible.

Open questions:

- Is this an Infernal spell, an Infernal Domain feat, or a Cult/Diabolist-style identity rule?
- What is the range, and does the acting fighter need line of sight?
- Can it target **Leaders**, **Large** fighters, **Summon** fighters, or fighters within engagement range?
- Does the displaced fighter return at the start of the next round before initiative, after initiative, or before their first activation?
- Should the effect be once per battle, require a **Sanity** or **Will** check, or carry a Mishap/backlash if it fails?

**Sweeping attack (two-handed weapons).** Explore a **Sweep** or similar action for two-handed weapons that lets a fighter attack multiple enemies in one activation. One possible cost model: add **+1 Might** die per additional target beyond the first. The attack would still resolve through the normal **Attack Sequence**, but each target would be hit separately or as part of one declared sweep.

Open questions:

- Is this a weapon keyword, a two-handed weapon trait, or a general **Strike** option available only when wielding a two-handed weapon?
- How many targets can be included, and must they be within engagement range of the attacker, of each other, or of the weapon's arc?
- Does each target get its own attack roll, or does one roll apply to all targets with separate wound resolution?
- Is the **+1 Might** die per extra target the right cost, or should sweep trade **Skill**, impose disadvantage, or limit targets by **Might** or weapon type?
- Does sweep interact with **Overwatch**, **Riposte**, or other reactions per target or once for the whole action?

---

## 2026-07-07 — Retinue builder edit-mode roster UX

**Decision:** Improve retinue edit mode in the builder: replace the exit-edit **X** with a save icon; add per-card collapse in edit mode (header-only view with name, keywords, slots, and cost); confirm before removing a fighter; match left-nav chevron behavior (right when collapsed, down when expanded); and add drag-to-reorder for non-leader fighter cards via a grip handle, persisting order in the existing `fighters` array. The Leader card stays pinned and is not draggable.

**Reasoning:** Larger retinues are hard to scan and edit when every card stays fully expanded. Collapse, safer delete, and reorder let players organize their roster without changing rules or purchase logic. Drag reorder uses `@dnd-kit` on the existing Firestore-backed fighter list, so order saves automatically with the rest of the retinue.

## 2026-07-02 — Wand Spellcasting Gear

**Decision:** Add **Wand** as **Caster** spellcasting gear. A **Wand** costs **35 Crowns**, takes 1 weapon slot, and grants +1 to hit when resolving an **Attack** spell. Multiple **Wands** or duplicate **Wand** effects do not stack.

**Reasoning:** The new **Attack** spell keyword gives caster gear a clean target. **Wand** should improve the accuracy of actual Strike Pool spells without affecting save-or-effect spells such as **Deathbolt**, and costing a weapon slot makes the choice compete with Staff, weapons, and other carried tools instead of becoming a free caster default.

## 2026-07-02 — Attack Spell Keyword

**Decision:** Add **Attack** as an explicit spell keyword. Only spells that build a Strike Pool have the **Attack** keyword, and every **Attack** spell prints **Keywords:** **Attack** before its **Attack** profile. Spells that cause harm without a Strike Pool, such as **Deathbolt** or **Horrors Relived**, are not **Attack** spells. Update spell-selection language so a Domain has a standard spell, not necessarily a standard attack spell.

**Reasoning:** Effects that harm fighters are not all the same rules object. Marking Strike Pool spells with **Attack** gives Staff, wand, magic-triangle, and future attack-specific rules a clean hook without adding a separate damage taxonomy or making save-or-effect spells inherit attack modifiers by accident.

## 2026-07-02 — Staff Spell Focus Attribute Choice

**Decision:** Replace the Staff's once-per-battle failed **Casting Roll** reroll with a new **Spell focus** rule. When a fighter purchases a **Staff**, choose **Will** or **Sanity** for that staff. When the fighter resolves a casting attack while wielding it, use the chosen attribute instead of **Skill** to determine the spell's scaling **Skill dice**; the spell's printed +**Skill** value still applies. Keep the Staff at **20 Crowns**.

**Reasoning:** Staff should support a caster's supernatural discipline rather than serve as a generic reroll token. Letting the staff key damage-spell scaling to **Will** or **Sanity** makes the weapon read as a caster tool, keeps spell attacks in the existing mixed Strike Pool system, and avoids adding a new casting subsystem or stacking extra rerolls onto high-risk spells.

## 2026-07-01 — Ranged and Spell Strike Pool Redesign

**Decision:** Replace the discarded high-dice firearm pass with a unified ranged damage model. Bows now scale from the attacker's **Might** with fixed **Skill dice**: **Shortbow** +1 **Might** / 4 **Skill**, **Longbow** +1 **Might** / 5 **Skill**. Crossbows and firearms now use fixed **Might dice** plus the attacker's **Skill**: **Crossbow** 4 **Might** / +2 **Skill**, **Heavy Crossbow** 5 **Might** / +2 **Skill**, **Pistol** 4 **Might** / +2 **Skill**, **Musket** 5 **Might** / +2 **Skill**, **Long Rifle** 5 **Might** / +3 **Skill** with critical hits on 5+, and **Blunderbuss** 3 **Might** / +2 **Skill** using a standard flame template. Damage spells now use fixed **Might dice** plus the caster's **Skill** and printed +**Skill** value. **Deathbolt** becomes **Sanity** 14+, range 18", target **Will** check or **Out of Action**.

**Reasoning:** The previous firearm increase made long-range guns too lethal by adding raw dice. The new model keeps ranged attacks in the same campaign-scaling language while making each family read differently: bows reward strength, crossbows and firearms reward handling, firearms stand apart through critical hits, and spells justify casting rolls and Mishap risk by starting strong and scaling with caster **Skill**. Template attacks stay lower because they can hit multiple fighters or control space.

## 2026-06-30 — Strike Pool cap and dual wielding

**Decision:** Set a hard **15 dice** maximum for every Strike Pool after weapon bonuses and other dice bonuses are applied. Add dual wielding for fighters using two one-handed melee weapons: choose a primary and secondary weapon, add both weapons' +**Might** and +**Skill** values to the Strike Pool up to the **15 dice** cap, and use only the primary weapon's type and special rules for critical hits and other attack effects. A fighter cannot use a shield while dual-wielding.

**Reasoning:** Maxed fighters can already reach very large pools, and a clear cap prevents additive weapon rules from making the attack step physically unwieldy. Dual wielding should feel like more offense without creating a second attack sequence, crit-fishing reroll engine, or shield-plus-off-hand default. Letting the secondary weapon add dice keeps the rule visible in the existing weapon profiles while preserving the primary weapon as the source of matchup identity.

## 2026-06-30 — Affliction tokens and Broken

**Decision:** Consolidate lasting fighter markers into a core token set: **Active**, **Downed**, **Stunned**, **Overwatch**, **Broken**, **Blinded**, **Hidden**, **Affliction**, **Bleeding**, and body tokens. Redefine **Affliction** as a stacking token condition: 1 token is **Weakened** (−1 **Might**), 2 tokens are **Enfeebled** (−1 **Might**, −1 **Skill**), and 3 tokens are **Withered** (−1 **Might**, −1 **Skill**, −1" **Movement**). Replace old **Poisoned** condition applications with Affliction tokens, make **Wither** apply **Withered**, and make rout failures and duration-based morale backlash use **Broken** as the single persistent morale state.

**Reasoning:** Sticky table states should map to physical tokens, while immediate fear and insanity effects should resolve without adding marker overhead. A three-token Affliction stack gives poison and necromancy one shared degradation language with clear escalation. **Broken** absorbs persistent morale failure so **Fear**, **Panic**, and **Insanity** can remain effects instead of separate lasting token states.

## 2026-06-29 — Retire Enfeebled

**Decision:** Remove **Enfeebled** as a defined affliction, marker, style-guide term, print-reference row, and magic affliction reference. Keep **Weakened** as the active **−1 Might**, **−1 Skill**, and **−1" Movement** affliction, and clarify that only attribute-changing afflictions count toward the attribute modifier cap. Update print quick-reference text for **Poisoned** so it matches the current slow-damage rule. Remove stale support-text references to **Relic or Instrument** and **Overcharge** where no current rule uses those terms.

**Reasoning:** **Enfeebled** had a condition definition but no current rule applied it, making it dead vocabulary for players to track. Removing it keeps the condition list tied to actual table states and avoids splitting attention between two nearly identical Might/Skill penalties. Cleaning stale support terms keeps the style and builder reminders aligned with the current **Icon** and weapon-outcome rules.

## 2026-06-29 — Poisoned slow damage

**Decision:** Change **Poisoned** from a flat **−1 Might** affliction into an ongoing condition. At the start of each activation, a **Poisoned** fighter makes a **Might** check. On a pass, remove **Poisoned**. On a failure, the fighter suffers **1 Wound** and remains **Poisoned**. Remove **Poisoned** from the attribute modifier cap example because it no longer modifies an attribute.

**Reasoning:** Poison should feel like a slow toxin rather than another stat penalty. The new rule creates a clear token-driven table state, gives tough fighters a way to shake it off, and routes harm through **Wounds** so it supports Noctvale's lethal-but-recoverable injury flow.

## 2026-06-29 — Split rules into chapter files

**Decision:** Split the combined player-facing rules sources into one chapter per Markdown file. Move **Core Rules** sections into `rules/what-you-need-to-play.md`, `rules/attributes.md`, `rules/battle-setup.md`, `rules/the-turn.md`, `rules/actions.md`, `rules/combat.md`, and `rules/conditions.md`; move retinue material into `rules/retinue-building.md`, `rules/archetypes.md`, `rules/traditions.md`, `rules/feats.md`, `rules/domains.md`, and `rules/magic.md`; move equipment material into `rules/crown-costs.md`, `rules/weapons.md`, `rules/gear.md`, and `rules/companions.md`; move campaign material into `rules/how-to-run-a-campaign.md`, `rules/advancement.md`, `rules/scenarios.md`, `rules/post-game-sequence.md`, `rules/survival-rolls.md`, and `rules/economy.md`. Add `rules/chapter-movement-log.md` to record the source-to-destination movement and update the rules-site build list, navigation, current routing docs, and local Vite dev routes for every generated chapter URL.

**Reasoning:** The public rules should read as ordered rulebook chapters, not a handful of dense reference pages. Making each chapter a file keeps the source tree aligned with the site structure before any prose rewrite begins, and the movement ledger gives a checkable record that this pass moved existing rules instead of dropping or redesigning them.

## 2026-06-29 — Attributes terminology and presentation

**Decision:** Rename the core fighter values from **Stats** to **Attributes** in current player-facing rules, style guidance, wiki navigation, print reference text, and builder-facing labels. Rewrite the opening **Core Rules** attributes section in prose: define **Movement**, **Close Combat**, **Ranged Combat**, **Might**, **Skill**, **Will**, **Sanity**, and **Wounds** individually, keep **Attribute Checks** as the shared **1d6 + attribute**, **8+** procedure, and retain the baseline ancestry profile table.

**Reasoning:** **Attributes** keeps the category short without the flatness of **Stats** or the length of **Characteristics**. A prose-led opening teaches what the profile values mean before players meet the table, while preserving the existing math, ancestry profiles, campaign caps, modifier cap, and Strike Pool rules.

## 2026-06-28 — Core rules movement, actions, and finisher pass

**Decision:** Refine **Core Rules** for table play clarity. Add **Measuring Distances** and Warcry-style horizontal movement (cross terrain **≤1"** freely except on **Crawl**; **Climb** at half **M**, chain two **Climbs** per activation). Move **Engagement**, **Falling**, and **Overwatch** into blockquote callouts. Number **Standard Battle Set-Up** (terrain → objectives → initiative → deployment) and restore **Difficult Terrain** as its own subsection. Tighten **Overwatch** (shortfall tokens, skip counts as activation, any single action as reaction). Morale uses **Will** checks; **Escaped** fighters are not **lost**; remove core **Tradition** rout bonus (defer to Tradition entries). **Aim** grants nat **6** crits on the next **Ranged** action (**5+** if the weapon already crit on **6**). **Mercy Kill** blocked when any **Active** or **Downed** enemy is in engagement range. **Aim** no longer breaks **Hidden**. Add **Climbing Rope** adventuring gear in `rules/equipment.md` and the builder. Update wiki nav (`Measuring Distances`, **Engagement**, anchor fixes, blockquote heading extraction). Sync print quick-reference and cheat sheets. Style guide: core rules state baseline only — gear/feat exceptions live on their entries.

**Reasoning:** Movement and engagement rules should read like a modern skirmish game without burying exceptions in core prose. Callouts keep reference density high without duplicate headings. **Mercy Kill** needs a melee-contest gate so finishers happen when the line is clear. **Aim** stacking with firearm or triangle crits should reward careful shots without double-counting nat **6**. Nav anchor validation must pass `build:rules` before GitHub Pages deploy.

---

## 2026-06-28 — Reduced-stat descriptor: gone mad

**Decision:** Replace the reduced-stat trio "maimed, broken, or hollowed" in
`rules/core-rules.md` with a split phrase: "They are maimed or broken — or they
have gone mad."

**Reasoning:** "Hollowed" did not read clearly as permanent **Sanity** loss.
"Gone mad" states the mental case in plain language without naming the
**Insanity** condition. The em dash separates the verb phrase from the parallel
adjectives *maimed* and *broken*.

---

## 2026-06-28 — Print cheat sheet, rules reflow, and Might/Skill dice vocabulary

**Decision:** Add `for-print/` with the two-sided quick-reference source (`quick-reference.md`), triangle SVG, InDesign handoff notes, and HTML print preview. Reflow canonical rules in `rules/` (prose paragraphs, **battlefield** wording, **Might dice** / **Skill dice** instead of red/blue). Add `scripts/reflow-rules.py` for future reflows. Sync builder feat strings and `app/rules-updates.md`. Remove **Overcharge** from the **Primer Roll** in `rules/equipment.md` to match the Casting Roll. Fix merged **Apply Wounds** bullets in `rules/core-rules.md`. Update style guide, design tenets, overview, and todo (morale complete). Restore **Ideas** entries in the decision log.

**Reasoning:** Players need a compact mid-battle handout separate from fighter cards; print assets belong in `for-print/`. Stat-named dice and battlefield terms read clearer in prose and match how players choose physical dice colors. Reflow keeps Markdown safe for wiki and print pipelines. Dropping **Overcharge** from firearms aligns primer and casting rolls.

---

## 2026-06-27 — Core rules reading pass cleanup

**Decision:** Remove the redundant **Getting Started** section from Core Rules.
Update **What You Need to Play** so **Out of Action** no longer requires a
counter and players are prompted for condition markers, body markers, and
**Overwatch tokens**. Move the broad Strike Pool explanation above **Battle
Setup**. Move the ancestry framing paragraph to the first baseline ancestry
table and remove example-ancestry columns from the repeated tables. Replace the
reduced-stat descriptor "insane" with "hollowed" so it does not collide with
the **Insanity** condition. Update the rules-site outline to remove the deleted
anchor and place **Strike Pool** under **Stats**.

**Reasoning:** The opening rules should teach only the components and concepts
players need before setup. **Out of Action** fighters leave the board, while
state-changing conditions and tokens need visible markers. Ancestry examples
read better as framing prose than repeated table data, and the Strike Pool
primer belongs with stats before the first battle procedure.

---

## 2026-06-27 — Spell out stats in prose

**Decision:** Update the style guide and canonical rules so stat abbreviations are reserved for tables. In prose, write full bold stat names such as **Skill**, **Might**, **Ranged Combat**, and **Will**. Stat checks use the article form “a **Skill** check” rather than “one **Skill** check.”

**Reasoning:** Full stat names make rules text easier to read in sentences while preserving compact table profiles. The article change keeps checks from reading like a counted resource and makes repeated stat-check language smoother.

---

## 2026-06-27 — Full-stat defense pools

**Decision:** Rework Step 4 of the **Attack Sequence** so the defender rolls red defense dice equal to their **Mt** and blue defense dice equal to their **Sk**, then adds bonus defense dice from cover, **Brace**, spells, feats, or scenario rules. Remove the attacker-vs-defender **Mt/Sk** comparison from defense pool construction. Armor and shields still convert failed defense dice into successes after the defense roll.

**Reasoning:** Equal-stat defenders were often rolling only **1 red + 1 blue** against common 5- to 8-die Strike Pools, which made defense feel too thin and pushed ordinary attacks toward one-roll removals. Full-stat defense keeps attacks dangerous because weapons still add Strike Pool dice and critical hits still matter, but it gives every fighter a meaningful defensive pool tied to their own body and reflexes.

---

## 2026-06-25 — Summoning rules, Infernal spells, and rules site routing

**Decision:** Add shared **Summoning** rules (**Summoning Crystals**, **Summon (*value*)**, **Binding**, **body tokens**). Write **Summon Daemon**, **Summon Skeleton**, **Raise Dead**, **Summon Bats**, **Stinging Swarm**, and related tradition procedures. Add **Swarm** keyword and **Rat Swarm** companion profile. Complete Infernal spell list: **Possession**, **Hellmouth**, **Searing Gaze**, and **Nightmare Visage** (friendly fighter within **12"** projects **Fear (6")**; end-of-round caster **Sa check** sustains). Fix **Shield of Faith** to **Wi 10+** and remove erroneous **Fear (6")**. Rename **Summon Swarm** → **Stinging Swarm**; replace **Predator's Grace** with **Summon Bats**. Republish rules wiki at site root with assets under `/wiki/`; move retinue builder to `/retinue-builder/`; gitignore generated HTML. Sync builder spell and Tradition data.

**Reasoning:** Summoning needs one shared procedure before more bind profiles land. Body tokens unify necromancy corpse economy. Infernal domain gains playable fear, terrain, and control spells. Shield of Faith is a defense buff, not a fear source. Root-level rules URLs simplify sharing; separating builder from wiki avoids route collision.

---

## 2026-06-25 — Daemon profiles, Summon keyword, and hit-stat rules pass

**Decision:** Write **Imp**, **Hellion**, and **Mauler** daemon profiles for
**Summon Daemon**; add valued **Summon (-)** and **Large** keywords; set
**Hellfire** as the Infernal domain attack spell. Pass **+CC** / **+RC** hit
modifiers through rules and builder text (replacing generic “roll to hit”
wording). Clarify **Overwatch** token spend on skip activation, initiative
**activation count**, template markers, and **Primary weapon**. Rename roster
**Sphere of Influence** gear **Relic** → **Icon** to distinguish scenario
**Relics**. Move open **Ideas** checklist into `todo.md`. Sync builder spell,
Tradition, and equipment data.

**Reasoning:** Daemons need playable summon profiles before binding procedure
work. **Summon (*value*)** separates short-lived conjures from bindable
**Summon (-)** fighters. **Large** blocks **Hide** for bulky daemons without
one-off exceptions. Explicit **Hit** stat modifiers keep CC/RC checks consistent
across feats, gear, spells, and psychology. Icon naming avoids collision with
campaign salvage **Relics**.

---

**Decision:** Move `intro.md` to `rules/intro.md` and `campaign/campaign.md` to
`rules/campaign.md`. Update wiki build paths, internal links, repo docs, and
sidebar outlines (Equipment and Campaign). Remove the duplicate weapon-slot table
from `rules/equipment.md` — rename **Roster building** to **Crown costs**; slot
limits stay in retinue building. Sync Human **Caster** and **Vampire** advancement
notes in builder data.

**Reasoning:** One canonical `rules/` tree simplifies publishing, agent routing,
and link maintenance. Equipment profiles belong with Crown costs; roster slot
rules stay in retinue building.

---

## 2026-06-24 — Ten-battle campaign XP and advancement scale

**Decision:** Campaigns run **10 battles**. Advancement is **Feat** (**3 XP**) and
**Stat** (**8 XP**) only — remove **Keyword Advancement**. XP earns split into
**battle** (+1 survived, +1 direct enemy **Out of Action**, +2 enemy **Leader**
**Out of Action**), **scenario** (per-fighter awards as written — no retinue-wide
XP), and **post-game** (**Hardy**, **Miraculous**, and named Survival Roll
bonuses). Direct-action rule excludes indirect removals (e.g. **The Void**).
**Vampire** surcharge unchanged at **+2 XP** (**Feat** **5**, **Stat** **10**).

**Reasoning:** Ten battles needs a tighter earn/spend curve than Last Days–style
2/5 costs with retinue-wide Relic XP. Feats should land after one strong game;
stats stay scarce. Keywords remain roster identity, not a spend track.

---

## 2026-06-24 — Retinue Structure and Inline Profiles

**Decision:** Restructure `rules/retinue.md` for clearer rulebook navigation:
move **Keywords** into **Building a Retinue**, rename **Domain × Archetype** to
**Domains**, inline **Zombie**, **Skeleton**, and **Swarm** profiles at the
rules that summon them, and retire the **Shared Profiles** appendix. Move the
**Feat Advancement Table** placeholder to `campaign/campaign.md` and cross-link
from retinue. Align the **Cast** action and **Casting Roll** boxout in
`rules/core-rules.md` with retinue magic text; drop the **Overcharge** row from
the Casting Roll table. Expand the wiki **Retinues** outline in
`app/scripts/rules-lib.mjs` to match the new chapter structure.

**Reasoning:** Players should find keywords and summoned profiles where those
rules are used, not in a distant appendix. Campaign advancement tables belong
with campaign procedures. Matching Cast and Casting Roll text across core rules
and retinue keeps the shared sub-routine identical at the table, and a detailed
Retinues nav outline makes the generated wiki usable as a rulebook index.

## 2026-06-24 — Clean Rules Page URLs

**Decision:** Move the generated static rules pages to clean directory-style
URLs: `/rules/`, `/rules/core-rules/`, `/rules/retinue/`, `/rules/equipment/`,
and `/rules/campaign/`. Keep legacy flat `.html` entry points as redirects or
compatibility pages. Flatten the generated sidebar so **Intro**, **Core Rules**,
and **Retinues** appear at the top level instead of under a redundant
**Noctvale** wrapper. Update app chrome, generated Markdown links, active-nav
matching, host rewrite rules, and Vite dev routing so the clean URLs resolve to
the static rules pages instead of falling through to the retinue builder.

**Reasoning:** The rules wiki should read like a stable rulebook section, not a
collection of implementation filenames. Directory-style URLs make anchors such
as `/rules/#what-is-noctvale` and `/rules/core-rules/#combat` easier to share,
while compatibility redirects keep old links usable. Removing the redundant
top-level nav wrapper reduces one unnecessary click in the rules index, and
aligning development and hosted routing prevents clean rules links from opening
the builder by mistake.

## 2026-06-23 — Outline-Driven Rules Navigation

**Decision:** Change the generated rules sidebar from automatic heading
mirroring to an explicit nested rules outline. The outline currently exposes
**Intro**, **Core Rules**, and **Retinues**, with **Core Rules** nested according
to the approved reader flow. Keep literary-outline letters and numerals out of
the visible nav labels while preserving their hierarchy. Validate article IDs
and anchors during the rules build so missing links fail fast.

**Reasoning:** The rules pages need navigation that reflects the intended
rulebook structure, not every Markdown heading in source order. An explicit
outline gives the page split/refactor a stable source for future clean URLs,
while anchor validation keeps the nav synchronized with the live Markdown.

## 2026-06-23 — Core Rules Outline Reorganization

**Decision:** Reorganize the opening rulebook structure around a literary
outline: **Intro**, **Core Rules**, and later **Retinues**. Within **Core
Rules**, move existing material into the new reader flow: **What You Need to
Play**, **Getting Started**, **Stats**, **Battle Setup**, **Activation**,
**Actions**, **Combat**, and **Conditions**. Keep only battlefield terrain setup
and **Difficult Terrain** under **Battle Setup**; keep targeting, line of sight,
cover, friendly fire, clustered enemies, and range under **Combat**. Rename
`intro.md`'s backstory heading to **The Backstory** and update internal routing
references for the moved anchors.

**Reasoning:** The rulebook needs a clearer top-level reading order before the
rules pages are split into smaller generated pages. Organizing the current text
around the intended outline makes the future navigation model easier to build
without changing the underlying mechanics, and keeping targeting rules in
**Combat** preserves their point-of-use context for attacks.

## 2026-06-23 — Explicit Sanity Projection Ranges

**Decision:** Remove the default **Fear**, **Panic**, and **Insanity** trigger
range. Rules that project a Sanity effect must print their own range or trigger.
Move projection-notation guidance to `background-notes.md`. Remove the rule that
a passed Sanity test grants immunity to that source for the rest of the game,
and remove the repeated fail-loop procedure. Rewrite **Fear** as a distance lock:
measure from the active fighter to the source, and the fighter cannot move or
end closer than that measured distance. Rewrite **Panic** to include all effects
of **Fear** plus a required full movement directly away from the source. Update
**Hellknights**, **Sepulchers**, **Ironbound**, and **Shield of Faith** to project
**Fear (6")** explicitly.

**Reasoning:** Sanity effects should not inherit hidden range from a core
default. Printing the range on each source keeps retinue abilities and spells
self-contained and makes future exceptions easier to read at the table. Keeping
notation guidance internal leaves the player-facing Sanity section focused on
what to do when a test is failed, and removing source immunity keeps ongoing
Sanity pressure tied to the effect text itself instead of a separate repeat-test
subsystem.

## 2026-06-23 — Falling Strike Pool

**Decision:** Replace the **Falling** avoidance check and flat Wound roll with a
height-based fall Strike Pool. For every full **2"** fallen, the fall adds **2
red dice**; those dice attack at **CC 4+**, and the fallen fighter defends as
normal. Update **Acrobat** so a passed check skips **Falling** entirely.

**Reasoning:** **Falling** is a consequence after another failed movement or
rule, not a second chance to avoid that consequence. Resolving the fall through
the existing Strike Pool and defense framework keeps the rule fast, lets armor
and defense matter naturally, and scales danger with height without adding a
separate mini-system.

## 2026-06-23 — GitHub Pages app deployment

**Decision:** Add a GitHub Actions workflow that builds the React/Vite app from
`app/` on pushes to `main` and publishes `app/dist` to the `gh-pages` branch.
Include `noctvalegame.com` as the Pages custom domain and a `.nojekyll` marker
in the built public assets.

**Reasoning:** Automatic GitHub Pages deployment keeps the playtest app on a
minimal free static-hosting path and removes the manual host-upload step for
normal app updates. Keeping the domain marker in `app/public/` ensures the
custom domain survives branch deployments.

## 2026-06-23 — Spell Mishaps and Blinded

**Decision:** Add **Blinded** as a condition: a **Blinded** fighter cannot make
**Melee** or **Ranged** attacks, and if no duration is given the condition lasts
until the end of that fighter's next activation. Set **Holy Light**'s Mishap to
make the caster **Blinded**. Move the magic-affliction Domain association table
out of player-facing rules and into `background-notes.md`. Remove the placeholder
Mishap from **Shield of Faith**; it has no Mishap. Set **Unwavering Resolve**'s
Mishap to make the caster suffer **Panic** until the end of their next
activation. Remove the placeholder Mishap from **Arcane Shield**; it has no
Mishap. Set **Telekinesis**'s Mishap so the opponent chooses whether the target
moves toward or away from the caster. Set **Displacement**'s Mishap to scatter
the target 6" in a random direction. Set **Slow**, **Venom**, **Feral Form**,
**Entangle**, and **Wither** Mishaps; remove the placeholder Mishap from **Dread
Chorus**. Set first-pass ranges for **Venom**, **Feral Form**, and **Wither**.
Set **Leech** to a 3 Mt / 3 Sk touch attack.

**Reasoning:** **Holy Light** is a reveal spell, so its backlash should punish
the caster's sight and offensive reach rather than deal Wounds. The condition
creates a reusable, clear penalty for future sight-based effects while keeping
the Mishap fast to resolve at the table. The Domain association table is design
context, not a rule players need while resolving spells.

## 2026-06-23 — Named stat checks and friendly fire targeting

**Decision:** Define stat checks once in `rules/core-rules.md`, then use named
checks such as **Sk check**, **Mt check**, **Wi check**, **Sa check**, **CC
check**, and **RC check** throughout player-facing rules and rulebook guidance.
Add a **Friendly fire** targeting rule for **Ranged** attacks against enemies
within engagement range of friendly fighters, while preserving the firearm and
damage-spell line-of-fire miss rule.

**Reasoning:** Named checks keep repeated rules text shorter without changing
the underlying math: roll **1d6**, add the named stat, succeed on **8+**, with
natural **1** and **6** handling already defined in the core rule. Separating
close-combat friendly fire from the line-of-fire miss rule makes ranged risk
easier to find and gives Noctvale clearer table procedure when fighters crowd
the same melee.

## 2026-06-22 — Ancestry paragraph placement

**Decision:** Keep the broad ancestry-profile introduction before the first
ancestry table only. Later Archetype sections repeat the ancestry profile table
with only the short setup instruction.

**Reasoning:** The introduction explains the setting premise and miniature
freedom once, then the repeated Archetype tables stay focused on roster
building. This preserves the flexible ancestry framing without making each
Archetype section feel padded or repetitive.

## 2026-06-22 — Overwatch tokens expire

**Decision:** Clarify that all unspent **Overwatch tokens** are removed at the
end of each round.

**Reasoning:** **Overwatch tokens** are a current-round underdog tool, not a
banked initiative currency. Expiring unspent tokens keeps initiative tied to
activation count, prevents hoarding, and keeps the end-of-round procedure easy
to resolve at the table.

## 2026-06-22 — Ancestry profile descriptors

**Decision:** Replace the concrete Human, Elf, and Dwarf ancestry table rows
with four reusable ancestry profiles: **Steady**, **Keen**, **Stout**, and
**Stunty**. **Steady** represents Humans, Half-Elves, and other grounded folk.
**Keen** represents Elves and other sharp, graceful lineages. **Stout**
represents Dwarves, Orcs, and other powerful frames. **Stunty** represents
Halflings, Goblins, Gnomes, and other short, quick folk. The first-pass
**Stunty** profile is **M 6"**, **Mt 2**, **Sk 4**, **W 2**, and **-10
Crowns**.

**Reasoning:** The profile descriptors keep Noctvale open to diverse miniatures
and mixed ancestry concepts without turning ancestry into a large subsystem.
Players can still put recognizable peoples on the table, but the rules now ask
which compact body profile best represents the fighter instead of binding a stat
line to one ancestry name. This preserves roster clarity while widening
modeling freedom.

## 2026-06-22 — Spell block format and Infernal updates

**Decision:** Reformat all Domain spell lists in `rules/retinue.md` from tables
into named spell blocks. Each block uses a combined **Casting:** line
(stat + difficulty), **Range:**, and **Attack:** only when the spell resolves
through the **Attack Sequence**. Spells with no Mishap omit the Mishap line
entirely. Update the style guide to make spell blocks the standard rulebook
format. Keep the active spell-profile changes in the same pass: standard attack
spells without Mishaps, **Leech** without a Mishap, **Summon Daemon** with its
failed-summon Mishap, and **The Void** as a defined Infernal spell.

**Reasoning:** The spell tables had become too wide and dense for actual
rulebook use, especially once casting stat, hit stat, effect text, and Mishap
text all lived in the same row. Spell blocks keep lookup data at the top while
letting effects read as complete player-facing rules. Omitting absent Mishaps is
clearer than printing a null value, and the Infernal updates reduce the number
of visible placeholders before playtesting.

## 2026-06-21 — Blood spell profile cleanup

**Decision:** Lock Blood spell ranges and Mishaps for **Bleed**, **Blood Frenzy**,
**Predator's Grace**, **Feast of Excess**, and **Nightfall**. **Leech** becomes
a Touch attack using **CC** instead of a ranged attack using **RC**. **Nightfall**
now targets the caster with **Self** range instead of targeting a friendly
fighter.

**Reasoning:** Blood magic should read as intimate, predatory, and self-risking
at the table. Short ranges and self-focused shadow play push the Domain toward
close engagement, while Mishaps now mirror the spell's appetite: blood buffs
collapse into injury, exhaustion, or exposure instead of remaining generic TBDs.

## 2026-06-21 — Domain feat layout and canonical rules copyedit

**Decision:** Reorganize **Domain Feats** in `rules/retinue.md` so every feat
appears under its **Domain** heading with full duplicated text — no shared
multi-domain block at the top. Restore the **Spell selection** role summary
(**Leader**/**Theurge** **2**, **Adept** **1**). Run a spelling, grammar, and
terminology pass across `rules/core-rules.md`, `rules/retinue.md`,
`rules/equipment.md`, and `campaign/campaign.md`: **eligible**, **Role** not
**Class**, **ancestry premium** not *species*, consistent stat-check phrasing,
**Panic**/**Fear** activation wording, and link fixes.

**Reasoning:** Players look up feats by Domain during roster building; a separate
shared list with domain tags was easy to misread. A single editorial pass keeps
canonical rules aligned with the style guide before the next rules build and
playtest push.

## 2026-06-21 — Spell Casting stat and Hit columns

**Decision:** Add **Casting stat** and **Hit** columns to every domain spell table in
`rules/retinue.md`. **Casting stat** is **Wi** for Light, Arcane, and Nature;
**Sa** for Infernal, Necromancy, and Blood. **Hit** is **RC** for most damage
spells, **CC** for engagement-range damage (blasts centered on the caster), and
**—** when the spell does not deal damage through the **Attack Sequence**.
Update the **Casting Roll** boxout to roll **2d6 + the spell's Casting stat**.
Sync `castingStat` and `hit` on every builder spell entry.

**Reasoning:** Casting and damage resolution should live in the spell profile,
not in player memory. Splitting **Wi** and **Sa** by domain keeps mystic and
natural magic distinct at the table. **CC** for caster-centered blasts matches
engagement-range gunpowder without making every template spell a melee attack.

## 2026-06-21 — Firearms domain feat and flat gunpowder list

**Decision:** Remove **Basic** and **Refined** firearm tiers and Hunters-only
refined access. Gunpowder is one purchase and equip list for any retinue where
every fighter has **Mortal**. Move **Firearms** off the **Proficiency** menu
and onto **Domain Feats** *(Mortal)*. Individual fighters need the **Firearms**
domain feat to equip firearms and bombs; **Tracker** built-in choice grants
**Archery** proficiency or **Firearms** domain feat. Remove archetype
`firearmAccess` / `firearmTier` from builder enforcement.

**Reasoning:** Tiered gunpowder duplicated the domain keyword without adding
identity — **Mortal** already gates retinue purchase. A domain feat keeps
gunpowder exclusive to fighters who invest in it while letting any Mortal
retinue buy the full list once the retinue qualifies.

## 2026-06-21 — Retinue slim-down and background reference split

**Decision:** Continue the campaign-first pass on `rules/retinue.md`: trim duplicate
summary tables and checklist prose; keep per-**Archetype** chapters as the
player-facing template; move the domain keyword table, feat design notes, and
named faction preset table to `background-notes.md`; move weapon-slot and
proficiency intro to `rules/equipment.md`; consolidate **Magic** under one hub
with domain spell lists inline. **Retinue Rating** in `campaign/campaign.md`
now includes campaign advancements, not just recruitment and gear. Rename roster
**Species** to **Ancestry** in rules and builder; use **role** instead of
**class** for Leader / Elite / Specialist / Rank in style guidance.

**Reasoning:** Players build from Archetype chapters during campaign play; global
summary tables drifted from those chapters and duplicated enforcement the builder
already applies. Internal reference tables belong in background notes so the
rulebook stays procedure-first. Rating should reflect roster power after
advancements so matchmaking stays honest.

## 2026-06-21 — Ancestry terminology and roster identity

**Decision:** Rename the recruitment baseline layer from **Species** to
**Ancestry** in the rulebook and builder. Keep the concrete Human, Elf, and
Dwarf ancestry profiles and their current costs instead of replacing them with
abstract Build labels such as lithe, average, and stocky.

**Reasoning:** Ancestry keeps the fantasy signal players recognize at
recruitment while avoiding the colder, more generic feel of purely abstract body
types. Noctvale's main roster identity should remain **Archetype**,
**Tradition**, **Domain**, equipment, feats, and campaign scars; ancestry stays
a compact baseline profile and premium. Fully abstract Builds may improve
miniature freedom, but they risk giving agency at the wrong layer and making the
game feel more like a toolkit than a setting.

## 2026-06-21 — App-visible rules text cleanup

**Decision:** Update current-facing repository docs to describe static generated
rules pages instead of the removed React rules wiki. Clean app-visible rules
text by changing Staff's **Spell focus** timing to once per **battle**,
normalizing inch notation to `"`, using `≥` for visible stat checks, and
capitalizing **Wound** / **Wounds** where rules text names the damage result or
stat.

**Reasoning:** The app, generated rules pages, and canonical Markdown should use
the same terminology players see in the rulebook. These changes remove stale
implementation language and keep builder-visible reference text aligned with
the style guide without changing roster construction or spell balance.

## 2026-06-21 — Fadhran's Hand underdog rule

**Decision:** Add **Fadhran's Hand** to retinue creation as a blockquote callout
under **Retinue Rating**. Before deployment, the lower-value retinue gains 1
fate die per full **200 Crowns** of Retinue Rating difference, to a maximum of 3
fate dice. Each fate die may be spent once before a roll is resolved to change
one die rolled by either player to a **natural 1** or **natural 6**.

**Reasoning:** The rule turns Retinue Rating differences into a small, memorable
underdog lever without changing roster costs or adding a permanent bonus. Tying
the mechanic to Fadhran makes the compensation feel like Noctvale's world
intervening rather than a generic balance patch.

## 2026-06-18 — Production cache busting for deploys

**Decision:** Add Apache `Cache-Control` headers in `app/public/.htaccess`: HTML
revalidates on each visit; hashed `/assets/*` bundles cache long-term; unhashed
`/rules/*.js` and `/rules/*.css` revalidate. Version rules wiki static assets
with `?v=<git-sha>` at build time. Inject a no-cache meta tag into the React app
and rules HTML entry points.

**Reasoning:** Playtesters were seeing stale builder and rules wiki UI after
deploys because browsers cached `index.html`, `wiki-auth.js`, and `wiki.css`.
Hashed Vite bundles were already safe; the fix targets HTML and unhashed rules
assets so normal refresh picks up new deploys without manual cache clears.

## 2026-06-18 — Prominent playtest feedback button

**Decision:** Move playtest feedback out of the account menu into a fixed circular
FAB in the bottom-right corner (speech-bubble-with-alert icon, no label). Mount
the button and modal through `document.body` so wiki header `backdrop-blur` does
not trap `position: fixed`. Show the FAB in the retinue builder shell and rules
wiki auth chrome for signed-in users. Trim feedback form chrome: remove GitHub
repo callouts and reporter/page-URL footnotes; use the same `max-w-2xl` width for
rules and app forms.

**Reasoning:** Playtest feedback needs to be obvious during rules reading and
builder use. The account menu buried the entry point and the wiki header broke
fixed positioning for in-header mounts. Quieter form copy keeps focus on the
playtester's actual report while submission still attaches email, page URL, and
browser context in the background.

## 2026-06-21 — Keyword-first rules consolidation (completed)

**Decision:** Completed a keyword-first refactor of canonical rules. **Archetype**, **Domain**, **Tradition**, and **Class** are identity keywords on every fighter; **Caster** and similar capability keywords stack on top. Choosing **Tradition** grants every fighter that **Tradition** keyword and the matching **Domain** keyword — Domain is not a separate roster pick.

Rewrote `rules/retinue.md` building front matter (8-step sequence, Archetype summary table, Keywords hub), removed duplicated Tradition blocks from archetype chapters, reordered **Traditions** before **Domains**, and fixed feat count at recruitment (**1** Archetype feat per fighter). Merged Horn scenario, post-game clarifications, and **Counting the Cost** example into `campaign/campaign.md`. Added turn-flow example and activation-count ordering to `rules/core-rules.md`. Deleted fragmented `rules/long-form/` and `rules/playtest/rules.md`. Updated AGENTS, style guide, skills, and todo to point at canonical sources only. **Fluff placeholders** remain until late-stage writing; builder copy deferred to a later pass.

**Reasoning:** One canonical source matches the builder's `resolveFighterKeywords()` model and removes drift from parallel downstream copies. Keyword-first prose explains why Domain spells and domain feats work — fighters have the keywords that unlock them — without treating Domain as an independent build axis.

## 2026-06-21 — Retire `rules/_shared-snippets.md`

**Decision:** Remove `rules/_shared-snippets.md`. Shared sub-routine boxouts (**Attack Sequence**, **Apply Wounds**, **Casting Roll**, **Primer Roll**) are maintained **inline in canonical rules** and repeated verbatim where needed. When editing a sub-routine, update every copy — grep for `> ### Attack Sequence`, `> ### Apply Wounds`, `> ### Casting Roll`, and `> ### Primer Roll`.

**Canonical homes:**

| Sub-routine | Primary source | Also repeated in |
|---|---|---|
| **Attack Sequence** | `rules/core-rules.md` Combat | `rules/retinue.md` Magic |
| **Apply Wounds** | `rules/core-rules.md` Combat | `rules/retinue.md` Magic |
| **Casting Roll** | `rules/retinue.md` Magic | — |
| **Primer Roll** | `rules/equipment.md` Firearms | — |

**Reference copy (keep in sync with player-facing rules):**

### Apply Wounds

> ### Apply Wounds
>
> Each unblocked hit inflicts **1 Wound**.
>
> - When a fighter reaches **0 Wounds**, they become **Downed**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **red dice only** (no blue).

### Attack Sequence

> ### Attack Sequence
>
> **Step 1 — Build the Strike Pool:** Fighter **Mt + Sk** + weapon **+Mt / +Sk**. Firearms and damage spells use a **flat Strike Pool** instead (see weapon or spell profile).
>
> **Step 2 — Roll to hit:** **d6 + CC ≥ 8** (melee) or **d6 + RC ≥ 8** (ranged). **Natural 1** misses. **Natural 6** hits.
>
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), **Hammer** vs **Heavy Armor**, magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked except by a **Heavy Armor** critical success.
>
> **Step 4 — Roll defense:** Base **1 red + 1 blue** + bonus dice from **Mt/Sk** comparison. Roll **d6 + Mt ≥ 8** (red) or **d6 + Sk ≥ 8** (blue). Armor and shields **convert** failed defense dice into successes. *(See [Equipment](equipment.md).)*
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

### Casting Roll

> ### Casting Roll (2d6 + Casting stat)
>
> Roll **2d6 + the spell's Casting stat** (**Wi** or **Sa** — see spell profile) against the spell's **casting difficulty**.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Mishap** — the spell fails and the spell's backlash occurs |
> | **Below difficulty** | The spell fizzles. The action is spent |
> | **Meets or exceeds difficulty** | The spell goes off. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |

### Primer Roll

> ### Primer Roll (2d6 + Sk)
>
> Roll **2d6 + Sk** against the weapon's **primer difficulty** (see weapon profile).
>
> Profile values assume a **Human** shooter (**Sk 3**). At other **Sk**, use **primer difficulty − 3 + Sk**.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Misfire** — see weapon notes |
> | **Below difficulty** | The gun fails to fire. The action is spent |
> | **Meets or exceeds difficulty** | The gun fires. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |

**Reasoning:** The separate snippets file was never wired into the wiki build and duplicated content already living in canonical rules. Folding the reference into the decision log keeps one maintenance checklist without a fifth rules file.

## 2026-06-18 — Fighter keyword system and static rules wiki

**Decision:** Rework roster identity so **Archetype**, **Domain**, **Tradition**, and
**Class** grant permanent **identity keywords** on every fighter at roster
creation. **Caster**, **Vampire**, **Undead**, and **Fearless** remain capability
or creature keywords stacked on top. **Mortal** and **Caster** are mutually
exclusive; firearms require **Mortal**, forbid **Caster**, and refined tier
requires **Hunters**. Migrate firearms, feats, traditions, campaign advancement,
and equipment rules to keyword checks instead of retinue-level Domain strings.
Clarify that **Fear**, **Panic**, and **Insanity** are temporary Sanity states,
not keywords — sources **project** those effects; **Fearless** stays a keyword.

Replace the in-app React rules wiki with static HTML generated from canonical
Markdown (`npm run build:rules` → `public/rules/`). Remove `RulesWiki.jsx` and
`rulesWiki.js`; add `build-rules.mjs`, `rules-lib.mjs`, and `wiki-shell.js`.
Legacy `#rules/...` hashes redirect to `/rules/*.html`. Fix rules wiki layout so
the left nav stays fixed while main content scrolls (`h-screen` shell,
`overflow-y-auto` main column).

Update the retinue builder: `resolveFighterKeywords()` and keyword-based
equipment/proficiency enforcement in `noctvale.js` and `RetinueEditor.jsx`;
keyword pills on fighter cards. Capture keyword reference notes in
`background-notes.md`. Refresh downstream `rules/playtest/`, long-form retinue
chapter, and `app/rules-updates.md`.

**Reasoning:** Keywords give one vocabulary for identity layers and mechanical
gates — equipment, feats, and advancement can say “fighter has **Mortal**”
instead of parallel retinue string checks. Separating temporary Sanity states
from permanent roster tags keeps the keyword list honest on fighter cards. Static
rules pages read from the same canonical Markdown as print sources, avoid SPA
link/anchor drift, and deploy as ordinary HTML beside the builder. A fixed left
nav matches the unified app shell and keeps long rules chapters navigable.

## 2026-06-18 — Unify app shell and fix rules wiki navigation

**Decision:** Give the playtest app a shared fixed left column with the Noctvale
logo on every view; on rules and retinue editor pages, show section navigation in
that column (rules index on the wiki, retinue name/archetype/tradition/budget on
the editor). Collapse the column to a mobile drawer with hamburger and mark.
Move retinue roster cards to the main column only. Align rules wiki sidebar
heading anchors with rendered content, parse bold-wrapped markdown links
correctly, and remove the intro article header divider above the body. Remove
the horizontal rule above **What Is Noctvale?** in `intro.md`.

**Reasoning:** Rules reading and retinue building should feel like one product.
Fixed chrome and matching nav/content layout reduce context switching. Wiki link
and anchor bugs came from SPA-specific slug and scroll logic drifting from
rendered headings; aligning nav extraction with display markdown fixes in-page
and cross-reference links without changing canonical rules sources.

## 2026-06-17 — Record app-visible TBD cleanup priorities

**Decision:** Add a prioritized TODO checklist for the remaining `TBD` items
visible in the app and the rules files imported by the app rules wiki. The list
prioritizes app spell data sync, Infernal spells, **Summoning Crystal** cost,
**Vampire** abilities, Blood spell gaps, remaining spell Mishaps and ranges, the
Infernal affliction name, and Domain composition tables.

**Reasoning:** Playtesters are now using the app as a live rules surface, so
visible placeholders need a clear order of attack. Recording the audit in
`todo.md` keeps the unresolved work discoverable without prematurely choosing
mechanics that still need design decisions.

## 2026-06-17 — Add playtest home page

**Decision:** Add a playtest home page to the app root that tells playtesters
Noctvale is still in development, asks them to send rules and app issues
through the feedback form, thanks them for playing, and links onward to the
rules or retinue builder. Reorder the top view toggle so **Rules** appears
before **Retinues**.

**Reasoning:** Playtesters should know up front that the current build is
unfinished and that feedback belongs in the tracked feedback flow. Putting
**Rules** first matches the current rules-first browsing use case.

## 2026-06-17 — Preserve rules wiki Back navigation

**Decision:** Add hash-backed browser history to the app rules wiki. Rule
article and heading navigation now writes `#rules/article/section` entries,
Back/Forward restores the prior article and section without reloading the app,
and direct `#rules/...` URLs open the Rules view.

**Reasoning:** Players should be able to follow a rule link, then use browser
Back to return to the rule they were reading. Keeping navigation in browser
history makes the rules wiki behave like documentation instead of a single
stateful panel that loses context.

## 2026-06-17 — Fix rules wiki title block and anchors

**Decision:** Update the app rules wiki to render each article's title block as
metadata instead of repeating it in the markdown body, and increase heading
scroll offset so sidebar bookmark jumps land below the sticky app header.

**Reasoning:** `intro.md` uses a title, subtitle, and divider that belong in the
article header when displayed in the app. Re-rendering that block in the article
body makes the introduction feel duplicated and visually heavy. Bookmark jumps
must account for the tall sticky Noctvale header so section headings remain
visible after navigation.

## 2026-06-17 — Split internal background notes from intro

**Decision:** Create `background-notes.md` as a non-player-facing home for
setting notes, faction lists, and game-summary context that should inform lore
work without appearing as polished player-facing prose.

**Reasoning:** `intro.md` should stay focused on public-facing setting text.
Internal facts such as Valecoria's structure, Aurelian's full ceremonial title,
Aelthir's deeper origin clues, faction inventory, and external design
influences are useful for development, but they read as notes rather than
rulebook copy.

## 2026-06-17 — Recast the Nightpack as a sewer-shadow threat

**Decision:** Reframe the Nightpack in `intro.md`, `rules/retinue.md`, and the
downstream retinue chapter as tunnel-haunting packs and knife-bearing raiders
moving through city drains, forgotten underways, and shadows beneath walled
settlements. Remove the old wilderness werebeast origin from their faction
description.

**Reasoning:** The Nightpack should feel like an unseen urban menace: rumors of
things slinking below the streets, knives in the dark, and some hidden force
moving through the sewers while Valecoria collapses above them. This gives the
faction a sharper identity than generic savage shapeshifters.

## 2026-06-17 — Define the Arcane Conclave's tower-city

**Decision:** Reframe the Arcane Conclave in `intro.md`, `rules/retinue.md`,
and the downstream retinue chapter as scholars and mages who withdrew behind
the walls of their tower-city, hoarding magic and forbidden learning while
refugees were left outside its gates.

**Reasoning:** The Conclave should not read as neutral knowledge-seekers during
the fall. Their identity is built around isolation, control of magical
knowledge, and moral failure when Valecoria needed aid.

## 2026-06-17 — Hide Aelthir's impossible origin

**Decision:** Update `intro.md` so Lady Aelthir's written histories place her
in an isolated elven settlement on Valecoria's far marches, not openly from
beyond the mountains. Preserve the deeper truth only as a subtle setting note:
older fragments imply her house remembered lands no living traveler could reach
beyond the mountains. Soften the blood-curse reveal so Aelthir belongs to the
cursed sanguine predators rumored to stalk the wilds beyond the valley, not to
a fully explained bloodline civilization.

**Reasoning:** Noctvale's mountains should remain a hard boundary in the known
world. Aelthir can still carry an impossible origin, but the player-facing
history should present the acceptable court record first and leave the stranger
truth buried deeper in the lore. The blood-cursed should feel like feared rumors
from the world beyond settled Valecoria before they become a named aristocracy
in the fallen realm.

## 2026-06-17 — Builder performance pass

**Decision:** Optimize the playtesting retinue builder for load time and runtime
efficiency. Lazy-load **RetinueEditor**, **RulesWiki**, and **FeedbackForm** with
`React.lazy` / `Suspense` so the library and sign-in path does not ship the full
editor or ~245 KB of rules markdown upfront. Memoize rules-wiki markdown parsing
per article; stabilize fighter-card callbacks with `useCallback` and `memo`; hoist
equipment grouping to module scope; trim Firestore list state to summary fields
(`name`, `archetypeId`, `fighterCount`, `updatedAt`); lazy-load the Firebase
Functions client for feedback submission; add Vite vendor chunks for React, Firebase,
and Lucide.

**Reasoning:** The monorepo builder is the primary playtest surface. Most sessions
start at the retinue library, not the rules wiki or a specific roster. Code
splitting and render memoization cut initial JS payload and avoid re-parsing large
rules articles on every search keystroke or fighter edit, which matters on mobile
and slower connections during playtests.

## 2026-06-17 — Monorepo: retinue builder under app/

**Decision:** Move the playtesting retinue builder from the separate `noctvale-app`
repository into `app/` in this repo. Rules markdown at the repo root is canonical;
the builder imports `intro.md`, `rules/`, and `campaign/` directly (no copies under
`app/src/rules/`). Deploy still builds `app/dist/` and uploads to noctvalegame.com.
Combine the app and rules decision logs into this file; keep `app/rules-updates.md`
for builder data and enforcement changes.

**Reasoning:** One repo removes markdown drift between the rulebook and the in-app
rules wiki, lets a single commit update rules prose and builder enforcement, and
keeps design history in one place while preserving a separate enforcement changelog
for playtesters.

## 2026-06-17 — Builder UX batch

**Decision:** Close picker modals on backdrop click and Escape.

**Reasoning:** Standard dialog dismissal; users should not need the X button only.

**Decision:** Show equipped weapon rule lines on the fighter card at all times — a
**Weapons** section under stats in view and edit mode, plus full profiles in the
Equipment panel summary.

**Reasoning:** Mt/Sk, range, and hands should be readable without opening the
equipment modal.

**Decision:** Skilled Craftsman UI: if weapons are already equipped, the feat modal
lists owned weapons and Mt/Sk choices; if the feat is picked first, assign the
upgrade from weapon rows in the equipment picker.

**Reasoning:** Matches the rule requirement to record weapon and upgrade on the
roster entry; supports either selection order.

**Decision:** Add `app/rules-updates.md` for game-data and enforcement changes,
separate from this decision log for UX-only work.

**Reasoning:** Rules commits need their own changelog with a standing note that
builder purchase limits do not cover exploration-phase gear.

## 2026-06-16 — Retinue builder UX and roster UI

**Decision:** Move all roster editing behind a single **Edit retinue** / **Done**
toggle in the AppShell header (upper right). View mode is read-only; edit mode
enables identity pickers, fighter editing, add/clear roster, and inline species
changes.

**Reasoning:** Per-card and per-section edit pencils scattered the workflow. One
global edit mode matches “edit the whole retinue” intent.

**Decision:** Show retinue-wide rules only in the top identity section: tradition
rules (e.g. Zealots) and beast-mark choice when applicable. Remove them from
every fighter card. Do not list generic domain summary text there.

**Reasoning:** Tradition rules apply to the whole retinue once; repeating them on
each fighter was noise.

**Decision:** Remove the **Saved** label from the editor toolbar. Put **Library**
in the AppShell nav immediately after **Edit retinue**.

**Reasoning:** Save state is implicit; Library belongs with global navigation.

**Decision:** Center **Playtesting Retinue Builder** and the rules-source line in
the AppShell header. Move retinue name to the editor sub-header as a borderless
input with placeholder **New Name** (empty default). Drop the name field from the
identity grid.

**Reasoning:** Title is app-level; name is per-retinue and should stay where the
old title sat without looking like a form field until focused.

**Decision:** Format currency as `c` suffix everywhere in the roster UI: budget
`515c / 1000c`, fighter total cost right-aligned in the card header, species
premiums as `+10c`.

**Reasoning:** Shorter, consistent crown display across budget, fighters, and
species.

**Decision:** Species defaults to Human. Always show a species pill on the
fighter card header (same slot for all species). Total fighter cost stays
right-aligned on that row. In edit mode, the Species panel shows the full line
(e.g. `Elf: Elves cost an additional +10c, but give 4Sk, 4Wi and 7" movement.`).
Picker options use the same sentence format. Human: `Human: Humans are the
baseline stats.`

**Reasoning:** Header tag is scannable; sentences belong in the picker, not
repeated stat fragments on the card.

**Decision:** Flatten panel pickers (Species, feats, etc.): when selected, show
summary content directly in the panel body — no nested “Select …” button wrapper
or amber “Selected” card.

**Reasoning:** Three nested boxes for one choice was unnecessary chrome.

**Decision:** Hide Leader/Captain **type rules** in the recruit modal when Domain
is Mortal (caster option irrelevant). Remove all fighter **type rules** (e.g.
Stalker “At recruitment, add +1 Mt or +1 Sk”) from **Rules on This Fighter**.
Keep feats, built-in proficiencies, and caster spells there.

**Reasoning:** Type lines describe roster construction already handled by pickers
and stat boosts; the rules panel should list in-play effects only.

**Decision:** Leaders and Elites get **2 feats** at roster creation (`getFeatLimit`
role check). Leader is auto-added when archetype and tradition are ready.

**Reasoning:** Matches rules data; avoids manual leader recruitment step.

## 2026-06-17 — Name the High King of Valecoria

**Decision:** Name the pre-fall ruler **Aurelian Eiradan Valecor, First of His
Name, High King of Valecoria, Binder of the Twelve Crowns, Warden of the Dawn
Roads, Lord of the Threefold Concord, and Defender of the Living Realm**.
Update `intro.md` to use **High King** and **Valecoria** consistently in the
backstory where it previously used the placeholder emperor language.

**Reasoning:** Aurelian's name and ceremonial titles establish the lost realm as
an oath-bound, multi-people kingdom rather than a generic empire. The titles
point to Valecoria's twelve former crowns, its sacred road-building project,
and its human, elven, and dwarven concord while making **Defender of the Living
Realm** tragic after the High King's fall into vampirism.

## 2026-06-17 — First-pass spell difficulties

**Decision:** Set first-pass casting difficulties in `rules/retinue.md` for
spells that already have defined effects. Existing anchors remain unchanged:
10+ for easy support or temporary summons, 11+ for baseline attacks and common
utility, 12+ for stronger control or area effects, and 14+ for the rare
Deathbolt-style spike. Add 13+ as an intermediate tier for spells above the
12+ anchors but below Deathbolt: **Fireball** and **Bleed**. **Fireball** uses
5 Mt / 4 Sk, matching a baseline Human fighter wielding a Great Sword.
**Hoarfrost** is 11+ because it controls movement rather than dealing direct
spell hits. **Slow** uses line of sight instead of a fixed range. Leave
effectless Infernal placeholder slots as TBD.

Add `AGENTS.md` guidance that files directly under `rules/` are the canonical
rules source, and that long-form drafts, playtest exports, and compiled copies
are downstream surfaces refreshed from those files.

**Reasoning:** The spell lists need enough numbers to playtest without treating
unfinished ranges, Mishaps, or damage profiles as final. Calibrating against the
existing difficulty ladder keeps Wi meaningful while avoiding a flat 11+ magic
list. Costly summons and spells with target checks can sit lower than their raw
effect might suggest because their other limits do part of the balancing work.
Control spells should not inherit the difficulty of direct area attacks when
they do not also roll an immediate Strike Pool.
Keeping one rules source of truth prevents draft and export surfaces from
becoming competing rules bodies.

## 2026-06-17 — Draft Infernal summoning crystals

**Decision:** Replace normal Daemon recruitment with a draft **Summoning
Crystal** system for **Binders**. **Summoning Crystals** are equipment assigned
to fighters; each fighter may carry up to **2**, and each crystal contributes to
the retinue's **Summoning Pool**. **Summon Daemon** now sacrifices one or two
crystal-bearing fighters, spends **1**, **2**, or **4** crystals, and rolls
**2d6** on a **Summon Result** table for **Imp**, **Hellion**, or **Mauler**
outcomes. The battle cap is **2 Imps**, **2 Hellions**, and **1 Mauler**.
Sacrificed fighters are **Slain**, and fighters created by the spell are removed
after the battle. Add **Summoning Crystal** to equipment with a placeholder cost.

**Reasoning:** Daemons should feel like Infernal bargains rather than ordinary
recruits. Crystals make the power visible on the roster, the sacrifice makes the
cost dramatic and campaign-relevant, and the capped table lets players know what
Daemon fighters to bring while still preserving controlled randomness. Keeping
costs, profiles, difficulty, and Mishap as TBD leaves the draft easy to tune
after the table is visible in play.

## 2026-06-17 — Sync app playtest fixes

**Decision:** Sync the app playtest fix batch into the rules source. Rename the
Folk feat **Raise the Watch** to **Rally to Aid** without changing its rule
text. Treat **Buckler**, **Shield**, and **Tower Shield** as armor-tier gear:
Light, Medium, and Heavy respectively. Shields no longer require **One-Handed**
proficiency and do not use weapon slots. **Magic Armor** now grants Cult fighters
armor and shields up to Heavy tier, and **Hellknights** pay their **+10 Crowns**
surcharge on shields as well as armor.

**Reasoning:** The builder and rulebook should enforce the same roster
permissions. Moving shields out of weapon proficiency keeps **Proficiency**
focused on weapon training while letting armor-tier identity handle defensive
gear: Folk reach Buckler, Hunters reach Shield, Knights reach Tower Shield, and
Cult must take **Magic Armor** to use any armor-tier protection.

## 2026-06-15 — Long-form rulebook drafts

**Decision:** Add `rules/long-form/` as the home for long-form rulebook chapter
drafts, with chapter drafts for **The Turn**, **Retinues**, and **Campaigns**.
The Campaigns chapter now carries the campaign loop, Survival Rolls, economy,
advancement, and named scenarios, including **Loot the Dead**, **The Forest
Creeps Ever Onward**, and **There's a Reason They Have a Horn**. Update the
rulebook style guidance and repo skills to point chapter-writing work at
long-form drafts and to distinguish rulebook voice from reference-table voice.
Update the Phase 6 roadmap note to show the unicorn scenario has a long-form
draft and still needs playtest tuning.

**Reasoning:** Long-form chapter drafts let Noctvale test print-rulebook prose
without disrupting the current live reference files. Keeping scenarios in the
Campaigns chapter matches the table flow players use between battle setup,
scenario rewards, Survival Rolls, and post-game advancement. Renaming the folder
from draft to long-form makes the folder describe the writing mode rather than
the approval state, and the unicorn scenario turns the existing roadmap concept
into a concrete playtest packet while preserving tuning as the next step.

## 2026-06-15 — Additive equipment access

**Decision:** Make roster equipment access explicitly additive. A rule grants
only the options it names; the style guide now records that absence lists and
negative access columns should be avoided unless overriding a broader printed
permission. **Dagger** is now a common weapon any fighter may equip without a
**Proficiency** feat. **One-Handed** is the proficiency that grants shield
access; **Two-Handed** remains weapon access only.

**Reasoning:** Noctvale should read like a table ruleset: if an option is not
granted, it is not available. This keeps roster construction clearer, prevents
tables from implying extra permissions through "No" columns, and preserves the
identity of weapon choices. **Dagger** functions as a baseline sidearm rather
than a feat-gated specialty, while shields stay tied to dedicated one-handed
fighting instead of heavy weapons.

## 2026-06-11 — Optional Cult Adept casters

**Decision:** Make **Caster** optional for **Cult Adepts** at recruitment. Cult
may field **0–2 Adepts**, and each Adept may take **Caster** instead of being
required to. A **Theurge** still has **Caster**, **Acolytes** still do not start
with **Caster**, and Cult remains capped at **3** starting Casters.

**Reasoning:** **Adept** is the Cult Specialist slot, not a mandatory caster
state. Allowing non-caster Adepts gives Cult rosters a meaningful Specialist
choice while preserving the existing upper limit on magical density.

## 2026-06-11 — Retinue build flow

**Decision:** Update the Retinue chapter's opening build flow so players choose
an **Archetype** and one **Tradition**, with the **Tradition** setting the
**Domain**. Add **Choose Your Tradition** as its own early step, remove the
implied verification step from the broad flow, and make the final roster step
choose feats before buying and assigning equipment.

**Reasoning:** The broad retinue chapter should teach the order players need at
the table without repeating checklist material. **Tradition** is a required
identity choice, and feats must come before equipment because weapon
**Proficiency** determines what a fighter can carry.

## 2026-06-11 — Remove print-production material

**Decision:** Remove print-production and InDesign/Pandoc material from the
repository. Delete the export helper files, remove the publishing section from
`README.md`, remove print-production ignore rules from `.gitignore`, and remove
the printable card-template TODO. The repository should remain focused on rules,
setting, campaign, and design source text.

**Reasoning:** Print layout and production workflow are not part of the active
Noctvale rules repository. Keeping those topics out of the repo prevents the
rules source from accumulating production-specific tools, assumptions, and
documentation.

## 2026-06-11 — Round structure rulebook voice

**Decision:** Rewrite the Core Rules round overview and turn structure from
note-style shorthand into rulebook prose. The Start of Round section now states
initiative and **Overwatch token** rules in full sentences, the activation
section defines who can be chosen without contradicting **Stunned** recovery
timing, and the End of Round section uses direct rules language instead of
checklist fragments. Update the style guide to say “write rules, not notes.”

**Reasoning:** Noctvale is moving from design notes into rulebook text. The
rules need to read as instructions a player can follow without decoding
designer shorthand. Keeping the broad round structure clear also prevents
mechanical conflicts between activation count, **Overwatch tokens**, and
fighters who recover from **Stunned** during a round.

## 2026-06-11 — Stunned recovery activation timing

**Decision:** A **Stunned** fighter cannot activate while **Stunned** and does
not count toward **activation count**, but recovery during the round can bring
them back into the activation flow. If a **Stunned** fighter becomes **Active**
before their player has finished activating fighters, they may activate later
that round with **1 action**. If they become **Downed**, they may activate later
that round, but can only use that activation to **Recover**. Initiative and
**Overwatch tokens** are not recalculated.

**Reasoning:** Early recovery should be worth doing. If helping a **Stunned**
fighter only improved their target state without giving any chance to act, the
optimal play would be to leave them until late in the round. This rule rewards
timely **Help** or healing while keeping start-of-round initiative and Overwatch
math stable.

## 2026-06-11 — Condensed stats rules

**Decision:** Condense the opening Stats rules in Core Rules. Replace the
separate Stat Bounds and Stat Rolls sections with one note explaining how stat
checks work: roll **1d6 + stat**, succeed on **8+**, natural **1** fails, and
natural **6** succeeds. State that campaign play cannot raise a stat above **6**,
and that a fighter reduced to stat **1** can no longer perform actions requiring
that stat. Move the red/blue dice explanation from Stats into Combat and shorten
the reroll rule. Remove **Infiltrate** from standard battle setup so Core Rules
stays at the wide-view level, and update the style guide to state that broad
sections should not carry feat, gear, spell, or scenario exceptions.

**Reasoning:** The opening rules should explain only the shared stat procedure.
Attack rolls, casting, Sanity, Strike Pools, and other uses can be explained
where players need them. Keeping small related rules in compact paragraphs makes
the rulebook easier to read at the table and sets the style for future edits.
Core Rules should teach the general battle flow first; deeper sections can zoom
in on exceptions when players are choosing those rules.

## 2026-06-11 — What you need to play setup list

**Decision:** Update Core Rules setup guidance. The required materials list no
longer says players need a legal roster before play. It now asks for miniatures
or tokens on bases, a **3' × 3'** battlefield, at least **10 d6** split into two
clearly separate colors (**5** and **5**), a measuring tool, counters, and
template markers printable from the back of the book.

**Reasoning:** The setup list should describe table materials, not roster
legality. Ten dice is a practical baseline for Noctvale's common Strike Pools:
it covers the 9-die baseline examples while keeping the entry barrier low, and
larger pools can still be rolled in batches. Calling out template markers early
prepares players for blast and area effects.

## 2026-06-10 — Rulebook consolidation into five files

**Decision:** Consolidate the player-facing rulebook into five source files:
`intro.md`, `rules/core-rules.md`, `rules/retinue.md`, `rules/equipment.md`,
and `campaign/campaign.md`. The intro holds setting and lore. Core Rules now
contains what players need, battle setup, action sequence, actions, conditions,
combat, table rules, and Sanity. Retinue now contains roster building,
archetypes, Domains, Traditions, feats, magic, and shared profiles. Equipment
now contains weapons, gear, alchemy, and companions. Campaign now contains
campaign flow, leveling, scenarios, post-game, Survival Rolls, and economy.
Remove the obsolete player-facing shards so the active rulebook source stays in
those five files.

**Reasoning:** The previous modular structure was useful while systems were
forming, but it made the rulebook harder to read and repeated references across
too many files. A five-file structure follows the table-use path more cleanly:
learn the game, build the retinue, equip it, then run campaigns. Keeping alchemy
with gear and keeping archetypes, feats, and magic in the retinue chapter makes
list-building choices easier to scan without jumping between fragments.

## 2026-06-10 — Codex workflow and repo skills

**Decision:** Move Noctvale agent workflow to Codex-native surfaces. `AGENTS.md`
now owns the decision-log workflow, including shell-date lookup, one dated entry
per design commit, Ideas cleanup, and staging `decision-log.md` with the files it
explains. Add repo-scoped Codex skills under `.agents/skills/` for rules work and
decision-log updates. Add a repo-scoped Git publishing skill for explicit
commit/push requests only; it checks the diff, ensures the decision log is
current, stages relevant files, commits, and pushes the current branch. Remove
the obsolete Cursor rule file and ignore local OS / design-application artifacts
that should not appear as accidental untracked changes.

**Reasoning:** The project is moving fully to Codex, so recurring workflow
instructions should live where Codex loads them automatically or through
repo-scoped skills. Keeping the decision-log insertion rules at the top of the
log removes the stale buried anchor and makes the current workflow visible to
agents and humans. Keeping publish behavior in its own opt-in skill preserves
the rule that commits and pushes happen only when requested. Ignoring local
artifacts keeps future sessions focused on intentional design changes.

---

## 2026-06-10 — Vampire keyword and Vampires Tradition

**Decision:** Add **Vampire** creature-type keyword in `rules/retinue-building.md`.
**Vampires** Tradition grants **Vampire** at roster creation to each **Leader**,
**Elite**, and **Specialist** (**+20 Crowns** each). **Rank** fighters do not
gain **Vampire**. **Vampire** counts as **Undead** for silver weapons,
**Radiant Strike**, and similar rules. Tradition base ability: when a **Vampire**
takes an enemy **Out of Action** with **Melee** or **Mercy Kill**, restore **1
Wound** to that fighter. Each **Vampire** also chooses **1** vampire ability from
a list *(TBD — record on roster sheet)*. **Nightfall** targets friendly fighters
with **Vampire**. Fighters with **Vampire** pay **2 XP** more than the normal
cost to buy post-game advancement (**Feat** **4**, **Keyword** **4**, **Stat**
**7**); surcharge only — does not modify **2d6** advancement results.

**Reasoning:** True vampires are **Leader**/**Elite**/**Specialist** nobility;
**Rank** servants stay mortal thralls without the keyword or recruitment
surcharge. **Undead** implication matches hunter and holy-magic interactions
without duplicating **Wightlords**-style mindless undead. Feed-on-kill stays the
shared tradition rule; per-fighter ability picks are reserved for a follow-up
list. Slower advancement trades campaign power growth for a strong on-table
predator package.

---

## 2026-06-09 — Nature feats complete; afflictions, terrain, and fear language

**Decision:** Finish **Nature** Domain feats and round out cross-cutting rules.
**Animal Handling** moves to **Universal** feats (off **Nature**, **Mortal**,
**Arcane** Domain lists). **Nature** — remove **Lightning Reflexes** *(now
**Mortal · Light** only)*; add **Sure Footed** (full **M** on **Scramble**) and
**Camouflage** (**Hidden** targets cannot be selected beyond **3"**). **Mortal**
— **Null** (enemy **Casters** cannot **Cast** within **6"**). **Arcane** —
**Helping Hand** (once per round, **Downed**/**Stunned** ally **within 12"**,
move **6"** toward this fighter). Mark all feat lists complete; **Feat
Advancement Table** still TBD.

**Afflictions** in `rules/conditions.md`: **Poisoned** (**−1 Mt**, rest of
battle), **Weakened**, **Enfeebled**, **Bleeding**. **Difficult terrain** —
area terrain requiring **Scramble** at half **M**; no **Move**/**Charge**
through it. **Stat modifier cap** — **±3** per stat from stacked feats,
Traditions, spells, equipment, and afflictions.

**Clarity pass:** **Project Fear** (not "gain Fear") for **Hellknights**,
**Ironbound**, **Sepulchers**, **Shield of Faith**; `sanity.md` source wording.
**Runecasters** Rune-stones reroll **one die**, not the full roll. **Dodge** —
**2d6**, **10+** to negate **Ranged** attacks. Spell and gear references point
at canonical affliction definitions.

**Reasoning:** Nature needed two exclusive feats after **Animal Handling** went
Universal and **Lightning Reflexes** left the list. **Camouflage** tightens the
**Hidden** targeting window without rewriting **Hide**. Afflictions and difficult
terrain unblock playtest and **Sure Footed**; the **±3** cap prevents
runaway buff stacks. **Project Fear** fixes ambiguous Tradition text. Bounded
**Helping Hand** and tougher **Dodge** address review spikes without changing
core identity.

---

## 2026-06-09 — Domain and archetype feat lists; firearms on Ranged

**Decision:** Complete all **seven Domain** feat lists at five entries each and
fill **Cult** and **Folk** **Archetype** lists to five. Add **Universal feats**
(**Line Breaker**, **Blacksmith's Arms**, **Dodge**, **Guard** — one slot still
open). **Firearms** use **Ranged**, not **Cast**; **Brace of Pistols** is
holster equipment (1 slot, 2 **Pistols**); **Gunslinger** / **Deadeye** on
**Mortal** Domain list. Style guide: **Universal feat**, **charge follow-up**
phrasing. **No feat may require another named feat.**

**Domain highlights:** **Heave** *(Nature · Blood · Infernal)* replaces
**Bear's Strength**; **Unstoppable Faith** *(Light)*; **Warded** *(Light ·
Arcane)*; **Arcane** — **Conduit**, **Second Sight**, **Steady Weave**
*(**Caster only**)*; **Necromancy** — **Bind the Dead** *(**Caster only**;
**Summon Skeleton** persists)*, **Bone Ward**, **Death's Chill**; **Infernal**
— **Daemonic Wings**, **Devil's Pact**; **Blood** — **Thrill of Agony**;
shared **Infiltrate**, **Acrobat**, **Animal Handling**, **Lightning Reflexes**,
**Hard to Kill** as listed in `rules/feats.md`.

**Archetype highlights:** **Cult** — **Magic Armor**, **Chant** *(**Fear**
**Sphere of Influence** when **2+** other Cultists **within 1"**)*, **Convoke**
*(**Caster only**)*; **Folk** — **Shoulder to Shoulder**, **Raise the Watch**,
**Skilled Craftsman** *(one weapon **+1 Mt** or **+1 Sk**, swappable between
battles)*.

**Universal:** **Guard** — once per round **Intercept** a hostile **Ranged**
attack or **Cast** targeting a friendly **Leader**, **Elite**, or **Caster**
**within 3"**; redirect to this fighter.

**Reasoning:** Feat lists now support roster identity and campaign advancement
prep ( **Feat Advancement Table** still TBD). Gunpowder on **Ranged** separates
magic from firearms and enables **Dodge** vs **Ranged** only. Cult/Folk feats
express conclave fear, escort armor, mob defense, and guild craftsmanship without
flattening core combat.

---

## 2026-06-09 — Infiltrate, Animal Handling, companions, and Sphere of Influence

**Decision:** Consolidate **Infiltrate** as one shared Domain feat *(Nature · Blood ·
Infernal)* with deployment hooks in `rules/actions.md`. Add **Animal Handling**
*(Nature · Mortal · Arcane)* and **`rules/companions.md`**.

**Companions:** **Handler** / **Companion** roster gear — no retinue slot, no weapon
slots. Co-move on Handler **Move**, **Charge**, **Scramble**, **Climb**, **Jump**,
or **Retreat** (stay in **tether**); **1** extra action after Handler activation.
**Tamed** uses Handler **M**, **Wi**, **Sa**. Wounds: **Out of Action** only — no
**Downed**/**Stunned**. Post-game **Companion Recovery** (**1d6**: **1–4** miss
next battle, **5–6** fine); never **Casualty**/**Doom**. Profiles: **Hound**,
**Hawk**, **Cat**, **Giant Rat**, **Rat Swarm**.

**Sphere of Influence:** Rename **Influence Bubble** → **Sphere of Influence**
(`gear.md`, companions, style guide, economy). Companion bubbles: **Nature** or
**Mortal** Handler **+1 Sa**; **Arcane** **+1 Wi** — Handler within **6"** of
**Hawk** or **Cat**.

**Workflow:** `.cursor/rules/decision-log-before-commit.mdc` — run `date` in shell
before log dates; do not use session metadata.

**Reasoning:** Mordheim/Necromunda-style domain feats and pets without activation
tax. **Sphere of Influence** unifies gear and familiar auras. OOA-only + light
recovery keeps companions on the table. Shell `date` avoids stale heading dates.

---

## 2026-06-08 — Bear's Strength Nature domain feat

**Decision:** Add **Bear's Strength** to the **Nature** Domain feat list in
`rules/feats.md`. The fighter gains **Hurl** — a **1 action** grapple throw
(Necromunda **Hurl** translated): target an engaged enemy, or a **Downed** or
**Stunned** enemy within **1"**; enemy **Sk check** to resist; on failure move
**d3"** and apply wound-state changes (**Active** or **Downed** → **Stunned**);
collision with **terrain** or an **Active** fighter's base stops movement and
deals **1 hit** at **2 Mt / 1 Sk** (second fighter hit also becomes
**Stunned**). After **Charge**, may **Hurl** once without spending an action
instead of **Melee** that activation.

**Reasoning:** Necromunda-style skill that grants a named action rather than a
passive buff. Fits Beastmen / bear-mark fantasy and Noctvale wound states
without permanent stat changes. Collision damage uses a flat Strike Pool and
the standard **Attack Sequence**.

---

## 2026-06-08 — Activation count, archetype chapter trim, Mortal Firearms, Light feats start

**Decision:** Lock **activation count** for initiative and **Overwatch** — count
**Active** and **Downed** fighters only; **Stunned** fighters do not activate and
do not count. Document in `rules/actions.md`, `rules/conditions.md`, style guide,
and `rules/special-rules.md`.

Trim archetype chapters: **Tradition** first (sets **Domain**), inline **Archetype
feats** block, drop redundant Domain × Tradition tables and numbered build steps.
Remove separate **Mortal** Domain **Proficiency** feat — **Firearms** is an extra
option on the Archetype **Proficiency** menu when the retinue is **Mortal** only.
Sync `rules/feats.md`, `rules/gear.md`, `rules/retinue.md`, and
`rules/retinue-building.md`.

Start **Light** Domain feats (Mordheim/Necromunda skill style): **Warded** and
**Absolute Faith** approved. **Domain feat policy:** at most **one Caster-only**
feat per Domain list; **Cult** may exceed that when its Domain list is written.
Light list incomplete (three feats still to design).

**Reasoning:** Stunned skipping activation avoids dead turns and fixes underdog
math. Tradition-first chapters read faster at the table. Mortal gunpowder as a
**Proficiency** menu fork keeps one feat pick system instead of a parallel Domain
feat for a single proficiency. Domain feats should read like campaign skills,
not bespoke subsystems; the two approved Light feats are defensive sanity/magic
bends any fighter can take.

---

## 2026-06-07 — Archetype rulebook chapters and roster creation sync

**Decision:** Add **`rules/archetypes/`** — one Mordheim-style chapter per Archetype
(Knights, Hunters, Folk, Cult) with fluff, Domain × Tradition options, a shared
**Species** table (Cost: — / +10), fighter-type recruit blocks (slot counts in
headings), inline feat lists, and archetype checklists. Trim
**`creating-a-retinue.md`** to budget, archetype picker, species-cost note,
equip, and verify — building detail lives in the archetype chapters.

**Leader profile (all Archetypes):** +1 to **2** different stats at recruitment.
Optional **Caster** on non-**Mortal** Domains — knows **2** Domain spells. No
automatic Wi 4; Wi comes from species + recruitment bonuses.

**Cult:** **Theurge** — required **Caster**, +2 stats, 2 spells. **Adept** —
required **Caster**, +1 stat, 1 spell. **Acolyte** — species baseline only.

**Elite / Specialist / Rank:** unchanged costs (75 / 60 / 40). Elite +1 Mt or
+1 Sk; Specialist +1 stat plus built-in proficiencies (Squire, Tracker,
Militiaman). Sync **`retinue-building.md`**, **`magic.md`**, **`feats.md`**,
**`creating-a-retinue.md`**, and **`campaign/post-game.md`** to match. Remove
drifted creation stat-cap prose and “Caster replaces stat bonus” / auto Wi 4+
wording.

**Reasoning:** Self-contained archetype chapters read like a rulebook warband
list. Species + cost in one table reduces cross-referencing. Leaders earn magic
through recruitment choices and Wi investment, not a flat caster tax. Spell counts
scale by fighter role (2 on Leader/Theurge, 1 on Adept).

---

## 2026-06-07 — Proficiency feats, gear chapter, and roster guide

**Decision:** Fighters gain weapon access through the **Proficiency** feat — the
first entry on each Archetype feat list. Reorganize weapons by proficiency
(**One-Handed**, **Two-Handed**, **Archery**, **Thrown**, **Firearms**) instead
of Basic / Long / Heavy. Merge `rules/weapons.md` and `rules/equipment.md` into
`rules/gear.md`. Add `rules/creating-a-retinue.md` as the step-by-step player
guide; trim duplicate tables from `rules/retinue-building.md`.

**Proficiency:**

- Assign feat picks at roster creation: Leader and Elite **2**, Specialist **1 +
  built-in**, Rank **1**. Each **Proficiency** pick must be a different weapon
  proficiency. Campaign advancement may grant additional feats later.
- Archetype menus: Knights and Hunters — One-Handed, Two-Handed, Archery,
  Thrown; Folk — One-Handed, Archery, Thrown; Cult — One-Handed, Archery.
- **Firearms** is **not** on Archetype lists — it is the **Proficiency** entry
  on the **Mortal** Domain feat list only.
- **Archery** includes bows and crossbows. Shields require One-Handed or
  Two-Handed proficiency and Archetype shield access.
- Specialist built-ins: **Squire** — One-Handed; **Tracker** — Archery or
  Firearms (choose one; Firearms requires Mortal); **Militiaman** — Two-Handed;
  **Adept** — none (**Caster** is the specialty).

**Gear and roster guide:**

- Weapon triangle types (Sword, Axe, Spear, Hammer) stay on individual weapon
  profiles for crits only — not for roster organization.
- Survival Roll **Broken Goods** grants a legal **One-Handed** melee weapon.
- Consolidate Caster, Silver, and influence-equipment wording across roster
  files. **Caster** at creation replaces the class stat bonus — no +25 Crown
  surcharge. Silver and **Silversbane** target **Undead** / **Werebeast**, not
  named factions.

**Reasoning:** Per-fighter weapon specialization makes Rank bodies read on the
table without activation-time proficiency checks. Splitting **Firearms** onto
the Mortal Domain feat list keeps gunpowder on the magic-vs-mortal identity
fork. One-Handed / Two-Handed / Archery / Thrown maps to how players already
build loadouts and avoids forcing Hammer and crossbows into a strict melee
triangle taxonomy. A single **gear** chapter and player walkthrough reduce hunt-
and-peck during list building.

---

## 2026-06-07 — Lock Traditions as retinue-wide special rules

**Decision:** Reframe **Traditions** from future feat lists into one
retinue-wide special rule chosen at roster creation. Remove **Tradition feats**
from feat eligibility; feats now come from Archetype and Domain lists. Named
factions remain lore/example presets only and do not grant exclusive mechanics.

Add special rules for every current Tradition in `rules/retinue.md`:

- **Light:** **Crusaders** support nearby discipline, **Paladins** move toward
  newly Downed friendly fighters, **Penitents** move faster while wounded, and
  **Luminaries** strip **Hidden** from one visible enemy each round.
- **Arcane:** **Spellblades** pay +5 Crowns per fighter for **Arcane** melee
  weapons that convert one failed Strike Pool die into a normal hit;
  **Ritualists** use a deployment-zone ritual circle for stronger casting with
  Mishap risk; **Sorcerers** may buy one extra spell per Caster with Mishap
  wound risk; **Runecasters** may buy Rune-stones that discard for one reroll.
- **Infernal:** Rename Infernal **Ritualists** to **Diabolists**. **Diabolists**
  can wound themselves for temporary **+1 Mt** and **+1 Sa**, then suffer a
  penalty if Downed. **Binders** may recruit Daemons as Rank fighters, with
  Daemon profiles and costs deferred. **Hellknights** pay more for armor but
  gain **Fear** while wearing it. **Damned** non-Casters cost less and suffer a
  Casualty Table penalty.
- **Nature:** Keep **Witches** for Nature only. **Witches** use the hex-bag rule
  to subtract **1** from an enemy stat roll or **casting roll** near a friendly
  Caster once per round. **Grove-keepers** choose a terrain piece that improves
  nearby **Recover** rolls. **Beastmen** choose one beast-mark (**Wolf**, **Rat**,
  **Bear**, or **Serpent**) for the whole retinue. **Hedge-walkers** can deploy
  up to 2 fighters **Hidden** near terrain.
- **Necromancy:** Rename **Morticians** to **Bell-keepers**. **Bell-keepers**
  replace one friendly fighter taken **Out of Action** with a Zombie until the
  end of the battle; the Zombie joins the retinue only if the original fighter
  is **Slain** and the Zombie survives. **Bone-priests** may recruit Skeletons as
  Rank fighters up to the Archetype's normal Rank cap. **Sepulchers** gain
  guardian **Fear** while Downed or Stunned. **Wightlords** pay +20 Crowns per
  fighter for **Undead** and **Fearless**.
- **Blood:** **Vampires** pay +20 Crowns per fighter and heal after taking an
  enemy **Out of Action** with **Melee** or **Mercy Kill**. **Dynasts** begin
  with up to 3 heirloom melee weapons that add **+1** to hit and pass through
  the retinue on death; captured heirlooms add **+10 Crowns** to ransom.
  **Revelers** can suffer a wound for **+2" M** during an activation.
  **Courtiers** start with +100 Crowns but each fighter starts each battle with
  1 fewer Wound, minimum 1.
- **Mortal:** Remove invalid **Cult + Mortal** Tradition options because Cult
  cannot choose Mortal. **Zealots** are Hunters only and gain **+1** to hit
  enemy Casters. **Constables** prevent enemy **Retreat** while engaged.
  **Alchemists** may buy alchemical weapons and consumables without rolling on
  the future **Shadow Market** table. **Ironbound** are Knights only and gain
  **Fear** while within **1"** of another friendly fighter.

Create `rules/profiles.md` as the shared home for special profiles. Move
Skeleton and Swarm profiles out of `rules/magic.md`, add a Zombie profile, and
leave placeholder sections for Animals and Daemons. Zombie unarmed attacks
inflict **Poisoned** in addition to normal wounds.

**Reasoning:** Tradition is the layer that makes a retinue read differently at
creation. A third full feat axis would bloat the rules count beyond the desired
Necromunda/Mordheim skill footprint and delay identity until campaign
advancement. One retinue-wide special rule keeps Tradition distinct from
Archetype feats and Domain feats: Archetype still owns battlefield structure,
Domain still owns magic or Mortal gunpowder, and Tradition now owns inherited
body, practice, status, rite, tools, or culture. The design pass also removed
confusing repeated Tradition names: **Runecasters** replaced Arcane Witches, and
**Diabolists** replaced Infernal Ritualists.

---

## 2026-06-06 — Lock campaign table terminology

**Decision:** Use **table**, not **chart**, in player-facing rules text. Rename
the first post-battle fighter consequence table to the **Casualty Table**.
Rename the severe follow-up table from **Serious Injury Chart** to the
**Doom Table**. Keep **Survival Roll** for the retinue-level post-battle
reward roll.

Update `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` with the locked campaign terms:
**Casualty Table**, **Doom Table**, **Survival Roll**, and **table** instead of
**chart**. Update active campaign/rules references, advancement table headings,
and links to match the new anchors.

**Reasoning:** **Survival Roll** now means a retinue-level salvage/reward roll,
so the old fighter-level Survival wording caused a collision. **Casualty Table**
plainly describes the first Out of Action pass. **Doom Table** fits Noctvale's
tone and covers more than injuries: death, permanent scars, uncanny
consequences, and miraculous recovery.

---

## 2026-06-06 — Replace exploration with Survival Rolls

**Decision:** Replace the old Exploration Phase with **Survival Rolls** in
`campaign/survival-rolls.md`. Any random reward roll uses **2d6**: natural
double 1 resolves the roll's **Mishap** result, natural double 6 resolves its
**Bonus** result, and modifiers change only the total after natural doubles are
checked. Modifiers cannot create result **2** or result **12**.

Scenarios are chosen or rolled first. Each scenario defines its battlefield
location: fixed, random from the Battlefield Location Table, or a smaller
scenario-specific location table. Scenario rewards are static and remain the
strongest reward lane. Survival Rolls are random middle-value rewards. Looting
is the weakest reward lane and happens during the battle.

After scenario rewards, the winning retinue rolls on the battlefield location's
Survival table. The losing retinue rolls on the Generic Survival table. In a
draw, both retinues roll Generic. Update **Looting Buildings** and **Rifling
Their Pockets** to 2d6 random reward rolls. Remove active **Battle Spoils** use
from the post-game sequence. Update **Pathfinder** to interact with Survival
Roll Mishaps instead of old exploration dice.

**Reasoning:** This keeps scenario victory meaningful by making scenario rewards
static and strongest, while Survival Rolls help the losing retinue recover
without pretending both retinues control the same battlefield after the battle.
Location matters because it is the board location defined by the scenario, and
the winner has time to search it. The 2d6 double rule gives all random reward
rolls one consistent language.

---

## 2026-06-06 — Add universal building looting

**Decision:** Add **Looting Buildings** to `campaign/scenarios.md` as a scenario
rule used in every scenario unless the scenario states otherwise. Before
deployment, players agree which terrain pieces are **buildings**. A fighter
inside a building may use the separate **Loot** action to search that building.
Each building can be looted once per battle. Loot is added to post-battle
rewards and cannot be equipped or spent during the battle. **Many Hands** adds
**+1** to the loot roll if 2 or more friendly fighters are inside the same
building when a fighter loots it. A modified result cannot exceed **6**.

Use a squished **1d6** table:

| 1d6 | Find |
|---|---|
| 1 | **Trap** — resolve 2 red hits and 2 blue hits against the fighter. |
| 2–3 | **Basic weapon** — the retinue gains 1 legal Basic weapon after the battle. |
| 4–5 | **15 Crowns** |
| 6 | **Relic** |

Update **The Forest Creeps Ever Onward** to use **Looting Buildings** instead
of placed Relic markers. The retinue that recovers the most Relics through
Looting Buildings wins.

**Reasoning:** The compressed loot table keeps building searches fast and
useful without creating separate carry/drop rules for every find. One search
per building prevents unlimited farming while keeping ruins relevant in every
scenario.

---

## 2026-06-06 — Add Blood for the Rite

**Decision:** Add **Blood for the Rite** as a **Cult** Archetype feat. Once per
battle, before the fighter makes a stat roll or **casting roll**, choose another
friendly fighter within **12"**. That fighter suffers **1 Wound** and the rolling
fighter adds **+1** to the roll. The wound can reduce the chosen fighter to 0
Wounds and cause them to become **Downed**.

**Reasoning:** The feat gives Cult a sacrifice lever without relying on a reroll
or free spell effect. The cost is concrete and can create real wound-state
pressure.

---

## 2026-06-06 — Add Stubborn Lot

**Decision:** Add **Stubborn Lot** as a **Folk** Archetype feat. When the fighter
uses **Help**, a roll of **1** counts as **2** if another friendly fighter is
within **1"** of this fighter or the assisted fighter.

**Reasoning:** The feat expresses Folk as communal and stubborn without
duplicating Hunter field medicine. It improves the worst **Help** result only
when nearby friendly fighters are present.

---

## 2026-06-06 — Add reroll limit

**Decision:** Add a global reroll limit to `rules/core-rules.md`: a die can
never be rerolled more than once. If more than one rule would let a player
reroll the same die, choose one of those rules; the second result stands.

**Reasoning:** Reroll effects such as **Patient Shot** need a global stacking
limit before more feats and special rules add reroll hooks.

---

## 2026-06-06 — Add first Hunter feats

**Decision:** Add **Marked Quarry**, **Patient Shot**, **Field Dressing**, and
**Pathfinder** as **Hunters** Archetype feats.

**Marked Quarry:** At the start of the battle, choose 1 enemy fighter. When the
hunter attacks the chosen fighter, add **1 red die** or **1 blue die** to their
Strike Pool.

**Patient Shot:** When the hunter uses **Aim**, their next **Ranged** attack
this activation may reroll 1 natural 1 in the Strike Pool.

**Field Dressing:** When the hunter uses **Help** on a **Downed** friendly
fighter, add **+1** to the **Help** roll.

**Pathfinder:** During Exploration, if the hunter is a surviving fighter, ignore
1 exploration die result of **1**. That die finds nothing and does not cause a
Mishap.

**Reasoning:** These feats express Hunters through pursuit, field support, and
campaign safety. They bend existing levers: Strike Pool color choice against a
single marked enemy, **Aim**, the **Help** roll, and exploration Mishaps.

---

## 2026-06-06 — Add To Me, Brothers!

**Decision:** Add **To Me, Brothers!** as a **Knights** Archetype feat. Once per
battle, when the fighter uses **Brace**, choose up to 2 friendly fighters within
**12"**. Each chosen fighter may move up to **6"** toward this fighter. A fighter
cannot use this movement to enter engagement range.

**Reasoning:** The feat expresses knightly rallying and formation play without
granting attacks, full actions, to-hit bonuses, or rerolls. Tying the call to
**Brace** makes the knight a defensive anchor, while the engagement restriction
keeps the movement from becoming a hidden **Charge**.

---

## 2026-06-06 — Add Iron Discipline

**Decision:** Add **Iron Discipline** as a **Knights** Archetype feat. The
fighter cannot become **Downed**. When they would become **Downed**, they remain
Active with 0 Wounds instead. While they have 0 Wounds, any unblocked hit pushes
them to **Stunned** as if they were Downed.

**Reasoning:** The feat expresses a disciplined fighter standing tall when they
should collapse, without ignoring later hits or bypassing the **Stunned** and
**Out of Action** states. It bends the wound-state ladder rather than adding a
generic defensive bonus.

---

## 2026-06-06 — Add Vow of Pursuit

**Decision:** Add **Vow of Pursuit** as a **Knights** Archetype feat. When the
fighter attacks an enemy fighter that took a friendly fighter **Out of Action**
this battle, add **2 red dice** to the fighter's Strike Pool.

**Reasoning:** The feat expresses knightly vengeance without granting a broad
to-hit bonus, extra action, or reusable reroll. The trigger is narrow and tied
to a dramatic battle event.

---

## 2026-06-06 — Dice and roll modifier wording

**Decision:** Clarify modifier wording in `NOCTVALE_RULEBOOK_STYLE_GUIDE.md`.
Use **+1 Mt** or **+1 Sk** only when a rule changes a fighter's stat or a weapon
table's **+Mt / +Sk** modifier. When a rule adds dice without changing a stat,
name the dice directly: **add 2 red dice to the Strike Pool**, **add 1 blue die
to the Strike Pool**, or **gain +1 red defense die**. For attack accuracy, use
**add +1 to the roll to hit**.

**Reasoning:** Feats need consistent language before lists expand. Dice added
to a pool, stat changes, and roll modifiers are different mechanical levers and
should read differently at the table.

---

## 2026-06-06 — Armor conversion terminology and tuning

**Decision:** Replace armor/shield **rescue** terminology with **convert** in
active rules. Armor and shields now **convert** failed defense dice into
successful defense dice after the defense roll. This is distinct from Kill
Team-style **retain** language: retaining keeps a die as a success, while
converting changes a failed defense die into a success after the roll.

Tune armor conversion:

| Armor | Conversion |
|---|---|
| **Light Armor** | Convert 2 failed red or blue defense dice into 1 normal success. |
| **Medium Armor** | Convert 1 failed red defense die into 1 normal success. |
| **Heavy Armor** | Convert 1 failed red defense die into 1 normal success **or** convert 2 failed red defense dice into 1 critical success. |

Shields keep their existing conversion quantities, updated to the new wording.

**Reasoning:** The old armor values were too reliable when stacked with
**Brace**, shields, and defensive feats such as **Hold the Line**. The new
Light Armor supports agile fighters by allowing red or blue failures, while
Medium Armor and Heavy Armor remain mostly red-defense protection. Heavy Armor
keeps its special identity as the armor tier that can produce a critical
defense success.

---

## 2026-06-05 — First feat rule and Hold the Line

**Decision:** Add `rules/feats.md` with initial feat rules, feat eligibility,
and **Hold the Line** as the first **Knights** Archetype feat. **Hold the Line**
lets a fighter who uses **Brace** choose another friendly fighter within **1"**;
that fighter gains **+1 red defense die** until the bracing fighter's next
activation. Add a default rule that duplicate copies of the same named feat do
not stack on one fighter at the same time.

**Reasoning:** Feats should express retinue identity by bending existing levers,
not by adding generic power. **Hold the Line** makes Knights better at forming a
defensive wall through **Brace** while preserving the action cost and avoiding
broad permanent bonuses. The non-stacking rule prevents multiple nearby copies
from piling the same feat onto one defender.

---

## 2026-06-05 — Mortal Domain rename

**Decision:** Rename the **None** Domain to **Mortal** in active player-facing
rules and roadmap text.

**Reasoning:** **Mortal** reads as a real retinue identity rather than a blank
or missing choice. It keeps the Domain's role clear: retinues that reject or
lack magic trade Domain spells and the **Caster** keyword for gunpowder,
alchemy-forward play, anti-magic tools, and Fearless-style discipline.

---

## 2026-06-04 — Forest scenario section cleanup

**Decision:** Move the left/right forest-edge reference from **Deployment** to
**The Advancing Forest** in **The Forest Creeps Ever Onward**. Remove the
redundant note that Relics carried by fighters still on the board are lost.

**Reasoning:** The left/right reference is only needed when rolling for the
advancing forest edge. The Relic note was unnecessary because the battle ends
only when all fighters have **Escaped** or been taken **Out of Action**.

---

## 2026-06-04 — Relic placement clarity in forest scenario

**Decision:** In **The Forest Creeps Ever Onward**, players cannot place more
than **1 Relic marker** inside the same terrain piece. Before the battle,
players should agree which terrain pieces count as single terrain pieces.

**Reasoning:** The restriction prevents Relic clustering inside one large
building or ambiguous terrain feature. The pre-battle agreement keeps the rule
usable across handmade, modular, and irregular terrain.

---

## 2026-06-04 — Repeat scenario objectives and collaboration workflow

**Decision:** Do not keep a separate objective module file. Scenario objective
rules such as **Looting** are repeated in the scenario packet that uses them, so
players do not need to chase cross-references during a battle.

Clarify the Noctvale collaboration workflow in `AGENTS.md`: proposal-first
applies when the user is exploring ideas or asking to think through tradeoffs.
Direct correction or implementation language such as "this should be this",
"why didn't you change this?", "make this change", or "approved" is treated as
approval to act after reading the relevant files.

**Reasoning:** Scenario files should contain scenario packets, while reusable
objective rules should appear at point of use. This matches the existing
shared-snippet principle: rules can have a design source, but player-facing
procedures should be repeated where players need them. The workflow
clarification preserves design discussion when the user wants to brainstorm, but
removes friction when the user is directly asking for a known change.

---

## 2026-06-04 — Looting rules and Relic economy

**Decision:** Add **Looting** rules to the forest scenario in
`campaign/scenarios.md`. The scenario places **Relic markers**. A fighter within
**1"** may use **Interact** to pick up a Relic marker. Relics are carried by
the fighter, may be dropped with **Interact**, are dropped if the fighter is
taken **Out of Action**, and are recovered if the fighter **Escapes**. A fighter
may carry **1 Relic**. Carrying a Relic does not reduce movement or actions.
If a fighter carrying a Relic is taken **Out of Action**, that fighter's
controlling player places the Relic marker in base contact before removing the
fighter.

Make **Relics** the sole Wyrdstone-equivalent campaign resource. Relics sell
for Crowns using the restored supply and demand curve from the older
documentation: 1 Relic = 15 Crowns, 2 = 30, 3 = 40, 4 = 55, 5 = 70, 6 = 80,
7 = 95, 8 = 110. Remove Relic Fragments and Fragment nudges from the active
campaign loop.

Update the **Ruins** exploration chart so every successful discovery finds
Relics. Update overview and campaign-loop language so retinues hunt Relics,
sell Relics for Crowns, then spend Crowns to recruit fighters and buy gear.

Add **The Forest Creeps Ever Onward** as a scenario draft. Starting with the
player with initiative, players alternate placing **5 Relic markers** on the
ground floor of terrain pieces while a forest advances from one non-deployment
edge. The forest edge is selected at the end of round 1. The forest then covers
**6"** more of the board at the end of each round, measured from the original
advancing edge: **6"** after round 1, **12"** after round 2, and so on until it
covers the board at the end of round 6. Fighters may **Escape** through any
edge except the advancing forest edge. The retinue that recovers the most
Relics wins.

**Reasoning:** Looting rules keep battle play concrete: pick up Relics, escape
with Relics, sell Relics for Crowns. Repeating the procedure inside each
scenario keeps scenario packets self-contained at the table. The supply and
demand curve restores the intended Mordheim-like economy pressure. Removing
Relic Fragments keeps the campaign resource loop focused: find Relics, sell
Relics, spend Crowns. The advancing forest gives the land a clear mechanical
bite, prevents camping, and creates a push-your-luck choice: search one more
building, fight for dropped Relics, or escape before the forest takes the board.

---

## 2026-06-02 — Move scenarios into campaign folder

**Decision:** Move `scenarios.md` to `campaign/scenarios.md`. Update repository
references and the relative link from **Loot the Dead** to the **Battle Spoils**
table.

**Reasoning:** Scenarios determine battle results and rewards, so they belong
beside exploration, post-game, and economy rules in `campaign/`.

---

## 2026-06-02 — Starter scenario and standard battle set-up

**Decision:** `scenarios.md` now contains **Loot the Dead**, the core starter
scenario. Battles use a **3' × 3'** board with **6"** deployment zones unless a
scenario states otherwise. Players divide their retinues into 3 groups and
alternate deploying one group at a time.

**Initiative:** The player with fewer activations begins with initiative. If
both retinues have the same number of activations, each player rolls **2d6**.
The highest result has initiative; reroll ties. During later rounds, the player
with fewer remaining activations has initiative. The previous initiative holder
retains initiative when activation counts are tied.

**Battle ending:** A battle ends immediately when only one retinue has fighters
remaining on the board. A fighter may use a **Move** action to leave the board
through any edge. That fighter has **Escaped**, cannot return during the battle,
and does not roll on the Survival chart.

**Loot the Dead:** A fighter who takes an enemy **Out of Action** with a
**Melee** action or **Mercy Kill** searches the defeated fighter. Roll **1d6**:
1–2 finds 0 Crowns, 3–4 finds 5 Crowns, and 5–6 finds 10 Crowns. Add any Crowns
already carried by the defeated fighter. A fighter may carry a maximum of 50
Crowns. Ranged attacks, spells, and other effects do not allow a search. The
winner searches the battlefield and rolls once on the **Battle Spoils** table.

**Reasoning:** The scenario teaches the standard set-up and core battle-ending
rules while adding a visible push-your-luck decision: secure a fighter's purse
by escaping or remain on the board to contest victory and the battlefield
search.

---

## 2026-05-31 — Radiant Strike seven-die profile

**Decision:** Changed **Radiant Strike** from 5 Mt to **4 Mt / 3 Sk**. Its +1 Mt bonus against Undead and Daemons remains unchanged.

**Reasoning:** Standard Domain attack spells should target a seven-die baseline, adjusted as needed for their special rules. The mixed pool gives Light a balanced baseline attack while its anti-Undead and anti-Daemon rider still pushes the spell toward Mt against its intended targets.

## 2026-05-29 — Rulebook style guide and rules editorial pass

**Decision:** Added `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` (canonical terminology, formatting, action blocks, shared boxouts, checklist) and `NOCTVALE_DESIGN_TENETS.md`. Added `rules/_shared-snippets.md` as the master copy for verbatim **Attack Sequence**, **Apply Wounds**, **Casting Roll**, and **Primer Roll** boxes, repeated in `combat.md`, `actions.md`, `magic.md`, and `weapons.md`. Applied editorial conventions across active rules and campaign docs: **fighter** not model/unit, **retinue** not warband, **`"`** inches, US spelling, **casting roll** / **primer roll** (not **gate**), **skip activation** (not forgo/forgone), structured action blocks in `actions.md`, **Sequence at a Glance** in `campaign/exploration.md`, Domain **limits** / Tradition **unlock** wording. Removed draft `NOCTVALE_INFERRED_RULEBOOK_STYLE_GUIDE.md` — its adopted patterns live in the canonical style guide only.

**Reasoning:** One style source for writers and agents; shared sub-routines repeated at point of use so players do not hunt cross-refs mid-combat. **Gate** and **forgo** read wrong for Noctvale tone. Inferred guide was a working document; keeping two guides invited drift.

**Supersedes:** Any informal “gate” / “loading gate” / “forgo activation” wording in player-facing rules (historical entries in this log unchanged).

## 2026-05-29 — Arcane rework: Hoarfrost replaces Arcane Barrage

**Decision:** Removed **Arcane Barrage**. Added **Hoarfrost** — placed large blast (18", same reach as Fireball). Persistent ice hazard until the caster's next activation; affects friends and enemies. When a fighter **ends any movement** in the zone: Sk check (d6 + Sk ≥ 8). Pass → slide d6" in movement direction. Fail → scatter die + d6" slide. Natural 1 on the check die → **Downed** at end of slide. Slide stopped by terrain, wall, or another base → 1 Wound. **Mishap:** blast centers on the caster.

**Reasoning:** Arcane Barrage was a third damage spell overlapping Bolt. Hoarfrost pairs with **Fireball** as the control blast (fire = damage, ice = movement hazard) and reuses scatter/slide mechanics from bombs and falling (Sk check, nat 1 always fails per core rules). **Hoarfrost** — the rime word, but readable: white crust ice that looks harmless until you step wrong.

**Supersedes:** Partial intent of 2026-05-29 — Cut Arcane Barrage (open slot now filled).

## 2026-05-29 — Cut Arcane Barrage

**Decision:** Removed **Arcane Barrage** from the Arcane spell list. Arcane now has one open slot among its six non-freebie spells (freebie **Arcane Bolt** unchanged).

**Reasoning:** Arcane carried three damage spells (Bolt, Fireball, Barrage). Barrage overlapped Bolt’s precision-damage role without adding positioning or combo play. Cutting it trims redundant damage and frees a slot for a reworked Arcane identity (e.g. placed terrain blast paired with Fireball). Remaining Arcane damage: **Arcane Bolt** (single-target) and **Fireball** (large blast).

## 2026-05-28 — Retinue Traditions (domain + archetype identity)

**Decision:** Add **Traditions** — one plural label per retinue (e.g. **Witches**, **Beastmen**, **Vampires**), chosen after Archetype + Domain. Each Domain offers four Traditions; each Archetype may pick two of them on that Domain (2×2 grid). **Cross-domain names:** **Witches** (Nature: Cult/Folk; Arcane: Hunters/Folk) and **Ritualists** (Arcane + Infernal: Folk/Cult) — same name, different tradition skills per Domain. Light: **Crusaders** on Knights/Folk, **Paladins** on Hunters/Knights (swapped from an earlier draft). Nature: **Beastmen** not Skinchangers. Blood: all four options are hedonistic noble identity (**Vampires**, **Dynasts**, **Revelers**, **Courtiers**). Arcane Knights/Cult: **Sorcerers**. Necromancy: **Sepulchers**, **Wightlords** (single-word labels). Document in `rules/retinue.md`; building step 1 in `retinue-building.md`. Remove Phase 5a faction-mechanical checklist and open setting-scope / castle-pivot items from `todo.md`.

**Reasoning:** Traditions differentiate retinues that share Archetype + Domain (Inquisition vs Silver Hunt) without a separate “faction mechanics” phase. Shared names reduce vocabulary sprawl and match lore (hedge Witches on Arcane, covens on Nature). Plural names signal whole-retinue identity. Tradition skills deferred to Phase 5b.

---

## 2026-05-28 — Decision log: date + title, not commit hash

**Decision:** Drop **`Commit:`** hash lines. Correlate entries with **`## YYYY-MM-DD — Title`** only — one section per commit; same-day commits use distinct titles. Update workflow and `.cursor/rules/decision-log-before-commit.mdc`. Remove hash-only meta entries.

**Reasoning:** Date is known before commit; no post-commit amend or hash fix-up.

---

## 2026-05-28 — Decision log: one entry per commit

**Decision:** Restructure log to **one section per git commit**. Update `decision-log.md` **before** every commit and stage it with the change. Add `.cursor/rules/decision-log-before-commit.mdc`.

**Reasoning:** Match git history to design rationale without ten micro-entries for one commit.

---

## 2026-05-28 — Weapons taxonomy, hammers, retinue identity doc

**Decision:** Reorganize `rules/weapons.md` by access category. **Melee:** Basic · Long · Heavy · Exotic. **Spear** in **Long**. Add **Mace** (Basic) and **War Hammer** (Heavy) — **Hammer** type outside the triangle; natural 6s crit vs **Heavy Armor** only; no triangle crits when either fighter wields a Hammer (`combat.md` updated).

**Ranged:** **Missile weapons** (all retinues) vs **Gunpowder** (None only). Gunpowder firearms: **Basic** (Musket, Blunderbuss) and **Refined** (Pistol, Long Rifle). **Flintlock** is a keyword on any firearm (−25 Crowns, Single Shot). Hunters + None get both tiers; Knights/Folk + None get Basic only.

Move `factions/factions.md` → **`rules/retinue.md`** (Archetypes, Domains, named presets, lore). Mechanical building stays in `retinue-building.md`. Remove `factions/` folder.

**Reasoning:** Cult can take crossbows; gunpowder stays None-only. Refined labels personal arms vs issue weapons. Flintlock as keyword avoids duplicate stat lines. Retinue doc lives with other roster rules.

---

## 2026-05-28 — Retinue building, post-game charts, campaign economy

**Decision:** Add **`rules/retinue-building.md`** — generic classes (Leader / Elite / Specialist / Rank), Archetype slot caps, **1000 Crown** budget (5 Crown increments), fighter and wargear costs. **Mayor** (Folk Leader), **Theurge** (Cult Leader, replaces Magister), **Tracker** (Hunter Specialist). Knights: no Rank (Knight + Squire only). **Caster** is a keyword (+25 Crowns), not a class.

Add **`campaign/post-game.md`** — chart-driven loop: Battle Spoils, Survival, Serious Injury, XP spend (Skill/Keyword 2 XP, Stat 5 XP, no levels), Stat/Keyword advancement charts, Fragment nudges. Update **`campaign/exploration.md`** with Mishap chart and Ruins discovery. Bump fragment sell base **15 → 20** Crowns in **`campaign/economy.md`**.

**Reference:** Last Days (Osprey 2018) noted in `todo.md` for XP + nudge inspiration — own system, not ported.

**Reasoning:** Constrained points + composition slots define roster identity. Campaign progression is chart-driven with spend-based XP, not level thresholds.

---

## 2026-05-28 — Retinue terminology, intervening fighters, LoS simplified

**Decision:** Adopt **retinue** for the player's list-for-a-fight. **Faction** remains optional named preset (Phoenix Guard, etc.).

**Intervening fighters:** friendlies do not block LoS; move through friendlies allowed. Friendly-in-line-of-fire for firearms/damage spells on miss (1d6 → 1 hits intervening friendly). Clustered enemies: Sk check to retarget when shooting into a mob.

**LoS & cover:** drop percentage bands (see superseded terrain-bands entry below). Binary LoS from shooter's PoV; cover = intervening terrain **>1"** from shooter (+1 blue defense die).

**Reasoning:** Retinue fits gothic post-imperial tone. Wild shots and mob targeting add friction without competitive targeting rules. Simpler LoS adjudication at the table.

---

## 2026-05-28 — Line of sight and cover (terrain bands) — superseded

**Superseded by:** 2026-05-28 — Retinue terminology, intervening fighters, LoS simplified

**Decision:** Terrain-only visibility from firing fighter's PoV. **25%–90%** obscured = cover (+1 blue defense die); **>90%** = no LoS.

**Reasoning:** Percentage bands reduce sliver arguments. Replaced by binary LoS in the entry above.

---

## 2026-05-27 — Bone Circle (Necromancy) — first trap spell

**Decision:** Added Bone Circle as Necromancy's 6th spell, completing the domain. Bone Circle is the game's first **trap spell** — a persistent damage zone that triggers on any fighter that starts their activation in it, ends their activation in it, or moves through it.

**Bone Circle:** Choose a point within 12". Place a 3" blast template. Any fighter in the zone takes a 1 Mt / 3 Sk hit (defense applies normally). Affects friends and enemies. Lasts until the start of the caster's next activation. Mishap: zone centers on the caster.

**Reasoning:** Area denial through persistent damage is a new mechanic — no other spell does this. Distinct from Cursed Ground (immediate debuff zone with -1 M and a one-time Sk check) because Bone Circle triggers repeatedly on movement. Creates tactical decisions: do you walk through and eat the hit, or spend actions going around?

**Necromancy is now complete (freebie + 6):** Deathbolt, Summon Skeleton, Raise Dead, Cursed Ground, Wither, Bone Blast, Bone Circle.

**Open:** Infernal is the last domain with no spells.

---

## 2026-05-26 — Arcane, Nature, and Necromancy spell lists

**Arcane — complete (freebie + 6):**
Arcane is raw magical mastery — precision, control, energy manipulation. Three damage spells (Arcane Bolt, Fireball, Arcane Barrage), three utility/control (Arcane Shield, Telekinesis, Displacement, Slow).

New spells:
- **Fireball** — Large blast, 18". Three outcomes: pass = on target, normal fail = scatters (scatter die + d6"), Mishap (double 1s) = blast centers on caster. Matches existing bomb scatter mechanics.
- **Telekinesis** — Move any fighter 6" directly toward or away from caster. No target check.
- **Displacement** — Teleport friendly fighter 6" in any direction, ignores terrain/engagement.
- **Arcane Barrage** — 3 automatic Sk hits (blue), no Strike Pool roll, no to-hit roll. Guaranteed damage on successful cast, defender rolls defense normally.
- **Slow** — Target enemy loses 1 action on next activation.

**Nature — complete (freebie + 6):**
Nature is the dangerous wild — poison, shadow, beasts, the dark forest. Serves werewolves, skaven, and witches equally.

New spells (Shadowmeld logged separately):
- **Venom** — Target must pass Mt check or suffer Poisoned (-1 Mt, -1 Sk). Body-based resistance, not willpower.
- **Feral Form** — Friendly target gains +2 Mt, +1" M, but cannot use ranged weapons or cast. Primal transformation.
- **Entangle** — Target enemy M reduced to 0, cannot Move/Charge/Climb/Scramble/Jump/Retreat.
- **Summon Swarm** — Place a Swarm within 3", activates immediately with 2 actions then disappears. Low Mt (2), high Sk (6) — many small precise hits. Swarm profile added.
- **Dread Chorus** — All enemies within 8" must pass Sa test or gain Fear of the caster. The howl, the skittering, the chant.

**Necromancy — partial (freebie + 5 of 6, 1 slot TBD):**
Necromancy is dominion over death — the dead are tools, the living wither. Grave Wardens (Cult + Necromancy) are the named faction.

New spells:
- **Raise Dead** — Bring back a friendly OOA fighter within 3" with 1 wound, Undead, Fearless. Activates immediately with 2 actions then goes OOA permanently. Mishap: opponent controls the raised fighter.
- **Cursed Ground** — Large blast within 12". Models in zone suffer -1" M and take a 2 Mt / 2 Sk hit unless they pass a Sk check. Mishap: centers on caster.
- **Wither** — Target enemy suffers -1 Mt, -1 Sk, -1" M. Applies Weakened condition. Heavier debuff than Blood's Enfeeble.
- **Bone Blast** — Blast centered on caster, 1 Mt / 4 Sk hit to all fighters except caster. Bone shrapnel — mostly blue dice. Mirror of Light's Purge the Faithless (self-centered AoE) with inverted dice profile.
- 1 slot remains TBD.

**Open questions:**
- Necromancy still needs 1 more spell.
- Casting difficulties not yet assigned for most new spells across all domains.
- Weakened condition not yet defined in conditions.md.
- Poisoned condition not yet defined in conditions.md.
- Many Mishaps still TBD.

---

## 2026-05-26 — Shadowmeld (Nature) and Nightfall (Blood) spells

**Decision:** Two thematically paired darkness spells — one for Nature, one for Blood. Same concept (shadow/darkness), opposite application.

**Shadowmeld (Nature):**
- Target friendly fighter gains **Hidden**. While under this spell, the target **does not need to remain within 1" of terrain** to stay Hidden. Hidden is still lost from combat actions, Charge, Climb, Jump, or moving within 6" of an enemy as normal. Lasts until the caster's next activation.
- **Mishap:** The shadow inverts — enemies gain **+1 to hit** the target with ranged weapons and spells until the start of the caster's next activation.
- **Design intent:** The spell *is* the shadow — it follows the fighter, letting them cross open ground while Hidden. Defensive/evasive, fitting Nature's protective identity.

**Nightfall (Blood):**
- Target friendly Blood domain fighter is engulfed in a shadow bubble. **No ranged weapons or spells can target into or out of the bubble.** The target gains **+1 to hit with CC** while within the bubble. Lasts until the caster's next activation.
- **Mishap:** Bright light erupts instead — enemies gain **+1 to hit** the caster with ranged weapons, and the caster suffers **-1 Mt** until the start of their next activation.
- **Design intent:** The vampire chooses to step into darkness — it's a self-buff, not an enemy lockdown. The darkness cuts both ways (no friendly ranged/spells can help either). Pairs with Enthrall (pull enemies into engagement) and Predator's Grace (close distance before darkness drops). Targets friendly Blood domain fighters specifically.

**Reasoning:** Both spells use shadow but from opposite directions — Nature hides in it (defensive), Blood fights in it (aggressive). Nightfall targets friendly Blood domain fighters specifically to prevent it from being used as a ranged shutdown tool against enemies.

**Ripple effect:** "Touching terrain" replaced with "within 1" of terrain" globally in Hidden rules (actions.md) for clarity.

**Open questions:**
- Casting difficulties not yet assigned for either spell.
- Nightfall's bubble size — is it just the fighter's base, or does it extend outward? Current read is fighter-only (1" engagement range defines the "inside").

---

## 2026-05-26 — Blood domain identity and spell list (draft)

**Decision:** Blood is the buff/debuff domain, themed around vampiric predation and hedonism. Blood magic draws power from living blood — vitality, hunger, transformation, excess. It is the domain of the Nobility (Knights + Blood).

**Vampires are undead** — technically dead but sustained by blood magic. They carry the **Undead** keyword (Radiant Strike's +1 Mt vs Undead applies). The distinction from Necromancy: a necromancer's skeleton is a puppet with no will; a vampire is a predator whose blood magic gives it will, intelligence, and power of its own. Necromancy's triangle advantage over Blood (crits) represents necromancers exploiting the death at a vampire's core — but expressed mechanically through the triangle, not through "control" effects.

**Domain distinction:**
- **Necromancy** = dominion over death itself. Corpses, bones, spirits, decay. The dead are tools.
- **Blood** = power drawn from living blood. Vitality, hunger, transformation, predation. Buff/debuff identity.

**Draft spell list:**
- **Leech** (freebie attack) — Ranged attack; if target takes ≥1 wound, caster heals 1 wound. Mishap: caster takes the damage.
- **Bleed** — Target must pass Wi check (d6 + Wi ≥ 8). Fail: Bleeding condition — 1 wound immediately, test Wi each activation until passed or dead. Mishap: caster gains Bleeding.
- **Blood Frenzy** — Friendly target gains +3 Mt, -1 to hit. Lasts until caster's next activation.
- **Predator's Grace** — Friendly target gains +1" M, +1 Sk. Lasts until caster's next activation.
- **Unholy Vigor** — Friendly target regains 1 wound. If at full wounds, +1 red defense die instead. Lasts until caster's next activation.
- **Enthrall** — Target enemy within 8" must pass Wi check or immediately take one Move action in a direction chosen by the caster. Mishap: a friendly fighter (opponent's choice) takes the move instead.
- **Feast of Excess** — Friendly target gains +1 Mt, +1 Sk, +1" M. When effect ends, target becomes Stunned (keeps wounds but vulnerable).

**Open questions:**
- Bleed difficulty — very strong vs low-Wi targets (Wi 3 = 33% chance to shake per turn). Warrants high difficulty (12+ or 14+).
- Feast of Excess → Stunned — in the current wound state system, Stunned is normally part of the Active → Downed → Stunned → OOA chain. A fighter Stunned from Feast still has wounds. Can they be Mercy Killed? Do they need Help to recover, or do they automatically revert to Active after one turn? Needs a ruling.
- Bleeding is a new condition not yet defined in conditions.md.
- Remaining Mishaps TBD for Blood Frenzy, Predator's Grace, Unholy Vigor, Feast of Excess.
- Casting difficulties not yet assigned for any Blood spell.

**Affliction confirmed:** Enfeebled is Blood's signature affliction (strips Mt and Sk — drains vitality). Weakened belongs to Necromancy.

---

## 2026-05-26 — Lk (Luck) renamed to Sk (Skill)

**Decision:** The stat abbreviation Lk (Luck) is now Sk (Skill) across all rules and references. Blue dice represent Skill — finesse, reflexes, precision, trained technique.

**Reasoning:** "Luck" implied randomness and fate, which didn't match what the stat actually governs. A fighter with high blue dice isn't lucky — they're trained, precise, and technically proficient. "Skill" better describes what the stat mechanically represents: the ability to land precise strikes, dodge through reflexes, and outmaneuver opponents. The abbreviation Sk avoids collision with any existing stat.

**Ripple effects:** Global rename across all active rules files. Archive files left unchanged as historical snapshots.

---

## 2026-05-26 — Influence Bubble equipment (Relic, Instrument)

**Superseded by:** 2026-06-09 — Infiltrate, Animal Handling, companions, and Sphere of Influence
(display name only).

**Decision:** Added the Influence Bubble mechanic — equipment that projects a passive area effect around the bearer. Two items added: Relic (+1 Sa, 6", passive, 2 slots) and Instrument (+1" M, 6", costs 1 action per turn, 2 slots).

**Key rules:**
- Bearer must be Active (suppressed while Downed/Stunned/OOA)
- No LoS required (proximity, not vision)
- Bearer benefits from their own bubble
- Same-item bubbles do not stack (two Relics = more coverage, not +2 Sa)

**Reasoning:** Influence Bubbles create high-value support pieces that opponents want to prioritize. Relic at 2 weapon slots makes the bearer a dedicated support fighter. Instrument at 2 slots also limits weapon options, and costs an action each turn on top of that, halving the bearer's combat output. Item names are deliberately generic — a Relic can be a banner, totem, censer, or anything else; an Instrument can be a drum, horn, bell, etc.

---

## 2026-05-24 — Throwing stars, slings, bombs, smoke bombs, auto-fail rule

**Decisions:**

1. **Throwing Stars** added as an additive ranged weapon (+1 Sk, 1H, 0"–8", no min range). A pocket ranged option for close-quarters fighters.

2. **Sling** added with a flat Strike Pool (2 Mt / 1 Sk) — weaker than the cheapest firearm (Pistol at 5/2). Uses normal RC to-hit roll, no loading gate. The cheapest ranged option in the game, available to everyone.

3. **Bombs** added as thrown AoE explosives (3" blast, None domain only). Mechanic: declare target direction → roll 2d6 gunpowder gate (≥ 6+, double 1s = explodes in hand) → roll d6 + Mt for max distance. On pass, place blast anywhere along the line. On fail, scatter die determines direction. Flat Strike Pool (3 Mt / 2 Sk).

4. **Smoke Bombs** use the same bomb mechanics but deal no damage — create a 6" cloud blocking LoS until end of round.

5. **Auto-fail rule** added to core rules: a fighter may choose to automatically fail any test without rolling. Primary use case is dropping a smoke bomb at your own feet for instant cover, but applies universally.

6. **Scatter die** (physical, with arrows on multiple sides and a bullseye) is a required game component for bomb scatter resolution.

**Reasoning:** Slings fill the gap between melee and firearms for retinues that can't afford (or aren't allowed) gunpowder. Throwing stars give any fighter a close-range ranged option without committing to a 2H weapon. Bombs give None domain retinues AoE capability that firearms lack, with the tradeoff of unpredictable distance and scatter risk. The Mt-based distance (d6 + Mt) makes strong fighters better throwers. Smoke bombs are pure utility — the 6" cloud and auto-fail combo creates a defensive tool that rewards tactical play.

---

## 2026-05-20 — All species normalized to W 3

**Decision:** All species now share W 3. Dwarves reduced from W 4, Elves raised from W 2.

**Reasoning:** Wounds multiplicatively amplifies every piece of defensive gear — armor saves, shield saves, toughness rolls all become more valuable with more wounds to protect. W 4 Dwarves weren't "33% tougher" than W 3 Humans; they got 33% more value from every defensive die. W 2 Elves weren't just "a bit fragile"; they got roughly half the value from the same equipment. This made Wounds nearly impossible to price correctly in a points system.

With W normalized, defensive differentiation comes from stats (Mt for toughness), armor tiers, shields, and special rules — all of which scale linearly and are easier to cost. Dwarves remain tough through Mt 4 and access to heavy armor. Elves remain fragile through lighter armor access and lower Mt, without being catastrophically so.

**Ripple effects:** Species costing is simplified — the multiplicative W problem is eliminated. Dwarf identity shifts to "tough through armor and Mt" rather than "tough through raw wounds." Elf identity shifts from "glass cannon" to "lightly armored but not paper." Special rules (e.g., a "Stubborn Constitution" feel-no-pain ability for Dwarves) can reintroduce wound-like resilience at a precise point cost if needed later.

---

## 2026-05-19 — Species stat overhaul: baseline 3, specialty bonuses

**Decision:** All stats baseline at 3 (5+ to succeed). Each species gets two specialty bonuses (+1 to specific stats) that define their identity, plus movement and wound variation.

**Old baselines:** Human Mt 2/Sk 2, Elf Mt 1/Sk 3, Dwarf Mt 3/Sk 1.

**New profiles (as of this date — W later normalized, see 2026-05-20):**
- **Human:** Mt 3, Sk 4, Wi 3, Sa 4, M 6", W 3 — lucky and mentally resilient
- **Elf:** Mt 3, Sk 4, Wi 4, Sa 3, M 7", W 2 — agile and mystical
- **Dwarf:** Mt 4, Sk 3, Wi 3, Sa 3, M 5", W 4 — tough and sturdy

**Reasoning:** Every fighter should pass stat tests at a realistic baseline (33% at stat 3). Species differentiation is expressed as specialty bonuses rather than crippling weaknesses. Humans are resilient (Sk + Sa), Elves are the natural caster species (Sk + Wi, fast, fragile), Dwarves are physical (Mt + W, slow, durable). Humans and Elves share Sk 4 but diverge on their second bonus (Sa vs Wi) and survivability (W 3 vs W 2).

**Ripple effects:** Strike pools are larger (Human + Sword = 9 dice). Defense Mt/Sk comparisons are tighter between species. Skeleton profile updated to Mt 4/Sk 5 with Sword baked in. Elf W raised from 1 to 2.

> **Superseded (2026-05-20):** W values later normalized to 3 for all species. See decision log entry 2026-05-20.

---

## 2026-05-19 — Wi (Will) stat added, flat spell damage, new casting difficulties

**Decisions:**

1. **New stat: Wi (Will)** added to the stat line between Sk and Sa. Represents the ability to channel supernatural power — works for both divine/spiritual and arcane/intellectual magic.

2. **Casting is now 2d6 + Wi vs difficulty** (was flat 2d6 vs difficulty). Firearms remain flat 2d6 — they're mechanical, not magical.

3. **Baseline Wi is 3** for all species. Casters are expected to have Wi 4 (role-based, not species-based). Non-casters have Wi 3 but can technically attempt spells at reduced odds.

4. **Spell difficulties increased by +4** so that a Wi 4 caster has the same success rates as the old flat 2d6 system:
   - Old 6+ → New 10+ (~72% at Wi 4)
   - Old 7+ → New 11+ (~58% at Wi 4)
   - Old 8+ → New 12+ (~42% at Wi 4)
   - Old 10+ → New 14+ (~17% at Wi 4)

5. **Spell damage is now flat, not additive.** Spells define their own Mt/Sk values as a complete Strike Pool, not as modifiers to the caster's base stats. A spell with 5 Mt always produces 5 red dice regardless of who casts it. Magic power comes from the spell, not the caster's body.

**Reasoning:** Wi as a stat makes caster quality meaningful — a Wi 5 veteran is noticeably better than a Wi 3 novice. Flat spell damage decouples physical and magical identity, so an Elf caster and a Dwarf caster produce the same spell output. Difficulties calibrated to Wi 4 so existing balance math is preserved.

---

## 2026-05-19 — Stat bounds: all stats range 1–6

**Decision:** All stats (M, CC, RC, Mt, Sk, Wi, Sa, W) range from 1 to 6. A stat of 1 means the fighter is disabled for that stat — they cannot perform actions requiring it. A stat of 6 is peak — only natural 1 fails (83% success).

**The meaningful tiers:**
- 1 = Disabled (auto-fail, can't attempt)
- 2 = Minimal (17%, nat 6 only)
- 3 = Baseline (33%)
- 4 = Skilled (50%)
- 5 = Expert (67%)
- 6 = Peak (83%)

**Reasoning:** Below 2, the math is identical (nat 6 auto-success only). Above 6, the math is identical (nat 1 auto-fail only). The 1–6 range ensures every stat point matters and creates real consequences for injuries that drop stats.

---

## 2026-05-19 — Firearms loading gate is flat 2d6 (no stat)

**Decision:** Firearms use flat 2d6 vs difficulty 6+ for all weapons. No stat is added. All firearms have the same loading difficulty.

**Reasoning:** A misfire is an equipment failure, not a user error. A veteran and a recruit have the same chance of a misfire — the veteran is better because they hit more often (higher RC), not because the gun fires more reliably. This also keeps firearms simpler than magic and avoids double-dipping with RC (which already handles accuracy). All firearms share 6+ difficulty because the loading process is fundamentally the same across weapon types.

---

## 2026-05-19 — Retinue size targets

**Decision:** Normal retinue size is 5–10 fighters. Absolute maximum ~20, more realistically ~15. These are targets, not hard rules yet.

**Fighter tiers:** 4 levels — Leader, Caster/Special, Champion, Troop. Archetype determines how many of each you can bring. Cult gets 3 max casters; all other archetypes get 1.

**Edge case noted:** An Infernal Cult retinue with 3 casters could theoretically summon enough Imps (post-alpha summoning system) to hit the upper bound if everything goes right. Even in that extreme, the cap should stay around 20 fighters on the table.

**Status:** Superseded by 2026-05-28 retinue-building rules. Bounds defined in `rules/retinue-building.md`.

---

## 2026-05-19 — Sanity mechanics (Fear, Panic, Insanity)

**Decision:** Three tiers of Sanity effects, all tested with d6 + Sa >= 8:

- **Fear** — Cannot move closer to the source for the rest of your turn.
- **Panic** — Cannot move closer + must spend at least 1 action moving full movement away from source.
- **Insanity** — Roll on the Insanity Table (1d6): 1=attack closest fighter (opponent chooses, not the source), 2–3=move toward nearest board edge (both actions), 4–5=freeze (both actions spent), 6=berserk (charge/shoot source with +2 Mt / +1 Sk, -1 to hit).

**Test timing:** Triggers when a fighter activates within range + LoS of the source, or when charging/charged (melee variant). Default range is 6" + LoS unless the fighter/spell specifies otherwise.

**Pass:** Immune to that specific source for the rest of the game.

**Fail:** Effect applies. At the start of the fighter's next activation, test again before acting. Pass = act normally. Fail = effect repeats.

**Fear/Panic/Insanity are keywords on specific fighters and spells.** Fear is per profile, not domain-wide.

**Fearless** keyword grants immunity to all three.

**Domain tendencies (not rules):**
- Blood, Necromancy, Infernal — more likely to have fear-causing fighters
- Light — fear against Blood, Necromancy, Infernal
- Nature, Arcane — some fear-causing fighters
- Infernal, Arcane — tend toward blanket fear (not domain-targeted)
- None — access to Fearless abilities

---

## 2026-05-19 — Sanity stat retained

**Decision:** Sa (Sanity) remains in the stat line for future use with horror, morale, and magical effects. Mechanic to be designed.

**Status:** Open — mechanic not yet defined.

---

## 2026-05-19 — Mishap effects are per-spell, not always caster

**Decision:** Mishap backlash is defined per spell. It does not always affect the caster — some Mishaps hurt the target or have other consequences. The 2d6 Mishap rule was updated from "the caster suffers the spell's unique backlash effect" to "the spell's unique backlash occurs."

**Reasoning:** More interesting design space. Heal's Mishap (deal 1 wound to target instead of healing) is more dramatic and thematic than a generic "caster takes damage."

---

## 2026-05-19 — Light domain spells (partial)

**Decisions made:**
- **Radiant Strike** — 7+, +3 Mt, 12", +1 Mt vs Undead and Daemons. Mishap: caster takes the damage.
- **Holy Light** — 7+, 12" from caster, strips cover and Hidden condition from all fighters in range. Reveal/utility spell, not damage.
- **Heal** — 6+, 1" range, restore 1 wound + improve wound state by one step. Mishap: deal 1 wound to target instead.
- **AoE attack (unnamed)** — 7+, +3 Mt / +1 Sk, 3" blast from caster, hits all fighters in radius. Mishap: caster takes the damage.
- 2 slots remaining (TBD).

**Reasoning:** 7+ is the standard Light difficulty. The AoE attack at 7+ with +3 Mt / +1 Sk is justified by the caster needing to be surrounded by enemies to use it — positional risk compensates for multi-target value. Heal at 6+ is the easiest spell, justified by 1" touch range and the caster spending their activation on support.

---

## 2026-05-19 — Infernal daemon tiers

**Decision:** Three tiers of daemons: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid).

**Reasoning:** Covers small/expendable, mid-tier/versatile, and large/heavy hitter archetypes. Names are gothic without being grandiose. The categories are a mortal classification imposed on chaotic entities — not a strict taxonomy.

---

## 2026-05-19 — Daemons recruited normally for alpha

**Decision:** For the alpha version, daemons are recruited like any other retinue member. Pre-game summoning tables (1d6 to determine tier, then variant roll) are deferred to post-alpha.

**Reasoning:** Summoning tables add complexity and require players to field extra fighters. Better to get the core game working first and layer summoning on later. Community feedback on random roster tolerance is pending.

---

## 2026-05-19 — "Daemons" not "Demons"

**Decision:** The archaic spelling "Daemons" is used throughout.

**Reasoning:** Fits Noctvale's gothic tone and avoids modern connotations.

---

## 2026-05-18 — Weapons separated from equipment

**Decision:** Weapons (melee, ranged, firearms, materials) moved to `rules/weapons.md`. Equipment file (`rules/equipment.md`) retains armor, shields, and alchemy only.

**Reasoning:** Keeps files focused. Weapons will grow as more are added; equipment covers defensive gear and consumables.

---

## 2026-05-18 — Phase 3 complete

**Decision:** Playtest weapon list marked as complete. Weapon tables exist in `rules/weapons.md` covering the melee triangle (Sword, Axe, Spear), ranged (bows, crossbows), and firearms.
