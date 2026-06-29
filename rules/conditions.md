# Conditions

## Wound States

Fighters move through three Wound states before being removed from play.

```
Active → Downed → Stunned → Out of Action
```

### Active

An **Active** fighter is upright and able to act. **Active** fighters count toward their player's **activation count**.

### Downed

A fighter reaches **Downed** when they hit 0 Wounds.

**While Downed, a fighter:**

- Cannot attack
- Cannot perform normal actions
- May use **Crawl** or attempt the **Recover** action
- Retains their **full defense pool** (Might dice equal to **Might** and Skill dice equal to **Skill**), including eligible bonus dice and armor or shield conversions

Any **unblocked hit** on a Downed fighter pushes them to **Stunned**.

### Stunned

A fighter becomes **Stunned** from a Recover roll of 1, or from taking an unblocked hit while Downed.

**While Stunned, a fighter:**

- Cannot move
- Cannot act
- Cannot attempt Recover
- Cannot be chosen for activation while **Stunned**
- Does not count toward **activation count**
- Defends with **Might dice only** (**Might**-based defense, no Skill dice)

Any **unblocked hit** on a Stunned fighter pushes them to **Out of Action**.

A **Mercy Kill** (within 1") bypasses defense entirely — the Stunned fighter is immediately Out of Action.

If a **Stunned** fighter becomes **Active** during the round before their player has finished activating fighters, they may activate later this round with **1 action**. If they become **Downed**, they may activate later this round, but can only use that activation to **Recover**. Do not recalculate initiative or **Overwatch tokens**.

### Out of Action

A fighter is removed from the battle. Resolve post-game consequences in the [Casualty Table](post-game-sequence.md#step-2-casualty-table) and [Doom Table](post-game-sequence.md#step-4-doom-table).

## Wound State Actions

**Recover**, **Help**, and **Mercy Kill** are defined under [Actions](actions.md#actions).

## Afflictions

Afflictions remain until their own rule removes them, the effect that applied them ends, or another rule removes them.

### Poisoned

While a fighter is **Poisoned**, make a **Might** check at the start of each activation.

**Pass:** remove **Poisoned**.

**Fail:** The fighter suffers **1 Wound** and remains **Poisoned**.

### Weakened

The fighter suffers −1 **Might**, −1 **Skill**, and −1" **Movement** until the effect that applied **Weakened** ends. If no duration is given, **Weakened** lasts for the rest of the battle.

### Enfeebled

The fighter suffers −1 **Might** and −1 **Skill** until the effect that applied **Enfeebled** ends. If no duration is given, **Enfeebled** lasts for the rest of the battle.

### Bleeding

When **Bleeding** is applied, the fighter suffers **1 Wound** immediately.

At the **start of each activation**, make a **Will** check. **Pass:** remove **Bleeding**. **Fail:** suffer **1 Wound**.

### Blinded

The fighter cannot make **Melee** or **Ranged** attacks. If no duration is given, **Blinded** lasts until the end of the fighter's next activation.

### Fear, Panic, and Insanity

Fighters and effects that frighten others **project Fear**, **project Panic**, or **project Insanity** — they are the **source** of that effect.

When a fighter activates within range and line of sight of such a source, they must pass a **Sanity** check.

A rule that projects **Fear**, **Panic**, or **Insanity** must state its range or trigger.

### Fear

Measure the distance between the active fighter and the source of the fear. That fighter may not move closer than that distance or end its activation closer than that distance. The fighter may still act otherwise — shoot, fight if already engaged, cast spells, retreat, etc.

### Panic

In addition to the effects of **Fear**, the fighter must spend at least **1 action** moving their full movement directly away from the source.

### Insanity

Roll on the **Insanity Table (1d6)**:

- 1 — **Frenzy:** Attack the closest fighter (chosen by your opponent). They cannot be the source of the Insanity.
- 2–3 — **Flee:** Spend both actions moving toward the nearest battlefield edge.
- 4–5 — **Freeze:** Both actions are spent. The fighter does nothing.
- 6 — **Berserk:** The fighter snaps. If their primary weapon is melee, they charge the source of the Insanity and add **2 Might dice** and **1 Skill die** to the Strike Pool, but suffer −1 **Close Combat** on that **Melee** attack. If their primary weapon is ranged, they spend both actions firing at the source and suffer −1 **Ranged Combat** on those attacks.

### Fearless

A fighter with the **Fearless** keyword is immune to **Fear**, **Panic**, and **Insanity**. They never make **Sanity** checks for these effects and are never affected.

**Fearless** fighters add **+1** to **Will** checks for rout tests.

---
