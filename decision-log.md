# Decision Log

Decisions made during design, with reasoning. Newest entries at the top.

## Ideas

Concepts under discussion. Remove an entry when it is implemented and capture
the final rule in the dated decision-log entry for that commit.

- **Feat guardrail:** Feats should express retinue identity without flattening
  the core system. Avoid broad permanent **+1** to-hit bonuses, extra full
  actions, reusable rerolls, and feats that are effectively spells without a
  **casting roll**. Prefer feats that bend existing levers: **Brace**, **Help**,
  **Recover**, **Aim**, **Overwatch**, **Mishap**, Survival Rolls, armor/shield
  defense conversion, weapon or magic triangle advantage, and wound states.
- **Open campaign decisions:** Decide whether upkeep exists, how convalescent
  fighters interact with minimum retinue size, whether downtime can heal
  injuries, and whether **Slain** or **Out of Action** triggers an in-battle
  death response.
- **Open roster decisions:** Add Domain composition tables, finish Domain feat
  lists, decide Shadow Market access for alchemy, and assign recruitment costs
  for Animals and Daemons.
- **Open magic decisions:** Finish spell difficulties, ranges, Mishaps, and
  unresolved status/affliction names before treating `rules/magic.md` as
  playtest-ready.

---

## 2026-06-07 — Lock Traditions as retinue-wide special rules

**Decision:** Reframe **Traditions** from future feat lists into one
retinue-wide special rule chosen at roster creation. Remove **Tradition feats**
from feat eligibility; feats now come from Archetype and Domain lists. Named
factions remain lore/example presets only and do not grant exclusive mechanics.

Add special rules for every current Tradition in `rules/retinue.md`:

- **Light:** **Crusaders** support nearby discipline, **Paladins** move toward
  newly Downed friendly fighters, **Penitents** move faster while wounded, and
  **Luminaries** strip **Hidden** from one visible enemy each round.
- **Arcane:** **Spellblades** pay +5 Crowns per fighter for **Arcane** melee
  weapons that convert one failed Strike Pool die into a normal hit;
  **Ritualists** use a deployment-zone ritual circle for stronger casting with
  Mishap risk; **Sorcerers** may buy one extra spell per Caster with Mishap
  wound risk; **Runecasters** may buy Rune-stones that discard for one reroll.
- **Infernal:** Rename Infernal **Ritualists** to **Diabolists**. **Diabolists**
  can wound themselves for temporary **+1 Mt** and **+1 Sa**, then suffer a
  penalty if Downed. **Binders** may recruit Daemons as Rank fighters, with
  Daemon profiles and costs deferred. **Hellknights** pay more for armor but
  gain **Fear** while wearing it. **Damned** non-Casters cost less and suffer a
  Casualty Table penalty.
- **Nature:** Keep **Witches** for Nature only. **Witches** use the hex-bag rule
  to subtract **1** from an enemy stat roll or **casting roll** near a friendly
  Caster once per round. **Grove-keepers** choose a terrain piece that improves
  nearby **Recover** rolls. **Beastmen** choose one beast-mark (**Wolf**, **Rat**,
  **Bear**, or **Serpent**) for the whole retinue. **Hedge-walkers** can deploy
  up to 2 fighters **Hidden** near terrain.
- **Necromancy:** Rename **Morticians** to **Bell-keepers**. **Bell-keepers**
  replace one friendly fighter taken **Out of Action** with a Zombie until the
  end of the battle; the Zombie joins the retinue only if the original fighter
  is **Slain** and the Zombie survives. **Bone-priests** may recruit Skeletons as
  Rank fighters up to the Archetype's normal Rank cap. **Sepulchers** gain
  guardian **Fear** while Downed or Stunned. **Wightlords** pay +20 Crowns per
  fighter for **Undead** and **Fearless**.
- **Blood:** **Vampires** pay +20 Crowns per fighter and heal after taking an
  enemy **Out of Action** with **Melee** or **Mercy Kill**. **Dynasts** begin
  with up to 3 heirloom melee weapons that add **+1** to hit and pass through
  the retinue on death; captured heirlooms add **+10 Crowns** to ransom.
  **Revelers** can suffer a wound for **+2" M** during an activation.
  **Courtiers** start with +100 Crowns but each fighter starts each battle with
  1 fewer Wound, minimum 1.
- **Mortal:** Remove invalid **Cult + Mortal** Tradition options because Cult
  cannot choose Mortal. **Zealots** are Hunters only and gain **+1** to hit
  enemy Casters. **Constables** prevent enemy **Retreat** while engaged.
  **Alchemists** may buy alchemical weapons and consumables without rolling on
  the future **Shadow Market** table. **Ironbound** are Knights only and gain
  **Fear** while within **1"** of another friendly fighter.

Create `rules/profiles.md` as the shared home for special profiles. Move
Skeleton and Swarm profiles out of `rules/magic.md`, add a Zombie profile, and
leave placeholder sections for Animals and Daemons. Zombie unarmed attacks
inflict **Poisoned** in addition to normal wounds.

**Reasoning:** Tradition is the layer that makes a retinue read differently at
creation. A third full feat axis would bloat the rules count beyond the desired
Necromunda/Mordheim skill footprint and delay identity until campaign
advancement. One retinue-wide special rule keeps Tradition distinct from
Archetype feats and Domain feats: Archetype still owns battlefield structure,
Domain still owns magic or Mortal gunpowder, and Tradition now owns inherited
body, practice, status, rite, tools, or culture. The design pass also removed
confusing repeated Tradition names: **Runecasters** replaced Arcane Witches, and
**Diabolists** replaced Infernal Ritualists.

---

## 2026-06-06 — Lock campaign table terminology

**Decision:** Use **table**, not **chart**, in player-facing rules text. Rename
the first post-battle fighter consequence table to the **Casualty Table**.
Rename the severe follow-up table from **Serious Injury Chart** to the
**Doom Table**. Keep **Survival Roll** for the retinue-level post-battle
reward roll.

Update `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` with the locked campaign terms:
**Casualty Table**, **Doom Table**, **Survival Roll**, and **table** instead of
**chart**. Update active campaign/rules references, advancement table headings,
and links to match the new anchors.

**Reasoning:** **Survival Roll** now means a retinue-level salvage/reward roll,
so the old fighter-level Survival wording caused a collision. **Casualty Table**
plainly describes the first Out of Action pass. **Doom Table** fits Noctvale's
tone and covers more than injuries: death, permanent scars, uncanny
consequences, and miraculous recovery.

---

## 2026-06-06 — Replace exploration with Survival Rolls

**Decision:** Replace the old Exploration Phase with **Survival Rolls** in
`campaign/survival-rolls.md`. Any random reward roll uses **2d6**: natural
double 1 resolves the roll's **Mishap** result, natural double 6 resolves its
**Bonus** result, and modifiers change only the total after natural doubles are
checked. Modifiers cannot create result **2** or result **12**.

Scenarios are chosen or rolled first. Each scenario defines its battlefield
location: fixed, random from the Battlefield Location Table, or a smaller
scenario-specific location table. Scenario rewards are static and remain the
strongest reward lane. Survival Rolls are random middle-value rewards. Looting
is the weakest reward lane and happens during the battle.

