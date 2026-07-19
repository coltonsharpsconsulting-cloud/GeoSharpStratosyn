---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u01
lesson: L10
week: 11
---
<span class="nl-eyebrow">geometry · lesson 10 · read before Session 1</span>
# Classifying Triangles

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a triangle and marking it up as each idea comes up. Lesson 7 sorted angles by the lines that cross them; Lesson 8 named quadrilaterals by counting their sides; Lesson 9 measured the area inside them. This week we turn back to the simplest closed shape in the whole course — the triangle — and ask what its own three sides and three angles say about what kind of triangle it is.*

## The one big question

Two triangles can be wildly different sizes and still belong to the exact same "family." What is it about a triangle's own sides and angles that sorts it into a type — and why can't just any three lengths be forced into a triangle at all?

## Sorting by sides

| Name | Rule | Picture in your head |
|---|---|---|
| **Scalene** | No two sides congruent | every side a different length |
| **Isosceles** | At least two sides congruent | two sides match, one is different |
| **Equilateral** | All three sides congruent | every side matches |

Equilateral triangles technically also satisfy "at least two sides congruent" — but once all three match, we always reach for the more specific name, **equilateral**, not isosceles.

## Sorting by angles

| Name | Rule |
|---|---|
| **Acute** | All three angles measure less than 90° |
| **Right** | Exactly one angle measures 90° |
| **Obtuse** | Exactly one angle measures more than 90° |
| **Equiangular** | All three angles are congruent |

A triangle's three angles always add up to exactly **180°** — so it can only ever afford **one** angle that reaches 90° or higher. Spend 90°+ on a second angle and there isn't enough left in the 180° budget for the third angle to be a real, positive angle at all. That's why "right and obtuse" is never a real combination, and it's also why an equiangular triangle's three equal angles must each be exactly **60°** (180° ÷ 3).

## Naming a triangle both ways at once

Every triangle gets one label from the sides table and one label from the angles table. Some combinations are common; a few are flat-out impossible.

- **Isosceles right** — yes. Cut a square along its diagonal: two legs of equal length, one 90° angle. A 45°-45°-90° triangle.
- **Scalene right** — yes. The classic 3-4-5 triangle: three different side lengths, one 90° angle.
- **Equilateral** — always acute, in fact always equiangular (60°-60°-60°). It can never be right or obtuse.
- **Right obtuse** — impossible. One angle already spends 90°+ of the 180° total; a *second* angle over 90° would blow past the whole budget before the third angle is even counted.
- **Acute right** — impossible. "Right" means exactly one angle equals 90°; "acute" requires *every* angle to be under 90°. A triangle can't satisfy both at once.

## The triangle inequality

Not just any three lengths will close into a triangle. Try to build one from sides 5, 7, and 15: lay the 5 and the 7 down and swing them toward each other from opposite ends — together they only reach a span of 12, and 12 is shorter than the 15 you're trying to meet. They can never touch.

**Rule:** the two SHORTER sides of a triangle must add up to MORE than the longest side.

- 5 + 7 = 12 < 15 → **cannot** form a triangle.
- 8 + 9 = 17 > 11 → **can** form a triangle.

If the two shorter sides add up to *exactly* the longest side (no more), the "triangle" collapses flat into a straight line — not a triangle at all. That borderline case is exactly what you'll see on this week's sim if you drag one vertex too far toward the opposite side.

## A callback to the compass

Lesson 5 handed you a compass and a straightedge to bisect a segment or an angle without ever touching a ruler or protractor. That skill comes back this week for real construction: the classic way to build a perfect equilateral triangle uses nothing but a compass and a straightedge — draw one segment, then swing two circles of that same radius, one from each endpoint. Where the two circles cross is a third point exactly that same distance from both — the compass *guarantees* all three sides congruent before you ever pick up a ruler to check.

## Watch it work

Draw a triangle with sides 4, 4, and 4: equilateral. Check its angles with a protractor — every one comes out 60°, confirming equiangular = equilateral, exactly as the rule predicts.

Now hold two sides fixed at 4 and 4, and stretch the third side longer and longer. At length 7, it's still a real (very flat, very obtuse) isosceles triangle. Push the third side to exactly 8, and the two 4's can no longer reach past each other at all — the triangle flattens to nothing. That's the triangle inequality, *seen* instead of just stated.

## Why this matters

A roof truss, a slice of pizza, a bicycle frame's front triangle, the yield sign on the corner — every rigid triangular brace in the real world was built by someone who first asked "will these three lengths even close?" and then, once they did, asked what kind of triangle they'd get. This week you'll build several trios of lengths by hand to test exactly that, construct one triangle with nothing but a compass and straightedge, and finally defend in words why a triangle can never have two right angles and why 5, 7, and 15 will never be a triangle.

## Before Session 1
- Read this note once, sketching a scalene, an isosceles, and an equilateral triangle as they come up.
- Skim **Math-U-See Lesson 10** (the instruction manual / video), then you'll do **Lesson Practice 10A & 10B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we sort triangles by sides and by angles and test the triangle inequality; in Session 2 (Build) you'll build triangles from sticks of set lengths to discover which sets close and construct one triangle with a compass and straightedge; in Session 3 (Prove) you'll defend why a triangle can never have two right angles and why 5, 7, and 15 can't form a triangle, review MUS Lesson Practice 10A/10B, and take the checkpoint.*
