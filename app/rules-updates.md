# Rules updates

Game-data and enforcement changes for the Noctvale retinue builder (`app/`). Add a
dated section before each commit that changes rules — not UI-only work. Run
`date '+%Y-%m-%d %H:%M %Z'` for the timestamp.

Game design decisions go in `../decision-log.md` at the repo root.

## 2026-07-15 19:55 EDT — Sorcerers extra spell + Staff focus selection wired into builder

**Change:** Updated builder enforcement and fighter state so Sorcerers tradition now supports the optional extra spell purchase on a per-fighter basis. In `RetinueEditor.jsx`, Caster fighters in Sorcerers now have a toggle for `Learn 1 extra spell (+10 Crowns)`, spell limit increases by 1 when enabled, and fighter cost includes +10 Crowns. Added per-fighter Staff focus selection (`Wi`/`Sa`) in the equipment picker when a Staff is equipped, persisted on the fighter record, and reset to default when Staff is removed. Spell UI now shows when Staff focus overrides +Sk scaling for qualifying attack spells.

Also synced adjacent builder data/parsing to match current rules wording: removed Staff from the Two-Handed proficiency list in `noctvale.js`, updated equipment helper copy to reflect that Staff is always allowed like Dagger, and taught weapon-profile parsing to treat `Neutral` / `Any fighter may equip a Staff` as baseline text instead of special-rule noise.

**Impact:** Builder now enforces Sorcerers extra-spell costs and limits correctly, exposes Staff Wi/Sa choice at selection time, and surfaces Staff scaling behavior consistently in editor/export spell metadata without requiring manual notes.

## 2026-07-15 19:46 EDT — Staff now uses neutral, always-allowed access in builder data

**Change:** Updated the `staff` equipment entry in `app/src/data/noctvale.js` to match the canonical rules change. Added `alwaysAllowed: true` so Staff bypasses proficiency gating like Dagger, and updated its first rules line from `Spear` to `Neutral` while adding explicit text that any fighter may equip a Staff.

**Impact:** Builder eligibility now allows Staff for fighters without **Two-Handed** proficiency, and staff profile text no longer implies weapon-triangle participation. This is a game-data/enforcement sync; no `RetinueEditor.jsx` logic changes were needed because existing `alwaysAllowed` handling already applies.

## 2026-07-14 20:32 EDT — Defensive maneuvers and Mortal tradition cleanup

**Change:** Synced builder reference data with the defensive maneuver rules update.
Removed the Universal **Dodge** feat from `UNIVERSAL_FEATS`, changed **Shoulder to
Shoulder** from +1 Skill defense die to +1 Might defense die, updated
**Entangle** to prevent defensive maneuvers while Movement is 0, updated the
**Cleave** keyword reminder so it checks for the free Melee target after
defensive maneuver movement, and removed **Constables** from the Mortal
Traditions list.

**Impact:** Builder display and selection data changed. New retinues can no
longer select **Dodge** or **Constables**. Existing saved rosters that already
contain those ids may need manual cleanup when opened because the builder no
longer has canonical reference text for those retired options.

## 2026-07-13 14:50 EDT — Synced feat/tradition text for cross-domain feat fixes

**Change:** Updated `FEATS` entries for `patient-shot`, `deadeye`, `gunslinger`, and
`wild-aspect`, plus the `werebeasts` tradition's `rules` text, in `noctvale.js` to
match the `rules/feats.md` and `rules/traditions.md` wording changes: the new
**Ranged Attack Action** term (Aim/Deadeye/Patient Shot/Gunslinger), an explicit
**Mortal** keyword prerequisite on **Gunslinger** (Firearms already stated it),
`wild-aspect` now granting the **Werebeast** keyword itself instead of requiring
it, and the new 2-beast-mark cap. Text only — the app does not yet implement
post-game Advancement (including the "Feat outside Archetype/Domain" purchase)
or multi-mark stacking in the builder UI, so no `RetinueEditor.jsx` logic
changed. Note for whoever wires this up: once outside-domain Advancement
purchases exist, `wild-aspect` taken that way should be allowed to set
`fighter.beastMark` even when `tradition?.id !== "werebeasts"` — the current
`showBeastMarkPicker`/`isRatWerebeast` helpers gate entirely on tradition id
and will need a second path for a feat-granted **Werebeast** keyword.

**Impact:** None on current builder behavior; keeps the reference text fighters
see in the app consistent with the corrected canonical rules ahead of
Advancement being built into the UI.

## 2026-07-13 12:06 EDT — Fixed dead "beastmen" checks in RetinueEditor.jsx