After scenario rewards, the winning retinue rolls on the battlefield location's
Survival table. The losing retinue rolls on the Generic Survival table. In a
draw, both retinues roll Generic. Update **Looting Buildings** and **Rifling
Their Pockets** to 2d6 random reward rolls. Remove active **Battle Spoils** use
from the post-game sequence. Update **Pathfinder** to interact with Survival
Roll Mishaps instead of old exploration dice.

**Reasoning:** This keeps scenario victory meaningful by making scenario rewards
static and strongest, while Survival Rolls help the losing retinue recover
without pretending both retinues control the same battlefield after the battle.
Location matters because it is the board location defined by the scenario, and
the winner has time to search it. The 2d6 double rule gives all random reward
rolls one consistent language.

---

## 2026-06-06 — Add universal building looting

**Decision:** Add **Looting Buildings** to `campaign/scenarios.md` as a scenario
rule used in every scenario unless the scenario states otherwise. Before
deployment, players agree which terrain pieces are **buildings**. A fighter
inside a building may use the separate **Loot** action to search that building.
Each building can be looted once per battle. Loot is added to post-battle
rewards and cannot be equipped or spent during the battle. **Many Hands** adds
**+1** to the loot roll if 2 or more friendly fighters are inside the same
building when a fighter loots it. A modified result cannot exceed **6**.

Use a squished **1d6** table:

| 1d6 | Find |
|---|---|
| 1 | **Trap** — resolve 2 red hits and 2 blue hits against the fighter. |
| 2–3 | **Basic weapon** — the retinue gains 1 legal Basic weapon after the battle. |
| 4–5 | **15 Crowns** |
| 6 | **Relic** |

Update **The Forest Creeps Ever Onward** to use **Looting Buildings** instead
of placed Relic markers. The retinue that recovers the most Relics through
Looting Buildings wins.

**Reasoning:** The compressed loot table keeps building searches fast and
useful without creating separate carry/drop rules for every find. One search
per building prevents unlimited farming while keeping ruins relevant in every
scenario.

---

## 2026-06-06 — Add Blood for the Rite

**Decision:** Add **Blood for the Rite** as a **Cult** Archetype feat. Once per
battle, before the fighter makes a stat roll or **casting roll**, choose another
friendly fighter within **12"**. That fighter suffers **1 Wound** and the rolling
fighter adds **+1** to the roll. The wound can reduce the chosen fighter to 0
Wounds and cause them to become **Downed**.

**Reasoning:** The feat gives Cult a sacrifice lever without relying on a reroll
or free spell effect. The cost is concrete and can create real wound-state
pressure.

---

## 2026-06-06 — Add Stubborn Lot

**Decision:** Add **Stubborn Lot** as a **Folk** Archetype feat. When the fighter
uses **Help**, a roll of **1** counts as **2** if another friendly fighter is
within **1"** of this fighter or the assisted fighter.

**Reasoning:** The feat expresses Folk as communal and stubborn without
duplicating Hunter field medicine. It improves the worst **Help** result only
when nearby friendly fighters are present.

---

## 2026-06-06 — Add reroll limit

**Decision:** Add a global reroll limit to `rules/core-rules.md`: a die can
never be rerolled more than once. If more than one rule would let a player
reroll the same die, choose one of those rules; the second result stands.

**Reasoning:** Reroll effects such as **Patient Shot** need a global stacking
limit before more feats and special rules add reroll hooks.

---

## 2026-06-06 — Add first Hunter feats

**Decision:** Add **Marked Quarry**, **Patient Shot**, **Field Dressing**, and
**Pathfinder** as **Hunters** Archetype feats.

**Marked Quarry:** At the start of the battle, choose 1 enemy fighter. When the
hunter attacks the chosen fighter, add **1 red die** or **1 blue die** to their
Strike Pool.

**Patient Shot:** When the hunter uses **Aim**, their next **Ranged** attack
this activation may reroll 1 natural 1 in the Strike Pool.

**Field Dressing:** When the hunter uses **Help** on a **Downed** friendly
fighter, add **+1** to the **Help** roll.

**Pathfinder:** During Exploration, if the hunter is a surviving fighter, ignore
1 exploration die result of **1**. That die finds nothing and does not cause a
Mishap.

**Reasoning:** These feats express Hunters through pursuit, field support, and
campaign safety. They bend existing levers: Strike Pool color choice against a
single marked enemy, **Aim**, the **Help** roll, and exploration Mishaps.

---

## 2026-06-06 — Add To Me, Brothers!

**Decision:** Add **To Me, Brothers!** as a **Knights** Archetype feat. Once per
battle, when the fighter uses **Brace**, choose up to 2 friendly fighters within
**12"**. Each chosen fighter may move up to **6"** toward this fighter. A fighter
cannot use this movement to enter engagement range.

**Reasoning:** The feat expresses knightly rallying and formation play without
granting attacks, full actions, to-hit bonuses, or rerolls. Tying the call to
**Brace** makes the knight a defensive anchor, while the engagement restriction
keeps the movement from becoming a hidden **Charge**.

---

## 2026-06-06 — Add Iron Discipline

**Decision:** Add **Iron Discipline** as a **Knights** Archetype feat. The
fighter cannot become **Downed**. When they would become **Downed**, they remain
Active with 0 Wounds instead. While they have 0 Wounds, any unblocked hit pushes
them to **Stunned** as if they were Downed.

**Reasoning:** The feat expresses a disciplined fighter standing tall when they
should collapse, without ignoring later hits or bypassing the **Stunned** and
**Out of Action** states. It bends the wound-state ladder rather than adding a
generic defensive bonus.

---

## 2026-06-06 — Add Vow of Pursuit

**Decision:** Add **Vow of Pursuit** as a **Knights** Archetype feat. When the
fighter attacks an enemy fighter that took a friendly fighter **Out of Action**
this battle, add **2 red dice** to the fighter's Strike Pool.

**Reasoning:** The feat expresses knightly vengeance without granting a broad
to-hit bonus, extra action, or reusable reroll. The trigger is narrow and tied
to a dramatic battle event.

---

## 2026-06-06 — Dice and roll modifier wording

**Decision:** Clarify modifier wording in `NOCTVALE_RULEBOOK_STYLE_GUIDE.md`.
Use **+1 Mt** or **+1 Sk** only when a rule changes a fighter's stat or a weapon
table's **+Mt / +Sk** modifier. When a rule adds dice without changing a stat,
name the dice directly: **add 2 red dice to the Strike Pool**, **add 1 blue die
to the Strike Pool**, or **gain +1 red defense die**. For attack accuracy, use
**add +1 to the roll to hit**.

**Reasoning:** Feats need consistent language before lists expand. Dice added
to a pool, stat changes, and roll modifiers are different mechanical levers and
should read differently at the table.

---

## 2026-06-06 — Armor conversion terminology and tuning

