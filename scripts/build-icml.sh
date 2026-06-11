#!/usr/bin/env bash
set -euo pipefail

PANDOC_FROM="markdown+smart+footnotes+pipe_tables+fenced_divs+bracketed_spans+yaml_metadata_block"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/generated/icml"

cd "$ROOT_DIR"

if ! command -v pandoc >/dev/null 2>&1; then
  cat >&2 <<'MSG'
Error: pandoc is not installed.

Install Pandoc, then rerun this command.
macOS:   brew install pandoc
Windows: winget install --id JohnMacFarlane.Pandoc
Linux:   use your package manager or https://pandoc.org/installing.html
MSG
  exit 127
fi

sources=()

if (($# > 0)); then
  sources=("$@")
else
  shopt -s nullglob
  content_sources=(content/*.md)
  shopt -u nullglob

  if ((${#content_sources[@]} > 0)); then
    sources=("${content_sources[@]}")
  elif [[ -f content/order.txt ]]; then
    while IFS= read -r source; do
      sources+=("$source")
    done < <(
      awk '
        /^[[:space:]]*($|#)/ { next }
        {
          sub(/[[:space:]]+#.*$/, "")
          gsub(/^[[:space:]]+|[[:space:]]+$/, "")
          print
        }
      ' content/order.txt
    )
  fi
fi

if ((${#sources[@]} == 0)); then
  cat >&2 <<'MSG'
Error: no Markdown source files found.

Add Markdown files to content/*.md, or list existing repository Markdown files
in content/order.txt with one path per line.
MSG
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

for source in "${sources[@]}"; do
  if [[ ! -f "$source" ]]; then
    echo "Error: source file not found: $source" >&2
    exit 1
  fi

  case "$source" in
    *.md) ;;
    *)
      echo "Error: source is not a Markdown file: $source" >&2
      exit 1
      ;;
  esac

  rel="${source#./}"
  stem="${rel%.md}"
  stem="${stem#content/}"
  output_name="${stem//\//-}.icml"
  output_path="$OUTPUT_DIR/$output_name"

  echo "pandoc -s -f $PANDOC_FROM -t icml $source -o ${output_path#$ROOT_DIR/}"
  pandoc -s -f "$PANDOC_FROM" -t icml "$source" -o "$output_path"
done
