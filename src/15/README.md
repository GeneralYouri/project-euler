# [Problem 15](https://projecteuler.net/problem=15): Lattice paths

There's a sequence to be found behind this algorithm, very similar to [Problem 6](https://github.com/GeneralYouri/project-euler/blob/master/src/6/README.md).
At a width of 1 tile, you can easily see that the number of possible paths is the tile height + 1.
At a width of 2 tiles, the number of paths is 3, 6, 10, 15, ... for heights 1, 2, 3, 4, ..., which is the sequence of Triangular numbers.

Considering the list of Natural numbers as `s(1)` and the list of Triangular numbers as `s(2)`, we can calculate any Triangular number index `i` as `s(2)[i-1] + s(1)[i]`.
For example, have a look at this table:

  1|  1|  1|  1|  1|  1
--:|--:|--:|--:|--:|--:
  1|  2|  3|  4|  5|  6
  1|  3|  6| 10| 15| 21
  1|  4| 10| 20| 35| 56
  1|  5| 15| 35| 70|126
  1|  6| 21| 56|126|252

*Note that we're using 0-based indexing: the first row and column are index 0.*

We can see the Triangular numbers on the third row (and the third column), thus index 2.
We want to get the fifth Triangular number, `15`, which sits in the fifth column, thus index 4.
To do so we add the number to its left `10` (the fourth Triangular number, index 3) and the number above it `5` (the fifth Natural number, index 4).

As the table shows, this works not just for any Triangular number, but this sequence can be applied infinitely in both directions.
Taking the list of Natural numbers, the number of paths through a `width x height` grid can be found on row index `width` and column index `height`.
For a 4x3 grid this works out to be the fifth column (index 4) and the fourth row (index 3): 35.

---

Using the above knowledge, for a `width x height` grid we can generate the first `width` numbers in the first `height` sequences in order to reach our desired answer.
This approach is used in the solution Alternative 1.
Note that the sequence grows pretty fast, such that 28x28 is the largest square grid for which the number of paths is below `Number.MAX_SAFE_INTEGER`.
In fact, for square grids, the number of digits in the solution is roughly equal to `0.6 * size` (for the desired 20x20 grid: `0.6 * 20 = 12` which is correct).

---

We can do better though, when we consider that we can express any Natural number, or any Triangular number, via a formula that only uses one variable: our desired index.
But if we can write a formula for these sequences, then we can do it for all other sequences too!
Instead of a table of values, we'll end up with a list of formulae.
Then, we can further inspect these formulae to find a pattern within them, too.

```
s(1)(n) = 1 * (n + 1)
s(2)(n) = 1/2 * (n + 2)(n + 1)
s(3)(n) = 1/6 * (n + 3)(n + 2)(n + 1)
s(4)(n) = 1/24 * (n + 4)(n + 3)(n + 2)(n + 1)
s(5)(n) = 1/120 * (n + 5)(n + 4)(n + 3)(n + 2)(n + 1)
...
```

Let's rewrite that last formula to better identify the pattern: `s(5)(n) = (n + 5)(n + 4)(n + 3)(n + 2)(n + 1) / 120`.
If we take a sample input of `n = 4`, this would work out to `9 * 8 * 7 * 6 * 5 / 120`.
But because the multipliers are sequential, they're actually equal to `(n + 5)! / n!`.
Meanwhile that divider of 120 is actually equal to `5!`.

This formula is for the 5th list of numbers in our table (hence `s(5)`), so we can say `m = 5` and we can substitute it in to the formula.
So we get the formula `s(m)(n) = (n + m)! / n! / m!`, which can calculate the exact number of possible paths through a 2d grid of any width and height.
Specifically for square grids `m === n`, so we can further simplify this to `ss(n) = (2n)! / n! / n!`.

This problem's Main solution uses the above formula `s(m)(n) = (n + m)! / n! / m!`, and utilizes `BigInt`s to support large grid sizes.
