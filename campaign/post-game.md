# Post-Game Sequence

After each battle, resolve the steps below **in order**. Each step uses **charts** — roll on the table, apply the result, then move on.

This is the campaign loop: **injuries → exploration → advancement → economy**. Influences: Mordheim casualty rolls, Necromunda lasting injuries, Warhammer Quest post-quest events, Last Days XP + nudge.

---

## Sequence at a Glance

1. **Scenario Results** — victory rewards, Relic Fragments earned on the table
2. **Out of Action** — every fighter who ended the battle Out of Action rolls **Survival**
3. **Serious Injury** — any fighter directed to this chart rolls **2d6**
4. **Exploration** — [exploration phase](exploration.md) (location, dice, mishaps, discoveries)
5. **Experience** — award XP; any fighter who levels up rolls **Advancement**
6. **Economy** — sell fragments, recruit, equip ([economy.md](economy.md), [retinue building](../rules/retinue-building.md))

---

## Step 1: Scenario Results

Resolve the scenario's victory rewards and any Relic Fragments placed as objectives.

If the scenario has no fragment payout, roll **Battle Spoils** once per retinue:

| 2d6 | Battle Spoils |
|---|---|
| 2 | Cursed ground — lose 1 fragment recovered this battle (minimum 0) |
| 3–4 | Scant pickings — 0 fragments |
| 5–9 | Scraps — 1 fragment |
| 10–11 | Strong haul — 2 fragments |
| 12 | Bounty — 3 fragments |

Set **Fragments this battle** aside until Step 6.

---

## Step 2: Survival Chart

Each fighter who was **Out of Action** when the battle ended rolls **1d6** on this chart.

Fighters who were **Downed or Stunned** but not Out of Action skip this chart — they are battered but return next battle with no roll.

| d6 | Result |
|---|---|
| 1 | **Slain** — remove the fighter from your retinue. Skip Steps 3–5 for this fighter. |
| 2 | **Grievous** — roll on the **Serious Injury Chart** (2d6). |
| 3 | **Scarred** — return next battle; permanently **−1** to one stat of your choice (minimum 1). |
| 4 | **Convalescent** — survives but **misses the next battle**. |
| 5 | **Battered** — return next battle; no permanent effect. |
| 6 | **Hardy** — return next battle; gain **+1 Experience**. |

---

## Step 3: Serious Injury Chart

Roll **2d6** when directed from Survival (Grievous), or from an Exploration Mishap (if noted).

Permanent injuries reduce stats. Stats cannot drop below **1**. Campaign advancement may later raise stats again (max **6**).

