# [Problem 49](https://projecteuler.net/problem=49): Prime permutations

We have a very limited search space, so we take advantage of this by first generating all primes within the search space.
While generating these, we also sort them into groups; a group is identified by its collection of unique digits.
So for example, the prime 1487 belongs to the group 1478, we just sort its digits in ascending order to get the group id.

We then iterate the buckets with 3+ members.
For each bucket
