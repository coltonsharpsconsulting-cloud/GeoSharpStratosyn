---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L20
week: 24
---
<span class="nl-eyebrow">geometry · lesson 20 · read before Session 1</span>
# Special Right Triangles: 45-45-90

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a right triangle with two equal legs as each idea comes up. Lesson 17 taught you to simplify radicals. Lesson 18 handed you the Pythagorean theorem for any right triangle. Lesson 19 taught you to rationalize a denominator — clear a radical out from underneath a fraction. This week all three threads meet in one shortcut: a right triangle whose two legs are exactly equal, where you can jump straight to the hypotenuse (or back to the leg) without ever writing out $a^2+b^2=c^2$ from scratch.*

## The one big question

If a right triangle's two legs are exactly equal, is there a single multiplication — not a full Pythagorean computation — that hands you the hypotenuse every time?

There is, and it works because the Pythagorean theorem simplifies dramatically the moment $a = b$.

## The 45-45-90 triangle

| Term | What it means |
|---|---|
| **45-45-90 triangle** | a right triangle whose two non-right angles both measure 45° |
| **Isosceles right triangle** | the same triangle, named for its two equal legs — since the angles opposite them are equal (45° = 45°), the sides opposite them must be equal too |
| **Leg** | either of the two congruent sides that meet at the 90° angle |
| **Hypotenuse** | the side opposite the right angle — always the longest side |

Because both legs are the same length, this triangle carries a fixed **ratio** of sides no matter how big or small it is drawn:
$$\text{leg} : \text{leg} : \text{hypotenuse} \;=\; 1 : 1 : \sqrt{2}$$

## The rule: hypotenuse = leg × √2

Start from the Pythagorean theorem and let both legs equal the same value, $s$:
$$s^2 + s^2 = c^2 \;\;\Rightarrow\;\; 2s^2 = c^2 \;\;\Rightarrow\;\; c = \sqrt{2s^2} = s\sqrt{2}$$

So the shortcut: **hypotenuse = leg × √2.** No separate squaring, adding, and rooting each time — one multiplication.

## Finding a missing side, both directions

- **Given a leg, find the hypotenuse:** multiply the leg by $\sqrt{2}$. Leg 7 → hypotenuse $7\sqrt{2}$.
- **Given the hypotenuse, find a leg:** divide the hypotenuse by $\sqrt{2}$ — then **rationalize the denominator**, exactly the way Lesson 19 taught, since a radical is never left on the bottom of a fraction:
$$\text{leg} = \frac{\text{hyp}}{\sqrt{2}} = \frac{\text{hyp}}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{\text{hyp}\sqrt{2}}{2}$$

Hypotenuse 10 → leg $= \dfrac{10\sqrt{2}}{2} = 5\sqrt{2}$. Leave it as $\dfrac{10}{\sqrt{2}}$ on Lesson 20's practice and it's marked incomplete — the denominator has to be rationalized, not just divided.

## When the radical vanishes (a callback to Lesson 17)

Sometimes a leg is *already* a radical. A leg of $3\sqrt{2}$ gives a hypotenuse of $(3\sqrt{2})(\sqrt{2}) = 3 \cdot 2 = 6$ — the radical disappears completely, because $\sqrt{2}\times\sqrt{2}=2$ exactly (the same identity Lesson 17 used to collapse $(2\sqrt{3})(2\sqrt{3})$ down to a whole number). Other times it doesn't vanish at all: a leg of $6\sqrt{3}$ gives a hypotenuse of $(6\sqrt{3})(\sqrt{2}) = 6\sqrt{6}$ — $\sqrt{6}$ has no perfect-square factor, so that's as simple as it gets.

## Watch it work

**Leg to hypotenuse.** Leg 5: hypotenuse $= 5\sqrt{2}$; the other leg is still 5 (legs are always congruent).

**A radical leg.** Leg $3\sqrt{2}$: hypotenuse $= (3\sqrt{2})(\sqrt{2}) = 6$ — a whole number, no radical left at all.

**Hypotenuse to leg, already a radical.** Hypotenuse $8\sqrt{2}$: leg $= \dfrac{8\sqrt{2}}{\sqrt{2}} = 8$.

**Hypotenuse to leg, rationalizing.** Hypotenuse 10 (no radical in sight): leg $= \dfrac{10}{\sqrt{2}} = \dfrac{10\sqrt{2}}{2} = 5\sqrt{2}$.

**A square's diagonal.** Square $ABCD$ with side 10 cm: the diagonal $\overline{BD}$ cuts the square into two 45-45-90 triangles with legs of 10 cm each, so $BD = 10\sqrt{2}$ cm. Run it backward: if the diagonal is 14 cm, each side is $\dfrac{14}{\sqrt{2}} = 7\sqrt{2}$ cm.

## Why this matters

Every square corner cut on the diagonal — a mitered picture frame, a cut floor tile, a carpenter's 45-45-90 set-square (sold as an actual drafting tool, alongside its 30-60-90 cousin) — is this exact triangle. Because the ratio never changes, a builder who knows one leg instantly knows the other two sides, no calculator required. This week you'll fold or measure a real 45-45-90 triangle — a square's diagonal or a set-square — and confirm hyp = leg√2 against something you can touch, then defend in words *why* the rule has to work, straight from the Pythagorean theorem.

## Before Session 1
- Read this note once, working the square-diagonal example yourself with a pencil before checking it above.
- Skim **Math-U-See Lesson 20** (the instruction manual / video), then you'll do **Lesson Practice 20A & 20B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we state and apply hyp = leg√2 in both directions, keeping radicals simplified and denominators rationalized; in Session 2 (Build) you'll fold a square along its diagonal and measure a real 45-45-90 set-square to confirm the rule against reality; in Session 3 (Prove) you'll derive hyp = leg√2 from the Pythagorean theorem, review MUS Lesson Practice 20A/20B, and take the checkpoint.*