**Decision:** Replace armor/shield **rescue** terminology with **convert** in
active rules. Armor and shields now **convert** failed defense dice into
successful defense dice after the defense roll. This is distinct from Kill
Team-style **retain** language: retaining keeps a die as a success, while
converting changes a failed defense die into a success after the roll.

Tune armor conversion:

| Armor | Conversion |
|---|---|
| **Light Armor** | Convert 2 failed red or blue defense dice into 1 normal success. |
| **Medium Armor** | Convert 1 failed red defense die into 1 normal success. |
| **Heavy Armor** | Convert 1 failed red defense die into 1 normal success **or** convert 2 failed red defense dice into 1 critical success. |

Shields keep their existing conversion quantities, updated to the new wording.

**Reasoning:** The old armor values were too reliable when stacked with
**Brace**, shields, and defensive feats such as **Hold the Line**. The new
Light Armor supports agile fighters by allowing red or blue failures, while
Medium Armor and Heavy Armor remain mostly red-defense protection. Heavy Armor
keeps its special identity as the armor tier that can produce a critical
defense success.

---

## 2026-06-05 — First feat rule and Hold the Line

**Decision:** Add `rules/feats.md` with initial feat rules, feat eligibility,
and **Hold the Line** as the first **Knights** Archetype feat. **Hold the Line**
lets a fighter who uses **Brace** choose another friendly fighter within **1"**;
that fighter gains **+1 red defense die** until the bracing fighter's next
activation. Add a default rule that duplicate copies of the same named feat do
not stack on one fighter at the same time.

**Reasoning:** Feats should express retinue identity by bending existing levers,
not by adding generic power. **Hold the Line** makes Knights better at forming a
defensive wall through **Brace** while preserving the action cost and avoiding
broad permanent bonuses. The non-stacking rule prevents multiple nearby copies
from piling the same feat onto one defender.

---

## 2026-06-05 — Mortal Domain rename

**Decision:** Rename the **None** Domain to **Mortal** in active player-facing
rules and roadmap text.

**Reasoning:** **Mortal** reads as a real retinue identity rather than a blank
or missing choice. It keeps the Domain's role clear: retinues that reject or
lack magic trade Domain spells and the **Caster** keyword for gunpowder,
alchemy-forward play, anti-magic tools, and Fearless-style discipline.

---

## 2026-06-04 — Forest scenario section cleanup

**Decision:** Move the left/right forest-edge reference from **Deployment** to
**The Advancing Forest** in **The Forest Creeps Ever Onward**. Remove the
redundant note that Relics carried by fighters still on the board are lost.

**Reasoning:** The left/right reference is only needed when rolling for the
advancing forest edge. The Relic note was unnecessary because the battle ends
only when all fighters have **Escaped** or been taken **Out of Action**.

---

## 2026-06-04 — Relic placement clarity in forest scenario

**Decision:** In **The Forest Creeps Ever Onward**, players cannot place more
than **1 Relic marker** inside the same terrain piece. Before the battle,
players should agree which terrain pieces count as single terrain pieces.

**Reasoning:** The restriction prevents Relic clustering inside one large
building or ambiguous terrain feature. The pre-battle agreement keeps the rule
usable across handmade, modular, and irregular terrain.

---

## 2026-06-04 — Repeat scenario objectives and collaboration workflow

**Decision:** Do not keep a separate objective module file. Scenario objective
rules such as **Looting** are repeated in the scenario packet that uses them, so
players do not need to chase cross-references during a battle.

Clarify the Noctvale collaboration workflow in `AGENTS.md`: proposal-first
applies when the user is exploring ideas or asking to think through tradeoffs.
Direct correction or implementation language such as "this should be this",
"why didn't you change this?", "make this change", or "approved" is treated as
approval to act after reading the relevant files.

**Reasoning:** Scenario files should contain scenario packets, while reusable
objective rules should appear at point of use. This matches the existing
shared-snippet principle: rules can have a design source, but player-facing
procedures should be repeated where players need them. The workflow
clarification preserves design discussion when the user wants to brainstorm, but
removes friction when the user is directly asking for a known change.

---

## 2026-06-04 — Looting rules and Relic economy

**Decision:** Add **Looting** rules to the forest scenario in
`campaign/scenarios.md`. The scenario places **Relic markers**. A fighter within
**1"** may use **Interact** to pick up a Relic marker. Relics are carried by
the fighter, may be dropped with **Interact**, are dropped if the fighter is
taken **Out of Action**, and are recovered if the fighter **Escapes**. A fighter
may carry **1 Relic**. Carrying a Relic does not reduce movement or actions.
If a fighter carrying a Relic is taken **Out of Action**, that fighter's
controlling player places the Relic marker in base contact before removing the
fighter.

Make **Relics** the sole Wyrdstone-equivalent campaign resource. Relics sell
for Crowns using the restored supply and demand curve from the older
documentation: 1 Relic = 15 Crowns, 2 = 30, 3 = 40, 4 = 55, 5 = 70, 6 = 80,
7 = 95, 8 = 110. Remove Relic Fragments and Fragment nudges from the active
campaign loop.

Update the **Ruins** exploration chart so every successful discovery finds
Relics. Update overview and campaign-loop language so retinues hunt Relics,
sell Relics for Crowns, then spend Crowns to recruit fighters and buy gear.

Add **The Forest Creeps Ever Onward** as a scenario draft. Starting with the
player with initiative, players alternate placing **5 Relic markers** on the
ground floor of terrain pieces while a forest advances from one non-deployment
edge. The forest edge is selected at the end of round 1. The forest then covers
**6"** more of the board at the end of each round, measured from the original
advancing edge: **6"** after round 1, **12"** after round 2, and so on until it
covers the board at the end of round 6. Fighters may **Escape** through any
edge except the advancing forest edge. The retinue that recovers the most
Relics wins.

**Reasoning:** Looting rules keep battle play concrete: pick up Relics, escape
with Relics, sell Relics for Crowns. Repeating the procedure inside each
scenario keeps scenario packets self-contained at the table. The supply and
demand curve restores the intended Mordheim-like economy pressure. Removing
Relic Fragments keeps the campaign resource loop focused: find Relics, sell
Relics, spend Crowns. The advancing forest gives the land a clear mechanical
bite, prevents camping, and creates a push-your-luck choice: search one more
building, fight for dropped Relics, or escape before the forest takes the board.

---

## 2026-06-02 — Move scenarios into campaign folder

**Decision:** Move `scenarios.md` to `campaign/scenarios.md`. Update repository
references and the relative link from **Loot the Dead** to the **Battle Spoils**
table.

**Reasoning:** Scenarios determine battle results and rewards, so they belong
beside exploration, post-game, and economy rules in `campaign/`.

---

## 2026-06-02 — Starter scenario and standard battle set-up

**Decision:** `scenarios.md` now contains **Loot the Dead**, the core starter
scenario. Battles use a **3' × 3'** board with **6"** deployment zones unless a
scenario states otherwise. Players divide their retinues into 3 groups and
alternate deploying one group at a time.

**Initiative:** The player with fewer activations begins with initiative. If
both retinues have the same number of activations, each player rolls **2d6**.
The highest result has initiative; reroll ties. During later rounds, the player
with fewer remaining activations has initiative. The previous initiative holder
retains initiative when activation counts are tied.

