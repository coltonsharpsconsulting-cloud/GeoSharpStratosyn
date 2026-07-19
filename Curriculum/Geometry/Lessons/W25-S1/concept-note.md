---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L21
week: 25
---
<span class="nl-eyebrow">geometry · lesson 21 · read before Session 1</span>
# Special Right Triangles: 30-60-90

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a 30-60-90 triangle and labeling it as each idea comes up. Lesson 20 gave you the 45-45-90 triangle, born from cutting a square in half along its diagonal. This week a different cut — an equilateral triangle sliced exactly in half — hands you a second special right triangle, with its own fixed, exact ratio of sides.*

## The one big question

If you know just **one** side of a 30-60-90 triangle, is there an exact way to find the other two — no protractor, no Pythagorean theorem from scratch, no guessing?

There is. Every 30-60-90 triangle, no matter how big or small, has its three sides locked into the *same* ratio. Learn that ratio once, and any single side unlocks the whole triangle.

## Anatomy of a 30-60-90 triangle

| Side | Opposite angle | What it is | Multiple of the short leg |
|---|---|---|---|
| **Short leg** | 30° | The smallest side — always the *shortest* of the three. | $\times\,1$ |
| **Long leg** | 60° | The middle-length side. | $\times\,\sqrt{3}$ |
| **Hypotenuse** | 90° | The longest side — always opposite the right angle. | $\times\,2$ |

Because those three lengths are always *different* from one another, a 30-60-90 triangle is also a **scalene** right triangle (Lesson 10's word) — even though its angles never change.

The ratio, all in one line:
$$\text{short leg} : \text{long leg} : \text{hypotenuse} \;=\; 1 : \sqrt{3} : 2$$

Read the table's last column as the whole lesson: **everything is measured against the short leg.** The hypotenuse is always exactly twice it. The long leg is always exactly $\sqrt{3}$ times it — never $\sqrt{2}$ (that ratio belongs to *last* week's 45-45-90 triangle, so keep the two straight).

## Finding the other two sides — three cases

Whichever one side you're handed, the other two follow immediately:

- **Given the short leg $s$:** long leg $= s\sqrt{3}$, hypotenuse $= 2s$.
- **Given the hypotenuse $h$:** short leg $= \dfrac{h}{2}$, then long leg $= \dfrac{h}{2}\sqrt{3}$ — *divide by 2, then multiply that answer by $\sqrt{3}$.*
- **Given the long leg $L$:** short leg $= \dfrac{L}{\sqrt{3}} = \dfrac{L\sqrt{3}}{3}$ (rationalize the denominator — Lesson 19's skill comes right back), then hypotenuse $= 2 \times$ that short leg.

Whatever you compute, keep radical answers in **simplest form**, exactly the standard Lesson 17 and Lesson 18 already set.

## Where the ratio comes from (a preview)

Split an **equilateral** triangle exactly in half — apex straight down to the midpoint of the base — and something remarkable happens: the altitude bisects the 60° apex angle into two 30° angles, and it meets the base at a perfect right angle. One half is a 30-60-90 triangle whose hypotenuse is the *original* equilateral side and whose short leg is *half* the original base. Run the Pythagorean theorem on that half-triangle and the long leg falls out as exactly $\sqrt{3}$ times the short leg — not an approximation, an identity. You'll build this cut with your own hands in Session 2, and prove it in words (with the algebra to back it up) in Session 3.

## Watch it work

**Given the short leg.** Short leg $= 5$: long leg $= 5\sqrt{3} \approx 8.66$, hypotenuse $= 10$.

**Given the long leg.** Long leg $= 6\sqrt{3}$: short leg $= \dfrac{6\sqrt{3}}{\sqrt{3}} = 6$, hypotenuse $= 2(6) = 12$.

**Given the hypotenuse.** Hypotenuse $= 14$: short leg $= \dfrac{14}{2} = 7$, long leg $= 7\sqrt{3} \approx 12.12$.

Notice the pattern never changes — only which side you started from does.

## Why this matters

A 30-60-90 triangle hides inside a ramp built at a clean 30° or 60° incline, a drafting set-square, a truss brace, and — most of all — inside every equilateral triangle you'll ever bisect. Carpenters, drafters, and engineers lean on this exact ratio constantly, because it turns "measure the third side" into "multiply or divide by $\sqrt{3}$ or 2." This week you'll **build** the equilateral-triangle cut (or test a real 30-60-90 tool) with your own hands, then **prove**, algebraically, why the ratio has to come out that way every single time.

## Before Session 1
- Read this note once, working the three "Watch it work" examples yourself with a pencil before checking them against the answers above.
- Skim **Math-U-See Lesson 21** (the instruction manual / video), then you'll do **Lesson Practice 21A & 21B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we name the short leg, long leg, and hypotenuse and use the 1:√3:2 ratio to find missing sides on a live sim; in Session 2 (Build) you'll cut an equilateral triangle exactly in half (or measure a real 30-60-90 set-square or ramp) and check the ratio against your own measurements; in Session 3 (Prove) you'll derive 1:√3:2 from the equilateral-triangle split using the Pythagorean theorem, review MUS Lesson Practice 21A/21B, and take the checkpoint.*
