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

Ranged weapons split into two families. **Magic and gunpowder do not mix** on the same retinue (None Domain only).

| Family | Role | Who may take |
|---|---|---|
| **Missile weapons** | Bows, crossbows, slings, thrown — no gunpowder | **All retinues** |
| **Gunpowder weapons** | Firearms and bombs | **None Domain only** |

**Missile weapons** is the standard term for non-gunpowder ranged weapons.

#### Missile weapons

| Category | Weapons |
|---|---|
| **Basic** | Sling, Shortbow, Throwing Stars |
| **Long** | Longbow, Crossbow |
| **Heavy** | Heavy Crossbow |
| **Exotic** | *(none in alpha)* |

#### Gunpowder weapons — firearms

Firearms use a **flat 2d6 loading gate** (difficulty 6+, no stat added). Misfires are equipment failures, not user errors. Double 1s = Misfire, double 6s = Overcharge. Firearms gain **critical hits against all targets** (outside the weapon triangle). Firearms generate a **flat Strike Pool** — values below are the complete pool, not added to the shooter's base stats.

| Tier | Role | Weapons |
|---|---|---|
| **Basic** | Standard-issue infantry gunpowder | Musket, Blunderbuss |
| **Refined** | Refined personal arms — sidearm and precision rifle | Pistol, Long Rifle |

**Flintlock** is a **keyword** (not a tier). Apply when buying any firearm: **−25 Crowns**, **Single Shot** (one fire per game; cannot reload). See [Keywords](#keywords).

#### Gunpowder weapons — bombs

Bombs are thrown explosives (see [Bombs](#bombs)). **Single Shot** — one use per game. None Domain only.

---

## Keywords

### Flintlock

Apply to a **firearm** at recruitment:

- **−25 Crowns** (after base weapon cost)
- **Single Shot** — may fire once per game; cannot reload

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
| Sling | 1H | 3"–12" | 2 | 1 | Flat Strike Pool; normal RC to hit; no loading gate |
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

*Slings generate a flat Strike Pool (2 Mt / 1 Sk) — not added to the shooter's base stats. Uses a normal ranged attack roll (d6 + RC ≥ 8) to hit.*

---

## Gunpowder Weapons — Firearms

**None Domain only.** See [retinue.md](retinue.md) for which firearm **tiers** each Archetype may take.

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

---

## Bombs

Bombs are thrown explosives with a flat Strike Pool that hits all models (friend and foe) within the blast radius of the detonation point. All bombs are **Single Shot** (one use per game). **None Domain only** (gunpowder).

### Throwing a Bomb

1. **Declare a target** (pick a direction/point you're aiming at).
2. **Roll 2d6** (gunpowder gate, same as firearms):
   - **Double 1s:** Bomb explodes in the thrower's hand. Center the blast template on the thrower.
   - **Fail (not double 1s):** Bomb is still thrown but scatters. Roll **d6 + Mt** for distance in inches, then roll a **scatter die** for direction (relative to the declared target). The bomb detonates where it lands.
   - **Pass (≥ 6+):** Bomb is on target. Roll **d6 + Mt** for maximum distance in inches — place the blast marker anywhere along that line up to the rolled distance.
3. All models (friend and foe) under the blast template suffer the Strike Pool.

### Bomb Table

| Weapon | Hands | Distance | Mt | Sk | Notes |
|---|---|---|---|---|---|
| Bomb | 1H | d6 + Mt | 3 | 2 | 3" blast, Single Shot |
| Smoke Bomb | 1H | d6 + Mt | — | — | 6" blast, Single Shot, Smoke |

**Smoke:** Creates a 6" cloud that blocks line of sight for all models. The cloud remains until the end of the round. A fighter may choose to auto-fail the 2d6 gate (see core rules) to detonate the smoke bomb at their feet, creating instant cover centered on themselves.

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
- **Flintlock keyword** — budget Single Shot on any firearm; not a separate weapon line
- **Spear** is **Long** (reach), not Basic
- Firearms generate flat Strike Pools — the gun's power comes from the weapon, not the shooter
- Slings: weakest flat pool, no loading gate — cheapest missile option
- Silver weapons are a pure counter-pick against Nightpack and Nobility