**Battle ending:** A battle ends immediately when only one retinue has fighters
remaining on the board. A fighter may use a **Move** action to leave the board
through any edge. That fighter has **Escaped**, cannot return during the battle,
and does not roll on the Survival chart.

**Loot the Dead:** A fighter who takes an enemy **Out of Action** with a
**Melee** action or **Mercy Kill** searches the defeated fighter. Roll **1d6**:
1–2 finds 0 Crowns, 3–4 finds 5 Crowns, and 5–6 finds 10 Crowns. Add any Crowns
already carried by the defeated fighter. A fighter may carry a maximum of 50
Crowns. Ranged attacks, spells, and other effects do not allow a search. The
winner searches the battlefield and rolls once on the **Battle Spoils** table.

**Reasoning:** The scenario teaches the standard set-up and core battle-ending
rules while adding a visible push-your-luck decision: secure a fighter's purse
by escaping or remain on the board to contest victory and the battlefield
search.

---

## 2026-05-31 — Radiant Strike seven-die profile

**Decision:** Changed **Radiant Strike** from 5 Mt to **4 Mt / 3 Sk**. Its +1 Mt bonus against Undead and Daemons remains unchanged.

**Reasoning:** Standard Domain attack spells should target a seven-die baseline, adjusted as needed for their special rules. The mixed pool gives Light a balanced baseline attack while its anti-Undead and anti-Daemon rider still pushes the spell toward Mt against its intended targets.

## 2026-05-29 — Rulebook style guide and rules editorial pass

**Decision:** Added `NOCTVALE_RULEBOOK_STYLE_GUIDE.md` (canonical terminology, formatting, action blocks, shared boxouts, checklist) and `NOCTVALE_DESIGN_TENETS.md`. Added `rules/_shared-snippets.md` as the master copy for verbatim **Attack Sequence**, **Apply Wounds**, **Casting Roll**, and **Primer Roll** boxes, repeated in `combat.md`, `actions.md`, `magic.md`, and `weapons.md`. Applied editorial conventions across active rules and campaign docs: **fighter** not model/unit, **retinue** not warband, **`"`** inches, US spelling, **casting roll** / **primer roll** (not **gate**), **skip activation** (not forgo/forgone), structured action blocks in `actions.md`, **Sequence at a Glance** in `campaign/exploration.md`, Domain **limits** / Tradition **unlock** wording. Removed draft `NOCTVALE_INFERRED_RULEBOOK_STYLE_GUIDE.md` — its adopted patterns live in the canonical style guide only.

**Reasoning:** One style source for writers and agents; shared sub-routines repeated at point of use so players do not hunt cross-refs mid-combat. **Gate** and **forgo** read wrong for Noctvale tone. Inferred guide was a working document; keeping two guides invited drift.

**Supersedes:** Any informal “gate” / “loading gate” / “forgo activation” wording in player-facing rules (historical entries in this log unchanged).

## 2026-05-29 — Arcane rework: Hoarfrost replaces Arcane Barrage

