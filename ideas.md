# Ideas

Provisional concepts and unresolved design decisions — not yet approved, not
yet rules. This file exists so `decision-log.md` can stay a pure historical
record of decisions actually made, without also carrying open threads.

**Actionable work lives in `todo.md`.** This file holds provisional design
only — not duplicate checklists.

## How to use this file

- Add a new idea here when the user introduces a concept with language such
  as "I have an idea," "another idea," or "idea for a scenario." Preserve
  open questions instead of choosing an answer early.
- When an idea is implemented, remove it from here and capture the final
  decision in a new dated entry in `decision-log.md`.
- Update an idea's own entry as discussion develops, rather than letting
  stale framing accumulate.

---

**Campaign upkeep.** A possible future layer where retinues pay an ongoing Crown cost between battles — larger or more expensive retinues cost more to maintain. Skipped for now to keep the campaign economy simple; the Survival Roll and Casualty Table already create attrition pressure. Revisit if playtesting shows retinues accumulate Crowns too easily.

**Variable Presence ranges.** Explore replacing fixed target and charge reach with a fighter-facing **Presence** value measured in inches. Each ancestry would set a baseline **Presence** by size and silhouette: larger fighters project farther, smaller fighters project less, and effects such as **Hide** could reduce a fighter's **Presence**, potentially to **0"**. Weapons would have shorter printed ranges than they do now. A ranged attack would be able to target a fighter within the weapon's printed range plus the target's **Presence**. A **Charge** would be able to reach a target within the charging fighter's **Movement** + the charging fighter's **Presence** + the target's **Presence**.

Open questions:

- Is **Presence** printed on ancestry profiles, derived from base size, or granted by keywords such as **Large**?
- Does **Presence** replace or modify engagement range, or does it only affect targeting and **Charge** reach?
- How much should current weapon ranges shrink if target **Presence** extends practical reach?
- Which effects besides **Hide** can raise or lower **Presence**, and should any fighter be prevented from reducing it to **0"**?

**The Mask of Many Faces.** Explore an Infernal spell or Domain feat that lets a fighter replace an enemy fighter's position with their own. If written as a spell, the swap would happen when the spell is cast. If written as a feat, the fighter could use it during their activation, possibly once per battle or under another timing limit. The acting player would pick up their fighter and place them where an enemy fighter within a set range stood. The displaced enemy fighter would not go **Out of Action**; instead, they would be removed from the battlefield and placed by their controlling player within that player's deployment zone at the start of the next round, then activate normally when eligible.

Open questions:

- Is this an Infernal spell, an Infernal Domain feat, or a Cult/Diabolist-style identity rule?
- What is the range, and does the acting fighter need line of sight?
- Can it target **Leaders**, **Large** fighters, **Summon** fighters, or fighters within engagement range?
- Does the displaced fighter return at the start of the next round before initiative, after initiative, or before their first activation?
- Should the effect be once per battle, require a **Sanity** or **Will** check, or carry a Mishap/backlash if it fails?

**Sweeping attack (two-handed weapons).** Explore a **Sweep** or similar action for two-handed weapons that lets a fighter attack multiple enemies in one activation. One possible cost model: add **+1 Might** die per additional target beyond the first. The attack would still resolve through the normal **Attack Sequence**, but each target would be hit separately or as part of one declared sweep.

Open questions:

- Is this a weapon keyword, a two-handed weapon trait, or a general **Strike** option available only when wielding a two-handed weapon?
- How many targets can be included, and must they be within engagement range of the attacker, of each other, or of the weapon's arc?
- Does each target get its own attack roll, or does one roll apply to all targets with separate wound resolution?
- Is the **+1 Might** die per extra target the right cost, or should sweep trade **Skill**, impose disadvantage, or limit targets by **Might** or weapon type?
- Does sweep interact with **Overwatch**, **Riposte**, or other reactions per target or once for the whole action?

**Opposed-roll combat.** Explored replacing the sequential attack-then-defense resolution (attacker's **Attack Sequence**, then defender's **Might**/**Skill** defense pool) with a single opposed roll: both fighters roll their pools at once, and whichever side rolls more successes deals the difference in **Wounds** to the other. Discussed as an alternative during a 2026-07 playtest, but the current split-pool system was kept — it already feels distinct from the Kill Team / Trench Crusade opposed-roll pattern those games use, and the split resolution is what gives **Might** and **Skill** their separate identities in combat. Recorded here as a fallback direction in case the current combat loop needs to change later.

Open questions:

- Would **criticals** (natural 6s) still apply on the losing side's roll, or only the winning side's?
- Does this replace defense dice entirely, or do **armor** and **shields** still add dice to one side of the opposed roll?
- How would multi-**Wound** overkill and the **Downed**/**Stunned** thresholds map onto a single opposed differential instead of independently rolled wound counts?
- Would this still allow **Gang Up**, **Hurl**, and other Strike-Pool-modifying effects to slot in cleanly, or would they need separate rewrites?
