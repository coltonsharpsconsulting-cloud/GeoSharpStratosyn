---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L29
week: 33
---
<span class="nl-eyebrow">geometry · lesson 29 · read before Session 1</span>
# Right-Triangle Trigonometry: Sine, Cosine & Tangent

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a right triangle and labeling it fresh each time a new idea comes up. Lesson 18 handed you the Pythagorean theorem for any right triangle. Lessons 20 and 21 handed you fixed ratios for two special right triangles — 45-45-90 and 30-60-90 — but only those two. This week the idea goes all the way: every acute angle in every right triangle, no matter its shape, carries its own fixed set of ratios. You just need a name for them.*

## The one big question

Given only one side length and one acute angle of a right triangle — with no way to put a ruler on the side you actually need — can you still find it exactly?

You can, and the tool is three ratios tied to the angle itself: **sine, cosine, and tangent**.

## Naming the sides, relative to an angle

Pick one of the two acute angles in a right triangle and call it $\theta$ (theta). Relative to $\theta$, the three sides get names:

| Term | What it means |
|---|---|
| **Hypotenuse** | the side opposite the right angle — always the longest side, and it never changes no matter which acute angle you pick |
| **Opposite side** | the leg directly across from $\theta$ — it doesn't touch $\theta$ |
| **Adjacent side** | the leg that touches $\theta$ — the other leg, the one that isn't the hypotenuse |

Switch to the *other* acute angle and opposite and adjacent trade places — only the hypotenuse stays fixed. That's why "opposite" and "adjacent" are always said *relative to* a specific angle, never on their own.

## SOH-CAH-TOA

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

The mnemonic carries the whole lesson: **S**ine = **O**pposite/**H**ypotenuse, **C**osine = **A**djacent/**H**ypotenuse, **T**angent = **O**pposite/**A**djacent.

Given all three side lengths of a right triangle, sin, cos, and tan are just fractions of two of those sides — reduce and simplify exactly like any fraction, the same way Math-U-See's Lesson Practice 29A and 29B ask for it.

## Why the ratios never change (a preview of Session 3)

Two right triangles that share the same acute angle $\theta$ are always similar — they're both right triangles with a matching acute angle, so by AA their third angles match too. Similar triangles have proportional sides, which means opposite/hypotenuse comes out to the *same number* whether the triangle is tiny or huge. That's the whole reason sin $\theta$, cos $\theta$, and tan $\theta$ can be tied to the angle alone — you'll defend this out loud in Session 3.

## Finding a missing side, using the ratios (and the calculator)

The other direction: given one side and an acute angle, set the ratio up as an equation and solve.

- **Sine gives an opposite side from a hypotenuse:** $\sin 62° = \dfrac{x}{20} \Rightarrow x = 20\sin 62°$.
- **Cosine gives an adjacent side from a hypotenuse:** $\cos 50° = \dfrac{15}{h} \Rightarrow h = \dfrac{15}{\cos 50°}$.
- **Tangent gives one leg from the other:** $\tan 35° = \dfrac{x}{12} \Rightarrow x = 12\tan 35°$.

For all three, punch the angle into a calculator's **sin, cos, or tan key — set to degree mode** — to get a decimal, then solve the little equation like any other. No calculator gives you an exact fraction back; it gives you a decimal, and that's expected here.

## Watch it work

**All three sides known.** Legs 6 and 8, hypotenuse 10. For the acute angle $\theta$ opposite the leg of 6: $\sin\theta = \frac{6}{10} = \frac{3}{5}$, $\cos\theta = \frac{8}{10} = \frac{4}{5}$, $\tan\theta = \frac{6}{8} = \frac{3}{4}$.

**One side and an angle known.** Hypotenuse 20, angle 35°: the side opposite 35° is $20\sin 35° \approx 20(0.5736) \approx 11.47$.

**The other direction.** Leg of 15 adjacent to a 50° angle, hypotenuse unknown: $h = \dfrac{15}{\cos 50°} \approx \dfrac{15}{0.6428} \approx 23.33$.

**A height you can't reach.** A ramp (the hypotenuse) is 40 ft long and meets the ground at 15°. The height off the ground is opposite that angle: $40\sin 15° \approx 10.35$ ft — found without ever touching the top of the ramp.

## Why this matters

Every time someone finds the height of a tree, a cliff, or a building without climbing it, they're standing on this exact idea: sight an angle, measure a distance you *can* reach, and let sine, cosine, or tangent hand you the distance you can't. This week you'll build (or use) a real clinometer to sight the angle of elevation to something tall and calculate its height, then defend in Session 3 *why* the ratios you used are guaranteed to work for that angle, on any triangle, every time.

## Before Session 1
- Read this note once, working the ramp example yourself with a pencil before checking it above.
- Skim **Math-U-See Lesson 29** (the instruction manual / video), then you'll do **Lesson Practice 29A & 29B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we define sin, cos, and tan and use them both directions — from sides to ratios, and from a ratio plus one side to a missing side; in Session 2 (Build) you'll build or use a clinometer to sight a real angle of elevation and calculate a real height you can't reach with a tape measure; in Session 3 (Prove) you'll reason from similar triangles about why the ratios depend only on the angle, review MUS Lesson Practice 29A/29B, and take the checkpoint.*
