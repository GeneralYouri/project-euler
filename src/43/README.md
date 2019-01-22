# [Problem 43](https://projecteuler.net/problem=43): Sub-string divisibility

**Note:** *This solution does not accept input*.

Instead of running 10 billion iterations, we generate all 0-9 pandigitals by using the same permutation function as used in [Problem 41](https://github.com/GeneralYouri/project-euler/blob/master/src/41/README.md).
This gives us 3,628,800 candidate numbers, of which we can skip another 10% due to starting with a 0.

For each candidate number we perform a Sub-String Divisibility check; basically just implementing the very specific rules of the problem.
This check has been generalized though, so it accepts any number, plus a list of divisors to apply sequentially, plus the length of sub-strings.

---

Due to the used divisors being a static collection (1, 2, 3, 5, 7, 11, 13, 17), we can pregenerate their multiples.
This skips having to perform a division for every sub-string, which tends to be an expensive operation.
However in practice this resulted in a 5% increase in runtime for our problem input.
As it turns out, the generation of permutations is by far the most expensive part of this calculation.

---

### Update

*A new main solution has been added, pushing the above solution into alternative 1.*

The new solution drastically improves runtime by using almost zero string manipulation, as well as canceling early when possible.
The main idea is to iteratively build up candidate numbers one digit at a time.
Every time we add a new digit we can immediately check for that digit's substring divisibility, and cancel this candidate early if it fails.

---

First we need to do some work pre-iteration by listing all allowed digits for every index of the 10-digit number we're creating.
We can also immediately discard some options for the indices related to the substring-divisibility checks that divide by 2 (only even numbers) and 5 (only 0 and 5).
Next the creation of our candidates is started by first iterating all multiples of 17, the highest substring divisor which thus generates the fewest 3-digit options.
Multiples of 17 are only allowed if they also use 3 unique digits and if they don't make future digits impossible (those with divisors 2 and 5, as they start with limited options).

For each of the remaining multiples of 17 we then recursively try to add new digits one at a time.
During this recursion we take our candidate so far, and try to add each of the allowed digits for our next index.
For each of these we verify the substring-divisibility, and again make sure we don't make any future digits impossible (those with divisors 2 and 5, as they start with limited options)..
Only when these conditions hold do we recurse, to try and add another digit, etc. until a valid 0-9 pandigital is formed.
