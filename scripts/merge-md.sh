#!/usr/bin/env bash
set -euo pipefail

ORDER_FILE="${1:-content/order.txt}"
OUTPUT_FILE="${2:-generated/merged/book.md}"

if [[ ! -f "$ORDER_FILE" ]]; then
  echo "Error: order file not found: $ORDER_FILE" >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT_FILE")"
: > "$OUTPUT_FILE"

count=0
while IFS= read -r source; do
  if [[ ! -f "$source" ]]; then
    echo "Error: source file not found: $source" >&2
    exit 1
  fi

  if ((count > 0)); then
    printf '\n\n' >> "$OUTPUT_FILE"
  fi

  cat "$source" >> "$OUTPUT_FILE"
  count=$((count + 1))
done < <(
  awk '
    /^[[:space:]]*($|#)/ { next }
    {
      sub(/[[:space:]]+#.*$/, "")
      gsub(/^[[:space:]]+|[[:space:]]+$/, "")
      print
    }
  ' "$ORDER_FILE"
)

if ((count == 0)); then
  echo "Error: no Markdown source files listed in $ORDER_FILE" >&2
  exit 1
fi

echo "Merged $count Markdown files into $OUTPUT_FILE"