| 2d6 | Injury |
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
| 11 | **Spirit-Touched** — roll on [Exploration Mishaps](exploration.md#mishap-chart) as if you had rolled a 1 on an exploration die (apply to this fighter). |
| 12 | **Miraculous** — full recovery; gain **+2 Experience**. |

---

## Step 4: Exploration

Run the [Exploration Phase](exploration.md).

Exploration may award Relic Fragments, Crown-equivalent loot, and Mishaps. Add exploration fragments to **Fragments this battle**.

---

## Step 5: Experience & Advancement

XP is a **bank per fighter** — earned from specific deeds, **spent** to buy advancement rolls. There are **no levels** and no thresholds. If you have the XP, you can spend it (usually at the end of this step, between battles).

### Earning XP

Add XP to each fighter's bank when the condition applies:

| Source | XP |
|---|---|
| Fought in the battle (Active at battle end) | +1 |
| Went Out of Action but survived post-game Survival | +1 |
| **Hardy** (Survival d6) | +1 |
| **Miraculous** (Serious Injury 2d6) | +2 |
| **Close Call** (Exploration Mishap d6) | +1 |
| Retinue achieved a scenario objective | +1 *(once per fighter)* |
| Each Relic Fragment the retinue recovered this battle | +1 *(every fighter)* |
| Slain an enemy **Leader** | +2 *(to the fighter who delivered the killing blow)* |
| Scenario bonus *(when listed)* | As written |

Track **Experience** on the fighter card as a running total. Unspent XP carries forward.

### Spending XP — Advancement Rolls

Spend XP from a fighter's bank to roll on **one** advancement chart. Pay the cost **before** rolling; deduct XP immediately. You may spend multiple times on the same fighter in one post-game if they can afford it.

| Advancement | XP cost | Roll |
|---|---|---|
| **Skill** | **2** | 2d6 on Skill Advancement Chart *(TBD — use Keyword until `rules/skills.md` exists)* |
| **Keyword** | **2** | 2d6 on Keyword Advancement Chart |
| **Stat** | **5** | 2d6 on Stat Advancement Chart |

**Stats cost more than skills.** Raw stat growth is a major investment; skills and keywords are the usual progression spend.

**Keyword eligibility:** Same rules as before — Archetype, class, Domain, and retinue Caster limits apply.

### Nudging Rolls (Relic Fragments)

Before resolving a post-game roll, you may spend Relic Fragments from **Fragments this battle** (not yet sold) to adjust the result by **+1 or −1**. One nudge per roll. Cannot nudge below 2 or above 12 on 2d6 charts.

| Roll | Fragment cost |
|---|---|
| Survival, Serious Injury | 1 |
| **Skill** or **Keyword** Advancement | 1 |
| **Stat** Advancement | **2** |

Fragment nudges are separate from XP — paying XP buys the roll; paying Fragments steers it.

---

### Stat Advancement Chart

Roll **2d6** after spending **5 XP** on Stat Advancement.

| 2d6 | Result |
|---|---|
| 2 | **Setback** — −1 to a random stat (roll d8: 1=M, 2=CC, 3=RC, 4=Mt, 5=Sk, 6=Wi, 7=Sa, 8=W). Minimum 1. |
| 3–4 | **Minor** — +1 to M, CC, or RC (your choice). Max 6. |
| 5–9 | **Veteran** — +1 to Mt, Sk, Wi, or Sa (your choice). Max 6. |
| 10–11 | **Elite** — +1 to any stat (your choice). Max 6. |
| 12 | **Peak** — +1 to any stat **and** gain **Fearless** keyword if you do not already have it. Max 6. |

---

### Keyword Advancement Chart

Roll **2d6** after spending **2 XP** on Keyword Advancement.

**Eligibility:** A fighter may only gain keywords their **Archetype and class** allow (see [retinue-building](../rules/retinue-building.md)). If the result grants **Caster**, the retinue must still respect Domain and max Caster limits.

| 2d6 | Result |
|---|---|
| 2 | **Cursed** — Sa −1 (minimum 1). No keyword. |
| 3–4 | **No change** — take a free **Skill** roll instead (when skills exist), or accept nothing. |
| 5–6 | **Steady** — +1 Sa permanently (max 6); no new keyword. |
| 7 | **Hardened** — gain **Fearless** keyword. |
| 8 | **Oathbound** — gain **Fearless** keyword **or** +1 Wi (max 6), your choice. |
| 9–10 | **Gifted** — if eligible, gain **Caster** keyword (Wi 4+, assign 3 Domain spells). If not eligible, +1 Wi instead. |
| 11 | **Marked** — gain **Fearless** and +1 to CC or RC (max 6). |
| 12 | **Ascendant** — if eligible, gain **Caster** keyword; otherwise +1 to any stat and **Fearless**. |

**Gaining Caster mid-campaign:** Assign 3 spells from the retinue's Domain. The fighter must have Wi 4+ (raise Wi to 4 if needed). Cult **Acolytes** may gain Caster here; other Archetypes only if under the retinue's max Caster count and None Domain does not apply.

---

## Step 6: Economy

1. Total **Fragments this battle** (scenario + exploration).
2. Sell fragments for Crowns ([economy.md](economy.md)) or hoard for better rates.
3. Recruit fighters, buy gear, pay upkeep *(upkeep TBD)*.

---

## Design Notes

- **Charts first** — post-game is table-driven like Mordheim/Necromunda/Warhammer Quest, not a points-buy skill tree.
- **Survival before Serious Injury** — most OOA fighters live; the 1 result and Serious Injury 2/12 are the death pressure.
- **Scarred vs Serious Injury** — d6 Survival is the quick pass; 2d6 Serious is the memorable lasting wound.
- **XP bank, not levels** — earn from deeds, spend on advancement. Skill/Keyword **2 XP**; Stat **5 XP**.
- **Stat vs skill cost** — stats are the premium spend; nudging stat rolls costs **2 Fragments** vs **1** for skill/keyword.
- **Keyword chart** — Caster is a campaign unlock for eligible classes (especially Cult Acolytes), not a class rename.
- **Skill chart** — placeholder until Phase 5b; use Keyword path until `rules/skills.md` exists.
- Open: convalescent fighters and retinue minimum size; injury recovery through downtime; Death Trigger on Slain results.
