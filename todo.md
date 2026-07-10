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
- [x] Full worked combat example in `rules/core-rules.md#combat`
- [x] Define armor values for at least light/medium/heavy tiers
- [x] Confirm ranged/magic crit rules (pairs of 6s? single 6s? sniper exception?)
- [x] Decide if melee defenders get a free counter-attack (playtest note in `rules/core-rules.md#combat`) — **No.** Melee is one-directional.

---

## Phase 2b: Line of Sight, Cover & Targeting

Rules in `rules/core-rules.md#standard-battle-set-up`; cross-refs in the action and combat sections of `rules/core-rules.md`.

- [x] Line of sight: visible-or-not from firing fighter's PoV; ignore past-base overhang
- [x] Cover: any intervening terrain between shooter and target (terrain >1" from shooter) → +1 Skill defense die
- [x] Ranged and Cast require line of sight to enemy targets
- [x] Friendly fighters: do not block LoS; may move through friendlies (not end on their bases)
- [x] Friendly in the line of fire: firearms and damage spells only; on miss, 1d6 → 1 hits intervening friendly
- [x] Clustered enemies: same-retinue fighters within 1" of declared target → Sk check or retarget
- [x] Enemy fighters block line of sight normally
- [ ] **Cover tiers at terrain contact** — Decide whether base contact with terrain grants cover or better cover, and define when the terrain must be between attacker and target.
- [ ] **Smoke / LoS cross-ref** — Smoke rules live in `rules/equipment.md`; confirm no gaps vs `rules/core-rules.md#standard-battle-set-up`.
- [ ] Dedicated rules for enemy fighters blocking shots (beyond LoS) if playtest shows gaps

---

## Phase 3: Playtest Weapon List

Create a small playtest weapon list covering the weapon triangle + ranged + firearms.

- [x] At least one Sword, one Axe, one Spear (melee triangle)
- [x] At least one Bow/Crossbow (ranged, Sk-based)
- [x] At least one Firearm (crits vs all targets)
- [x] Define +Mt / +Sk / range / any special traits per weapon
- [x] Create weapon table in `rules/equipment.md`

---

## Phase 4: Spell & Magic TBD Cleanup

Finish remaining spell gaps in `rules/retinue.md#magic` and sync builder data.
Silver Hunt is **Mortal** (no spells); Nightpack is **Nature** (full domain list).
Casting (**2d6 + Casting attribute**, Mishap on double 1s) and core afflictions are
locked in `rules/core-rules.md`.

Resolve the remaining `TBD` items that players can see in the app and the rules
files used to generate the static rules pages, in priority order.

- [ ] Sync the app spell picker data in `app/src/data/noctvale.js` to canonical rules values where the rules now have difficulty, range, Mt, Sk, or Mishap values.
- [ ] Finish the Infernal spell list — **Hellfire** is the standard attack spell; three spell slots and **Summon Daemon** binding limits still TBD.
- [ ] Set the **Summoning Crystal** Crown cost in `rules/equipment.md`.
- [ ] Write the **Vampire** ability list for the **Vampires** Tradition.
- [ ] Set **Bone Blast** Mishap (last Blood spell gap).
- [ ] Name the Infernal magic affliction in `background-notes.md` *(design context only — not player-facing)*.
- [x] Domain × Archetype × Tradition table (`rules/retinue.md#domains`).

---

## Phase 5b: Archetype & Domain Feats

Define feat lists for each archetype and each domain. Feats are the primary mechanical differentiation layer — archetypes define how a retinue fights, domains define what supernatural tools they bring, and feats make those choices feel distinct on the table.

- [x] Write **Tradition** special rules (one retinue-wide rule per Tradition)
- [x] Decide feat structure (passive abilities, activated abilities, or both)
- [x] Decide how feats are acquired (creation picks + **Proficiency**; campaign **Feat** spend at **3 XP**)
- [x] Decide feat count per list (**5** per archetype and domain — see `rules/retinue.md#feats`)
- [x] Write Archetype feat lists (Knights, Hunters, Folk, Cult)
- [x] Write Domain feat lists (Light, Arcane, Infernal, Nature, Necromancy, Blood, Mortal)
- [x] Named factions are lore/example presets only; they do not grant exclusive feats, equipment, or rules
- [ ] **Feat guardrail pass** — Audit lists against design guardrails: no broad permanent +1 to-hit, extra full actions, reusable rerolls, or spell-feats without a **casting roll**; no feat may require another named feat (see decision-log Ideas history).
- [ ] Confirm feats don't duplicate or conflict with spells, equipment, or special rules

---

## Phase 5a: Archetype rulebook chapters

Restructure `rules/retinue.md#archetype-chapters` for rulebook readability (Mordheim warband style).

- [x] Archetype chapters in `rules/retinue.md` (Knights, Hunters, Folk, Cult)
- [x] **Role** terminology — **Leader** / **Elite** / **Specialist** / **Rank** (not *class*; see decision log 2026-06-21)
- [x] Restructure recruit section: one heading per fighter type, species profile table (M through W + Cost), prose for slot limits — **all four archetype chapters** (`rules/retinue.md#archetype-chapters`)
- [x] Propagate new leader/caster/spell rules to `rules/retinue.md` and `rules/campaign.md#post-game-sequence`
- [ ] Reduce gratuitous tables — fighter count, archetype access, and similar as short prose where a table adds no scan value

---

## Phase 5c: Playtest Rosters

Build full playtest rosters for Silver Hunt and Nightpack.

- [x] Define fighter roles per archetype (**Leader**, **Elite**, **Specialist**, **Rank** — see `rules/retinue.md#building-a-retinue`)
- [ ] Assign attribute profiles (based on ancestry baselines + faction adjustments)
- [ ] Assign weapons and equipment from Phase 3 list
- [ ] Assign Domain spells where applicable (Nightpack: **Nature**; Silver Hunt: **Mortal**, no caster)
- [ ] Assign feats from Phase 5b lists
- [x] Set retinue size / point budget — **1000 Crowns**, composition limits per Archetype (`rules/retinue.md#building-a-retinue`)
- [ ] Calculate total retinue cost and verify balance parity

---

## Phase 6: Playtest Scenario

Write one complete scenario with deployment, terrain, and win conditions.

- [x] Define board size and terrain assumptions
- [x] Write deployment zones
- [x] Write victory conditions (Relics, kill count, control, escape, etc.)
- [x] Define round limit or end-of-game trigger
- [x] Include any scenario-specific special rules
- [x] Determine how Survival Rolls / Relics interact with first-playtest progression
- [ ] **Battlefield effects table** — Dig into scenario battlefield effects as an optional **d66** table, including hostile monsters, zombies, animals, and other neutral or environmental complications. Cross-check creature-profile needs against `rules/profiles.md`.

### Scenario concept: There's a Reason They Have a Horn

- [x] Both retinues are trying to bring down and harvest the unicorn
- [x] The unicorn is a deadly creature, not just an objective marker
- [x] Battlefield: a clearing in the middle of a forest, with scattered buildings around the edge
- [ ] Playtest and tune the unicorn profile, Horn token flow, and rewards in `rules/campaign.md` (There's a Reason They Have a Horn)

---

## Phase 7: Fighter Cards & Roster Sheet

Create fighter card template and retinue roster sheet.

- [ ] Design fighter card layout (attributes, weapons, spells, feats, wounds, conditions)
- [ ] Design retinue roster sheet (fighter list, equipment, Relics, currency)
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

### Post-playtest discussion with Seth (2026-07-09)

From the first live playtest debrief. Overall signal: the game was fun, less sloppy
than expected, and felt like a real playable prototype; the follow-ups below are the
main systems to test or revise before broadening playtest.

- [ ] **High-impact action economy** — Review whether firearms, damage spells, and similar high-impact actions should cost both actions, require **Priming** as a separate action, or be limited to once per activation. Confirm how **Overwatch** interacts with primed attacks.
- [ ] **Weapon triangle and tie handling** — Test whether the weapon triangle should break tied attack results, what happens when the triangle does not apply, whether the attacker wins ordinary ties, and whether shields should make the defender win ties.
- [ ] **Opposed-roll combat feel** — Explore whether "my dice against your dice" makes attacks feel more interactive without forcing a full armor and attribute rewrite.
- [ ] **Armor and shield identity** — Revisit armor without adding large raw dice pools or flat +1 modifiers. Test penalty-based armor hooks such as reduced **Movement** or **Skill**, and keep shields mechanically distinct from body armor.
- [ ] **Wound-state pacing** — Recheck whether the current **Downed** to **Stunned** progression slows lethality too much. Explore **Stunned** as a parallel condition rather than an extra injury step while preserving "miraculous return" moments for **Downed** fighters.
- [ ] **Strike Pool progression math** — Stress-test 5+ baselines, advancement, the 15-dice cap, and to-hit modifiers so leveled fighters do not collapse into 3+ / 2+ hit rates or pure natural-6 fishing.
- [ ] **Minis-agnostic list-building read** — Preserve the positive signal that Archetype + Domain + Tradition made it easy to map existing miniatures onto Noctvale concepts, such as armored spellcasters or ratfolk-style fighters.
- [ ] **Beastmark flexibility** — Review Beastmark names and mechanics so rat, snake, wolf, bear, and similar marks support beastfolk analogues without making the Tradition feel limited to literal animals.
- [ ] **Companion action clarity** — Confirm where companion action counts and dog-like companion rules are explained in the rules and builder.
- [ ] **Builder quick-reference/search visibility** — Check whether players can find quick reference text and search functions while building a retinue, especially during first-playtest onboarding.

### Pearson technical-writing follow-ups (2026-07-01)

From the Sam Pearson technical rules-writing transcript and the Noctvale scorecard in `reference-sam-pearson-technical-writing.md`.

- [ ] **Standard wording document** — Create a clearer standard wording document for recurring Noctvale phrasing. The style guide does some of this now, but a dedicated wording document should collect canonical examples for common rule shapes.
- [ ] **Precision timing / aura pass** — Review range-plus-duration effects for aura-vs-tag ambiguity. Consider simplifying **Sphere of Influence** terminology to **aura** if that makes the timing and table language cleaner.
- [ ] **Choice-language standardization** — Choose one primary choice verb across the rules. Current preference: lean toward **pick**. Decide where, if anywhere, **choose**, **select**, or **target** remain technically distinct.
- [ ] **Natural English / jargon balance pass** — Lean Noctvale closer to natural English while keeping consistent phrasing for recurring rules. Identify places where compact table shorthand or technical labels make the rules harder to read.
- [ ] **Agency consistency pass** — Decide when rules should give agency to the **player**, **retinue**, or **fighter**. The goal is not universal agency, but a clear rule for when each subject is used.
- [ ] **Dense-rule structure criteria** — Dig into magic, summoning, feats, and scenario procedures to determine when a rule should become bullets, subheads, examples, or diagrams. Define the threshold: ambiguity, multiple effects, conditional branches, hidden edge-case context, or spatial procedure.
- [ ] **Presentation readiness already planned** — Keep this linked to existing roadmap work rather than duplicating it: fighter cards and roster sheet in Phase 7, solo dry run and rules-gap notes in Phase 8, visible TBD cleanup in Phase 4, and combat examples under Rules audit follow-ups.

### Rules audit follow-ups (2026-06-24)

From fresh-eyes rules read-through and designer responses.

- [ ] **Firearm / damage-spell line-of-fire friendly fire** — Rethink whether the current miss → 1d6 → hit intervening friendly rule works in this system; may need a second check. Prior design context: `decision-log.md` (2026-06-23 — Named attribute checks and friendly fire targeting).
- [ ] **Combat edge-case examples** — Add more worked examples like `rules/core-rules.md#example-combat` (Overwatch reactions, Downed recovery, friendly fire, magic triangles, etc.).
- [ ] **Feat placement** — Decide whether archetype feats live in archetype chapters or only in `#feats`, not both.
- [ ] **Capture and ransom** — Post-battle capture effect; ransom cost; heirloom recovery (`Dynasts` mentions capture today with no procedure).
- [ ] **Werebeast vs Beastmen keyword** — Silver / Silversbane target **Werebeast** today; consider **Beastmen** or a gender-neutral beast keyword.
- [ ] **Shadow Market table** — Non-**Alchemists** retinues need a black-market procedure for alchemical weapons and consumables.
- [x] **Daemon profiles** — Imp, Hellion, and Mauler done (`rules/retinue.md`); **Summon Daemon** binding limits still TBD.
- [ ] **Daemon binding procedure** — Flesh out post-game binding attempt, success/failure, and roster limits (currently TBD in **Summon Daemon**).
- [ ] **Summoning Pool campaign advancement** — Post-game progression for crystal pool / permanent daemon binding.
- [ ] **Terrain rules** — Buildings (“inside”), scenario terrain standards *(difficult terrain agreement is in `rules/core-rules.md#difficult-terrain`)*.
- [ ] **Feat Advancement Table** — Replace placeholder in `rules/campaign.md`.

### Campaign layer (from decision-log Ideas)

- [ ] **Mid-campaign Caster** — **Feat** advancement path to gain **Caster** mid-campaign (retired **Keyword Advancement**).
- [ ] **Campaign upkeep** — Decide whether retinue upkeep exists.
- [ ] **Convalescent fighters** — How injured fighters interact with minimum retinue size.
- [ ] **Downtime injury healing** — Whether campaign downtime can heal injuries.

### Terminology

- [x] **Retinue** is the player's list-for-a-fight; **Faction** remains Archetype + Domain (see decision log 2026-05-28)

### Open Design Decisions

- [ ] **Spell table format:** Refine spell entry layout per `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` — column set, Effect/Mishap wording, reminder text on cards
- [x] **Armor/shield defense terminology:** Use **convert** for failed defense dice → success conversion (`rules/equipment.md`, `rules/core-rules.md#combat`)
- [x] **Retinue building system:** Constrained points — 1000 Crown budget + Archetype composition limits (`rules/retinue.md#building-a-retinue`)
- [x] **Species costing:** Elf and Dwarf +10 Crowns over Human baseline
- [x] **Campaign XP scale** — 10-battle campaign; **Feat** **3 XP**, **Attribute** **8 XP**; battle/scenario/post-game earns defined (`rules/campaign.md`; decision log 2026-06-24).
- [ ] **Tune campaign XP** earn/spend rates after first playtest.
- [x] **Weapon access through feats:** **Proficiency** (first feat on each Archetype list; **Firearms** on Mortal Domain list). One-Handed, Two-Handed, Archery (bows + crossbows), Thrown. Feat picks at creation: Leader/Elite 2, Specialist 1 + built-in, Rank 1. See `rules/retinue.md#feats`, `rules/equipment.md`, `rules/retinue.md`.
- [x] **Survival Roll location tables:** Generic, Ruins, Chapel, Abandoned Village, Hidden Grove, Ancient Road, Graveyard added (`rules/campaign.md#survival-rolls`)
- [ ] **Territory / campaign layer:** Duchies/holdings, feeding costs by retinue size, territory exchange minigame
- [x] **Morale system** — Retinues rout when more than half (round down) are **lost**; rout tests at activation start; **Crawl** for **Downed** routers (`rules/core-rules.md#morale`).
- [ ] **Death trigger mechanic:** Something that happens in-game when a fighter goes Out of Action — morale cascade (Sa tests for nearby allies), environmental reaction (cursed land responds to death), factional payoff (Necromancy/Blood benefit from kills), death rattle (dying fighter gets a final effect), or some combination
- [x] **Weapon triangle in melee:** Confirmed — the triangle applies only when a fighter is the **attacker**. The defender's weapon type doesn't matter until their own activation, when they become the attacker and gain their own weapon triangle crits

### Infernal Summoning (post-alpha)

Daemons are pre-game summons exclusive to the Infernal domain. Three tiers: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid). The summoning table (1d6) determines what appears, then a second roll determines the specific variant. **For alpha, daemons are recruited like any other retinue member — summoning tables are a post-alpha feature.**

- [ ] Decide variant table size per tier (d6 vs d66 — fewer variants = fewer fighters to field)
- [ ] Decide if variants are mechanically distinct attribute profiles or cosmetic with minor trait swaps
- [x] Confirm all daemons share a **Daemon** keyword (for Radiant Strike +1 Mt vs Daemons)
- [x] Decide if Imp wings have a mechanical fly rule or are visual only — **Fly** keyword and rule on Imp profile
- [ ] Decide how many summon rolls a retinue gets (caster count? fixed? points budget?)
