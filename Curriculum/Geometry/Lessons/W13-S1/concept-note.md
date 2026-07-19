---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u02
lesson: L11
week: 13
---
<span class="nl-eyebrow">geometry · lesson 11 · read before Session 1</span>
# Polygons: Angles, Diagonals & Regular Polygons

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching each polygon as it comes up. Lesson 8 gave you the quadrilateral family and showed that any four-sided figure's angles sum to 360° because one diagonal splits it into two 180° triangles. Lesson 10 sorted triangles by their own sides and angles. This week — the first lesson of Unit 2 — you scale that same diagonal trick up to shapes with any number of sides at all, and meet the "regular" polygons that make it possible to name a single interior angle instead of just a total.*

## The one big question

A triangle's angles always sum to 180°. A quadrilateral's always sum to 360°. Is there one formula that predicts the angle sum for a polygon with ANY number of sides — a pentagon, a decagon, even a 100-gon — without measuring a single angle by hand?

## Naming polygons by their sides

A **polygon** is any closed, flat figure made of straight sides — you met the word back in Lesson 8. Every polygon is named by how many sides (and, always, the same number of angles) it has:

| Sides | Name | Sides | Name |
|---|---|---|---|
| 3 | Triangle | 8 | Octagon |
| 4 | Quadrilateral (a regular one is a **square**) | 9 | Nonagon |
| 5 | Pentagon | 10 | Decagon |
| 6 | Hexagon | 11 | Undecagon |
| 7 | Heptagon | 12 | Dodecagon |

Past twelve sides, don't hunt for a fancier Greek name — just say the number: a **15-gon**, a **20-gon**. The pattern (a number + "-gon") always works.

## Diagonals — and where the angle-sum formula comes from

A **diagonal** connects two vertices (corners) of a polygon that are NOT already joined by a side. From any ONE vertex, you can draw a diagonal to every other vertex except itself and its two immediate neighbors (you can't diagonal to a vertex a side already connects you to) — that's $n - 3$ diagonals from one vertex, for a polygon with $n$ sides.

Here's the payoff: those $n-3$ diagonals, drawn from one single vertex, slice the whole polygon into exactly $n-2$ triangles — no gaps, no overlaps, every one of the polygon's original angles covered exactly once. Lesson 8 showed you this for $n=4$: one diagonal, two triangles, $2 \times 180° = 360°$. Now generalize it:

$$\text{Interior angle sum} = (n-2) \times 180°$$

That single formula replaces "measure every angle and add" for a polygon of *any* size.

## Regular polygons — dividing the total evenly

A **regular polygon** has all sides congruent AND all angles congruent — a stop sign, a hex nut, a floor tile are everyday regular polygons. Because a regular polygon's angles are all equal, you can find any ONE interior angle by dividing the total evenly among the $n$ angles:

$$\text{Each interior angle (regular)} = \frac{(n-2)\times 180°}{n}$$

## Exterior angles — the number that never changes

At every vertex, the **exterior angle** is the angle between one side and the *extension* of the next side — it's what's left over from a straight 180° line after the interior angle takes its share: $\text{exterior} = 180° - \text{interior}$. Here's the surprising fact: no matter how many sides a convex polygon has, its exterior angles (one per vertex) always add up to exactly **360°** — a full turn. Walk all the way around any polygon's edge, turning by the exterior angle at each corner, and by the time you're back at your starting side you've turned through exactly one full circle.

For a *regular* polygon, that 360° splits evenly too:

$$\text{Each exterior angle (regular)} = \frac{360°}{n}$$

That gives you a shortcut in both directions: know $n$, find the exterior angle — or know the exterior angle, and find $n = 360° \div \text{exterior angle}$.

## Watch it work

**A regular hexagon (6 sides).** From one vertex: $6-3=3$ diagonals, splitting it into $6-2=4$ triangles. Interior sum: $4 \times 180° = 720°$. Each interior angle: $720° \div 6 = 120°$. Each exterior angle: $360° \div 6 = 60°$ — and $120° + 60° = 180°$, checking out exactly.

**A regular decagon (10 sides).** From one vertex: $10-3=7$ diagonals, splitting it into $10-2=8$ triangles. Interior sum: $8 \times 180° = 1440°$. Each interior angle: $1440° \div 10 = 144°$. Each exterior angle: $360° \div 10 = 36°$.

**Working backward.** A regular polygon has an exterior angle of exactly 40°. What is it? $n = 360° \div 40° = 9$ — a nonagon. You never had to see the shape to name it.

## Why this matters

Every stop sign, hex nut, soccer-ball panel, and tiled floor is a regular polygon someone had to cut to an exact angle before it could close up perfectly. This week you'll **build or hunt down** real regular polygons and test the formulas against a protractor, then **prove**, in words, why the diagonal-and-triangle trick always works and why the exterior angles never fail to total 360° — no matter the shape.

## Before Session 1
- Read this note once, sketching a pentagon, a hexagon, and an octagon, and drawing the diagonals from one vertex on each.
- Skim **Math-U-See Lesson 11** (the instruction manual / video), then you'll do **Lesson Practice 11A & 11B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we make polygon names, diagonals, and both angle-sum formulas precise, with a sim that adjusts a regular polygon from 3 to 12 sides; in Session 2 (Build) you'll hunt down or construct real regular polygons and verify their diagonal counts and angle sums; in Session 3 (Prove) you'll defend why the interior-angle formula and the 360°-exterior-angle rule both always hold, review MUS Lesson Practice 11A/11B, and take the checkpoint.*
