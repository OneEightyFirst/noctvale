# Actions

---

## Activation

Each fighter has **2 actions** per activation.

---

## Movement Actions

### Move

**Cost:** 1 action

Move up to this fighter's **M**.

- May move through friendly fighters
- Cannot end on another fighter's base

*(See `special-rules.md` — Intervening Fighters.)*

### Charge

**Cost:** 1 action

Move up to this fighter's **M**. Must end **within engagement range** of an enemy.

- May move through friendly fighters during the charge
- Cannot end on another fighter's base

*(See `special-rules.md` — Intervening Fighters.)*

### Climb

**Cost:** 1 action

Move vertically at **half M**.

- Cannot end **within engagement range**

### Scramble

**Cost:** 1 action

Move at **half M** through difficult terrain.

- Cannot end **within engagement range**

### Jump

**Cost:** 1 action

Move across open space up to this fighter's **M**. Roll **d6 + Sk ≥ 8**.

- Cannot end **within engagement range**

### Retreat

**Cost:** 1 action

Attempt to leave engagement range. Roll **d6 + Sk ≥ 8**.

- **Fail:** The opponent may make a **free Melee attack** using the full **Attack Sequence** — but only if they are not currently engaged with another enemy. This does not cost the opponent any actions.

---

## Combat Actions

### Melee

**Cost:** 1 action

Attack an enemy **within engagement range** using a melee weapon.

Resolve the attack using the **Attack Sequence** (below).

### Ranged

**Cost:** 1 action

Attack with a **ranged weapon**.

- Target must be within the weapon's minimum and maximum range
- Target must be within **line of sight**

Resolve the attack using the **Attack Sequence** (below).

*(See `special-rules.md`.)*

### Cast

**Cost:** 1 action

Cast a spell or fire a firearm.

- Spells may be cast **while in melee**
- Enemy targets must be in range and within **line of sight** unless the spell says otherwise
- **Cast** actions do not trigger **Ranged Reactions**

**Spell:** Roll the **Casting Roll** (below). If the spell goes off, resolve the attack using the **Attack Sequence**.

**Firearm:** Roll the **Primer Roll** (below). If the gun fires, resolve the attack using the **Attack Sequence**.

*(See `magic.md`, `weapons.md`, and `special-rules.md`.)*

### Aim

**Cost:** 1 action

Prepare a careful shot for this fighter's next **Ranged** action this activation.

- Gain **+1 die of the weapon's dominant color**
- **Natural 6** results are critical hits on that **Ranged** action

The dominant color is whichever stat the weapon adds more of (**+Mt** = red, **+Sk** = blue). If tied, choose red or blue.

### Mercy Kill

**Cost:** 1 action

Execute a **Stunned** enemy **within 1"**.

The **Stunned** fighter is immediately **Out of Action**.

*(See `conditions.md`.)*

---

## Tactical Actions

### Brace

**Cost:** 1 action

Hunker down and absorb incoming attacks.

Gain **+1 red defense die** (rolled with Mt) until this fighter's next activation.

### Hide

**Cost:** 1 action

Become **Hidden**.

- Must be **within 1" of terrain**

While **Hidden**:

- Cannot be targeted by **Ranged** or **Cast** actions beyond **6"**
- Lose **Hidden** when performing any **Combat action** (**Melee**, **Ranged**, **Cast**, **Aim**, or **Mercy Kill**), **Charge**, **Climb**, **Jump**, or moving **within 6"** of an enemy
- May still **Move**, **Scramble**, **Brace**, **Interact**, **Loot**, **Recover**, or **Help** without losing **Hidden** — as long as they remain **within 1"** of terrain

### Overwatch

**Cost:** Skip the rest of this fighter's activation

Give this fighter an **Overwatch token**.

The token allows the fighter to perform a **single action as a reaction** when an enemy fighter completes an action.

*(See `special-rules.md`.)*

---

## Interaction Actions

### Interact

**Cost:** 1 action

Open doors, operate scenario objects, or pick up items.

### Loot

**Cost:** 1 action

Search a building for valuables.

*(See `../campaign/scenarios.md`.)*

### Recover

**Cost:** 1 action

Attempt to stand up from **Downed**.

*(See `conditions.md`.)*

### Help

**Cost:** 1 action

Assist a **Downed** or **Stunned** ally **within 1"**.

*(See `conditions.md`.)*

---

## Engagement Rules

- Engagement range is **1"**
- There is **no facing system**
- Fighters are treated as aware in **all directions**

---

## Escape

When making a **Move** action, a fighter may leave the board through any edge
if they have enough movement to reach it. Remove the fighter from the board.
They have **Escaped** and cannot return during this battle.

An **Escaped** fighter is not **Out of Action** and does not roll on the
Casualty Table after the battle.

---

## Ending the Battle

The battle ends immediately when only one retinue has fighters remaining on
the board. That retinue wins.

---

## Standard Battle Set-Up

Use a **3' × 3'** board. Use this procedure unless the scenario states
otherwise.

### 1. Determine Initiative

The player with fewer activations in their retinue has initiative. If both
players have the same number of activations, each player rolls **2d6**. The
player with the highest result has initiative. Reroll ties.

### 2. Choose Deployment Edges

The player with initiative chooses a board edge as their deployment edge. The
opposing player uses the opposite edge. Each player's deployment zone extends
**6"** inward from their deployment edge.

### 3. Form Deployment Groups

