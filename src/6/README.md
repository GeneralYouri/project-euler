# [Problem 6](https://projecteuler.net/problem=6): Sum square difference

Most of the basic calculation is already given:
- `sumOfSquares(n)` iterates 1..n, squares each number, and sums the results.
- `squareOfSum(n)` iterates 1..n, and sums the results.

---

But ofcourse, this can be improved. For the square of sum, there's a linear relationship between the components being summed (1, 2, 3, ..., n).
So it is fairly easy to see that this can be calculated directly via `(n + 1) / 2 * n` or an alternate form `n/2 * (n + 1)`.

For the sum of squares a similar direct calculation is also possible, but it's less obvious to figure out.
If you inspect some values for the lower values of n, you can find this sequence increasing faster than `n^2`, but slower than `n^3`.
As it turns out, a formula of the form `1/3n^3 + 1/2n^2 + 1/6n` or an alternate form `n/6 * (2n + 1)(n + 1)` can do the trick.
Once you assume the structure, the values of `1/3`, `1/2`, and `1/6` can be inferred fairly easily by trial and error.

---

There is actually a sequence to be found in these formulas, too.
- `n/1 * (0n + 1)` is just a fancy way of expressing a number, as it simplifies to `n`
- `n/2 * (1n + 1)(0n + 1)` is a slight rewrite of our squareOfSum formula.
- `n/6 * (2n + 1)(1n + 1)(0n + 1)` is a slight rewrite of our sumOfSquares formula.
- `n/24 * (3n + 1)(2n + 1)(1n + 1)(0n + 1)` could be the next logical step in this sequence.
The multiplier `(3n + 1)` is added, and the whole thing is further divided, this time by a factor 4 (previous factors were 2 and 3).

The question is: what would this sequence represent?
Unlike the previous sequences, this one can contain fractions (but quarters only it seems).
Other than that, inspecting the first dozen elements in the sequence doesn't give me any ideas.
