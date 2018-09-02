# [Problem 10](https://projecteuler.net/problem=10): Summation of primes

Similar to [Problem 7](https://github.com/GeneralYouri/project-euler/blob/master/src/7/README.md), we can use a prime generator to generate and sum all primes up to our input limit.
For this particular problem though, we can instead use the [Sieve of Erathosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to determine the primes.
The latter is implemented as the main solution here.
It uses an Object keyed by candidate prime numbers to store the Sieve's output.
This ended up being only about 40% faster than the straightforward approach.
