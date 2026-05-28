# Magic

---

## Casting

Casting a spell is a single **Cast** action. The caster rolls **2d6 + Wi** against the spell's **casting difficulty**.

- Spells can be cast **while in melee**
- Cast actions **do not trigger Ranged Reactions**

### 2d6 Outcomes

| Result | Effect |
|---|---|
| **Double 1s** | **Mishap** — the spell fails and the spell's unique backlash occurs (see individual spell descriptions) |
| **Below difficulty** | The spell fizzles. The action is spent, nothing happens |
| **Meets or exceeds difficulty** | The spell goes off. Resolve the attack normally |
| **Double 6s** | **Overcharge** — the spell goes off and all dice in the Strike Pool auto-succeed as hits. Still roll to check for natural 6s (criticals) |

### Damage Spells

If the spell deals damage, it generates a **flat Strike Pool** defined by the spell itself. The spell specifies its own Mt and Sk values — these are **not added to the caster's base stats**. A spell with 5 Mt / 2 Sk always produces 5 red dice and 2 blue dice, regardless of who casts it.

Once the spell goes off, resolve the attack using the standard combat sequence:

1. **Build Strike Pool** — use the spell's Mt/Sk values (flat, not additive)
2. **Roll to hit** — d6 + RC ≥ 8 for ranged spells, d6 + CC ≥ 8 for melee spells
3. **Defender rolls defense** — normal defense pool rules apply
4. **Apply wounds** — as normal

Spell damage is decoupled from the caster's physical stats — magic power comes from the spell, not the caster's body.

---

## Firearms

Firearms use the same 2d6 gate system as magic, representing the unreliability of black powder weapons.

The shooter rolls **2d6** against the firearm's **loading difficulty**. No stat is added — the gun either works or it doesn't.

| Result | Effect |
|---|---|
| **Double 1s** | **Misfire** — the gun explodes. The shooter takes damage *(Misfire effects to be defined per weapon)* |
| **Below difficulty** | The gun fails to fire. The action is spent |
| **Meets or exceeds difficulty** | The gun fires. Resolve the attack normally |
| **Double 6s** | **Overcharge** — the gun fires and all dice in the Strike Pool auto-succeed as hits. Still roll for crits |

Firearms gain **critical hits against all targets**, regardless of weapon type — they exist outside the weapon triangle.

Once the firearm fires, resolve the attack using the standard combat sequence, the same as a damage spell.

---

## Magic Classes

Six magic classes exist in Noctvale:

| Class | Triangle |
|---|---|
| Light | Mystic |
| Arcane | Mystic |
| Infernal | Mystic |
| Nature | Natural |
| Necromancy | Natural |
| Blood | Natural |

---

## Magic Triangles

Two separate triangles govern how magic interacts with opposing magic.

### Mystic Triangle
```
Light > Infernal > Arcane > Light
```

### Natural Triangle
```
Nature > Necromancy > Blood > Nature
```

Having advantage in the triangle grants **critical hits** when attacking with magic, matching the weapon triangle system.

---

## Spell Lists

Each domain has a **standard ranged attack spell** (not counted toward the limit) plus **6 additional spells**.

### Light

