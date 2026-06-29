# Weapons

Combat rules for melee, missile, and gunpowder weapons. Profiles and Crown costs: [Crown costs](#crown-costs) above.

## Weapon proficiencies

Most weapons belong to a **weapon proficiency** (what a fighter must be trained in to equip it) and a **weapon type** (Sword, Axe, Spear, or Hammer — used for critical hits in melee). Fighters gain proficiencies through the **Proficiency** feat at roster creation (see [Feats](retinue-building.md)).

**Dagger** is the exception. Any fighter may equip a **Dagger** without a **Proficiency** feat.

Your **Archetype** sets which proficiencies appear on that fighter's **Proficiency** menu.

| Proficiency | Weapons |
|---|---|
| **One-Handed** | Sword, Hand Axe, Mace, Spear |
| **Two-Handed** | Halberd, Great Sword, War Axe, War Hammer, Staff |
| **Archery** | Shortbow, Longbow, Crossbow, Heavy Crossbow |
| **Thrown** | Sling, Throwing Stars |

Gunpowder weapons are not a proficiency. They require the **Firearms** domain feat *(Mortal)* — see [Feats — Firearms](feats.md#firearms). When every fighter in the retinue has **Mortal**, your retinue may purchase firearms and bombs from the lists below.

| Gunpowder | Weapons |
|---|---|
| **Firearms** | Musket, Blunderbuss, Pistol, Long Rifle, bombs |

Shields are armor-tier gear. They do not require **One-Handed** proficiency and do not use weapon slots.

### Melee — weapon types

| Type | Critical hits |
|---|---|
| **Sword**, **Axe**, **Spear** | Weapon triangle — natural 6s crit when you have type advantage ([Combat](combat.md#weapon-triangle)) |
| **Hammer** | **Outside the triangle** — natural 6s crit only vs targets wearing **Heavy Armor** |

### Staff — Spell focus

A fighter wielding a **Staff** has **Spell focus**.

Once per **battle**, when this fighter makes a **casting roll** that fails to meet the spell's casting difficulty, reroll the **Casting Roll** once. Must accept the second result.

If the first roll was **Mishap**, resolve it as normal — do not reroll.

### Firearms

When every fighter in the retinue has the **Mortal** keyword, your retinue may purchase firearms. A fighter equips a firearm only if they have the **Firearms** domain feat.

Firearms use a **primer roll** (**2d6** + **Skill**). **Double 1s** = **Misfire**. Firearms gain **critical hits against all targets** (outside the weapon triangle). Firearms generate a **flat Strike Pool** — profile values are the complete pool, independent of the shooter's base attributes.

Bombs are thrown explosives (see [Bombs](#bombs)). **Single Shot** — one use per battle. Require the **Firearms** domain feat. Fighter must have **Mortal** and must lack **Caster**.

## Firearms

Firearms are fired with the **Ranged** action. Requires the **Firearms** domain feat. When every fighter in the retinue has the **Mortal** keyword, your retinue may purchase firearms.

> ### Primer Roll (2d6 + **Skill**)
>
> Roll **2d6** + **Skill** against the weapon's **primer difficulty** (see weapon profile).
>
> Profile values assume a **Human** shooter (**Skill** 3). At other **Skill**, use primer difficulty − 3 + **Skill**.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Misfire** — see weapon notes |
> | **Below difficulty** | The gun fails to fire. The action is spent |
> | **Meets or exceeds difficulty** | The gun fires. Resolve the **Attack Sequence** |

### Pistols

A **Pistol** takes **1 weapon slot**. A fighter with **2 Pistols** and no **Brace of Pistols** uses **2 weapon slots**.

**Brace of Pistols** — equipment that takes **1 weapon slot** and holds **2 Pistols**. Requires the **Firearms** domain feat. Fighter must have **Mortal** and must lack **Caster**. Crown cost: [Crown costs — Firearms](#crown-costs-firearms-requires-mortal-forbids-caster).

- **Fire a Pistol:** One **Ranged** action. Choose one equipped **Pistol**. Resolve the **Primer Roll** and **Attack Sequence** normally.
- **Gunslinger** *(requires **Mortal**)*: One **Ranged** action fires both **Pistols** in the fighter's **Brace of Pistols** (or both equipped **Pistols** if carried without a **Brace**) — each with its own **Primer Roll** and **Attack Sequence**. The fighter cannot take another **Ranged** action during that activation. See [Feats — Gunslinger](feats.md#gunslinger).

## Bombs

Bombs are thrown explosives with a flat Strike Pool that hits all fighters (friend and foe) within the blast radius of the detonation point. All bombs are **Single Shot** (one use per battle). Fighter must have **Mortal** and must lack **Caster**.

### Throwing a bomb

Use the **Ranged** action.

1. **Declare a target** (pick a direction/point you're aiming at).
2. **Roll the Primer Roll** (see [Bomb table](#bomb-table)):
   - **Double 1s:** Bomb explodes in the thrower's hand. Center the blast template on the thrower.
   - **Fail (below difficulty, not double 1s):** Bomb is still thrown but scatters. Roll **d6** + **Might**. Move the detonation point that many **"** from the declared target, using a **scatter die** for direction.
   - **Pass:** Bomb is on target. Roll **d6** + **Might** for maximum distance — place the blast marker anywhere along the line to the declared target up to that many **"**.
3. All fighters (friend and foe) under the blast template suffer the Strike Pool.

### Bomb table

| Weapon | Hands | Distance | Primer | Mt | Sk | Notes |
|---|---|---|---|---|---|---|
| Bomb | 1H | d6 + Mt | 9+ | 3 | 2 | 3" blast, Single Shot |
| Smoke Bomb | 1H | d6 + Mt | 8+ | — | — | 6" blast, Single Shot, Smoke |

**Smoke:** Creates a 6" cloud that blocks line of sight for all fighters. The cloud remains until the end of the round. A fighter may choose to deliberately fail the **Primer Roll** to detonate the smoke bomb at their feet, creating instant cover centered on themselves.

---
