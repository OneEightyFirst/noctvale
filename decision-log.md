# Decision Log

Decisions made during design, with reasoning. Newest entries at the top.

---

## 2026-05-28 — Retinue (replaces warband)

**Decision:** The player's list-for-a-fight is called a **retinue**, not a warband. **Faction** remains the named Archetype + Domain identity (Phoenix Guard, etc.). Lore for Nightpack no longer says werebeasts "formed warbands/retinues" — they **became what is now called The Nightpack**. Terminology updated across rules, campaign, factions, README, and `_overview.md`.

**Reasoning:** Warband reads too Mordheim/Viking; retinue fits gothic post-imperial leaders with followers and relic-hunting expeditions.

---

## 2026-05-28 — Intervening fighters

**Decision:** Friendly retinue members do not block LoS; fighters may move through friendlies (not end on their bases). **Friendly in the line of fire:** for **Cast** with firearms or damage spells only, if a friendly lies between attacker and declared target and the attack misses (gate passed, target took no wounds; not Mishap/Misfire), roll 1d6 — on 1, resolve 1 hit on the closest intervening friendly. **Clustered enemies:** when declaring a **Ranged** or **Cast** target, if other enemies from the same retinue are within 1" of the declared target, Sk check (d6 + Sk ≥ 8); on fail, retarget the sole other fighter or random choice among all within 1".

**Reasoning:** Friendlies are not terrain. Firearms and magic wild shots punish careless lanes. Clustered retinues reflect firing into a mob without full competitive targeting rules.

---

## 2026-05-28 — Line of sight and cover (simplified)

**Decision:** Dropped percentage bands. **Line of sight:** from the firing fighter's PoV, if you can see the target (body on/above base, ignore past-base overhang), you have LoS; otherwise not a valid **Ranged** or **Cast** target. **Cover:** if any intervening terrain lies between shooter and target and is **more than 1" from the firing fighter**, +1 blue defense die (unchanged effect).

**Reasoning:** Faster narrative adjudication than 25/90% eyeballing. The 1" exclusion stops hugging a wall from granting cover on shots where the shooter is flush against their own terrain.

---

## 2026-05-28 — Line of sight and cover (terrain bands) — superseded

**Decision:** Replaced the two-sentence LoS rule and “more than half obscured = cover” with a single **terrain-only** visibility check from the **firing fighter’s point of view**. Target silhouette is the body on and above the base; parts past the base edge are ignored. **Less than 25%** obscured by intervening terrain = in the open; **25%–90%** = in cover (+1 blue defense die); **more than 90%** = no line of sight for Ranged or Cast. **Ranged** and **Cast** (enemy targets) now explicitly require line of sight in `actions.md`.

**Reasoning:** Percentage bands avoid “sliver visible” arguments while staying narrative (no Kill Team cover lines). Terrain-only keeps fighter blocking and smoke on separate rules. Cover effect unchanged (+1 blue defense die).

---

## 2026-05-27 — Bone Circle (Necromancy) — first trap spell

**Decision:** Added Bone Circle as Necromancy's 6th spell, completing the domain. Bone Circle is the game's first **trap spell** — a persistent damage zone that triggers on any model that starts their activation in it, ends their activation in it, or moves through it.

**Bone Circle:** Choose a point within 12". Place a 3" blast template. Any model in the zone takes a 1 Mt / 3 Sk hit (defense applies normally). Affects friends and enemies. Lasts until the start of the caster's next activation. Mishap: zone centers on the caster.

**Reasoning:** Area denial through persistent damage is a new mechanic — no other spell does this. Distinct from Cursed Ground (immediate debuff zone with -1 M and a one-time Sk check) because Bone Circle triggers repeatedly on movement. Creates tactical decisions: do you walk through and eat the hit, or spend actions going around?

**Necromancy is now complete (freebie + 6):** Deathbolt, Summon Skeleton, Raise Dead, Cursed Ground, Wither, Bone Blast, Bone Circle.

**Open:** Infernal is the last domain with no spells.

---

## 2026-05-26 — Arcane, Nature, and Necromancy spell lists

**Arcane — complete (freebie + 6):**
Arcane is raw magical mastery — precision, control, energy manipulation. Three damage spells (Arcane Bolt, Fireball, Arcane Barrage), three utility/control (Arcane Shield, Telekinesis, Displacement, Slow).

