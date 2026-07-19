---
cssclasses:
  - nl-doc
tags:
  - project-card
  - u01
lesson: L05
week: 6
session: 2
build: "Construction Lab — Perpendicular & Angle Bisectors"
---
<span class="nl-eyebrow">geometry · lesson 5 · build session</span>
# Construction Lab — Perpendicular & Angle Bisectors

*No ruler measuring, no protractor guessing. Two matched arcs from a compass and one straight line from a straightedge is all it takes to land exactly on a midpoint, or split an angle perfectly in half. When you can do it with your own hands, the construction stops being a diagram in a book and becomes something you can defend.*

**Time:** ~1 hour · **Deliverable:** one page showing both constructions — with your compass arcs left visible — and your ruler/protractor verification, photographed for your [[Records/Portfolio|Portfolio]].

## Materials
- A compass (a real drafting compass, not a stencil)
- A straightedge or ruler, and a sharp pencil
- A protractor
- Plain or blank paper (grid paper is fine too)
- *(Camera / phone for the portfolio photo)*

## Construction 1 — Perpendicular Bisector of a Segment
1. Using your straightedge, draw a segment about 4–6 inches long. Label its endpoints **A** and **B**.
2. Open your compass wider than half of $\overline{AB}$ — then **don't change the width** for the rest of this construction.
3. Point the compass on **A**. Swing one arc above the segment and one below it.
4. Keeping the same width, point the compass on **B**. Swing two more arcs, crossing the first pair — one above, one below.
5. Using your straightedge, draw a straight line through the two points where the arcs cross.
6. Label the point where that new line crosses $\overline{AB}$ as **M**. That line is the perpendicular bisector of $\overline{AB}$, and **M** is its midpoint.
7. **Leave every arc visible** — they're the proof you constructed the answer instead of guessing it.

## Construction 2 — Bisecting an Angle
1. Draw an angle $\angle XYZ$ (vertex **Y**) with your straightedge — any opening you like, as long as it isn't a straight line.
2. Point the compass on the vertex **Y**. Swing one arc that crosses **both** rays — label the two crossing points **G** and **H**.
3. Keeping your compass at one convenient width (more than half of $\overline{GH}$), point on **G** and swing an arc into the interior of the angle. Without changing the width, point on **H** and swing another arc into the interior, crossing the first.
4. Label where those two arcs cross as **W**. Using your straightedge, draw ray $\overrightarrow{YW}$.
5. Ray $\overrightarrow{YW}$ bisects $\angle XYZ$ — it splits the angle into two exactly equal halves, $\angle XYW$ and $\angle WYZ$.

## Verify — prove your arcs didn't lie
- **Segment check.** Measure $\overline{AM}$ and $\overline{MB}$ with your ruler. They should match. Then lay your protractor where the new line crosses $\overline{AB}$ — it should read almost exactly 90°.
- **Angle check.** Measure $\angle XYW$ and $\angle WYZ$ with your protractor. They should match, and together should add back up to your original $\angle XYZ$.

## CAD alternative (or extension)
If FreeCAD is set up, sketch a segment and add a **symmetric constraint** to force a point to sit exactly at its midpoint, then add a **perpendicular constraint** between a second line and the first — notice FreeCAD holds both conditions exactly no matter how you drag the segment. For the angle, sketch two lines from a shared point and add an **equal angle constraint** between the two halves. Export a screenshot of one constrained sketch for the portfolio. *(This is the same guarantee your compass arcs gave you by hand — CAD just enforces it by rule instead of by drawing.)*

## Safety
A compass point is sharp — keep it capped when you're not actively swinging an arc, and always point it away from your other hand. Press gently; don't force the hinge wide open.

## Turn in (rubric — 8 pts)
| Criterion | Pts |
|---|---|
| Segment AB drawn and labeled; compass arcs from both endpoints left visible | 1 |
| Perpendicular bisector correctly drawn through the two arc-crossings | 1 |
| Midpoint M labeled, and AM = MB confirmed by ruler | 2 |
| Protractor check at M reads at or near 90° | 1 |
| Angle XYZ drawn and labeled; compass arcs (from Y, then from G and H) left visible | 1 |
| Bisecting ray YW correctly drawn, with ∠XYW ≈ ∠WYZ confirmed by protractor | 2 |

Photograph your finished page — arcs and all — and drop it in the [[Records/Portfolio|Portfolio]]. In Session 3 you'll argue, out loud, why those arcs can never miss the midpoint — then take the checkpoint.
