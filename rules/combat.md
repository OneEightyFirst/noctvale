# Combat

---

## Attack Sequence

### Step 1: Determine the Strike Pool

The weapon determines the **total number of dice** in the Strike Pool.

**Strike Pool = Attacks × Damage**

### Example Weapon
| Name | Type | Range | Attacks | Damage | Accuracy |
|---|---|---|---|---|---|
| Iron Sword | Melee | Engagement | A1 | D4 | Ac0 |

Strike Pool = **4 dice**

Accuracy (Ac) modifies the Strike Pool directly. Ac+1 adds 1 die, Ac-1 removes 1 die, Ac0 has no effect.

### Step 2: Split into Red and Blue Dice

The attacker's **Mt:Lk ratio** determines how many dice are red and how many are blue.

Divide the Strike Pool proportionally. Round fractions in favor of the **higher stat**. If Mt and Lk are equal, round in favor of **red**.

**Examples with a 4-die Strike Pool:**

| Fighter | Mt | Lk | Ratio | Red | Blue |
|---|---|---|---|---|---|
| Human | 2 | 2 | 1:1 | 2 | 2 |
| Elf | 1 | 3 | 1:3 | 1 | 3 |
| Dwarf | 3 | 1 | 3:1 | 3 | 1 |

### Step 3: Roll to Hit

Roll each die in the Strike Pool. For melee attacks, roll **d6 + CC ≥ 8**. For ranged attacks, roll **d6 + RC ≥ 8**.

Each die that meets the threshold is a **hit**. Hits retain their color (red hit or blue hit).

- A natural **1** always misses.
- A natural **6** always hits.

### Step 4: Determine Criticals

If the attacker has **weapon advantage** (see Weapon Triangle), any natural **6** is a **critical hit**.

- Critical hits **cannot be blocked** by defense dice.
- Critical hits retain their color for tracking purposes but bypass defense entirely.

If the attacker does **not** have weapon advantage, 6s are normal hits.

### Step 5: Defender Rolls Defense Dice

The defender generates a defense pool:

**Base defense: 1 red die + 1 blue die**

Then compare **Mt** and **Lk** between attacker and defender:

- For each point the defender's **Mt exceeds** the attacker's Mt → **+1 red defense die**
- For each point the defender's **Lk exceeds** the attacker's Lk → **+1 blue defense die**

If the attacker's Mt or Lk exceeds the defender's, there is no penalty — the defender simply doesn't gain bonus dice for that color.

**Armor** equipment adds additional **red defense dice** to the pool. *(Armor values to be defined in equipment lists.)*

The defender rolls all defense dice using the same threshold: **d6 + T-stat ≥ 8**.

For **red defense dice**, roll **d6 + Mt ≥ 8** (toughness absorbs the blow).
For **blue defense dice**, roll **d6 + Lk ≥ 8** (reflexes deflect the blow).

Each successful defense die **blocks one hit** of the matching color:

- **Red defense blocks red hits**
- **Blue defense blocks blue hits**
- **Two successful red defense dice may block one blue hit** (brute force can overcome finesse, but at 2:1 cost)

Critical hits **cannot be blocked**.

### Step 6: Apply Wounds

Each unblocked hit inflicts **1 Wound**.

When a fighter reaches **0 Wounds**, they become **Downed**. *(See conditions.md.)*

---

## Ranged Reaction

When a fighter is targeted by a **Ranged** action, the target may perform a **single free action** after the attack sequence is fully resolved. This reaction does not cost the target any of their normal actions.

- The reaction triggers whenever the target is **selected as a target**, regardless of whether the attack hits or misses.
- The target may choose **any single action** from the action list (Move, Charge, Melee, Ranged, Defend, Retreat, etc.).
- If the target is **Downed or Out of Action** after the attack resolves, they may not react.
- **A fighter may not perform a Ranged Reaction during their own player's turn.** The active player's fighters cannot react to return fire. This means the sequence is always: shoot → react → done.
- **Cast actions do not trigger Ranged Reactions.** Only Ranged weapon attacks trigger this rule.

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
Firearms gain criticals against **all targets**, regardless of weapon type.

---

## Combat Example

**Attacker:** Human Fighter (CC 3, Mt 2, Lk 2) wielding an Iron Sword (A1, D4, Ac0)
**Defender:** Dwarf Fighter (CC 3, Mt 3, Lk 1) wielding a Battle Axe

**Step 1:** Strike Pool = 1 × 4 = 4 dice

**Step 2:** Human Mt:Lk is 2:2 → 2 red dice + 2 blue dice

**Step 3:** Roll each die, adding CC 3. Need ≥ 8 (so 5+ on the die).
- Red die 1: rolls 5 → 5 + 3 = 8 → **red hit**
- Red die 2: rolls 2 → 2 + 3 = 5 → miss
- Blue die 1: rolls 6 → auto-hit → **blue hit**
- Blue die 2: rolls 4 → 4 + 3 = 7 → miss

Result: 1 red hit, 1 blue hit (2 hits total)

**Step 4:** Sword vs Axe → Sword has advantage. The natural 6 on Blue die 1 is a **critical blue hit** (unblockable).

**Step 5:** Dwarf defense pool:
- Base: 1 red + 1 blue
- Mt comparison: Dwarf Mt 3 vs Human Mt 2 → Dwarf Mt is 1 higher → +1 red defense die
- Lk comparison: Dwarf Lk 1 vs Human Lk 2 → Dwarf Lk is lower → no bonus
- Total defense: 2 red dice + 1 blue die

Roll defense:
- Red die 1: d6 + Mt 3 → rolls 5 → 8 → **success** (blocks the red hit)
- Red die 2: d6 + Mt 3 → rolls 3 → 6 → fail
- Blue die 1: d6 + Lk 1 → rolls 4 → 5 → fail

The red hit is blocked. The critical blue hit cannot be blocked.

**Step 6:** 1 unblocked wound. The Dwarf takes 1 Wound (4 → 3 remaining).

---

## Design Notes

- The Strike Pool (Attacks × Damage) creates a single dice pool rather than separate attack and damage rolls — this keeps combat fast
- The red/blue split creates the duelist vs tank distinction: high-Mt fighters generate red hits (blockable by armor), high-Lk fighters generate blue hits (require finesse or 2:1 brute force to block)
- The 2:1 red-blocks-blue ratio means tanks CAN deal with duelists, but inefficiently — this is an intentional asymmetry
- Criticals as unblockable 6s add tension without a separate crit table, and the weapon triangle rewards tactical awareness
- Defense scaling with Mt/Lk comparisons means fighting someone stronger than you is harder to survive — stat advantages compound across attack and defense
- Armor adding red defense dice means heavy armor is most effective against Might-based attacks and less effective against Luck-based finesse — thematic and mechanically distinct
- Ranged Reactions keep ranged combat deadly without making it oppressive — every shot gives the target agency
- Triggering on target selection (not just hits) means even missed shots have a cost, discouraging low-odds spam
- Reactions only happen on the opponent's turn — the active player accepts the risk of return fire without recourse, giving the target the last word
- Cast not triggering reactions gives magic a distinct tactical niche — safer to use but less accessible than ranged weapons
