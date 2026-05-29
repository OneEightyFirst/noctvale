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

- [x] Strike Pool = Mt + Sk + weapon modifiers
- [x] To-hit: d6 + CC ≥ 8 (melee) / d6 + RC ≥ 8 (ranged)
- [x] Criticals from weapon triangle advantage (natural 6s)
- [x] Defense pool: base 1R + 1B, +dice from Mt/Sk comparison, +armor
- [x] 2:1 crossover blocking
- [x] Wound application → Downed → Stunned → OOA
- [x] Full worked combat example in combat.md
- [x] Define armor values for at least light/medium/heavy tiers
- [x] Confirm ranged/magic crit rules (pairs of 6s? single 6s? sniper exception?)
- [x] Decide if melee defenders get a free counter-attack (playtest note in combat.md) — **No.** Melee is one-directional.

---

## Phase 2b: Line of Sight, Cover & Targeting

Rules in `rules/special-rules.md`; cross-refs in `actions.md` and `combat.md`.

- [x] Line of sight: visible-or-not from firing fighter's PoV; ignore past-base overhang
- [x] Cover: any intervening terrain between shooter and target (terrain >1" from shooter) → +1 blue defense die
- [x] Ranged and Cast require line of sight to enemy targets
- [x] Friendly fighters: do not block LoS; may move through friendlies (not end on their bases)
- [x] Friendly in the line of fire: firearms and damage spells only; on miss, 1d6 → 1 hits intervening friendly
- [x] Clustered enemies: same-retinue models within 1" of declared target → Sk check or retarget
- [x] Enemy fighters block line of sight normally
- [ ] Smoke / other LoS-blocking effects — smoke in `weapons.md`; confirm no gaps vs terrain rules
- [ ] Dedicated rules for enemy models blocking shots (beyond LoS) if playtest shows gaps

---

## Phase 3: Playtest Weapon List

Create a small playtest weapon list covering the weapon triangle + ranged + firearms.

- [x] At least one Sword, one Axe, one Spear (melee triangle)
- [x] At least one Bow/Crossbow (ranged, Sk-based)
- [x] At least one Firearm (crits vs all targets)
- [x] Define +Mt / +Sk / range / any special traits per weapon
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

## Phase 5b: Archetype & Domain Skills

Define skill lists for each archetype and each domain. Skills are the primary mechanical differentiation layer — archetypes define how a retinue fights, domains define what supernatural tools they bring, and skills make those choices feel distinct on the table.

- [ ] Write **Tradition** skill lists (one package per Tradition per Domain where it is shared — e.g. Witches on Nature vs Arcane)
- [ ] Decide skill structure (passive abilities, activated abilities, or both)
- [ ] Decide how skills are acquired (built into fighter type, purchased with XP, chosen at retinue creation, etc.)
- [ ] Decide skill count per list (e.g., 6 per archetype, 6 per domain)
- [ ] Write Archetype skill lists:
  - [ ] Knights
  - [ ] Hunters
  - [ ] Folk
  - [ ] Cult
- [ ] Write Domain skill lists:
  - [ ] Light
  - [ ] Arcane
  - [ ] Infernal
  - [ ] Nature
  - [ ] Necromancy
  - [ ] Blood
  - [ ] None
- [ ] Decide if named factions get 1–2 exclusive faction skills on top of archetype + domain skills
- [ ] Confirm skills don't duplicate or conflict with spells, equipment, or special rules

---

## Phase 5c: Playtest Rosters

Build full playtest rosters for Silver Hunt and Nightpack.

- [x] Define fighter types per retinue (Leader, Caster/Special, Champion, Troop — see `rules/retinue-building.md`)
- [ ] Assign stat lines (based on species baselines + faction adjustments)
- [ ] Assign weapons and equipment from Phase 3 list
- [ ] Assign spells from Phase 4 list (if applicable)
- [ ] Assign skills from Phase 5b lists
- [x] Set retinue size / point budget — **1000 Crowns**, composition limits per Archetype (`rules/retinue-building.md`)
- [ ] Calculate total retinue cost and verify balance parity

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

Create fighter card template and retinue roster sheet.

- [ ] Design fighter card layout (stats, weapons, spells, skills, wounds, conditions)
- [ ] Create printable card template with cut marks
- [ ] Design retinue roster sheet (fighter list, equipment, fragments, currency)
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

### Terminology

- [x] **Retinue** replaces **warband** as the player's list-for-a-fight; **Faction** remains Archetype + Domain (see decision log 2026-05-28)

### Open Design Decisions

- [x] **Retinue building system:** Constrained points — 1000 Crown budget + Archetype composition limits (`rules/retinue-building.md`)
- [x] **Species costing:** Elf and Dwarf +10 Crowns over Human baseline
- [ ] **Campaign injury / advancement system:** Alpha charts in `campaign/post-game.md` — tune XP earn/spend rates after playtest
- [ ] **Exploration location tables:** Ruins done; Chapel, Abandoned Village, Hidden Grove, Ancient Road, Graveyard — discovery charts TBD (`campaign/exploration.md`)
- [ ] **Relic fragment spending:** What can fragments be spent on beyond selling? (crafting, upgrades, relic assembly)
- [ ] **Territory / campaign layer:** Duchies/holdings, feeding costs by retinue size, territory exchange minigame
- [ ] **Death trigger mechanic:** Something that happens in-game when a fighter goes Out of Action — morale cascade (Sa tests for nearby allies), environmental reaction (cursed land responds to death), factional payoff (Necromancy/Blood benefit from kills), death rattle (dying fighter gets a final effect), or some combination
- [x] **Weapon triangle in melee:** Confirmed — the triangle applies only when a fighter is the **attacker**. The defender's weapon type doesn't matter until their own activation, when they become the attacker and gain their own weapon triangle crits

### Infernal Summoning (post-alpha)

Daemons are pre-game summons exclusive to the Infernal domain. Three tiers: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid). The summoning table (1d6) determines what appears, then a second roll determines the specific variant. **For alpha, daemons are recruited like any other retinue member — summoning tables are a post-alpha feature.**

