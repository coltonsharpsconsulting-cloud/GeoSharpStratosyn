---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L28
week: 32
---
<span class="nl-eyebrow">geometry · lesson 28 · read before Session 1</span>
# Transformations: Translations, Reflections & Rotations

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a small triangle and tracing its image as each move comes up. Lesson 26 gave you shortcuts (HL, LL, HA, LA) to prove two EXISTING right triangles congruent. Lesson 27 asked when two triangles are similar. This week flips the question around: instead of comparing two triangles someone hands you, YOU move one — sliding, flipping, or turning it across the coordinate plane — and ask exactly what happens to its coordinates, and whether the shape that comes out the other side still counts as the same triangle.*

## The one big question

If you slide a figure, flip it over a line, or spin it around a point, its position on the page changes completely. What EXACTLY happens to its vertices' coordinates when you do — and does the figure that lands on the other side still count as congruent to the one you started with?

## Three moves, three coordinate rules

| Move | What it does | Coordinate rule |
|---|---|---|
| **Translation** | Slides every point the same distance, same direction | (x, y) → (x + h, y + k) |
| **Reflection over the x-axis** | Flips the figure over the x-axis — a mirror below | (x, y) → (x, −y) |
| **Reflection over the y-axis** | Flips the figure over the y-axis — a mirror to the side | (x, y) → (−x, y) |
| **Rotation 90° about the origin** | Turns the figure a quarter-turn (counterclockwise, unless stated otherwise) around (0, 0) | (x, y) → (−y, x) |
| **Rotation 180° about the origin** | Turns the figure a half-turn around (0, 0) | (x, y) → (−x, −y) |

Every rule above does the exact SAME thing to every vertex of the figure — that sameness is exactly what keeps the shape intact while only its position (and sometimes its orientation) changes.

## Pre-image, image, and the prime mark

The original figure is the **pre-image**. The figure after the move is the **image**. If the pre-image is triangle ABC, its image is triangle A′B′C′ — read "A prime, B prime, C prime." A′ is always the point that A landed on; the prime mark tracks correspondence the same way Lesson 23's "corresponding parts" did for congruent triangles.

## Translation: reading the direction from the wording

Math-U-See phrases a translation as "over ___ and ___ ___" — for example, "over +3 and down 5" means slide every point 3 right (+3 on x) and 5 down (−5 on y): (x, y) → (x + 3, y − 5). "Over −6" means 6 LEFT, not right — read the sign before you move a single point, and read "down" as subtracting from y even though the instruction never uses a minus sign out loud.

## Reflection: mirror over an axis

Reflecting over the **x-axis** keeps every x-coordinate the same and flips the sign of every y-coordinate — the figure flips to the opposite side of the x-axis, the way a reflection sits in a still pond. Reflecting over the **y-axis** does the opposite: y stays put, x flips sign. Either way, exactly one coordinate changes sign and the other stays put — that's the whole rule.

## Rotation: turning about a fixed point

A rotation about the origin turns every point through the same angle, the same direction, the same distance from (0, 0). At 90°, (x, y) → (−y, x); at 180°, (x, y) → (−x, −y) (Math-U-See also uses 270°, which is (x, y) → (y, −x) — a 90° turn the other way). Notice that 180° is really "reflect over the x-axis, then reflect over the y-axis" done in one single move — both coordinates flip sign at once.

## Why the image is always congruent — rigid motions

A translation, a reflection, and a rotation are each called a **rigid motion**, or **isometry** ("iso" = same, "metry" = measure) — a transformation that preserves every distance and every angle measure. Slide a 3-unit segment 4 right and 2 up, and it is STILL a 3-unit segment when it lands — the coordinate rule shifts both endpoints by the exact same amount, so the gap between them never changes. That is exactly why the image of a rigid motion is always **congruent** to the pre-image: same side lengths, same angle measures, just picked up and set back down somewhere else (and, for a reflection, mirror-flipped).

## Watch it work

Triangle ABC has vertices A(2, 1), B(6, 1), C(6, 4) — a 3-4-5 right triangle (AB = 4, BC = 3, CA = 5). Reflect it over the y-axis: A′(−2, 1), B′(−6, 1), C′(−6, 4). Measure A′B′: still exactly 4 units, same as AB — the flip moved the triangle into Quadrant II, but it never stretched or shrank it. Now instead rotate the ORIGINAL triangle 90° about the origin: A″(−1, 2), B″(−1, 6), C″(−4, 6), landing up in Quadrant II a different way — and A″B″, B″C″, C″A″ still come out 4, 3, and 5. Three very different landing spots, one unchanged triangle.

## Why this matters

A video game character sliding across the screen, a kaleidoscope's repeating mirror image, a ceiling fan's blades spaced out by rotation, a tiled floor's repeating pattern — every one of them is built from the same three moves this lesson names, applied over and over, with the shape never changing size along the way. This week you'll **build** a real cut-out shape's slide, flip, and turn on a grid (and tile a page with the same three moves, Escher-style), then **prove** why every one of those moves keeps the image congruent to where it started.

## Before Session 1
- Read this note once, sketching a small triangle and tracing its image after a translation, a reflection, and a rotation.
- Skim **Math-U-See Lesson 28** (the instruction manual / video), then you'll do **Lesson Practice 28A & 28B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we translate, reflect, and rotate figures on the coordinate plane and state each image's coordinates; in Session 2 (Build) you'll physically slide, flip, and turn a cut-out shape to check your predicted coordinates, then tile a page with the same three moves; in Session 3 (Prove) you'll defend why every rigid motion preserves congruence, review MUS Lesson Practice 28A/28B, and take the checkpoint.*
