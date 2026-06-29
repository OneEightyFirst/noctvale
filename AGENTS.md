# Noctvale Repository Instructions

## Repo routing

Before broad grep/search or reading large downstream files, read
`.agents/skills/noctvale-traffic/SKILL.md`. For system→file lookup, see
`_overview.md`.

## Writing Player-Facing Rules

Before writing, revising, or proposing any player-facing rules text, read and follow
`NOCTVALE_RULEBOOK_STYLE_GUIDE.md`.

For **rulebook chapters** (core rules, campaign prose sections, scenario rulebook text),
also follow `.agents/skills/noctvale-rulebook/SKILL.md`. Gold-standard example:
`rules/combat.md` Attack Sequence and `rules/the-turn.md` Turn Structure.

**Fluff placeholders** (`*[Placeholder]*`, scenario lore, archetype chapter openers) are intentional until late-stage writing — do not treat missing fluff as a rules gap during mechanics work.

This applies to:

- Core rules in `rules/`
- Campaign rules in `rules/how-to-run-a-campaign.md`, `rules/advancement.md`, `rules/scenarios.md`, `rules/post-game-sequence.md`, `rules/survival-rolls.md`, and `rules/economy.md`
- Scenario packets and scenario drafts
- Weapon, spell, feat, and equipment entries
- Fighter cards and reminder text
- Rules text drafted in conversation before it is added to a file

Use the guide's glossary and formatting conventions exactly. In particular:

- Use **fighter**, not model or unit.
- Use **retinue**, not warband.
- Use **battle** for one table encounter and **game** for a full session.
- Write **Out of Action** in full on first use in a section.
- **Chapter fluff** opens major rulebook sections in *italics*, separated from rules by `---`; setting lore stays in `rules/intro.md`.
- Write rulebook procedures **prose first, bullets for exceptions** — not reference-manual **Cost:** blocks by default.
- When editing shared sub-routines (**Attack Sequence**, **Apply Wounds**, **Casting Roll**, **Primer Roll**), grep the repo for each boxout heading and keep all copies identical. Primary sources: `rules/combat.md`, `rules/magic.md`, and `rules/weapons.md`. Reference table in `decision-log.md` (2026-06-21 — Retire `_shared-snippets.md`).

Before finalizing rules text, run through the Quick Checklist at the end of
`NOCTVALE_RULEBOOK_STYLE_GUIDE.md`.

## Rules Source of Truth

The canonical rules source is the Markdown files in `rules/` (see `app/scripts/rules-lib.mjs` for the wiki build list). When changing rules, update those files first.

Do not maintain parallel copies in `rules/playtest/` or `rules/long-form/` — those paths were removed. Generated wiki HTML in `app/public/rules/` is built from canonical sources via `npm run build:rules`.

The playtesting retinue builder lives in `app/`. Static rules pages are
generated from `rules/` into
`app/public/rules/` by `npm run build:rules`. When changing builder game data or
purchase enforcement, update `app/src/data/noctvale.js` and
`app/src/components/RetinueEditor.jsx` and log the change in
`app/rules-updates.md`.

## Design Decisions

Use `NOCTVALE_DESIGN_TENETS.md` to evaluate whether a proposed mechanic belongs
in the game. Use `decision-log.md` to record the reason for a rules change when
making a commit.

### Decision Log Workflow

`decision-log.md` is the primary handoff artifact for current design state.
Keep it newest-first.

Before committing design, rules, campaign, scenario, roster, gear, spell, feat,
or structural documentation changes:

1. Run `date '+%Y-%m-%d %H:%M %Z'` in the shell. Use that date for the log
   entry; do not rely on conversation metadata.
2. Add one new `## YYYY-MM-DD — Title` section in `decision-log.md` below the
   `## Ideas` section and its divider.
3. Use `**Decision:**` to summarize what changed and `**Reasoning:**` to capture
   why the change belongs in Noctvale.
4. If the change implements or closes an item from `## Ideas`, remove or update
   that idea in the same edit.
5. Stage `decision-log.md` with the files it explains.

Skip the decision log only for typo, whitespace, or link-only changes with no
design meaning.

## Collaboration Workflow

For Noctvale design and rules work, use a proposal-first workflow when the
user is exploring an idea or asking to think through tradeoffs.

Do not edit files immediately when the user uses exploratory language such as
"what about this?", "let's think through this", "I have an idea", or asks for
options. First propose the change, explain the design tradeoffs, and wait for
the user's approval. Once the user approves a direction, apply the edits.

When the user gives direct correction or implementation language such as "this
should be this", "why didn't you change this?", "make this change", or "approved",
treat that as approval to act and apply the edits after reading the relevant
files.

You may edit without a proposal for:

- Purely mechanical cleanup
- Typo fixes
- Changes the user explicitly asks you to make directly
- Direct corrections or approved directions from the user

Default rhythm:

1. Read the relevant files.
2. Summarize the issue or design tension.
3. Propose 1-3 concrete options.
4. Wait for the user to pick or revise an option.
5. Apply the approved change.
6. Summarize exactly what changed.

## Git Publishing

Commit and push only when the user explicitly asks for it with language such as
"commit," "push," "publish," or "update the repo." Do not commit or push on your
own initiative.

When the user asks to commit or push:

1. Review `git status` and the relevant diff.
2. Make sure `decision-log.md` is updated for any design-bearing change.
3. Stage only the files that belong to the requested work.
4. Commit with a concise message that matches the decision-log entry.
5. Push the current branch.

If Git metadata writes fail because `.git` is not writable, request the narrow
filesystem permission needed for `.git` and continue after it is granted. If a
remote push succeeds but local tracking refs fail to update, verify the remote
head before repairing local refs.

## Capturing Ideas

When the user introduces a concept with language such as "I have an idea,"
"another idea," or "idea for a scenario," add it to the **Ideas** section near
the top of `decision-log.md`.

Record enough detail to preserve the concept without treating it as a finalized
rule. Update the idea entry as the discussion develops. When the concept is
implemented in the repository, remove it from **Ideas** and capture the final
decision in the normal dated decision-log entry for that commit.
