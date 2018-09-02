# [Problem 9](https://projecteuler.net/problem=9): Special Pythagorean triplet

The straightforward way to approach this problem is to simply try all combinations.
Small optimizations can be made by limiting the search space:
- Have the first/outer loop find the lowest number of the triplet (`a`).
Due to the sum requirement, this value is guaranteed to be less than 1/3rd of the sum.
- Have the second/inner loop find the middle number of the triplet (`b`).
Again due to the sum requirement, this value is guaranteed to be less than 1/2nd of the sum.
This value can also depend on the value for `a`, such that `b` is less than `sum - a / 2`.
Additionally, since this loop is for the middle number, it must be larger than `a`.
- With `a` and `b` decided, `c` can be calculated, and the formula `a^2 + b^2 = c^2` can be checked.

---

Such a solution does unfortunately still test a whole lot of futile combinations of numbers, so improvements are definitely possible.

```
soon(tm)
```
