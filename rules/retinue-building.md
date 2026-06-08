# Retinue Building

How players assemble the fighters, gear, and spells they bring to a skirmish.

> **Player guide:** For step-by-step roster creation, use **[Creating a Retinue](creating-a-retinue.md)**. Weapons and equipment: **[Gear](gear.md)**. Spell lists: **[Magic](magic.md)**. This file is the reference version with design notes and open decisions.

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

1. Choose **Archetype**, **Domain**, and **Tradition** (see [Retinue](retinue.md) — one Tradition per retinue, allowed for your Archetype on that Domain).
2. Set your **Crown budget** (1000 for alpha skirmish).
3. Recruit fighters within your Archetype's **fighter count** and **tier limits** (below).
4. Assign each fighter a **species** and **tier profile**.
5. Assign **feat picks** — each fighter spends their budget on **Proficiency** and other eligible feats (see [Feats — Feat picks at roster creation](feats.md#feat-picks-at-roster-creation)). Specialists also gain their built-in proficiency.
6. Equip each fighter with weapons they are proficient in, within Archetype armor, shield, and firearm tier access and **weapon slot** limits. Apply **Flintlock** to any firearm if desired (−25 Crowns, Single Shot — see [Gear](gear.md)). Purchase **alchemy** and apply poisons during setup (one poison per weapon — see [Gear — Equipment](gear.md#equipment)).
7. Assign spells — **Caster** fighters choose 3 Domain spells when recruited (see **Caster** under Archetype Rosters).
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

A fighter with the **Caster** keyword:

- Has **Wi 4+** (raise Wi to 4 at recruitment if needed)
- Knows **3 spells** from the retinue's Domain list ([Domains](retinue.md#domains))
- May take the **Cast** action

Spell choice is free at list creation. The Domain freebie attack spell counts toward the 3.

If a **Leader** takes **Caster** on a class that normally grants a **+1 stat** bonus, they use the **Caster** profile **or** that class bonus — one or the other. **Caster** replaces the stat bonus; there is no extra Crown cost at recruitment.

### Caster — roster creation

**Mortal Domain:** no fighter may take the **Caster** keyword. Magic and gunpowder do not mix.

If your Domain is not **Mortal**, your retinue's **Leader** **may** take **Caster** at creation — optional for **Knights**, **Hunters**, and **Folk**; required for **Cult** (**Theurge**).

**Cult** is the only Archetype that may give **Caster** to a non-Leader at creation. Field up to **2 Adepts**; each **Adept** **must** take **Caster**. **Acolytes** do not start with **Caster** — they may **gain** it via [Keyword Advancement](../campaign/post-game.md#keyword-advancement-table).

| Archetype | Max fighters with Caster |
|---|---|
| Knights | 1 |
| Hunters | 1 |
| Folk | 1 |
| Cult | 3 |

---

## Archetype Rosters

Slot caps below are **defaults**. Domain composition overrides (how many Elite vs Specialist vs Rank) will be defined per Domain.

### Knights *(max 10)*

No Rank class — every follower is a **Knight** or **Squire**.

| Class | Count | Profile |
|---|---|---|
| **Lord** | 1 (required) | Species baseline + **+1** to one stat (CC, RC, Mt, Sk, Wi, or Sa). Max 5 at creation. May take **Caster** keyword or the class +1 stat bonus. |
| **Knight** | 0–4 | Elite — +1 Mt or +1 Sk. |
| **Squire** | 0–5 | Specialist — +1 CC or +1 RC |

### Hunters *(max 12)*

| Class | Count | Profile |
|---|---|---|
| **Captain** | 1 (required) | Species baseline + **+1** to one stat. Max 5 at creation. May take **Caster** keyword or the class +1 stat bonus. |
| **Stalker** | 0–4 | Elite — +1 Mt or +1 Sk. |
| **Tracker** | 0–3 | Specialist — +1 CC or +1 RC |
| **Hand** | 0–4 | Rank — species baseline; no class bonus. |

### Folk *(max 15)*

| Class | Count | Profile |
|---|---|---|
| **Mayor** | 1 (required) | Species baseline + **+1** to one stat. Max 5 at creation. May take **Caster** keyword or the class +1 stat bonus. |
| **Guildsman** | 0–3 | Elite — +1 Mt or +1 Sk. |
| **Militiaman** | 0–5 | Specialist — +1 CC or +1 RC |
| **Townsfolk** | 0–6 | Rank — species baseline; no class bonus. |

### Cult *(max 10)*

No Elite class. Magic lives on **Leader** and **Specialist** via the **Caster** keyword; everyone else is **Rank**.

| Class | Count | Profile |
|---|---|---|
| **Theurge** | 1 (required) | Leader — **Caster** keyword (required), + **+1** to one stat. Max 5 at creation. |
| **Adept** | 0–2 | Specialist — **Caster** keyword (required). Wi 4+, 3 Domain spells. |
| **Acolyte** | 0–7 | Rank — species baseline; no class bonus. May gain **Caster** via [Keyword Advancement](../campaign/post-game.md#keyword-advancement-table). |

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
- **Mortal** Domain grants **Proficiency — Firearms** on the Domain feat list; all other Domains grant Domain spells instead. Magic and gunpowder do not mix on the same retinue.
- **Cult** cannot choose Mortal and cannot take **Firearms**.
- Alchemy is available to all retinues.

### Weapon slots

Each fighter has **3 weapon slots**. One-handed weapons and shields take 1 slot; two-handed weapons take 2. Influence items (**Relic** or **Instrument** — roster gear, not campaign **Relics**) take 2 slots each.

### Spells

Only fighters with **Caster** know spells. Each chooses **3 spells** from the retinue's Domain list at recruitment.

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

| Fighter | Class | Proficiencies | Equipment | Fighter | Gear | Total |
| --- | --- | --- | --- | ---: | ---: | ---: |
| Captain | Leader | Firearms, One-Handed | Musket, Dagger | 125 | 110 | 235 |
| Stalker | Elite | Archery, One-Handed | Longbow, Hand Axe | 75 | 70 | 145 |
| Stalker | Elite | Archery, Thrown | Crossbow, Silversbane *(on Crossbow)* | 75 | 130 | 205 |
| Tracker | Specialist | Firearms *(built-in)*, One-Handed | Pistol, Dagger, Smoke Bomb | 60 | 125 | 185 |
| Hand | Rank | Archery | Shortbow | 40 | 40 | 80 |
| Hand | Rank | One-Handed | Hand Axe | 40 | 20 | 60 |
| **Total** | | | | **415** | **475** | **890** |

*Example leaves **110 Crowns** unspent — add armor, poisons, or another fighter.*

---

## Roster Checklist

Before play, confirm:

- [ ] Archetype + Domain chosen; Cult is not Mortal
- [ ] Fighter count within Archetype min/max
- [ ] Exactly 1 Leader (Lord, Captain, Mayor, or Theurge)
- [ ] Each class within Archetype slot caps (see roster table)
- [ ] Fighters with **Caster** keyword: count within Archetype max; Mortal Domain has none; Wi 4+ and 3 Domain spells each
- [ ] Total cost ≤ Crown budget
- [ ] **Retinue Rating** = Roster Cost + sum of Veteran Value on each fighter (campaign)
- [ ] Each fighter has correct **feat picks** / built-in proficiencies
- [ ] Each equipped weapon matches a fighter's proficiency
- [ ] Each fighter within Archetype armor, shield, and firearm tier access
- [ ] Each fighter ≤ 3 weapon slots
- [ ] No stat above 5 at creation (except species baselines that start at 4)
- [ ] Poisons: one per weapon, applied at setup

---

## Design Notes

- **Class + Caster** — **Caster** replaces the class stat bonus at recruitment; no extra Crown cost. Campaign [Keyword Advancement](../campaign/post-game.md) may grant **Caster** later.
- **Domain** adjusts class *counts* within Archetype caps. Composition tables are an open roster decision tracked in `decision-log.md` Ideas.
- **Knights** field Knight and Squire only. **Hunters** use **Tracker** as Specialist (+1 CC/RC).
- **Constrained points** (budget + composition slots) defines Folk horde, Knights elite, and Cult glass-cannon identities.
- Crown costs target a **1000 Crown** standard retinue with roughly half the budget on fighters and half on wargear at typical roster size; revisit after Silver Hunt / Nightpack playtest rosters (Phase 5c).
