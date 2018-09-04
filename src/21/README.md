# [Problem 21](https://projecteuler.net/problem=21): Amicable numbers

To determine whether a number `n` is amicable, we first need some function to sum `n`'s proper divisors.
We've made similar functions for other problems, so this should be easy.
We simply check the numbers `1..sqrt(n)`, as divisors come in pairs with one below, and one above `sqrt(n)`.
Special care is needed to avoid counting `n` itself, and to avoid counting `sqrt(n)` more than once.
Other than that we can also avoid testing even numbers when `n` is odd.

With a function in place to sum `n`'s proper divisors, all we need to do now is check all numbers `1..limit`.
Similarly to our above function, amicable numbers come in pairs so we can add both at once.
However, the search spaces are not distinct, so we can't use a lower search space limit like `sqrt(limit)`.
Instead we'll have to make do with a simple check inside the loop.

Although not relevant for the main problem input, extra care is taken for an amicable pair with one number above, and one below the limit.
Similarly extra care is also taken for amicable numbers that equal their divisor sum, as we're looking for distinct amicable numbers only.