- [ ] Decide variant table size per tier (d6 vs d66 — fewer variants = fewer models to own)
- [ ] Decide if variants are mechanically distinct stat lines or cosmetic with minor trait swaps
- [ ] Confirm all daemons share a "Daemon" keyword (for Radiant Strike +1 Mt vs Daemons)
- [ ] Decide if Imp wings have a mechanical fly rule or are visual only
- [ ] Decide how many summon rolls a retinue gets (caster count? fixed? points budget?)
- [ ] Design the 6 in-game Infernal spells (summoning is pre-game, so all slots are open)

### Hunter Subtype Design

Potential specialization within hunter presets (from `rules/retinue.md`):

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
| [Last Days: Zombie Apocalypse](#last-days-zombie-apocalypse) | Keyword = group cohesion; Leader sets composition; skill types gate level-ups; campaign loop (XP → stat or skill); Scavenge Points + Refuge |

#### Last Days: Zombie Apocalypse

*Ash Barker, Osprey Games (2018). Original homebrew ~2009 — **not** a port of Frostgrave, Necromunda, or Chain Reaction.*

**Rules engine:** Own system. d6 + stat vs target (7+ to hit shooting); opposed d6 melee; action points per model; five-phase turn (Menace → Action → Shooting → CQC → End). Familiar skirmish ingredients, but the campaign + group-building layer is bespoke.

**Design influences** (per author/reviews): Mordheim/Necromunda-style campaign progression; refuge upgrades; post-game chart loops reminiscent of Warhammer Quest; AP phase structure compared to Wreck Age / Relicblade.

**Leveling system (worth stealing ideas from):**

| Step | Last Days |
|---|---|
| Levels | 0–10 per character |
| Earn XP | Survive encounter, kill zombies/opponents, scenario goals |
| On advancement | Spend XP: **2** (skill/keyword) or **5** (stat); roll chart; optional Fragment nudge |
| Stat raise | Roll on random stat table → spend **banked XP** to nudge/modify the result |
| Skill gain | Pick one of the fighter's **Skill Types** (5 groups × 6 skills = 30 skills) → roll on that table → spend XP to nudge |
| Skill Types | Eligibility lists on each character archetype — not powers themselves |
| Starting skills | Pregen archetypes have fixed packages; **Survivor** type lets you pick starting skills (custom build within keyword rules) |
| Between games | Injury table, supply loot → Scavenge Points, recruit, refuge jobs/upgrades, **The Talk** (convert mismatched keyword to Leader's) |

**Noctvale hooks:** Spend XP bank (no levels) — Skill/Keyword **2 XP**, Stat **5 XP**; Fragment nudge 1 or 2. Caster keyword via Keyword chart when eligible.

**Caveat:** Reviews note spending XP to nudge makes **stat bumps often outperform** narrow skills — tune carefully if we use random tables.
