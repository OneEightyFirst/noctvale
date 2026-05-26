# Sanity

---

## Sanity Test

When a Sanity test is required, roll **d6 + Sa ≥ 8**.

- A natural **1** always fails.
- A natural **6** always succeeds.

---

## Fear, Panic, and Insanity

Certain models and spells carry the **Fear**, **Panic**, or **Insanity** keyword. When a fighter activates within range and line of sight of such a source, they must pass a Sanity test.

### Default Range

The default trigger range is **6" + line of sight**. Models and spells may specify a different range or restrict the trigger to **melee only** (charging or being charged).

### Keyword Format

- `Fear` — Fear (6", LoS), the default
- `Fear (melee)` — only when charging or charged
- `Fear (12")` — extended range
- Same format for `Panic` and `Insanity`

### Pass

The fighter is **immune to that specific source** for the rest of the game. They do not test against it again.

### Fail

The effect applies immediately (see below). At the **start of the fighter's next activation**, before spending any actions, they test again:

- **Pass:** Act normally this turn.
- **Fail:** The effect applies again.

This repeats each activation until the fighter passes or the source is removed.

---

## Fear

Cannot move **closer to the source** of fear for the rest of your turn. The fighter may still act otherwise — shoot, fight if already engaged, cast spells, retreat, etc.

---

## Panic

Cannot move **closer to the source** of fear. In addition, the fighter must spend **at least 1 action** moving their full movement **directly away** from the source.

---

## Insanity

Roll on the **Insanity Table (1d6)**:

- 1 — **Frenzy:** Attack the closest model (chosen by your opponent). It cannot be the source of the Insanity.
- 2–3 — **Flee:** Spend both actions moving toward the nearest board edge.
- 4–5 — **Freeze:** Both actions are spent. The fighter does nothing.
- 6 — **Berserk:** The fighter snaps. If their primary weapon is melee, they charge the source of the Insanity with **+2 Mt** and **+1 Sk** but **-1 to hit**. If their primary weapon is ranged, they spend both actions firing at the source with **-1 to hit**.

---

## Fearless

A fighter with the **Fearless** keyword is immune to Fear, Panic, and Insanity. They never test and are never affected.

---

## Design Notes

- Fear/Panic/Insanity are keywords assigned to specific models and spells, not domain-wide traits — a vampire lord might cause Fear, but the thralls in the same warband do not
- The three tiers escalate in consequence (hesitation → retreat → loss of control) but do not chain into each other — a model causes Fear OR Panic OR Insanity, not a progression
- Pass-once-per-source means a brave fighter who holds their nerve is done worrying, while a fighter who fails is stuck testing each turn — creating tension without endless dice rolling against models you've already faced down
- The Insanity table is weighted toward the middle: Freeze (4–5) is the most common result, Frenzy (1) and Berserk (6) are rare extremes
- Berserk is intentionally not entirely bad — "so scared you snap and fight like a cornered animal" is more interesting than all-negative outcomes
- 6" default range keeps fear as a close-quarters threat, not something that locks down the whole board
- Fearless as a keyword gives None domain warbands a unique defensive advantage against magic-heavy opponents, compensating for their lack of spells
- Sa 3 baseline means d6 + 3 ≥ 8, so fighters need a 5+ to pass (~33% chance). Fear effects are genuinely threatening at baseline stats
