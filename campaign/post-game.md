# Post-Game Sequence

After each battle, resolve the steps below **in order**. Each step uses tables
or scenario rewards — apply the result, then move on.

This is the campaign loop: **injuries → Survival Rolls → economy → advancement**.
Influences: Mordheim casualty rolls, Necromunda lasting injuries, and Warhammer
Quest post-quest events.

---

## Sequence at a Glance

1. **Scenario Results** — victory rewards and Relics recovered on the table
2. **Casualties** — every fighter who ended the battle **Out of Action** rolls on the **Casualty Table**
3. **Doom** — any fighter directed to this table rolls **2d6**
4. **Survival Rolls** — winner rolls location; loser rolls Generic ([survival rolls](survival-rolls.md))
5. **Economy** — sell Relics, recruit, equip ([economy.md](economy.md), [retinue building](../rules/retinue-building.md))
6. **Experience & Advancement** — award XP; spend on **Advancement** (optional — only if the player buys rolls)

---

## Step 1: Scenario Results

Resolve the scenario's victory rewards and any Relics recovered on the table.

Scenario rewards are static. Do not roll for scenario rewards.

Set recovered Relics aside until Step 5.

---

## Step 2: Casualty Table

Each fighter who was **Out of Action** when the battle ended rolls **1d6** on
this table.

Fighters who were **Downed or Stunned** but not Out of Action skip this table —
they are battered but return next battle with no roll.

| d6 | Result |
|---|---|
| 1 | **Slain** — remove the fighter from your retinue. Skip Doom and Experience for this fighter. |
| 2 | **Grievous** — roll on the **Doom Table** (2d6). |
| 3 | **Scarred** — return next battle; permanently **−1** to one stat of your choice (minimum 1). |
| 4 | **Convalescent** — survives but **misses the next battle**. |
| 5 | **Battered** — return next battle; no permanent effect. |
| 6 | **Hardy** — return next battle; gain **+1 Experience**. |

---

## Step 3: Doom Table

Roll **2d6** when directed from the **Casualty Table** (Grievous), or from a
Survival Roll Mishap if noted.

Permanent injuries reduce stats. Stats cannot drop below **1**. Campaign advancement may later raise stats again (max **6**).

| 2d6 | Doom |
|---|---|
| 2 | **Slain** — remove the fighter from your retinue. |
| 3 | **Crippled** — M −1". |
| 4 | **Severed Hand** — CC −1 **or** RC −1 (your choice). |
| 5 | **Shattered Nerve** — Sa −1. |
| 6 | **Old Wound** — W −1. |
| 7 | **Surface Scars** — no stat loss; the fighter is **Marked** (flavor only, or scenario hook). |
| 8 | **Head Wound** — Wi −1 **or** Sa −1 (your choice). |
| 9 | **Chest Wound** — Mt −1. |
| 10 | **Ruined Eye** — RC −1 **or** Sk −1 (your choice). |
| 11 | **Spirit-Touched** — the fighter misses the next battle. |
| 12 | **Miraculous** — full recovery; gain **+2 Experience**. |

---

## Step 4: Survival Rolls

Run [Survival Rolls](survival-rolls.md).

Survival Rolls may award Relics, Crowns, gear, and Mishaps. Set recovered Relics
aside until Step 5.

---

## Step 5: Economy

1. Total Relics recovered this battle from scenario rewards, Looting, and
   Survival Rolls.
