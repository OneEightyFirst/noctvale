# Noctvale Rulebook Style Guide

## Purpose

This guide keeps Noctvale rules **clear, consistent, and readable** as the game grows. Use it when writing or editing any player-facing rules text — core rules, campaign tables, weapon and spell entries, fighter cards, and scenario packets.

**Rulebook chapters** (core rules rewrite, campaign prose): also follow `.agents/skills/noctvale-rulebook/SKILL.md`. Canonical examples: `rules/combat.md` Attack Sequence and `rules/the-turn.md` Turn Structure.

**Fluff placeholders** in rules files are intentional until late-stage writing.

Companion docs: `NOCTVALE_DESIGN_TENETS.md` (whether a rule belongs) · `decision-log.md` (why a rule changed)

---

## Core Writing Principles

1. **Say what happens.** Lead with the effect, then exceptions.
2. **Write additive rules.** State what a fighter, weapon, feat, spell, or retinue
   gains or may do. Only printed grants are available. Avoid absence lists and
   negative columns unless a rule is overriding a broader permission already
   printed on the page.
3. **One idea per sentence.** Split compound rules into bullets or numbered steps.
4. **Write rules, not notes.** Avoid shorthand such as “ties: previous initiative.” Write the complete rule in a sentence.
5. **Start wide, then zoom in.** Opening sections should give the broad rule. Save feat, gear, spell, and scenario exceptions for the section where players need that detail.
6. **Core rules state the default.** Procedures in the core rules chapters define the baseline — not every override. Do not embed inline exceptions such as “or if you carry **Climbing Rope**, use full **Movement** instead.” Gear, feats, spells, keywords, and traditions state their own exceptions on their entries; players discover them where those items are defined.
7. **Keep related rules together.** Do not split every small rule into its own section; use compact paragraphs unless a sequence, table, or repeated reference needs headings.
8. **Name things once, then consistently.** Define a term on first use in a section; link to the canonical file after that.
9. **Prefer plain verbs:** move, attack, roll, gain, lose, become, resolve.
10. **Use numbers.** “Within 1"” beats “very close.” “Roll 1d6” beats “roll a die.”
11. **Front-load conditions.** “If the target is Stunned, …” not “The target, should they happen to be Stunned, …”
12. **Cross-reference or repeat deliberately.** One-off rules live in one file — cross-ref elsewhere. **Shared sub-routines** (Attack Sequence, Apply Wounds, Casting Roll, Primer Roll) are **repeated verbatim** wherever they apply — edit the canonical copy in `rules/combat.md`, `rules/magic.md`, or `rules/weapons.md`, then grep and sync duplicates. See `decision-log.md` (2026-06-21 — Retire `_shared-snippets.md`).
13. **Write for someone who wasn’t in the room.** State what the game *is*. Superseded rules, renames, and design history belong in `decision-log.md` — not in player-facing text.
14. **Tables carry the data.** If an attribute, cost, difficulty, or profile value is in a table, do not repeat it in the surrounding prose. Use prose for procedure, timing, exceptions, and cross-refs.
15. **Link cross-references.** Point to other rules with markdown links and a readable label — **[Economy](rules/economy.md#economy)**, not a raw path in backticks. Use relative paths so links work on GitHub. Prefer the subsystem or section name as link text (**Weapons**, **Domains**, **Post-Game**). Section anchors are fine when the target is long (**[Domains](rules/traditions.md#domains)**).

---

## Markdown source formatting

Rules live in `rules/*.md`. Keep the source easy to read and safe for every output pipeline (wiki, print, InDesign).

- **One line per prose paragraph.** Do not hard-wrap at column width or save editor soft wraps as line breaks.
- **Blank lines separate paragraphs.** A single newline inside a paragraph becomes an unintended break in some renderers.
- **Join wrapped list items and blockquote lines** before committing — a continued list item uses two-space indent; a continued blockquote line uses another `>`.
- **Leave structure alone:** headings, tables, fenced code, horizontal rules, and intentional blockquote separators (`>` on its own line) stay as written.
- **Name dice by attribute, not color.** Write **Might dice** and **Skill dice** (or **Might die** / **Skill die**). Players choose which physical dice color represents each attribute before the first battle.
- **Use battlefield, not board or table.** The play area is the **battlefield**; its perimeter is the **battlefield edge**. Reserve **table** for reference charts only (**Casualty Table**, **roll on the table below**).

To reflow existing files: `python3 scripts/reflow-rules.py`

---

## Voice and Tone

Noctvale uses two voices. Keep them separate on the page.

### Rulebook voice (print chapters)

Use this voice in `rules/` chapters written for the eventual print book — starting with the core-rules rewrite.

| Do | Don't |
|---|---|
| Read like a **rulebook** you follow in order | Read like a **reference manual** you jump into at random |
| **Start wide, then zoom in** within each chapter | Open with sub-headings and bullet exceptions |
| **Grim, direct, practical** prose for procedures | Clinical API-style field lists (**Cost:** / **Target:** blocks everywhere) |
| Second person for procedures (“Roll **1d6**”) | Passive fog (“a roll is made”) |
| Short narrative **examples** at the end of a chapter | Scattered partial math across the file |
| Mordheim-style **chapter flow** (The Turn, Shooting, Psychology) | Subsystem encyclopedia structure (Actions → Combat → Table Rules) |

**Chapter fluff** opens each major chapter: one to three short paragraphs in *italics*, atmospheric but not purple. Fluff sets mood and frames why the rules matter; it does **not** introduce mechanics, attributes, or exceptions.

Separate fluff from rules with a horizontal rule (`---`). Everything after the rule is **rules text** — precise, numbered where needed, no lore mixed in.

Within rules text, prefer **prose first, bullets for exceptions**:

> When a fighter activates, they may perform **2 actions** chosen from the action list. Actions may be taken in any combination and in any order.
>
> Only fighters who can activate may be chosen:
>
> - **Stunned**, **Out of Action**, and **Escaped** fighters cannot be chosen.

Use the full **Cost / Target / Procedure / Restrictions** block only where an action is complex enough to need it (e.g. **Hide**, **Ranged** with weapon forks). Default to prose lead + tight bullets.

### Reference voice (lookup sections)

Use colder, precise voice for tables, fighter cards, gear entries, spell lines, and campaign tables — anywhere players look up a fact mid-battle without reading a chapter.

| Do | Don't |
|---|---|
| Lead with the effect | Atmospheric framing |
| One idea per bullet | Narrative examples |
| Tables carry the data | Prose repeating table values |

**Setting lore** (history, factions, the fall of Valecoria) belongs in `rules/intro.md` and faction preset blurbs. **Chapter fluff** is brief scene-setting at the top of a rules chapter only — never a substitute for intro lore and never embedded in procedure paragraphs.

---

## Rules Language

### Sentence patterns

**Actions**
> The fighter gains **+1 Might defense die** until their next activation.

**Tests**
> Make a **Skill** check. On a failure, …

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
| damage (generic) | **hit**, **wound**, **Might / Skill** (spells), **unblocked hit** |
| kill / death (mid-battle) | **Out of Action**, **Mercy Kill**, **Slain** (post-game) |
| unit | **fighter** |
| warband | **retinue** (except when naming another game's term, e.g. Mordheim) |
| model | **fighter** |
| hero | **fighter** (or **Leader** when specific) |
| may optionally | **may** |
| in order to | **to** |
| gate (casting / gunpowder) | **casting roll**, **primer roll** |
| forgo / forgone (activation) | **skip activation**, **skipped their activation** |
| board / table (play area) | **battlefield**, **battlefield edge** |

### Defined game terms (use exactly)

| Term | Meaning |
|---|---|
| **game** | A full session — one or more battles in a campaign, or a standalone skirmish |
| **battle** | One encounter on the battlefield from deployment to end condition |
| **battlefield** | The **3' × 3'** play area — terrain, positioning, movement, combat, and all in-play interactions |
| **battlefield edge** | Any edge of the battlefield; used for deployment, **Escape**, and edge-based scenario rules |
| **round** | Every eligible fighter activates once (see turn structure in `rules/the-turn.md`) |
| **activation** | One fighter's turn — **2 actions** |
| **activation count** | Fighters who can activate this round — **Active** and **Downed** only; not **Stunned**, **Out of Action**, or **Escaped** |
| **action** | One thing a fighter does during an activation (**Move**, **Melee**, etc.) |
| **reaction** | A free single action outside the fighter's activation (**Ranged Reaction**) |
| **player** | Person controlling a retinue |
| **opposing player** | The other player in the battle |
| **retinue** | One player's roster for a battle |
| **fighter** | One figure on the battlefield with a profile and base |
| **friendly fighter** | A fighter on your retinue |
| **enemy** / **enemy fighter** | A fighter on an opposing retinue |
| **ally** | Acceptable in short reminder text; prefer **friendly fighter** in full rules |
| **Active** | Upright and fighting — not Downed, Stunned, or Out of Action |
| **engagement range** | **1"** — bases within 1" are engaged |
| **line of sight** | Lowercase in prose; binary (can see / cannot see) |
| **campaign** | Linked battles with post-game steps between them |
| **Casting Difficulty** | The target number a **casting roll** must meet or beat, printed on each spell (e.g. **Will** 11+) |
| **Priming Difficulty** | The target number a **primer roll** must meet or beat, printed on each firearm's weapon profile |

---

## Terminology Glossary

### Attributes

| Abbr | Name | Used for |
|---|---|---|
| M | Movement | **"** per **Move** action |
| CC | Close Combat | melee to-hit |
| RC | Ranged Combat | ranged to-hit |
| Mt | Might | Might dice |
| Sk | Skill | Skill dice |
| Wi | Will | casting (**2d6 + Will**) |
| Sa | Sanity | fear tests (**Sanity** checks) |
| W | Wounds | hit points |

Use abbreviations in tables only. In prose, write the full attribute name in bold:
**Movement**, **Close Combat**, **Ranged Combat**, **Might**, **Skill**,
**Will**, **Sanity**, and **Wounds**.

### List-building terms

| Term | Capitalize? | Notes |
|---|---|---|
| Archetype | Yes | Knights, Hunters, Folk, Cult |
| Domain | Yes | Light, Arcane, Nature, Blood, Necromancy, Infernal, **Mortal** |
| Universal feat | Yes | Any fighter — cross-Domain list (**Line Breaker**, **Blacksmith's Arms**, …) |
| Tradition | Yes | Witches, Crusaders, etc. — one per retinue |
| Faction | Yes | Named preset (Phoenix Guard, Silver Hunt, …) |
| keyword | No in prose | Identity: **Knights**, **Hunters**, **Folk**, **Cult**, **Light**, **Mortal**, **Leader**, **Elite**, **Specialist**, **Rank**, **Crusaders**, etc. Capability: **Caster**, **Fearless**, **Undead**, **Vampire** — bold the keyword name. Keywords are permanent roster tags, not temporary Sanity states. |
| role | Lowercase when generic | Umbrella for **Leader**, **Elite**, **Specialist**, **Rank** keywords. Do not use *class* (conflicts with magic classes) or *fighter-type*. |
| class | No in roster prose | Use **role** or name the keyword (**Leader**, **Elite**, etc.) directly |
| project Fear / Panic / Insanity | Yes | A fighter or effect that causes others to test — not "gain Fear" on friendly fighters |
| difficult terrain | Lowercase in prose | **area terrain** that requires **Scramble** at half **Movement** |
| affliction | Capitalize name | **Weakened**, **Enfeebled**, and **Withered** — see `rules/conditions.md` |
| Crowns | Yes | Currency — always plural: **20 Crowns** |
| Relic(s) | Yes | Campaign treasure recovered in scenarios |
| Icon or Instrument | Yes | Roster **Sphere of Influence** gear — **Icon** (+1 **Sanity**) or **Instrument** (+1" **Movement**); not campaign treasure |
| Sphere of Influence | Yes | Area effect from **Icon**, **Instrument**, or qualifying **Companion** |

### Combat terms

| Term | Format |
|---|---|
| Strike Pool | Capitalize |
| battlefield edge | Lowercase in prose; bold when defining setup |
| Might die / Skill die | Lowercase **Might** / **Skill** in the die name |
| Might hit / Skill hit | Lowercase **Might** / **Skill** in the hit name |
| critical hit | Lowercase; **critical** as adjective OK |
| natural 1 / natural 6 | Lowercase |
| weapon triangle advantage | Lowercase phrase |
| charge follow-up | **Melee** immediately following **Charge** during the same activation — no other actions between them |
| Mishap / Misfire | Capitalize — spell and weapon outcomes |
| Ranged Reaction | Capitalize — named rule |

### Wound states (conditions)

Always bold the state name: **Downed**, **Stunned**, **Out of Action**, **Hidden**.

Write **Out of Action** in full the first time in a section. **OOA** is acceptable in tables, design notes, and tight card space only.

### Equipment tiers

**Light Armor**, **Medium Armor**, **Heavy Armor** · **Buckler**, **Shield**, **Tower Shield**

Melee access: **Basic**, **Long**, **Heavy**, **Exotic**  
Gunpowder access: **Firearms** domain feat *(Mortal)*; retinue purchase when every fighter has **Mortal**

---

## Capitalization Rules

| Category | Rule | Example |
|---|---|---|
| Action names | Bold, title case | **Charge**, **Recover**, **Cast** |
| Condition names | Bold, title case | **Stunned**, **Hidden** |
| Keywords | Bold | **Caster**, **Single Shot**, **Flintlock** |
| Archetype / Domain / Tradition | Bold when naming the choice | **Hunters** + **Nature** |
| Attributes in tables | Abbreviation caps as listed | Mt, Sk, Wi |
| Attributes in sentences | Full bold attribute name | **Skill** check |
| Generic gear | Lowercase | sword, medium armor, musket |
| Named gear | Title case | Widow's Tears, Silversbane |
| File references | Backticks, lowercase path | `rules/combat.md` |

**TODO:** Fighter card layout not finalized — confirm whether action names appear in ALL CAPS on cards while rules use bold title case.

---

## Dice and Measurement Formatting

### Dice

| Use | Format |
|---|---|
| One six-sided die | **1d6** or **d6** — prefer **1d6** when count matters (“Roll **1d6**”) |
| Multiple dice | **2d6**, **3d6** — lowercase **d**, no space |
| Attribute check | **Skill** check |
| Casting | **casting roll** — **2d6 + Will** vs **Casting Difficulty** |
| Gunpowder / firearms | **primer roll** — **2d6 + Skill** vs **Priming Difficulty** (weapon profile); **Ranged Combat** governs the **Attack Sequence** to-hit roll |
| Difficulty shorthand | **11+**, **6+** (meaning meet or beat on the roll) |
| Natural results | **natural 1**, **natural 6** |
| Table roll | **Roll 1d6:** then table |
| Dice types | **Might die**, **Skill die**, **Might dice**, **Skill dice** — name the attribute, not a fixed color |

**Don't:** D6, 2D6, or “on a 4+” for attribute checks. After the core rule defines attribute checks, use the named check: **Skill** check, **Might** check, **Sanity** check, and so on. Use **6+** / **11+** on 2d6 rolls. Don't use **gate** for casting or gunpowder — use **casting roll** and **primer roll**.

### Measurements

| Use | Format |
|---|---|
| Distance | Inch mark: **1"**, **6"**, **3"–18"** |
| Within distance | **within 1"** · **within 12"** |
| Engagement | **engagement range** (defined as **1"**) or **within 1"** |
| Blast / aura | **3" blast**, **6" cloud**, **8" from caster** |
| Movement attribute | **6"** in profile tables (**M** column) |
| Rolled distance | Roll **d6 + Might**. Move that many **"**. |

Always use the **"** mark for inches. Do not write `inch`, `inches`, or spell out the unit in rules text.

---

## Attribute and Profile Formatting

### Ancestry / fighter profile table

```markdown
| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 6" | 3 | 3 | 3 | 3 | 3 | 4 | 3 |
```

- Movement includes inch mark in table; other attributes are plain integers.
- Higher is better for all attributes (state once per chapter).

### Inline profile reference

> Human (**Might** 3, **Skill** 4) with a Sword: **4 Might + 5 Skill = 9 dice**

### Modifier notation

| Meaning | Format |
|---|---|
| Attribute bonus | +1 **Might**, +2 **Skill** |
| Attribute penalty | −1 **Might** (unicode minus) |
| Die bonus | **+1 Might defense die** |
| Strike Pool dice | **add 2 Might dice to the Strike Pool** |
| To-hit modifier | +1 **Close Combat**, −1 **Ranged Combat**, or +1 **Ranged Combat** — whichever **Hit** attribute the attack uses |
| Crown cost | **−25 Crowns** |

Use **+** / **−** with a space before the number in prose.

Use +1 **Might** or +1 **Skill** only when a rule changes the fighter's attribute, or when a weapon or spell profile uses an additive +**Might** / +**Skill** value. When a rule adds dice without changing a
attribute, name the dice directly: **add 2 Might dice to the Strike Pool**, **add 1
Skill die to the Strike Pool**, or **gain +1 Might defense die**.

For attack accuracy, modify the **Hit** attribute for that attack: +1 **Close Combat** or +1 **Ranged Combat** for **Melee** and **Ranged** attacks respectively. When a rule applies to both, write +1 **Close Combat** and +1 **Ranged Combat**. Positive modifiers make checks easier; negative modifiers make checks harder. Do not write +1 **Might** or **+1 Might die** when the rule modifies a **Close Combat** check or **Ranged Combat** check.

---

## Weapon and Ability Formatting

### Weapon table columns (standard)

`| Weapon | Hands | Range | Primer | Mt | Sk | Notes |`

- **Range:** `3"–18"` for missiles; **Engagement** for melee.
- **Primer:** **2d6 + Skill** vs profile value; **—** for weapons without a primer roll. Profile values assume **Skill** 3; adjust per the **Primer Roll** box in `rules/weapons.md`.
- **Mt / Sk:** A number with `+` adds to the fighter's matching attribute. A number without `+` is fixed.
- **Notes:** traits comma-separated — **Single Shot**, **Smoke**, **Flintlock** keyword callouts.

### Weapon trait line (short)

> **Musket** · 2H · 3"–24" · primer **9+** · 5 **Might** / +2 **Skill** · crits vs all targets

### Spell line (card / compact)

> **Arcane Bolt** · **Will** 11+ · 20" · **Ranged Combat**, 4 **Might** / +3 **Skill**

### Spell block (standard)

Use spell blocks in `rules/magic.md` instead of spell tables.

```markdown
#### Radiant Strike

*[Placeholder]*

**Difficulty:** **Will** 11+ | **Range:** 12" | **Attack:** **Ranged Combat**

5 **Might** | +2 **Skill**

Make a ranged spell attack. Against **Undead** and **Daemons**, use 6 **Might** / +2 **Skill** instead.

**Mishap:** None
```

- **Fluff line** — *[Placeholder]* in italics until real flavor text is written; never a substitute for the effect prose below it.
- **Difficulty** is the spell's casting attribute and target number: **Will** 11+, **Sanity** 12+. Do not write **Casting:** on the spell entry itself — the full term **Casting Difficulty** is defined once under [Casting](magic.md#casting); the spell line uses the short form **Difficulty:**.
- Separate stat-line fields with ` | ` (pipe), not periods.
- Include an **Attack:** field only when the spell resolves through the **Attack Sequence**. Omit the whole `| **Attack:** …` segment for spells that don't build a Strike Pool — do not print a placeholder dash.
- When the spell has an **Attack:** field, put the Strike Pool dice on their own line below the stat line: `5 **Might** | +2 **Skill**`. A plain **Might** or **Skill** value is fixed; a +**Skill** value adds to the caster's **Skill**.
- Write the effect as normal rules prose, not table shorthand.
- Always include **Mishap:** as the closing line. Write **Mishap: None** when the spell has no backlash.

### Ability notation

> **Flintlock** — −25 Crowns, **Single Shot**. *(keyword)*

> **Fear (12")** — **Sanity** check when activating within 12" and line of sight. *(projection notation — not a keyword)*

### Named action in ability text

Reference actions in bold: “perform a **Ranged** action,” “use the **Recover** action.”

---

## Reminder Text Rules

Use reminders to point at canonical rules — not to sneak in new mechanics. Reminder text on cards/tables must **not contradict** the full rule elsewhere.

**Format:** *(See `filename.md`.)* or *(See `rules/combat.md` — Intervening Fighters.)*

| When | Example |
|---|---|
| Full rule elsewhere | *(See rules/combat.md.)* |
| Named subsection | *(See rules/combat.md — Ranged Reaction.)* |
| First keyword on a page | **Single Shot** — one use per battle; cannot reload |
| Card / table only | Icon or one-line reminder — **TODO:** reminder icon set not defined |

**Card reminder tone** — shorter, no file paths:

> **Downed:** cannot attack; may **Recover**.

---

## Action and Procedure Formatting

### Rulebook chapters (default)

1. **Prose lead** — what the action does, what it costs, what to roll
2. **Exception bullets** — prohibitions, timing, edge cases
3. **Cross-ref** — *(See [Pass Tokens](rules/the-turn.md#pass-tokens).)* when the full rule lives elsewhere

### Complex actions (when prose is not enough)

Use this block order:

1. **Cost** — `**Cost:** 1 action`
2. **Target / range** — who or what the action affects
3. **Procedure** — what to roll or resolve; cross-ref shared sub-routines where needed
4. **Restrictions** — bullet list of limits and exceptions

Multi-step procedures use **Step 1**, **Step 2**, … Post-game and campaign steps use the same numbering.

**At a glance** boxes (blockquote `>`) open any subsystem that runs every turn or every battle — turn structure, post-game, Survival Rolls. Five to eight lines; no new rules in the box.

Each major chapter ends with **Example:** — one narrative walkthrough that names fighters and shows the rules in play. Add a worked math example only where the chapter teaches resolution (e.g. Hand-to-Hand).

---

## Examples and Diagrams

- **Worked examples** use named fighters: Human, Elf, Dwarf — match `rules/attributes.md` ancestry.
- Label steps **Step 1**, **Step 2** in sequences (see `rules/combat.md`).
- **Round at a Glance** uses blockquote `>` for quick-reference boxes.
- Diagrams: ASCII for simple flows (`Sword > Axe > Spear > Sword`); TODO for official battlefield-measurement diagrams.
- One full combat example per major rules revision — don't scatter partial math across files.

---

## Lore vs Rules Text

| | Setting lore (`rules/intro.md`, faction blurbs) | Chapter fluff (rules chapters) | Rules text (below the fluff) |
|---|---|---|---|
| Purpose | History, factions, world | Mood and framing for one chapter | Procedures and outcomes |
| Length | As long as needed | 1–3 short paragraphs | As long as needed |
| Format | Normal prose | *Italics*, then `---` divider | Prose + bullets + tables |
| Mechanics | None | None | Full detail |
| Tone | Gothic, narrative | Grim, immediate, scene-setting | Plain, imperative, precise |

Faction preset lore may mention identity (“vampire aristocracy”) but **mechanical limits** live in `rules/archetypes.md` and `rules/traditions.md`.

---

## Spelling

**Standard: US English** in all repo text — `armor`, `color`, `organized`, etc.

---

## Do / Don't Examples

### Defining an action

**Don't**
> When a fighter would want to leave engagement, they may attempt to retreat by making a Skill test, and if they fail the enemy might get to attack them.

**Do**
> **Retreat** — Attempt to leave engagement range. Make a **Skill** check. On failure, an engaged enemy may make a **free Melee attack** if they are not engaged with another enemy.

---

### Conditional effects

**Don't**
> Units that have been reduced to zero wounds are removed unless the downed rules apply.

**Do**
> When a fighter is reduced to exactly **0 Wounds**, they become **Downed**.

---

### Stacking modifiers

**Don't**
> The fighter gets +1 to their defense for each situation that applies.

**Do**
> The fighter gains **+1 Might defense die** until their next activation.

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

> **War Axe** — Heavy · **Might** +2 · weapon triangle (Axe)

### Chapter fluff (core rules)

> *Time in Noctvale is not kept by clocks. It is kept by breath, by the scrape of boot on stone, by the moment before a blade falls.*
>
> *That rhythm — act, react, endure — is the turn.*
>
> ---

### Rulebook action (prose + bullets)

> When a fighter activates, they may perform **2 actions** chosen from the action list. Actions may be taken in any combination and in any order.
>
> Only fighters who can activate may be chosen:
>
> - **Stunned**, **Out of Action**, and **Escaped** fighters cannot be chosen.

### Ability — tactical action (reference / card)

> **Brace** — The fighter gains **+1 Might defense die** (rolled with **Might**) until their next activation.

### Ability — spell

> **Heal** — **Cast**, **Will** 10+, range **1"**. Restore **1 Wound** and improve wound state by one step (Stunned→Downed, Downed→Active). **Mishap:** Deal **1 Wound** to the target.

### Reminder — condition

> **Stunned** — Cannot move or act. Defends with **Might dice only**. Any unblocked hit → **Out of Action**.

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
| Fighter card typography | Action names, attribute order, reminder box layout |
| Condition icons | Downed / Stunned / Hidden on cards |
| **OOA** on cards | Abbreviation vs full **Out of Action** |
| **feat** / **Domain feat** entries | Extend this guide when feat format is locked |
| **damage** vs **wound** | Some spell blurbs still say “damage”; prefer **hit** / **Wound** |
| Spell card reminders | Confirm whether cards use compact spell lines or the full block text |
| **Armor/shield conversion** | Failed defense dice → successful defense dice |
| Scatter die | Define scatter die notation in `rules/weapons.md` (Bombs) |
| Opponent-controlled fighters | Standard phrase for “your opponent controls it for its activation” |

---

## Quick Checklist (before you publish a rules section)

- [ ] Terms match this glossary
- [ ] Actions and conditions **bold** on first use in the section
- [ ] Distances use **"** notation
- [ ] Dice use **1d6** / **2d6** / named attribute checks; **casting roll** / **primer roll** (not **gate**)
- [ ] Table data not duplicated in surrounding prose
- [ ] No superseded rules or rename callouts in player text
- [ ] US spelling
- [ ] **fighter** not **model** / **unit**
- [ ] **retinue** not **warband**
- [ ] **skip activation** not **forgo** / **forgone**
- [ ] Core procedures state the default only — gear, feat, spell, and keyword overrides live on their own entries, not inline in core rules
- [ ] Shared sub-routines **repeated verbatim** where relevant (grep all copies after editing `combat.md`, `magic.md`, or `weapons.md`)
- [ ] Cross-refs use markdown links with readable labels (not raw file paths in backticks)
- [ ] One-off rules link to the canonical file (subsystem name as link text)
- [ ] No lore or designer history in procedure text
- [ ] Chapter fluff in *italics* only; separated from rules by `---`
- [ ] Rules text uses prose first, bullets for exceptions (not reference-manual blocks by default)
- [ ] One clear outcome per bullet
- [ ] **At a glance** box if the subsystem runs every turn or every battle
- [ ] Chapter ends with a narrative **Example:** where the subsystem is teachable in play

---

*Last updated: 2026-06-15. Rulebook voice and long-form chapter guidance added; derived from `rules/`, `campaign/`, `intro.md`, and `NOCTVALE_DESIGN_TENETS.md`.*
