# Magic

## Casting

Only fighters with the **Caster** keyword know spells. Casting a spell is a single **Cast** action. Roll the **Casting Roll** (below).

- Spells can be cast **while in melee**
- Cast actions **do not trigger Ranged Reactions**

> ### Casting Roll (2d6 + Casting Attribute)
>
> Roll **2d6 + the spell's Casting attribute** against the spell's casting difficulty.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Mishap** — the spell fails and the spell's backlash occurs |
> | **Below difficulty** | The spell fizzles. The action is spent |
> | **Meets or exceeds difficulty** | The spell goes off. Resolve the **Attack Sequence** |

### Damage Spells

If the spell deals damage, it generates a **flat Strike Pool** defined by the spell itself. The spell specifies its own **Might** and **Skill** values — a fixed pool regardless of who casts it. A spell with 5 **Might** / 2 **Skill** always produces 5 Might dice and 2 Skill dice.

Once the spell goes off, resolve the attack using the **Attack Sequence**. Use the spell's **Hit** attribute for the roll to hit: **Ranged Combat** for most damage spells, **Close Combat** for engagement-range damage (including blasts centered on the caster). Apply **Hit** attribute modifiers (+1 **Ranged Combat**, −1 **Close Combat**, etc.) to that attribute.

---

## Magic Classes

Six magic classes exist in Noctvale:

| Class | Triangle |
|---|---|
| Light | Mystic |
| Arcane | Mystic |
| Infernal | Mystic |
| Nature | Natural |
| Necromancy | Natural |
| Blood | Natural |

---

## Magic Triangles

Two separate triangles govern how magic interacts with opposing magic. When a fighter is casting a spell from a Domain that has advantage over the domain keyword that the target has, the triangle grants **critical hits** when attacking with magic, matching the weapon triangle system.


### Mystic Triangle
```
Light > Infernal > Arcane > Light
```

### Natural Triangle
```
Nature > Necromancy > Blood > Nature
```

---


### Spell selection

Fighters with **Caster** choose spells from the list matching their **Domain** keyword. Count depends on role:

- **Leader** with **Caster** (Lord, Captain, Mayor) or **Theurge:** **2** spells
- **Adept** with **Caster:** **1** spell

Each **Domain** keyword's standard attack spell (Radiant Strike, Arcane Bolt, Thorn Volley, Hellfire, Deathbolt, etc.) counts as one of those choices.

Spells marked *(TBD)* are not yet playtest-ready.

Each domain has a standard ranged attack spell plus **6 additional spells**. **Casting attribute** is **Will** for Light, Arcane, and Nature; **Sanity** for Infernal, Necromancy, and Blood. **Hit** is the attribute used for the roll to hit on damage spells (**Ranged Combat** or **Close Combat**); **—** if the spell does not deal damage through the **Attack Sequence**. Apply **Hit** attribute modifiers to the attribute named by the spell.

### Light

#### Radiant Strike
**Casting:** **Will** 11+. **Range:** 12". **Attack:** **Ranged Combat**, 4 **Might** / 3 **Skill**. Make a ranged spell attack. Against **Undead** and **Daemons**, use 5 **Might** / 3 **Skill** instead.

#### Holy Light
**Casting:** **Will** 11+. **Range:** 12" from caster. All fighters within 12" lose cover and **Hidden**. **Mishap:** The caster becomes **Blinded**.

#### Heal
**Casting:** **Will** 10+. **Range:** 1". Restore 1 Wound and improve the target's wound state by one step: **Stunned** to **Downed**, or **Downed** to **Active**.

#### Purge the Faithless
**Casting:** **Will** 11+. **Range:** 3" blast from caster. **Attack:** **Close Combat**, 5 **Might** / 2 **Skill**. All fighters within the blast are hit. **Mishap:** Resolve the attack against the caster.

#### Shield of Faith
**Casting:** **Will** 10+. **Range:** 12". Target friendly fighter gains **+2 Might defense dice** until the start of the caster's next activation.

