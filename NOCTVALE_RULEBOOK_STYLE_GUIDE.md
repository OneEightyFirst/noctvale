# Noctvale Rulebook Style Guide

## Purpose

This guide keeps Noctvale rules **clear, consistent, and readable** as the game grows. Use it when writing or editing any player-facing rules text — core rules, campaign tables, weapon and spell entries, fighter cards, and scenario packets.

Companion docs: `NOCTVALE_DESIGN_TENETS.md` (whether a rule belongs) · `decision-log.md` (why a rule changed)

---

## Core Writing Principles

1. **Say what happens.** Lead with the effect, then exceptions.
2. **One idea per sentence.** Split compound rules into bullets or numbered steps.
3. **Name things once, then consistently.** Define a term on first use in a section; link to the canonical file after that.
4. **Prefer plain verbs:** move, attack, roll, gain, lose, become, resolve.
5. **Use numbers.** “Within 1"” beats “very close.” “Roll 1d6” beats “roll a die.”
6. **Front-load conditions.** “If the target is Stunned, …” not “The target, should they happen to be Stunned, …”
7. **Cross-reference or repeat deliberately.** One-off rules live in one file — cross-ref elsewhere. **Shared sub-routines** (Attack Sequence, Apply Wounds, Casting Roll, Primer Roll) are **repeated verbatim** wherever they apply — master copy in `rules/_shared-snippets.md`.
8. **Write for someone who wasn’t in the room.** State what the game *is*. Superseded rules, renames, and design history belong in `decision-log.md` — not in player-facing text.
9. **Tables carry the data.** If a stat, cost, difficulty, or profile value is in a table, do not repeat it in the surrounding prose. Use prose for procedure, timing, exceptions, and cross-refs.
10. **Link cross-references.** Point to other rules with markdown links and a readable label — **[Economy](../campaign/economy.md)**, not a raw path in backticks. Use relative paths so links work on GitHub. Prefer the subsystem or section name as link text (**Weapons**, **Domains**, **Post-Game**). Section anchors are fine when the target is long (**[Domains](retinue.md#domains)**).

---

## Voice and Tone

| Do | Don’t |
|---|---|
| Direct, grim, practical | Flowery lore voice in rules chapters |
| Second person for procedures (“Roll 1d6”) | Passive fog (“a roll is made”) |
| Neutral rules voice | Jokes, asides, designer commentary in player text |
| Short paragraphs and lists | Wall-of-text prose |

**Lore voice** belongs in `noctvale.md` and faction preset blurbs. **Rules voice** is colder and precise: what you can do, what it costs, what happens next.

---

## Rules Language

### Sentence patterns

**Actions**
> The fighter gains **+1 red defense die** until their next activation.

**Tests**
> Roll **d6 + Sk ≥ 8**. On a failure, …

**Targeting**
> Choose an enemy fighter **within engagement range**.

**Timing**
> At the **start of the round**, … · At the **end of the fighter's activation**, … · Until the **start of the caster's next activation**, …

**Prohibitions** (use sparingly, but clearly)
> The fighter **cannot** end their movement on another fighter's base.

**Player choice**
> The defender **chooses** which failed defense dice to convert.

### Words to avoid in rules text

| Avoid | Use instead |
|---|---|
| damage (generic) | **hit**, **wound**, **Mt / Sk** (spells), **unblocked hit** |
| kill / death (mid-battle) | **Out of Action**, **Mercy Kill**, **Slain** (post-game) |
| unit | **fighter** |
| warband | **retinue** (except when naming another game's term, e.g. Mordheim) |
| model | **fighter** |
| hero | **fighter** (or **Leader** when specific) |
| may optionally | **may** |
| in order to | **to** |
| gate (casting / gunpowder) | **casting roll**, **primer roll** |
| forgo / forgone (activation) | **skip activation**, **skipped their activation** |

### Defined game terms (use exactly)

| Term | Meaning |
|---|---|
| **game** | A full session — one or more battles in a campaign, or a standalone skirmish |
| **battle** | One table encounter from deployment to end condition |
| **round** | Every eligible fighter activates once (see turn structure in `actions.md`) |
| **activation** | One fighter's turn — **2 actions** |
| **activation count** | Fighters who can activate this round — **Active** and **Downed** only; not **Stunned**, **Out of Action**, or **Escaped** |
| **action** | One thing a fighter does during an activation (**Move**, **Melee**, etc.) |
| **reaction** | A free single action outside the fighter's activation (**Ranged Reaction**, Overwatch) |
| **player** | Person controlling a retinue |
| **opposing player** | The other player at the table |
| **retinue** | One player's roster for a battle |
| **fighter** | One figure on the table with a profile and base |
| **friendly fighter** | A fighter on your retinue |
| **enemy** / **enemy fighter** | A fighter on an opposing retinue |
| **ally** | Acceptable in short reminder text; prefer **friendly fighter** in full rules |
| **Active** | Upright and fighting — not Downed, Stunned, or Out of Action |
| **engagement range** | **1"** — bases within 1" are engaged |
| **line of sight** | Lowercase in prose; binary (can see / cannot see) |
| **campaign** | Linked battles with post-game steps between them |

---

## Terminology Glossary

### Stats (abbreviations — always this form)

| Abbr | Name | Used for |
|---|---|---|
| M | Movement | **"** per Move action |
| CC | Close Combat | melee to-hit |
| RC | Ranged Combat | ranged to-hit |
| Mt | Might | red dice |
| Sk | Skill | blue dice |
| Wi | Will | casting (2d6 + Wi) |
| Sa | Sanity | fear tests (d6 + Sa) |
| W | Wounds | hit points |

Spell out the name once per major section for new readers; use abbreviations everywhere else.

### List-building terms

| Term | Capitalize? | Notes |
|---|---|---|
| Archetype | Yes | Knights, Hunters, Folk, Cult |
| Domain | Yes | Light, Arcane, Nature, Blood, Necromancy, Infernal, **Mortal** |
| Tradition | Yes | Witches, Crusaders, etc. — one per retinue |
| Faction | Yes | Named preset (Phoenix Guard, Silver Hunt, …) |
| class | No | Leader, Elite, Specialist, Rank — mechanical roster slot |
| keyword | No in prose | **Caster**, **Fear**, **Fearless** — bold the keyword name |
| Crowns | Yes | Currency — always plural: **20 Crowns** |
| Relic(s) | Yes | Campaign treasure recovered in scenarios |
| Relic or Instrument | Yes | Roster **Sphere of Influence** gear — **Relic** (+1 Sa) or **Instrument** (+1" M); not campaign treasure |
| Sphere of Influence | Yes | Area effect from **Relic**, **Instrument**, or qualifying **Companion** |

### Combat terms

| Term | Format |
|---|---|
| Strike Pool | Capitalize |
| red die / blue die | Lowercase color |
| red hit / blue hit | Lowercase color |
| critical hit | Lowercase; **critical** as adjective OK |
| natural 1 / natural 6 | Lowercase |
| weapon triangle advantage | Lowercase phrase |
| Mishap / Misfire / Overcharge | Capitalize — spell outcomes |
| Ranged Reaction | Capitalize — named rule |

### Wound states (conditions)

Always bold the state name: **Downed**, **Stunned**, **Out of Action**, **Hidden**.

Write **Out of Action** in full the first time in a section. **OOA** is acceptable in tables, design notes, and tight card space only.

### Equipment tiers

**Light Armor**, **Medium Armor**, **Heavy Armor** · **Buckler**, **Shield**, **Tower Shield**

Melee access: **Basic**, **Long**, **Heavy**, **Exotic**  
Gunpowder access: **Basic**, **Refined**

---

## Capitalization Rules

| Category | Rule | Example |
|---|---|---|
| Action names | Bold, title case | **Charge**, **Recover**, **Cast** |
| Condition names | Bold, title case | **Stunned**, **Hidden** |
| Keywords | Bold | **Caster**, **Single Shot**, **Flintlock** |
| Archetype / Domain / Tradition | Bold when naming the choice | **Hunters** + **Nature** |
| Stats in tables | Abbreviation caps as listed | Mt, Sk, Wi |
| Stats in sentences | Abbreviation or spelled out — pick one per paragraph | “d6 + Sk ≥ 8” |
| Generic gear | Lowercase | sword, medium armor, musket |
| Named gear | Title case | Widow's Tears, Silversbane |
| File references | Backticks, lowercase path | `conditions.md` |

**TODO:** Fighter card layout not finalized — confirm whether action names appear in ALL CAPS on cards while rules use bold title case.

---

## Dice and Measurement Formatting

### Dice

| Use | Format |
|---|---|
| One six-sided die | **1d6** or **d6** — prefer **1d6** when count matters (“Roll **1d6**”) |
| Multiple dice | **2d6**, **3d6** — lowercase **d**, no space |
| Stat check | **d6 + Sk ≥ 8** |
| Casting | **casting roll** — **2d6 + Wi** vs difficulty |
| Gunpowder / firearms | **primer roll** — **2d6 + Sk** vs **primer difficulty** (weapon profile); **RC** governs the **Attack Sequence** to-hit roll |
| Difficulty shorthand | **11+**, **6+** (meaning meet or beat on the roll) |
| Natural results | **natural 1**, **natural 6** |
| Table roll | **Roll 1d6:** then table |
| Dice colors | **red die**, **blue die** — lowercase color |

**Don't:** D6, 2D6, “on a 4+” for stat checks (Noctvale uses **≥ 8** on d6+stat, or **6+** / **11+** on 2d6 rolls). Don't use **gate** for casting or gunpowder — use **casting roll** and **primer roll**.

### Measurements

| Use | Format |
|---|---|
| Distance | Inch mark: **1"**, **6"**, **3"–18"** |
| Within distance | **within 1"** · **within 12"** |
| Engagement | **engagement range** (defined as **1"**) or **within 1"** |
| Blast / aura | **3" blast**, **6" cloud**, **8" from caster** |
| Movement stat | **6"** in profile tables (M column) |
| Rolled distance | Roll **d6 + Mt**. Move that many **"**. |

Always use the **"** mark for inches. Do not write `inch`, `inches`, or spell out the unit in rules text.

---

## Stat and Profile Formatting

### Species / fighter profile table

```markdown
| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 6" | 3 | 3 | 3 | 3 | 3 | 4 | 3 |
```

- Movement includes inch mark in table; other stats are plain integers.
- Higher is better for all stats (state once per chapter).

### Inline profile reference

> Human (Mt 3, Sk 4) with a Sword: **4 red + 5 blue = 9 dice**

### Modifier notation

| Meaning | Format |
|---|---|
| Stat bonus | **+1 Mt**, **+2 Sk** |
| Stat penalty | **−1 Mt** (unicode minus) |
| Die bonus | **+1 red defense die** |
| Strike Pool dice | **add 2 red dice to the Strike Pool** |
| To-hit modifier | **add +1 to the roll to hit** |
| Crown cost | **−25 Crowns** |

Use **+** / **−** with a space before the number in prose.

Use **+1 Mt** or **+1 Sk** only when a rule changes the fighter's stat or a
weapon table's **+Mt / +Sk** modifier. When a rule adds dice without changing a
stat, name the dice directly: **add 2 red dice to the Strike Pool**, **add 1
blue die to the Strike Pool**, or **gain +1 red defense die**.

For attack accuracy, use **add +1 to the roll to hit**. Do not write **+1 Mt**
or **+1 red die** when the rule modifies the **d6 + CC/RC** roll.

---

## Weapon and Ability Formatting

### Weapon table columns (standard)

`| Weapon | Hands | Range | Primer | +Mt | +Sk | Notes |`

- **Range:** `3"–18"` for missiles; **Engagement** for melee.
- **Primer:** **2d6 + Sk** vs profile value; **—** for weapons without a primer roll. Profile values assume **Sk 3**; adjust per the **Primer Roll** box in `_shared-snippets.md`.
- **Notes:** traits comma-separated — **Single Shot**, **Smoke**, **Flintlock** keyword callouts.

### Weapon trait line (short)

> **Musket** · 2H · 3"–24" · primer **9+** · 5 Mt / 3 Sk · crits vs all targets

### Spell line (short)

> **Arcane Bolt** · 11+ · 5 Sk · 20" · ranged attack · Mishap: *(TBD)*

### Spell table columns (standard)

`| Spell | CV | Mt | Sk | Range | Effect | Mishap |`

- **CV** = casting difficulty (11+, 10+, etc.).
- Effect cell: one or two sentences, semicolons between clauses.
- Target: **enemy fighter**, **friendly fighter**, **point within 12"**.

### Keyword abilities

> **Flintlock** — −25 Crowns, **Single Shot**.

> **Fear (12")** — Sanity test when activating within 12" and line of sight.

### Named action in ability text

Reference actions in bold: “perform a **Ranged** action,” “use the **Recover** action.”

---

## Reminder Text Rules

Use reminders to point at canonical rules — not to sneak in new mechanics. Reminder text on cards/tables must **not contradict** the full rule elsewhere.

**Format:** *(See `filename.md`.)* or *(See `special-rules.md` — Intervening Fighters.)*

| When | Example |
|---|---|
| Full rule elsewhere | *(See conditions.md.)* |
| Named subsection | *(See combat.md — Ranged Reaction.)* |
| First keyword on a page | **Single Shot** — one use per battle; cannot reload |
| Card / table only | Icon or one-line reminder — **TODO:** reminder icon set not defined |

**Card reminder tone** — shorter, no file paths:

> **Downed:** cannot attack; may **Recover**.

---

## Action and Procedure Formatting

Each action in `actions.md` uses this block order:

1. **Cost** — `**Cost:** 1 action` (or **Skip the rest of this fighter's activation** for **Overwatch**)
2. **Target / range** — who or what the action affects
3. **Procedure** — what to roll or resolve; cross-ref shared sub-routines where needed
4. **Restrictions** — bullet list of limits and exceptions

Multi-step procedures use **Step 1**, **Step 2**, … Post-game and campaign steps use the same numbering.

**At a glance** boxes (blockquote `>`) open any subsystem that runs every turn or every battle — turn structure, post-game, Survival Rolls. Five to eight lines; no new rules in the box.

---

## Examples and Diagrams

- **Worked examples** use named fighters: Human, Elf, Dwarf — match `core-rules.md` species.
- Label steps **Step 1**, **Step 2** in sequences (see `combat.md`).
- **Round at a Glance** uses blockquote `>` for quick-reference boxes.
- Diagrams: ASCII for simple flows (`Sword > Axe > Spear > Sword`); TODO for official board-measurement diagrams.
- One full combat example per major rules revision — don't scatter partial math across files.

---

## Lore vs Rules Text

| | Lore (`noctvale.md`, faction blurbs) | Rules (`rules/`, `campaign/`) |
|---|---|---|
| Purpose | Setting, history, mood | Procedures and outcomes |
| Names | Emperor, Valecoria, Crown Roads | Archetype, Domain, Retinue Rating |
| Tone | Gothic, narrative | Plain, imperative |
| Mechanics | None, or high-level summary only | Full detail |

Faction preset lore may mention identity (“vampire aristocracy”) but **mechanical limits** live in `retinue.md` / `retinue-building.md`.

---

## Spelling

**Standard: US English** in all repo text — `armor`, `color`, `organized`, etc.

---

## Do / Don't Examples

### Defining an action

**Don't**
> When a fighter would want to leave engagement, they may attempt to retreat by making a Skill test, and if they fail the enemy might get to attack them.

**Do**
> **Retreat** — Attempt to leave engagement range. Roll **d6 + Sk ≥ 8**. On failure, an engaged enemy may make a **free Melee attack** if they are not engaged with another enemy.

---

### Conditional effects

**Don't**
> Units that have been reduced to zero wounds are removed unless the downed rules apply.

**Do**
> When a fighter reaches **0 Wounds**, they become **Downed**.

---

### Stacking modifiers

**Don't**
> The fighter gets +1 to their defense for each situation that applies.

**Do**
> The fighter gains **+1 red defense die** until their next activation.

---

### Vague range

**Don't**
> Nearby enemies are affected.

**Do**
> All enemy fighters **within 8"** are affected.

---

### Designer history

**Don't**
> Flintlock is a keyword, not a separate tier, because we removed the old tier system.

**Do**
> **Flintlock** is a keyword on any firearm: **−25 Crowns**, **Single Shot**.

---

## Sample Texts

### Weapon trait (card / table)

> **War Axe** — Heavy · Mt +2 · weapon triangle (Axe)

### Ability — tactical action

> **Brace** — The fighter gains **+1 red defense die** (rolled with Mt) until their next activation.

### Ability — spell

> **Heal** — **Cast**, CV 10+, range **1"**. Restore **1 Wound** and improve wound state by one step (Stunned→Downed, Downed→Active). **Mishap:** Deal **1 Wound** to the target.

### Reminder — condition

> **Stunned** — Cannot move or act. Defends with **red dice only**. Any unblocked hit → **Out of Action**.

### Campaign table intro

> Each fighter who was **Out of Action** when the battle ended rolls **1d6** on the **Casualty Table**.

### Locked campaign terms

| Term | Use |
|---|---|
| **Casualty Table** | First post-battle table for fighters who ended the battle **Out of Action** |
| **Doom Table** | Severe follow-up table for **Grievous** casualties and specific Mishaps |
| **Survival Roll** | Retinue-level post-battle reward roll |
| **table** | Use instead of **chart** in player-facing rules |

---

## Open Questions / TODOs

| Topic | Status |
|---|---|
| Design TODOs | Track unresolved rules decisions in `decision-log.md` Ideas |
| Fighter card typography | Action names, stat order, reminder box layout |
| Condition icons | Downed / Stunned / Hidden on cards |
| **OOA** on cards | Abbreviation vs full **Out of Action** |
| **feat** / **Domain feat** entries | Extend this guide when feat format is locked |
| **damage** vs **wound** | Some spell blurbs still say “damage”; prefer **hit** / **Wound** |
| **Spell table format** | Refine column layout, Effect/Mishap wording, card reminders |
| **Armor/shield conversion** | Failed defense dice → successful defense dice |
| Scatter die | Define scatter die notation in `rules/gear.md` (Bombs) |
| Opponent-controlled fighters | Standard phrase for “your opponent controls it for its activation” |

---

## Quick Checklist (before you publish a rules section)

- [ ] Terms match this glossary
- [ ] Actions and conditions **bold** on first use in the section
- [ ] Distances use **"** notation
- [ ] Dice use **1d6** / **2d6** / **d6 + stat ≥ 8**; **casting roll** / **primer roll** (not **gate**)
- [ ] Table data not duplicated in surrounding prose
- [ ] No superseded rules or rename callouts in player text
- [ ] US spelling
- [ ] **fighter** not **model** / **unit**
- [ ] **retinue** not **warband**
- [ ] **skip activation** not **forgo** / **forgone**
- [ ] Shared sub-routines **repeated verbatim** where relevant (master: `rules/_shared-snippets.md`)
- [ ] Cross-refs use markdown links with readable labels (not raw file paths in backticks)
- [ ] One-off rules link to the canonical file (subsystem name as link text)
- [ ] No lore or designer history in procedure text
- [ ] One clear outcome per bullet
- [ ] **At a glance** box if the subsystem runs every turn or every battle

---

*Last updated: 2026-06-07. Derived from `rules/`, `campaign/`, `noctvale.md`, and `NOCTVALE_DESIGN_TENETS.md`.*
