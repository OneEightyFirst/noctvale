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
decision-log.md          — Design and builder decisions (one entry per commit)
rules/
  core-rules.md          — What you need, setup, action sequence, actions, conditions, combat
  retinue.md             — Retinue building, archetypes, Domains, Traditions, feats, magic
  equipment.md           — Weapons, gear, alchemy, and companions
campaign/
  campaign.md            — Campaign flow, leveling, scenarios, post-game, Survival Rolls, economy
app/                     — Playtesting retinue builder (React, Firebase, deploy scripts)
  rules-updates.md       — Builder game-data and enforcement changelog
```

## Retinue builder

The playtesting app lives in `app/`. See [app/README.md](app/README.md) for local dev, Firebase, and deploy to noctvalegame.com.

Rules markdown at the repo root is the canonical source. The in-app rules wiki imports those files directly.

## Design Influences

Mordheim, Necromunda, Warcry, Kill Team, Space Hulk, classic Warhammer, and OSR roleplaying games.

## Status

Actively in development. Not yet playtested. See `todo.md` for the phased playtest roadmap.

## License

All content in this repository is original work and is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](LICENSE.md).

You may **not** use this material for commercial purposes.  
You may **not** distribute modified versions of this material.  
You **must** give appropriate credit if you share it.

See [LICENSE.md](LICENSE.md) for full terms.

---

© 2026 All rights reserved.