**Decision:** Removed **Arcane Barrage**. Added **Hoarfrost** — placed large blast (18", same reach as Fireball). Persistent ice hazard until the caster's next activation; affects friends and enemies. When a fighter **ends any movement** in the zone: Sk check (d6 + Sk ≥ 8). Pass → slide d6" in movement direction. Fail → scatter die + d6" slide. Natural 1 on the check die → **Downed** at end of slide. Slide stopped by terrain, wall, or another base → 1 Wound. **Mishap:** blast centers on the caster.

**Reasoning:** Arcane Barrage was a third damage spell overlapping Bolt. Hoarfrost pairs with **Fireball** as the control blast (fire = damage, ice = movement hazard) and reuses scatter/slide mechanics from bombs and falling (Sk check, nat 1 always fails per core rules). **Hoarfrost** — the rime word, but readable: white crust ice that looks harmless until you step wrong.

**Supersedes:** Partial intent of 2026-05-29 — Cut Arcane Barrage (open slot now filled).

## 2026-05-29 — Cut Arcane Barrage

**Decision:** Removed **Arcane Barrage** from the Arcane spell list. Arcane now has one open slot among its six non-freebie spells (freebie **Arcane Bolt** unchanged).

**Reasoning:** Arcane carried three damage spells (Bolt, Fireball, Barrage). Barrage overlapped Bolt’s precision-damage role without adding positioning or combo play. Cutting it trims redundant damage and frees a slot for a reworked Arcane identity (e.g. placed terrain blast paired with Fireball). Remaining Arcane damage: **Arcane Bolt** (single-target) and **Fireball** (large blast).

## How to use this log

**Update this file before every git commit.** The decision log is part of the commit, not an afterthought.

### Workflow

1. **Draft** — Add **one** new section at the top (below this heading). Use **`## YYYY-MM-DD — Title`** — the date is the correlation key (no commit hash).
2. **Write** — **Decision** + **Reasoning** for everything in the staged diff.
3. **Stage** — Include `decision-log.md` in the same commit as the rule/campaign/todo changes.
4. **Commit** — One log section per commit. Same day, multiple commits? Use distinct titles.

Do not commit design work without a matching log entry.

### Entry format

| Field | Required |
|---|---|
| `## YYYY-MM-DD — Title` | Yes — date + short title; matches commit intent |
| **Decision** | Yes |
| **Reasoning** | Yes when not obvious |
| **Superseded by:** `YYYY-MM-DD — Title` | When replacing an older decision |

To compare with git history: `git log --since=YYYY-MM-DD --until=YYYY-MM-DD+1` and match commit messages to log titles.

---

## 2026-05-28 — Retinue Traditions (domain + archetype identity)

**Decision:** Add **Traditions** — one plural label per retinue (e.g. **Witches**, **Beastmen**, **Vampires**), chosen after Archetype + Domain. Each Domain offers four Traditions; each Archetype may pick two of them on that Domain (2×2 grid). **Cross-domain names:** **Witches** (Nature: Cult/Folk; Arcane: Hunters/Folk) and **Ritualists** (Arcane + Infernal: Folk/Cult) — same name, different tradition skills per Domain. Light: **Crusaders** on Knights/Folk, **Paladins** on Hunters/Knights (swapped from an earlier draft). Nature: **Beastmen** not Skinchangers. Blood: all four options are hedonistic noble identity (**Vampires**, **Dynasts**, **Revelers**, **Courtiers**). Arcane Knights/Cult: **Sorcerers**. Necromancy: **Sepulchers**, **Wightlords** (single-word labels). Document in `rules/retinue.md`; building step 1 in `retinue-building.md`. Remove Phase 5a faction-mechanical checklist and open setting-scope / castle-pivot items from `todo.md`.

**Reasoning:** Traditions differentiate retinues that share Archetype + Domain (Inquisition vs Silver Hunt) without a separate “faction mechanics” phase. Shared names reduce vocabulary sprawl and match lore (hedge Witches on Arcane, covens on Nature). Plural names signal whole-retinue identity. Tradition skills deferred to Phase 5b.

---

## 2026-05-28 — Decision log: date + title, not commit hash

**Decision:** Drop **`Commit:`** hash lines. Correlate entries with **`## YYYY-MM-DD — Title`** only — one section per commit; same-day commits use distinct titles. Update workflow and `.cursor/rules/decision-log-before-commit.mdc`. Remove hash-only meta entries.

**Reasoning:** Date is known before commit; no post-commit amend or hash fix-up.

---

## 2026-05-28 — Decision log: one entry per commit

**Decision:** Restructure log to **one section per git commit**. Update `decision-log.md` **before** every commit and stage it with the change. Add `.cursor/rules/decision-log-before-commit.mdc`.

**Reasoning:** Match git history to design rationale without ten micro-entries for one commit.

---

## 2026-05-28 — Weapons taxonomy, hammers, retinue identity doc

**Decision:** Reorganize `rules/weapons.md` by access category. **Melee:** Basic · Long · Heavy · Exotic. **Spear** in **Long**. Add **Mace** (Basic) and **War Hammer** (Heavy) — **Hammer** type outside the triangle; natural 6s crit vs **Heavy Armor** only; no triangle crits when either fighter wields a Hammer (`combat.md` updated).

**Ranged:** **Missile weapons** (all retinues) vs **Gunpowder** (None only). Gunpowder firearms: **Basic** (Musket, Blunderbuss) and **Refined** (Pistol, Long Rifle). **Flintlock** is a keyword on any firearm (−25 Crowns, Single Shot). Hunters + None get both tiers; Knights/Folk + None get Basic only.

Move `factions/factions.md` → **`rules/retinue.md`** (Archetypes, Domains, named presets, lore). Mechanical building stays in `retinue-building.md`. Remove `factions/` folder.

**Reasoning:** Cult can take crossbows; gunpowder stays None-only. Refined labels personal arms vs issue weapons. Flintlock as keyword avoids duplicate stat lines. Retinue doc lives with other roster rules.

---

## 2026-05-28 — Retinue building, post-game charts, campaign economy

**Decision:** Add **`rules/retinue-building.md`** — generic classes (Leader / Elite / Specialist / Rank), Archetype slot caps, **1000 Crown** budget (5 Crown increments), fighter and wargear costs. **Mayor** (Folk Leader), **Theurge** (Cult Leader, replaces Magister), **Tracker** (Hunter Specialist). Knights: no Rank (Knight + Squire only). **Caster** is a keyword (+25 Crowns), not a class.

Add **`campaign/post-game.md`** — chart-driven loop: Battle Spoils, Survival, Serious Injury, XP spend (Skill/Keyword 2 XP, Stat 5 XP, no levels), Stat/Keyword advancement charts, Fragment nudges. Update **`campaign/exploration.md`** with Mishap chart and Ruins discovery. Bump fragment sell base **15 → 20** Crowns in **`campaign/economy.md`**.

**Reference:** Last Days (Osprey 2018) noted in `todo.md` for XP + nudge inspiration — own system, not ported.

**Reasoning:** Constrained points + composition slots define roster identity. Campaign progression is chart-driven with spend-based XP, not level thresholds.

---

## 2026-05-28 — Retinue terminology, intervening fighters, LoS simplified

**Decision:** Adopt **retinue** for the player's list-for-a-fight. **Faction** remains optional named preset (Phoenix Guard, etc.).

**Intervening fighters:** friendlies do not block LoS; move through friendlies allowed. Friendly-in-line-of-fire for firearms/damage spells on miss (1d6 → 1 hits intervening friendly). Clustered enemies: Sk check to retarget when shooting into a mob.

**LoS & cover:** drop percentage bands (see superseded terrain-bands entry below). Binary LoS from shooter's PoV; cover = intervening terrain **>1"** from shooter (+1 blue defense die).

**Reasoning:** Retinue fits gothic post-imperial tone. Wild shots and mob targeting add friction without competitive targeting rules. Simpler LoS adjudication at the table.

---

## 2026-05-28 — Line of sight and cover (terrain bands) — superseded

**Superseded by:** 2026-05-28 — Retinue terminology, intervening fighters, LoS simplified

**Decision:** Terrain-only visibility from firing fighter's PoV. **25%–90%** obscured = cover (+1 blue defense die); **>90%** = no LoS.

**Reasoning:** Percentage bands reduce sliver arguments. Replaced by binary LoS in the entry above.

---

## 2026-05-27 — Bone Circle (Necromancy) — first trap spell

**Decision:** Added Bone Circle as Necromancy's 6th spell, completing the domain. Bone Circle is the game's first **trap spell** — a persistent damage zone that triggers on any fighter that starts their activation in it, ends their activation in it, or moves through it.

**Bone Circle:** Choose a point within 12". Place a 3" blast template. Any fighter in the zone takes a 1 Mt / 3 Sk hit (defense applies normally). Affects friends and enemies. Lasts until the start of the caster's next activation. Mishap: zone centers on the caster.

**Reasoning:** Area denial through persistent damage is a new mechanic — no other spell does this. Distinct from Cursed Ground (immediate debuff zone with -1 M and a one-time Sk check) because Bone Circle triggers repeatedly on movement. Creates tactical decisions: do you walk through and eat the hit, or spend actions going around?

**Necromancy is now complete (freebie + 6):** Deathbolt, Summon Skeleton, Raise Dead, Cursed Ground, Wither, Bone Blast, Bone Circle.

**Open:** Infernal is the last domain with no spells.

---

## 2026-05-26 — Arcane, Nature, and Necromancy spell lists

**Arcane — complete (freebie + 6):**
Arcane is raw magical mastery — precision, control, energy manipulation. Three damage spells (Arcane Bolt, Fireball, Arcane Barrage), three utility/control (Arcane Shield, Telekinesis, Displacement, Slow).

New spells:
- **Fireball** — Large blast, 18". Three outcomes: pass = on target, normal fail = scatters (scatter die + d6"), Mishap (double 1s) = blast centers on caster. Matches existing bomb scatter mechanics.
- **Telekinesis** — Move any fighter 6" directly toward or away from caster. No target check.
- **Displacement** — Teleport friendly fighter 6" in any direction, ignores terrain/engagement.
- **Arcane Barrage** — 3 automatic Sk hits (blue), no Strike Pool roll, no to-hit roll. Guaranteed damage on successful cast, defender rolls defense normally.
- **Slow** — Target enemy loses 1 action on next activation.

**Nature — complete (freebie + 6):**
Nature is the dangerous wild — poison, shadow, beasts, the dark forest. Serves werewolves, skaven, and witches equally.

New spells (Shadowmeld logged separately):
- **Venom** — Target must pass Mt check or suffer Poisoned (-1 Mt, -1 Sk). Body-based resistance, not willpower.
- **Feral Form** — Friendly target gains +2 Mt, +1" M, but cannot use ranged weapons or cast. Primal transformation.
- **Entangle** — Target enemy M reduced to 0, cannot Move/Charge/Climb/Scramble/Jump/Retreat.
- **Summon Swarm** — Place a Swarm within 3", activates immediately with 2 actions then disappears. Low Mt (2), high Sk (6) — many small precise hits. Swarm profile added.
- **Dread Chorus** — All enemies within 8" must pass Sa test or gain Fear of the caster. The howl, the skittering, the chant.

