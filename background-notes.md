# Background Notes

Internal setting notes and design context. This file is not player-facing rules
or polished rulebook prose.

## Setting Notes

- The pre-fall realm was named **Valecoria** — now lost to history in Noctvale's current era.
- The old realm was organized across **12 Grand Duchies**, each originally a full kingdom.
- The pre-fall ruler was **Aurelian Eiradan Valecor, First of His Name, High King of Valecoria, Binder of the Twelve Crowns, Warden of the Dawn Roads, Lord of the Threefold Concord, and Defender of the Living Realm**.
- Aurelian created a near-utopia through diplomacy, marriage, and defensive conquest.
- The realm deeply integrated elves and dwarves with humans.
- Aurelian was half-elven or otherwise touched by elven longevity.
- Aelthir's official histories place her in an isolated elven settlement within
  Valecoria's far marches. Older fragments imply her house remembered lands no
  living traveler could reach beyond the mountains.
- Accepted magics in the realm: **Arcane, Nature, and Light**.
- Illegal or forbidden magics: **Necromancy, Blood, and Infernal**.
- The Phoenix Guard later split three ways after the fall: four rebelled, four hid, four joined the turned King.
- **"Crown Roads"** — the realm's main road network.
- The setting is a vast meteor-scarred valley roughly the size of Ireland, where small retinues fight across ruins, Crown Roads, and haunted wilds.
- Lethal, narrative, campaign-driven skirmish combat.
- Influences: Mordheim-style campaign skirmish play, grimdark fantasy, Gothic horror, Warcry, Kill Team, Necromunda, and classic Warhammer design principles.

## Pantheon Notes

- Noctvale's gods are gender-neutral and gender-fluid. They are neither man nor
  woman, and also both; different cultures, sects, and artists may portray the
  same deity with different bodies, voices, titles, or relationships.
- **Fadhran** is the Mortal/luck god and the deity behind the underdog
  equalizer concept **Fadhran's Hand**. The name is built from original
  Gaelic/Latin-blended roots rather than borrowed mythological names.
- Dwarvish internal reference name for Fadhran: **Sudkovar**, the Fate-Smith.
  This is a cultural name rooted in Slavic-influenced fate/smith language. Keep
  it out of rules text unless dwarven worship becomes relevant in lore.
- **Vifelia** is the Blood-domain deity, but their core is life, celebration,
  plenty, hospitality, charity, love, feasting, and the warmth of being alive.
  Good worshipers throw feasts, shelter travelers, bless births and marriages,
  and give away more than they keep. Their darkness is excess: celebration
  becomes indulgence, indulgence becomes hunger, and the far end of that path is
  blood cults and vampires. Vifelia is the sibling of **Navromir**.

---

## Named Faction Presets

Twelve established factions exist in Noctvale lore. Each is an example **Archetype** + **Domain** pairing with a suggested **Tradition** and draft lore in `rules/archetypes.md` under each Archetype's **Example Factions**. Presets do not grant exclusive rules — each fighter must still meet keyword requirements for feats, spells, and gear.

| Faction | Archetype | Domain | Identity |
|---|---|---|---|
| Phoenix Guard | Knights | Light | Elite knights, former High King's personal guard |
| Nobility | Knights | Blood | Vampire aristocracy, decadent noble houses |
| Radiant Crusade | Hunters | Light | Holy warriors sworn to destroy undead |
| Inquisition | Hunters | Mortal | Anti-magic zealots, guns and denial |
| Silver Hunt | Hunters | Mortal | Monster hunters, alchemy and silver weapons |
| Nightpack | Hunters | Nature | Sewer-shadow packs, knives in the dark |
| Coven | Cult | Nature | Witches banding together for survival |
| Arcane Conclave | Cult | Arcane | Tower-city scholars who hoard magic and forbidden learning |
| Grave Wardens | Cult | Necromancy | Necromancers commanding the restless dead |
| Infernal Pact | Cult | Infernal | Demonic cult brotherhoods |
| Village Watch | Folk | Mortal | Ordinary townsfolk defending their homes |
| Iron Law | Folk | Mortal | Corrupted remnants of imperial law |

Two presets can share the same Archetype + Domain but suggest different Traditions, equipment, and playstyle. **Inquisition** and **Silver Hunt** are both Hunters + Mortal — Inquisition leans Zealots, anti-magic denial, and guns; Silver Hunt leans Alchemists, poisons, and silver weapons.

Default Tradition pairings for each preset: `rules/traditions.md` (**Traditions — Named preset defaults**).

---

## Feat design notes

Feats express a fighter's identity beyond attributes, weapons, and spells.

