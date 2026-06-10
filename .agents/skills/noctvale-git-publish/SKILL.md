---
name: noctvale-git-publish
description: Use only when the user explicitly asks to commit, push, publish, or update the Noctvale repo. Ensures decision-log.md is current, stages relevant files, commits, and pushes; never triggers on ordinary edits or proposals.
---

# Noctvale Git Publish

Use this skill only after an explicit user request to commit, push, publish, or
update the repo. Never commit or push on your own initiative.

## Workflow

1. Run `git status --short` and inspect the relevant diff.
2. Identify which changed files belong to the requested work. Do not stage
   unrelated user changes.
3. If the changes have design meaning, update `decision-log.md` first:
   - Run `date '+%Y-%m-%d %H:%M %Z'`.
   - Add or update one dated entry below `## Ideas` and its divider.
   - Use `**Decision:**` and `**Reasoning:**`.
   - Remove or update implemented Ideas.
4. Run `git diff --check`.
5. Stage only the relevant files, including `decision-log.md` when updated.
6. Review the staged diff.
7. Commit with a concise message matching the decision-log entry.
8. Push the current branch.

## Failure handling

- If `.git/index.lock` cannot be created or Git metadata writes fail, request
  narrow write permission for `.git`, then continue.
- If push succeeds remotely but local tracking refs fail to update, verify the
  remote branch head before repairing local refs.
- If unrelated changes are present, leave them unstaged and mention them in the
  final summary.

