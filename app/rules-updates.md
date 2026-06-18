# Rules updates

Game-data and enforcement changes for the Noctvale retinue builder (`app/`). Add a
dated section before each commit that changes rules — not UI-only work. Run
`date '+%Y-%m-%d %H:%M %Z'` for the timestamp.

Game design decisions go in `../decision-log.md` at the repo root.

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