**Necromancy — partial (freebie + 5 of 6, 1 slot TBD):**
Necromancy is dominion over death — the dead are tools, the living wither. Grave Wardens (Cult + Necromancy) are the named faction.

New spells:
- **Raise Dead** — Bring back a friendly OOA fighter within 3" with 1 wound, Undead, Fearless. Activates immediately with 2 actions then goes OOA permanently. Mishap: opponent controls the raised fighter.
- **Cursed Ground** — Large blast within 12". Models in zone suffer -1" M and take a 2 Mt / 2 Sk hit unless they pass a Sk check. Mishap: centers on caster.
- **Wither** — Target enemy suffers -1 Mt, -1 Sk, -1" M. Applies Weakened condition. Heavier debuff than Blood's Enfeeble.
- **Bone Blast** — Blast centered on caster, 1 Mt / 4 Sk hit to all fighters except caster. Bone shrapnel — mostly blue dice. Mirror of Light's Purge the Faithless (self-centered AoE) with inverted dice profile.
- 1 slot remains TBD.

**Open questions:**
- Necromancy still needs 1 more spell.
- Casting difficulties not yet assigned for most new spells across all domains.
- Weakened condition not yet defined in conditions.md.
- Poisoned condition not yet defined in conditions.md.
- Many Mishaps still TBD.

---

## 2026-05-26 — Shadowmeld (Nature) and Nightfall (Blood) spells

**Decision:** Two thematically paired darkness spells — one for Nature, one for Blood. Same concept (shadow/darkness), opposite application.

**Shadowmeld (Nature):**
- Target friendly fighter gains **Hidden**. While under this spell, the target **does not need to remain within 1" of terrain** to stay Hidden. Hidden is still lost from combat actions, Charge, Climb, Jump, or moving within 6" of an enemy as normal. Lasts until the caster's next activation.
- **Mishap:** The shadow inverts — enemies gain **+1 to hit** the target with ranged weapons and spells until the start of the caster's next activation.
- **Design intent:** The spell *is* the shadow — it follows the fighter, letting them cross open ground while Hidden. Defensive/evasive, fitting Nature's protective identity.

**Nightfall (Blood):**
- Target friendly Blood domain fighter is engulfed in a shadow bubble. **No ranged weapons or spells can target into or out of the bubble.** The target gains **+1 to hit with CC** while within the bubble. Lasts until the caster's next activation.
- **Mishap:** Bright light erupts instead — enemies gain **+1 to hit** the caster with ranged weapons, and the caster suffers **-1 Mt** until the start of their next activation.
- **Design intent:** The vampire chooses to step into darkness — it's a self-buff, not an enemy lockdown. The darkness cuts both ways (no friendly ranged/spells can help either). Pairs with Enthrall (pull enemies into engagement) and Predator's Grace (close distance before darkness drops). Targets friendly Blood domain fighters specifically.

**Reasoning:** Both spells use shadow but from opposite directions — Nature hides in it (defensive), Blood fights in it (aggressive). Nightfall targets friendly Blood domain fighters specifically to prevent it from being used as a ranged shutdown tool against enemies.

**Ripple effect:** "Touching terrain" replaced with "within 1" of terrain" globally in Hidden rules (actions.md) for clarity.

