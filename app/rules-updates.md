# Rules updates

Game-data and enforcement changes for the Noctvale retinue builder (`app/`). Add a
dated section before each commit that changes rules — not UI-only work. Run
`date '+%Y-%m-%d %H:%M %Z'` for the timestamp.

Game design decisions go in `../decision-log.md` at the repo root.

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
