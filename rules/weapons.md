# Weapons

---

## Weapon Categories

Every weapon belongs to an **access category** (what your retinue may buy) and a **weapon type** (Sword, Axe, Spear, or Hammer — used for critical hits in melee).

### Melee — access categories

| Category | Role | Weapons |
|---|---|---|
| **Basic** | Standard one-handed kit | Dagger, Sword, Hand Axe, Mace |
| **Long** | Reach and polearms | Spear, Halberd |
| **Heavy** | Two-handed power weapons | Great Sword, War Axe, War Hammer |
| **Exotic** | Rare or specialist melee | *(none in alpha)* |

### Melee — weapon types

| Type | Critical hits |
|---|---|
| **Sword**, **Axe**, **Spear** | Weapon triangle — natural 6s crit when you have type advantage ([combat.md](combat.md#weapon-triangle)) |
| **Hammer** | **Outside the triangle** — natural 6s crit only vs targets wearing **Heavy Armor** |

### Ranged — access categories

Ranged weapons split into two families. **Magic and gunpowder do not mix** on the same retinue (Mortal Domain only).

| Family | Role | Who may take |
|---|---|---|
| **Missile weapons** | Bows, crossbows, slings, thrown — no gunpowder | **All retinues** |
| **Gunpowder weapons** | Firearms and bombs | **Mortal Domain only** |

**Missile weapons** is the standard term for non-gunpowder ranged weapons.

#### Missile weapons

| Category | Weapons |
|---|---|
| **Basic** | Sling, Shortbow, Throwing Stars |
| **Long** | Longbow, Crossbow |
| **Heavy** | Heavy Crossbow |
| **Exotic** | *(none in alpha)* |

#### Gunpowder weapons — firearms

Firearms use a **flat primer roll** (**2d6**, difficulty **6+**, no stat added). Misfires are equipment failures. Double 1s = **Misfire**, double 6s = **Overcharge**. Firearms gain **critical hits against all targets** (outside the weapon triangle). Firearms generate a **flat Strike Pool** — values below are the complete pool, independent of the shooter's base stats.

| Tier | Role | Weapons |
|---|---|---|
| **Basic** | Standard-issue infantry gunpowder | Musket, Blunderbuss |
| **Refined** | Refined personal arms — sidearm and precision rifle | Pistol, Long Rifle |

**Flintlock** is a **keyword**. Apply when buying any firearm: **−25 Crowns**, **Single Shot** (one fire per game; cannot reload). See [Keywords](#keywords).

#### Gunpowder weapons — bombs

Bombs are thrown explosives (see [Bombs](#bombs)). **Single Shot** — one use per game. Mortal Domain only.

---

## Keywords

### Flintlock

Apply to a **firearm** at recruitment:

- **−25 Crowns** (after base weapon cost)
- **Single Shot** — may fire once per game; cannot reload *(one use per battle)*

Any firearm may take Flintlock. A Refined Pistol with Flintlock costs 90 − 25 = **65 Crowns**.

---

## Weapon Slots

Each fighter has **3 weapon slots**. One-handed weapons and shields take **1 slot**. Two-handed weapons take **2 slots**.

---

## Melee Weapons

### Basic

| Weapon | Hands | +Mt | +Sk | Type | Notes |
|---|---|---|---|---|---|
| Dagger | 1H | — | +1 | Sword | Fast, finesse |
| Sword | 1H | +1 | +1 | Sword | Balanced baseline |
| Hand Axe | 1H | +2 | — | Axe | Baseline axe |
| Mace | 1H | +2 | — | Hammer | Anti-plate; crits vs Heavy Armor only |

### Long

| Weapon | Hands | +Mt | +Sk | Type | Notes |
|---|---|---|---|---|---|
| Spear | 1H | +1 | +1 | Spear | Balanced reach |
| Halberd | 2H | +2 | +1 | Spear | Reach, versatile |

### Heavy

| Weapon | Hands | +Mt | +Sk | Type | Notes |
|---|---|---|---|---|---|
| Great Sword | 2H | +2 | +1 | Sword | Heavy, powerful |
| War Axe | 2H | +3 | — | Axe | Heavy hitter |
| War Hammer | 2H | +3 | — | Hammer | Anti-plate; crits vs Heavy Armor only |

---

## Missile Weapons

Minimum range **3"** unless noted. Missile weapons are available to **all retinues** regardless of Archetype or Domain.

### Basic

| Weapon | Hands | Range | +Mt | +Sk | Notes |
|---|---|---|---|---|---|
| Shortbow | 2H | 3"–18" | — | +2 | Fast, Sk-dominant |
| Sling | 1H | 3"–12" | 2 | 1 | Flat Strike Pool; normal RC to hit; no primer roll |
| Throwing Stars | 1H | 0"–8" | — | +1 | No min range, thrown; additive |

### Long

| Weapon | Hands | Range | +Mt | +Sk | Notes |
|---|---|---|---|---|---|
| Longbow | 2H | 3"–24" | — | +2 | Longer range, stronger |
| Crossbow | 2H | 3"–24" | +2 | — | Mt-dominant, mechanical |

### Heavy

| Weapon | Hands | Range | +Mt | +Sk | Notes |
|---|---|---|---|---|---|
| Heavy Crossbow | 2H | 3"–30" | +3 | — | Slow, powerful |

*Slings generate a flat Strike Pool (2 Mt / 1 Sk), independent of the shooter's base stats. Uses a normal ranged attack roll (d6 + RC ≥ 8) to hit.*

---

## Gunpowder Weapons — Firearms

**Mortal Domain only.** See [retinue.md](retinue.md) for which firearm **tiers** each Archetype may take.

### Basic

| Weapon | Hands | Range | Difficulty | Mt | Sk | Notes |
|---|---|---|---|---|---|---|
| Musket | 2H | 3"–24" | 6+ | 5 | 3 | Standard infantry firearm |
| Blunderbuss | 2H | 0"–10" | 6+ | 6 | — | No min range, short range, brutal |

### Refined

| Weapon | Hands | Range | Difficulty | Mt | Sk | Notes |
|---|---|---|---|---|---|---|
| Pistol | 1H | 0"–12" | 6+ | 5 | 2 | No min range; refined sidearm |
| Long Rifle | 2H | 3"–30" | 6+ | 6 | 2 | Long range; precision piece |

> ### Primer Roll (2d6)
>
> Roll **2d6** against the firearm's loading difficulty. No stat is added.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Misfire** — see weapon notes |
> | **Below difficulty** | The gun fails to fire. The action is spent |
> | **Meets or exceeds difficulty** | The gun fires. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |

> ### Attack Sequence
>
> **Step 1 — Build the Strike Pool:** Fighter **Mt + Sk** + weapon **+Mt / +Sk**. Firearms and damage spells use a **flat Strike Pool** instead (see weapon or spell profile).
>
> **Step 2 — Roll to hit:** **d6 + CC ≥ 8** (melee) or **d6 + RC ≥ 8** (ranged). **Natural 1** misses. **Natural 6** hits.
>
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), **Hammer** vs **Heavy Armor**, magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked except by a **Heavy Armor** critical success.
>
> **Step 4 — Roll defense:** Base **1 red + 1 blue** + bonus dice from **Mt/Sk** comparison. Roll **d6 + Mt ≥ 8** (red) or **d6 + Sk ≥ 8** (blue). Armor and shields **convert** failed defense dice into successes. *(See `equipment.md`.)*
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
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **red dice only** (no blue).

*(Full step-by-step rules: `combat.md`.)*

---

## Bombs

Bombs are thrown explosives with a flat Strike Pool that hits all fighters (friend and foe) within the blast radius of the detonation point. All bombs are **Single Shot** (one use per game). **Mortal Domain only** (gunpowder).

### Throwing a Bomb

1. **Declare a target** (pick a direction/point you're aiming at).
2. **Roll the primer roll** (**2d6**, same as firearms):
   - **Double 1s:** Bomb explodes in the thrower's hand. Center the blast template on the thrower.
   - **Fail (not double 1s):** Bomb is still thrown but scatters. Roll **d6 + Mt**. Move the detonation point that many **"** from the declared target, using a **scatter die** for direction.
   - **Pass (≥ 6+):** Bomb is on target. Roll **d6 + Mt** for maximum distance — place the blast marker anywhere along the line to the declared target up to that many **"**.
3. All fighters (friend and foe) under the blast template suffer the Strike Pool.

### Bomb Table

| Weapon | Hands | Distance | Mt | Sk | Notes |
|---|---|---|---|---|---|
| Bomb | 1H | d6 + Mt | 3 | 2 | 3" blast, Single Shot |
| Smoke Bomb | 1H | d6 + Mt | — | — | 6" blast, Single Shot, Smoke |

**Smoke:** Creates a 6" cloud that blocks line of sight for all fighters. The cloud remains until the end of the round. A fighter may choose to deliberately fail the **primer roll** to detonate the smoke bomb at their feet, creating instant cover centered on themselves.

---

## Weapon Materials

Weapons can be made from special materials that grant bonuses against specific factions. Material upgrades increase the weapon's cost but do not take a weapon slot.

| Material | Effect | Notes |
|---|---|---|
| Silver | +1 to hit vs **Nightpack** and **Nobility** only | Expensive, no general benefit |

---

## Design Notes

- **Hammer type** — plate-breakers; no triangle crits, but natural 6s crit vs **Heavy Armor** only. Makes hammers a counter-pick to Knights without rewriting the triangle
- **Refined firearms** — Pistol and Long Rifle; personal arms vs Basic-issue Musket/Blunderbuss
- **Flintlock keyword** — budget Single Shot option on any firearm
- **Spear** is **Long** (reach)
- Firearms generate flat Strike Pools — power comes from the weapon profile
- Slings: weakest flat pool, no primer roll — cheapest missile option
- Silver weapons are a pure counter-pick against Nightpack and Nobility
