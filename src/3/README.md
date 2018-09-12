# [Problem 3](https://projecteuler.net/problem=3): Largest Prime Factor

Factorizing a number is expressing the number as a product of one or more natural numbers.
Prime factorization is similar, except only prime numbers are considered as valid factors.

Additionally, the [fundamental theorem of arithmetic](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic) states that every number can be represented as a unique collection of primes.
Therefore, to get the largest prime factor of our input number, we merely need to compute its unique prime factorization, and return the largest prime used.

To do so we repeatedly attempt to divide our input with the lowest unchecked prime.
Whenever the division has no remainder, we've found one of the prime factors.
The remainder is our input divided by this prime, and we can iterate again from the newly found prime to find the next prime factor.
We repeat this until our remainder itself is a prime factor - in which case that remainder is our last, and highest, prime factor, and thus the answer we're looking for.
