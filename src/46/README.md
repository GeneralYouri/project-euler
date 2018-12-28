# [Problem 46](https://projecteuler.net/problem=46): Goldbach's other conjecture

**Note:** *This solution does not accept input*.

Composite numbers are quite literally numbers that are *not* prime.
We're limited to odd composites, so we simply iterate all odd natural numbers and skip any primes we find.

For the candidate composites (those that weren't skipped), we need to test whether it's a counter example to the conjecture.
The most performant way of doing so seems to be to iterate the natural numbers up to the sqrt of half our candidate.
These are all the possible values of which we can take twice their square and subtract it from our candidate number.
We apply the computation for each of these, and can then check whether the remainder is prime.
If any of the squares results in a prime remainder, then this number passes the conjecture, otherwise we've found a counter example.

---

We're already skipping primes via a primality check, and our remainder is by definition smaller than our candidate number.
This means that for any candidate number, we have already seen all primes up until that number.
A simple prime cache is now trivial to implement; removing the need for the primality check of the remainder, replacing it with a simple lookup.
This also ensures that every prime candidate is tested exactly once.

---

As it turns out, there are two early composites that disprove the conjecture: 5777 (our answer) and 5993.
There may be more, but they must at least exceed 250 million (that's how far this solution can test, given a minute or two).
