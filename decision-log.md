# Decision Log

Decisions made during design, with reasoning. Newest entries at the top.

---

## 2026-05-19 — Wi (Will) stat added, flat spell damage, new casting difficulties

**Decisions:**

1. **New stat: Wi (Will)** added to the stat line between Lk and Sa. Represents the ability to channel supernatural power — works for both divine/spiritual and arcane/intellectual magic.

2. **Casting is now 2d6 + Wi vs difficulty** (was flat 2d6 vs difficulty). Firearms remain flat 2d6 — they're mechanical, not magical.

3. **Baseline Wi is 3** for all species. Casters are expected to have Wi 4 (role-based, not species-based). Non-casters have Wi 3 but can technically attempt spells at reduced odds.

4. **Spell difficulties increased by +4** so that a Wi 4 caster has the same success rates as the old flat 2d6 system:
   - Old 6+ → New 10+ (~72% at Wi 4)
   - Old 7+ → New 11+ (~58% at Wi 4)
   - Old 8+ → New 12+ (~42% at Wi 4)
   - Old 10+ → New 14+ (~17% at Wi 4)

5. **Spell damage is now flat, not additive.** Spells define their own Mt/Lk values as a complete Strike Pool, not as modifiers to the caster's base stats. A spell with 5 Mt always produces 5 red dice regardless of who casts it. Magic power comes from the spell, not the caster's body.

**Reasoning:** Wi as a stat makes caster quality meaningful — a Wi 5 veteran is noticeably better than a Wi 3 novice. Flat spell damage decouples physical and magical identity, so an Elf caster and a Dwarf caster produce the same spell output. Difficulties calibrated to Wi 4 so existing balance math is preserved.

---

## 2026-05-19 — Warband size targets

**Decision:** Normal warband size is 5–10 models. Absolute maximum ~20, more realistically ~15. These are targets, not hard rules yet.

**Fighter tiers:** 4 levels — Leader, Caster/Special, Champion, Troop. Archetype determines how many of each you can bring. Cult gets 3 max casters; all other archetypes get 1.

**Edge case noted:** An Infernal Cult warband with 3 casters could theoretically summon enough Imps (post-alpha summoning system) to hit the upper bound if everything goes right. Even in that extreme, the cap should stay around 20 models on the table.

**Status:** Bounds not yet defined. Needs roster-building rules.

---

## 2026-05-19 — Sanity mechanics (Fear, Panic, Insanity)

**Decision:** Three tiers of Sanity effects, all tested with d6 + Sa >= 8:

- **Fear** — Cannot move closer to the source for the rest of your turn.
- **Panic** — Cannot move closer + must spend at least 1 action moving full movement away from source.
- **Insanity** — Roll on the Insanity Table (1d6): 1=attack closest model (opponent chooses, not the source), 2–3=move toward nearest board edge (both actions), 4–5=freeze (both actions spent), 6=berserk (charge/shoot source with +2 Mt / +1 Lk, -1 to hit).

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
- **AoE attack (unnamed)** — 7+, +3 Mt / +1 Lk, 3" blast from caster, hits all models in radius. Mishap: caster takes the damage.
- 2 slots remaining (TBD).

**Reasoning:** 7+ is the standard Light difficulty. The AoE attack at 7+ with +3 Mt / +1 Lk is justified by the caster needing to be surrounded by enemies to use it — positional risk compensates for multi-target value. Heal at 6+ is the easiest spell, justified by 1" touch range and the caster spending their activation on support.

---

## 2026-05-19 — Infernal daemon tiers

**Decision:** Three tiers of daemons: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid).

**Reasoning:** Covers small/expendable, mid-tier/versatile, and large/heavy hitter archetypes. Names are gothic without being grandiose. The categories are a mortal classification imposed on chaotic entities — not a strict taxonomy.

---

## 2026-05-19 — Daemons recruited normally for alpha

**Decision:** For the alpha version, daemons are recruited like any other warband member. Pre-game summoning tables (1d6 to determine tier, then variant roll) are deferred to post-alpha.

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
