# Actions

## Measuring Distances

Distances are measured in inches (**"**), between the closest points of the bases you are measuring to and from. Something is **within** a distance if the measurement is equal to or less than that distance. A fighter is **wholly within** a distance only if every part of their base is within range.

Unless a rule says otherwise, measure both horizontal and vertical distance together.

You may measure distances whenever you wish.

When a fighter moves, they may pivot freely so long as the total distance they travel does not exceed that action's allowance — and no part of the fighter ends further from their starting position than that allowance permits.

## Movement Actions

During **Move**, **Charge**, **Crawl**, **Scramble**, and **Retreat**, a fighter moves horizontally. These actions do not allow vertical movement. The fighter may cross terrain **1"** tall or lower freely, except during **Crawl**. To change elevation by more than **1"**, use **Climb**.

### Move

**Cost:** 1 action

Move up to this fighter's **Movement**. Movement is horizontal — no vertical movement.

- May cross terrain **1"** tall or lower freely
- May move through friendly fighters
- Cannot end on another fighter's base

*(See [Intervening Fighters](combat.md#intervening-fighters).)*

### Crawl

**Cost:** 1 action

**Downed** fighters only. Move at half **Movement**. Movement is horizontal — no vertical movement.

- May move through friendly fighters
- Cannot end on another fighter's base

### Charge

**Cost:** 1 action

Move up to this fighter's **Movement**. Must end **within engagement range** of an enemy. Movement is horizontal — no vertical movement.

- May cross terrain **1"** tall or lower freely
- May move through friendly fighters during the charge
- Cannot end on another fighter's base

*(See [Intervening Fighters](combat.md#intervening-fighters).)*

### Climb

**Cost:** 1 action

Move up to half **Movement**. **Climb** may change elevation by more than **1"**; other movement actions may not.

- Cannot end **within engagement range**

A fighter may spend **both actions** in the same activation on **Climb**, one after the other, to scale taller terrain. When chaining two **Climb** actions, the fighter does not need a legal standing position between them — place them at the end of the second **Climb** only.

### Scramble

**Cost:** 1 action

Move at half **Movement** through **difficult terrain** (see [Difficult Terrain](battle-setup.md#difficult-terrain)).

- Cannot end **within engagement range**

### Jump

**Cost:** 1 action

Move horizontally across open space up to this fighter's **Movement**. Make a **Skill** check.

- Cannot end **within engagement range**

### Retreat

**Cost:** 1 action

Attempt to leave engagement range. Make a **Skill** check.

- **Fail:** The opponent may make a **free Melee attack** using the full **Attack Sequence** — but only if they are not currently engaged with another enemy. This does not cost the opponent any actions.

> ### Falling
>
> Resolve **Falling** after another rule or failed movement causes a fighter to fall. Do not make an additional check to avoid the fall.
>
> For every full **2"** in height the fighter falls, add **2 Might dice** to a fall Strike Pool.
>
> The fall attacks at **Close Combat** 4+. Roll each die in the fall Strike Pool; each result of **4+** is a hit. The fallen fighter rolls defense as normal against any hits.

## Combat Actions

> ### Engagement
>
> **Engagement range** is **1"**.
>
> Fighters are aware in **all directions**.

### Melee

**Cost:** 1 action

Attack an enemy **within engagement range** using a melee weapon.

Resolve the attack using the **Attack Sequence** (below).

### Ranged

**Cost:** 1 action

Attack with a **ranged weapon** — bows, crossbows, firearms, and other weapons that use this action.

- Target must be within the weapon's minimum and maximum range
- Target must be within **line of sight**

**Bow or crossbow:** Resolve the attack using the **Attack Sequence** (below).

**Firearm:** Roll the **Primer Roll** (below). If the gun fires, resolve the attack using the **Attack Sequence**.

### Cast

**Cost:** 1 action

Only fighters with the **Caster** keyword know spells. Casting a spell is a single **Cast** action. Roll the **Casting Roll** (below).

- Spells can be cast **while in melee**
- Cast actions **do not trigger Ranged Reactions**

> ### Casting Roll (2d6 + Casting Attribute)
>
> Roll **2d6 + the spell's Casting attribute** against the spell's casting difficulty.
>
>
> | Result                          | Effect                                                       |
> | ------------------------------- | ------------------------------------------------------------ |
> | **Double 1s**                   | **Mishap** — the spell fails and the spell's backlash occurs |
> | **Below difficulty**            | The spell fizzles. The action is spent                       |
> | **Meets or exceeds difficulty** | The spell goes off. Resolve the **Attack Sequence**          |
>

*(See [Magic](magic.md).)*

### Mercy Kill

**Cost:** 1 action

Finish a **Downed** or **Stunned** enemy **within 1"**.

- May not be performed if any other **Active** or **Downed** enemy fighter is **within engagement range** of this fighter

If the target is **Stunned**, they are immediately **Out of Action**.

If the target is **Downed**, resolve a **Melee** attack against them. If the attack inflicts one or more unblocked hits, the target goes **Out of Action** instead of applying Wounds.

*(See [Conditions](conditions.md#conditions).)*

### Hurl

**Cost:** 1 action

Choose an enemy fighter within engagement range of this fighter.

Make an **opposed check** — the attacker selects **Might** or **Skill**. If the target is **Stunned**, the attacker wins automatically without rolling. Against a **Downed** target, the attacker wins tied totals.

> ### Opposed Check
>
> Each fighter rolls **1d6** and adds their value in the selected attribute. The fighter with the higher total wins. On a tied total, the defender wins.

- **Attacker wins:** Move the selected fighter up to this fighter's **Might** in inches in a direction you select.
  - If the target was **Active** or **Downed**, they become **Stunned** after moving. A **Stunned** target remains **Stunned**.
  - If the target's move stops because their base contacts **terrain** or an **Active** fighter's base, they suffer **1 hit** at **2 Might / 1 Skill**. If the collision involves another fighter's base, that fighter also suffers the same hit and becomes **Stunned**.
- **Defender wins:** No effect.

Resolve each hit using the **Attack Sequence**.

> **Multiple Engagement**
>
> When a fighter is attacking multiple enemies:
>
> - If the enemies are standing, the attacker splits their **Strike Pool** among those enemies however they like before rolling to hit.
> - If one enemy is standing and another is **Downed** or **Stunned**, the **standing enemy must be prioritized**.
>
> **Gang Up**
>
> If a friendly fighter is **also engaged** with the same enemy, add **+1 die to the Strike Pool** (attacker's choice of **Might** or **Skill**).

## Tactical Actions

### Overwatch

**Cost:** 1 action + 1 Overwatch token

Place this fighter on **Overwatch**. That fighter may perform any **1 action** as a reaction when an enemy fighter completes an action later in the round.

*(See [Overwatch](the-turn.md#overwatch).)*

### Brace

**Cost:** 1 action

Hunker down and absorb incoming attacks.

Gain **+1 Might defense die** (rolled with **Might**) until this fighter's next activation.

### Aim

**Cost:** 1 action

Prepare a careful shot for this fighter's next **Ranged** action this activation.

- Gain **+1 die of the weapon's dominant die type**
- **Natural 6** results are critical hits on that **Ranged** action. If that **Ranged** weapon already had a critical hit on **6**, increase it to **5+**

The dominant die type is whichever attribute the weapon adds more of (**Might** or **Skill**). If tied, select **Might dice** or **Skill dice**.

### Hide

**Cost:** 1 action

Become **Hidden**.

- Must be **within 1" of terrain**
- Cannot be performed if this fighter performed a **Ranged** action earlier this activation

While **Hidden**:

- Cannot be targeted by **Ranged** or **Cast** actions beyond **6"**
- Lose **Hidden** when performing any **Combat action** (**Melee**, **Ranged**, **Cast**, or **Mercy Kill**), **Charge**, **Climb**, **Jump**, or moving **within 6"** of an enemy
- May still **Move**, **Scramble**, **Brace**, **Aim**, **Interact**, **Loot**, **Recover**, or **Help** without losing **Hidden** — as long as they remain **within 1"** of terrain

## Interaction Actions

### Interact

**Cost:** 1 action

Open doors, operate scenario objects, or pick up items.

### Loot

**Cost:** 1 action

Search a building for valuables.

*(See [Scenarios](scenarios.md#scenarios).)*

### Recover

**Cost:** 1 action

A **Downed** fighter may spend an action to attempt recovery.

Roll **1d6:**


| Roll | Result                                                    |
| ---- | --------------------------------------------------------- |
| 1    | Become **Stunned**                                        |
| 2–3  | Remain **Downed**                                         |
| 4–5  | Stand up with **1 Wound**                                 |
| 6    | Stand up with **1 Wound** + perform one additional action |


*(See [Conditions](conditions.md#conditions).)*

### Help

**Cost:** 1 action

Assist a **Downed** or **Stunned** friendly fighter **within 1"**.

Roll **1d6:**


| Roll | Result                                  |
| ---- | --------------------------------------- |
| 1    | Fighter goes **Out of Action**          |
| 2–3  | No effect                               |
| 4–5  | Fighter becomes **Downed** (if Stunned) |
| 6    | Fighter stands with **1 Wound**         |


*(See [Conditions](conditions.md#conditions).)*

---
