# [Problem 53](https://projecteuler.net/problem=53): Combinatoric selections

It's been a while, but for this problem I can finally present two solutions again!

The alternative solution is actually the first and simplest of the two, a fairly straight-forward brute-force BigInt algorithm.
One optimization that is included, is a precalculation of the factorials for 1..100, letting `nCr` simply look these up by index.
Ofcourse I've also included a non-BigInt solution.

---

For the main solution we dive into the specifics of the `nCr` formula.
Instead of re-calculating the whole `nCr` formula for every combination of `n` and `r`, we keep a sort of running total.
When we change `n` or `r` by 1, we can adjust our `nCr` running total by multiplying with the new multiplier, and dividing with the new divider.

We also note how varying `r` for a single `n` forms a sort of parabola in our resulting numbers.
For example, taking 1 out of 4 can be done in 4 ways, the same as taking 3 out of 4.
The reason behind this behavior is that taking 3 out of 4 is actually just taking 1 out of 4, and then returning what you left instead of what you took.
To exploit this behavior, for every `n` we search for the lowest `r` for which `nCr` exceeds our minimum of 1 million.
The number of values for `r` where `nCr` exceeds the minimum can then be calculated as `n - 2 * r + 1`.

Finally, we implement another optimization that lets us mostly ignore irrelevant combinations of `n` and `r`.
The following is a snippet of the results you get when listing, for every `n`, the lowest `r` such that `nCr` exceeds the minimum:

 n |  r | nCr
--:|---:|-------:
23 | 10 | 1144066
24 |  9 | 1307504
25 |  8 | 1081575
26 |  8 | 1562275
27 |  8 | 2220075
28 |  7 | 1184040

As you can see, the value for `r` goes down (as expected), but fairly slowly, at most by 1 per `n`.
So when we move to the next value for `n`, we decrement our `r` by 1 (and adjust our `nCr` accordingly), and continue from that point.
As a formality the algorithm doesn't start at `n=23`, but at the lowest allowed value `n=1`.
We then increment `r` until `nCr` exceeds the minimum, OR until `r` exceeds `n/2`.
