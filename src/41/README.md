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

There's an interesting little fact regarding digit sums that we can use here:
>A number is divisible by 3 if and only if the digit sum of the number is divisible by 3.

This curious little fact is extremely useful to us, because we know what the digit sums will be for all of our candidates, due to the pandigital requirement.
Since we're looking for primes, we can entirely skip any `n` for which the digit sum is divisible by 3, as that means it contains a prime factor 3 and thus isn't prime itself.
Listing out the digit sums for all integers up to `n` (our problem input is 9), shows us that only `n=7` and `n=4` produce digit sums *not* divisible by 3.

So it suffices to first test all 7-digit 1-7 pandigital numbers for primality, and if no match is found also test 4-digit 1-4 pandigital numbers.
As it turns out there exist multiple 7-digit 1-7 pandigital primes, and we find the answer in very few iterations this way.
