# [Problem 63](https://projecteuler.net/problem=63): Powerful digit counts

This problem is deceptively simple.

Obviously we're not going to iterate all numbers and see if they're the nth power of some number.
Instead, we're going to iterate the bases, and see how many of their powers produce numbers of a length equal to that power.

---

Right off the bat we can notice that all single-digit numbers are valid, for example `3 = 3^1`.
If we look at `10` however, it will never produce a match, because every next power adds exactly 1 more digit to the product.
This also immediately rules out any number beyond 10, because they will add at least one digit per power, and are thus never going to produce a low enough product.

Conversely, this also means that our single-digit bases add at most 1 digit per power.
Since they started as matches, they will continue producing matches until at some point a next power doesn't add a next digit to their product.

---

To calculate the number of digits in a product, we calculate the log10 of that number.
In fact, we don't actually need to calculate the numbers themselves, as just working with their log10 values is enough.
This also ensures our numbers remain low enough to avoid floating point inaccuracies; although technically that doesn't matter for this specific problem (the inaccuracy doesn't get big enough to cause problems).
