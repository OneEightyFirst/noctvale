---
name: noctvale-rules
description: Use when writing, revising, reviewing, or proposing Noctvale player-facing rules, campaign rules, scenarios, roster systems, gear, spells, feats, fighter cards, or reminder text in this repository.
---

# Noctvale Rules

Use this skill for Noctvale rules work in `/Users/mwells/workspaces/Noctvale`.

## Rulebook voice (required for chapters)

For **core rules chapters**, **campaign rulebook prose**, and **scenario rulebook sections**,
read and follow `.agents/skills/noctvale-rulebook/SKILL.md` first.

That skill locks the approved print rulebook style (chapter fluff, prose-first rules,
narrative examples). Gold standards: `rules/the-turn.md` and `rules/combat.md`.

For **gear tables, spell lines, fighter cards, and campaign tables**, use **reference voice**
in `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` — no chapter fluff.

## Workflow

1. Read `AGENTS.md` first for the current collaboration workflow.
2. Read `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` before drafting or editing any
   player-facing rules text.
3. For rulebook chapters, also read `noctvale-rulebook` skill (above).
4. For new or changed mechanics, read `NOCTVALE_DESIGN_TENETS.md` and evaluate
   the proposal against the ranked tenets.
5. Read the relevant live chapter files in `rules/` or scenario packets.
   Live rules outrank older decision-log history.
6. Check `rules/_shared-snippets.md` before repeating an Attack Sequence, Apply
   Wounds, Casting Roll, Primer Roll, or other shared sub-routine.
7. Check `decision-log.md` Ideas for unresolved design decisions related to the
   work. Do not silently resolve an Idea unless the user approved that direction.
8. If the user is exploring, propose 1-3 concrete options and wait. If the user
   gave direct implementation language or approved a direction, make the edit.
9. Before finalizing, run the style guide Quick Checklist and the rulebook
   checklist in `noctvale-rulebook` when writing chapters.

## Writing Defaults

- Use **fighter**, **retinue**, **battle**, and **game** exactly as defined in
  the style guide.
- **Chapter fluff** is separated from rules by `---`; do not mix lore into
  procedure paragraphs.
- Put superseded rules, rationale, and design history in `decision-log.md`, not
  player-facing rules.
- Prefer point-of-use repetition for scenario procedures unless a shared
  snippet already exists.
- Leave intentionally unfinished `TBD` spell or roster work unresolved unless the
  user explicitly asks to finish it.
- Draft new rulebook prose in the relevant live chapter file once approved; use separate drafts only when the user explicitly asks for a draft surface.
