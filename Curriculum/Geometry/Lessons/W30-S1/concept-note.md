---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u03
lesson: L26
week: 30
---
<span class="nl-eyebrow">geometry · lesson 26 · read before Session 1</span>
# Right-Triangle Congruence: HL, LL, HA, LA

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, sketching a right triangle and marking up each shortcut as it comes up. Lesson 23 gave you the vocabulary of corresponding parts and CPCTC. Lesson 24 handed you SSS and SAS as two-column proof tools. Lesson 25 added ASA and AAS. This week adds four more shortcuts — but these four work ONLY on right triangles, because a right triangle already hands you one congruent angle for free.*

## The one big question

Every right triangle already guarantees one pair of angles congruent before you measure anything — both right angles are exactly 90°. If that angle is always a freebie, do you really need three matching parts to prove two right triangles congruent, or does the free angle let you get away with just two?

It lets you get away with two. That's the entire lesson.

## Four shortcuts, one free angle

| Postulate | You're given | Really just… |
|---|---|---|
| **HL** (Hypotenuse-Leg) | hypotenuse ≅ hypotenuse, one leg ≅ one leg | SSS — the Pythagorean theorem forces the third leg to match too |
| **LL** (Leg-Leg) | both legs ≅ both legs | SAS — the right angle is always the angle *included* between the two legs |
| **HA** (Hypotenuse-Angle) | hypotenuse ≅ hypotenuse, one acute angle ≅ one acute angle | AAS — right angle + given angle are your two angles; the hypotenuse isn't between them |
| **LA** (Leg-Angle) | one leg ≅ one leg, one acute angle ≅ one acute angle | ASA or AAS, depending on whether the leg sits between the two angles or opposite the angle |

Math-U-See lists these four right-triangle postulates right alongside SSS, SAS, ASA, and AAS (see Systematic Review 26E, #11–18) — because that's exactly what they are: the same four ideas, wearing right-triangle clothes.

## Why HL works — the Pythagorean escape hatch

Here's the thing about Side-Side-Angle in general: it is **not** a valid congruence shortcut. Two sides and a non-included angle can lock onto two different triangles (the "ambiguous case") — SSA is deliberately left off every general list of postulates. So why does HL — hypotenuse, leg, and the angle between them being 90° — get to work?

Because the angle isn't just *any* angle. It's a **right** angle, and a right angle plus two of the three sides removes all the ambiguity. If a right triangle's hypotenuse is $c$ and one leg is $a$, the Pythagorean theorem pins the other leg to exactly one positive value: $b = \sqrt{c^2 - a^2}$. There's no second possibility to worry about. Match the hypotenuse and one leg, and the third leg is **forced** to match too — which means you actually have all three sides congruent. HL isn't a new kind of logic at all; it's SSS, with the third side computed for you instead of handed to you.

## LL, HA, LA — instant translations

- **LL = SAS.** The right angle always sits *between* the two legs — leg, included angle, leg. Matching both legs (with that free right angle between them) is exactly Side-Angle-Side.
- **HA = AAS.** The right angle and the given acute angle are your two angles. The hypotenuse sits *opposite* the right angle — it is not the side between the two named angles — so this is Angle-Angle-Side, not Angle-Side-Angle.
- **LA = ASA or AAS.** It depends on which leg you're given. If the leg sits *between* the right angle and the given acute angle, you have angle, included side, angle — ASA. If the leg sits *opposite* the given acute angle instead, the side is no longer included — that's AAS. Either way, one leg plus one acute angle is always enough.

## Watch it work

**HL, with numbers.** Right triangle 1 has a hypotenuse of 10 and one leg of 6. Right triangle 2, right-angled the same way, also has a hypotenuse of 10 and a leg of 6. Are they congruent? Check the Pythagorean theorem on each: the missing leg is $\sqrt{10^2-6^2}=\sqrt{64}=8$ — for *both* triangles, because the same two numbers went in. All three sides now match (6, 8, 10 in each), so by SSS — reached here through HL — the triangles are congruent.

**LL, with numbers.** Right triangle 1 has legs 5 and 12. Right triangle 2 has legs 5 and 12, right-angled the same way. The right angle is already congruent (both are 90°) and it's included between the matching legs — SAS closes the proof without anyone computing the hypotenuse at all (though it will come out to 13 in both, if you check).

**HA, with numbers.** Right triangle 1 has a hypotenuse of 13 and a 30° acute angle. Right triangle 2 matches both. Two angles (90° and 30°) plus the hypotenuse, which is not between them — AAS. The legs are forced to match too: $13\sin(30°)=6.5$ and $13\cos(30°)\approx 11.26$ in both triangles.

**LA, with numbers.** Right triangle 1 has a leg of 7 *adjacent to* a 50° acute angle. Right triangle 2 matches both, with the leg in the same adjacent position. That leg sits between the right angle and the 50° angle — ASA.

## The proof format doesn't change

A two-column HL/LL/HA/LA proof looks exactly like the SSS/SAS/ASA/AAS proofs from Lessons 24 and 25 — Statements on the left, Reasons on the right. The only difference is which name goes in that last "…≅…, by ___" line, and you'll often see "Pythagorean theorem" or "definition of a right angle" earn its own line along the way, just like "def. of perpendicular" showed up constantly in this week's Math-U-See proofs.

## Why this matters

A framer squaring a stack of identical roof trusses doesn't re-measure every side of every triangle — checking that the hypotenuse and one leg match on two trusses (HL) is enough to guarantee the whole shape is identical, because the right angle already does half the work for free. This week you'll **build** right triangles by fixing a hypotenuse-and-leg pair (and the other pairings) to feel why matching just two parts is enough, then **prove** two right triangles congruent by HL, LL, HA, or LA in a formal two-column proof.

## Before Session 1
- Read this note once, sketching a right triangle and marking which two parts each shortcut hands you.
- Skim **Math-U-See Lesson 26** (the instruction manual / video), then you'll do **Lesson Practice 26A & 26B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we define HL, LL, HA, and LA and connect each to SSS, SAS, ASA, or AAS; in Session 2 (Build) you'll build right triangles fixing a hypotenuse-and-leg (and other) pairs to feel each shortcut, verifying HL by computing the third side; in Session 3 (Prove) you'll write a two-column HL/LL/HA/LA proof, review MUS Lesson Practice 26A/26B, and take the checkpoint.*
