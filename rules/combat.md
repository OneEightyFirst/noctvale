# Combat

---

## Strike Pool

Combat uses a Strike Pool system.

**Strike Pool = Attacks × Damage**

The Strike Pool is the total number of dice rolled when attacking.

### Example Weapon
| Name | Type | Range | Attacks | Damage | Accuracy |
|---|---|---|---|---|---|
| Iron Sword | Melee | Engagement | A1 | D4 | Ac0 |

Strike Pool = **4 dice**

---

## Strength vs Toughness

Strength (St) and Toughness (T) modify the final Strike Pool after weapon dice are generated.

- If the attacker's **Strength is better** than the defender's Toughness → attacker **gains dice**
- If the defender's **Toughness is better** than the attacker's Strength → attacker **loses dice**

---

## Defense

Defenders roll their Defense Dice (Df) after the attacker generates strikes.

- Each success **blocks one strike**
- **Critical hits cannot be blocked** by defense dice

---

## Critical System

Criticals occur when a weapon has **advantage** over the defender's weapon type (see Weapon Triangle).

- Critical hits occur on **6s**
- Critical hits **cannot be blocked**

---

## Weapon Triangle

```
Sword > Axe > Spear > Sword
```

Having advantage over the opposing weapon type grants critical hits on 6s.

---

## Magic Triangles

Two separate triangles govern magic vs. magic interactions.

### Mystic Triangle
```
Light > Infernal > Arcane > Light
```

### Natural Triangle
```
Nature > Necromancy > Blood > Nature
```

### Firearms
Firearms gain criticals against **all targets**, regardless of weapon type.

---

## Design Explorations

Ideas explored during development that may inform future iteration:

### Defense and Survivability Alternatives
- Subtractive defenses: Luck suppresses Attacks, Armor suppresses Damage
- +1 / -1 adjustments based on stat comparisons
- Defense dice based on Luck and Might comparisons
- Base defense of 1 blue + 1 red plus adjustments from comparisons

### Colored Dice Pool Experiments
- Red dice for Might (Mt), Blue dice for Luck (Lk)
- Max dice pool caps tested: 6 and 8
- Color-specific blocking: blue blocks blue, red blocks red, two red may block one blue
- Considered as an alternative to or evolution of Strike Pool / defense systems

### To-Hit and Stat Framework Explorations
- Pivot explored from "5+" target-number system toward "stat + die = threshold" to make higher numbers intuitively better
- Target of ≥8 discussed to preserve natural 1s as failures (1 + 6 should not always hit)
- CC / RC as to-hit skills; Lk and Mt to determine number of dice rolled
- Might (Mt) explored as a merged Strength / Toughness stat
- Wounds plus Defense handled survival
- Defense dice responding to Lk / Mt comparisons: +1 die for being 1 higher, +2 dice for being 2 higher

### Ranged Combat Notes
- RC used to hit in ranged combat
- Ranged Strike Pool may derive from weapon stats rather than fighter stats
- Ranged / magic crits should probably be rarer than melee crits
- One idea: ranged / magic crits on pairs of 6s; sniper designs might reduce to single die

### Key Design Tension
- Does Noctvale want fast Strike Pool lethality, or dramatic back-and-forth melee duels?
- If keeping Strike Pool, what creates the duelist / tank distinction?
- If adopting opposed melee (like Black Death City), what happens to the weapon and magic critical triangles?
- If keeping defense dice, how does armor always matter without crits bypassing too much?

---

## Design Notes

- The Strike Pool (Attacks × Damage) creates a single dice pool rather than separate attack and damage rolls — this keeps combat fast
- Criticals as unblockable 6s add meaningful tension without a separate crit table
- The weapon triangle rewards list-building awareness and tactical positioning
