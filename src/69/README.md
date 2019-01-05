# [Problem 69](https://projecteuler.net/problem=69): Totient maximum

Since we're dealing with Euler's Totient function here, I've gone ahead and implemented it.
We will be iterating primes many times over, so `phi` uses a prime cache which is pre-filled with primes until the limit (1e6 as per problem input).
What remains is a fairly simple process of iterating the search space, calculating the given function of `n / phi(n)`, and tracking the best result.

---

The above is what the alternative solution implements.
After that I inspected the results, in particular the points where the best result was improved.
These numbers ended up being the products of the first `m` primes, so: 2, 6, 30, 210, 2310, 30030, 510510.
So the main solution uses this knowledge and only iterates these values (which can be very easily constructed by iterating primes).
This also lets us skip pre-generating most primes, as all relevant primes are very low (in fact we know the candidates' prime factors).
This huge optimization lets the solution run in <1ms.
