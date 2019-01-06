# [Problem 66](https://projecteuler.net/problem=66): Diophantine equation

This problem is a bit of a continuation of [Problem 64](https://github.com/GeneralYouri/project-euler/blob/master/src/64/README.md) and [Problem 65](https://github.com/GeneralYouri/project-euler/blob/master/src/65/README.md).

We're looking for minimal solutions to the given formula.
For a given D, the left-hand side of this formula is very similar to the formulas seen for continued fractions; `sqrt(D)` is our square root, `x` is the numerator, and `y` is the denominator.
So basically, the left-hand side evaluates to a number that indicates how good of an approximation that fraction is, we're just looking for a specific approximation rate where this outputs 1.

This means that for a given `G`, our solutions are found by expanding the continued fraction of `sqrt(D)`, using numerator/denominator as x/y.
As it turns out, we can even predict which of these expansions will evaluate our left-hand side to 1.
For expansions with a cycle length `n` that is even we need the `n`th expansion, if it's odd then we instead need the `2n`th expansion (or `2n+1` depending on how you handle the base term).
In practice this means applying the base term of the continued fraction, and then applying the whole cycle of terms either once or twice.

---

The above knowledge lets us iterate all possible values of `D`, skipping the squares as, per the problem description, they have no solution.
For every `D` we first determine its continued fraction using most of the Problem 64 solution.
We then expand the fraction until the first expansion that we know will match our formula, and keep track of whichever `D` had the highest numerator here.

---

Because we're multiplying for every next expansion, more expansions generally means higher numbers.
In particular, since odd length cycles require twice as many expansions, we can entirely ignore fractions with even length cycles.

Since we're looking for the highest minimal value for `x`, we are only interested in the numerator of the continued fraction expansions, and can skip calculating the denominators.

Finally, the numbers from the expansions tend to get very big, but we're only interested in which `D` gives the highest `x`, not how high it actually is.
This means we don't need to be very precise when expanding the numerator.
When the numerator gets big enough, we divide it by some power of 10, while keeping track of how often we do this.
Combining that with the log10 of the final value for `x` we can still reliably compare the size of `x` values, while keeping the numbers used small.
