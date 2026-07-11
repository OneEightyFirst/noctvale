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
> **End of round:** The round ends when every fighter who can activate has activated. Remove unspent **Overwatch tokens**. Begin a new round.

### Overwatch

- **Start of round:** Lower **activation count** player receives tokens equal to the shortfall.
- **Overwatch action:** During a fighter's activation, spend **1 action** and **1 Overwatch token** to go on **Overwatch**. That fighter may later perform any **1 action** as a reaction when an enemy completes an action. Their remaining action may be used before or after declaring Overwatch.
- **Reaction timing:** A fighter on **Overwatch** may react whenever an enemy completes an action during the round — not only while both players still have activations left. Running out of fighters to activate does not prevent Overwatch reactions from triggering.
- **End of round:** Remove unspent tokens.

### Morale

- **Lost:** **Out of Action** or **Stunned**. **Active** and **Downed** are not **lost**.
- **Routing:** More than **half** of the retinue's starting fighters are **lost** (e.g. **5** deployed → routing at **3** lost).
- **Test:** At the **start of each activation** while routing, before actions — **Will** check.
  - **Summon:** Auto-pass if any friendly fighter is within **6"** and line of sight.
  - **+1** per other friendly within **6"** and line of sight; **+2** for a friendly **Leader** within **6"** (instead of **+1** for that fighter); **+1** if **Fearless**.
- **Fail:** The fighter becomes **Broken**. While **Broken**, at the start of each activation make a **Will** check. **Pass:** remove **Broken**; activate normally. **Fail:** spend both actions fleeing toward the nearest **battlefield edge** (**Move**, **Retreat**, **Scramble**, **Jump**, or **Climb**; **Crawl** if **Downed**).

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
| **Aim** | Next **Ranged** action this activation gains **+1** dominant die type (whichever the weapon adds more of — **Might** or **Skill**; if tied, choose); natural **6**s are critical hits (**5+** if the weapon already crits on **6**) |
| **Mercy Kill** | **Stunned** enemy within **1"** → immediately **Out of Action**; **Downed** enemy within **1"** → **Melee** attack, unblocked hit sends them **Out of Action**; blocked if any other **Active** or **Downed** enemy is **within engagement range** |
| **Overwatch** | Spend **1 Overwatch token** — react with **1 action** when an enemy completes an action; remaining action may be used before or after |
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
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked.
>
> **Step 4 — Roll defense:** Build the pool: defender **Might** + **Skill**, modified by armor before rolling (Light Armor +1 Sk, Medium Armor +1 Mt, Heavy Armor +2 Mt −1 Sk), plus bonus dice from cover, **Brace**, spells, feats, or scenario rules. Roll all dice as **Df** checks. Attacker wins ties by color; a shield shifts ties to the defender.
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

> ### Apply Wounds
>
> Resolve all unblocked hits from one attack together. Each unblocked hit inflicts **1 Wound**.
>
> - If an **Active** fighter is reduced to exactly **0 Wounds**, they become **Downed**.
> - If an **Active** fighter would be reduced below **0 Wounds**, set them to **0 Wounds** and they become **Stunned**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **Might dice only** (no Skill).

### Defense

- **Dual wielding:** Two one-handed melee weapons add both weapon profiles to the Strike Pool, max **15 dice**. Use only the primary weapon's type and special rules. No shield.
- **Might defense** blocks **Might hits**; **Skill defense** blocks **Skill hits**.
- **2 Might** successes may block **1 Skill hit**; **2 Skill** successes may block **1 Might hit**.
- **Cover:** **+1 Skill defense die** vs **Ranged** attacks and damage spells using the **Attack Sequence**.
- **Critical hits** cannot be blocked.

### Armor and Shields

Armor adds dice to the pool **before rolling**. Shields change who wins ties. Effects stack.

| Gear | Effect |
|---|---|
| Light Armor | +1 Skill die |
| Medium Armor | +1 Might die |
| Heavy Armor | +2 Might dice, −1 Skill die |
| Buckler | Defender wins **Skill** ties |
| Shield | Defender wins **all** ties |
| Tower Shield | Defender wins **all** ties; +1 Might die |

**Ties:** When blocks equal hits in a color category, the attacker wins — one hit of that color gets through.

### Critical Hits

Natural **6** is a **critical hit** when:

- Attacker has **weapon triangle** advantage (**Sword**, **Axe**, **Spear** only)
- Attacker has **magic triangle** advantage
- Attacker uses a **firearm**
- Attacker used **Aim** before a **Ranged** attack

If none apply, **6**s are normal hits. **Hammer** is outside the triangle — if either fighter wields a Hammer, weapon triangle advantage does not apply to that exchange.

### Ranged Targeting

- **Line of sight** required for **Ranged** and targeted **Cast** actions. Friendlies do not block LoS; enemies do.
- **Cover:** Intervening terrain **more than 1"** from the attacker → **+1 Skill defense die**.
- **Clustered enemies:** Other enemies from the same retinue within **1"** of the target → **Skill** check. Pass: hit intended target. Fail (one other): that fighter becomes the target. Fail (two or more): randomly select from all enemies within **1"** of the declared target.
- **Friendly fire (engaged):** Declared target in engagement with friendlies → **Ranged Combat** check or hit a friendly instead.
- **Line of fire (firearms / damage spells only):** Friendly between attacker and target; on a **miss**, roll **1d6** — on **1**, hit the intervening friendly (**1 hit**). Does not apply to bows, crossbows, or throwing weapons.
- **Range:** Min and max only — no distance modifiers. Default minimum range **3"** unless noted.

### Ranged Reaction

When targeted by a **Ranged** action, the target may perform **1 free action** after the **Attack Sequence** resolves — even on a miss. **Cast** actions do not trigger this. Cannot react while your player is activating fighters. If the target is **Downed or Out of Action** after the attack, they may not react. One reaction per **Ranged** attack; reactions cannot chain.

### Casting Roll (2d6 + Casting Attribute)

Roll **2d6 + the spell's Casting attribute** against the spell's casting difficulty.

| Result | Effect |
|---|---|
| **Double 1s** | **Mishap** — spell fails; backlash occurs |
| **Below difficulty** | Spell fizzles; action spent |
| **Meets or exceeds difficulty** | Spell goes off; resolve **Attack Sequence** |

### Primer Roll (2d6 + Skill)

Roll **2d6 + Skill** against the firearm's **primer difficulty**. Profile values assume **Skill** 3 — for other Skill values use: primer difficulty − 3 + **Skill**.

| Result | Effect |
|---|---|
| **Double 1s** | **Misfire** — see weapon notes |
| **Below difficulty** | Gun fails to fire; action spent |
| **Meets or exceeds difficulty** | Gun fires; resolve **Attack Sequence** |

## Wound States

Exact takedowns become **Downed**. Overkill and **Impact** weapons become **Stunned**.

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
| **Affliction 3: Withered** | −1 **Might**, −1 **Skill**, −1" **Movement** (maximum **3 tokens** total) |
| **Bleeding** | **1 Wound** when applied; each activation start — **Will** check to remove or suffer **1 Wound** |
| **Blinded** | Cannot **Melee** or **Ranged**; until end of next activation unless noted |
| **Broken** | Start of activation: **Will** check. Pass → remove **Broken**, activate normally. Fail → spend both actions fleeing toward nearest **battlefield edge** using **Move**, **Retreat**, **Scramble**, **Jump**, or **Climb** (**Crawl** if **Downed**). If they reach the edge they **Escape**. |
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

## Weapon Keywords

| Keyword | Effect |
|---|---|
| **Cleave** | On reducing a fighter to **0 Wounds**, make one free **Melee** attack against a different fighter within engagement range |
| **Heavy** | Cannot make a **Ranged** attack if the fighter **Moved** or **Charged** this activation |
| **Impact** | When this weapon would make an **Active** fighter **Downed**, that fighter becomes **Stunned** instead |
| **Parry** | When defending against a **Melee** attack, reroll one failed **Skill** die in the defense pool |
| **Piercing** | Ignore the target's armor dice bonus and shield tie benefit when building the defense pool |
| **Reach** | Can engage enemies up to **2"** away |
| **Thrown(Mt) / Thrown(Sk)** | May make a **Ranged** attack; max range = fighter's **Might** or **Skill** in **"**; no minimum range; use the weapon's normal Strike Pool |
| **Volley** | May target a fighter without **line of sight**; target gains **+2 Skill defense dice** against that attack |