New spells:
- **Fireball** — Large blast, 18". Three outcomes: pass = on target, normal fail = scatters (scatter die + d6"), Mishap (double 1s) = blast centers on caster. Matches existing bomb scatter mechanics.
- **Telekinesis** — Move any model 6" directly toward or away from caster. No target check.
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
- **Bone Blast** — Blast centered on caster, 1 Mt / 4 Sk hit to all models except caster. Bone shrapnel — mostly blue dice. Mirror of Light's Purge the Faithless (self-centered AoE) with inverted dice profile.
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
- **Design intent:** The vampire chooses to step into darkness — it's a self-buff, not an enemy lockdown. The darkness cuts both ways (no friendly ranged/spells can help either). Pairs with Enthrall (pull enemies into engagement) and Predator's Grace (close distance before darkness drops). Targets friendly Blood domain models specifically, not just any friendly fighter.

**Reasoning:** Both spells use shadow but from opposite directions — Nature hides in it (defensive), Blood fights in it (aggressive). Nightfall targets friendly Blood domain fighters specifically to prevent it from being used as a ranged shutdown tool against enemies.

**Ripple effect:** "Touching terrain" replaced with "within 1" of terrain" globally in Hidden rules (actions.md) for clarity.

**Open questions:**
- Casting difficulties not yet assigned for either spell.
- Nightfall's bubble size — is it just the model's base, or does it extend outward? Current read is model-only (1" engagement range defines the "inside").

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

**Decision:** Normal retinue size is 5–10 models. Absolute maximum ~20, more realistically ~15. These are targets, not hard rules yet.

**Fighter tiers:** 4 levels — Leader, Caster/Special, Champion, Troop. Archetype determines how many of each you can bring. Cult gets 3 max casters; all other archetypes get 1.

**Edge case noted:** An Infernal Cult retinue with 3 casters could theoretically summon enough Imps (post-alpha summoning system) to hit the upper bound if everything goes right. Even in that extreme, the cap should stay around 20 models on the table.

**Status:** Bounds not yet defined. Needs roster-building rules.

---

## 2026-05-19 — Sanity mechanics (Fear, Panic, Insanity)

**Decision:** Three tiers of Sanity effects, all tested with d6 + Sa >= 8:

- **Fear** — Cannot move closer to the source for the rest of your turn.
- **Panic** — Cannot move closer + must spend at least 1 action moving full movement away from source.
- **Insanity** — Roll on the Insanity Table (1d6): 1=attack closest model (opponent chooses, not the source), 2–3=move toward nearest board edge (both actions), 4–5=freeze (both actions spent), 6=berserk (charge/shoot source with +2 Mt / +1 Sk, -1 to hit).

**Test timing:** Triggers when a fighter activates within range + LoS of the source, or when charging/charged (melee variant). Default range is 6" + LoS unless the model/spell specifies otherwise.

**Pass:** Immune to that specific source for the rest of the game.

**Fail:** Effect applies. At the start of the fighter's next activation, test again before acting. Pass = act normally. Fail = effect repeats.

**Fear/Panic/Insanity are keywords on specific models and spells, not domain-wide traits.** Not all models in a domain cause fear — it's per profile.

**Fearless** keyword grants immunity to all three.

**Domain tendencies (not rules):**
- Blood, Necromancy, Infernal — more likely to have fear-causing models
- Light — fear against Blood, Necromancy, Infernal
- Nature, Arcane — some fear-causing models
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
- **Holy Light** — 7+, 12" from caster, strips cover and Hidden condition from all models in range. Reveal/utility spell, not damage.
- **Heal** — 6+, 1" range, restore 1 wound + improve wound state by one step. Mishap: deal 1 wound to target instead.
- **AoE attack (unnamed)** — 7+, +3 Mt / +1 Sk, 3" blast from caster, hits all models in radius. Mishap: caster takes the damage.
- 2 slots remaining (TBD).

**Reasoning:** 7+ is the standard Light difficulty. The AoE attack at 7+ with +3 Mt / +1 Sk is justified by the caster needing to be surrounded by enemies to use it — positional risk compensates for multi-target value. Heal at 6+ is the easiest spell, justified by 1" touch range and the caster spending their activation on support.

---

## 2026-05-19 — Infernal daemon tiers

**Decision:** Three tiers of daemons: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid).

**Reasoning:** Covers small/expendable, mid-tier/versatile, and large/heavy hitter archetypes. Names are gothic without being grandiose. The categories are a mortal classification imposed on chaotic entities — not a strict taxonomy.

---

## 2026-05-19 — Daemons recruited normally for alpha

**Decision:** For the alpha version, daemons are recruited like any other retinue member. Pre-game summoning tables (1d6 to determine tier, then variant roll) are deferred to post-alpha.

**Reasoning:** Summoning tables add complexity and require players to own extra models. Better to get the core game working first and layer summoning on later. Community feedback on random roster tolerance is pending.

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
