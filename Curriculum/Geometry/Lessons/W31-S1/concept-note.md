---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L27
week: 31
---
<span class="nl-eyebrow">geometry · lesson 27 · read before Session 1</span>
# Similar Triangles & AA Similarity

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a pair of triangles and marking them up as each idea comes up. Lessons 23–26 were all about SAME SIZE — congruent triangles, matched six-for-six, right down to the exact side lengths. This week flips that: "same shape" replaces "same size," and you'll discover that just TWO matching angles is enough to guarantee it.*

## The one big question

Someone hands you two triangles and tells you only this: two of their angles match, pair for pair. Nobody has measured a single side. Do you already know, before checking anything else, that every pair of corresponding sides shares the exact same ratio?

Yes. That's the whole lesson, and it's a much smaller ask than congruence ever was.

## What "similar" actually means

**Similar figures** have the same shape but not necessarily the same size — think of a photo and a poster made from it, or a model car and the real one. Similarity makes two separate promises, echoing (but relaxing) the congruence promise from Lesson 23:

| | Congruent (Lesson 23) | Similar (this week) |
|---|---|---|
| Corresponding angles | congruent | congruent |
| Corresponding sides | congruent (equal) | **proportional** (same ratio) |
| Notation | $\triangle ABC \cong \triangle DEF$ | $\triangle ABC \sim \triangle DEF$ |

Same table, same order-matters rule for the letters — 1st with 1st, 2nd with 2nd, 3rd with 3rd — just a looser promise on the sides. Congruent triangles are always similar (their ratio is exactly 1). Similar triangles are only sometimes congruent.

## The AA Similarity Postulate

**AA (Angle-Angle) Similarity Postulate:** if two angles of one triangle are congruent to two angles of another triangle, the two triangles are similar. That's it — no side ever needs to be checked.

Here's why two angles are always enough, and it's a direct callback to Lesson 10's angle-sum fact: a triangle's three angles always add up to exactly 180°. If two angles of $\triangle ABC$ already match two angles of $\triangle DEF$, the third angle of each is whatever's left over from 180° — and it's the *same* leftover both times, since the same two numbers were subtracted. The third pair of angles is **forced** to match. You never get to check just two angles and stop short by accident; the third one was never free to be different.

## Scale factor & proportions

The constant ratio between corresponding sides of similar figures is the **scale factor**. "Corresponding parts of similar figures are proportional" is the rule Math-U-See leans on constantly this lesson — write it as a proportion and cross-multiply to find a missing side:

$$\frac{AB}{DE} = \frac{BC}{EF} = \frac{CA}{FD} = k \text{ (the scale factor)}$$

Given three of those four numbers in one pair, solve the proportion for the fourth. If $\triangle ABC \sim \triangle DEF$ with $AB = 5$, $DE = 10$, and $BC = 7$: the scale factor is $10 \div 5 = 2$, so $EF = 7 \times 2 = 14$. Cross-multiplication works the same way even when the missing piece is the "smaller" one — divide instead of multiply.

## A preview: measuring what you can't reach

Because AA needs only two angles — not a single side — it hands you a superpower: you can find the height of something far too tall to measure directly, as long as you can set up a *second*, smaller similar triangle you CAN measure (a stick and its shadow, a sightline in a mirror). Both triangles share the same angles — the sun's angle, or the angle of reflection — so AA guarantees they're similar, and the proportion does the rest. That's exactly what Session 2's build is about.

## Watch it work

Two triangles share a 65° angle and a 50° angle. (Their third angles must both be $180° - 65° - 50° = 65°$... wait — check the arithmetic: $180 - 65 - 50 = 65$. Both triangles land on the same three angles, 65°-65°-50°, confirming AA all the way through, no surprises.) The first triangle has sides 5, 7, and 8 (opposite its three angles). The second, similar triangle has the side corresponding to 5 measuring 10 — a scale factor of $10 \div 5 = 2$. Every other side of the second triangle is exactly double the first: the side corresponding to 7 becomes 14, and the side corresponding to 8 becomes 16. Same shape, everything doubled.

## Why this matters

A cartographer scaling a map, a movie studio building a miniature set, and a surveyor who has never touched the top of a mountain all lean on the exact same fact: match two angles, and every side locks into one constant ratio. This week you'll **build** a real height measurement using nothing but a shadow (or a mirror) and a proportion, then **prove** in words why two angles are always enough and solve for missing sides under pressure.

## Before Session 1
- Read this note once, sketching two triangles that share two angle pairs and labeling the forced third pair.
- Skim **Math-U-See Lesson 27** (the instruction manual / video), then you'll do **Lesson Practice 27A & 27B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we define similar triangles, state the AA Similarity Postulate, and practice scale factor and proportions; in Session 2 (Build) you'll measure the height of a tall object indirectly using shadows or a mirror and similar triangles; in Session 3 (Prove) you'll defend why AA is enough, solve proportions for missing sides, review MUS Lesson Practice 27A/27B, and take the checkpoint.*
