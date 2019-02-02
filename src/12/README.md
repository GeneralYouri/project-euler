# [Problem 12](https://projecteuler.net/problem=12): Highly divisible triangular number

The original solution involved simply generating triangulars and counting divisors.
This solution has later been slightly improved, the result of which you can find as alternative solution 1.

The main improvement was replacing the divisor count calculation with one based on prime factors.
Namely, for any number `n` with a prime factorization of `p1^c1 * p2^c2 * ...`, the divisor count equals `(c1 + 1) * (c2 + 1) * ...`.
This allows the calculation of the divisor count without actually calculating the divisors.

A prime cache was also used to prevent a ton of repetition here.
The primes are pregenerated up until a minimum value, which is `input + 2`.
That's because we need a divisor count *above* `input` (so atleast `input + 1`).
Due to the definition of triangulars you can find that you first need the prime `p` for the `p-1`th triangular (explained further down).

A final improvement puts a mechanic from the old divisor counter to new use in order to skip values too low to possibly be our answer.
This old algorithm only had to test divisibility with values up to `sqrt(n)`, with each match adding two divisors.
Here we reverse the logic: to have at least `d` divisors, `sqrt(n)` must be atleast `d / 2`, and thus `n` must be atleast `(d / 2) ^ 2`.

---

For our new main solution we no longer have to actually calculate triangulars, instead I've destructured the triangular function itself: `(n) => n * (n + 1) / 2`.
For `n = a * b` we know that `divisorCount(n) = divisorCount(a) * divisorCount(b)`.
So the idea here is to split the triangular up into two separate factors, adding the division by 2 to whichever of the two is even.
For even `n` (so every other triangular) this gives us `n / 2` and `n + 1`, while for odd `n` this gives us `n` and `(n + 1) / 2`.
Actually, the values we get form a very nice sequence:

n (index) |  1|  2|  3|  4|  5|  6|  7|  8|  9| 10| 11| 12
:---------|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:
Triangular|  1|  3|  6| 10| 15| 21| 28| 36| 45| 55| 66| 78
a         |  1|  1|  2|  2|  3|  3|  4|  4|  5|  5|  6|  6
b         |  1|  3|  3|  5|  5|  7|  7|  9|  9| 11| 11| 13

So instead of iterating values of `n`, we iterate values for `a` and `b`, and we can always return to the actual triangular value if needed via `a * b`.
This approach lets us count divisors for the two factors, and them multiply together to get the divisor count for the triangular.
Due to the triangular formula both of these values are around the order of `sqrt(t)` with `t` being the triangular.
This means to count their divisors we need to test way fewer primes for divisibility, reducing computation time as well as the number of primes needed.

Additionally, noting the repetition in the above table, each count is only recalculated every 2 triangulars, and counts for `b` are cached for later use by `a`.
This means that ideally only three divisor counts need to be calculated, every four triangular numbers.
In practice this is shaken up slightly because we also skip counting for some triangulars where `b` is prime, but it's still a good performance gain obviously.

---

We also use primes to skip certain iterations that are guaranteed to have low divisor counts.
Namely, when `b` is prime (which we know already due to our prime generation), then obviously its divisor count is 2.
It is highly unlikely (and in practice, it turns out to be impossible) for `a` to then have so many prime factors that the combined result still is the answer we need.
Therefore, whenever `b` is prime, we skip two triangulars.

Speaking of which, we generate our primes during the actual iteration itself; whenever `b` (the largest of the two) equals the next prime, it's added.
We also implemented an improved divisor count function which only needs to test prime divisors until `sqrt(n)` (similar to the primality test).
The reason being that, even though a number can have a prime factor above `sqrt(n)`, it can only ever have 1, since if it has 2 or more they will multiply together into a value much greater than `n`.
So it suffices to test primes until `sqrt(n)`, if this isn't a full factorization then we multiply the count by 2 to account for the one extra prime factor.
