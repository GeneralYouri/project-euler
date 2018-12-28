# [Problem 50](https://projecteuler.net/problem=50): Consecutive prime sum

One thing you really *don't* want to do, is iterate primes below the limit and see if you can make them with some list of consecutive primes.
Instead you take the opposite approach: iterate all possible lists of consecutive primes with sums below the limit, and test that sum for primality.

---

First of all we're going to be pre-generating primes, but we don't store them - instead we store their 'prefix sums'.
The prefix sum here is defined as the sum of all primes before and including the current prime.
These are used to easily compute the sum of a list of primes by just knowing the lower and upper indices of the list.

---

While the prime density decreases as you reach higher numbers, it does so very slowly, so the chances of your sum being prime are relatively good.
This means that you're expected to find a sum that is prime fairly quickly, and so it pays off a bunch to start your search from the longest list.
This solution does the same, and for every list length it then iterates all possible lists of that length.
The number of possible lists grows like the linear inverse of the list length, every 1 length smaller means 1 more possible list.

---

We don't generate primes until the primes exceed the input limit, but only until the prefix sum exceeds that limit.
This generates way fewer primes, and seems to still return the correct answer consistently.
However, I'm unable to find a proof for why exactly that would be; in theory when the list of primes gets shorter, bigger primes can be permitted without exceeding the sum.
My best guess is that this effect becomes irrelevant due to the aforementioned density of primes, the fact that our answer is consistently very close to the longest possible list.
