# [Problem 51](https://projecteuler.net/problem=51): Prime digit replacements

**Note:** *This solution does not accept input (yet)*.

This was a bit of an awkward problem, because of the digit replacement rules.

From the start I didn't really want to just iterate primes and see what kind of family they would form.
I figured this would require too many string manipulations (to get other family members), and it would revisit families multiple times.
So instead, while iterating primes, I 'sort' the primes into buckets (one bucket per family).
To do this a bucket is identified via a combination of the static digits, and the variable digits.
I represent this with a simple type of hash like `1X2X3`, where X denotes a variable digit.
Note that for every family member, all digits in the place of an X must be identical, however that digit may also occur elsewhere (so X could also be 1, 2, or 3 here).

---

To determine for a prime, what families it belongs to, I first check which digits it contains.
Then for every digit, since the digit can be contained multiple times, I use `nCr` to generate all combinations.
For each combination only those specific digits are replaced.
For example, the prime 131 belongs to these families: 13X, X31, X3X, and 1X1.

We can return as soon as we add a prime to a family that already contains 7 other members.
Inside of every bucket we keep track of its prime members, so that we can just return the lowest of these family members.
This sorting approach ensures that we only handle every prime once.

---

Determining the families to which a given prime belongs is pretty annoying, and still requires a lot of string manipulation.
Some minor simplifications have been made, which are currently specific to the problem input of finding an 8-member family.

One simplification is that the last digit can never be variable.
This is because, since we're dealing with primes, there are only four different last digits possible: 1, 3, 7, 9 (excluding the prime 2 ofcourse).
We need atleast 8 family members, so just four options isn't going to cut it, and we can always leave the last digit static.

We do handle the first digit, but need to take extra care here.
That's because we can't make this digit into a 0, as that would make the resulting prime shorter than other family members, which is against the problem description.
Luckily this is solved for us due to our approach to the problem; we're iterating primes which can't have leading zeroes, and we're only replacing existing digits with X (so we're never adding/removing digits).
