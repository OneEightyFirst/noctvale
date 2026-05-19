# Noctvale — Playtest Roadmap

Everything needed to reach a first playable prototype, organized by phase.

---

## Phase 1: Turn Structure

Design and write the complete turn structure (initiative, activation pattern, round sequence).

- [x] Alternating activations defined
- [x] Underdog initiative (fewer activations = go first)
- [x] Scenario-determined tiebreaker for round 1
- [x] Overwatch tokens distributed at start of round
- [x] End-of-round cleanup defined
- [x] Confirm round sequence is complete — no missing steps between start-of-round and end-of-round
- [x] Write a concise "round at a glance" reference box

---

## Phase 2: Combat Resolution

Finalize the combat resolution loop (to-hit, St/T modifiers, defense target, step-by-step example).

- [x] Strike Pool = Mt + Lk + weapon modifiers
- [x] To-hit: d6 + CC ≥ 8 (melee) / d6 + RC ≥ 8 (ranged)
- [x] Criticals from weapon triangle advantage (natural 6s)
- [x] Defense pool: base 1R + 1B, +dice from Mt/Lk comparison, +armor
- [x] 2:1 crossover blocking
- [x] Wound application → Downed → Stunned → OOA
- [x] Full worked combat example in combat.md
- [x] Define armor values for at least light/medium/heavy tiers
- [x] Confirm ranged/magic crit rules (pairs of 6s? single 6s? sniper exception?)
- [x] Decide if melee defenders get a free counter-attack (playtest note in combat.md) — **No.** Melee is one-directional.

---

## Phase 3: Playtest Weapon List

Create a small playtest weapon list covering the weapon triangle + ranged + firearms.

- [x] At least one Sword, one Axe, one Spear (melee triangle)
- [x] At least one Bow/Crossbow (ranged, Lk-based)
- [x] At least one Firearm (crits vs all targets)
- [x] Define +Mt / +Lk / range / any special traits per weapon
- [x] Create weapon table in `rules/weapons.md`

---

## Phase 4: Playtest Spell List

Write 2–3 spells per magic class relevant to Silver Hunt and Nightpack.

- [ ] Determine which magic classes Silver Hunt and Nightpack use
- [ ] Write 2–3 spells per relevant class (casting value, effect, Mishap)
- [ ] Include at least one ranged damage spell per class (Arcane Bolt equivalent)
- [ ] Finalize casting mechanic details (2d6 vs target number, Mishap on double 1s — confirm)
- [ ] Decide on status effects / afflictions (Enfeebled, Weakened, TBD Infernal)

---

## Phase 5a: Faction Mechanical Identity

Define mechanical identity for all 12 factions (special rule, magic alignment, composition).

- [ ] Assign magic class alignment per faction (Arcane Conclave → Arcane, Infernal Pact → Infernal, etc.)
- [ ] Define one signature special rule per faction
- [ ] Define composition archetype (elite, horde, balanced, etc.)
- [ ] Decide if factions have exclusive weapons or unit types
- [ ] Decide if factions have campaign-level mechanics (reputation, alliances, rivalries)

### Faction Checklist

| Faction | Magic | Special Rule | Composition | Status |
|---|---|---|---|---|
| Phoenix Guard | | | | |
| Radiant Crusade | | | | |
| Inquisition | | | | |
| Silver Hunt | | | | |
| Arcane Conclave | | | | |
| Village Watch | | | Horde | |
| Iron Law | | | | |
| Coven | | | | |
| Nightpack | | | | |
| Grave Wardens | | | | |
| Nobility | | | | |
| Infernal Pact | | | | |

---

## Phase 5b: Playtest Rosters

Build full playtest rosters for Silver Hunt and Nightpack.

- [ ] Define fighter types per warband (leader, heroes, henchmen)
- [ ] Assign stat lines (based on species baselines + faction adjustments)
- [ ] Assign weapons and equipment from Phase 3 list
- [ ] Assign spells from Phase 4 list (if applicable)
- [ ] Set warband size / point budget (or fixed roster for first test)
- [ ] Calculate total warband cost and verify balance parity

---

## Phase 6: Playtest Scenario

Write one complete scenario with deployment, terrain, and win conditions.

- [ ] Define board size and terrain assumptions
- [ ] Write deployment zones
- [ ] Write victory conditions (relic fragments, kill count, control, escape, etc.)
- [ ] Define round limit or end-of-game trigger
- [ ] Include any scenario-specific special rules
- [ ] Determine how exploration / relic fragments interact with first-playtest progression

