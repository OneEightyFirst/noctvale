# Combat

---

## Attack Sequence

### Step 1: Build the Strike Pool

The Strike Pool is the fighter's **Mt + Lk**, modified by their weapon.

- The fighter's **Mt** = red dice
- The fighter's **Lk** = blue dice
- The weapon adds **+Mt** (red dice) and/or **+Lk** (blue dice)

A fighter attacking **unarmed** uses only their base Mt and Lk.

### Example

| Weapon | Type | Range | +Mt | +Lk |
|---|---|---|---|---|
| Iron Sword | Melee | Engagement | +2 | — |

A Human (Mt 2, Lk 2) with an Iron Sword: **(2+2) red + (2+0) blue = 4 red + 2 blue = 6 dice**

| Fighter | Base Mt | Base Lk | Weapon | Red | Blue | Total |
|---|---|---|---|---|---|---|
| Human (Mt 2, Lk 2) | 2 | 2 | Iron Sword (+2 Mt) | 4 | 2 | 6 |
| Elf (Mt 1, Lk 3) | 1 | 3 | Shortbow (+2 Lk) | 1 | 5 | 6 |
| Dwarf (Mt 3, Lk 1) | 3 | 1 | War Axe (+2 Mt) | 5 | 1 | 6 |

### Step 2: Roll to Hit

Roll each die in the Strike Pool. For melee attacks, roll **d6 + CC ≥ 8**. For ranged attacks, roll **d6 + RC ≥ 8**.

Each die that meets the threshold is a **hit**. Hits retain their color (red hit or blue hit).

- A natural **1** always misses.
- A natural **6** always hits.

### Step 3: Determine Criticals

If the attacker has **weapon advantage** (see Weapon Triangle), any natural **6** is a **critical hit**.

- Critical hits **cannot be blocked** by defense dice.
- Critical hits retain their color for tracking purposes but bypass defense entirely.

If the attacker does **not** have weapon advantage, 6s are normal hits.

### Step 4: Defender Rolls Defense Dice

The defender generates a defense pool:

**Base defense: 1 red die + 1 blue die**

Then compare **Mt** and **Lk** between attacker and defender:

- For each point the defender's **Mt exceeds** the attacker's Mt → **+1 red defense die**
- For each point the defender's **Lk exceeds** the attacker's Lk → **+1 blue defense die**

If the attacker's Mt or Lk exceeds the defender's, there is no penalty — the defender simply doesn't gain bonus dice for that color.

**Armor** equipment adds additional **red defense dice** to the pool. *(See equipment.md for armor values.)*

For **red defense dice**, roll **d6 + Mt ≥ 8** (toughness absorbs the blow).
For **blue defense dice**, roll **d6 + Lk ≥ 8** (reflexes deflect the blow).

Each successful defense die **blocks one hit** of the matching color:

- **Red defense blocks red hits**
- **Blue defense blocks blue hits**
- **Two successful red defense dice may block one blue hit** (brute force can overcome finesse, but at 2:1 cost)
- **Two successful blue defense dice may block one red hit** (finesse can overcome brute force, but at 2:1 cost)

Critical hits **cannot be blocked**.

### Step 5: Apply Wounds

Each unblocked hit inflicts **1 Wound**.

- When a fighter reaches **0 Wounds**, they become **Downed**.
- An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
- An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.

Downed fighters defend with their **full pool**. Stunned fighters defend with **red dice only** (no blue). *(See conditions.md for full wound state rules.)*

---

## Ranged Reaction

When a fighter is targeted by a **Ranged** action, the target may perform a **single free action** after the attack sequence is fully resolved. This reaction does not cost the target any of their normal actions.

- The reaction triggers whenever the target is **selected as a target**, regardless of whether the attack hits or misses.
- The target may choose **any single action** from the action list (Move, Charge, Melee, Ranged, Brace, Retreat, etc.).
- If the target is **Downed or Out of Action** after the attack resolves, they may not react.
- **A fighter may not perform a Ranged Reaction during their own player's turn.** The active player's fighters cannot react to return fire. This means the sequence is always: shoot → react → done.
- **Cast actions do not trigger Ranged Reactions.** Only Ranged weapon attacks trigger this rule.
- If a fighter is targeted by **multiple Ranged attacks** in the same activation (e.g., the attacker shoots twice), the target gets **one reaction per attack**.
- **A Ranged Reaction cannot trigger another Ranged Reaction.** Reactions only trigger from actions, not from other reactions. This prevents chains.

