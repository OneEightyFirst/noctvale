# Companions

**Companions** are animals and familiars fielded by a **Handler** — the fighter
who has **Animal Handling** and bought the **Companion** on their roster entry.

Companions do **not** count toward retinue size or **activation count**. They
do **not** use weapon slots.

Purchase: [Gear — Companions](gear.md#companions). Profiles: below. Feat:
[Feats — Animal Handling](feats.md#animal-handling).

---

## Roster and deployment

- A fighter must have **Animal Handling** to field a **Companion**.
- Each **Handler** may field **one** **Companion**, recorded on that fighter's
  roster entry.
- Deploy the **Companion** within **1"** of its **Handler** during deployment.

---

## Stats — Tamed

Companions with **Tamed** use their **Handler**'s **M**, **Wi**, and **Sa**
instead of the profile values for those stats.

All other stats use the profile. **Mt**, **Sk**, **CC**, and **RC** are never
copied from the **Handler**.

---

## Wound states

Companions do **not** use **Downed** or **Stunned**.

> ### Apply Wounds (Companion)
>
> Each unblocked hit inflicts **1 Wound**.
>
> When a **Companion** reaches **0 Wounds**, it is **Out of Action** and is
> removed from the battle. Any effect that would **Down** or **Stun** a fighter
> removes the **Companion** from the battle instead.

Companions are never removed permanently — see [Companion
Recovery](../campaign/post-game.md#companion-recovery).

---

## Activation

When a **Handler** activates:

1. **Co-movement** — Whenever the **Handler** completes a **Move**, **Charge**,
   **Scramble**, **Climb**, **Jump**, or **Retreat** action, the **Companion**
   co-moves. After co-movement, the **Companion** must be within **tether** of
   the **Handler**. Move the **Companion** up to its **M** if needed to satisfy
   **tether**.
2. **Companion action** — After the **Handler** finishes their activation, the
   **Companion** performs **1 action** if it is not **Out of Action** and is
   within **tether** of the **Handler**.

The **Handler**'s **2 actions** are spent normally. The **Companion** action is
additional and does not cost the **Handler** any actions.

If the **Handler** skips their activation for **Overwatch**, the **Companion**
does not co-move and does not take a **Companion** action.

While the **Handler** is **Stunned** or **Out of Action**, their **Companion**
does not activate.

While the **Handler** is **Downed**, the **Companion** does not co-move and does
not take a **Companion** action.

---

## Tether

Each profile lists a **tether** distance. A **Companion** must stay within
**tether** of its **Handler** to act. Measure base to base.

---

## Sphere of Influence

Some **Companions** project a **Sphere of Influence** — the same term used for
**Relic** and **Instrument** gear (see [Gear — Sphere of
Influence](gear.md#sphere-of-influence)).

While the **Companion** is **Active** and not **Out of Action**, its **Handler**
gains the bubble effect if they are **within 6"** of the **Companion** (base to
base):

| Retinue **Domain** | Effect |
|---|---|
| **Nature** or **Mortal** | **+1 Sa** |
| **Arcane** | **+1 Wi** |

The **Handler** must have **Animal Handling** and field that **Companion**. The
bubble affects the **Handler** only — not other friendly fighters. It does not
require line of sight.

---

## Companion profiles

### Hound

| CC | RC | Mt | Sk | Wi | Sa | W | Tether |
|---|---|---|---|---|---|---|---|
| 3 | — | 3 | 3 | *(Tamed)* | *(Tamed)* | 1 | **3"** |

**M** *(Tamed)*

**Bite** — **Melee** attack using profile **Mt** / **Sk** (no weapon).

**Keywords:** **Tamed**

---

### Hawk

| CC | RC | Mt | Sk | Wi | Sa | W | Tether |
|---|---|---|---|---|---|---|---|
| 2 | 2 | 1 | 4 | *(Tamed)* | *(Tamed)* | 1 | **12"** |

**M** *(Tamed)*

**Fly** — Ignore vertical distance for **Move** and **Jump**; the **Companion**
must still end on a legal surface.

**Talons** — **Ranged** attack, range **6"**, **1 Mt / 2 Sk** Strike Pool.

**Scout's Eye** — If this **Companion** has **line of sight** to an enemy
fighter, its **Handler** counts as having **line of sight** to that enemy for
**Ranged**, **Cast**, and **Aim**.

**Sphere of Influence** — See [Sphere of Influence](#sphere-of-influence).

**Keywords:** **Tamed**, **Fly**

---

### Cat

| CC | RC | Mt | Sk | Wi | Sa | W | Tether |
|---|---|---|---|---|---|---|---|
| 2 | — | — | 4 | *(Tamed)* | *(Tamed)* | 1 | **6"** |

**M** *(Tamed)*

No attack.

**Interact** — May spend its **Companion** action on **Interact** if within **1"**
of the scenario object.

**Sphere of Influence** — See [Sphere of Influence](#sphere-of-influence).

**Keywords:** **Tamed**

---

### Giant Rat

| CC | RC | Mt | Sk | Wi | Sa | W | Tether |
|---|---|---|---|---|---|---|---|
| 2 | — | 2 | 4 | *(Tamed)* | *(Tamed)* | 1 | **3"** |

**M** *(Tamed)*

**Bite** — **Melee** attack using profile **Mt** / **Sk**. Unblocked hits
inflict **Poisoned** in addition to normal wounds — see [Conditions —
Poisoned](conditions.md#poisoned).

**Hide** — May use **Hide** as its **Companion** action.

**Keywords:** **Tamed**

---

### Rat Swarm

| CC | RC | Mt | Sk | Wi | Sa | W | Tether |
|---|---|---|---|---|---|---|---|
| 3 | — | 2 | 5 | *(Tamed)* | *(Tamed)* | 1 | **3"** |

**M** *(Tamed)*

**Natural weapons** — **Melee** attack using profile **Mt** / **Sk**.

Not the same as **Summon Swarm** — that spell places a temporary **Swarm**;
this **Companion** is roster gear tied to a **Handler**.

**Keywords:** **Tamed**

---

## Design Notes

- Co-movement keeps **Companions** within **tether** when the **Handler** moves
  — no second activation slot.
- **Out of Action** only — no **Downed**/**Stunned** loop on 1-Wound profiles.
- Campaign recovery keeps **Companions** cheap to run and never permanently lost.