Each player divides their retinue into **3 deployment groups** as evenly as
possible. If the fighters cannot be divided evenly, that player chooses which
groups contain the additional fighters.

### 4. Deploy Retinues

Starting with the player with initiative, players alternate setting up one
deployment group at a time within their deployment zones until both retinues
have been deployed.

---

## Round at a Glance

> **1. Start of Round**
> - Round 1: use initiative from battle set-up
> - Later rounds: fewer activations goes first (ties: previous initiative)
> - Distribute Overwatch tokens — underdog receives tokens equal to the activation difference
>
> **2. Alternating Activations**
> - Players alternate activating one fighter at a time (**2 actions** each)
> - When one player runs out of fighters, the other activates remaining fighters one at a time; the player who ran out may spend Overwatch tokens as reactions
>
> **3. End of Round**
> - Round ends when all fighters have activated or skipped their activation
> - Return to Step 1

---

## Turn Structure

The game is played over a series of **rounds**. Each round follows this sequence:

### 1. Start of Round

- **Determine initiative.** During the first round, use the initiative determined
  during battle set-up. During each subsequent round, the player with **fewer
  remaining activations** has initiative and activates first. If both players
  have the same number of remaining activations, the player who previously had
  initiative retains it. Fighters who are **Out of Action** do not count as
  remaining activations. **Escaped** fighters are no longer on the board and do
  not count as remaining activations.
- **Distribute Overwatch tokens.** If one player has fewer activations than the other, they receive a number of **Overwatch tokens equal to the difference**. *(See `special-rules.md`.)*

### 2. Alternating Activations

Players take turns activating **one fighter at a time**, alternating back and forth.

When a fighter is activated, they may perform **2 actions** chosen from the action list. Actions may be taken in any combination and in any order.

After a fighter's activation is complete, the other player activates one of their fighters, and so on.

### 3. End of Round

The round ends when **all fighters on both sides** have been activated or have **skipped their activation** (for example, to gain **Overwatch tokens**).

If one player runs out of fighters to activate before the other, the remaining player **activates their remaining fighters normally**, one at a time. The player who ran out may spend any unspent **Overwatch tokens** as reactions during these activations.

Begin a new round at Step 1.

---

## Attack Sequence

> ### Attack Sequence
>
> **Step 1 — Build the Strike Pool:** Fighter **Mt + Sk** + weapon **+Mt / +Sk**. Firearms and damage spells use a **flat Strike Pool** instead (see weapon or spell profile).
>
> **Step 2 — Roll to hit:** **d6 + CC ≥ 8** (melee) or **d6 + RC ≥ 8** (ranged). **Natural 1** misses. **Natural 6** hits.
>
> **Step 3 — Determine criticals:** Weapon triangle (attacker only), **Hammer** vs **Heavy Armor**, magic triangle, **Aim**, or firearms (crits vs all). Critical hits cannot be blocked except by a **Heavy Armor** critical success.
>
> **Step 4 — Roll defense:** Base **1 red + 1 blue** + bonus dice from **Mt/Sk** comparison. Roll **d6 + Mt ≥ 8** (red) or **d6 + Sk ≥ 8** (blue). Armor and shields **convert** failed defense dice into successes. *(See `equipment.md`.)*
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

> ### Apply Wounds
>
> Each unblocked hit inflicts **1 Wound**.
>
> - When a fighter reaches **0 Wounds**, they become **Downed**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **red dice only** (no blue).

> ### Casting Roll (2d6 + Wi)
>
> Roll **2d6 + Wi** against the spell's casting difficulty.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Mishap** — the spell fails and the spell's backlash occurs |
> | **Below difficulty** | The spell fizzles. The action is spent |
> | **Meets or exceeds difficulty** | The spell goes off. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |

> ### Primer Roll (2d6)
>
> Roll **2d6** against the firearm's loading difficulty. No stat is added.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Misfire** — see weapon notes |
> | **Below difficulty** | The gun fails to fire. The action is spent |
> | **Meets or exceeds difficulty** | The gun fires. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |

*(Full step-by-step rules: `combat.md`.)*

---

## Design Notes

- 2 actions per activation keeps the game moving without overly complex turn structures
- Retreat as a Sk check adds risk to disengaging — escape isn't guaranteed
- Spells being castable in melee prevents "safe zones" and keeps magic integrated with close-quarters fighting
- Aim adds +1 die of the weapon's dominant color and unlocks crits on natural 6s — it costs half an activation, so the tradeoff is tempo for precision. This is the only crit path for conventional ranged weapons (bows, crossbows); firearms crit inherently
- Brace as +1 red (Mt) defense die rewards tough fighters for hunkering down — Dwarves love it, Elves prefer other options
- Overwatch is listed as a formal action so players can see it alongside their other options during activation
- Underdog initiative (fewer fighters = go first) is a negative feedback loop that prevents snowballing — the losing player always gets to act first
- Starting initiative determines tied rounds without requiring a new dice-off every round
- No surge activations — Overwatch tokens handle activation imbalance without adding another subsystem
- Hide requires within 1" of terrain — simple, physical; cover is judged from the firing fighter (see special-rules.md)
- Hidden blocks targeting beyond 6" — close the distance or find another target
- Combat actions and Charge break Hidden, but movement doesn't — a fighter can reposition while staying concealed as long as they hug terrain
- Hide pairs naturally with Ranged Reactions: a fighter who gets shot at can react by Hiding (if within 1" of terrain), forcing the shooter to close the gap next time