**Change:** Five checks in `RetinueEditor.jsx` still compared
`tradition?.id` against the retired `"beastmen"` id instead of the current
`"werebeasts"` id (`TRADITIONS` has never defined a `"beastmen"` entry —
only `"werebeasts"`), so they could never match: `getFighterStats`'s Bear
stat modifier, `getTraditionCostModifier`'s cost bump, `isRatBeastman`
(renamed to `isRatWerebeast`) gating the Rat extra-weapon-slot allowance,
`showBeastMarkPicker`, and the "needs a beast-mark" validation warning.
Updated all five to check `"werebeasts"`, renamed `isRatBeastman` to
`isRatWerebeast` (all 3 call sites), and fixed a "Rat Beastmen may carry..."
UI string to "Rat Werebeasts...". Also removed the completed
"Remove Werebeasts migration shim" line from `todo.md` and its `"beastmen"`
mention, since that task is done — see `decision-log.md` for the historical
record.

**Impact:** Real behavior fix, not just cleanup — Bear's Might/Sanity stat
swap, Rat's extra weapon slot, the beast-mark picker, and the "needs a
beast-mark" warning were all silently inert for Werebeasts retinues before
this fix, regardless of the now-removed `normalizeRetinue` migration shim
(that shim only affected the stored `traditionId` string, not these
UI-level checks). Confirmed no other `"beastmen"` references remain outside
`decision-log.md` and this file's own historical entries.

**Source:** `app/src/components/RetinueEditor.jsx`, `todo.md`.

## 2026-07-13 11:46 EDT — Attack spells adopt Blast/Spread keywords in SPELLS data

**Change:** Updated four entries in `SPELLS` (`app/src/data/noctvale.js`) to
match the `rules/magic.md` wording: `purge-the-faithless` and `bone-blast`
now use `Blast(5")`/`Blast(3")` per their spell, `fireball` uses `Blast(5")`
with its scatter logic condensed, and `thorn-volley` uses `Spread`. Each
spell's `keywords` array now includes the Blast/Spread token alongside
`Attack` (e.g. `["Attack", 'Blast(3")']`), matching the pattern already used
for the `Attack` keyword itself.

**Impact:** Display-text only — `effect`/`keywords` are plain strings
rendered directly in `RetinueEditor.jsx` (spells don't go through the same
`WEAPON_KEYWORD_RULES` rule-link resolution as weapons do), so this doesn't
change any casting math. No other spells were touched — The Void,
Hoarfrost, Hellmouth, Cursed Ground, Bone Circle, and Nightfall all place
templates but don't resolve as a single immediate Blast/Spread attack, so
forcing the keyword onto them would have misdescribed their actual
mechanic (persistent zones/terrain with their own re-trigger conditions).

**Source:** `rules/magic.md`, `rules/weapons.md`, `app/src/data/noctvale.js`.

## 2026-07-13 11:36 EDT — Blast(3")/Blast(5") keyword; Bomb uses it instead of ad-hoc text