Feats should bend existing rules instead of replacing them. A feat may improve or modify an action, defense roll, Wound state, post-game roll, or campaign choice. A feat should not grant broad permanent to-hit bonuses, extra full actions, reusable rerolls, spell-like effects without a **casting roll**, or require another named feat.

Player-facing feat lists and eligibility: `rules/feats.md` (**Feats**).

---

## Domains

Each **Domain** keyword unlocks a spell list and domain feats. **Mortal** replaces spells with gunpowder access.

| Domain keyword | Triangle | Unlocks |
|---|---|---|
| **Light** | Mystic | Light spell list |
| **Arcane** | Mystic | Arcane spell list |
| **Infernal** | Mystic | Infernal spell list |
| **Nature** | Natural | Nature spell list |
| **Necromancy** | Natural | Necromancy spell list; Necromancy domain feats |
| **Blood** | Natural | Blood spell list; Blood domain feats |
| **Mortal** | — | No spells; gunpowder when every fighter has **Mortal** |

Spell lists: `rules/magic.md` (**Magic — Domain Spell Lists**) · Domain feats: `rules/feats.md` (**Domain Feats**)

### Magic condition associations

These associations are internal design notes, not player-facing rules. Player-facing
condition text lives in `rules/conditions.md` (**Afflictions**).

| Condition | Associated Domain |
|---|---|
| **Blinded** | Light |
| **Bleeding** | Blood |
| **Affliction tokens** | Nature poisons, alchemy, and poisonous bites |
| **Withered** | Necromancy |
| *(TBD)* | Infernal |

Arcane, Light, and Nature spells could potentially remove these conditions,
creating a cleanse / debuff dynamic between magic categories.

### Swarm wound budgets *(design)*

**Swarm** profiles use fixed **W** on the attribute profile; **Sk** equals **W**. When
authoring new swarms, treat **3**–**6** as the normal wound band — small vermin
at the low end, dense or aerial masses at the high end. Current profiles:

| Swarm | W |
|---|---:|
| **Stinging Swarm** (Nature) | 5 |
| **Rat Swarm** (Companion) | 6 |
| **Bats** (Blood — **Summon Bats**) | 6 |

---

## Roster Identity Notes

- Use **Ancestry profile** for the recruitment baseline layer. Current profiles
  are **Steady**, **Keen**, **Stout**, and **Stunty**.
- Each profile names a body-and-temperament pattern rather than a single people:
  **Steady** can represent Humans, Half-Elves, or similar grounded folk;
  **Keen** can represent Elves or other sharp, graceful lineages; **Stout** can
  represent Dwarves, Orcs, or other powerful frames; **Stunty** can represent
  Halflings, Goblins, Gnomes, or other short, quick folk.
- Ancestry profiles should remain compact profiles and premiums. The main
  identity load belongs to **Archetype**, **Tradition**, **Domain**, gear, feats,
  and campaign consequences.
- If a later rule needs unusual lineage or creature identity, prefer keywords
  such as **Vampire**, **Undead**, or a Tradition-specific rule rather than
  expanding ancestry into a large subsystem.

---

## Keywords

Keywords are permanent tags on a fighter profile. Temporary battle states —
**Fear**, **Panic**, and **Insanity** when a Sanity test fails — are not keywords.

### Sanity projection notation

Profile and spell lines use shorthand for what a source projects:

- `Fear (6")` — within **6"** and line of sight
- `Fear (melee)` — only when charging or charged
- `Fear (12")` — extended range
- Same format for `Panic` and `Insanity`

### Capability and creature keywords

These stack on top of identity keywords:

| Keyword | Source |
|---|---|
| **Caster** | Roster creation (optional or required per class); mid-campaign gain TBD |
| **Vampire** | **Vampires** Tradition — **Leader**, **Elite**, and **Specialist** only |
| **Undead**, **Fearless** | **Wightlords** Tradition, advancement, abilities |

### Keyword conflicts

- **Mortal** and **Caster** are **mutually exclusive** on the same fighter. Magic
  and gunpowder do not mix.
- No fighter may have both **Cult** and **Mortal** — **Cult** has no **Mortal**
  Traditions.

### Referencing keywords in rules

When a rule names a keyword in bold, check that fighter's keyword list:

- **Firearms** — when every fighter in the retinue has **Mortal**, the retinue may purchase firearms; a fighter equips them only with the **Firearms** domain feat.
- **Domain feats** — fighter must have that **Domain** keyword.
- **Caster-only** feats and spells — fighter must have **Caster**.
- Tradition passives — apply to friendly fighters with that **Tradition** keyword
  unless the rule names a narrower keyword (e.g. **Caster**, **Rank**).

