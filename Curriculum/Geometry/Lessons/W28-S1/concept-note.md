---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L24
week: 28
---
<span class="nl-eyebrow">geometry · lesson 24 · read before Session 1</span>
# Two-Column Proofs: SSS & SAS

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, redrawing each proof figure as it comes up. Last week (Lesson 23) you learned what "congruent triangles" really promises: ALL six corresponding parts — three pairs of sides, three pairs of angles — match exactly. This week asks the practical question that follows: do you really have to check all six?*

## The one big question

You already know $\triangle ABC \cong \triangle DEF$ means six separate congruences are true at once. Checking six things every time you want to prove two triangles congruent is slow — and usually unnecessary. Is there a smaller set of matching parts that *forces* the other three to match too, whether you check them or not?

There is. This week gives you the first two shortcuts, and the formal write-up — the **two-column proof** — that lets you show your reasoning line by line, the same discipline Lesson 22 used to show vertical angles are congruent.

## Two postulates, three parts each

| Postulate | What must match | Picture it |
|---|---|---|
| **SSS** (Side-Side-Side) | All THREE pairs of corresponding sides | Build a triangle from three fixed rods — there is only one shape it can be |
| **SAS** (Side-Angle-Side) | TWO pairs of corresponding sides, AND the angle **between** them | Hinge two fixed rods at a fixed angle — the third side is forced |

Math-U-See states both as postulates — accepted outright, the same status as the Linear Pair Postulate from Lesson 22. Nobody proves SSS or SAS from something more basic; you accept that three matching sides (or two sides and their included angle) leave no room for a second, different triangle shape.

> **The word "included" is load-bearing.** In SAS, the angle MUST be the one **formed by** the two sides you're using — the angle *between* them, at their shared vertex. Two sides plus some OTHER angle (say, the angle at the far end) is a completely different situation, sometimes called SSA — and SSA does **not** guarantee congruence. You'll build that counterexample with your own hands in the Build session.

## The shape of a two-column proof

Every two-column proof has the same skeleton:
- A **Given** — the facts you're handed, stated as figure and measurement facts.
- A **Prove** — the congruence (or other fact) you're trying to establish.
- A **Statements** column and a **Reasons** column, built line by line, where every single statement has a reason sitting right next to it — Given, a definition, a property, or (on the last line) the postulate itself.

The **Reflexive Property** ($\overline{BD} \cong \overline{BD}$, or $\angle B \cong \angle B$) shows up constantly in these proofs — anytime two triangles share a side or an angle, that shared piece is congruent to itself, free, no measuring required.

## Watch it work

**An SSS proof.** *Given:* ABCD is a square. *Prove:* $\triangle ABD \cong \triangle CDB$.

| Statements | Reasons |
|---|---|
| ABCD is a square. | Given |
| $\overline{AB} \cong \overline{DC}$, $\overline{AD} \cong \overline{BC}$ | Definition of a square (all four sides congruent) |
| $\overline{BD} \cong \overline{BD}$ | Reflexive Property |
| $\triangle ABD \cong \triangle CDB$ | **SSS Postulate** |

Notice the diagonal $\overline{BD}$ is shared by both triangles — that's exactly where the Reflexive Property earns its keep.

**An SAS proof.** *Given:* $\overline{BD}$ bisects $\angle ABC$; $\overline{AB} \cong \overline{CB}$. *Prove:* $\triangle ABD \cong \triangle CBD$.

| Statements | Reasons |
|---|---|
| $\overline{BD}$ bisects $\angle ABC$ | Given |
| $\overline{AB} \cong \overline{CB}$ | Given |
| $\angle ABD \cong \angle CBD$ | Definition of an angle bisector |
| $\overline{BD} \cong \overline{BD}$ | Reflexive Property |
| $\triangle ABD \cong \triangle CBD$ | **SAS Postulate** |

Read the order carefully: the two given sides ($\overline{AB}$, $\overline{CB}$) sandwich the angle ($\angle ABD \cong \angle CBD$) that sits *between* them at vertex B — that's what makes this SAS and not some other pattern.

## Why this matters

A two-column proof is nothing more than an argument with its receipts attached — every claim has to cite exactly why it's true, the same discipline Lesson 22 introduced for postulates and theorems. This week you'll first watch full SSS and SAS proofs built line by line, then **build** physical triangles from fixed-length straws to feel — in your hands — why three sides (or two sides and their included angle) lock a triangle into one shape while two sides and the WRONG angle do not. Finally you'll **prove** it: write a complete two-column proof of your own, review Math-U-See's Lesson Practice 24A/24B, and pass the checkpoint.

## Before Session 1
- Read this note once, redrawing the square proof and the bisector proof by hand, statement by statement.
- Skim **Math-U-See Lesson 24** (the instruction manual / video), then you'll do **Lesson Practice 24A & 24B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we define the SSS and SAS postulates and the shape of a two-column proof; in Session 2 (Build) you'll build straw triangles to feel SSS and SAS rigidity — and test why SSA is ambiguous; in Session 3 (Prove) you'll write a full two-column proof, review MUS Lesson Practice 24A/24B, and take the checkpoint.*