---

## Weapon Triangle

```
Sword > Axe > Spear > Sword
```

Having advantage over the opposing weapon type grants critical hits on natural 6s.

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
Firearms use the **2d6 loading gate** (same as magic casting) and gain criticals against **all targets**, regardless of weapon type. *(See magic.md for the full 2d6 gate system.)*

---

## Combat Example

**Attacker:** Human Fighter (CC 3, Mt 2, Lk 2) wielding an Iron Sword (+2 Mt)
**Defender:** Dwarf Fighter (CC 3, Mt 3, Lk 1) wielding a Battle Axe (+2 Mt)

**Step 1:** Human Strike Pool = (Mt 2 + Sword 2) red + (Lk 2) blue = **4 red + 2 blue = 6 dice**

**Step 2:** Roll each die, adding CC 3. Need ≥ 8 (so 5+ on the die).
- Red die 1: rolls 5 → 5 + 3 = 8 → **red hit**
- Red die 2: rolls 2 → 2 + 3 = 5 → miss
- Red die 3: rolls 3 → 3 + 3 = 6 → miss
- Red die 4: rolls 1 → auto-miss
- Blue die 1: rolls 6 → auto-hit → **blue hit**
- Blue die 2: rolls 4 → 4 + 3 = 7 → miss

Result: 1 red hit, 1 blue hit (2 hits total)

**Step 3:** Sword vs Axe → Sword has advantage. The natural 6 on Blue die 1 is a **critical blue hit** (unblockable).

**Step 4:** Dwarf defense pool:
- Base: 1 red + 1 blue
- Mt comparison: Dwarf Mt 3 vs Human Mt 2 → Dwarf Mt is 1 higher → +1 red defense die
- Lk comparison: Dwarf Lk 1 vs Human Lk 2 → Dwarf Lk is lower → no bonus
- Total defense: 2 red dice + 1 blue die

Roll defense:
- Red die 1: d6 + Mt 3 → rolls 5 → 8 → **success** (blocks the red hit)
- Red die 2: d6 + Mt 3 → rolls 3 → 6 → fail
- Blue die 1: d6 + Lk 1 → rolls 4 → 5 → fail

The red hit is blocked. The critical blue hit cannot be blocked.

**Step 5:** 1 unblocked wound. The Dwarf takes 1 Wound (4 → 3 remaining).

---

## Design Notes

- The Strike Pool (base Mt/Lk + weapon modifiers) builds directly from the fighter's identity — no separate attack/damage multiplication step
- Weapons add to Mt or Lk, so a weapon's character is inherent: a sword adds Might, a bow adds Luck. The fighter and weapon combine into a single pool
- The red/blue split creates the duelist vs tank distinction: high-Mt fighters generate red hits (blockable by armor), high-Lk fighters generate blue hits (require finesse or 2:1 brute force to block)
- The 2:1 crossover ratio (2R blocks 1B, 2B blocks 1R) means any fighter CAN deal with mismatched hits, but at double cost — color-matched defense is always more efficient
- Criticals as unblockable 6s add tension without a separate crit table, and the weapon triangle rewards tactical awareness
- Defense scaling with Mt/Lk comparisons means fighting someone stronger than you is harder to survive — stat advantages compound across attack and defense
- Armor adding red defense dice means heavy armor is most effective against Might-based attacks and less effective against Luck-based finesse — thematic and mechanically distinct
- Ranged Reactions keep ranged combat deadly without making it oppressive — every shot gives the target agency
- Triggering on target selection (not just hits) means even missed shots have a cost, discouraging low-odds spam
- Reactions only happen on the opponent's turn — the active player accepts the risk of return fire without recourse, giving the target the last word
- Cast not triggering reactions gives magic a distinct tactical niche — safer to use but less accessible than ranged weapons
- Melee is one-directional (attacker rolls, defender defends) — the person who charges first has the initiative advantage, and the "lock" of engagement plus opportunity attacks on failed Retreat provides the defender's counterplay
- **Playtest note:** If melee feels too safe for the attacker, consider adding a free counter-attack for the defender (mirroring Ranged Reactions)
