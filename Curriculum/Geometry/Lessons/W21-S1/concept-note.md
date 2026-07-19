---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u02
lesson: L19
week: 21
---
<span class="nl-eyebrow">geometry · lesson 19 · read before Session 1</span>
# Rationalizing Denominators

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, working the fractions yourself as each example comes up. Lesson 17 taught you to simplify a radical. Lesson 18 handed you the Pythagorean theorem, which loves to produce radicals as answers. This week fixes one specific mess those two lessons keep leaving behind: a radical stuck in the BOTTOM of a fraction — and the very next lesson (special right triangles) is about to hand you fractions like $\frac{10}{\sqrt2}$ constantly, so this skill has to be automatic by Session 3.*

## The one big question

A calculator says $\dfrac{1}{\sqrt2} \approx 0.7071...$, and $\dfrac{\sqrt2}{2} \approx 0.7071...$ — the *same* decimal. Coincidence? No: they're the exact same number, just written two different ways. Math-U-See (and every math class after it) insists on the second form and never accepts the first as a final answer. Why does a radical in the denominator have to go, and how do you get rid of it without changing the value at all?

## Rationalize — multiply by a clever form of 1

| Word | What it means |
|---|---|
| **Rationalize the denominator** | Rewrite a fraction so the denominator is a whole number — no radical sign left on the bottom. |
| **Radicand** | The number sitting under the radical sign. |
| **Conjugate** | A two-term expression's "partner" with the middle sign flipped, e.g. the conjugate of $1+\sqrt2$ is $1-\sqrt2$ — used later when a denominator has TWO terms instead of one. |

The rule: multiply the numerator **and** denominator by the same radical that's sitting in the denominator. Since $\dfrac{\sqrt{n}}{\sqrt{n}} = 1$, you are only ever multiplying by 1 — the value of the fraction never changes, only the way it's *written*. And the radical always disappears from the bottom, because $\sqrt{n}\times\sqrt{n}=n$, a whole number, every time:

$$\frac{1}{\sqrt2} = \frac{1}{\sqrt2}\times\frac{\sqrt2}{\sqrt2} = \frac{\sqrt2}{2} \qquad\qquad \frac{3}{\sqrt5} = \frac{3}{\sqrt5}\times\frac{\sqrt5}{\sqrt5} = \frac{3\sqrt5}{5}$$

Two more, straight from this week's Math-U-See practice:

$$\frac{9}{\sqrt2} = \frac{9\sqrt2}{2} \qquad\qquad \frac{10}{\sqrt5} = \frac{10\sqrt5}{5} = 2\sqrt5$$

Notice that last one: $\dfrac{10\sqrt5}{5}$ still had a common factor (5) between the whole-number top and bottom, so it reduced all the way down to $2\sqrt5$ — no fraction left at all. **Always check whether the resulting numbers reduce.**

## When the radicand itself needs simplifying too

Sometimes rationalizing isn't the last step — the radicand you're left with might STILL have a perfect-square factor hiding in it (Lesson 17's skill, right back again):

$$\frac{3}{\sqrt8} = \frac{3\sqrt8}{8} = \frac{3\times2\sqrt2}{8} = \frac{6\sqrt2}{8} = \frac{3\sqrt2}{4}$$

$\sqrt8$ simplifies to $2\sqrt2$ first; only then does the top-and-bottom fraction reduce ($6$ and $8$ share a factor of 2). Skip that check and you'll turn in a "correct" fraction that isn't in simplest form.

## Adding and subtracting — rationalize FIRST, common denominator SECOND

You cannot add two fractions that still have radicals in their denominators — just like you can't add ordinary fractions without a common denominator first. Math-U-See's own rule, word for word: *radicals should not be left in the denominator; find the common denominator before adding.* So the order matters:

1. Rationalize **each** fraction separately.
2. **Then** find the common denominator and combine.

$$\frac{3}{\sqrt2} + \frac{5}{\sqrt8} = \frac{3\sqrt2}{2} + \frac{5\sqrt2}{4} = \frac{6\sqrt2}{4} + \frac{5\sqrt2}{4} = \frac{11\sqrt2}{4}$$

Both terms rationalize down to the *same* radicand (2), which is what makes combining them possible at all — exactly the "like radicals" test from Lesson 17, just wearing a fraction now.

## A preview: conjugates (not tested this week)

Every example above has just ONE term under the radical in the denominator. Later work sometimes hands you a denominator with two terms added or subtracted, like $\dfrac{1}{1+\sqrt2}$. Multiplying by $\dfrac{\sqrt2}{\sqrt2}$ wouldn't clear that denominator — instead you multiply by the **conjugate**, $\dfrac{1-\sqrt2}{1-\sqrt2}$, because $(1+\sqrt2)(1-\sqrt2) = 1 - 2 = -1$, a whole number. Same idea (multiply by a form of 1 to force the radical out), different partner. File this away; Math-U-See's Lesson 19 practice sticks to single-radical denominators.

## Why this matters

Lesson 20, starting next week, is about to hand you 45-45-90 triangles where a LEG is found by dividing the hypotenuse by $\sqrt2$ — a fraction with a radical denominator, every single time. Without this lesson, an exact leg length like $\dfrac{10}{\sqrt2}$ sits unfinished. With it, you rationalize on the spot: $\dfrac{10}{\sqrt2} = \dfrac{10\sqrt2}{2} = 5\sqrt2$ — a clean, exact answer ready to report. A carpenter, an architect, a surveyor — none of them can hand over "10 over root 2" as a final measurement; this lesson is the last algebra step standing between a raw calculation and a reportable exact answer.

## Before Session 1
- Read this note once, rationalizing $\dfrac{1}{\sqrt3}$ and $\dfrac{6}{\sqrt2}$ yourself with a pencil before you check the worked examples above.
- Skim **Math-U-See Lesson 19** (the instruction manual / video), then you'll do **Lesson Practice 19A & 19B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we rationalize single-radical denominators, simplify the leftover radicand, and combine two rationalized fractions, with a sim that walks the multiply-by-√n/√n step live; in Session 2 (Build) you'll card-sort un-rationalized fractions to their clean forms and measure why 1/√2 and √2/2 land on the exact same mark; in Session 3 (Prove) you'll defend why multiplying by √n/√n is legal and always clears the denominator, review MUS Lesson Practice 19A/19B, and take the checkpoint.*
