# [Problem 72](https://projecteuler.net/problem=72): Counting fractions

For this problem we take a closer look at the definition of a Resilient Fraction:
>If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

The function `HCF` stands for Highest Common Factor, which may be more commonly known as Greatest Common Divisor or `GCD`.
Interestingly, this exact definition is used to test for another different property: whether `n` and `d` are co-prime.
This means that for every `d`, we're essentially looking for the amount of integers below that `d` that are coprime to `d`; which is exactly what Euler's Totient function (or `phi` is for).

Recalculating `phi` for every `d` would be a ton of essentially duplicated work.
So instead, since we need to handle all integers below our limit anyways, we can iteratively adjust our value of `phi`.
To do this we're using a technique similar to Prime Sieving, where every time we find an untouched value, that value is prime and we adjust all multiples of that value.
The way we adjust those values, is to essentially remove all counts of the prime factor we're currently considering.
By doing this for every prime, we're removing counts for every prime factor of every `d`, leaving just the amount of `n` that don't share a prime factor with `d`, and thus are resilient.

Beyond the halfway point of our search space, calculations become a lot easier.
For example, multiples of primes beyond this point exceed our limit, and thus are irrelevant.
So we can limit ourselves to an array of just half the size of our search space.
We can also shrink the second half of both our `for` loops down into a single statement since they're really just linear expressions at that point.
These optimizations end up being more impactful than one might expect; for the problem input they gave me about a 4.5x runtime improvement.