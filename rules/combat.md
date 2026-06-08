# Combat

---

## Attack Sequence

Before Step 1, declare a valid enemy target. **Clustered enemies** and **friendly fighters in the line of fire** may change or affect targeting — see **Intervening Fighters** in special-rules.md.

> ### Attack Sequence
>
> **Step 1 — Build the Strike Pool:** Fighter **Mt + Sk** + weapon **+Mt / +Sk**. Firearms and damage spells use a **flat Strike Pool** instead (see weapon or spell profile).
>
> **Step 2 — Roll to hit:** **d6 + CC ≥ 8** (melee) or **d6 + RC ≥ 8** (ranged). **Natural 1** misses. **Natural 6** hits.
>
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), **Hammer** vs **Heavy Armor**, magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked except by a **Heavy Armor** critical success.
>
> **Step 4 — Roll defense:** Base **1 red + 1 blue** + bonus dice from **Mt/Sk** comparison. Roll **d6 + Mt ≥ 8** (red) or **d6 + Sk ≥ 8** (blue). Armor and shields **convert** failed defense dice into successes. *(See [Gear — Equipment](gear.md#equipment).)*
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

### Step 1: Build the Strike Pool

The Strike Pool is the fighter's **Mt + Sk**, modified by their weapon.

- The fighter's **Mt** = red dice
- The fighter's **Sk** = blue dice
- The weapon adds **+Mt** (red dice) and/or **+Sk** (blue dice)

A fighter attacking **unarmed** uses only their base Mt and Sk.

### Example

| Weapon | Type | Range | +Mt | +Sk |
|---|---|---|---|---|
| Sword | Melee | Engagement | +1 | +1 |

A Human (Mt 3, Sk 4) with a Sword: **(3+1) red + (4+1) blue = 4 red + 5 blue = 9 dice**

| Fighter | Base Mt | Base Sk | Weapon | Red | Blue | Total |
|---|---|---|---|---|---|---|
| Human (Mt 3, Sk 4) | 3 | 4 | Sword (+1 Mt, +1 Sk) | 4 | 5 | 9 |
| Elf (Mt 3, Sk 4) | 3 | 4 | Shortbow (+2 Sk) | 3 | 6 | 9 |
| Dwarf (Mt 4, Sk 3) | 4 | 3 | War Axe (+2 Mt) | 6 | 3 | 9 |

### Step 2: Roll to Hit

Roll each die in the Strike Pool. For melee attacks, roll **d6 + CC ≥ 8**. For ranged attacks, roll **d6 + RC ≥ 8**.

Each die that meets the threshold is a **hit**. Hits retain their color (red hit or blue hit).

- A natural **1** always misses.
- A natural **6** always hits.

### Step 3: Determine Criticals

Any natural **6** is a **critical hit** if any of the following apply:

- The attacker has **weapon triangle advantage** (see Weapon Triangle) — Sword, Axe, or Spear only
- The attacker wields a **Hammer** and the target is wearing **Heavy Armor**
- The attacker has **magic advantage** (see Magic Triangles)
- The attacker is using a **firearm** (crits against all targets)
- The attacker used the **Aim** action before a Ranged attack

Critical hits **cannot be blocked** by normal defense successes — only by a **critical defense success** from Heavy Armor. Critical hits retain their color for tracking purposes.

If none of the above apply, 6s are normal hits.

### Step 4: Defender Rolls Defense Dice

The defender generates a defense pool:

**Base defense: 1 red die + 1 blue die**

Then compare **Mt** and **Sk** between attacker and defender:

- For each point the defender's **Mt exceeds** the attacker's Mt → **+1 red defense die**
- For each point the defender's **Sk exceeds** the attacker's Sk → **+1 blue defense die**

If the attacker's Mt or Sk exceeds the defender's, there is no penalty — the defender simply doesn't gain bonus dice for that color.

For **red defense dice**, roll **d6 + Mt ≥ 8** (toughness absorbs the blow).
For **blue defense dice**, roll **d6 + Sk ≥ 8** (reflexes deflect the blow).

#### Armor & Shield Conversion

After rolling defense dice, **armor and shields convert failed defense dice into successes**:

- **Armor** converts failed defense dice: Light (2 red or blue → 1 normal success), Medium (1 red → 1 normal success), Heavy (1 red → 1 normal success OR 2 red → 1 critical success)
- **Shields** convert failed red and/or blue defense dice: Buckler (1 blue), Shield (1 red + 1 blue), Tower Shield (2 red + 1 blue)

Armor and shield conversions **stack**. The defender chooses which failed defense dice to convert. Converted dice follow all normal blocking rules. *(See [Gear — Equipment](gear.md#equipment) for full tables.)*

Heavy Armor's critical success is the only way to block incoming critical hits with equipment.

Each successful defense die **blocks one hit** of the matching color:

- **Red defense blocks red hits**
- **Blue defense blocks blue hits**
- **Two successful red defense dice may block one blue hit** (brute force can overcome finesse, but at 2:1 cost)
- **Two successful blue defense dice may block one red hit** (finesse can overcome brute force, but at 2:1 cost)

Critical hits **cannot be blocked** by normal defense successes. Only a **critical defense success** from Heavy Armor can block a critical hit.

### Step 5: Apply Wounds

> ### Apply Wounds
>
> Each unblocked hit inflicts **1 Wound**.
>
> - When a fighter reaches **0 Wounds**, they become **Downed**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **red dice only** (no blue).

*(See `conditions.md` for full wound state rules.)*

After Step 5, if the attack **missed** the declared enemy target and a **friendly fighter** was in the line of fire (firearms and damage spells only), apply **Friendly in the Line of Fire** from special-rules.md.

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

Having advantage over the opposing weapon type grants critical hits on natural 6s. Only **Sword**, **Axe**, and **Spear** participate in the triangle.

**Hammer** is outside the triangle. Hammer wielders do not gain or grant triangle criticals — they use the Hammer crit rule instead (natural 6s vs targets in **Heavy Armor**). If either fighter wields a Hammer, **weapon triangle advantage does not apply** to that melee exchange.

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
Firearms use the **primer roll** and gain criticals against **all targets**, regardless of weapon type. *(See [Gear — Weapons](gear.md#weapons).)*

---

## Combat Example

**Attacker:** Human Fighter (CC 3, Mt 3, Sk 4) wielding a Sword (+1 Mt, +1 Sk)
**Defender:** Dwarf Fighter (CC 3, Mt 4, Sk 3) wielding a Battle Axe (+2 Mt), wearing Medium Armor

**Step 1:** Human Strike Pool = (Mt 3 + Sword 1) red + (Sk 4 + Sword 1) blue = **4 red + 5 blue = 9 dice**

**Step 2:** Roll each die, adding CC 3. Need ≥ 8 (so 5+ on the die).
- Red die 1: rolls 5 → 5 + 3 = 8 → **red hit**
- Red die 2: rolls 2 → 2 + 3 = 5 → miss
- Red die 3: rolls 1 → auto-miss
- Red die 4: rolls 4 → 4 + 3 = 7 → miss
- Blue die 1: rolls 6 → auto-hit → **blue hit**
- Blue die 2: rolls 5 → 5 + 3 = 8 → **blue hit**
- Blue die 3: rolls 4 → 4 + 3 = 7 → miss
- Blue die 4: rolls 3 → 3 + 3 = 6 → miss
- Blue die 5: rolls 5 → 5 + 3 = 8 → **blue hit**

Result: 1 red hit, 3 blue hits (4 hits total)

**Step 3:** Sword vs Axe → Sword has advantage. The natural 6 on Blue die 1 is a **critical blue hit** (unblockable).

**Step 4:** Dwarf defense pool:
- Base: 1 red + 1 blue
- Mt comparison: Dwarf Mt 4 vs Human Mt 3 → Dwarf Mt is 1 higher → +1 red defense die
- Sk comparison: Dwarf Sk 3 vs Human Sk 4 → Human Sk is higher → no bonus
- Total defense: 2 red dice + 1 blue die

Roll defense:
- Red die 1: d6 + Mt 4 → rolls 4 → 8 → **success**
- Red die 2: d6 + Mt 4 → rolls 3 → 7 → fail
- Blue die 1: d6 + Sk 3 → rolls 4 → 7 → fail

**Armor Conversion:** The Dwarf wears Medium Armor — convert 1 failed red defense die into 1 normal success. Red die 2 failed, so it becomes a **normal red success**. Blue die 1 failed but Medium Armor only converts failed red defense dice.

Defense results: 2 red successes, 0 blue successes.
- Red success 1 blocks the red hit (1:1 same color)
- Red success 2: no more red hits to block. Could block a blue hit at 2:1, but only 1 red success remains — not enough.

The critical blue hit cannot be blocked. 2 normal blue hits are unblocked.

**Step 5:** 3 unblocked wounds. The Dwarf takes 3 Wounds (4 → 1 remaining).

---

## Design Notes

- The Strike Pool (base Mt/Sk + weapon modifiers) builds directly from the fighter's identity — no separate attack/damage multiplication step
- Weapons add to Mt or Sk, so a weapon's character is inherent: a sword adds Might, a bow adds Skill. The fighter and weapon combine into a single pool
- The red/blue split creates the duelist vs tank distinction: high-Mt fighters generate red hits (blockable by armor), high-Sk fighters generate blue hits (require finesse or 2:1 brute force to block)
- The 2:1 crossover ratio (2R blocks 1B, 2B blocks 1R) means any fighter CAN deal with mismatched hits, but at double cost — color-matched defense is always more efficient
- Criticals as unblockable 6s add tension without a separate crit table, and the weapon triangle rewards tactical awareness
- Defense scaling with Mt/Sk comparisons means fighting someone stronger than you is harder to survive — stat advantages compound across attack and defense
- Armor rescuing red defense misses means heavy armor is most effective against Might-based attacks and less effective against Skill-based finesse — thematic and mechanically distinct
- Ranged Reactions keep ranged combat deadly without making it oppressive — every shot gives the target agency
- Triggering on target selection means even missed shots have a cost, discouraging low-odds spam
- Reactions only happen on the opponent's turn — the active player accepts the risk of return fire without recourse, giving the target the last word
- Cast not triggering reactions gives magic a distinct tactical niche — safer to use but less accessible than ranged weapons
- Melee is one-directional (attacker rolls, defender defends) — the person who charges first has the initiative advantage, earning weapon triangle crits. The defender's counterplay is engaging on their own activation (as the attacker, with their own weapon triangle crits) or disengaging via Retreat
- Armor conversion turns failed defense dice into successes — the defender chooses which failed dice to convert, creating a decision point. Since most converted dice are red, they block red hits at 1:1 but blue hits at 2:1, making finesse attacks effective against armor
- Heavy Armor's critical success option is the way to block incoming critical hits with armor — a qualitative upgrade beyond raw dice count