#### Horrors Relived
**Casting:** **Will** 12+. **Range:** 12". **Attack:** **Ranged Combat**, target's **Sanity** as **Might**. Make a ranged spell attack. Use the target's **Sanity** attribute as the attack's **Might**. **Mishap:** Resolve the attack against the caster, using the target's **Sanity** as **Might**.

#### Unwavering Resolve
**Casting:** **Will** 10+. **Range:** 8" from caster. All friendly fighters within 8" become immune to Fear, Panic, and Insanity until the start of the caster's next activation. **Mishap:** The caster suffers **Panic** until the end of their next activation.

### Arcane

#### Arcane Bolt
**Casting:** **Will** 11+. **Range:** 20". **Attack:** **Ranged Combat**, 5 **Skill**. Make a ranged spell attack.

#### Arcane Shield
**Casting:** **Will** 11+. **Range:** Self. The caster is immune to all spells. At the start of the caster's next activation, roll 1d6. On 1-2, the shield disappears.

#### Fireball
**Casting:** **Will** 13+. **Range:** 18". **Attack:** **Ranged Combat**, 5 **Might** / 4 **Skill**. Choose a point within 18". All fighters within a **5" blast template** are hit. The blast hits friendly and enemy fighters. If the **casting roll** fails below difficulty (not **Mishap**), the fireball scatters: roll a scatter die for direction and d6" for distance from the target point. On a success, the blast centers on the chosen point. **Mishap:** The blast template centers on the caster.

#### Telekinesis
**Casting:** **Will** 12+. **Range:** 12". Move any fighter, friendly or enemy, up to 6" directly toward or directly away from the caster. The target does not make a check. **Mishap:** Your opponent chooses whether the target moves directly toward or directly away from the caster.

#### Displacement
**Casting:** **Will** 11+. **Range:** 12". Target friendly fighter is instantly moved up to 6" in any direction. This movement ignores terrain, engagement, and intervening fighters. The target cannot end inside terrain or another fighter's base. **Mishap:** Roll a scatter die. Move the target 6" in the indicated direction. This movement ignores terrain, engagement, and intervening fighters. If the target cannot end at the full distance, place it as far as possible along that line without ending inside terrain or another fighter's base.

#### Hoarfrost
**Casting:** **Will** 11+. **Range:** 18". Choose a point within 18". Place a large blast template until the start of the caster's next activation. The zone affects friendly and enemy fighters.

When a fighter ends any movement in the zone, make a **Skill** check. On a pass, the fighter slides d6" in the same direction they were moving. On a failure, roll a scatter die and slide the fighter d6" in that direction. If the check die was a natural 1, the fighter becomes **Downed** at the end of the slide. If the slide is stopped by terrain, a wall, or another fighter's base, the fighter suffers 1 Wound. **Mishap:** The blast template centers on the caster.

#### Slow
**Casting:** **Will** 12+. **Range:** line of sight. Target enemy loses 1 action on their next activation. They activate with 1 action instead of 2. **Mishap:** The caster loses 1 action on their next activation. They activate with 1 action instead of 2.

### Infernal

#### Hellfire
**Casting:** **Sanity** 10+. **Range:** 3"–18". **Attack:** **Ranged Combat**, 3 **Might** / 4 **Skill**. Make a ranged spell attack.

