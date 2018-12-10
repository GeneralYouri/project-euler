# [Problem 38](https://projecteuler.net/problem=38): Pandigital multiples

While we have an added variable `n` to work with, our search space is still very limited as there's very strict requirements on our pandigitals.
That's because the concatenation of our products must be exactly length 9.

For this solution I've manually deduced lower and upper bounds for every possible `n`.
The problem description requires `n >= 2`, while the highest possible `n` is 9 as every product will contribute at least 1 digit.
Then for every remaining `n` we can determine the individual lengths of our candidate numbers.
Due to the definition of our products, they have increasing values, meaning that the first products will always use the fewest digits.
For `n = 2` for example, the first product must be 4 digits and the second product 5 digits (and this can't be the other way around).

Then these digit counts give us a way to determine the lower and upper bounds of the search space for that `n`.
For `n = 2` the first product is 4 digits (1000 - 9999) and the second product is 5 digits (10000 - 99999).
The second product was multiplied by 2, so we can halve its range (5000 - 49999).
Then we take the overlap of the ranges of each of the products as our final range for this `n` (5000 - 9999).

---

We're only interested in the largest pandigital that we can create as per the problem definition.
Also, the value `x * 1` is always at the start of the pandigital, and thus occupies the most significant digits.
This means that for any `x` of length `l` we can compare it to the first `l` digits of our largest pandigital.
If our `x` is lower, we can safely skip testing that `x` entirely.

To make optimal use of this property we iterate every individual range from max to min.
As soon as we find a pandigital result, this sub result is returned as it's guaranteed to be the highest possible pandigital in the range.
Finally in the outer loop over the ranges we simply keep track of the highest returned pandigital.

Our default / minimum value is 123456789, easily obtained via `n = 9` and `x = 1`.

---

Due to manually deducing lower and upper bounds for every `n`, this problem solution isn't generalized and doesn't accept any input.

TODO: Explore feasability of accepting an input for the concatenation length (9 in the problem description for a 1-9 pandigital).
