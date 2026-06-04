# Noctvale Repository Instructions

## Writing Player-Facing Rules

Before writing, revising, or proposing any player-facing rules text, read and follow
`NOCTVALE_RULEBOOK_STYLE_GUIDE.md`.

This applies to:

- Core rules in `rules/`
- Campaign rules in `campaign/`
- Scenario packets and scenario drafts
- Weapon, spell, feat, and equipment entries
- Fighter cards and reminder text
- Rules text drafted in conversation before it is added to a file

Use the guide's glossary and formatting conventions exactly. In particular:

- Use **fighter**, not model or unit.
- Use **retinue**, not warband.
- Use **battle** for one table encounter and **game** for a full session.
- Write **Out of Action** in full on first use in a section.
- Keep lore separate from procedures.
- Check `rules/_shared-snippets.md` before repeating a shared sub-routine.

Before finalizing rules text, run through the Quick Checklist at the end of
`NOCTVALE_RULEBOOK_STYLE_GUIDE.md`.

## Design Decisions

Use `NOCTVALE_DESIGN_TENETS.md` to evaluate whether a proposed mechanic belongs
in the game. Use `decision-log.md` to record the reason for a rules change when
making a commit.

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

## Capturing Ideas

When the user introduces a concept with language such as "I have an idea,"
"another idea," or "idea for a scenario," add it to the **Ideas** section near
the top of `decision-log.md`.

Record enough detail to preserve the concept without treating it as a finalized
rule. Update the idea entry as the discussion develops. When the concept is
implemented in the repository, remove it from **Ideas** and capture the final
decision in the normal dated decision-log entry for that commit.
