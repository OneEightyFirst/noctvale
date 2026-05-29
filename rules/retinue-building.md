# Retinue Building

How players assemble the fighters, gear, and spells they bring to a skirmish.

---

## Overview

Every retinue is built in two layers:

1. **Identity** — choose an **Archetype** and **Domain** (see `retinue.md`). This sets equipment access, caster limits, and spell lists.
2. **Roster** — spend **Crowns** to recruit fighters, equip them, and (for casters) assign spells.

Retinue building uses **constrained points**: a **Crown budget** plus **composition limits** per Archetype. Each Archetype uses its own tier names; slots are capped so the roster cannot exceed the Archetype maximum.

For the alpha playtest, use a **1000 Crown** budget. Campaign retinues also start at **1000 Crowns** and **1000 Retinue Rating** (Veteran Value 0 on every fighter). Between games, spend earnings from sold Relic Fragments (see `campaign/economy.md`). After campaign advances, update **Retinue Rating** (see [Veteran Value](../campaign/post-game.md#veteran-value--retinue-rating)).

Every Crown cost in this file is a multiple of **5 Crowns**.

Named factions (Silver Hunt, Nightpack, etc.) are optional presets — same building rules apply.

---

## Building Steps

1. Choose **Archetype**, **Domain**, and **Tradition** (see `retinue.md` — one Tradition per retinue, allowed for your Archetype on that Domain).
2. Set your **Crown budget** (1000 for alpha skirmish).
3. Recruit fighters within your Archetype's **fighter count** and **tier limits** (below).
4. Assign each fighter a **species** and **tier profile**.
5. Equip each fighter within Archetype melee, missile, and gunpowder access and **weapon slot** limits. Apply **Flintlock** to any firearm if desired (−25 Crowns, Single Shot — see `rules/weapons.md`).
6. Assign **keywords** and spells — fighters with the **Caster** keyword know 3 Domain spells (see Keywords below).
7. Purchase **alchemy** and apply poisons during setup (one poison per weapon).
8. Verify the roster against the **checklist** at the end of this file.

---

## Model Count

| Archetype | Minimum | Target | Maximum |
|---|---|---|---|
| Knights | 5 | 5–8 | 10 |
| Hunters | 5 | 6–10 | 12 |
| Folk | 6 | 8–12 | 15 |
| Cult | 5 | 5–8 | 10 |

Every retinue must include exactly **1 Leader**. Fill remaining slots from your Archetype's tier caps below — the caps are tuned so the maximum fighters **including the Leader** match the table above.

| Archetype | Leader | Follower slots | **Max** |
|---|---|---|---|
| Knights | 1 Lord | Knight 0–4, Squire 0–5 | **10** |
| Hunters | 1 Captain | Stalker 0–4, Tracker 0–3, Hand 0–4 | **12** |
| Folk | 1 Mayor | Guildsman 0–3, Militiaman 0–5, Townsfolk 0–6 | **15** |
| Cult | 1 Theurge | Adept 0–2, Acolyte 0–7 | **10** |

*Cult **Adept** is the Specialist class — see Keywords.*

Knights have no Rank class — every fighter is **Elite** or **Specialist** tier.

---

## Archetype Classes

Each fighter has one **class** (Leader, Elite, Specialist, or Rank). Classes set roster slot, stat bonuses, and Crown cost. **Keywords** are separate tags that grant additional rules — see the next section.

| Generic class | Knights | Hunters | Folk | Cult |
|---|---|---|---|---|
| **Leader** | Lord | Captain | Mayor | Theurge |
| **Elite** | Knight | Stalker | Guildsman | — |
| **Specialist** | Squire | Tracker | Militiaman | Adept |
| **Rank** | — | Hand | Townsfolk | Acolyte |

**Mayor:** the Folk Leader — head of a town or district rallying the community.

**Theurge:** the Cult Leader — head of the rite; always has the **Caster** keyword.

**Domain** will adjust *how many* of each class you can field (composition tables — to be added). Class names stay the same for every Domain.

Named factions may use different flavor titles in lore without changing class names or caps on the roster sheet.

---

## Keywords

**Traditions** (Witches, Crusaders, etc.) are retinue-wide identity chosen at step 1 — see `retinue.md`. This section covers **keywords** on individual fighters.

Keywords are tags on a fighter profile. They stack with class.

Keywords can come from:

- **Roster creation** — Archetype and Domain define which classes *may* take which keywords
- **Campaign advancement** — fighters can **gain** keywords between games *(rules TBD in campaign progression)*
- **Abilities, equipment, spells, and conditions** — e.g. Fear, Fearless, Undead *(see `rules/sanity.md`, `rules/magic.md`)*

### Caster

A fighter with the **Caster** keyword:

- Has **Wi 4+** (raise Wi to 4 at recruitment if needed)
- Knows **3 spells** from the retinue's Domain list (`rules/magic.md`)
- May take the **Cast** action

Spell choice is free at list creation. The Domain freebie attack spell counts toward the 3. **+25 Crowns** when adding Caster at recruitment *(alpha)*.

If a fighter takes Caster on a class that normally grants a **+1 stat** bonus (Leader, Specialist, or Elite), they use the **Caster** profile **or** that class bonus — one or the other.

### Caster keyword — roster creation

**None Domain:** no fighter may take the Caster keyword. Magic and gunpowder do not mix.

| Archetype | Classes that *may* take Caster | Max fighters with Caster |
|---|---|---|
| Knights | Leader, Specialist | 1 |
| Hunters | Leader, Specialist | 1 |
| Folk | Leader, Specialist | 1 |
| Cult | Leader, Specialist | 3 |

**Cult:** the **Theurge** (Leader) **always** has the Caster keyword. Up to **2 Adepts** (Specialist) also take Caster. **Acolytes** (Rank) do not start with Caster — they may **gain** it via [Keyword Advancement](post-game.md#keyword-advancement-chart).

**Knights, Hunters, Folk:** at most **1** fighter in the retinue has Caster at creation.

---

## Archetype Rosters

Slot caps below are **defaults**. Domain composition overrides (how many Elite vs Specialist vs Rank) will be defined per Domain.

### Knights *(max 10)*

No Rank class — every follower is a **Knight** or **Squire**.

| Class | Count | Profile |
|---|---|---|
| **Lord** | 1 (required) | Species baseline + **+1** to one stat (CC, RC, Mt, Sk, Wi, or Sa). Max 5 at creation. May take **Caster** keyword or the class +1 stat bonus. |
| **Knight** | 0–4 | Elite — +1 Mt or +1 Sk. |
| **Squire** | 0–5 | Specialist — +1 CC or +1 RC; or **Caster** keyword |

### Hunters *(max 12)*

| Class | Count | Profile |
|---|---|---|
| **Captain** | 1 (required) | Species baseline + **+1** to one stat. Max 5 at creation. May take **Caster** keyword or the class +1 stat bonus. |
| **Stalker** | 0–4 | Elite — +1 Mt or +1 Sk. |
| **Tracker** | 0–3 | Specialist — +1 CC or +1 RC; or **Caster** keyword |
| **Hand** | 0–4 | Rank — species baseline; no class bonus. |

### Folk *(max 15)*

| Class | Count | Profile |
|---|---|---|
| **Mayor** | 1 (required) | Species baseline + **+1** to one stat. Max 5 at creation. May take **Caster** keyword or the class +1 stat bonus. |
| **Guildsman** | 0–3 | Elite — +1 Mt or +1 Sk. |
| **Militiaman** | 0–5 | Specialist — +1 CC or +1 RC; or **Caster** keyword |
| **Townsfolk** | 0–6 | Rank — species baseline; no class bonus. |

### Cult *(max 10)*

No Elite class. Magic lives on **Leader** and **Specialist** via the **Caster** keyword; everyone else is **Rank**.

| Class | Count | Profile |
|---|---|---|
| **Theurge** | 1 (required) | Leader — **Caster** keyword (required), + **+1** to one stat. Max 5 at creation. |
| **Adept** | 0–2 | Specialist — **Caster** keyword (required). Wi 4+, 3 Domain spells. |
| **Acolyte** | 0–7 | Rank — species baseline; no class bonus. May gain **Caster** via [Keyword Advancement](../campaign/post-game.md#keyword-advancement-chart). |

---

## Domain Composition

**Domain** sets how many of each class you can field within the Archetype maximum. It also determines access to magic vs gunpowder and spell lists (see `retinue.md`).

Composition tables per Archetype × Domain — **to be added**.

---

## Species

All fighters use a baseline species profile from `rules/core-rules.md`.

| Species | Premium | Notes |
|---|---|---|
| Human | — | True baseline; no premium. |
| Elf | +10 Crowns | Sk 4, Wi 4, M 7". |
| Dwarf | +10 Crowns | Mt 4, M 5". |

Species premium applies once per fighter, regardless of tier.

---

## Equipment & Spells

### Archetype and Domain limits

Equipment access follows `retinue.md`:

- Archetype sets **melee** category access (Basic / Long / Heavy / Exotic), armor cap, shield access, and **gunpowder** tier access.
- **Missile weapons** (bows, crossbows, slings, thrown) are available to **all retinues** — including Cult.
- **None** Domain grants **gunpowder weapons** (firearms and bombs); all other Domains grant Domain spells instead. Magic and gunpowder do not mix on the same retinue.
- **Cult** cannot choose None and cannot use gunpowder.
- Alchemy is available to all retinues.

### Weapon slots

Each fighter has **3 weapon slots**. One-handed weapons and shields take 1 slot; two-handed weapons take 2. Influence items (Relic, Instrument) take 2 slots each.

### Spells

Only fighters with the **Caster** keyword know spells. Assign **3 spells** from the retinue's Domain list per Caster keyword.

### Poisons

One poison per weapon, applied during retinue setup. Poisons are consumable (one game).

---

## Crown Costs

All costs are **alpha values** — adjust after playtest balance. Every price is a multiple of **5 Crowns**.

**Budgeting:** at a typical roster size (roughly 7–10 fighters), fighter recruitment should land around **450–550 Crowns**, leaving **450–550** for weapons, armor, shields, poisons, and other wargear. Larger rosters spend more on bodies and have less kit per fighter — that is intentional.

### Fighters (Human baseline)

Use the fighter's **class** for base cost. Add modifiers below.

| Class | Names | Cost |
|---|---|---|
| Leader | Lord, Captain, Mayor, Theurge | 125 |
| Elite | Knight, Stalker, Guildsman | 75 |
| Specialist | Squire, Tracker, Militiaman, Adept | 60 |
| Rank | Hand, Townsfolk, Acolyte | 40 |

| Modifier | Cost |
|---|---|
| **Caster** keyword | +25 |
| Elf or Dwarf | +10 |

**Cult Theurge** includes the Caster keyword at no extra charge (required). **Cult Adept** pays Specialist cost + Caster keyword (+25) = **85** total.

### Melee Weapons

| Category | Weapon | Cost |
|---|---|---|
| Basic | Dagger | 10 |
| Basic | Sword | 25 |
| Basic | Hand Axe | 20 |
| Basic | Mace | 20 |
| Long | Spear | 25 |
| Long | Halberd | 45 |
| Heavy | Great Sword | 50 |
| Heavy | War Axe | 45 |
| Heavy | War Hammer | 45 |

### Missile Weapons

All retinues. See `rules/weapons.md` for categories.

| Category | Weapon | Cost |
|---|---|---|
| Basic | Sling | 20 |
| Basic | Shortbow | 40 |
| Basic | Throwing Stars | 10 |
| Long | Longbow | 50 |
| Long | Crossbow | 65 |
| Heavy | Heavy Crossbow | 90 |

### Gunpowder — Firearms (None Domain only)

| Tier | Weapon | Cost |
|---|---|---|
| Basic | Musket | 100 |
| Basic | Blunderbuss | 115 |
| Refined | Pistol | 90 |
| Refined | Long Rifle | 125 |

| Keyword | Effect | Cost |
|---|---|---|
| **Flintlock** | Single Shot — one fire per game | −25 *(applied to firearm cost)* |

**Archetype access:** Hunters + None — Basic + Refined. Knights and Folk + None — **Basic only** (Musket, Blunderbuss).

### Gunpowder — Bombs (None Domain only)

| Item | Cost |
|---|---|
| Bomb | 40 |
| Smoke Bomb | 25 |

### Armor

| Armor | Cost |
|---|---|
| Light Armor | 50 |
| Medium Armor | 115 |
| Heavy Armor | 185 |

### Shields

| Shield | Cost |
|---|---|
| Buckler | 10 |
| Shield | 25 |
| Tower Shield | 50 |

### Materials

| Material | Cost |
|---|---|
| Silver | +40 (added to weapon cost) |

Silver Hunt and other factions may require Silver on specific fighters — pay the upgrade when equipping.

### Influence

| Item | Cost |
|---|---|
| Relic | 75 |
| Instrument | 65 |

### Alchemy (consumable)

| Item | Cost | Notes |
|---|---|---|
| Adder's Kiss | 25 | |
| Blight Extract | 40 | |
| Vitriol | 50 | |
| Widow's Tears | 75 | |
| Silversbane | 65 | Silver Hunt exclusive |

---

## Example: Hunters + None (1000 Crowns)

Silver Hunt-style retinue (Hunters + None), 7 fighters:

| Fighter | Class | Keywords | Species | Cost |
|---|---|---|---|---|
| Captain | Leader | — | Human | 125 |
| Stalker | Elite | — | Human | 75 |
| Stalker | Elite | — | Elf | 85 |
| Tracker | Specialist | — | Human | 60 |
| 2× Hand | Rank | — | Human | 80 |
| **Fighter subtotal** | | | **500** |

Remaining **500 Crowns** for weapons, armor, poisons, and bombs across seven fighters — e.g. Medium armor on veterans, a Crossbow, sidearms, and Silversbane on key weapons.

---

## Roster Checklist

Before play, confirm:

- [ ] Archetype + Domain chosen; Cult is not None
- [ ] Model count within Archetype min/max
- [ ] Exactly 1 Leader (Lord, Captain, Mayor, or Theurge)
- [ ] Each class within Archetype slot caps (see roster table)
- [ ] Fighters with **Caster** keyword: count within Archetype max; None Domain has none; Wi 4+ and 3 Domain spells each
- [ ] Total cost ≤ Crown budget
- [ ] **Retinue Rating** = Roster Cost + sum of Veteran Value on each fighter (campaign)
- [ ] Each fighter within Archetype melee, missile, gunpowder, armor, and shield access
- [ ] Each fighter ≤ 3 weapon slots
- [ ] No stat above 5 at creation (except species baselines that start at 4)
- [ ] Poisons: one per weapon, applied at setup

---

## Design Notes

- **Class + keyword** — class is roster slot and stat bonus; **Caster** is a keyword (+25 Crowns). Same pattern extends to other keywords (Fearless, Undead, etc.).
- **Acolytes** are Rank only at creation; [Keyword Advancement](../campaign/post-game.md) may grant **Caster** later.
- **Domain** adjusts class *counts* within Archetype caps. Composition tables TBD.
- **Knights** field Knight and Squire only. **Hunters** use **Tracker** as Specialist (+1 CC/RC or Caster build).
- **Constrained points** (budget + composition slots) defines Folk horde, Knights elite, and Cult glass-cannon identities.
- Crown costs target a **1000 Crown** standard retinue with roughly half the budget on fighters and half on wargear at typical roster size; revisit after Silver Hunt / Nightpack playtest rosters (Phase 5c).
