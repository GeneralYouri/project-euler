# [Problem 70](https://projecteuler.net/problem=70): Totient permutation

For this problem we start with a simple iteration over our search space.
For every candidate number, we can calculate `phi`.
Then we can check for a permutation by sorting the digits in both our candidate and the result of `phi`, and comparing the two results.

---

To quote the problem description:
>Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to n which are relatively prime to n.

When two numbers are relatively prime, their GCD is 1; meanwhile when a number is prime, it's relatively prime to every number below that.
This means that in theory, primes will produce the lowest values for `n / phi(n)`, because it'll always equal `n / (n - 1)`.
However, no two sequential numbers will ever be permutations of one another, and so no prime numbers can fulfill the rules of this problem.
So we can skip any prime number candidates we come across.

---

Instead of looking for primes, this changes our goal to looking for the most prime-like numbers.
What I mean with this, is numbers with relatively low amounts of prime factors, as this means they are relatively prime to many smaller numbers (and thus their phi will be higher).
For the same reason we can also use wheel-30 factorization to further filter our candidate list (without having to perform many extra calculations).

If you look at some results for smaller numbers, you may start to see some related patterns.
For example, even numbers tend to have very high values for `n / phi(n)`, because their phi is fairly low.
This in turn is because all smaller even numbers share the prime factor 2, so for even numbers we find that `n / phi(n) >= 2`.

Similarly, all multiples of 3 will share the prime factor 3 with a third of the smaller numbers, and for multiples of 3 we find that `n / phi(n) >= 1.5`.
In general, for a candidate number `n` and their smallest prime factor `p`, we can find that `n / phi(n) >= 1 + 1 / (p - 1)`.
This means we can further skip numbers by checking their smallest prime factor; if we've already found a value better than this number can possibly get then we skip.

---

The above also gives us another nice time save, by pregenerating prime numbers to use when finding the smallest prime factor of a number.
Because we're only interested in the smallest prime factor (and not all), it suffices to only use primes up to `sqrt(limit)`.
The only exception is when `n` itself is prime (but we skip primes).
Why draw the line at the sqrt: consider that for candidate `n` we find a smallest prime factor `p` beyond `sqrt(limit)` (and thus beyond `sqrt(n)`).
Because of the rules of prime factorization, another, smaller prime factor must exist to multiply with and produce `n`; so our `p` couldn't have been the smallest.

Finally, you can notice a general trend that `n / phi(n)` gets lower as `n` gets higher.
This makes sense, since the prime density also lowers (and from this I'm assuming the level of prime-likeness decreases with it).
So by searching from high to low we generally have to go through fewer improvements to our current best value before hitting the actual best value, skipping some extra computation.

Unfortunately, even after all of the above is implemented, the runtime for the problem input is still around 2 seconds.
Compared to most other problems around this number that seems like a fairly high runtime, so there may well be a better solution strategy altogether.
