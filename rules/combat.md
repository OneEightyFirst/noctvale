# Combat

## Targeting, Line of Sight, and Cover

### Line of Sight and Cover

**Ranged** attacks and **Cast** actions that select an enemy target require **line of sight** unless a rule says otherwise. *(See [Actions](actions.md#actions).)*

Judge from the **firing fighter's point of view** (stoop to the firing fighter's height if needed). Use the target's body on and above its base. **Ignore** any part extending past the edge of the base (weapons, banners, cloaks, etc.).

#### Line of sight

If you **can see** the target from the firing fighter's viewpoint, you have **line of sight**. If you cannot see the target, you do not — the target is not a valid choice for **Ranged** or **Cast**.

**Friendly fighters do not block line of sight.** Enemy fighters block line of sight normally (you must be able to see the target past them).

#### Cover

If **any intervening terrain** lies between the firing fighter and the target — and that terrain is **more than 1" from the firing fighter** — the target has **cover**.

**Cover grants +1 Skill defense die** (rolled with **Skill**) when the defender rolls defense against a **Ranged** attack or a spell that resolves using the standard **Attack Sequence**.

### Intervening Fighters

#### Friendly fighters

Friendly fighters (same **retinue**) do not block line of sight.

Fighters may **move through** friendly fighters during **Move**, **Charge**, **Scramble**, **Climb**, and **Jump** actions. They cannot end their movement on another fighter's base.

#### Friendly fire

When declaring a target for a **Ranged** attack, if the declared enemy target is within engagement range of one or more friendly fighters other than the attacker, make a **Ranged Combat** check. On a failure, the shot hits a friendly fighter instead.

- If one friendly fighter is within engagement range of the declared target, that fighter becomes the new target.
- If two or more friendly fighters are within engagement range of the declared target, the attacker chooses one of those friendly fighters to become the new target.

On a success, resolve the attack against the declared target. On a failure, resolve the attack normally against the new target.

When making a **Ranged** attack with a **firearm** or a **Cast** action with a damage spell, if a **friendly fighter** lies **between** the attacker and the declared enemy target — a straight line from the center of the attacker's base to the center of the target's base crosses the friendly's base — and the attack **misses**, roll **1d6**. On a **1**, that friendly is hit.

**Miss** means the attack was resolved (the **casting roll** or **primer roll** succeeded) but the **declared enemy target took no Wounds** from that action. It does not include a **Mishap** or **Misfire** (**double 1s** on the **casting roll** or **primer roll**), or a failed roll (the spell fizzles or the firearm fails to fire).

On a friendly hit, resolve **1 hit** from that attack against the **intervening friendly** closest to the attacker (defense rolls apply normally).

The line-of-fire miss rule does not apply to **Ranged** weapon attacks without a primer roll (bows, crossbows, throwing weapons, etc.).

#### Clustered enemies

When declaring a target for a **Ranged** attack or **Cast** action, if **one or more other enemy fighters** from the **same retinue** are within **1"** of the declared target, the attacker must pass a **Skill** check to hit the intended target.

- **Pass:** Resolve the attack against the declared target.
- **Fail, one other fighter within 1":** That fighter becomes the new target instead.
- **Fail, two or more other fighters within 1":** Randomly select the new target from **all enemy fighters within 1"** of the declared target (including the declared target).

Make the **Skill** check when the target is declared, before rolling the attack.

### Range

Ranged weapons and spells have a **minimum range** and a **maximum range**.

- A target **closer than the minimum range** cannot be targeted.
- A target **beyond the maximum range** cannot be targeted.
- There are no modifiers for distance — if the target is in range, the attack is at full effectiveness.

Unless otherwise noted, ranged weapons have a **minimum range of 3"**.

## Attack Sequence

Before Step 1, declare a valid enemy target. **Clustered enemies** and **friendly fighters in close combat or in the line of fire** may change or affect targeting — see [Intervening Fighters](combat.md#intervening-fighters).

> ### Attack Sequence
>
> **Step 1 — Build the Strike Pool:** Fighter **Might** + **Skill** + weapon +**Might** / +**Skill**, to a maximum of **15 dice**. Firearms and damage spells use a **flat Strike Pool** instead (see weapon or spell profile).
>
> **Step 2 — Roll to hit:** Melee dice use **Close Combat** checks. Ranged dice use **Ranged Combat** checks. Apply **Hit** attribute modifiers (+1 **Close Combat**, −1 **Ranged Combat**, etc.) to the attribute used for that attack.
>
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), **Hammer** vs **Heavy Armor**, magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked except by a **Heavy Armor** critical success.
>
> **Step 4 — Roll defense:** Defender **Might** + **Skill**. Might dice use **Might** checks. Skill dice use **Skill** checks. Add bonus defense dice from cover, **Brace**, spells, feats, or scenario rules. Armor and shields **convert** failed defense dice into successes. *(See [Equipment](gear.md#equipment).)*
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

### Step 1: Build the Strike Pool

The Strike Pool is the fighter's **Might** + **Skill**, modified by their weapon.

- The fighter's **Might** = Might dice
- The fighter's **Skill** = Skill dice
- The weapon adds +**Might** (Might dice) and/or +**Skill** (Skill dice)

After all weapon bonuses and other dice bonuses are applied, a Strike Pool cannot contain more than **15 dice**. If the pool would exceed **15 dice**, the attacking player chooses which **Might dice** or **Skill dice** to remove until **15 dice** remain.

A fighter attacking **unarmed** uses only their base **Might** and **Skill**.

### Example


| Weapon | Type  | Range      | +Mt | +Sk |
| ------ | ----- | ---------- | --- | --- |
| Sword  | Melee | Engagement | +1  | +1  |


A **Keen** fighter (**Might** 3, **Skill** 4) with a Sword: **(3+1) Might + (4+1) Skill = 4 Might + 5 Skill = 9 dice**


| Fighter                 | Base Mt | Base Sk | Weapon                 | Might | Skill | Total |
| ----------------------- | ------- | ------- | ---------------------- | ----- | ----- | ----- |
| **Steady** (Mt 3, Sk 3) | 3       | 3       | Sword (+1 Mt, +1 Sk)   | 4     | 4     | 8     |
| **Keen** (Mt 3, Sk 4)   | 3       | 4       | Shortbow (+2 Sk)       | 3     | 6     | 9     |
| **Stout** (Mt 4, Sk 3)  | 4       | 3       | War Axe (+2 Mt)        | 6     | 3     | 9     |
| **Stunty** (Mt 2, Sk 4) | 2       | 4       | Throwing Stars (+1 Sk) | 2     | 5     | 7     |


### Step 2: Roll to Hit

Roll each die in the Strike Pool. Melee attacks use **Close Combat** checks. Ranged attacks use **Ranged Combat** checks.

Each passed check is a **hit**. Hits retain their color (Might hit or Skill hit).

- A natural **1** always misses.
- A natural **6** always hits.

Some rules modify the **Hit** attribute used for that attack — +1 **Close Combat**, −1 **Ranged Combat**, and similar. Apply these to **Close Combat** for **Melee** attacks and **Ranged Combat** for **Ranged** attacks (including **Cast** actions that use the **Attack Sequence**). Positive modifiers make checks easier; negative modifiers make checks harder.

### Primary weapon

A fighter's **primary weapon** is the weapon they last attacked with this battle. If they have not attacked yet, their controlling player chooses which equipped weapon counts as their primary weapon when a rule requires it.

### Step 3: Determine Criticals

Any natural **6** is a **critical hit** if any of the following apply:

- The attacker has **weapon triangle advantage** (see Weapon Triangle) — Sword, Axe, or Spear only
- The attacker wields a **Hammer** and the target is wearing **Heavy Armor**
- The attacker has **magic advantage** (see Magic Triangles)
- The attacker is using a **firearm** (crits against all targets)
- The attacker used the **Aim** action before a Ranged attack

Critical hits **cannot be blocked** by normal defense successes — only by a **critical defense success** from Heavy Armor. Critical hits retain their color for tracking purposes.

If none of the above apply, 6s are normal hits.

### Step 4: Defender Rolls Defense Dice

The defender generates a defense pool from their own **Might** and **Skill**:

- The defender's **Might** = Might defense dice
- The defender's **Skill** = Skill defense dice

Then add any bonus defense dice from cover, **Brace**, spells, feats, or scenario rules.

For **Might defense dice**, make **Might** checks (toughness absorbs the blow). For **Skill defense dice**, make **Skill** checks (reflexes deflect the blow).

#### Armor & Shield Conversion

After rolling defense dice, **armor and shields convert failed defense dice into successes**:

- **Armor** converts failed defense dice: Light (2 Might or Skill → 1 normal success), Medium (1 Might → 1 normal success), Heavy (1 Might → 1 normal success OR 2 Might → 1 critical success)
- **Shields** convert failed Might and/or Skill defense dice: Buckler (1 Skill), Shield (1 Might + 1 Skill), Tower Shield (2 Might + 1 Skill)

Armor and shield conversions **stack**. The defender chooses which failed defense dice to convert. Converted dice follow all normal blocking rules. *(See [Equipment](gear.md#equipment) for full tables.)*

Heavy Armor's critical success is the only way to block incoming critical hits with equipment.

Each successful defense die **blocks one hit** of the matching color:

- **Might defense blocks Might hits**
- **Skill defense blocks Skill hits**
- **Two successful Might defense dice may block one Skill hit** (brute force can overcome finesse, but at 2:1 cost)
- **Two successful Skill defense dice may block one Might hit** (finesse can overcome brute force, but at 2:1 cost)

Critical hits **cannot be blocked** by normal defense successes. Only a **critical defense success** from Heavy Armor can block a critical hit.

### Step 5: Apply Wounds

> ### Apply Wounds
>
> Each unblocked hit inflicts **1 Wound**.
>
> - When a fighter reaches **0 Wounds**, they become **Downed**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **Might dice only** (no Skill).

*(See [Conditions](conditions.md#conditions) for full Wound state rules.)*

After Step 5, if the attack **missed** the declared enemy target and a **friendly fighter** was in the line of fire (firearms and damage spells only), apply the line-of-fire miss rule in [Friendly Fire](combat.md#friendly-fire).

## The Crit Triangle

Critical hits come from printed advantage rules. A natural **6** becomes a critical hit only when one of those rules applies.

### Weapon Triangle

```
Sword > Axe > Spear > Sword
```

Having advantage over the opposing weapon type grants critical hits on natural 6s. Only **Sword**, **Axe**, and **Spear** participate in the triangle.

### Magic Triangle

Two separate triangles govern magic vs. magic interactions.

#### Mystic Triangle

```
Light > Infernal > Arcane > Light
```

#### Natural Triangle

```
Nature > Necromancy > Blood > Nature
```

### Firearms

Firearms are fired with the **Ranged** action. They use the **primer roll** and gain criticals against **all targets**, regardless of weapon type. *(See [Equipment — Weapons](weapons.md#weapons).)*

### Outside the Triangles

**Hammer** is outside the triangle. Hammer wielders do not gain or grant triangle criticals — they use the Hammer crit rule instead (natural 6s vs targets in **Heavy Armor**). If either fighter wields a Hammer, **weapon triangle advantage does not apply** to that melee exchange.

The **Aim** action can also make natural **6** results critical hits on that fighter's next **Ranged** action during the same activation. If that **Ranged** weapon already had a critical hit on **6**, **Aim** increases it to **5+**.

## Ranged Reaction

When a fighter is targeted by a **Ranged** action, the target may perform a **single free action** after the **Attack Sequence** is fully resolved. This reaction does not cost the target any of their normal actions.

- The reaction triggers whenever the target is **selected as a target**, regardless of whether the attack hits or misses.
- The target may choose **any single action** from the action list (Move, Charge, Melee, Ranged, Brace, Retreat, etc.).
- If the target is **Downed or Out of Action** after the attack resolves, they may not react.
- **A fighter may not perform a Ranged Reaction while their controlling player is activating fighters.** The active player's fighters cannot react to return fire. This means the sequence is always: shoot → react → done.
- **Cast actions do not trigger Ranged Reactions.** Only Ranged weapon attacks trigger this rule.
- If a fighter is targeted by **multiple Ranged attacks** in the same activation (e.g., the attacker shoots twice), the target gets **one reaction per attack**.
- **A Ranged Reaction cannot trigger another Ranged Reaction.** Reactions only trigger from actions, not from other reactions. This prevents chains.



## Example: A Round

Two retinues clash in ruined tollhouse walls. The Phoenix Guard player has four fighters still standing (**Active** or **Downed**); the Grave Wardens player has six — activation counts **4** and **6**.

**Start of round.** The Phoenix Guard have fewer activations, so they have initiative and receive **2 Overwatch tokens**.

The Phoenix Guard player activates a crossbow wielding **Squire** first. He **Aims**, then performs a **Ranged** attack at an enemy **Adept**. The **Adept** survives and **Moves** behind cover — a **Ranged Reaction** after the shot resolves (See Ranged Combat).

The Grave Wardens activate an **Acolyte**, who **Charges** a Phoenix Guard spearman and uses a **Melee action**. The spearman takes a Wound but remains **Active**. On the Phoenix Guard player's next activation, the spearman **Retreats** and fails the check. The **Acolyte's** free **Melee** leaves the spearman **Downed**.

Activations continue until every eligible fighter has activated or **skipped their activation**. Then round two begins - activation counts, initiative, and Overwatch tokens are reset.

## Example: Combat

**Attacker:** **Keen** fighter (**Close Combat** 3, **Might** 3, **Skill** 4) wielding a Sword (+1 **Might**, +1 **Skill**) **Defender:** **Stout** fighter (**Close Combat** 3, **Might** 4, **Skill** 3) wielding a Battle Axe (+2 **Might**), wearing Medium Armor

**Step 1:** **Keen** Strike Pool = (**Might** 3 + Sword 1) Might + (**Skill** 4 + Sword 1) Skill = **4 Might + 5 Skill = 9 dice**

**Step 2:** Roll each die as a **Close Combat** check.

- Might die 1: rolls 5 → pass → **Might hit**
- Might die 2: rolls 2 → fail
- Might die 3: rolls 1 → auto-miss
- Might die 4: rolls 4 → fail
- Skill die 1: rolls 6 → auto-hit → **Skill hit**
- Skill die 2: rolls 5 → pass → **Skill hit**
- Skill die 3: rolls 4 → fail
- Skill die 4: rolls 3 → fail
- Skill die 5: rolls 5 → pass → **Skill hit**

Result: 1 Might hit, 3 Skill hits (4 hits total)

**Step 3:** Sword vs Axe → Sword has advantage. The natural 6 on Skill die 1 is a **critical Skill hit** (unblockable).

**Step 4:** **Stout** defense pool:

- **Stout** **Might** 4 → 4 Might defense dice
- **Stout** **Skill** 3 → 3 Skill defense dice
- Total defense: 4 Might dice + 3 Skill dice

Roll defense:

- Might die 1: **Might** check rolls 4 → **success**
- Might die 2: **Might** check rolls 3 → fail
- Might die 3: **Might** check rolls 5 → **success**
- Might die 4: **Might** check rolls 2 → fail
- Skill die 1: **Skill** check rolls 5 → **success**
- Skill die 2: **Skill** check rolls 2 → fail
- Skill die 3: **Skill** check rolls 4 → fail

**Armor Conversion:** The **Stout** fighter wears Medium Armor — convert 1 failed Might defense die into 1 normal success. Might die 2 failed, so it becomes a **normal Might success**. Might die 4 and the failed Skill dice remain failed dice.

Defense results: 3 Might successes, 1 Skill success.

- Might success 1 blocks the Might hit (1:1 same type)
- Skill success 1 blocks one normal Skill hit (1:1 same type)
- Might successes 2 and 3 block one normal Skill hit at 2:1

The critical Skill hit cannot be blocked.

**Step 5:** 1 unblocked hit. The **Stout** fighter takes 1 Wound (3 → 2).

---
