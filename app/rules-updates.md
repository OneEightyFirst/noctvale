# Rules updates

Game-data and enforcement changes for the Noctvale retinue builder (`app/`). Add a
dated section before each commit that changes rules — not UI-only work. Run
`date '+%Y-%m-%d %H:%M %Z'` for the timestamp.

Game design decisions go in `../decision-log.md` at the repo root.

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
