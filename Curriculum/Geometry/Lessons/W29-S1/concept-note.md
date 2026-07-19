---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L25
week: 29
---
<span class="nl-eyebrow">geometry · lesson 25 · read before Session 1</span>
# Two-Column Proofs: ASA & AAS

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, redrawing each figure as it comes up. Lesson 24 gave you two ways to force a triangle: SSS (all three sides) and SAS (two sides and the angle between them). This week hands you two more — and this time, angles do most of the work.*

## The one big question

Lesson 23 taught you to name corresponding parts once two triangles are already known to be congruent. Lesson 24 showed that measuring **three sides**, or **two sides and the included angle**, is enough to force that congruence in the first place. Here's this week's question: if you only ever get to measure **one side** — and everything else you know is angles — is that still enough to pin down one exact triangle?

It is. Two angles of a triangle always force the third (angles sum to 180°, Lesson 10), so once you know two angles, you already know the triangle's *entire shape*. Add just one real length, and the *size* locks in too. Zero freedom left — one triangle, guaranteed.

## Two new postulates

| Postulate | What's given | The side's position |
|---|---|---|
| **ASA** (Angle-Side-Angle) | Two angles and the side **between** them | **Included side** — a side is included between two angles when it is a ray of *both* angles |
| **AAS** (Angle-Angle-Side) | Two angles and a side that is **not** between them | **Non-included side** — adjacent to only one of the two given angles, opposite the other |

Both postulates are stated exactly like SSS and SAS were: *if these parts of one triangle are congruent to the corresponding parts of another triangle, the triangles are congruent.* The only difference between ASA and AAS is **which side** you were handed — included, or not.

## Why AAS still works — it's ASA in disguise

This is the one idea that makes AAS feel less like a brand-new rule and more like a shortcut. Say you're given ∠A, ∠B, and side BC — and BC is *not* between ∠A and ∠B (it only touches ∠B). That looks like it should be too little information. But you already know a third fact for free: **∠C = 180° − ∠A − ∠B**, because every triangle's angles sum to 180°. Once you know ∠C, look again at side BC — it sits **between** ∠B and ∠C. Relabel which two angles you're "using," and the exact same triangle is now an ASA case. AAS never gives you anything ASA couldn't also give you; it's just handed to you with the "wrong" two angles named first. That's why AAS gets to be its own postulate instead of a special case you have to derive by hand every time — but it's worth seeing, once, that it collapses back into ASA.

## The proof toolkit, assembled

Every reason you'll write this week already has a name from an earlier lesson:
- **Given** — stated outright in the problem.
- **Vertical Angles Theorem** (Lesson 22) — the angles opposite each other at a crossing are congruent.
- **Reflexive Property** (Lesson 22) — a side or angle shared by both triangles is congruent to itself, with no extra justification needed.
- **Alternate Interior Angles Theorem** or **Corresponding Angles Postulate** (Lessons 7 & 22) — whenever the Given includes a pair of parallel lines cut by a transversal.
- **Definition of midpoint** or **definition of bisector** — whenever the Given says a point splits a segment, or a ray splits an angle, into two congruent halves.
- **ASA Postulate** or **AAS Postulate** — the *last* line of the proof, once all three needed parts are shown congruent.
- **CPCTC** ("Corresponding Parts of Congruent Triangles are Congruent") — once you've proven two triangles congruent, CPCTC lets you claim *any other* pair of their corresponding sides or angles is congruent too, for free.

## Watch it work

**An ASA proof.** Two segments, $\overline{AD}$ and $\overline{BE}$, cross at point $C$. You're given: $C$ is the midpoint of $\overline{AD}$, and $\overline{AB} \parallel \overline{DE}$. Prove: $\triangle ABC \cong \triangle DEC$.

| Statements | Reasons |
|---|---|
| 1. $C$ is the midpoint of $\overline{AD}$ | 1. Given |
| 2. $\overline{AC} \cong \overline{DC}$ | 2. Definition of midpoint |
| 3. $\overline{AB} \parallel \overline{DE}$ | 3. Given |
| 4. $\angle A \cong \angle D$ | 4. Alternate Interior Angles Theorem |
| 5. $\angle ACB \cong \angle DCE$ | 5. Vertical Angles Theorem |
| 6. $\triangle ABC \cong \triangle DEC$ | 6. **ASA Postulate** |

Check the order of parts in line 6: $\angle A$ (statement 4), the *included* side $\overline{AC}$ (statement 2, between $\angle A$ and $\angle ACB$), then $\angle ACB$ (statement 5) — angle, side, angle, exactly matching the postulate's name.

**An AAS proof.** In $\triangle ABC$ and $\triangle DEF$: $\angle A \cong \angle D$, $\angle B \cong \angle E$, and $\overline{BC} \cong \overline{EF}$. Prove: $\triangle ABC \cong \triangle DEF$.

| Statements | Reasons |
|---|---|
| 1. $\angle A \cong \angle D$ | 1. Given |
| 2. $\angle B \cong \angle E$ | 2. Given |
| 3. $\overline{BC} \cong \overline{EF}$ | 3. Given |
| 4. $\triangle ABC \cong \triangle DEF$ | 4. **AAS Postulate** |

Notice $\overline{BC}$ touches $\angle B$ but not $\angle A$ — it's opposite $\angle A$, not between $\angle A$ and $\angle B$. That's the non-included side that makes this an AAS case instead of ASA.

## Why this matters

A surveyor who can only stand in two spots and sight two angles — never able to walk the third side of a triangle across a river or a canyon — still walks away with the *exact* triangle, because ASA and AAS hand over the whole shape and size from partial information. That's the entire discipline of proof: state only what's given, add only reasons that already have a name, and let the postulate do the forcing. This week you'll **build** physical ASA and AAS triangles by hand to feel that rigidity, then **prove**, in full two-column form, why the triangles you built had no choice but to come out congruent.

## Before Session 1
- Read this note once, redrawing both worked proofs with a pencil, covering the Reasons column and trying to supply each one from memory.
- Skim **Math-U-See Lesson 25** (the instruction manual / video), then you'll do **Lesson Practice 25A & 25B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we define ASA and AAS, tell included from non-included sides, and complete two-column proofs on a live sim; in Session 2 (Build) you'll build physical ASA and AAS triangles from two angles and one side and test that they come out congruent, then build from angles alone (AAA) to see many sizes fit; in Session 3 (Prove) you'll write a full two-column proof using ASA or AAS as the final reason, review MUS Lesson Practice 25A/25B, and take the checkpoint.*
