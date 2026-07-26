# The Turn

## Turn Structure

The game is played over a series of **rounds**. Each round follows this sequence:

### Activation Count

At the start of each round, count each player's **Active** and **Downed** fighters on the battlefield. This is that player's **activation count**. Do not count fighters who are **Stunned**, **Out of Action**, or **Escaped**.

Use activation count to determine initiative and **Pass tokens**. Do not recalculate either as the round progresses.

### 1. Start of Round

Determine initiative. During the first round, use the initiative determined during battle set-up. During each later round, the player with the lower **activation count** has initiative and activates first. If both players have the same activation count, the player who did not have initiative last round now has it.

After initiative is determined, that player gains **Pass tokens** equal to the shortfall. For example, if one player counts **5** and the other **3**, the player with **3** has initiative and gains **2 Pass tokens**.

### 2. Alternating Activations

Starting with the player who has initiative, players take turns activating **one fighter at a time**.

When a fighter activates, they may perform **2 actions** selected from the action list. Actions may be taken in any combination and in any order.

After a fighter's activation is complete, the other player activates one of their fighters, and so on.

When it is their turn to activate a fighter, a player with a **Pass token** may spend it to pass instead. They do not select or activate a fighter, and play passes to the opposing player. A player cannot spend a **Pass token** on two consecutive turns to activate; they must activate a fighter before passing again.

Only fighters who can activate may be selected. **Stunned**, **Out of Action**, and **Escaped** fighters cannot be selected.

If a **Stunned** fighter becomes **Active** during the round before their player has finished activating fighters, they may activate later this round with **1 action**. If they become **Downed** instead, they may activate later this round, but only to **Recover**. Do not recalculate initiative or **Pass tokens**.

### 3. End of Round

The round ends when every fighter who can activate has activated.

If one player has no fighters left to activate before the other, the remaining player **activates their remaining fighters normally**, one at a time.

At the end of the round, remove all unspent **Pass tokens**.

Begin a new round at Step 1.

## Ending the Battle

The battle ends immediately when only one retinue has fighters remaining on the battlefield, either due to all other fighters being taken Out of Action, or because the enemy Retinue fled the battlefield. The remaining retinue wins.

### Escape

When making a **Move** action, a fighter may leave the battlefield through any **battlefield edge** if they have enough movement to reach it. Remove the fighter from the battlefield. They have **Escaped** and cannot return during this battle.

An **Escaped** fighter is not **Out of Action** and does not roll on the Casualty Table after the battle.

### Morale

When a retinue's losses mount, fighters may break and flee.

Count fighters deployed at the start of the battle as the **starting count**. A fighter is **lost** if they are **Out of Action** or **Stunned**. **Active** and **Downed** fighters are not **lost**.

A fighter removed from the battle to fuel a summon is not **lost** if a replacement fighter is placed on the battlefield as part of that summon. If no replacement is placed, they count as **lost**. *(See summoning rules in [Traditions](traditions.md#traditions) and [Summoning](magic.md#summoning).)*

A retinue is **routing** when **more than half** of its starting fighters are **lost** — not when half are lost. For example, a retinue that deployed **5** fighters is **routing** when **3** are **lost**, not **2**; a retinue that deployed **4** is **routing** when **3** are **lost**, not **2**. Check whenever a fighter becomes **lost**; a retinue that starts to rout mid-round does not make fighters who have already activated this round test until their next activation.

While a retinue is **routing**, each fighter who is not **Broken** makes a **Will** check at the **start of their activation**, before taking actions:

- **Stunned** fighters do not test — they cannot act. If a **Stunned** fighter becomes **Active** or **Downed** before their player has finished activating fighters, they test at the start of their next full activation.
- Fighters with the **Summon** keyword auto-pass if **any** friendly fighter is within **6"** and line of sight. Otherwise, test normally.
- All other fighters on the battlefield make a **Will** check with these modifiers:
  - **+1** for each other friendly fighter within **6"** and line of sight
  - **+2** for a friendly **Leader** within **6"** and line of sight *(instead of **+1** for that fighter)*
  - **+1** if the fighter has **Fearless**

**Pass:** The fighter activates normally.

**Fail:** The fighter becomes **Broken** and resolves the **Broken** condition for this activation. If they do not **Escape**, they remain **Broken**.

A fighter with **Fearless** may still flee the battlefield — not because they are afraid or in a panic, but merely to find out what happened to the rest of the retinue, or due to boredom.

## Pass Tokens

Pass tokens compensate for numerical disadvantage by letting the player with fewer available fighters delay an activation.

> ### Pass Tokens
>
> **Start-of-round tokens:** At the start of the round, the player with the lower **activation count** receives **Pass tokens** equal to the shortfall. *(See [Activation Count](the-turn.md#activation-count).)*
>
> **Pass:** When it is their turn to activate a fighter, that player may spend **1 Pass token** instead. No fighter activates, and the opposing player takes the next activation.
>
> **No consecutive passes:** A player who spends a **Pass token** must activate a fighter on their next turn to activate. They cannot spend another **Pass token** until they do.
>
> **End of round:** Remove all unspent **Pass tokens**.

---
