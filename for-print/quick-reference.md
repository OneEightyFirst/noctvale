# Noctvale Quick Reference

Table reference for mid-battle rules. Attributes, spells, traditions, feats, and full gear lists live on fighter cards and in the rulebook.

<!-- PRINT: FRONT — footer: Turn & Actions -->

## Turn and Activation

> ### Round at a Glance
>
> **Start of round:** Count each player's **Active** and **Downed** fighters — that is their **activation count**. Do not count **Stunned**, **Out of Action**, or **Escaped** fighters. The player with the lower **activation count** has initiative and gains **Overwatch tokens** equal to the shortfall. Do not recalculate activation count, initiative, or tokens during the round.
>
> **Activations:** Starting with the player who has initiative, players alternate activating **one fighter** at a time. Each fighter performs **2 actions** in any order.
>
> **End of round:** The round ends when every fighter who can activate has activated or **skipped their activation**. Remove unspent **Overwatch tokens**. Begin a new round.

### Overwatch

- **Start of round:** Lower **activation count** player receives tokens equal to the shortfall.
- **Skip activation:** On your turn in the activation order, spend **1 token** to **skip a fighter's activation** instead of activating them. The skip counts as that fighter's activation for the round. That fighter may later perform any **1 action** as a reaction when an enemy completes an action.
- **Reaction timing:** Spend tokens whenever an enemy completes an action during the round — not only while both players still have activations left. Running out of fighters to activate does not stop a player from spending unspent tokens during the other player's remaining activations.
- **End of round:** Remove unspent tokens.

### Morale

- **Lost:** **Out of Action** or **Stunned**. **Active** and **Downed** are not **lost**.
- **Routing:** More than **half** of the retinue's starting fighters are **lost** (e.g. **5** deployed → routing at **3** lost).
- **Test:** At the **start of each activation** while routing, before actions — **Will** check.
  - **Summon:** Auto-pass if any friendly fighter is within **6"** and line of sight.
  - **+1** per other friendly within **6"** and line of sight; **+2** for a friendly **Leader** within **6"** (instead of **+1** for that fighter); **+1** if **Fearless**.
- **Fail:** Spend **both actions** fleeing toward the nearest **battlefield edge** (**Move**, **Retreat**, **Scramble**, **Jump**, or **Climb**; **Crawl** if **Downed**). **Pass** on a later activation → **rallied**, activate normally.

### Engagement

- Engagement range is **1"**. No facing — fighters are aware in all directions.
- **Gang Up:** If a friendly fighter is also engaged with the same enemy, **+1 die** to the Strike Pool (Might or Skill).
- **Multiple enemies:** Split the Strike Pool among standing enemies as chosen. If one enemy is standing and another is **Downed** or **Stunned**, prioritize the standing enemy.

## Actions

| Action | Effect |
|---|---|
| **Move** | Horizontal only — up to **Movement**; cross terrain **1"** or lower freely; may pass through friendlies; cannot end on another base |
| **Crawl** | **Downed** only — horizontal, half **Movement**; may pass through friendlies; cannot end on another base |
| **Charge** | Horizontal only — up to **Movement**; must end in engagement; cross terrain **1"** or lower freely; may pass through friendlies during charge; cannot end on another base |
| **Climb** | Up to half **Movement** per action; may exceed **1"** elevation; may chain 2 **Climb** actions in one activation (no mid-climb placement); cannot end in engagement |
| **Scramble** | Half **Movement** through **difficult terrain**; cannot end in engagement |
| **Jump** | Move across open space up to **Movement**; **Skill** check; cannot end in engagement |
| **Retreat** | Leave engagement — **Skill** check; on fail, opponent may make a free **Melee** attack if not engaged elsewhere |
| **Melee** | Attack an enemy within engagement range; resolve **Attack Sequence** |
| **Ranged** | Attack with a ranged weapon in range and line of sight; bow/crossbow → **Attack Sequence**; firearm → **Primer Roll** then **Attack Sequence** |
| **Cast** | **Caster** only — **Casting Roll**; spells may be cast in melee; no **Ranged Reaction** |
| **Aim** | Next **Ranged** action this activation gains **+1** dominant die type; natural **6**s are critical hits (**5+** if the weapon already crit on **6**) |
| **Mercy Kill** | **Stunned** enemy within **1"** → immediately **Out of Action**; blocked if any **Active** or **Downed** enemy is **within engagement range** |
| **Brace** | **+1 Might defense die** until this fighter's next activation |
| **Hide** | Become **Hidden** within **1"** of terrain — see **Keywords** |
| **Recover** | **Downed** only — roll **1d6** (see **Recover / Help**) |
| **Help** | **Downed** or **Stunned** friendly within **1"** — roll **1d6** (see **Recover / Help**) |
| **Interact** | Open doors, operate scenario objects, or pick up items |

