# [Problem 243](https://projecteuler.net/problem=243): Resilience

From the example `n=12`, we can easily spot the mentioned 4 resilient fractions: 1/12, 5/12, 7/12, 11/12.
We can also deduce several fractions that are always resilient:

Cancelling down a fraction requires both numerator and denominator to become smaller; to both be divided by some factor.
This is only possible if the numerator and denominator share a GCD above 1.
In other words, a number `n`'s resilient fractions are all numbers below `n` whose GCD with `n` is 1.

---

Calculating the GCD for every numerator for every denominator requires performing O(n^2) GCD calculations, which very quickly becomes impractical.
This solution does the opposite instead: it counts all fractions whose GCD is *not* 1.
This is more efficient because of prime factorization: the divisors for a number `n` are all combinations of its prime factors.
By definition every divisor shares at least one prime factor with `n`, making the fraction `divisor / n` *not* resilient.

Since we're only interested in the amount of resilient (and thus non-resilient) fractions, we don't need to actually calculate all divisors.
Instead we use the [Inclusion-exclusion principle](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle) on `n`'s prime factors.
For example for `n=12`, its prime factors are 2 and 3; this gives 6 multiples of 2 (12/2) and 4 multiples of 3 (12/3), we remove the double counts through 2 multiples of 2*3=6 (12/6), minus 1 because we included `n` itself: 6+4-2-1 = 7 non-resilient fractions.
This reduces our time complexity from roughly `O(n^2)` to `O(n)`.

We can further optimize a little bit.
For prime number denominators all fractions are resilient by definition, so primes are our worst candidates.
Conversely, due to the lowest prime 2, which is a prime factor of all even numbers, all even fractions are not resilient.
This leaves under 50% of fractions as resilient candidates for any even denominator, so even denominators are our best candidates.

---

The above approach significantly increases our performance, but it's still far from enough.
The next step is to look at when our result is improved by keeping our best find so far, and logging every improvement.
This gives us an interesting list of numbers `d` for which their `R(d)` is lower than it is for any number below `d`.

  d | Resilient | Total
---:|----------:|------:
  1 |         0 |     0
  2 |         1 |     1
  4 |         2 |     3
  6 |         3 |     5
 12 |         4 |    11
 18 |         6 |    17
 24 |         8 |    23
 30 |        10 |    29
 60 |        16 |    59
 90 |        24 |    89
120 |        32 |   119
150 |        40 |   149
180 |        48 |   179
210 |        56 |   209
420 |        96 |   419

Note how `d` increases in fixed steps, but the step size is increased every few steps.
In particular, the step size increases after 2, 6, 30, and 210; these are the products of the first prime factors: 2, *3=6, *5=30, *7=210.
Apparently we can visit all `d` that improve out best find by iterating just these values of `d`.
Doing this practically eliminates our runtime, returning an answer almost instantly.

---

As it turns out, what we've done here is calculate Euler's Totient function.
For a denominator `d`, the numerators that form resilient fractions are those whose GCD with `d` is 1, which is the co-prime definition.
The Totient function calculates how many numbers are co-prime to a given number, when also give its unique prime factors.

TODO: Implement an alternative solution that directly implements the Totient function.
