<p align="center">
  <img src="images/noctvale-white.svg" alt="Noctvale" width="400">
</p>

<p align="center"><em>A Grimdark Fantasy Skirmish Game in a Cursed Land</em></p>

Noctvale is an original grimdark tabletop skirmish miniatures game where small retinues clash across cursed lands in search of powerful Relics. Combat is lethal, retinues grow through campaign play, and Survival Rolls carry both rewards and danger.

## What Is This?

This repository contains the working design documents for Noctvale — rules, retinue design, and campaign systems. Everything here is a living document, actively being developed toward a playable prototype.

## Repo Structure

```
intro.md                 — Setting, premise, backstory, factions, and game summary
_overview.md             — Project overview, design method, and design principles
todo.md                  — Playtest roadmap, open decisions, and phase checklist
rules/
  core-rules.md          — What you need, setup, action sequence, actions, conditions, combat
  retinue.md             — Retinue building, archetypes, Domains, Traditions, feats, magic
  equipment.md           — Weapons, gear, alchemy, and companions
campaign/
  campaign.md            — Campaign flow, leveling, scenarios, post-game, Survival Rolls, economy
```

## Design Influences

Mordheim, Necromunda, Warcry, Kill Team, Space Hulk, classic Warhammer, and OSR roleplaying games.

## Status

Actively in development. Not yet playtested. See `todo.md` for the phased playtest roadmap.

## Publishing to InDesign

Markdown is the source of truth for copy. Pandoc converts Markdown to linked
ICML for Adobe InDesign. Do not edit placed ICML text in InDesign; edit the
Markdown source, rebuild ICML, then update the link in InDesign.

Pandoc is required. If `pandoc --version` fails, install Pandoc before building:

```sh
brew install pandoc
```

On Windows, use:

```sh
winget install --id JohnMacFarlane.Pandoc
```

On Linux, install Pandoc with your distribution package manager or from
`https://pandoc.org/installing.html`.

Build per-file ICML:

```sh
make icml
```

Build one merged ICML file from `content/order.txt`:

```sh
make merged
```

In InDesign, use File -> Place and choose the generated `.icml` file. On first
import, map the Pandoc/imported styles to the template's paragraph and character
styles. Keep local style notes in `.indesign-styles.md`.

After content changes, rebuild the ICML, then use the InDesign Links panel to
update the placed ICML link. Do not check out, detach, or edit placed text in
InDesign.

## License

All content in this repository is original work and is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](LICENSE.md).

You may **not** use this material for commercial purposes.  
You may **not** distribute modified versions of this material.  
You **must** give appropriate credit if you share it.

See [LICENSE.md](LICENSE.md) for full terms.

---

© 2026 All rights reserved.
