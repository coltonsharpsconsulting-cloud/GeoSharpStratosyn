---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u02
lesson: L18
week: 20
---
<span class="nl-eyebrow">geometry · lesson 18 · read before Session 1</span>
# The Pythagorean Theorem

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a right triangle and marking it up as each idea comes up. Lesson 15 found the volume of pyramids and cones. Lesson 16 wrapped solids in surface area. Lesson 17 handed you a toolkit for radicals — square roots you keep exact instead of rounding away. This week those two threads meet at the single most famous relationship in all of geometry: a rule that lets you find a missing side of a right triangle exactly, using the radicals Lesson 17 just gave you.*

## The one big question

If you know only two sides of a right triangle, is there an exact way — no ruler, no measuring tape — to find the third?

There is, and it has been known for well over two thousand years. It works every single time, on every right triangle that has ever existed, and it comes down to one short equation.

## Legs, hypotenuse & the theorem

| Term | What it means |
|---|---|
| **Right triangle** | a triangle with exactly one 90° angle |
| **Legs** ($a$, $b$) | the two sides that form the right angle |
| **Hypotenuse** ($c$) | the side *opposite* the right angle — always the **longest** side |

The **Pythagorean theorem**:
$$a^2 + b^2 = c^2$$

Square each leg, add the two results together, and you get the hypotenuse squared. It only works on a **right** triangle — the 90° angle is what makes the rule true.

## Finding a missing side

The theorem runs both directions:

- **Missing hypotenuse:** $c = \sqrt{a^2 + b^2}$ — square both legs, add, take the square root.
- **Missing leg:** $a = \sqrt{c^2 - b^2}$ — square the hypotenuse, subtract the known leg squared, take the square root.

Math-U-See's own routine for these problems: **estimate** the answer first (does it look about right?), **write the equation**, **solve** it, then **simplify the radical** if it isn't already a whole number.

## Keeping radicals honest (a callback to Lesson 17)

Not every hypotenuse comes out a whole number. Legs of 4 and 6 give $c = \sqrt{16 + 36} = \sqrt{52}$ — and $\sqrt{52}$ is **not** simplest form. Pull out the largest perfect-square factor, exactly the way Lesson 17 taught: $\sqrt{52} = \sqrt{4 \cdot 13} = 2\sqrt{13}$. Leave an answer as $\sqrt{52}$ on Lesson 18's practice and it's marked incomplete — the radical has to be simplified, not just extracted.

## The converse

The Pythagorean theorem also runs in reverse, as its **converse**: if three lengths $a$, $b$, $c$ (with $c$ the longest) satisfy $a^2 + b^2 = c^2$, the triangle they form **must** be a right triangle — even if you never swing a protractor to check. If the two shorter sides squared don't add up to the longest side squared, the triangle isn't right — no matter how close it looks on paper.

## Watch it work

**Finding a hypotenuse.** Legs 6 and 8: $c = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$. A whole number — no radical needed.

**Finding a leg, with a radical.** Hypotenuse 9, one leg 5: the other leg is $\sqrt{9^2 - 5^2} = \sqrt{81 - 25} = \sqrt{56} = \sqrt{4 \cdot 14} = 2\sqrt{14}$.

**Testing the converse.** Do 7, 24, and 25 form a right triangle? Check: $7^2 + 24^2 = 49 + 576 = 625$, and $25^2 = 625$. They match — it's a right triangle. Now try 6, 7, and 9: $6^2 + 7^2 = 36 + 49 = 85$, but $9^2 = 81$. They don't match — this triangle is *not* right, even though 6, 7, and 9 happily close into a real triangle (the triangle inequality doesn't care about right angles at all).

## Why this matters

Every ramp, ladder, roof pitch, and TV screen size quietly leans on this one equation. A contractor squares a foundation's corner by measuring 3 ft down one wall, 4 ft down the other, and checking the diagonal comes out to exactly 5 ft — the same 3-4-5 triangle you'll build with your own hands this week. This week you'll build that triangle, measure a real right angle to test the rule against reality, then defend in words why the theorem works at all and use its converse to spot a right triangle before you ever measure an angle.

## Before Session 1
- Read this note once, sketching a right triangle and labeling its legs and hypotenuse as they come up.
- Skim **Math-U-See Lesson 18** (the instruction manual / video), then you'll do **Lesson Practice 18A & 18B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we state and apply $a^2 + b^2 = c^2$ to find missing sides, keeping radicals simplified; in Session 2 (Build) you'll build a 3-4-5 triangle from string and confirm the right angle, then test the rule against a real right angle; in Session 3 (Prove) you'll defend why the theorem works and use its converse, review MUS Lesson Practice 18A/18B, and take the checkpoint.*
