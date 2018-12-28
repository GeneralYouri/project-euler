# [Problem 48](https://projecteuler.net/problem=48): Self powers

The largest term in the series, `1000^1000`, is 3001 digits long; obviously too long for an IEEE-754 Floating Point.
We could use BigInts to still trivially compute the answer, however the `BigInt` solution is almost identical to the regular solution, and thus not interesting at all.

---

Instead we use a `Number` approach, and simply keep our values small.
We compute every term separately, and apply one power at a time to keep things simple and easy.
After applying a power, we also apply a modulo of `1e10`, and after finishing a term we again subtract 1e10 from the sum if needed.
We could also skip the last step and just apply a single extra modulo `1e10` at the very end, but for some reason this is slightly slower.

---

Note that we're technically not following the problem description exactly.
Reason being that we return the sum modulo 1e10, not the last 10 digits, so any leading zeroes are dropped.
The problem input's answer doesn't contains any leading zeroes though, and the problem was most likely intended this way anyways.

The solution also accepts an optional second argument, which is the number of digits to return from the end of the sum.
This is used in place of the 10 in the `1e10` modulo as described above.
Also, besides a standard lower bounds check, this solution also features an upper bounds check to prevent exceeding `Number.MAX_SAFE_INTEGER`.

