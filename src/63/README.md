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

Initially I was iterating powers, testing the digit count of the product using log10.
Then I realized that I could simplify the calculations by also dividing by 10 for every power; matches are now produced until the product dips below 1.
While working with the log10 values though, I realized that these values drop by a static amount for every power - namely the log10 of the base.
When our log10 reaches 0, that means the product reaches 1 (which was our break condition).
This lets us replace the power iteration with a formula to count the number of powers for which a base produces products with a digit count equal to the power.
