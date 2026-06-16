---
name: noctvale-rulebook
description: Write and rewrite Noctvale player-facing rules in approved rulebook voice — Mordheim-style chapters with separated fluff, prose-first procedures, and narrative examples. Use when drafting or revising core rules chapters, campaign rulebook sections, scenario rulebook prose, or converting reference-manual text to print rulebook style in rules/ or campaign/.
---

# Noctvale Rulebook Voice

Write Noctvale rules as a **print rulebook in markdown** — not a reference manual.
Mechanics stay precise; presentation follows the approved **The Turn** chapter.

## Before You Write

Read in order:

1. `AGENTS.md` — collaboration workflow (proposal-first unless directed)
2. `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` — glossary, dice format, Quick Checklist
3. `NOCTVALE_DESIGN_TENETS.md` — when adding or changing mechanics
4. Live source for the section you are rewriting (usually `rules/core-rules.md`)
5. `rules/_shared-snippets.md` — shared sub-routines (Attack Sequence, Apply Wounds, etc.)
6. **Gold standard:** `rules/long-form/chapter-the-turn.md`

Do not change mechanics while rewriting voice unless the user explicitly asks.

## Two Voices

| Voice | Use for | Style |
|---|---|---|
| **Rulebook** | Core rules chapters, campaign prose sections, scenario rulebook text | Fluff + prose + bullets + chapter example |
| **Reference** | Gear tables, spell lines, fighter cards, campaign tables, reminders | Cold, precise, no fluff |

When in doubt: if a player reads it cover-to-cover → **rulebook**. If they look it up mid-battle → **reference**.

## Rulebook Chapter Template

Every major chapter follows this structure. Do not skip steps.

```markdown
# [Chapter Title]

*[Fluff paragraph 1 — mood, stakes, scene. No mechanics.]*

*[Fluff paragraph 2 — optional. Same rules.]*

*[Fluff paragraph 3 — optional. Close with a line that hands off to the rules.]*

---

## [Wide Overview Section]

[2–4 sentences: what this chapter governs, how it fits the battle.]

> **[Subsystem] at a glance**
>
> [5–8 lines. Summary only — no new rules.]

---

## [Zoom-In Section A]

[Prose lead: the rule in plain language.]

[Exception bullets only where needed.]

---

## [Zoom-In Section B]

...

---

## Example: [Short Title]

*[One sentence of scene-setting in italics.]*

**[Beat name].** [Narrative walkthrough naming actions in bold, factions or fighters by name.]

[Optional second beat if the chapter needs it.]
```

### Chapter fluff rules

- **1–3 short paragraphs**, all *italics*
- Grim, direct, scene-setting — not purple, not jokey
- **No stats, costs, dice, or exceptions** in fluff
- Separate from rules with `---` immediately after the last fluff paragraph
- Setting lore (Valecoria, faction history) stays in `intro.md`; fluff only frames **this chapter**

### Rules body rules

- **Start wide, then zoom in** within the chapter
- **Prose first, bullets for exceptions** — default format
- Use **Cost / Target / Procedure / Restrictions** blocks only for complex actions (**Hide**, **Ranged** with weapon forks, multi-step spells)
- One idea per sentence in procedures; front-load conditions
- Cross-ref with markdown links: **[Overwatch](core-rules.md#overwatch)** — not raw paths in backticks
- Shared sub-routines: copy **verbatim** from `rules/_shared-snippets.md` when they appear in a chapter
- Do not embed lore, designer notes, or “compare to Mordheim” asides in procedure text

### At a glance boxes

- Blockquote `>` titled **… at a glance**
- 5–8 lines; recap only — **no new rules**
- Use for subsystems that run every turn or every battle

### Chapter examples

- End every rulebook chapter with **## Example: …**
- Narrative walkthrough — named fighters, factions, or roles
- Bold action names (**Move**, **Melee**, **Cast**) when used in play
- Add a **worked math example** only in resolution chapters (Hand-to-Hand, Shooting) — not in every chapter

## Chapter Map (core rules rewrite)

Use Mordheim-style flow when restructuring `rules/core-rules.md`:

| Chapter | Covers |
|---|---|
| What You Need | Components, board, dice |
| Fighters & Stats | Profiles, stat checks, species baselines |
| Setting Up a Battle | Deployment, initiative, groups |
| The Turn | Rounds, activations, Overwatch tokens — see gold standard chapter |
| Movement | Move, Charge, Climb, Scramble, Jump, Retreat, Escape |
| Shooting | Ranged, Aim, LoS, cover, clustered targets |
| Hand-to-Hand | Melee, engagement, gang up, weapon triangle, Attack Sequence |
| Magic & Gunpowder | Cast, primer roll, triangles |
| Injuries | Downed, Stunned, Out of Action, Recover, Help, Mercy Kill |
| Psychology | Sanity, Fear, Panic, Insanity |
| Special Situations | Falling, difficult terrain, modifiers, ending battle, Overwatch detail |

Draft new chapters under `rules/long-form/chapter-[slug].md` until the user approves merge into live files.

## Rewrite Workflow

1. Read the live section; list every mechanical rule (do not drop any)
2. Pick the chapter title and fluff angle
3. Write fluff → `---` → wide overview → at a glance → zoom-in sections → example
4. Diff mentally against source — every threshold, timing, and exception preserved
5. Run **Rulebook Checklist** (below)
6. Present draft for approval or merge when user directs

## Reference Voice (non-chapters)

For gear, spells, feats, cards, and tables — use **reference voice** from the style guide:

- Lead with the effect
- Tables carry data; prose does not repeat table values
- No chapter fluff
- Reminder text: *(See [Injuries](core-rules.md#injuries).)*

## Terminology (non-negotiable)

From the style guide — never substitute:

- **fighter** (not model, unit, hero)
- **retinue** (not warband, except when naming Mordheim)
- **battle** / **game**
- **Out of Action** in full on first use per section
- **skip activation** / **skipped their activation** (not forgo)
- **casting roll** / **primer roll** (not gate)

## Rulebook Checklist

Before finishing any rulebook chapter:

- [ ] Fluff is *italics* only, 1–3 paragraphs, zero mechanics
- [ ] `---` separates fluff from rules
- [ ] Chapter opens wide, then zooms in
- [ ] Prose leads; bullets are exceptions only
- [ ] **At a glance** box if subsystem runs every turn/battle
- [ ] **Example:** section at chapter end
- [ ] All mechanics from source preserved — nothing dropped, nothing invented
- [ ] Terms match style guide glossary
- [ ] Distances use **"**; dice use **1d6** / **d6 + stat ≥ 8**
- [ ] Cross-refs are markdown links with readable labels
- [ ] Shared snippets match `_shared-snippets.md` verbatim
- [ ] No designer history, no “we changed this because”, no peer-game compare notes in player text
- [ ] US spelling

## Anti-Patterns

**Don't** open with `####` sub-headings and bullet walls.

**Don't** use reference-manual action blocks everywhere:
```markdown
#### Move
**Cost:** 1 action
- May move through friendly fighters
```

**Do** use prose + bullets:
```markdown
## Movement

A fighter may spend an action to move up to **M**. They may move through friendly fighters but cannot end on another fighter's base.
```

**Don't** mix fluff into procedure paragraphs.

**Don't** repeat the Attack Sequence in full in every chapter — state once, cross-ref elsewhere.

## Also Use

- `.agents/skills/noctvale-rules/SKILL.md` — general rules workflow, proposal-first, decision-log
- `.agents/skills/noctvale-decision-log/SKILL.md` — when committing design-bearing changes
