# [Problem 41](https://projecteuler.net/problem=41): Pandigital prime

We're looking for pandigital primes, and there are up to 9 unique digits available.
This gives us an upper limit for the candidate primes, namely they must be at most 9 digits long, or `< 1e10` in value.

However, iterating all primes below this limit is not feasible, let alone also checking them for the pandigital property.
So instead we take the opposite route: iterating all pandigitals, checking for each whether or not they're prime.
Since our pandigital `n` is variable, we need to look at all permutations of the set of digits 1-9, plus all permutations of the set of digits 1-8, etc.
This is done through a generic permutation function which accepts a collection of items, and returns a collection of collections, each representing a single permutation.

From these collections, which are arrays of digits, we compute a candidate number and check it for primality.
Then we simply keep track of the largest match found so far.

---

It's easy to see that larger values of `n` can produce larger matches.
So what we're really looking for is the value of `n` that generates at least 1 match, and then whichever of these matches is largest.
This leads to a slight optimization where we iterate our `n` values from high to low, allowing an early return after the first `n` to generate matches.

Curiously there are only two values of `n` that generate any matches at all: 4 and 7.
With our problem input of 9 that means we still have to test all permutations for `n` equals 9, 8, and 7.
Higher values of `n` lead to a significantly higher numbers of permutations to test.
This means that for our problem input this unfortunately leads to barely any speedup.
For an input like `n=7` the speedup would be more significant, but at those low values the total runtime itself isn't significant any more.
