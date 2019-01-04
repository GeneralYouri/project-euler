# [Problem 97](https://projecteuler.net/problem=97): Large non-Mersenne prime

Since we're only interested in the lat 10 digits, we can obviously simplify the calculations a lot by truncating higher digits.
So we simply take the base multiplier, and apply the powers whilst keeping only the last 10 digits by using modulo.

To speed up the process a bit, whilst still staying within a safe Floating Point range, we apply the powers in groups.
The amount of powers we apply at once is however many we can fit ontop of the largest 10-digit number, without exceeding `Number.MAX_SAFE_INTEGER`.
For the problem input that turns out to be 19 powers of 2 at once.
The main benefit here, besides using fewer multiplications, is using fewer modulo operations (they're the most expensive in the whole solution).
At the end we fix the last couple of powers and finish the formula calculation.
