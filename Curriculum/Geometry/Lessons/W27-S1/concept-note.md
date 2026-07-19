---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L23
week: 27
---
<span class="nl-eyebrow">geometry · lesson 23 · read before Session 1</span>
# Congruent Triangles & Corresponding Parts

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, redrawing each pair of triangles as it comes up. Lesson 22 sorted your angle facts into "assumed" (postulates) and "proven" (theorems). This week hands you the shape those proofs will actually be ABOUT: two triangles, and the precise promise their congruence makes about every one of their parts.*

## The one big question

Someone hands you two triangles and says "these are congruent." What EXACTLY are they promising is true — about every side, every angle, all at once? And if they write it as $\triangle ABC \cong \triangle DEF$, does the ORDER of those six letters carry information you'd lose if you scrambled it?

## What "congruent triangles" actually means

Two triangles are **congruent** when they match in **every** respect: all three pairs of corresponding sides are congruent, AND all three pairs of corresponding angles are congruent. That is six separate matches, not one vague "same shape" feeling. Two triangles can look alike, or even have some matching sides, and still not be congruent — congruence is the full six-for-six guarantee.

## Congruence notation: the order IS the correspondence

We write congruence with the $\cong$ symbol: $\triangle ABC \cong \triangle DEF$. The letters aren't decoration — their **order** names the correspondence, position by position:

| Position | in $\triangle ABC$ | in $\triangle DEF$ | what it tells you |
|---|---|---|---|
| 1st | A | D | $\angle A \cong \angle D$ |
| 2nd | B | E | $\angle B \cong \angle E$ |
| 3rd | C | F | $\angle C \cong \angle F$ |

Read the letters **in order, left to right** — the 1st letter of one name always pairs with the 1st letter of the other, the 2nd with the 2nd, the 3rd with the 3rd. That single rule regenerates every corresponding side, too:

| Corresponding side (by its two endpoints) | Pairs with |
|---|---|
| $\overline{AB}$ (1st & 2nd letters) | $\overline{DE}$ |
| $\overline{BC}$ (2nd & 3rd letters) | $\overline{EF}$ |
| $\overline{CA}$ (3rd & 1st letters) | $\overline{FD}$ |

Six corresponding parts, three sides and three angles — and every single one of them comes straight out of reading $\triangle ABC \cong \triangle DEF$ in order.

## Why order matters more than the picture

Here is the trap: **the correspondence is decided by the letters' order in the name, not by where the points happen to sit on the page.** Draw $\triangle MNP$ with M upper-left, N upper-right, P at the bottom. Draw a second triangle the exact same size and shape, laid out the same way, but call it $\triangle QRS$ — Q upper-left, R upper-right, S at the bottom. If the statement is $\triangle MNP \cong \triangle QRS$, the "obvious" visual match (M with Q, N with R) happens to be correct, because the order 1st-2nd-3rd lines up with the layout.

Now change nothing about the picture and write the SAME two triangles as $\triangle MNP \cong \triangle RQS$ instead. Nothing moved — but now the 1st letter M pairs with R (drawn upper-*right*), and the 2nd letter N pairs with Q (drawn upper-*left*). The correspondence flipped left-right purely because two letters swapped positions in the name. This is exactly why you read a congruence statement letter-by-letter, in order, every time — never by eyeballing which point looks closest to which on the page.

Math-U-See leans on this constantly, including with triangles that **share a vertex or a whole side** — two triangles crossing in an X, or one triangle split by an inner segment into two smaller ones that share an edge. In those figures the visual trap is even stronger, because the two triangles overlap on the same points. The rule never changes: trust the stated order, not the drawing.

## CPCTC — the payoff

**CPCTC** stands for **C**orresponding **P**arts of **C**ongruent **T**riangles are **C**ongruent. Once you know — or have proven — that two triangles are congruent, CPCTC lets you claim that ANY one of the six corresponding pairs is congruent, even a pair nobody measured directly. If $\triangle ABC \cong \triangle DEF$ is given or already proven, you can conclude $\overline{BC} \cong \overline{EF}$, or $\angle C \cong \angle F$, on that fact alone — no separate measurement required.

This is the direction of the definition you'll use constantly starting next lesson: first you establish that two triangles are congruent (soon, with far less than six checks — Lesson 24 introduces shortcuts like SSS and SAS that need only three matching parts to guarantee all six), and then CPCTC hands you any remaining part you need, already congruent, for free.

## Watch it work

Given: $\triangle GHK \cong \triangle LNK$, sharing vertex K (picture two triangles crossing in an X, meeting at K in the middle). Reading the order: G↔L, H↔N, K↔K. So $\overline{GH}$ corresponds to $\overline{LN}$, $\angle H$ corresponds to $\angle N$, and — this is the subtle one MUS tests directly — if you relabel the *same* triangle starting from a different letter, say $\triangle HGK$ (just G and H swapped in the name), it now corresponds to $\triangle NLK$: apply the identical swap to the matching triangle's letters. The shape didn't change; only which letter you started reading from did, and the correspondence rule still applies term by term.

## Why this matters

Every two-column proof you write from Lesson 24 onward ends the exact same way: prove two triangles congruent, then reach for CPCTC to claim the ONE specific part the proof actually needed. Surveyors, machinists, and engineers use the same move in reverse-real life — confirm a handful of matching measurements, declare two triangular braces congruent, and then trust every other dimension matches without re-measuring it. This week you nail the vocabulary and the notation; next week you start proving congruence itself.

## Before Session 1
- Read this note once, redrawing $\triangle ABC \cong \triangle DEF$ and labeling all six corresponding parts from scratch.
- Skim **Math-U-See Lesson 23** (the instruction manual / video), then you'll do **Lesson Practice 23A & 23B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we define congruent triangles, decode congruence notation, and practice CPCTC; in Session 2 (Build) you'll cut out two congruent triangles and physically superimpose them to find every corresponding part by hand; in Session 3 (Prove) you'll defend why order matters and use CPCTC to conclude a pair of parts equal, review MUS Lesson Practice 23A/23B, and take the checkpoint.*