**Open questions:**
- Casting difficulties not yet assigned for either spell.
- Nightfall's bubble size — is it just the fighter's base, or does it extend outward? Current read is fighter-only (1" engagement range defines the "inside").

---

## 2026-05-26 — Blood domain identity and spell list (draft)

**Decision:** Blood is the buff/debuff domain, themed around vampiric predation and hedonism. Blood magic draws power from living blood — vitality, hunger, transformation, excess. It is the domain of the Nobility (Knights + Blood).

**Vampires are undead** — technically dead but sustained by blood magic. They carry the **Undead** keyword (Radiant Strike's +1 Mt vs Undead applies). The distinction from Necromancy: a necromancer's skeleton is a puppet with no will; a vampire is a predator whose blood magic gives it will, intelligence, and power of its own. Necromancy's triangle advantage over Blood (crits) represents necromancers exploiting the death at a vampire's core — but expressed mechanically through the triangle, not through "control" effects.

**Domain distinction:**
- **Necromancy** = dominion over death itself. Corpses, bones, spirits, decay. The dead are tools.
- **Blood** = power drawn from living blood. Vitality, hunger, transformation, predation. Buff/debuff identity.

**Draft spell list:**
- **Leech** (freebie attack) — Ranged attack; if target takes ≥1 wound, caster heals 1 wound. Mishap: caster takes the damage.
- **Bleed** — Target must pass Wi check (d6 + Wi ≥ 8). Fail: Bleeding condition — 1 wound immediately, test Wi each activation until passed or dead. Mishap: caster gains Bleeding.
- **Blood Frenzy** — Friendly target gains +3 Mt, -1 to hit. Lasts until caster's next activation.
- **Predator's Grace** — Friendly target gains +1" M, +1 Sk. Lasts until caster's next activation.
- **Unholy Vigor** — Friendly target regains 1 wound. If at full wounds, +1 red defense die instead. Lasts until caster's next activation.
- **Enthrall** — Target enemy within 8" must pass Wi check or immediately take one Move action in a direction chosen by the caster. Mishap: a friendly fighter (opponent's choice) takes the move instead.
- **Feast of Excess** — Friendly target gains +1 Mt, +1 Sk, +1" M. When effect ends, target becomes Stunned (keeps wounds but vulnerable).

**Open questions:**
- Bleed difficulty — very strong vs low-Wi targets (Wi 3 = 33% chance to shake per turn). Warrants high difficulty (12+ or 14+).
- Feast of Excess → Stunned — in the current wound state system, Stunned is normally part of the Active → Downed → Stunned → OOA chain. A fighter Stunned from Feast still has wounds. Can they be Mercy Killed? Do they need Help to recover, or do they automatically revert to Active after one turn? Needs a ruling.
- Bleeding is a new condition not yet defined in conditions.md.
- Remaining Mishaps TBD for Blood Frenzy, Predator's Grace, Unholy Vigor, Feast of Excess.
- Casting difficulties not yet assigned for any Blood spell.

**Affliction confirmed:** Enfeebled is Blood's signature affliction (strips Mt and Sk — drains vitality). Weakened belongs to Necromancy.

---

## 2026-05-26 — Lk (Luck) renamed to Sk (Skill)

**Decision:** The stat abbreviation Lk (Luck) is now Sk (Skill) across all rules and references. Blue dice represent Skill — finesse, reflexes, precision, trained technique.

**Reasoning:** "Luck" implied randomness and fate, which didn't match what the stat actually governs. A fighter with high blue dice isn't lucky — they're trained, precise, and technically proficient. "Skill" better describes what the stat mechanically represents: the ability to land precise strikes, dodge through reflexes, and outmaneuver opponents. The abbreviation Sk avoids collision with any existing stat.

**Ripple effects:** Global rename across all active rules files. Archive files left unchanged as historical snapshots.

---

## 2026-05-26 — Influence Bubble equipment (Relic, Instrument)

**Decision:** Added the Influence Bubble mechanic — equipment that projects a passive area effect around the bearer. Two items added: Relic (+1 Sa, 6", passive, 2 slots) and Instrument (+1" M, 6", costs 1 action per turn, 2 slots).

**Key rules:**
- Bearer must be Active (suppressed while Downed/Stunned/OOA)
- No LoS required (proximity, not vision)
- Bearer benefits from their own bubble
- Same-item bubbles do not stack (two Relics = more coverage, not +2 Sa)

**Reasoning:** Influence Bubbles create high-value support pieces that opponents want to prioritize. Relic at 2 weapon slots makes the bearer a dedicated support fighter. Instrument at 2 slots also limits weapon options, and costs an action each turn on top of that, halving the bearer's combat output. Item names are deliberately generic — a Relic can be a banner, totem, censer, or anything else; an Instrument can be a drum, horn, bell, etc.

---

## 2026-05-24 — Throwing stars, slings, bombs, smoke bombs, auto-fail rule

**Decisions:**

1. **Throwing Stars** added as an additive ranged weapon (+1 Sk, 1H, 0"–8", no min range). A pocket ranged option for close-quarters fighters.

2. **Sling** added with a flat Strike Pool (2 Mt / 1 Sk) — weaker than the cheapest firearm (Pistol at 5/2). Uses normal RC to-hit roll, no loading gate. The cheapest ranged option in the game, available to everyone.

3. **Bombs** added as thrown AoE explosives (3" blast, None domain only). Mechanic: declare target direction → roll 2d6 gunpowder gate (≥ 6+, double 1s = explodes in hand) → roll d6 + Mt for max distance. On pass, place blast anywhere along the line. On fail, scatter die determines direction. Flat Strike Pool (3 Mt / 2 Sk).

4. **Smoke Bombs** use the same bomb mechanics but deal no damage — create a 6" cloud blocking LoS until end of round.

5. **Auto-fail rule** added to core rules: a fighter may choose to automatically fail any test without rolling. Primary use case is dropping a smoke bomb at your own feet for instant cover, but applies universally.

6. **Scatter die** (physical, with arrows on multiple sides and a bullseye) is a required game component for bomb scatter resolution.

**Reasoning:** Slings fill the gap between melee and firearms for retinues that can't afford (or aren't allowed) gunpowder. Throwing stars give any fighter a close-range ranged option without committing to a 2H weapon. Bombs give None domain retinues AoE capability that firearms lack, with the tradeoff of unpredictable distance and scatter risk. The Mt-based distance (d6 + Mt) makes strong fighters better throwers. Smoke bombs are pure utility — the 6" cloud and auto-fail combo creates a defensive tool that rewards tactical play.

---

## 2026-05-20 — All species normalized to W 3

**Decision:** All species now share W 3. Dwarves reduced from W 4, Elves raised from W 2.

**Reasoning:** Wounds multiplicatively amplifies every piece of defensive gear — armor saves, shield saves, toughness rolls all become more valuable with more wounds to protect. W 4 Dwarves weren't "33% tougher" than W 3 Humans; they got 33% more value from every defensive die. W 2 Elves weren't just "a bit fragile"; they got roughly half the value from the same equipment. This made Wounds nearly impossible to price correctly in a points system.

With W normalized, defensive differentiation comes from stats (Mt for toughness), armor tiers, shields, and special rules — all of which scale linearly and are easier to cost. Dwarves remain tough through Mt 4 and access to heavy armor. Elves remain fragile through lighter armor access and lower Mt, without being catastrophically so.

**Ripple effects:** Species costing is simplified — the multiplicative W problem is eliminated. Dwarf identity shifts to "tough through armor and Mt" rather than "tough through raw wounds." Elf identity shifts from "glass cannon" to "lightly armored but not paper." Special rules (e.g., a "Stubborn Constitution" feel-no-pain ability for Dwarves) can reintroduce wound-like resilience at a precise point cost if needed later.

---

## 2026-05-19 — Species stat overhaul: baseline 3, specialty bonuses

**Decision:** All stats baseline at 3 (5+ to succeed). Each species gets two specialty bonuses (+1 to specific stats) that define their identity, plus movement and wound variation.

**Old baselines:** Human Mt 2/Sk 2, Elf Mt 1/Sk 3, Dwarf Mt 3/Sk 1.

**New profiles (as of this date — W later normalized, see 2026-05-20):**
- **Human:** Mt 3, Sk 4, Wi 3, Sa 4, M 6", W 3 — lucky and mentally resilient
- **Elf:** Mt 3, Sk 4, Wi 4, Sa 3, M 7", W 2 — agile and mystical
- **Dwarf:** Mt 4, Sk 3, Wi 3, Sa 3, M 5", W 4 — tough and sturdy

**Reasoning:** Every fighter should pass stat tests at a realistic baseline (33% at stat 3). Species differentiation is expressed as specialty bonuses rather than crippling weaknesses. Humans are resilient (Sk + Sa), Elves are the natural caster species (Sk + Wi, fast, fragile), Dwarves are physical (Mt + W, slow, durable). Humans and Elves share Sk 4 but diverge on their second bonus (Sa vs Wi) and survivability (W 3 vs W 2).

**Ripple effects:** Strike pools are larger (Human + Sword = 9 dice). Defense Mt/Sk comparisons are tighter between species. Skeleton profile updated to Mt 4/Sk 5 with Sword baked in. Elf W raised from 1 to 2.

> **Superseded (2026-05-20):** W values later normalized to 3 for all species. See decision log entry 2026-05-20.

---

## 2026-05-19 — Wi (Will) stat added, flat spell damage, new casting difficulties

**Decisions:**

1. **New stat: Wi (Will)** added to the stat line between Sk and Sa. Represents the ability to channel supernatural power — works for both divine/spiritual and arcane/intellectual magic.

2. **Casting is now 2d6 + Wi vs difficulty** (was flat 2d6 vs difficulty). Firearms remain flat 2d6 — they're mechanical, not magical.

3. **Baseline Wi is 3** for all species. Casters are expected to have Wi 4 (role-based, not species-based). Non-casters have Wi 3 but can technically attempt spells at reduced odds.

4. **Spell difficulties increased by +4** so that a Wi 4 caster has the same success rates as the old flat 2d6 system:
   - Old 6+ → New 10+ (~72% at Wi 4)
   - Old 7+ → New 11+ (~58% at Wi 4)
   - Old 8+ → New 12+ (~42% at Wi 4)
   - Old 10+ → New 14+ (~17% at Wi 4)

5. **Spell damage is now flat, not additive.** Spells define their own Mt/Sk values as a complete Strike Pool, not as modifiers to the caster's base stats. A spell with 5 Mt always produces 5 red dice regardless of who casts it. Magic power comes from the spell, not the caster's body.

**Reasoning:** Wi as a stat makes caster quality meaningful — a Wi 5 veteran is noticeably better than a Wi 3 novice. Flat spell damage decouples physical and magical identity, so an Elf caster and a Dwarf caster produce the same spell output. Difficulties calibrated to Wi 4 so existing balance math is preserved.

---

## 2026-05-19 — Stat bounds: all stats range 1–6

**Decision:** All stats (M, CC, RC, Mt, Sk, Wi, Sa, W) range from 1 to 6. A stat of 1 means the fighter is disabled for that stat — they cannot perform actions requiring it. A stat of 6 is peak — only natural 1 fails (83% success).

**The meaningful tiers:**
- 1 = Disabled (auto-fail, can't attempt)
- 2 = Minimal (17%, nat 6 only)
- 3 = Baseline (33%)
- 4 = Skilled (50%)
- 5 = Expert (67%)
- 6 = Peak (83%)

**Reasoning:** Below 2, the math is identical (nat 6 auto-success only). Above 6, the math is identical (nat 1 auto-fail only). The 1–6 range ensures every stat point matters and creates real consequences for injuries that drop stats.

---

## 2026-05-19 — Firearms loading gate is flat 2d6 (no stat)

**Decision:** Firearms use flat 2d6 vs difficulty 6+ for all weapons. No stat is added. All firearms have the same loading difficulty.

**Reasoning:** A misfire is an equipment failure, not a user error. A veteran and a recruit have the same chance of a misfire — the veteran is better because they hit more often (higher RC), not because the gun fires more reliably. This also keeps firearms simpler than magic and avoids double-dipping with RC (which already handles accuracy). All firearms share 6+ difficulty because the loading process is fundamentally the same across weapon types.

---

## 2026-05-19 — Retinue size targets

**Decision:** Normal retinue size is 5–10 fighters. Absolute maximum ~20, more realistically ~15. These are targets, not hard rules yet.

**Fighter tiers:** 4 levels — Leader, Caster/Special, Champion, Troop. Archetype determines how many of each you can bring. Cult gets 3 max casters; all other archetypes get 1.

**Edge case noted:** An Infernal Cult retinue with 3 casters could theoretically summon enough Imps (post-alpha summoning system) to hit the upper bound if everything goes right. Even in that extreme, the cap should stay around 20 fighters on the table.

**Status:** Superseded by 2026-05-28 retinue-building rules. Bounds defined in `rules/retinue-building.md`.

---

## 2026-05-19 — Sanity mechanics (Fear, Panic, Insanity)

**Decision:** Three tiers of Sanity effects, all tested with d6 + Sa >= 8:

- **Fear** — Cannot move closer to the source for the rest of your turn.
- **Panic** — Cannot move closer + must spend at least 1 action moving full movement away from source.
- **Insanity** — Roll on the Insanity Table (1d6): 1=attack closest fighter (opponent chooses, not the source), 2–3=move toward nearest board edge (both actions), 4–5=freeze (both actions spent), 6=berserk (charge/shoot source with +2 Mt / +1 Sk, -1 to hit).

**Test timing:** Triggers when a fighter activates within range + LoS of the source, or when charging/charged (melee variant). Default range is 6" + LoS unless the fighter/spell specifies otherwise.

**Pass:** Immune to that specific source for the rest of the game.

**Fail:** Effect applies. At the start of the fighter's next activation, test again before acting. Pass = act normally. Fail = effect repeats.

**Fear/Panic/Insanity are keywords on specific fighters and spells.** Fear is per profile, not domain-wide.

**Fearless** keyword grants immunity to all three.

**Domain tendencies (not rules):**
- Blood, Necromancy, Infernal — more likely to have fear-causing fighters
- Light — fear against Blood, Necromancy, Infernal
- Nature, Arcane — some fear-causing fighters
- Infernal, Arcane — tend toward blanket fear (not domain-targeted)
- None — access to Fearless abilities

---

## 2026-05-19 — Sanity stat retained

**Decision:** Sa (Sanity) remains in the stat line for future use with horror, morale, and magical effects. Mechanic to be designed.

**Status:** Open — mechanic not yet defined.

---

## 2026-05-19 — Mishap effects are per-spell, not always caster

**Decision:** Mishap backlash is defined per spell. It does not always affect the caster — some Mishaps hurt the target or have other consequences. The 2d6 Mishap rule was updated from "the caster suffers the spell's unique backlash effect" to "the spell's unique backlash occurs."

**Reasoning:** More interesting design space. Heal's Mishap (deal 1 wound to target instead of healing) is more dramatic and thematic than a generic "caster takes damage."

---

## 2026-05-19 — Light domain spells (partial)

**Decisions made:**
- **Radiant Strike** — 7+, +3 Mt, 12", +1 Mt vs Undead and Daemons. Mishap: caster takes the damage.
- **Holy Light** — 7+, 12" from caster, strips cover and Hidden condition from all fighters in range. Reveal/utility spell, not damage.
- **Heal** — 6+, 1" range, restore 1 wound + improve wound state by one step. Mishap: deal 1 wound to target instead.
- **AoE attack (unnamed)** — 7+, +3 Mt / +1 Sk, 3" blast from caster, hits all fighters in radius. Mishap: caster takes the damage.
- 2 slots remaining (TBD).

**Reasoning:** 7+ is the standard Light difficulty. The AoE attack at 7+ with +3 Mt / +1 Sk is justified by the caster needing to be surrounded by enemies to use it — positional risk compensates for multi-target value. Heal at 6+ is the easiest spell, justified by 1" touch range and the caster spending their activation on support.

---

## 2026-05-19 — Infernal daemon tiers

**Decision:** Three tiers of daemons: Imps (small, winged), Hellions (4-legged, wolf-like), Maulers (large, humanoid).

**Reasoning:** Covers small/expendable, mid-tier/versatile, and large/heavy hitter archetypes. Names are gothic without being grandiose. The categories are a mortal classification imposed on chaotic entities — not a strict taxonomy.

---

## 2026-05-19 — Daemons recruited normally for alpha

**Decision:** For the alpha version, daemons are recruited like any other retinue member. Pre-game summoning tables (1d6 to determine tier, then variant roll) are deferred to post-alpha.

**Reasoning:** Summoning tables add complexity and require players to field extra fighters. Better to get the core game working first and layer summoning on later. Community feedback on random roster tolerance is pending.

---

## 2026-05-19 — "Daemons" not "Demons"

**Decision:** The archaic spelling "Daemons" is used throughout.

**Reasoning:** Fits Noctvale's gothic tone and avoids modern connotations.

---

## 2026-05-18 — Weapons separated from equipment

**Decision:** Weapons (melee, ranged, firearms, materials) moved to `rules/weapons.md`. Equipment file (`rules/equipment.md`) retains armor, shields, and alchemy only.

**Reasoning:** Keeps files focused. Weapons will grow as more are added; equipment covers defensive gear and consumables.

---

## 2026-05-18 — Phase 3 complete

**Decision:** Playtest weapon list marked as complete. Weapon tables exist in `rules/weapons.md` covering the melee triangle (Sword, Axe, Spear), ranged (bows, crossbows), and firearms.
