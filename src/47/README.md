# [Problem 47](https://projecteuler.net/problem=47): Distinct primes factors

**Note:** *This solution does not accept input*.

To find the first occurrence of four consecutive numbers with four prime factors, we iterate all natural numbers in increasing order.
During the iteration we'll keep track of the amount of consecutive numbers with 4 prime factors; when a number doesn't have 4 prime factors this count is reset.

Since we have to count prime factors for many different numbers, we're re-using primes a lot.
So to avoid generating these more than once, we lazily generate primes during our main loop.
Whenever our main loop is considering a prime number, this number is added to our prime cache.
Our prime factor counter then iterates only this prime cache.

---

We can also define a lower bound for our search space.
This is one optimization I haven't yet fully explored.

- For the example of 2 numbers with 2 distinct prime factors, a total of 4 distinct prime factors seems required.
  That's because if they shared one prime, the other prime makes the difference between the numbers at least 2 (the lowest prime).
  Just like the example shows, for 4 distinct prime factors, we take the first four prime factors, and then the first and last of those four multiply into our lower bound.
- For the example of 3 numbers with 3 distinct prime factors this is a bit more tricky.
  If we apply the same logic while keeping the third prime identical, that gives us 7 distinct primes needed.
  But they also have to be divided across three numbers, and I'm unsure how to do this.
- For 4 numbers with 4 distinct prime factors things get even more tricky.
  I don't think my logic holds up regarding the requirement of 2 different prime factors (this would give 10 distinct prime factors divided over 4 numbers).
 