**Change:** Added `'Blast(3")'` and `'Blast(5")'` entries to
`WEAPON_KEYWORD_RULES` (identical body text for both sizes, matching the
`Thrown(Mt)`/`Thrown(Sk)` two-keys-one-concept pattern). Reworded `Spread`'s
text to match the same "roll once, defend individually" phrasing. Updated
`bomb`'s rules text from `... Strike Pool 3 Mt / 2 Sk. 3" blast, Single
Shot, Impact.` to `... Blast(3"), Single Shot, Impact.` so it resolves
through the keyword glossary like `Single Shot` and `Impact` already do,
instead of being silently stripped by the `\d+" blast,?\s*` regex in
`fighter.js` (that regex is unchanged and still applies to `smoke-bomb`,
which intentionally keeps its blast size out of the rule-chip display since
it's redundant with `Smoke`'s own definition).

**Impact:** Bomb's fighter card now shows a real, clickable `Blast(3")`
keyword instead of having its blast size silently dropped. Traced
`parseWeaponProfile()` for `bomb`, `smoke-bomb`, and `blunderbuss` to confirm
all three resolve correctly.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`.

## 2026-07-12 21:37 EDT — Spread keyword for Blunderbuss; Single Shot/Smoke parser bug fixed

**Change:** Added a `Spread` entry to `WEAPON_KEYWORD_RULES` and updated
`blunderbuss`'s rules text from `... Standard flame template.` to `...
Spread.` so it resolves as a real keyword chip instead of unlinked plain
text. Removed two dead patterns from `parseSpecialRulesFromFirstLine()` in
`fighter.js` — `.replace(/Single Shot,?\s*/gi, "")` and
`.replace(/Smoke\.?\s*/gi, "")` — which were unconditionally deleting those
words from any weapon's rules text before keyword resolution ran, instead of
letting them resolve through `WEAPON_KEYWORD_RULES` like every other
keyword.

**Impact:** Fixes a real display bug — **Smoke Bomb** previously showed **no
special rules at all** on the fighter card (both `Single Shot` and `Smoke`
were being silently stripped); it now correctly shows both. **Bomb**
previously showed only `Impact` (missing `Single Shot`); it now shows both.
**Blunderbuss** previously showed unlinked plain text "Standard flame
template"; it now shows a proper `Spread` rule link. Traced
`parseWeaponProfile()` for `blunderbuss`, `smoke-bomb`, `bomb`, `musket`, and
`long-rifle` to confirm the fix and rule out regressions on unaffected
weapons.

**Source:** `app/src/data/noctvale.js`, `app/src/lib/fighter.js`.

## 2026-07-12 21:23 EDT — Throwing Stars gain a 1" minimum range

**Change:** `throwing-stars`' rules text range changed from `Range 0"-8"` to
`Range 1"-8"` in `EQUIPMENT`, matching the `rules/weapons.md` update. Dropped
the now-inaccurate `No minimum range, thrown; additive` flavor phrase from
the rules text (it was already suppressed from the card's rule-chip display
via `BASELINE_PHRASES` and isn't needed for `parseRange()` to work) and
removed its now-dead pattern from `BASELINE_PHRASES` in `fighter.js`.

**Impact:** Throwing Stars can no longer target a fighter at 0" range.
Verified with a `parseWeaponProfile()` trace: range resolves to `1"–8"`,
Mt/Sk and the empty special-rules list are unaffected.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`,
`app/src/lib/fighter.js`.

## 2026-07-12 21:19 EDT — War Axe gains Cleave

**Change:** Replaced `war-axe`'s baseline flavor text with a real keyword in
`EQUIPMENT`: `Hands 2H. +Mt +3. Axe. Cleave.` (was `... Heavy hitter.`, a
no-keyword placeholder). Cost and dice unchanged (45 Crowns, +3 Mt).

**Impact:** War Axe now grants a free Melee attack on a kill, same as Great
Sword. Confirmed with a `parseWeaponProfile()` trace that `war-axe` resolves
`Cleave` correctly and `battle-axe`/`hand-axe` are unaffected.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`.

## 2026-07-12 20:49 EDT — Spear loses Thrown(Mt); shield terminology fix

**Change:** Removed the `Thrown(Mt)` token from `spear`'s rules text in
`EQUIPMENT` (now just `Hands 1H. +Mt +1, +Sk +1. Spear. Reach.`). Replaced
"shield tie benefit" with "shield Df bonus" in the `Piercing` and `Sunder`
entries of `WEAPON_KEYWORD_RULES`.

**Impact:** Spear can no longer be used to make a Ranged attack — Javelin is
now the only One-Handed Spear-type weapon with Thrown(Mt). Piercing and
Sunder's mechanical effect is unchanged; only the wording was corrected to
match the current Df-threshold shield mechanic instead of the old
tie-winning shield model it was still describing.

**Source:** `rules/weapons.md`, `rules/combat.md`, `app/src/data/noctvale.js`.

## 2026-07-12 16:57 EDT — Added Flail, Maul, Glaive; renamed War Hammer to Greathammer

**Change:** Added three `EQUIPMENT` entries: `flail` (One-Handed melee, 25
Crowns, 1 slot, `+Mt +1. Hammer. Sunder.`), `maul` (Two-Handed melee, 35
Crowns, 2 slots, `+Mt +3. Hammer. Baseline hammer.`), and `glaive`
(Two-Handed melee, 50 Crowns, 2 slots, `+Mt +1, +Sk +1. Spear. Reach.
Cleave.`). Renamed the `war-hammer` entry's `id` and `name` to `greathammer`
(rules text unchanged: `+Mt +3. Hammer. Impact.`). Added a new `Sunder` entry
to `WEAPON_KEYWORD_RULES`, and a `baseline hammer` pattern to
`BASELINE_PHRASES` in `fighter.js` (mirrors the existing `baseline axe`
pattern used by War Axe) so Maul correctly shows no special-rule chip.
Fixed `PROFICIENCIES`' One-Handed and Two-Handed weapon lists, which had
drifted out of date (missing Battle Axe/Javelin from the prior entry below,
and now updated for this entry's additions and the rename).

Traced `parseWeaponProfile()` output for `flail`, `maul`, `glaive`,
`greathammer`, `mace`, `war-axe`, and `halberd` with a one-off script —
stats, type, and special-rule chips all resolved correctly, and the rename
left no other weapon or PROFICIENCIES reference to the old `war-hammer` id.

**Impact:** New purchasable weapons; one rename. Any existing saved retinue
with `war-hammer` equipped will no longer resolve that item (the id no
longer exists in `EQUIPMENT`) — flagging this since it's a live-data
consequence of the rename, not just a source change.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`,
`app/src/lib/fighter.js`.

## 2026-07-12 15:44 EDT — Added Battle Axe and Javelin; Staff gains Reach

**Change:** Added two `EQUIPMENT` entries: `battle-axe` (One-Handed melee, 25
Crowns, 1 slot, `+Mt +2, +Sk +1. Axe. Baseline axe.`) and `javelin`
(One-Handed melee, 15 Crowns, 1 slot, `+Mt +1. Spear. Thrown(Mt), Reach.`).
Added `Reach.` to `staff`'s rules text (it was Spear type but missing the
keyword). Both new weapons and the Staff fix appear correctly in
`parseWeaponProfile()` output (icons, stats, and rule chips traced manually
with a one-off script — no discrepancies).