2. Sell Relics for Crowns ([economy.md](economy.md#selling-relics)).
3. Recruit fighters and buy gear.

---

## Step 6: Experience & Advancement

XP is a **bank per fighter** — earned from specific deeds, **spent** to buy advancement rolls. There are **no levels** and no thresholds. If you have the XP, you can spend it (usually at the end of this step, between battles).

### Earning XP

Add XP to each fighter's bank when the condition applies:

| Source | XP |
|---|---|
| Fought in the battle (Active at battle end) | +1 |
| Went **Out of Action** but survived the Casualty Table | +1 |
| **Hardy** (Casualty Table d6) | +1 |
| **Miraculous** (Doom Table 2d6) | +2 |
| Retinue achieved a scenario objective | +1 *(once per fighter)* |
| Each Relic the retinue recovered this battle | +1 *(every fighter)* |
| Took an enemy **Leader** **Out of Action** | +2 *(to the fighter who resolved the action)* |
| Scenario bonus *(when listed)* | As written |

Track **Experience** on the fighter card as a running total. Unspent XP carries forward.

### Spending XP — Advancement Rolls

Spend XP from a fighter's bank to roll on **one** advancement table. Pay the cost **before** rolling; deduct XP immediately. You may spend multiple times on the same fighter in one post-game if they can afford it.

| Advancement | XP cost | Roll |
|---|---|---|
| **Feat** | **2** | 2d6 on [Feat Advancement Table](../rules/feats.md#feat-advancement-table) *(use Keyword until eligible feat lists are complete)* |
| **Keyword** | **2** | 2d6 on Keyword Advancement Table |
| **Stat** | **5** | 2d6 on Stat Advancement Table |

**Stats cost more than feats.** Raw stat growth is a major investment; feats and keywords are the usual progression spend.

**Keyword eligibility:** Same rules as before — Archetype, class, Domain, and retinue Caster limits apply.

### Stat Advancement Table

Roll **2d6** after spending **5 XP** on Stat Advancement.

| 2d6 | Result |
|---|---|
| 2 | **Setback** — −1 to a random stat (roll d8: 1=M, 2=CC, 3=RC, 4=Mt, 5=Sk, 6=Wi, 7=Sa, 8=W). Minimum 1. |
| 3–4 | **Minor** — +1 to M, CC, or RC (your choice). Max 6. |
| 5–9 | **Veteran** — +1 to Mt, Sk, Wi, or Sa (your choice). Max 6. |
| 10–11 | **Elite** — +1 to any stat (your choice). Max 6. |
| 12 | **Peak** — +1 to any stat **and** gain **Fearless** keyword if you do not already have it. Max 6. |

---

### Keyword Advancement Table

Roll **2d6** after spending **2 XP** on Keyword Advancement.

**Eligibility:** A fighter may only gain keywords their **Archetype and class** allow (see [retinue-building](../rules/retinue-building.md)). If the result grants **Caster**, the retinue must still respect Domain and max Caster limits.

| 2d6 | Result |
|---|---|
| 2 | **Cursed** — Sa −1 (minimum 1). No keyword. |
| 3–4 | **No change** — take a free **Feat** roll instead if an eligible feat list is available, or accept nothing. |
| 5–6 | **Steady** — +1 Sa permanently (max 6); no new keyword. |
| 7 | **Hardened** — gain **Fearless** keyword. |
| 8 | **Oathbound** — gain **Fearless** keyword **or** +1 Wi (max 6), your choice. |
| 9–10 | **Gifted** — if eligible, gain **Caster** keyword (Wi 4+, assign 3 Domain spells). If not eligible, +1 Wi instead. |
| 11 | **Marked** — gain **Fearless** and +1 to CC or RC (max 6). |
| 12 | **Ascendant** — if eligible, gain **Caster** keyword; otherwise +1 to any stat and **Fearless**. |

**Gaining Caster mid-campaign:** Assign 3 spells from the retinue's Domain. The fighter must have Wi 4+ (raise Wi to 4 if needed). Cult **Acolytes** may gain Caster here; other Archetypes only if under the retinue's max Caster count and Mortal Domain does not apply.

---

### Veteran Value & Retinue Rating

There are **no levels**, but campaigns still need a single number for matchup fairness. Every lasting campaign change has a **Veteran Crown** value. Track **Veteran Value** on each fighter card; add or subtract when a permanent result applies (advancement, Scarred, Doom, etc.).

**Retinue Rating** = **Roster Cost** (fighters + gear on the roster sheet) **+** sum of every fighter's **Veteran Value**.

| Lasting change | Veteran Crowns |
|---|---|
| **Feat** gained | +15 |
| **Fearless** keyword gained | +15 |
| **Caster** keyword gained | +25 |
| **+1** to any stat (advancement) | +25 |
| **Peak** or **Ascendant** (stat + Fearless in one roll) | +40 *(25 + 15 — do not also add the parts separately)* |
| **Marked** (Fearless + CC or RC) | +40 |
| **−1** to any stat (Scarred, injury, Setback, Cursed) | −25 |

**Not counted:** unspent XP, temporary conditions, flavor-only results (e.g. **Surface Scars** on the Doom Table), or gear bought/sold — gear is already in **Roster Cost**.

**Matchmaking:** pit retinues within **±100 Crowns** of rating, or **±10%** of the higher rating — whichever is larger. A fresh **1000 Crown** roster is **1000** rating; a veteran retinue might sit at **1150–1300** after several games.

Record **Retinue Rating** on the roster sheet next to Roster Cost.

## Design Notes

- **Tables first** — post-game is table-driven like Mordheim/Necromunda/Warhammer Quest.
- **Casualty Table before Doom Table** — most Out of Action fighters live; Casualty Table 1 and Doom Table 2 are the death pressure.
- **Scarred vs Doom** — the Casualty Table is the quick pass; Doom is the memorable lasting consequence.
- **Survival Rolls** — the winner controls the battlefield location; the loser uses the safer Generic table. Draws send both retinues to Generic.
- **XP bank** — earn from deeds, spend on advancement. Feat/Keyword **2 XP**; Stat **5 XP**.
- **Retinue Rating** — Roster Cost + Veteran Value; one Crown total for matchup fairness (see Veteran Value table above).
- **Keyword table** — Caster is a campaign unlock for eligible classes (especially Cult Acolytes).
- **Feat table** — use Keyword path until eligible Archetype and Domain feat lists are complete.
- Open decisions are tracked in `decision-log.md` Ideas.
