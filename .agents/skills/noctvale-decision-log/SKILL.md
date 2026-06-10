---
name: noctvale-decision-log
description: Use when updating Noctvale decision-log.md, preparing a design commit, recording an approved idea, or standardizing the rationale for rules, campaign, scenario, roster, gear, spell, feat, or documentation changes.
---

# Noctvale Decision Log

Use this skill when `decision-log.md` must be updated.

## Before a commit

1. Run `date '+%Y-%m-%d %H:%M %Z'` in the shell.
2. Read the staged or intended design changes.
3. Add one `## YYYY-MM-DD — Title` section below `## Ideas` and its divider.
4. Use `**Decision:**` for the changed rules or structure.
5. Use `**Reasoning:**` for why the change belongs in Noctvale.
6. If the change implements an Idea, remove or update that Idea in the same edit.
7. Stage `decision-log.md` with the files it explains.

Skip the log only for typo, whitespace, or link-only changes with no design
meaning.

## Idea capture

When the user says "I have an idea," "another idea," or "idea for a scenario,"
add it to `## Ideas` as provisional. Preserve open questions instead of choosing
an answer early. When the idea is implemented, remove it from `## Ideas` and
capture the final decision in a dated entry.

