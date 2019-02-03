# [Problem 47](https://projecteuler.net/problem=47): Distinct primes factors

To find the first occurrence of four consecutive numbers with four prime factors, we iterate all natural numbers in increasing order.
During the iteration we'll keep track of the amount of consecutive numbers with 4 prime factors; when a number doesn't have 4 prime factors this count is reset.

Since we have to count prime factors for many different numbers, we're re-using primes a lot.
So to avoid generating these more than once, we lazily generate primes during our main loop.
Whenever our main loop is considering a prime number, this number is added to our prime cache.
Our prime factor counter then iterates only this prime cache.

---

The above is implemented as the alternative solution, and *does not accept input*.
The main solution does accept input, although it can't find any results for inputs above the problem input.

For this solution we essentially reverse the process, using a sieve algorithm to 'mark' prime factors for all numbers up to an arbitrary limit.
When the sieving is done this gives us a list of all integers up to the limit, and their exact count of unique prime factors.
We can then iterate this list and look for four sequential numbers with a count of 4 each.

As long as we don't find an answer, we simply increase our search limit (by a factor 2, which can be freely varied), and try again.
Whenever we do increase our search limit, we have to first retroactively apply the low primes as prime factor counts for the new high numbers.
After that we also apply the new high primes to all numbers.
After prime factor counts are updated and we iterate to look for a match, we make sure to only iterate new candidate numbers.
Altogether this means that we minimize the amount of repeated work; the only thing that is still repeated is the prime sieving as that algorithm always starts at 1.

While the solution can't calculate the answer for an input of 5, I do have it ready.
The number 129,963,314 is the first of five consecutive integers to have five distinct prime factors each.
