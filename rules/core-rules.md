# Core Rules

---

## Stat Abbreviations

| Stat | Meaning |
|---|---|
| M | Movement (inches) |
| CC | Close Combat |
| RC | Ranged Combat |
| Mt | Might |
| Lk | Luck |
| Wi | Will |
| Sa | Sanity |
| W | Wounds |

> **Note:** Higher values are better for all stats. CC and RC are added to a d6 roll when making attacks. Mt and Lk determine the number of red and blue dice in a fighter's combat pool. Wi is added to 2d6 when casting spells. Sa is added to a d6 roll when resisting Fear, Panic, and Insanity.

---

## Stat Bounds

All stats range from **1 to 6**.

| Value | Meaning |
|---|---|
| 1 | Disabled — cannot perform actions requiring this stat |
| 2 | Minimal (17% — natural 6 only) |
| 3 | Baseline (33%) |
| 4 | Skilled (50%) |
| 5 | Expert (67%) |
| 6 | Peak (83% — only natural 1 fails) |

A stat of **1** means the fighter is effectively unable to use that stat. If CC drops to 1, they cannot fight in melee. If RC drops to 1, they cannot use ranged weapons. If Mt or Lk drops to 1, they contribute 0 dice of that color. If Wi drops to 1, they cannot cast spells. If Sa drops to 1, they automatically fail all Sanity tests.

---

## Stat Rolls

When a stat is tested, roll **d6 + stat ≥ 8** to succeed.

- A natural **1** always fails.
- A natural **6** always succeeds.
- A stat of **1** automatically fails — the action cannot be attempted.

This applies to CC and RC when attacking, and to other stat checks (Sa, Lk, Wi) when called for by the rules.

---

## Baseline Species Profiles

### Human Fighter
| M | CC | RC | Mt | Lk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 6" | 3 | 3 | 3 | 4 | 3 | 4 | 3 |

### Elf Fighter
| M | CC | RC | Mt | Lk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 7" | 3 | 3 | 3 | 4 | 4 | 3 | 2 |

### Dwarf Fighter
| M | CC | RC | Mt | Lk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 5" | 3 | 3 | 4 | 3 | 3 | 3 | 4 |

---

## Red and Blue Dice

Combat dice are divided into two colors:

- **Red dice** represent Might — physical power, brute force, raw toughness
- **Blue dice** represent Luck — finesse, reflexes, fate, precision

A fighter's **Mt** stat determines their red dice. Their **Lk** stat determines their blue dice. Weapons add directly to Mt or Lk, increasing the red or blue portion of the Strike Pool. The fighter's base stats plus weapon modifiers build the complete attack pool.

---

## Design Notes

- All stats range from 1 to 6. Stat 1 = disabled (can't attempt), Stat 6 = peak (only nat 1 fails). Every point between 2 and 6 represents a ~17% improvement
- All stats are higher-is-better, eliminating the confusion of mixed stat directions
- The beat-8 threshold (d6 + stat ≥ 8) preserves natural 1s as failures and makes stat differences meaningful: each +1 to a stat improves hit rate by ~17%
- Mt and Lk as raw dice counts create immediate mechanical identity: high-Mt fighters hit hard and defend with toughness, high-Lk fighters are precise and defend with evasion. Weapons add directly to these stats, so the pool is always fighter + weapon combined
- Humans are lucky and mentally resilient (Lk 4, Sa 4), Elves are agile and mystical (Lk 4, Wi 4, fast, fragile), Dwarves are tough and sturdy (Mt 4, W 4, slow) — all species are competent at baseline, with species identity expressed as specialty bonuses rather than crippling weaknesses
- Df is no longer a separate stat — defense is derived from base dice (1 red + 1 blue) plus Mt/Lk comparisons
- Wi (Will) is the casting stat — added to 2d6 for spellcasting. Baseline 3 for all species; casters are expected to have Wi 4+. Spell difficulties are calibrated so Wi 4 matches the old flat 2d6 odds
- Sa (Sanity) is the mental defense stat — used to resist Fear, Panic, and Insanity (see sanity.md)
