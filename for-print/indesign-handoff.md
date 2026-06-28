# Cheat Sheet — InDesign Handoff

Source copy: [`quick-reference.md`](quick-reference.md)  
Triangle graphic: [`cheat-sheet-triangles.svg`](cheat-sheet-triangles.svg)  
Brand assets: [`../misc-files/noctvale-logo_onlight.svg`](../misc-files/noctvale-logo_onlight.svg), [`../misc-files/noctvale-mark_light.svg`](../misc-files/noctvale-mark_light.svg)

## Document setup

| Setting | Value |
|---|---|
| Page size | US Letter (8.5" × 11") |
| Margins | 0.5" all sides |
| Columns | 2, 0.2" gutter |
| Body | 8 pt / 10 pt leading, serif or sans per book template |
| Section heads | 10 pt bold, small caps optional |
| Boxouts | Shaded fill; Round at a Glance, Attack Sequence, Apply Wounds |

## Page 1 — Turn & Actions (front)

| Column | Content (top to bottom) |
|---|---|
| Left | Round at a Glance box → Overwatch → Morale |
| Right | Engagement → Actions table (17 rows) |

**Footer:** `Turn & Actions` + small mark, bottom outside corner.

## Page 2 — Combat & Conditions (back)

| Column | Content (top to bottom) |
|---|---|
| Left | Attack Sequence box → Apply Wounds box → Defense bullets → Armor conversion table |
| Right | Critical Hits + place `cheat-sheet-triangles.svg` (~6.5" wide) → Ranged Targeting → Ranged Reaction → Casting Roll table → Primer Roll table → Wound States → Recover/Help tables → Afflictions table → Keywords table |

**Footer:** `Combat & Conditions` + small mark.

## Layout notes

- Set **Keep with Next** on all `##` and `###` headings.
- Actions table: no header row repeat needed (single table).
- Triangle SVG is B/W-safe — no color-only meaning.
- Print test on plain paper before cardstock; trim 8 pt body to 7.5 pt only if back column overflows.
- Source word count: ~1,900 words — open [`cheat-sheet-print-preview.html`](cheat-sheet-print-preview.html) in a browser and use Print Preview to check fit before final InDesign layout.

## Workflow

1. Place [`quick-reference.md`](quick-reference.md) text via copy/paste or ICML when the print pipeline is wired.
2. Place [`cheat-sheet-triangles.svg`](cheat-sheet-triangles.svg) on page 2, right column, below Critical Hits.
3. Export PDF for print (300 dpi) or print directly from InDesign.

Working file (local, gitignored): `for-print/noctvale-cheat-sheet.indd`
