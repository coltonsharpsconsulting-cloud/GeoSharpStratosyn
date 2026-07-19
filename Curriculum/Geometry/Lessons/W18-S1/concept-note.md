---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u02
lesson: L16
week: 18
---
<span class="nl-eyebrow">geometry · lesson 16 · read before Session 1</span>
# Surface Area of Solids

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching each solid as it comes up. Lesson 15 asked how much SPACE a solid holds inside — volume. This week flips outward: how much MATERIAL it takes to cover a solid's outside — its skin.*

## The one big question

Picture wrapping a gift box, or peeling the paper label off a soup can. Without unrolling or unfolding anything yet, what would you need to know to cut the material to *exactly* the right size — no more, no less, no gaps, no overlap?

## Anatomy of a net

| Term | What it is | On a cardboard box |
|---|---|---|
| **Face** | One flat (or curved-then-flattened) surface of the solid. | Each of the six cardboard panels. |
| **Net** | The pattern you get when you cut a solid along its edges and unfold it completely flat — every face keeps its true size and shape, just laid out side by side. | The box, cut open and pressed flat. |
| **Total surface area** | The sum of the areas of *every* face shown in the net. | Add up all six panels' areas. |
| **Lateral area** | The area of the *side* faces only — no top, no bottom. | The four side panels, not the top or bottom flaps. |

A **net** is the whole trick of this lesson. You cannot easily measure a 3-D solid's "outside" all at once — but unfold it flat, and every face becomes a plain 2-D shape you already know how to measure. Total surface area is nothing more than **adding up the areas in the net.**

## The one idea that carries everything: surface area = the sum of every face's area

Math-U-See states the master rule plainly: **the total surface area of a solid is the sum of the areas of all of its faces.** A net is simply that rule made visible — unfold the solid, and you can see and add every face separately.

- **Rectangular solid.** Its net is six rectangles in **three congruent pairs**: top & bottom ($l \cdot w$ each), front & back ($l \cdot h$ each), and two sides ($w \cdot h$ each). So $SA = 2lw + 2lh + 2wh = 2(lw + lh + wh)$.
- **Cylinder.** Its net is **two circles** (the top and bottom bases, each $\pi r^2$) plus **one rectangle** — the curved side, unrolled flat. That rectangle's width is the base's **circumference**, $2\pi r$, and its height is the cylinder's height, $h$. So $SA = 2\pi r^2 + 2\pi r h$.
- **Lateral area** is the side faces *alone*, with no bases counted: for a cylinder, lateral area $= 2\pi r h$. **Total surface area = lateral area + the area of the base(s).**

> **The one rule that never breaks:** find each face's true shape and area from the net, then add them all up. Nothing about surface area is new arithmetic — it's areas you already know, counted once each and summed.

## Why a net works — unfolding without stretching

Cut a solid along its edges and lay it flat, and nothing stretches, shrinks, or overlaps — every face shows up at its **true size**. A soup can's paper label, peeled off and laid flat, *is* the lateral rectangle: its width has to equal the circle's circumference, because the label wraps exactly once around the can with no gap and no overlap. That is the entire reason a cylinder's lateral area formula uses $2\pi r$ instead of the radius or the diameter alone.

## Watch it work

**Rectangular solid.** Length 8 cm, width 5 cm, height 6 cm → $SA = 2(8 \cdot 5 + 8 \cdot 6 + 5 \cdot 6) = 2(40 + 48 + 30) = 2(118) = 236\text{ cm}^2$.

**Cylinder.** Radius 4 ft, height 10 ft → two bases $= 2\pi(4)^2 = 32\pi$; unrolled rectangle $= 2\pi(4)(10) = 80\pi$; total $SA = 32\pi + 80\pi = 112\pi \approx 351.7\text{ ft}^2$.

## Lateral vs. total — the one trap

Same cylinder (radius 4 ft, height 10 ft), but now picture it **open at both ends**, like a length of pipe. That pipe only needs its curved side covered — the **lateral area**, $80\pi \approx 251.3\text{ ft}^2$. Seal both ends into a closed can, and you add the two circular bases ($32\pi \approx 100.6\text{ ft}^2$) back in for the **total** surface area, $112\pi \approx 351.7\text{ ft}^2$. Read every problem carefully: does it ask for the material to cover the *whole* solid, or just its sides?

## Why this matters

Wrapping paper for a gift, a label for a can, the sheet metal for a duct, the paint for a wall — every one of them is a real amount of *outside* material, and every one of them has an exact area whether or not anyone ever measures it. This week you'll **unfold** real boxes and cans into their nets and measure exactly how much material each one needs, then **prove**, in your own words, why a cylinder's curved side always unrolls into a rectangle of width $2\pi r$. Master nets and total surface area now, and Lesson 17's radicals — plus every right-triangle formula after them — build on the same habit of breaking a shape into pieces you can measure.

## Before Session 1
- Read this note once, sketching a rectangular solid and a cylinder and labeling their faces.
- Skim **Math-U-See Lesson 16** (the instruction manual / video), then you'll do **Lesson Practice 16A & 16B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we make total surface area and nets precise for both solids and explore them on the sim; in Session 2 (Build) you'll unfold real boxes and cans into their nets and measure exactly how much cardboard or label material each one needs; in Session 3 (Prove) you'll defend why a cylinder's lateral surface unrolls into a rectangle of width 2πr, review MUS Lesson Practice 16A/16B, and take the checkpoint.*
