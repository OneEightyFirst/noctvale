# Retinue Building

How players assemble the fighters, gear, and spells they bring to a skirmish.

> **Player guide:** For step-by-step roster creation, use **[Creating a Retinue](creating-a-retinue.md)** and your Archetype chapter — **[Knights](archetypes/knights.md)**, **[Hunters](archetypes/hunters.md)**, **[Folk](archetypes/folk.md)**, or **[Cult](archetypes/cult.md)**. Weapons and equipment: **[Gear](gear.md)**. Spell lists: **[Magic](magic.md)**. This file is the reference version with design notes and open decisions.

---

## Overview

Every retinue is built in two layers:

1. **Identity** — choose an **Archetype** and **Domain** (see [Retinue](retinue.md)). This sets weapon proficiency options, armor access, caster limits, and spell lists.
2. **Roster** — spend **Crowns** to recruit fighters, assign feats, equip them, and (for casters) assign spells.

Retinue building uses **constrained points**: a **Crown budget** plus **composition limits** per Archetype. Each Archetype uses its own tier names; slots are capped so the roster cannot exceed the Archetype maximum.

For the alpha playtest, use a **1000 Crown** budget. Campaign retinues also start at **1000 Crowns** and **1000 Retinue Rating** (Veteran Value 0 on every fighter). Between games, spend earnings from sold Relics (see [Economy](../campaign/economy.md)). After campaign advances, update **Retinue Rating** (see [Veteran Value](../campaign/post-game.md#veteran-value--retinue-rating)).

Every Crown cost in this file is a multiple of **5 Crowns**.

Named factions (Silver Hunt, Nightpack, etc.) are optional presets — same building rules apply.

---

## Building Steps

1. Choose **Archetype**, **Domain**, and **Tradition** (see your [Archetype chapter](archetypes/knights.md) — one Tradition per retinue, allowed for your Archetype on that Domain).
2. Set your **Crown budget** (1000 for alpha skirmish).
3. Recruit fighters within your Archetype's **fighter count** and **tier limits** (below).
4. Assign each fighter a **species** and **tier profile**.
5. Assign feats from your Archetype feat list (see your [Archetype chapter](archetypes/knights.md)). Specialists also gain their built-in proficiency.
6. Equip each fighter with weapons they are proficient in, within Archetype armor, shield, and firearm tier access and **weapon slot** limits. Apply **Flintlock** to any firearm if desired (−25 Crowns, Single Shot — see [Gear](gear.md)). Purchase **alchemy** and apply poisons during setup (one poison per weapon — see [Gear — Equipment](gear.md#equipment)).
7. Assign spells — **Caster** fighters choose Domain spells per fighter type (see **Caster** below and your Archetype chapter).
8. Verify the roster against the **checklist** at the end of this file.

---

## Fighter Count

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

**Traditions** (Witches, Crusaders, etc.) are retinue-wide identity chosen at
step 1 — see [Retinue](retinue.md). This section covers **keywords** on individual
fighters.

Keywords are tags on a fighter profile. They stack with class.

Keywords can come from:

- **Roster creation** — Archetype and Domain define which classes *may* take which keywords
- **Campaign advancement** — fighters can **gain** keywords between games through [Keyword Advancement](../campaign/post-game.md#keyword-advancement-table)
- **Abilities, equipment, spells, and conditions** — e.g. Fear, Fearless, Undead *(see [Sanity](sanity.md), [Magic](magic.md))*

### Caster

A fighter with the **Caster** keyword may take the **Cast** action. **Wi** comes
from the fighter's profile — species baseline plus recruitment stat bonuses.
**Caster** does not automatically raise Wi.

Spell choice is free at list creation. Each Domain's standard attack spell
counts toward a fighter's spell allowance.

### Caster — roster creation

**Mortal Domain:** no fighter may take the **Caster** keyword. Magic and gunpowder do not mix.

| Fighter type | Caster | Spells at recruitment |
|---|---|---|
| **Leader** (Lord, Captain, Mayor) | Optional if Domain is not **Mortal** | **2** |
| **Theurge** | Required | **2** |
| **Adept** | Required | **1** |
| All other fighters | No **Caster** at creation | — |

**Cult** is the only Archetype that may give **Caster** to a non-Leader at creation. Field up to **2 Adepts**; each **Adept** **must** take **Caster**. **Acolytes** do not start with **Caster** — they may **gain** it via [Keyword Advancement](../campaign/post-game.md#keyword-advancement-table).

| Archetype | Max fighters with Caster |
|---|---|
| Knights | 1 |
| Hunters | 1 |
| Folk | 1 |
| Cult | 3 |

### Vampire

Creature-type keyword. A fighter with **Vampire** counts as **Undead** for any
rule that checks **Undead** (silver weapons, **Radiant Strike**, and similar).

**Vampires** Tradition grants **Vampire** at roster creation to each **Leader**,
**Elite**, and **Specialist** in the retinue. **Rank** fighters do not gain
**Vampire** from that Tradition.

Fighters with **Vampire** pay **2 XP** more than the normal cost to buy each
post-game advancement (**Feat**, **Keyword**, or **Stat**). See [Post-Game —
Spending XP](../campaign/post-game.md#spending-xp--advancement-rolls).

Full profiles, species tables, and feat lists: [Archetype chapters](archetypes/knights.md).

---

## Archetype Rosters

Player-facing recruit rules live in each **[Archetype chapter](archetypes/knights.md)** — species table, fighter-type profiles, feat lists, and checklists. Slot caps below are **defaults**; Domain composition overrides are **to be added**.

| Archetype | Leader | Followers | Leader profile | Elite | Specialist | Rank |
|---|---|---|---|---|---|---|
| **Knights** | 1 Lord | Knight 0–4, Squire 0–5 | +1 to **2** different stats; optional **Caster** (2 spells) | +1 Mt or +1 Sk | +1 stat; Squire built-in **One-Handed** | — |
| **Hunters** | 1 Captain | Stalker 0–4, Tracker 0–3, Hand 0–4 | +1 to **2** different stats; optional **Caster** (2 spells) | +1 Mt or +1 Sk | +1 stat; Tracker built-in **Archery** or **Firearms** | species baseline |
| **Folk** | 1 Mayor | Guildsman 0–3, Militiaman 0–5, Townsfolk 0–6 | +1 to **2** different stats; optional **Caster** (2 spells) | +1 Mt or +1 Sk | +1 stat; Militiaman built-in **Two-Handed** | species baseline |
| **Cult** | 1 Theurge | Adept 0–2, Acolyte 0–7 | **Caster** (required); +1 to **2** different stats; 2 spells | — | **Caster** (required); +1 stat; 1 spell | species baseline |

---

## Domain Composition

**Domain** sets how many of each class you can field within the Archetype maximum. It also determines access to magic vs gunpowder and spell lists (see [Retinue](retinue.md#domains) and [Domain Spell Lists](magic.md#domain-spell-lists)).

Composition tables per Archetype × Domain — **to be added**.

---

## Species

All fighters use a baseline species profile from [Core Rules](core-rules.md).

| Species | Premium | Notes |
|---|---|---|
| Human | — | True baseline; no premium. |
| Elf | +10 Crowns | Sk 4, Wi 4, M 7". |
| Dwarf | +10 Crowns | Mt 4, M 5". |

Species premium applies once per fighter, regardless of tier.

---

## Equipment & Spells

### Archetype and Domain limits

Equipment access follows [Retinue](retinue.md):

- Each fighter equips weapons matching their **Proficiency** feats (see [Feats](feats.md)).
- Archetype sets which options appear on each fighter's **Proficiency** feat, plus armor cap, shield access, and **firearm tier** access.
- **Mortal** Domain adds **Firearms** to the **Proficiency** menu; all other Domains grant Domain spells instead. Magic and gunpowder do not mix on the same retinue.
- **Cult** cannot choose Mortal and cannot take **Firearms**.
- Alchemy is available to all retinues.

### Weapon slots

Each fighter has **3 weapon slots**. One-handed weapons and shields take 1 slot;
two-handed weapons take 2. **Relic** and **Instrument** (roster **Sphere of
Influence** gear — not campaign **Relics**) take 2 slots each.

### Spells

Only fighters with **Caster** know spells. Spell count at recruitment follows the **Caster — roster creation** table above.

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
| Elf or Dwarf | +10 |

Apply Tradition cost modifiers when calculating each fighter's cost.

### Gear

All weapon and equipment **Crown costs**, **profiles**, and **combat rules** are in [Gear](gear.md).

---

## Example: Hunters + Mortal (1000 Crowns)

**Tradition:** Alchemists · Silver Hunt-style retinue, 6 fighters:

| Fighter | Proficiencies | Equipment | Fighter | Gear | Total |
| --- | --- | --- | ---: | ---: | ---: |
| Captain | Firearms, One-Handed | Musket, Dagger | 125 | 110 | 235 |
| Stalker | Archery, One-Handed | Longbow, Hand Axe | 75 | 70 | 145 |
| Stalker | Archery, Thrown | Crossbow, Silversbane *(on Crossbow)* | 75 | 130 | 205 |
| Tracker | Firearms *(built-in)*, One-Handed | Pistol, Dagger, Smoke Bomb | 60 | 125 | 185 |
| Hand | Archery | Shortbow | 40 | 40 | 80 |
| Hand | One-Handed | Hand Axe | 40 | 20 | 60 |
| **Total** | | | | **415** | **475** | **890** |

*Example leaves **110 Crowns** unspent — add armor, poisons, or another fighter.*

---

## Roster Checklist

Before play, confirm:

- [ ] Archetype + Domain chosen; Cult is not Mortal
- [ ] Fighter count within Archetype min/max
- [ ] Exactly 1 Leader (Lord, Captain, Mayor, or Theurge)
- [ ] Each class within Archetype slot caps (see roster table)
- [ ] Fighters with **Caster** keyword: count within Archetype max; Mortal Domain has none; spell counts match fighter type (Leader/Theurge **2**, Adept **1**)
- [ ] Total cost ≤ Crown budget
- [ ] **Retinue Rating** = Roster Cost + sum of Veteran Value on each fighter (campaign)
- [ ] Each equipped weapon matches a fighter's **Proficiency**
- [ ] Each fighter within Archetype armor, shield, and firearm tier access
- [ ] Each fighter ≤ 3 weapon slots
- [ ] Recruitment stat bonuses recorded on roster sheet
- [ ] Poisons: one per weapon, applied at setup

---

## Design Notes

- **Leader profile** — +1 to **2** different stats at recruitment; optional **Caster** on non-**Mortal** Domains (2 spells). **Theurge** always **Caster**. Campaign [Keyword Advancement](../campaign/post-game.md) may grant **Caster** later.
- **Domain** adjusts class *counts* within Archetype caps. Composition tables are an open roster decision tracked in `decision-log.md` Ideas.
- **Archetype chapters** — player-facing recruit rules in `rules/archetypes/`; this file remains the reference summary.
- **Constrained points** (budget + composition slots) defines Folk horde, Knights elite, and Cult glass-cannon identities.
- Crown costs target a **1000 Crown** standard retinue with roughly half the budget on fighters and half on wargear at typical roster size; revisit after Silver Hunt / Nightpack playtest rosters (Phase 5c).
