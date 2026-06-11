# Shared Rule Snippets

**Designer reference only** — these blocks are copied verbatim into player-facing rules. When updating, search the repo for each heading and keep all copies identical.

---

## Apply Wounds

> ### Apply Wounds
>
> Each unblocked hit inflicts **1 Wound**.
>
> - When a fighter reaches **0 Wounds**, they become **Downed**.
> - An unblocked hit on a **Downed** fighter pushes them to **Stunned**.
> - An unblocked hit on a **Stunned** fighter pushes them to **Out of Action**.
>
> **Downed** fighters defend with their full pool. **Stunned** fighters defend with **red dice only** (no blue).

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
> **Step 4 — Roll defense:** Base **1 red + 1 blue** + bonus dice from **Mt/Sk** comparison. Roll **d6 + Mt ≥ 8** (red) or **d6 + Sk ≥ 8** (blue). Armor and shields **convert** failed defense dice into successes. *(See [Equipment](equipment.md).)*
>
> **Step 5 — Apply Wounds:** See **Apply Wounds** (below).

---

## Casting Roll

> ### Casting Roll (2d6 + Wi)
>
> Roll **2d6 + Wi** against the spell's **casting difficulty** (see spell profile).
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Mishap** — the spell fails and the spell's backlash occurs |
> | **Below difficulty** | The spell fizzles. The action is spent |
> | **Meets or exceeds difficulty** | The spell goes off. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |

---

## Primer Roll

> ### Primer Roll (2d6 + Sk)
>
> Roll **2d6 + Sk** against the weapon's **primer difficulty** (see weapon profile).
>
> Profile values assume a **Human** shooter (**Sk 3**). At other **Sk**, use **primer difficulty − 3 + Sk**.
>
> | Result | Effect |
> |---|---|
> | **Double 1s** | **Misfire** — see weapon notes |
> | **Below difficulty** | The gun fails to fire. The action is spent |
> | **Meets or exceeds difficulty** | The gun fires. Resolve the **Attack Sequence** |
> | **Double 6s** | **Overcharge** — all Strike Pool dice auto-succeed as hits; still roll for **natural 6** criticals |