---

## Phase 7: Fighter Cards & Roster Sheet

Create fighter card template and warband roster sheet.

- [ ] Design fighter card layout (stats, weapons, spells, wounds, conditions)
- [ ] Create printable card template with cut marks
- [ ] Design warband roster sheet (fighter list, equipment, fragments, currency)
- [ ] Decide on templating / layout tool

---

## Phase 8: Solo Dry Run

Solo dry run and rules-gap notes.

- [ ] Play through at least one full game solo
- [ ] Note any ambiguous or missing rules
- [ ] Note any pacing or feel issues
- [ ] Record balance observations (too lethal? too slow? one-sided?)
- [ ] Update rules files with fixes

---

## Additional Items

Things identified across the design docs that don't fit neatly into one phase.

### Open Design Decisions

- [ ] **Setting scope:** Broad cursed-land Noctvale vs. single-castle betrayal setting — this affects scenarios, exploration, economy flavor, and faction framing
- [ ] **Castle pivot implications:** If the game takes place in a single castle, exploration becomes castle-zone exploration; factions represent forces trapped inside or rushing to exploit the betrayal; relic fragments could become keys, blood seals, royal edicts, sacred brands, etc.
- [ ] **Warband building system:** Points-based, fixed lists (Spearhead-style), or constrained draft?
- [ ] **Campaign injury / advancement system:** Post-game consequences for Out of Action fighters (injuries, death, stat gains) — referenced in conditions.md but not yet written
- [ ] **Exploration location tables:** Discovery tables per location type (Ruins, Chapel, Abandoned Village, Hidden Grove, Ancient Road, Graveyard) — referenced in exploration.md but not yet written
- [ ] **Relic fragment spending:** What can fragments be spent on beyond selling? (crafting, upgrades, relic assembly)
- [ ] **Territory / campaign layer:** Duchies/holdings, feeding costs by warband size, territory exchange minigame
- [x] **Weapon triangle in melee:** Confirmed — the triangle applies only when a fighter is the **attacker**. The defender's weapon type doesn't matter until their own activation, when they become the attacker and gain their own weapon triangle crits

### Infernal Summoning

Daemons are pre-game summons exclusive to the Infernal domain. Three tiers: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid). The summoning table (1d6) determines what appears, then a second roll determines the specific variant.

- [ ] Decide variant table size per tier (d6 vs d66 — fewer variants = fewer models to own)
- [ ] Decide if variants are mechanically distinct stat lines or cosmetic with minor trait swaps
- [ ] Confirm all daemons share a "Daemon" keyword (for Radiant Strike +1 Mt vs Daemons)
- [ ] Decide if Imp wings have a mechanical fly rule or are visual only
- [ ] Decide how many summon rolls a warband gets (caster count? fixed? points budget?)
- [ ] Design the 6 in-game Infernal spells (summoning is pre-game, so all slots are open)

### Hunter Subtype Design

Potential specialization within hunter factions (from factions.md):

- Witch Hunters — no magic; guns and technology
- Vampire Hunters — stakes, crossbows, Light magic
- Werewolf Hunters — silver, metallurgy

### Tools & Production

- Printable cards with cut marks
- Templating and layout automation
- Markdown file source of truth for game design

### External Game Reference

Games relevant to Noctvale design decisions:

| Game | Relevance |
|---|---|
| Mordheim | Campaign skirmish, injuries, exploration, warband progression, gothic city tone |
| Necromunda | Campaign gang progression, post-battle economy, injury, equipment depth |
| Warcry | Compact alternating activation, fast melee resolution, simple profiles |
| Kill Team | Alternating activations, melee attack/parry decisions, action economy |
| Warhammer 40k 2nd Ed. | Emergent play, war-as-simulation, wild vehicle/weapon outcomes |
| Age of Sigmar | Modern stat and rend vocabulary, Spearhead-style simplification and underdog mechanisms |
| Space Hulk | Overwatch tension, jamming, simple inputs with crunchy outputs |
| Bolt Action | Dice bag activation comparison point |
| Star Wars Legion | Alternating activation example |
| Kings of War | Mass battle where units remain intact until removed |
| WH Underworlds / Combat Patrol / Spearhead | Fixed-list or constrained-list comparison points |
| OSR RPGs | Old-school feel, danger, emergent stories, streamlined modern presentation |
