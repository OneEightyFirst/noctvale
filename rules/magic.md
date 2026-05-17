# Magic

---

## Casting

Casting a spell is a single **Cast** action. The caster rolls **2d6** against the spell's **casting difficulty**.

- Spells can be cast **while in melee**
- Cast actions **do not trigger Ranged Reactions**

### 2d6 Outcomes

| Result | Effect |
|---|---|
| **Double 1s** | **Mishap** — the spell fails and the caster suffers the spell's unique backlash effect |
| **Below difficulty** | The spell fizzles. The action is spent, nothing happens |
| **Meets or exceeds difficulty** | The spell goes off. Resolve the attack normally |
| **Double 6s** | **Overcharge** — the spell goes off and all dice in the Strike Pool auto-succeed as hits. Still roll to check for natural 6s (criticals) |

### Damage Spells

If the spell deals damage, it acts as a **temporary weapon**. The spell defines +Mt and/or +Lk values, a range, and any special properties.

Once the spell goes off, resolve the attack using the standard combat sequence:

1. **Build Strike Pool** — fighter's base Mt/Lk + the spell's +Mt/+Lk
2. **Roll to hit** — d6 + RC ≥ 8 for ranged spells, d6 + CC ≥ 8 for melee spells
3. **Defender rolls defense** — normal defense pool rules apply
4. **Apply wounds** — as normal

Spells are generally **more powerful than standard weapons** (+3 or +4 rather than +2), compensating for the casting gate and Mishap risk.

---

## Firearms

Firearms use the same 2d6 gate system as magic, representing the unreliability of black powder weapons.

The shooter rolls **2d6** against the firearm's **loading difficulty**.

| Result | Effect |
|---|---|
| **Double 1s** | **Misfire** — the gun explodes. The shooter takes damage *(Misfire effects to be defined per weapon)* |
| **Below difficulty** | The gun fails to fire. The action is spent |
| **Meets or exceeds difficulty** | The gun fires. Resolve the attack normally |
| **Double 6s** | **Overcharge** — the gun fires and all dice in the Strike Pool auto-succeed as hits. Still roll for crits |

Firearms gain **critical hits against all targets**, regardless of weapon type — they exist outside the weapon triangle.

Once the firearm fires, resolve the attack using the standard combat sequence, the same as a damage spell.

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

Two separate triangles govern how magic interacts with opposing magic.

### Mystic Triangle
```
Light > Infernal > Arcane > Light
```

### Natural Triangle
```
Nature > Necromancy > Blood > Nature
```

Having advantage in the triangle grants **critical hits** when attacking with magic, matching the weapon triangle system.

---

## Spell Design Rule

Each magic class contains at least **one ranged damage spell** functionally similar to **Arcane Bolt** — a baseline offensive option that every caster type can access.

---

## Spell Concepts

Example spells discussed during design:

| Spell | Class | Difficulty | +Mt | +Lk | Range | Notes |
|---|---|---|---|---|---|---|
| Arcane Bolt | Arcane | 7+ | — | +3 | 20" | Fast, high-finesse spell |
| Radiant Strike | Light | 7+ | +3 | — | 12" | Raw power; +2 Mt vs Undead |
| Thorn Volley | Nature | 8+ | +2 | +2 | 12" | Template / shotgun-like |
| Deathbolt | Necromancy | 10+ | — | +4 | 18" | All blue dice, ignores armor |

---

## Status & Affliction Ideas

Magic may inflict status effects tied to specific domains:

| Affliction | Associated Domain |
|---|---|
| Enfeebled | Blood |
| Weakened | Necromancy |
| *(TBD)* | Infernal |

Arcane, Radiant (Light), and Nature spells could potentially **remove** these afflictions, creating a cleanse / debuff dynamic between magic categories.

---

## Magic Domain Alignment

Magic is grouped into two broad moral categories:

- **Accepted ("good") magic:** Light, Arcane, Nature
- **Forbidden ("bad") magic:** Infernal, Blood, Necromancy

---

## Design Notes

- 2d6 casting (rather than a single d6) gives a bell curve — most spells go off, but Mishaps on double 1s are rare and dramatic (~2.8%)
- Double 6s Overcharge is equally rare (~2.8%) and creates spectacular moments without adding complexity — all hits land, just check for crits
- The Mishap system means every spell is a calculated risk, not a guaranteed tool
- Spells being more powerful than weapons (+3/+4 vs +2) is the payoff for the casting gate — a sword always works, a spell might fizzle or backfire
- Firearms sharing the 2d6 gate with magic unifies two "unreliable but powerful" systems under one mechanic — guns are the martial equivalent of spellcasting
- Mirroring the weapon triangle with magic triangles creates a unified advantage-and-critical framework across all combat types
- Firearms gaining crits against all targets (outside the triangle) is their payoff for the loading risk
- Cast not triggering Ranged Reactions gives magic a distinct tactical niche compared to conventional ranged weapons
- The "at least one Arcane Bolt equivalent" ensures every magic class has offensive utility