---

## Retinue building at a glance

Quick reference for authors — player-facing steps live in `rules/retinue-building.md` (**Building a Retinue**).

- Choose **one Archetype**: **Knights**, **Hunters**, **Folk**, or **Cult**.
- Choose **one Tradition** allowed for that Archetype; every fighter gains that **Tradition** keyword and the matching **Domain** keyword.
- Build from a **1000 Crown** budget for a new retinue.
- Recruit within your Archetype's fighter count and role caps.
- Every retinue must include exactly **1 Leader**.
- Choose feats your fighters' keywords allow; equip only weapons they are proficient in.
- Fighters with **Mortal** gain gunpowder access instead of spells. Fighters with **Cult** cannot have **Mortal**.

---

## Campaign Retinues

After your first roster is built, you maintain and expand it between battles using earnings from sold Relics. The same building rules apply — see `rules/economy.md` and `rules/post-game-sequence.md`.

---

## Game Summary

Noctvale is a grimdark campaign skirmish game where retinues battle for Relics
scattered across a cursed land. Fighters grow stronger through campaign play,
Survival Rolls carry both treasure and danger, and every battle risks lasting
consequences through the **Downed** system.


### Hunter Subtype Design

Potential specialization within hunter presets (from `rules/archetypes.md`):

- Witch Hunters — no magic; guns and technology
- Vampire Hunters — stakes, crossbows, Light magic
- Werewolf Hunters — silver, metallurgy

### External Game Reference

Games relevant to Noctvale design decisions:

| Game | Relevance |
|---|---|
| Mordheim | Campaign skirmish, injuries, exploration, warband progression, gothic city tone |
| Necromunda | Campaign gang progression, post-battle economy, injury, equipment depth |
| Warcry | Compact alternating activation, fast melee resolution, simple profiles |
| Kill Team | Alternating activations, melee attack/parry decisions, action economy |
| Warhammer 40k 2nd Ed. | Emergent play, war-as-simulation, wild vehicle/weapon outcomes |
| Age of Sigmar | Modern stat and rend vocabulary, Spearhead-style simplification and underdog mechanisms |
| Space Hulk | Overwatch tension, jamming, simple inputs with crunchy outputs |
| Bolt Action | Dice bag activation comparison point |
| Star Wars Legion | Alternating activation example |
| Kings of War | Mass battle where units remain intact until removed |
| WH Underworlds / Combat Patrol / Spearhead | Fixed-list or constrained-list comparison points |
| OSR RPGs | Old-school feel, danger, emergent stories, streamlined modern presentation |
| [Last Days: Zombie Apocalypse](#last-days-zombie-apocalypse) | Keyword = group cohesion; Leader sets composition; skill types gate level-ups; campaign loop (XP → stat or skill); Scavenge Points + Refuge |

#### Last Days: Zombie Apocalypse

*Ash Barker, Osprey Games (2018). Original homebrew ~2009 — **not** a port of Frostgrave, Necromunda, or Chain Reaction.*

**Rules engine:** Own system. d6 + stat vs target (7+ to hit shooting); opposed d6 melee; action points per model; five-phase turn (Menace → Action → Shooting → CQC → End). Familiar skirmish ingredients, but the campaign + group-building layer is bespoke.

**Design influences** (per author/reviews): Mordheim/Necromunda-style campaign progression; refuge upgrades; post-game table loops reminiscent of Warhammer Quest; AP phase structure compared to Wreck Age / Relicblade.

**Leveling system (worth stealing ideas from):**

| Step | Last Days |
|---|---|
| Levels | 0–10 per character |
| Earn XP | Survive encounter, kill zombies/opponents, scenario goals |
| On advancement | Spend XP: **2** (feat/keyword) or **5** (stat); roll table |
| Stat raise | Roll on random stat table after spending **banked XP** |
| Skill gain | Pick one of the fighter's **Skill Types** (5 groups × 6 skills = 30 skills) → roll on that table |
| Skill Types | Eligibility lists on each character archetype — not powers themselves |
| Starting skills | Pregen archetypes have fixed packages; **Survivor** type lets you pick starting skills (custom build within keyword rules) |
| Between games | Injury table, supply loot → Scavenge Points, recruit, refuge jobs/upgrades, **The Talk** (convert mismatched keyword to Leader's) |

**Noctvale hooks:** Spend XP bank (no levels) — Feat/Keyword **2 XP**, Stat **5 XP**. Caster keyword via Keyword table when eligible. **Retinue Rating** = Roster Cost for matchup balance.

**Caveat:** Reviews note random stat bumps can outperform narrow feats — tune carefully if we use random tables.
