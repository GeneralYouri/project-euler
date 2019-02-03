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

Unfortunately, even after all of the above is implemented, the runtime for the problem input is still around 1.6 seconds.
Compared to most other problems around this number that seems like a fairly high runtime, so there may well be a better solution strategy altogether.

---

### Refactor

As noted above, there are indeed several good ways to vastly improve our algorithm; we even got very close to discovering some of these initially.
The above solution is now implemented as alternative solution 1, while a new main solution has been added.
We base this solution on a continuation of some of our findings above, namely those regarding prime-like numbers.
We'll be looking for the best candidate comprised of two unique prime factors to the first power: `n = p * q`.
The main difference is that instead of iterating values for `n`, we iterate for `p` and `q`.
Doing so opens the door to many other optimizations.

For a number `n = p * q` with `p > q` we can guarantee `p > sqrt(n) > q`.
Our first step is to take advantage of this and generate primes until `sqrt(n)` which will be used later as candidates for `q`.
Then a second loop starts to iterate primes above `sqrt(n)` as candidates for `p`.
Since we're looking for high `n`, for every `p` we iterate values for `q` in decreasing order.

Because we still want to try and maximize `n`, it suffices to iterate `q` until `p * q < bestN`.
This also means that for every `p` we'll find at most 1 improvement, after which we continue to the next `p`.
Meanwhile at the start of the `q` iteration (inner loop) we may find `p * q > limit`, in which case we skip that `q`.
But because `p` is strictly increasing, that specific `q` will now always produce `p * q > limit`, so we remove it from the `q` candidates.

Additionally we can re-apply our lower limit check from the old solution, this time as an early break in our outer loop.
We don't have to calculate the lowest prime factor anymore, that's now `q` by definition.
We also iterate `q` in decreasing order, meaning the best chances come from the highest `q`.
So for our early break we take the highest `q` candidate and break when `1 + 1 / (factor - 1)` can't beat our best result.

---

Finally, there is an improvement on the permutation test, for which we take another look at `phi`.
`phi(n)` counts all numbers up to `n`, excluding all multiples of any of the prime factors of `n`.
Normally care must be taken to avoid counting numbers twice, when they're a multiple of more than one prime factor.
But since we define `n = p * q` and `p > q`, we can guarantee that the only number being counted twice is `n` itself.
This means that we can simplify to `phi(n) = n - (p + q - 1)`.

When testing for permutation, we compare `n` and `phi(n)`.
Due to the above simplification, the difference can be easily seen to be `p + q - 1`.
For two numbers `a` and `b` to be permutations of each other, it's a proven fact that their difference must be a multiple of 9.
So, before performing a permutation test using stringification and character sorting, we test whether `(p + q) % 9 === 1` holds, which is much cheaper.

All together the result is a new main solution with a runtime of around 12ms, over 100 times faster than our old solution.
The new solution also scales very well; handling inputs of up to `1e13` within a second, and being capable of solving even up to `Number.MAX_SAFE_INTEGER`.
