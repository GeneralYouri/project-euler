# [Problem 5](https://projecteuler.net/problem=5): Smallest multiple

To find the Smallest multiple, or Least Common Multiple, of a set of numbers, you can combine the prime factorizations of each of the numbers.
When combining, for every prime factor you take the most occurrences.

For example, for the LCM of 4 and 5:

```
primeFactors(4) = 2, 2
primeFactors(6) = 2, 3
LCM(4, 6) = 2 * 2 * 3 = 12
```

Because 2 occurs twice for (4) and only once for (6), it's applied twice.
Because 3 occurs once for (6) and doesn't occur for (4), it's applied once.

---

The above approach is applied by alternative solution 1.
In the main solution, this approach is optimized for finding an LCM for larger groups of numbers.

When calculating the LCM of `1 .. n`, the LCM factors can be divided into two groups:
- Primes at or below `sqrt(n)`
- Primes above `sqrt(n)` and at or below n

Primes in the first group are applied to the LCM as many times as they can possibly fit within `n`.
For example: for `LCM(1..20)` we have `n = 20`.
The prime `2` fits twice within this value, as `2 ^ 4 = 16 < 20`, and `2 ^ 5 = 32 > 20`.

Primes in the second group are applied exactly once each.
The result is a list of primes being 'applied' to the LCM, in other words they multiplied together to produce the LCM.
