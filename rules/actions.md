# Actions

---

## Activation

Each fighter has **2 actions** per activation.

---

## Movement Actions

### Move
Move up to the fighter's Movement (M) value.

### Charge
Move up to the fighter's Movement value. Must end in **engagement range** of an enemy.

### Climb
Move vertically at **half movement**. Cannot end in engagement range.

### Scramble
Move at **half movement** through difficult terrain. Cannot end in engagement range.

### Jump
Move across open space up to Movement value. Must pass a **Luck roll**. Cannot end in engagement range.

### Retreat
Attempt to leave engagement range. Roll **Luck**.

On failure: the opponent may make an **opportunity attack** — but only if they are not currently engaged with another enemy.

---

## Combat Actions

### Melee
Attack an enemy **within engagement range** using a melee weapon.

### Ranged
Attack with a **ranged weapon**.

### Cast
Cast a spell. Spells **can be cast while in melee**.

### Aim
Prepare a careful shot. Grants **+2 to the Strike Pool** on the fighter's next **Ranged or Cast** action this activation.

### Mercy Kill
Execute a **Stunned** enemy within 1". The Stunned fighter is immediately **Out of Action**. *(See conditions.md)*

---

## Tactical Actions

### Defend
Brace for incoming attacks. The fighter gains **+1 Df** until their next activation.

### Hide
The fighter becomes **Hidden**. The fighter must be **touching terrain** to Hide.

A Hidden fighter **cannot be targeted** by Ranged or Cast actions beyond **6"**.

The fighter **loses Hidden** when they perform any **Combat action** (Melee, Ranged, Cast, Aim, or Mercy Kill), **Charge**, **Climb**, **Jump**, or **move within 6" of an enemy**.

A Hidden fighter may still Move, Scramble, Defend, Interact, Recover, or Help without losing Hidden — as long as they remain touching terrain.

### Overwatch
Forgo the fighter's remaining activation to give them an **Overwatch token**. The token allows the fighter to perform a **single action as a reaction** to an enemy model completing an action. *(See special-rules.md for full Overwatch rules.)*

---

## Interaction Actions

### Interact
Open doors, search objects, pick up items.

### Recover
Attempt to stand up from **Downed** state. *(See conditions.md)*

### Help
Assist a **Downed or Stunned** ally within 1". *(See conditions.md)*

---

## Engagement Rules

- Engagement range is **1 inch**
- There is **no facing system**
- Models are treated as aware in **all directions**

---

## Turn Structure & Activation Notes

The current source doc does not fully define a turn sequence or initiative system. Key influences and considerations from design discussion:

- Alternating activation fits frantic skirmish games (Warcry, Kill Team)
- Sam Pearson (Black Death City) recommends **one move and one action** rather than two unrestricted actions, to prevent double-move / double-attack incentives:
  - Double move creates weird positioning incentives
  - Double attack punishes charging and encourages static play
  - Ranged fighters may camp and shoot twice
- **Surge activations** (from Kill Team) can soften activation-count imbalance: the player who runs out of activations first can activate fighters a second time, but with only one move or action instead of both
- Underdog action-economy mechanics prevent outnumbered warbands from being helpless
- Overwatch tokens serve as an existing action economy balancing mechanic (see `special-rules.md`)

---

## Design Notes

- 2 actions per activation keeps the game moving without overly complex turn structures
- Retreat as a Luck roll adds risk to disengaging — escape isn't guaranteed
- Spells being castable in melee prevents "safe zones" and keeps magic integrated with close-quarters fighting
- Aim at +2 Strike Pool makes Aim + Shoot competitive with Shoot + Shoot — rewarding preparation without restricting action freedom
- Defend as +1 Df uses the same lever as Cover, giving fighters a meaningful option when they can't attack or retreat
- Overwatch is listed as a formal action so players can see it alongside their other options during activation
- The turn structure and initiative system are among the biggest **playtest blockers** — these need to be finalized before first testing
- Hide requires touching terrain — simple, physical, no adjudication arguments about "am I in cover from all angles"
- Hidden blocks targeting beyond 6" rather than granting a stat bonus — creates a binary decision (close the distance or find another target) instead of a modifier to track
- Combat actions and Charge break Hidden, but movement doesn't — a fighter can reposition while staying concealed as long as they hug terrain
- Hide pairs naturally with Ranged Reactions: a fighter who gets shot at can react by Hiding (if touching terrain), forcing the shooter to close the gap next time