#### Summon Daemon
**Casting:** **Sanity** 11+. **Range:** 3". The hells hold infinite daemonic entities of different shapes and sizes. To help organize the chaos, they are combined into three categories:
- **Imps** — Usually small, fairly weak, with wings
- **Hellions** — Usually 4-legged animal-like creatures, sometimes resembling wolves
- **Maulers** — Large, bulky creatures, most of the time humanoid in shape
Daemons cannot be recruited normally. They enter battle through **Summon Daemon** and **Summoning Crystals** — see [Summoning](#summoning).

| Daemon | Crystal cost | Battle cap |
|---|---:|---:|
| **Imp** | 1 | 2 |
| **Hellion** | 2 | 2 |
| **Mauler** | 4 | 1 |

A **4-crystal** summon requires **2** crystal-bearing fighters.

After **Summon Daemon** is successfully cast, choose one or two **Active** friendly fighters within **3"** of the caster. The chosen fighters must be carrying enough **Summoning Crystals** to pay the crystal cost. Those fighters are taken **Out of Action** and removed from the battle. Spend the crystals, and roll **2d6** on the **Summon Result** table.

Place the created fighter where one sacrificed fighter stood. If two fighters were sacrificed, choose either sacrificed fighter's position. If the created fighter's base cannot fit, place it as close as possible to that position.

The summon result is separate from the **casting roll**. Double 1s and double 6s on the summon result use the table below.

| Crystals spent | Intended Daemon | Double 1s | 2–11 | Double 6s |
|---:|---|---|---|---|
| 1 | **Imp** | Summon a **Zombie** (**Summon (-)**; cannot be bound). No **Daemon** is summoned. | Summon an **Imp**. | Summon a **Hellion**. |
| 2 | **Hellion** | Summon an **Imp**. | Summon a **Hellion**. | Summon a **Mauler**. |
| 4 | **Mauler** | Summon a **Hellion**. | Summon a **Mauler**. | Summon a **Mauler** with **+1 W** and either **+1 Mt** or **+1 Sk**. |

A retinue cannot summon more than **2 Imps**, **2 Hellions**, and **1 Mauler** in the same battle. If a summon result would exceed one of those caps, use the next lower result that does not exceed a cap. If no lower result is available, no fighter is summoned.

A fighter created by **Summon Daemon** is friendly to the caster's retinue. It cannot activate this round if the sacrificed fighter whose position it replaced had already activated this round. **Mishap:** The caster goes **Out of Action**. No fighters are sacrificed, no crystals are spent, and no Daemon is summoned.

**Binding the Daemon:** After the battle, each sacrificed fighter rolls on the **Casualty Table** as normal — they ended the battle **Out of Action**. If a **Daemon** (not a **Zombie** from a failed summon result) survived the battle, the controlling player may attempt to **bind** it before resolving those **Casualty Table** rolls for the sacrificed fighters. The caster makes a **Sanity** check. On **success**, the sacrificed fighters are **Slain** and removed from the retinue (skip the **Casualty Table**), and the **Daemon** joins the retinue permanently. On **failure** (not a natural **1**), resolve the **Casualty Table** for each sacrificed fighter as normal and remove the **Daemon** from the retinue. On a natural **1**, resolve the **Casualty Table** for each sacrificed fighter as normal, the **Daemon** joins the retinue permanently, and the caster is **Slain** and removed from the retinue (skip the **Casualty Table**). Remove any **Zombie** created by a failed summon result from the retinue after the battle. See [Summoning — Binding](#binding).

#### Daemon profiles

Fighters created by **Summon Daemon** use the profiles below unless the summon result modifies them.

### Imp

| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 6" | 2 | 3 | 2 | 2 | 2 | 5 | 1 |

| Weapon | Hands | +Mt | +Sk | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| Claws | — | +1 | +1 | — | Built-in **Melee** |

**Spells:** **Hellfire**

**Keywords:** **Infernal**, **Daemon**, **Imp**, **Caster**, **Fly**, **Summon (-)**

**Daemon** — Cannot equip weapons, armor, or equipment. Cannot gain XP, buy equipment, carry scenario rewards, or use post-battle advancement.

**Fly** — Ignore vertical distance for **Move** and **Jump**; this fighter must still end on a legal surface.

**Summon (-)** — See [Summoning](#summoning) and **Summon Daemon**.

### Hellion

| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 8" | 4 | — | 3 | 3 | 2 | 3 | 2 |

| Weapon | Hands | +Mt | +Sk | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| Bite | — | +2 | +1 | — | Built-in **Melee** |

**Keywords:** **Infernal**, **Daemon**, **Hellion**, **Summon (-)**

**Daemon** — Cannot equip weapons, armor, or equipment. Cannot gain XP, buy equipment, carry scenario rewards, or use post-battle advancement.

**Summon (-)** — See [Summoning](#summoning) and **Summon Daemon**.

**Savage Charge** — When this fighter's **Melee** action immediately follows **Charge** during the same activation, add **1 Might die** to the Strike Pool.

### Mauler

| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 5" | 3 | — | 4 | 3 | 2 | 3 | 4 |

| Weapon | Hands | +Mt | +Sk | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| Mighty Fists | — | +2 | — | Hammer | Built-in **Melee** |

**Keywords:** **Infernal**, **Daemon**, **Mauler**, **Large**, **Summon (-)**

**Daemon** — Cannot equip weapons, armor, or equipment. Cannot gain XP, buy equipment, carry scenario rewards, or use post-battle advancement.

**Large** — Cannot perform the **Hide** action.

**Summon (-)** — See [Summoning](#summoning) and **Summon Daemon**.

**Thick Skin** — Uses [Heavy Armor](gear.md#armor) conversion.

### Zombie

Created only when **Summon Daemon** rolls double **1**s on the **Summon Result** table ( **1-crystal** summon).

| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 4" | 2 | — | 3 | 1 | 1 | 1 | 1 |

**Equipment:** Unarmed attack. Cannot be changed.

**Keywords:** **Undead**, **Summon (-)**. **Fearless**. Immune to **Fear**, **Panic**, and **Insanity**.

**Summon (-)** — Stays until the battle ends. Cannot be bound. Remove from the retinue after the battle.

#### The Void
**Casting:** **Sanity** 14+. **Range:** 12". Choose a point within 12" that is at least 6" from every fighter. Place a 3" blast marker there for 1d6 activations.

While the marker remains, when a fighter activates, or the first time during its activation it would come within 12" of the marker's center, it must pass a **Might** check or move d6" directly toward the marker. After this movement, the fighter may act as normal. If this movement contacts terrain, the fighter stops and its activation ends. If the fighter contacts the blast marker, it immediately goes **Out of Action**. **Mishap:** The marker is placed centered on the caster instead.

#### Possession
**Casting:** **Sanity** 13+. **Range:** Engagement range. Target enemy must pass a **Will** check. On a failure, they become **Possessed**.

While **Possessed**, the player who cast **Possession** controls that fighter's activations — not the fighter's owner. Each activation, the **Possessed** fighter has **1 action** instead of **2**.

At the end of each of that fighter's activations while **Possessed**, they make a **Will** check. On a pass, **Possessed** ends immediately.

**Mishap:** The caster becomes **Possessed** instead. Your opponent controls the caster's activations until **Possessed** ends.

#### Hellmouth
**Casting:** **Sanity** 11+. **Range:** 12". Choose a point within **12"**. Place a **5" blast template** centered on that point. The template cannot overlap any fighter's base. The template counts as **impassable terrain** for the rest of the battle. **Mishap:** The **Hellmouth** opens centered on the caster instead.

#### Searing Gaze
**Casting:** **Sanity** 12+. **Range:** 18". **Attack:** **Ranged Combat**, 4 **Might** / 4 **Skill**. Draw a straight line **1 mm** thick from the caster to a point up to **18"** away in a direction you choose. Every fighter the line touches that is in **line of sight** of the caster is hit. **Mishap:** Resolve the attack against the caster. The caster becomes **Blinded** until the end of their next activation — see [Conditions — Blinded](conditions.md#blinded).

#### Nightmare Visage
**Casting:** **Sanity** 11+. **Range:** 12". Target friendly fighter within **12"**. That fighter **projects Fear (6")** while the spell remains in effect. At the end of each **round**, the caster makes a **Sanity** check. On a failure, the spell ends.



### Nature

#### Thorn Volley
**Casting:** **Will** 12+. **Range:** 12". **Attack:** **Ranged Combat**, 4 **Might** / 4 **Skill**. Make a ranged spell attack using a **standard flame template**.

#### Shadowmeld
**Casting:** **Will** 11+. **Range:** 12". Target friendly fighter gains **Hidden**. The target does not need to remain within 1" of terrain to stay **Hidden**. **Hidden** is still lost from combat actions, **Charge**, **Climb**, **Jump**, or moving within 6" of an enemy. **Mishap:** Enemies add +1 **Ranged Combat** or +1 **Close Combat** — whichever **Hit** attribute the attack uses — when attacking the target with **Ranged** attacks or spells until the start of the caster's next activation.

#### Venom
**Casting:** **Will** 10+. **Range:** 12". Target enemy must pass a **Might** check. On a failure, the target becomes **Poisoned** — see [Conditions — Poisoned](conditions.md#poisoned). **Mishap:** The caster becomes **Poisoned**.

#### Feral Form
**Casting:** **Will** 11+. **Range:** 6". Target friendly fighter gains +2 **Might** and +1" **Movement** until the start of the caster's next activation. While affected, the target cannot use ranged weapons or cast spells. **Mishap:** The caster suffers −1 **Sanity** until the end of their next activation.

#### Entangle
**Casting:** **Will** 12+. **Range:** 12". Target enemy has **Movement** reduced to 0 until the start of the caster's next activation. The target cannot **Move**, **Charge**, **Climb**, **Scramble**, **Jump**, or **Retreat**. They can still fight, shoot, and cast. **Mishap:** The caster has **Movement** reduced to 0 until the start of their next activation. They cannot **Move**, **Charge**, **Climb**, **Scramble**, **Jump**, or **Retreat**. They can still fight, shoot, and cast.

#### Stinging Swarm
**Casting:** **Will** 10+. **Range:** 3". Place a **Stinging Swarm** within **3"** of the caster — hornets, wasps, and biting insects drawn from the wild. Roll **1d3**. The **Stinging Swarm** remains for that many **activations**, counting this one. It activates immediately with **2 actions**. Remove it from the battle when those activations have finished.

| Stinging Swarm | M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|---|
| Profile | 7" | 3 | — | 0 | 5 | 1 | 1 | 5 |

**Equipment:** Unarmed attack (see **Swarm**). Cannot be changed.

**Keywords:** **Swarm**, **Fly**. **Fearless**. Immune to **Fear**, **Panic**, and **Insanity**.

**Fly** — Ignore vertical distance for **Move** and **Jump**; this fighter must still end on a legal surface.

**Mishap:** The **Stinging Swarm** appears hostile. Your opponent controls it for its activation, then remove it from the battle.

#### Dread Chorus
**Casting:** **Will** 11+. **Range:** 8" from caster. All enemy fighters within 8" must pass a **Sanity** check for **Fear** with the caster as the source.

### Necromancy

#### Deathbolt
**Casting:** **Sanity** 14+. **Range:** 18". **Attack:** **Ranged Combat**, 6 **Skill**. Make a ranged spell attack. This attack uses only **Skill** and ignores armor.

#### Summon Skeleton
**Casting:** **Sanity** 10+. **Range:** 3".

The caster must carry **1 Summoning Crystal** — see [Summoning](#summoning).

**Remove** one **body token** within **3"** of the caster — see [Body tokens](#body-tokens). Spend **1 Summoning Crystal** from the caster. Place a **Skeleton** where the token was. The **Skeleton** has **Summon (1d6)** — roll **1d6** when it is created; it stays that many **rounds**, counting the round it was summoned. The **Skeleton** activates immediately with **2 actions**.

| Skeleton | M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|---|
| Profile | 5" | 3 | 3 | 4 | 5 | 1 | 1 | 1 |

**Equipment:** Sword and Shield (already included in **Might**/**Skill**). Cannot be changed.

**Keywords:** **Undead**, **Summon (1d6)**. **Fearless**. Immune to **Fear**, **Panic**, and **Insanity**.

**Binding the Skeleton:** If the **Skeleton** is still on the battlefield when the battle ends, the fighter whose **body token** was removed rolls on the **Casualty Table** as normal. If that roll **removes them from the roster**, the **Skeleton** binds and joins the retinue permanently. If they remain on the roster, remove the **Skeleton** from the retinue. A friendly fighter's controlling player rolls; an enemy fighter's controlling player rolls.

**Mishap:** The **Skeleton** appears hostile. Your opponent controls it for its activation, then remove it from the battle.

#### Raise Dead
**Casting:** **Sanity** 13+. **Range:** 3". **Remove** one **friendly** **body token** within **3"** of the caster — see [Body tokens](#body-tokens). Place that fighter within **3"** of the caster with **1 Wound**, **Undead**, and **Fearless**. Roll **1d3**. The fighter remains in the battle for that many **activations**, counting this one. They activate immediately with **2 actions**. When those activations have finished, they go **Out of Action** and are removed from the battle. **Mishap:** Your opponent places and controls the raised fighter instead.

#### Cursed Ground
**Casting:** **Sanity** 12+. **Range:** 12". **Attack:** **Ranged Combat**, 2 **Might** / 2 **Skill**. Choose a point within 12". Place a large blast template until the start of the caster's next activation. All fighters in the zone suffer −1" **Movement** and take the spell's hit unless they pass a **Skill** check. **Mishap:** The blast centers on the caster.

#### Wither
**Casting:** **Sanity** 11+. **Range:** 12". Target enemy suffers **Weakened** until the start of the caster's next activation — see [Conditions — Weakened](conditions.md#weakened). **Mishap:** The caster suffers **Weakened** until the start of their next activation.

#### Bone Blast
**Casting:** **Sanity** 11+. **Range:** blast from caster. **Attack:** **Close Combat**, 1 **Might** / 4 **Skill**. Center the blast template on the caster. All fighters under the template except the caster are hit. **Mishap:** Resolve the attack against the caster.

#### Bone Circle
**Casting:** **Sanity** 12+. **Range:** 12". **Attack:** **Ranged Combat**, 1 **Might** / 3 **Skill**. Choose a point within 12". Place a 3" blast template until the start of the caster's next activation. Any fighter that starts their activation in the zone, ends their activation in the zone, or moves through it is hit. Defense applies normally. The zone affects friendly and enemy fighters. **Mishap:** The zone centers on the caster.

### Blood

#### Leech
**Casting:** **Sanity** 12+. **Range:** Touch. **Attack:** **Close Combat**, 3 **Might** / 3 **Skill**. Make a touch spell attack. If the target suffers at least 1 Wound, the caster heals 1 Wound.

#### Bleed
**Casting:** **Sanity** 13+. **Range:** 12". Target enemy must pass a **Will** check. On a failure, the target becomes **Bleeding** — see [Conditions — Bleeding](conditions.md#bleeding). **Mishap:** The caster becomes **Bleeding** instead.

#### Blood Frenzy
**Casting:** **Sanity** 11+. **Range:** 6". Target friendly fighter gains +3 **Might** and suffers −1 **Close Combat** and −1 **Ranged Combat** until the start of the caster's next activation. **Mishap:** The target suffers −1 **Might**, −1 **Close Combat**, and −1" **Movement** until the start of the caster's next activation.

#### Summon Bats
**Casting:** **Sanity** 11+. **Range:** 3".

The caster must carry **1 Summoning Crystal** — see [Summoning](#summoning).

Place **Bats** within **3"** of the caster. The caster suffers **1 Wound**. Spend **1 Summoning Crystal** from the caster. The **Bats** have **Summon (1d3)** — roll **1d3** when they are created; they stay that many **rounds**, counting the round they were summoned. The **Bats** activate immediately with **2 actions**.

| Bats | M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|---|
| Profile | 7" | 3 | — | 0 | 6 | 1 | 1 | 6 |

**Equipment:** Unarmed attack (see **Swarm**). Cannot be changed.

**Keywords:** **Swarm**, **Fly**, **Summon (1d3)**. **Fearless**. Immune to **Fear**, **Panic**, and **Insanity**.

**Fly** — Ignore vertical distance for **Move** and **Jump**; this fighter must still end on a legal surface.

Cannot be bound.

**Mishap:** The **Bats** appear hostile. Your opponent controls them for their activation, then remove them from the battle.

#### Enthrall
**Casting:** **Sanity** 11+. **Range:** 8". Target enemy must pass a **Will** check or immediately take one **Move** action in a direction chosen by the caster. **Mishap:** A friendly fighter chosen by your opponent takes the move instead.

#### Feast of Excess
**Casting:** **Sanity** 11+. **Range:** 12". Target friendly fighter gains +1 **Might**, +1 **Skill**, and +1" **Movement**. When the effect ends, the target becomes **Stunned**. They keep their Wounds. **Mishap:** The target becomes **Stunned**.

#### Nightfall
**Casting:** **Sanity** 11+. **Range:** Self. The caster is engulfed in shadow until the start of the caster's next activation. No ranged weapons or spells can target into or out of the bubble. The caster gains +1 **Close Combat** on **Melee** attacks. **Mishap:** Bright light exposes the caster. Enemies gain +1 **Ranged Combat** when making **Ranged** attacks against the caster, and the caster suffers −1 **Might** until the start of their next activation.

---

## Summoning

Some spells call fighters onto the battlefield during a battle. Those fighters carry the **Summon** keyword. **Summoning Crystals** fuel the rite. Each summoning spell explains who spends crystals, what is sacrificed, and whether a surviving fighter may be **bound** to the retinue after the battle.

### Body tokens

When any fighter goes **Out of Action**, place a **body token** where that fighter stood — unless that fighter was created by **Summon Skeleton**. A **body token** marks that fighter's body. Remove unused tokens at the end of the battle.

When a **friendly** **body token** is placed, the controlling player may **remove** it immediately to use **Bell-keepers** — see [Tradition Special Rules — Necromancy](#tradition-special-rules) — if that ability has not been used this battle. Otherwise leave the token on the battlefield.

Spells and traditions that use corpses **remove** a **body token** rather than targeting fighters who went **Out of Action**.

### Summoning Crystals

**Summoning Crystals** are equipment from [Equipment — Summoning Crystals](crown-costs.md#crown-costs-summoning). Assign them to fighters during roster setup. A fighter may carry up to **2 Summoning Crystals**. Each crystal spent during a summoning spell is consumed. Remove spent crystals from the roster after the battle.

Summoning spells name the crystal cost and which fighter or fighters spend them.

### Summon (*value*)

**Summon (*value*)** marks a fighter created during the battle. Record the full keyword, value included.

- A **fixed number** — the fighter stays that many **rounds**, counting the round it was created. When those rounds have finished, remove the fighter from the battle.
- A **dice expression** (such as **1d6**) — roll when the fighter is created. The result is how many **rounds** it stays, counting the round it was created. When those rounds have finished, remove the fighter from the battle.
- **-** (hyphen) — the fighter stays until the battle ends.

Fighters with **Summon** are not permanent roster members unless a summoning spell binds them after the battle.

Fighters with **Summon (*number*)** or **Summon (*dice*)** cannot be bound unless a summoning spell says otherwise.

**Summon (-)** fighters that survive until the battle ends remain with the retinue until the **Post-Game Sequence** is finished. During that sequence, a summoning spell may allow the retinue to **bind** them so they join the roster permanently. If binding fails or is not attempted, remove the fighter from the retinue.

Roster limits for bound fighters: *(TBD)*.

### Binding

**Binding** is the post-battle attempt to keep a summoned fighter permanently. Each summoning spell that allows binding names who rolls, any difficulty, and what happens to everyone involved on success, failure, and a natural **1** on the roll.

Resolve binding during the **Post-Game Sequence**, before or in place of other casualty resolution tied to that summon, as the spell describes.

---

## Afflictions

**Poisoned**, **Weakened**, **Enfeebled**, **Bleeding**, and **Blinded** are defined in [Conditions](conditions.md#afflictions).

Attribute bonuses and penalties from stacked effects cannot exceed **+3** or **−3** per attribute — see [Special Rules — Attribute Modifiers](attributes.md#attribute-modifiers).

---

## Magic Domain Alignment

Magic is grouped into two broad moral categories:

- **Accepted ("good") magic:** Light, Arcane, Nature
- **Forbidden ("bad") magic:** Infernal, Blood, Necromancy

---