<!-- PRINT: BACK — footer: Combat & Conditions -->

## Combat Resolution

> ### Attack Sequence
>
> **Step 1 — Build the Strike Pool:** Fighter **Might** + **Skill** + weapon +**Might** / +**Skill**, to a maximum of **15 dice**. Firearms and damage spells use a **flat Strike Pool** instead (see weapon or spell profile).
>
> **Step 2 — Roll to hit:** Melee dice use **Close Combat** checks. Ranged dice use **Ranged Combat** checks. Apply **Hit** attribute modifiers (+1 **Close Combat**, −1 **Ranged Combat**, etc.) to the attribute used for that attack.
>
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), **Hammer** vs **Heavy Armor**, magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked except by a **Heavy Armor** critical success.
>
> **Step 4 — Roll defense:** Defender **Might** + **Skill**. Might dice use **Might** checks. Skill dice use **Skill** checks. Add bonus defense dice from cover, **Brace**, spells, feats, or scenario rules. Armor and shields **convert** failed defense dice into successes. *(See [Equipment](../rules/gear.md#equipment).)*
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

> ### Apply Wounds
>
> Each unblocked hit inflicts **1 Wound**.
>
> - When a fighter reaches **0 Wounds**, they become **Downed**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **Might dice only** (no Skill).

### Defense

- **Dual wielding:** Two one-handed melee weapons add both weapon profiles to the Strike Pool, max **15 dice**. Use only the primary weapon's type and special rules. No shield.
- **Might defense** blocks **Might hits**; **Skill defense** blocks **Skill hits**.
- **2 Might** successes may block **1 Skill hit**; **2 Skill** successes may block **1 Might hit**.
- **Cover:** **+1 Skill defense die** vs **Ranged** attacks and damage spells using the **Attack Sequence**.
- **Critical hits** cannot be blocked except by a **Heavy Armor** critical defense success.

### Armor and Shield Conversion

Convert failed defense dice after rolling. Conversions stack; defender chooses which dice to convert.

| Gear | Conversion |
|---|---|
| Light armor | 2 failed Might or Skill → 1 normal success |
| Medium armor | 1 failed Might → 1 normal success |
| Heavy armor | 1 failed Might → 1 normal success **or** 2 failed Might → 1 **critical** success |
| Buckler | 1 failed Skill |
| Shield | 1 failed Might + 1 failed Skill |
| Tower Shield | 2 failed Might + 1 failed Skill |

### Critical Hits

Natural **6** is a **critical hit** when:

- Attacker has **weapon triangle** advantage (**Sword**, **Axe**, **Spear** only)
- Attacker wields **Hammer** vs target in **Heavy Armor**
- Attacker has **magic triangle** advantage
- Attacker uses a **firearm**
- Attacker used **Aim** before a **Ranged** attack

If none apply, **6**s are normal hits.

**Hammer:** No weapon triangle. If either fighter wields a **Hammer**, weapon triangle advantage does not apply.

### Ranged Targeting

- **Line of sight** required for **Ranged** and targeted **Cast** actions. Friendlies do not block LoS; enemies do.
- **Cover:** Intervening terrain **more than 1"** from the attacker → **+1 Skill defense die**.
- **Clustered enemies:** Other enemies from the same retinue within **1"** of the target → **Skill** check to hit the intended target.
- **Friendly fire (engaged):** Declared target in engagement with friendlies → **Ranged Combat** check or hit a friendly instead.
- **Line of fire (firearms / damage spells):** Friendly between attacker and target; on a **miss**, roll **1d6** — on **1**, hit the intervening friendly (**1 hit**).
- **Range:** Min and max only — no distance modifiers. Default minimum range **3"** unless noted.

### Ranged Reaction

When targeted by a **Ranged** action, the target may perform **1 free action** after the **Attack Sequence** resolves — even on a miss. **Cast** actions do not trigger this. Cannot react while your player is activating fighters. One reaction per **Ranged** attack; reactions cannot chain.

### Casting Roll (2d6 + Casting Attribute)

Roll **2d6 + the spell's Casting attribute** against the spell's casting difficulty.

| Result | Effect |
|---|---|
| **Double 1s** | **Mishap** — spell fails; backlash occurs |
| **Below difficulty** | Spell fizzles; action spent |
| **Meets or exceeds difficulty** | Spell goes off; resolve **Attack Sequence** |

### Primer Roll (2d6 + Skill)

Roll **2d6 + Skill** against the firearm's **primer difficulty**.

| Result | Effect |
|---|---|
| **Double 1s** | **Misfire** — see weapon notes |
| **Below difficulty** | Gun fails to fire; action spent |
| **Meets or exceeds difficulty** | Gun fires; resolve **Attack Sequence** |

## Wound States

```
Active → Downed → Stunned → Out of Action
```

| State | Summary |
|---|---|
| **Active** | Upright; counts toward **activation count** |
| **Downed** | 0 Wounds; **Crawl** or **Recover** only; full defense pool; unblocked hit → **Stunned** |
| **Stunned** | Cannot move or act; not activatable; **Might defense only**; unblocked hit → **Out of Action** |
| **Out of Action** | Removed from the battle |

### Recover / Help

**Recover** (**Downed** fighter, **1d6**):

| Roll | Result |
|---|---|
| 1 | **Stunned** |
| 2–3 | Remain **Downed** |
| 4–5 | Stand with **1 Wound** |
| 6 | Stand with **1 Wound** + **1** additional action |

**Help** (friendly **Downed** or **Stunned** within **1"**, **1d6**):

| Roll | Result |
|---|---|
| 1 | Target **Out of Action** |
| 2–3 | No effect |
| 4–5 | **Downed** (if **Stunned**) |
| 6 | Stand with **1 Wound** |

## Conditions

| Condition | Effect |
|---|---|
| **Affliction 1: Weakened** | −1 **Might** |
| **Affliction 2: Enfeebled** | −1 **Might**, −1 **Skill** |
| **Affliction 3: Withered** | −1 **Might**, −1 **Skill**, −1" **Movement** |
| **Bleeding** | **1 Wound** when applied; each activation start — **Will** check to remove or suffer **1 Wound** |
| **Blinded** | Cannot **Melee** or **Ranged**; until end of next activation unless noted |
| **Broken** | Start of activation: **Will** check to remove or flee toward nearest battlefield edge |
| **Fear** | Cannot move closer to source than current distance |
| **Panic** | **Fear**, plus spend ≥**1 action** moving full **Movement** away from source |
| **Insanity** | **Sanity** check failed — roll **1d6** on Insanity table (Frenzy / Flee / Freeze / Berserk) |

## Keywords

| Keyword | Effect |
|---|---|
| **Caster** | Knows spells; may perform **Cast** |
| **Large** | Cannot **Hide** |
| **Swarm** | **Skill** = current **Wounds**; enemies **+1 Hit** attribute vs this fighter; never **Downed**/**Stunned** — **0 Wounds** → **Out of Action** |
| **Summon (*value*)** | Summoned fighter; duration in rounds or activations per **value** |
| **Hidden** | Cannot be targeted by **Ranged**/**Cast** beyond **6"**; lost on **Melee**, **Ranged**, **Cast**, **Mercy Kill**, **Charge**, **Climb**, **Jump**, or moving within **6"** of an enemy; **Aim** does not break **Hidden** |
| **Fly** | Ignore vertical distance for **Move** and **Jump**; must end on a legal surface |
| **Fearless** | Immune to **Fear**, **Panic**, **Insanity**; **+1** to rout **Will** checks |
| **Undead** | Profile keyword — affects silver weapons, **Radiant Strike**, and similar rules |