**Impact:** New purchasable weapons under the existing `one-handed`
proficiency; no changes to proficiency-gating logic itself. Staff's Reach
addition is a small rules buff (2" engagement) for existing Staff-wielders.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`.

## 2026-07-12 15:35 EDT — Weapon triangle icons on fighter cards; Dagger drops Sword type

**Change:** `fighter.js`'s `parseWeaponProfile()` now derives a `type` field
(`sword` / `axe` / `spear`, or `null`) from the `Sword.` / `Axe.` / `Spear.` /
`Hammer.` token already present in each weapon's first rules line, instead of
just discarding it. `WeaponTable.jsx` renders the matching
`/images/weapon-icon-{sword,axe,spear}.svg` before the weapon name on fighter
cards (both the compact summary and full edit-mode tables); Hammer weapons and
untyped weapons get no icon. `FIGHTING_CLAWS_WEAPON` (Werebeast claws) gained
an explicit `type: "axe"` field and had its redundant hardcoded `{ name:
"Axe" }` special-rule entry removed, since the icon now covers it.

Separately, **Dagger** no longer carries the `Sword.` token in its rules text
— it has no weapon type and no triangle icon, matching the
`rules/weapons.md` change in the same session (see `decision-log.md`
2026-07-12 — Dagger has no weapon type).

**Impact:** Display/UX only on the card, plus one rules change: Dagger no
longer grants or suffers weapon triangle advantage. No cost, slot, or
purchase-validation changes.

**Source:** `app/src/lib/fighter.js`, `app/src/data/noctvale.js`,
`app/src/components/WeaponTable.jsx`, `rules/weapons.md`, `rules/combat.md`.

## 2026-07-12 08:30 EDT — Weapon keyword glossary; rule links replace inline text

**Change:** Added a `WEAPON_KEYWORD_RULES` glossary to `noctvale.js`, copied verbatim
from the **Keywords** table and surrounding prose in `rules/weapons.md` (**Cleave**,
**Heavy**, **Impact**, **Parry**, **Piercing**, **Reach**, **Thrown(Mt)**,
**Thrown(Sk)**, **Volley**, **Spell focus**, **Single Shot**, **Smoke**, **Firearm
critical hits**, **Dual wielding**). `fighter.js`'s weapon-rule parser now resolves
bare keyword tokens (e.g. `Parry`) against this glossary instead of leaving them as
undefined plain text, and splits comma-joined keyword lists (e.g. `Piercing, Heavy,
Impact` on **Long Rifle**) into separate named entries.

On the retinue builder's read-only view page, weapon special rules, caster spells,
feats, and equipment with rules now render as click-to-open rule links (new shared
`RuleLink.jsx` component) instead of always-visible text — the weapon table also now
puts special-rule links on the same row as the weapon (`Name | Kit | Mt | Sk |
Rules`) instead of a second row underneath. Edit-mode weapon/feat displays are
unchanged. The printed sheet and the clipboard "Copy" export now list fighter cards
with names only (weapon rule names, spell names, feat names, equipment names) and
collect the full text for every unique rule/spell/feat/equipment item used in the
retinue into one deduplicated "Rules Reference" section after all the cards
(`buildRulesReference` in `retinue-sheet.js`).

**Impact:** Display/UX only; weapon costs, slots, and purchase validation did not
change.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`, `app/src/lib/fighter.js`,
`app/src/lib/retinue-sheet.js`, `app/src/lib/retinue-export.js`,
`app/src/components/RetinueEditor.jsx`, `app/src/components/WeaponTable.jsx`,
`app/src/components/RuleLink.jsx`.

## 2026-07-10 20:34 EDT — Remove Crushing keyword; fix stat grid column count

**Change:** Removed **Crushing** from **Mace** and **War Hammer** in builder data. Both weapons now list only **Impact**. **Crushing** no longer appears in any weapon reminder text.

**Impact:** Display text only; weapon costs, slots, and validation did not change.

**Source:** `rules/weapons.md`, `app/src/data/noctvale.js`.

---

**Change:** Stat grid in the retinue builder changed from `grid-cols-8` to `grid-cols-9` so all nine attributes (M, CC, RC, Mt, Sk, Df, Wi, Sa, W) display on one row.

**Impact:** Layout fix only; no data or rules changes.

**Source:** `app/src/components/RetinueEditor.jsx`.

## 2026-07-10 18:10 EDT — Impact weapon reminders

**Change:** Synced builder weapon reminder text for the new **Impact** keyword. **Mace**, **War Hammer**, **Sling**, **Long Rifle**, and **Bomb** now list **Impact**. **Long Rifle** no longer says "Critical hits on 5+". **Blood for the Rite** now says exactly **0 Wounds** when describing when the sacrificed fighter becomes **Downed**.

**Impact:** Display text only; weapon costs, slots, purchase gates, primer difficulties, and validation did not change.

**Source:** `rules/conditions.md`, `rules/combat.md`, `rules/actions.md`, `rules/weapons.md`.

## 2026-07-09 — Defense overhaul: Df attribute, armor pool bonuses, shield tie-breaking

**Change:** Replaced the armor-conversion defense model with a unified Defense (Df) attribute system.

- Added **Df** to `STAT_KEYS` and `BOOSTABLE_STATS`. All four ancestry profiles now carry a `Df` stat (Steady 3, Keen 3, Stout 4, Stunty 3).
- Armor now **adds dice to the defense pool before rolling** rather than converting failures after rolling. Light Armor: +1 Skill die. Medium Armor: +1 Might die. Heavy Armor: +2 Might dice, −1 Skill die.
- Shields now provide **tie-breaking** rather than conversions. Buckler: defender wins Skill ties. Shield: defender wins all ties. Tower Shield: defender wins all ties and adds +1 Might die.
- All six armor/shield `rules` strings updated in `noctvale.js`.

**Impact:** Stat display, stat boost picker, and any export or print logic that reads `STAT_KEYS` or a fighter's `stats` object will now include `Df`. Fighter stat tables need a Df column. Builder enforcement for armor caps is unchanged.

**Source:** `rules/combat.md`, `rules/gear.md`, `rules/attributes.md`.

## 2026-07-08 15:47 EDT — Tracker built-in Marked Quarry

**Change:** Replaced the Tracker's built-in **Archery** / **Firearms** training choice with built-in **Marked Quarry**. Trackers now arrive with that feat automatically; it does not count against their single chosen feat pick. The feat picker shows **Marked Quarry** as built-in and locked for Trackers.

**Impact:** Builder data, feat display/export, and validation. Trackers no longer default to Archery proficiency or a Firearms built-in choice. Legacy Trackers with a saved `builtInChoice` still honor Firearms only for equipment checks until edited.

**Source:** `rules/archetypes.md`, `rules/feats.md`.

## 2026-07-08 15:17 EDT — Beastmen beast-mark per fighter

**Change:** Moved **Beastmen** beast-mark selection from a retinue-wide sidebar choice to a per-fighter choice at recruitment. Each fighter now stores its own `beastMark` (**Wolf**, **Rat**, **Bear**, or **Serpent**). Bear stat modifiers, Rat extra weapon slots, Wolf **Fighting Claws**, and validation warnings now resolve from the fighter's mark. Saved retinues with a legacy retinue-wide `beastMark` migrate that value onto fighters missing a mark.

**Impact:** Builder UI, fighter data model, export/print sheets, and purchase validation. Roster building starts as soon as archetype and tradition are chosen; beast-mark is required on each fighter card.

**Source:** `rules/traditions.md`.

## 2026-07-02 13:42 EDT — Wand spellcasting gear

**Change:** Added **Wand** to builder equipment as **Caster** spellcasting gear. It costs **35 Crowns**, takes 1 weapon slot, and grants +1 to hit when resolving an **Attack** spell. Multiple **Wands** or duplicate **Wand** effects do not stack.

**Impact:** New purchasable equipment plus validation: only fighters with the **Caster** keyword may buy **Wands**.

**Source:** `rules/crown-costs.md`, `rules/magic.md`.

## 2026-07-02 13:37 EDT — Attack spell keyword

**Change:** Added an **Attack** keyword to builder spell data for spells that build a Strike Pool, and displayed spell keywords in the spell picker and fighter card summary. Non-Strike-Pool spells such as **Deathbolt** and **Horrors Relived** remain untagged.

**Impact:** Display text only; spell selection limits, costs, casting rolls, Strike Pools, and validation did not change.

**Source:** `rules/magic.md`.

## 2026-07-02 13:31 EDT — Staff Spell focus

**Change:** Synced the builder Staff reminder text to the new **Spell focus** rule. When a fighter purchases a **Staff**, choose **Will** or **Sanity** for that staff. While wielding it, the fighter uses the chosen attribute instead of **Skill** to determine scaling **Skill dice** for casting attacks; the spell's printed +**Skill** value still applies.

**Impact:** Display text only; Staff cost, slots, two-handed profile, and purchase validation did not change.

**Source:** `rules/weapons.md`.

## 2026-07-01 22:08 EDT — Ranged and spell Strike Pools

**Change:** Synced builder weapon and spell reminder text to the locked ranged damage model. **Shortbow** and **Longbow** now scale from **Might** with fixed **Skill dice**. **Crossbow**, **Heavy Crossbow**, **Pistol**, **Musket**, **Long Rifle**, and **Blunderbuss** now use fixed **Might dice** plus the fighter's **Skill** and printed +**Skill** value. Damage spells now use fixed **Might dice** plus the caster's **Skill** and printed +**Skill** value. **Deathbolt** now forces a **Will** check or sends the target **Out of Action**.

**Impact:** Display text only; no purchase gating, slot use, costs, primer difficulties, or validation rules changed.

**Source:** `rules/crown-costs.md`, `rules/weapons.md`, `rules/magic.md`.

## 2026-06-30 19:59 EDT — Strike Pool cap and dual wielding

**Change:** Synced the builder equipment UI to the new dual-wielding rule and **15 dice** Strike Pool cap. Fighters carrying at least two one-handed melee weapons now show a **Dual wielding** reminder in their weapon summary: choose a primary and secondary weapon, add both weapon profiles up to **15 dice**, use only the primary weapon's type and special rules, and do not use a shield while dual-wielding. Also synced **Rat** Beastmen slot validation so their extra one-handed weapon allowance can cover one-handed melee or thrown weapons, but not firearms, bombs, shields, or two-handed weapons.

**Impact:** Display and validation reminders. The builder still allows a fighter to carry shields and multiple one-handed melee weapons, but warns that the shield cannot be used while dual-wielding because the rule restricts use, not ownership. **Rat** Beastmen no longer receive a false over-slot warning when their fourth slot is a legal one-handed weapon.

**Source:** `rules/attributes.md`, `rules/combat.md`, `rules/weapons.md`, `rules/traditions.md`.

## 2026-06-30 13:42 EDT — Affliction tokens and Broken

**Change:** Synced builder spell, Tradition, and poison text to the new condition model. **Venom**, **Blight Extract**, **Serpent**, and poisonous bites now add **Affliction tokens** instead of applying **Poisoned**. **Wither** now applies **Withered**. **Unwavering Resolve** Mishap now makes the caster **Broken** instead of applying duration-based **Panic**.

**Impact:** Display text only; no roster validation or purchase logic changed.

**Source:** `rules/conditions.md`, `rules/magic.md`, `rules/gear.md`, `rules/traditions.md`, `rules/companions.md`.

## 2026-06-29 18:35 EDT — Dead condition and terminology cleanup

**Change:** Removed **Enfeebled** from live condition references and generated rules output. Synced builder **Instrument** reminder text from outdated **Relic or Instrument** wording to **Icon or Instrument**.

**Impact:** Display text only; no roster validation or purchase logic changed.

**Source:** `rules/conditions.md`, `rules/what-you-need-to-play.md`, `rules/magic.md`, `rules/attributes.md`, `rules/gear.md`.

## 2026-06-28 21:49 EDT — Climbing Rope

**Change:** Added **Climbing Rope** adventuring gear (**35 Crowns**, permanent, no weapon slots). A fighter carrying it uses full **Movement** on **Climb** instead of half **Movement**.

**Impact:** New purchasable gear in **Adventuring gear**; one per fighter in the builder.

**Source:** `rules/equipment.md`, `rules/core-rules.md` Climb.

## 2026-06-27 — Battlefield terminology (builder strings)

**Change:** Synced **Infiltrate** reserve text to **off the battlefield** (was **off the board**).

**Impact:** Wording only; no enforcement change.

## 2026-06-27 10:23 EDT — Might dice / Skill dice terminology

**Change:**

- Replaced **red dice** / **blue dice** (and red/blue hits, defense dice, etc.) with **Might dice** / **Skill dice** across rules text and builder feat, spell, and armor strings.
- Core Rules now instruct players to choose which physical dice color represents Might vs Skill before the first battle.

**Impact:** Builder card text and enforcement strings match the updated rulebook vocabulary. No purchase or roster logic changed.

## 2026-06-25 19:29 EDT — Summoning spells, Infernal list, Shield of Faith

**Change:**

- Synced **Shield of Faith** to **Wi 10+**; removed erroneous **Fear (6")** projection.
- Added Infernal spells **Possession**, **Hellmouth**, **Searing Gaze**, and **Nightmare Visage**; removed Infernal TBD placeholders.
- Synced **Summon Daemon**, **Summon Skeleton**, **Raise Dead**, **Summon Bats**, **Stinging Swarm**, **Bone Blast**, and summoning-related Tradition text.
- Renamed **Summon Swarm** → **Stinging Swarm**; replaced **Predator's Grace** with **Summon Bats**.
- Updated Infernal Tradition blurb (no remaining TBD spells).

**Source:** `rules/retinue.md`, `rules/equipment.md`.

**Impact:** Display-only spell and Tradition text; no roster validation changes.

## 2026-06-25 14:18 EDT — Hellfire, hit-stat sync, Icon rename

**Change:**

- Replaced Infernal **TBD attack** with **Hellfire** (Sa 10+, RC, 3 Mt / 4 Sk,
  3"–18", no Mishap).
- Synced **Zealots**, **Dynasts**, **Chant**, **Shadowmeld**, **Blood Frenzy**,
  **Nightfall**, and **Silver** builder text to **+CC** / **+RC** hit modifiers.
- Removed **Heal** Mishap from builder data to match rules.
- Renamed roster **Relic** sphere gear to **Icon** (`relic` → `icon` id).

**Source:** `rules/retinue.md` (daemon profiles, Hellfire, keywords), `rules/core-rules.md`, `rules/equipment.md`.

**Impact:** Display-only spell, Tradition, feat, and equipment reminder text;
no roster validation changes.

## 2026-06-23 21:59 EDT — Explicit Sanity projection ranges

**Change:**

- Synced **Hellknights**, **Sepulchers**, **Ironbound**, and **Shield of Faith**
  builder text so they project **Fear (6")** explicitly.

**Source:** `rules/core-rules.md` Sanity and `rules/retinue.md` Traditions.

**Impact:** Display-only in the builder Tradition text; no roster validation
changes.

## 2026-06-23 21:38 EDT — Falling and Acrobat

**Change:**

- Synced **Acrobat** builder reminder text with the new **Falling** rule.
- A passed **Acrobat** check now says not to resolve **Falling**, instead of
  referring to Wounds from the fall.

**Source:** `rules/core-rules.md` Falling and `rules/retinue.md` Acrobat.

**Impact:** Display-only in the builder feat picker; no roster validation
changes.

## 2026-06-23 12:11 EDT — Spell Mishap cleanup

**Change:**

- Set the **Holy Light** Mishap in the builder spell picker.
- Removed the placeholder Mishap from **Shield of Faith**.
- Set the **Unwavering Resolve** Mishap in the builder spell picker.
- Removed the placeholder Mishap from **Arcane Shield**.
- Set the **Telekinesis** Mishap in the builder spell picker.
- Set the **Displacement** Mishap in the builder spell picker.
- Set the **Slow** Mishap in the builder spell picker.
- Synced **Venom** range and Mishap.
- Synced **Feral Form** range and Mishap.
- Set the **Entangle** Mishap in the builder spell picker.
- Removed the placeholder Mishap from **Dread Chorus**.
- Synced **Wither** range and Mishap.
- Set **Leech** to a 3 Mt / 3 Sk touch attack.

**Source:** `rules/retinue.md` spell blocks.

**Impact:** Display-only in the builder spell picker; no roster validation changes.

## 2026-06-22 22:39 EDT — Ancestry profile descriptors

**Change:**

- Replaced builder ancestry options with **Steady**, **Keen**, **Stout**, and
  **Stunty** profile descriptors.
- Set new fighters to default to the **Steady** profile.
- Added the **Stunty** profile at **M 6"**, **Mt 2**, **Sk 4**, **W 2**, and
  **-10 Crowns**.

**Source:** `rules/retinue.md` ancestry profile tables.

**Impact:** Roster-building data and fighter cost calculation changed. The new
profile IDs are the core source of truth; old ancestry IDs are not translated.

## 2026-06-22 10:03 EDT — Summon Daemon Mishap

**Change:**

- Set the **Summon Daemon** Mishap in the builder spell picker.

**Source:** `rules/retinue.md` Infernal spell block.

**Impact:** Display-only in the builder spell picker; no roster validation changes.

## 2026-06-22 09:34 EDT — The Void Infernal spell

**Change:**

- Added **The Void** to the Infernal spell list in the builder spell picker.

**Source:** `rules/retinue.md` Infernal spell block.

**Impact:** Display-only in the builder spell picker; no roster validation changes.

## 2026-06-22 09:23 EDT — Spells without Mishaps

**Change:**

- Omit Mishap text for spells that have no Mishap in the source rules.

**Source:** `rules/retinue.md` domain spell blocks — Magic section.

**Impact:** Display-only in the builder spell picker; no roster validation changes.

## 2026-06-21 23:44 EDT — Blood spell profile cleanup

**Change:**

- Synced Blood spell ranges and Mishaps from the canonical rules table.
- Changed **Leech** to a Touch attack and **Nightfall** to a Self spell on the caster.

**Source:** `rules/retinue.md` Blood spell table.

**Impact:** Display-only in the builder spell picker; no roster validation changes.

## 2026-06-21 18:34 EDT — Spell Casting stat and Hit columns

**Change:**

- Added `castingStat` (`Wi` or `Sa`) and `hit` (`RC`, `CC`, or `-`) to every entry in `SPELLS`.
- Spell picker modal shows Cast and Hit alongside Mt, Sk, and Mishap.

**Source:** `rules/retinue.md` domain spell tables — Magic section.

**Impact:** Display-only in the builder; no roster validation changes.

## 2026-06-21 18:11 EDT — Firearms domain feat

**Change:**

- Removed **Firearms** from the **Proficiency** feat menu on all Archetypes.
- Added **Firearms** as a **Mortal** domain feat in `DOMAIN_FEATS`.
- Tracker built-in choice now grants built-in **Archery** proficiency or built-in **Firearms** domain feat.
- Firearm and bomb equipment checks use `fighterHasFirearms()` (selected feat or Tracker built-in) instead of proficiency. All firearms share one purchase list — no Basic/Refined archetype tiers.

**Source:** `rules/retinue.md` Domain Feats — Firearms, `rules/equipment.md` weapon proficiencies.

**Impact:** Mortal fighters must spend a domain feat pick (or Tracker built-in) to equip gunpowder weapons. Existing rosters with `firearms` stored as a proficiency feat id still equip firearms if the feat id remains on the fighter.

## 2026-06-21 15:43 EDT — Ancestry terminology

**Change:**

- Renamed builder-facing **Species** selection to **Ancestry**.
- Renamed builder data export from `SPECIES` to `ANCESTRIES`.
- Saved fighters with legacy `speciesId` migrate to `ancestryId` on load.

**Source:** `rules/retinue.md` and `rules/core-rules.md` Ancestry terminology.

**Impact:** No roster costs, stat profiles, purchase limits, or legality rules
changed. Existing saved rosters keep loading through the migration.

## 2026-06-18 18:52 EDT — Fighter keyword system

**Change:**

- Archetype, Domain, Tradition, and Class now grant **identity keywords** on every
  fighter at roster creation.
- **Mortal** and **Caster** are mutually exclusive; firearms require **Mortal**,
  forbid **Caster**, and refined tier requires **Hunters**.
- Builder resolves keywords via `resolveFighterKeywords()` and enforces equipment
  and proficiency legality from keyword predicates.
- Fighter cards display keyword pills (Archetype, Domain, Tradition, Class,
  Caster, Vampire, etc.).

**Source:** `rules/retinue.md` Keywords section, `rules/equipment.md`, `rules/campaign.md`.

**Impact:** Firearm and Caster warnings use keyword checks. Tradition cost modifiers
unchanged. Rune-stones still require Runecasters Tradition.

## 2026-06-18 — Staff (Two-Handed melee)

**Change:**

- Added **Staff** to Two-Handed melee: 20 Crowns, +Mt +1, +Sk +1, Spear type, 2
  slots.
- **Spell focus:** once per battle, on a failed casting roll (not Mishap), reroll
  the Casting Roll once and accept the second result.

**Source:** `rules/equipment.md` — new caster-friendly pole weapon.

**Impact:** Any fighter with **Two-Handed** proficiency may buy Staff in the builder.
Spell focus is roster text only — not enforced in-app.

## Builder scope (standing note)

This app models **retinue creation / purchase legality** only. Archetypes that
cannot buy Heavy Armor, Tower Shield, or similar gear at creation may still
acquire that gear in the **exploration phase** or campaign — note that in log
entries when purchase caps change so playtesters do not confuse builder limits
with in-campaign availability.

## 2026-06-17 — Playtest fix batch

**Change:**

- Renamed Folk feat **Raise the Watch** → **Rally to Aid** (`rally-to-aid`). Rule
  text unchanged.
- Reclassified Buckler / Shield / Tower Shield as armor-tier gear: `kind: "armor"`,
  `armorRank` 1 / 2 / 3 (Light / Medium / Heavy), grouped under **Armor**, 0 weapon
  slots. Dropped “Requires shield access” from item rules.
- Removed `shieldAccess` from Knights, Hunters, and Folk archetypes. Shields no
  longer require One-Handed proficiency.
- Updated Knights `tableRole` copy to reference Tower Shield instead of “full shield
  access”.
- Added fighter field `skilledCraftsman: { weaponId, boost }` where `boost` is `mt`
  or `sk`. Cleared when the feat or upgraded weapon is removed. Legacy
  `raise-the-watch` feat ids normalize to `rally-to-aid` on retinue load.

**Source:** Playtest feedback; weapon categorization update.

**Impact:**

- **Rally to Aid:** Feat displays under the new name; saved retinues with the old id
  still work after load.
- **Shields:** Folk may buy Buckler only at creation; Hunters up to Shield; Knights
  all three. Tower Shield no longer appears for Folk. Cult without Magic Armor
  still cannot buy armor-tier shields; Cult with Magic Armor follows Heavy cap.
  Hellknights +10c armor surcharge applies to shields. Archetypes without Heavy
  Armor access at creation may still find Heavy Armor or Tower Shield in the
  exploration phase.
- **Skilled Craftsman:** Builder enforces one weapon upgrade (+1 Mt or +1 Sk) and
  shows it on the weapon profile. Warnings when the feat is set but no upgrade is
  configured.