| Spell | Difficulty | Mt | Sk | Range | Effect | Mishap |
|---|---|---|---|---|---|---|
| Radiant Strike | 11+ | 5 | — | 12" | Ranged attack; +1 Mt vs Undead and Daemons | Caster takes the damage |
| Holy Light | 11+ | — | — | 12" from caster | All models within 12" lose cover and Hidden condition | *(TBD)* |
| Heal | 10+ | — | — | 1" | Restore 1 wound + improve wound state by one step (Stunned→Downed, Downed→Active) | Deal 1 wound to target instead |
| Purge the Faithless | 11+ | 5 | 2 | 3" blast from caster | Hits all models in radius | Caster takes the damage |
| Shield of Faith | 11+ | — | — | 12" | Target gains +2 red defense dice and causes Fear. Lasts until the start of the caster's next activation | *(TBD)* |
| Horrors Relived | 12+ | Target's Sa | — | 12" | Ranged attack; Strike Pool Mt equals the target's Sa stat | Caster takes the damage (using target's Sa as Mt) |
| Unwavering Resolve | 10+ | — | — | 8" from caster | All friendly fighters within 8" become immune to Fear, Panic, and Insanity until the start of the caster's next activation | *(TBD)* |

### Arcane

| Spell | Difficulty | Mt | Sk | Range | Effect | Mishap |
|---|---|---|---|---|---|---|
| Arcane Bolt | 11+ | — | 5 | 20" | Ranged attack; fast, high-finesse | *(TBD)* |
| Arcane Shield | 11+ | — | — | Self | Caster is immune to all spells. At the start of the caster's next activation, roll 1d6 — on 1–2 the shield disappears | *(TBD)* |
| Fireball | *(TBD)* | *(TBD)* | *(TBD)* | 18" | Choose a point within 18". All models within large blast template are hit. Hits friends and enemies. On normal fail: fireball scatters (scatter die for direction, d6" for distance from target point). On pass: blast centers on chosen point | **Mishap:** Blast template centers on the caster |
| Telekinesis | *(TBD)* | — | — | 12" | Move any model (friendly or enemy) up to 6" directly toward or directly away from the caster. No check required by the target | *(TBD)* |
| Displacement | *(TBD)* | — | — | 12" | Target friendly fighter is instantly moved up to 6" in any direction. Ignores terrain, engagement, and intervening models. Cannot end inside terrain or another model's base | *(TBD)* |
| Arcane Barrage | *(TBD)* | — | — | *(TBD)* | On successful cast, inflict 3 automatic Sk hits (blue). No Strike Pool roll, no to-hit roll — hits go straight to defender's defense pool. Defender rolls defense as normal | *(TBD)* |
| Slow | *(TBD)* | — | — | *(TBD)* | Target enemy loses 1 action on their next activation (activates with 1 action instead of 2) | *(TBD)* |

### Infernal

The hells hold infinite daemonic entities of different shapes and sizes. To help organize the chaos, they are combined into three categories:

- **Imps** — Usually small, fairly weak, with wings
- **Hellions** — Usually 4-legged animal-like creatures, sometimes resembling wolves
- **Maulers** — Large, bulky creatures, most of the time humanoid in shape

For alpha, daemons are recruited like any other retinue member. Pre-game summoning tables are a post-alpha feature (see todo.md).

| Spell | Difficulty | Mt | Sk | Range | Effect | Mishap |
|---|---|---|---|---|---|---|
| *(TBD — attack)* | | | | | | |
| *(TBD)* | | | | | | |
| *(TBD)* | | | | | | |
| *(TBD)* | | | | | | |
| *(TBD)* | | | | | | |
| *(TBD)* | | | | | | |

### Nature

| Spell | Difficulty | Mt | Sk | Range | Effect | Mishap |
|---|---|---|---|---|---|---|
| Thorn Volley | 12+ | 4 | 4 | 12" | Ranged attack; template / shotgun-like | *(TBD)* |
| Shadowmeld | *(TBD)* | — | — | 12" | Target friendly fighter gains Hidden. Does not need to remain within 1" of terrain to stay Hidden. Hidden still lost from combat actions, Charge, Climb, Jump, or moving within 6" of an enemy | Enemies gain +1 to hit the target with ranged weapons and spells until the start of the caster's next activation |
| Venom | *(TBD)* | — | — | *(TBD)* | Target enemy must pass Mt check (d6 + Mt ≥ 8). Fail: Poisoned — suffer -1 Mt and -1 Sk until the start of the caster's next activation | *(TBD)* |
| Feral Form | *(TBD)* | — | — | *(TBD)* | Target friendly fighter gains +2 Mt, +1" M, but cannot use ranged weapons or cast spells for the duration. Lasts until the start of the caster's next activation | *(TBD)* |
| Entangle | *(TBD)* | — | — | 12" | Target enemy has M reduced to 0. Cannot Move, Charge, Climb, Scramble, Jump, or Retreat. Can still fight, shoot, and cast. Lasts until the start of the caster's next activation | *(TBD)* |
| Summon Swarm | *(TBD)* | — | — | 3" | Place a Swarm within 3" of the caster. The Swarm activates immediately with 2 actions, then disappears at the end of its activation. See Swarm profile below | The Swarm appears hostile — your opponent controls it for its single activation |
| Dread Chorus | *(TBD)* | — | — | 8" from caster | All enemy fighters within 8" must pass Sa test (d6 + Sa ≥ 8) or gain Fear of the caster until the start of the caster's next activation | *(TBD)* |

#### Swarm Profile

| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 6" | 3 | — | 2 | 6 | 1 | 1 | 1 |

**Equipment:** Natural weapons (baked into Mt/Sk). Cannot be changed.

**Keywords:** Fearless. Immune to Sanity tests.

### Necromancy

| Spell | Difficulty | Mt | Sk | Range | Effect | Mishap |
|---|---|---|---|---|---|---|
| Deathbolt | 14+ | — | 6 | 18" | Ranged attack; all blue dice, ignores armor | *(TBD)* |
| Summon Skeleton | 10+ | — | — | 3" | Place a Skeleton within 3" of the caster. The Skeleton activates immediately with 2 actions, then crumbles to dust at the end of its activation. See Skeleton profile below | The Skeleton appears hostile — your opponent controls it for its single activation |
| Raise Dead | *(TBD)* | — | — | 3" | Target a friendly fighter that went Out of Action this game. Place them within 3" of the caster with 1 wound, Undead keyword, and Fearless. They activate immediately with 2 actions, then go Out of Action permanently at the end of their activation | Your opponent places and controls the raised fighter instead |
| Cursed Ground | *(TBD)* | 2 | 2 | 12" | Choose a point within 12". Place a large blast template. All models in the zone suffer -1" M and take a 2 Mt / 2 Sk hit unless they pass a Sk check (d6 + Sk ≥ 8). Lasts until the start of the caster's next activation | Blast centers on the caster |
| Wither | *(TBD)* | — | — | *(TBD)* | Target enemy suffers -1 Mt, -1 Sk, -1" M until the start of the caster's next activation. Applies the Weakened condition | *(TBD)* |
| Bone Blast | *(TBD)* | 1 | 4 | Blast from caster | Blast template centered on the caster. All models under the template except the caster take a 1 Mt / 4 Sk hit | *(TBD)* |
| Bone Circle | *(TBD)* | 1 | 3 | 12" | Choose a point within 12". Place a 3" blast template. Any model that starts their activation in the zone, ends their activation in the zone, or moves through it takes a 1 Mt / 3 Sk hit (defense applies normally). Affects friends and enemies. Lasts until the start of the caster's next activation | Zone centers on the caster |

#### Skeleton Profile

| M | CC | RC | Mt | Sk | Wi | Sa | W |
|---|---|---|---|---|---|---|---|
| 5" | 3 | 3 | 4 | 5 | 1 | 1 | 1 |

**Equipment:** Sword and Shield (already included in Mt/Sk). Cannot be changed.

**Keywords:** Undead. Fearless. Immune to Sanity tests.

### Blood

| Spell | Difficulty | Mt | Sk | Range | Effect | Mishap |
|---|---|---|---|---|---|---|
| Leech | *(TBD)* | *(TBD)* | *(TBD)* | *(TBD)* | Ranged attack; if target takes ≥1 wound, caster heals 1 wound | Caster takes the damage |
| Bleed | *(TBD)* | — | — | *(TBD)* | Target must pass Wi check (d6 + Wi ≥ 8). Fail: Bleeding condition — suffer 1 wound immediately, test Wi each activation until passed or dead | Caster gains Bleeding instead |
| Blood Frenzy | *(TBD)* | — | — | *(TBD)* | Target friendly fighter gains +3 Mt, -1 to hit. Lasts until the start of the caster's next activation | *(TBD)* |
| Predator's Grace | *(TBD)* | — | — | *(TBD)* | Target friendly fighter gains +1" M and +1 Sk. Lasts until the start of the caster's next activation | *(TBD)* |
| Enthrall | *(TBD)* | — | — | 8" | Target enemy must pass Wi check (d6 + Wi ≥ 8) or immediately take one Move action in a direction chosen by the caster | Friendly fighter (opponent's choice) takes the move instead |
| Feast of Excess | *(TBD)* | — | — | *(TBD)* | Target friendly fighter gains +1 Mt, +1 Sk, +1" M. When effect ends, target becomes Stunned (keeps wounds but vulnerable) | *(TBD)* |
| Nightfall | *(TBD)* | — | — | *(TBD)* | Target friendly Blood domain fighter is engulfed in shadow. No ranged weapons or spells can target into or out of the bubble. Target gains +1 to hit with CC. Lasts until the start of the caster's next activation | Bright light — enemies gain +1 to hit caster with ranged weapons, caster suffers -1 Mt until start of next activation |

---

## Status & Affliction Ideas

Magic may inflict status effects tied to specific domains:

| Affliction | Associated Domain |
|---|---|
| Enfeebled | Blood |
| Weakened | Necromancy |
| *(TBD)* | Infernal |

Arcane, Radiant (Light), and Nature spells could potentially **remove** these afflictions, creating a cleanse / debuff dynamic between magic categories.

---

## Magic Domain Alignment

Magic is grouped into two broad moral categories:

- **Accepted ("good") magic:** Light, Arcane, Nature
- **Forbidden ("bad") magic:** Infernal, Blood, Necromancy

---

## Design Notes

- 2d6 + Wi casting gives a bell curve modified by the caster's Will — better casters are more reliable. Difficulties are calibrated so Wi 4 (standard caster) matches the original flat 2d6 odds
- Double 6s Overcharge is equally rare (~2.8%) and creates spectacular moments without adding complexity — all hits land, just check for crits
- The Mishap system means every spell is a calculated risk, not a guaranteed tool
- Spell damage is flat (not added to caster stats) — a spell's power comes from the spell itself, not the caster's physical strength. This decouples magical and physical identity
- Spells produce larger dice pools than weapons (5-6 dice vs 2-4 from weapon modifiers) as the payoff for the casting gate — a sword always works, a spell might fizzle or backfire
- Firearms use a flat 2d6 gate (no stat) while magic uses 2d6 + Wi — guns are purely mechanical (misfire is equipment failure), while casting improves with the caster's Will
- Mirroring the weapon triangle with magic triangles creates a unified advantage-and-critical framework across all combat types
- Firearms gaining crits against all targets (outside the triangle) is their payoff for the loading risk
- Cast not triggering Ranged Reactions gives magic a distinct tactical niche compared to conventional ranged weapons
- The "at least one Arcane Bolt equivalent" ensures every magic class has offensive utility
- Wi baseline is 3 for all species; casters are expected to have Wi 4+. A Wi 3 non-caster can technically attempt spells but at reduced odds
