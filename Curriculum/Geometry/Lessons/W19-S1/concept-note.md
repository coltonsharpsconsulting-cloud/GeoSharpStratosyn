---
cssclasses:
  - nl-doc
tags:
  - concept-note
  - u02
lesson: L17
week: 19
---
<span class="nl-eyebrow">geometry · lesson 17 · read before Session 1</span>
# Simplifying Radicals

*This is your read for the week. Take ten quiet minutes with it before our first session — a pencil in hand, factoring out the largest perfect square as each example comes up. The last several lessons had you measuring the volume and surface area of solid shapes. This week sets that aside for pure number work — a skill you'll need immediately, because the very next lesson (the Pythagorean theorem) is about to start handing you triangle side lengths that aren't whole numbers at all.*

## The one big question

$\sqrt{49} = 7$ exactly — a whole number, no mess. But $\sqrt{72}$ isn't a whole number, and a calculator only gives you a rounded-off decimal, $8.485...$, that goes on forever. Is there an *exact*, smaller way to write $\sqrt{72}$ — one that doesn't throw away any accuracy?

## Square roots, radicals, and perfect squares

| Word | What it means | Example |
|---|---|---|
| **Square root** | A number that, multiplied by itself, gives you the original number. | The square root of 49 is 7, because $7 \times 7 = 49$. |
| **Radical sign** | The symbol $\sqrt{\phantom{x}}$ itself. | $\sqrt{\phantom{x}}$ |
| **Radicand** | The number sitting *under* the radical sign. | In $\sqrt{72}$, the radicand is 72. |
| **Perfect square** | A whole number whose square root is ALSO a whole number — no decimal, no radical left over. | 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 … |

Memorize that perfect-square list the way you memorized multiplication facts. Every trick in this lesson is really just "spot a perfect square hiding inside another number."

## Simplifying a radical — pull out the largest perfect square

Most radicands are **not** perfect squares, but many of them still have a perfect square *hiding inside* as a factor. To simplify $\sqrt{n}$:

1. Find the **largest** perfect square that divides evenly into $n$.
2. Rewrite $n$ as that perfect square times whatever is left over.
3. Split the radical in two — one radical for the perfect square, one for the leftover — and take the square root of the perfect-square part.

$$\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36} \times \sqrt{2} = 6\sqrt{2}$$

36 is the largest perfect square that divides 72 evenly ($72 \div 36 = 2$), so nothing bigger is left to pull out of that final $\sqrt{2}$ — the expression $6\sqrt{2}$ is **fully** simplified. Two more, worked the same way:

$$\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3} \qquad\qquad \sqrt{300} = \sqrt{100 \times 3} = 10\sqrt{3}$$

**Not every radical simplifies.** $\sqrt{14}$ has no perfect-square factor at all besides 1 (14 = 2 × 7, neither a perfect square) — it's already in simplest form, and a calculator is the only way to get a decimal value for it ($\sqrt{14} \approx 3.74$).

## Like radicals — when can you add or subtract them?

You can only combine two radical terms if they are **like radicals** — the exact same radicand sitting under the root, once everything is fully simplified.

$$3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$$

That works because both terms share the radicand 2 — just add the coefficients out front, exactly like combining $3x + 5x = 8x$. But watch this one:

$$5\sqrt{2} + 3\sqrt{5} \;=\; 5\sqrt{2} + 3\sqrt{5} \quad \text{(cannot combine — stays as two terms)}$$

2 and 5 are different radicands with no perfect-square factor connecting them, so these are **unlike** radicals — they can never be added into one term, no matter how you rearrange them.

**The trap MUS loves to test:** sometimes two radicals *look* unlike but are secretly the same once you simplify. $\sqrt{8}$ doesn't look like $\sqrt{2}$ — until you simplify it: $\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$. Now $2\sqrt{2} + 3\sqrt{2} = 5\sqrt{2}$ combines just fine. **Always simplify first, THEN check whether the radicands match.**

## Multiplying (and dividing) radicals

To multiply two radical terms, multiply the numbers out front times each other, and multiply the radicals times each other — numbers with numbers, radicals with radicals:

$$\sqrt{a} \times \sqrt{b} = \sqrt{a \times b} \qquad\qquad (5\sqrt{3})(6\sqrt{5}) = 30\sqrt{15}$$

Simplify the result afterward if it needs it. Sometimes the radicand you land on is itself a perfect square, and the radical disappears completely:

$$(2\sqrt{3})(2\sqrt{3}) = 4\sqrt{9} = 4 \times 3 = 12$$

That's really just the identity $\sqrt{a} \times \sqrt{a} = a$ — the square root and the square undo each other. $\sqrt{3} \times \sqrt{3} = 3$; $\sqrt{7} \times \sqrt{7} = 7$; no exceptions. Dividing radicals works the identical way, in reverse — numbers ÷ numbers, radicals ÷ radicals, then simplify:

$$\frac{25\sqrt{10}}{5\sqrt{5}} = 5\sqrt{2}$$

## Watch it work

**Two steps, not one.** $\sqrt{300}$'s largest perfect-square factor is 100, giving $10\sqrt{3}$ in a single step — but if you'd only spotted the smaller perfect square 4 first ($300 = 4 \times 75$), you'd get $2\sqrt{75}$, which *still* has a perfect square (25) hiding inside: $2\sqrt{75} = 2 \times 5\sqrt{3} = 10\sqrt{3}$. Same final answer either way — just check your last radicand for one more perfect square before you call it done.

**The radical that vanishes.** A right triangle with two legs of length 6 and 6 hands you a hypotenuse of exactly $\sqrt{72}$ (you'll see why next lesson). Left unsimplified, that's a clunky, easy-to-miscopy expression. Simplified, it's the clean, exact $6\sqrt{2}$ — same value, same accuracy, far easier to work with.

## Why this matters

Right triangles almost never hand you whole-number side lengths — the Pythagorean theorem, starting next lesson, is going to produce radicals constantly, and every one of them deserves to be reported in its simplest, exact form rather than a rounded, approximate decimal. A carpenter cutting a diagonal brace, an architect specifying an exact roof rafter, a surveyor staking out a property line — all of them need the *exact* length, not "about 8.49 feet." This week you'll build a hands-on feel for *why* a perfect square can be pulled out of a pile of tiles, then defend in words why $6\sqrt{2}$ really is as simple as $\sqrt{72}$ can get.

## Before Session 1
- Read this note once, simplifying $\sqrt{48}$ and $\sqrt{50}$ yourself with a pencil before you check the worked examples above.
- Skim **Math-U-See Lesson 17** (the instruction manual / video), then you'll do **Lesson Practice 17A & 17B** on your own this week.
- Bring a question: *what still feels fuzzy?* We'll start there.

---
*Next: in Session 1 we make perfect squares, simplifying, like radicals, and multiplying precise, with a sim that factors any radicand you throw at it; in Session 2 (Build) you'll arrange unit tiles into perfect squares and physically factor a radicand into a block plus a remainder; in Session 3 (Prove) you'll defend why the largest-perfect-square method always gives the simplest form and why unlike radicals can never combine, review MUS Lesson Practice 17A/17B, and take the checkpoint.*
