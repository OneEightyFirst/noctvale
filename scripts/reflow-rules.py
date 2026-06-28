#!/usr/bin/env python3
"""Join hard-wrapped prose, list continuations, and blockquote lines in rules/*.md."""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
RULES_DIR = REPO_ROOT / "rules"


def is_list_line(text: str) -> bool:
    return bool(re.match(r"^[-*+]\s", text)) or bool(re.match(r"^\d+\.\s", text))


def is_continuation(line: str) -> bool:
    if not line.startswith("  "):
        return False
    stripped = line.lstrip()
    if not stripped:
        return False
    if stripped.startswith(("#", "|", ">", "```")):
        return False
    return not is_list_line(stripped)


def classify_line(line: str) -> tuple[str, str]:
    if is_continuation(line):
        return "continuation", line.lstrip()
    stripped = line.rstrip("\n")
    text = stripped.lstrip()
    if not text:
        return "blank", stripped
    if text.startswith("```"):
        return "fence", stripped
    if text.startswith("#"):
        return "heading", stripped
    if text == "---":
        return "hr", stripped
    if text.startswith("|"):
        return "table", stripped
    if is_list_line(text):
        return "list", stripped
    if text.startswith(">"):
        return "blockquote", stripped
    return "prose", stripped


def reflow_text(text: str) -> str:
    lines = text.splitlines()
    out: list[str] = []
    prose_buf: list[str] = []
    bq_buf: list[str] = []
    in_fence = False
    fence_lines: list[str] = []

    def flush_prose() -> None:
        nonlocal prose_buf
        if prose_buf:
            out.append(" ".join(prose_buf))
            prose_buf = []

    def flush_bq() -> None:
        nonlocal bq_buf
        if bq_buf:
            out.append("> " + " ".join(bq_buf))
            bq_buf = []

    def flush_all() -> None:
        flush_bq()
        flush_prose()

    for line in lines:
        if in_fence:
            fence_lines.append(line)
            if line.strip().startswith("```"):
                out.extend(fence_lines)
                fence_lines = []
                in_fence = False
            continue

        kind, stripped = classify_line(line)

        if kind == "fence":
            flush_all()
            fence_lines = [stripped]
            in_fence = True
            continue

        if kind == "continuation":
            flush_prose()
            flush_bq()
            if out:
                out[-1] = out[-1] + " " + stripped
            else:
                prose_buf.append(stripped)
            continue

        if kind == "blank":
            flush_all()
            out.append("")
            continue

        if kind == "blockquote":
            flush_prose()
            content = stripped[1:].lstrip()
            if content == "":
                flush_bq()
                out.append(">")
            elif content.startswith("|") or re.match(r"^#{1,6}\s", content):
                flush_bq()
                out.append(stripped)
            else:
                bq_buf.append(content)
            continue

        flush_bq()

        if kind in ("heading", "hr", "table", "list"):
            flush_prose()
            out.append(stripped)
        elif kind == "prose":
            prose_buf.append(stripped.strip())

    flush_all()
    if in_fence:
        out.extend(fence_lines)

    result = "\n".join(out)
    if text.endswith("\n"):
        result += "\n"
    return result


def main() -> int:
    targets = [Path(arg) for arg in sys.argv[1:]] or sorted(RULES_DIR.glob("*.md"))
    changed = 0

    for path in targets:
        original = path.read_text()
        reflowed = reflow_text(original)
        if reflowed != original:
            path.write_text(reflowed)
            changed += 1
            print(f"Reflowed {path.relative_to(REPO_ROOT)}: {len(original.splitlines())} -> {len(reflowed.splitlines())} lines")

    if changed == 0:
        print("No changes.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
