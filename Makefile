PANDOC_FROM := markdown+smart+footnotes+pipe_tables+fenced_divs+bracketed_spans+yaml_metadata_block

.PHONY: icml merged clean

icml:
	./scripts/build-icml.sh

merged:
	./scripts/merge-md.sh content/order.txt generated/merged/book.md
	@if ! command -v pandoc >/dev/null 2>&1; then \
		echo "Error: pandoc is not installed. Install Pandoc, then rerun 'make merged'."; \
		exit 127; \
	fi
	@mkdir -p generated/icml
	pandoc -s -f $(PANDOC_FROM) -t icml generated/merged/book.md -o generated/icml/book.icml

clean:
	rm -rf generated/icml generated/merged
	mkdir -p generated/icml generated/merged
