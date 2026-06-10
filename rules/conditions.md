# Conditions

---

## Wound States

Fighters move through three wound states before being removed from play.

```
Active → Downed → Stunned → Out of Action
```

---

## Downed

A fighter reaches **Downed** when they hit 0 Wounds.

**While Downed, a fighter:**
- Cannot attack
- Cannot perform normal actions
- May attempt the **Recover** action
- Retains their **full defense pool** (base 1 red + 1 blue, Mt/Sk comparisons, armor)

Any **unblocked hit** on a Downed fighter pushes them to **Stunned**.

---

## Recover Action

A Downed fighter may spend an action to attempt recovery.

Roll **1d6:**

| Roll | Result |
|---|---|
| 1 | Become **Stunned** |
| 2–3 | Remain **Downed** |
| 4–5 | Stand up with **1 Wound** |
| 6 | Stand up with **1 Wound** + perform one additional action |

---

## Stunned

A fighter becomes **Stunned** from a Recover roll of 1, or from taking an unblocked hit while Downed.

**While Stunned, a fighter:**
- Cannot move
- Cannot act
- Cannot attempt Recover
- Does **not** take an activation — they are excluded from **activation count** and alternating activation order
- Defends with **red dice only** (Mt-based defense, no blue dice)

A fighter who becomes **Stunned** before activating this round does not activate
this round.

Any **unblocked hit** on a Stunned fighter pushes them to **Out of Action**.

A **Mercy Kill** (within 1") bypasses defense entirely — the Stunned fighter is immediately Out of Action.

---

## Out of Action

A fighter is removed from the battle. Resolve post-game consequences in the
[Casualty Table](../campaign/post-game.md#step-2-casualty-table) and
[Doom Table](../campaign/post-game.md#step-3-doom-table).

---

## Help Action

A friendly fighter **within 1"** may spend an action to assist a Downed or Stunned ally.

Roll **1d6:**

| Roll | Result |
|---|---|
| 1 | Fighter goes **Out of Action** |
| 2–3 | No effect |
| 4–5 | Fighter becomes **Downed** (if Stunned) |
| 6 | Fighter stands with **1 Wound** |

---

## Mercy Kill

A fighter **within 1"** of a **Stunned** enemy may perform a Mercy Kill as a Combat action.

The Stunned fighter is immediately **Out of Action** — no defense roll is made.

---

## Afflictions

Afflictions are battle-long debuffs unless a rule sets a shorter duration.

### Poisoned

The fighter suffers **−1 Mt** for the rest of the battle.

### Weakened

The fighter suffers **−1 Mt**, **−1 Sk**, and **−1" M** until the effect that
applied **Weakened** ends. If no duration is given, **Weakened** lasts for the
rest of the battle.

### Enfeebled

The fighter suffers **−1 Mt** and **−1 Sk** until the effect that applied
**Enfeebled** ends. If no duration is given, **Enfeebled** lasts for the rest of
the battle.

### Bleeding

When **Bleeding** is applied, the fighter suffers **1 Wound** immediately.

At the **start of each activation**, roll **Wi check**. **Pass:** remove
**Bleeding**. **Fail:** suffer **1 Wound**.

---

## Design Notes

- Downed creates a dramatic tension window — the fighter still defends at full strength
- Downed → Stunned on any unblocked hit means enemies must commit real attacks to push through a full defense pool
- Stunned fighters lose all blue defense dice — high-Sk fighters like Elves become extremely vulnerable; high-Mt fighters like Dwarves feel the penalty less
- Stunned fighters skip the activation order — no empty activations; allies must **Help** or enemies **Mercy Kill** on someone else's turn
- The Recover table is risk-based: push for a stand-up or accept remaining Downed
- Help has genuine risk (roll of 1 = **Out of Action**) — a meaningful decision with real stakes
- Mercy Kill bypasses defense entirely, giving aggressive players a reliable way to finish Stunned enemies up close
