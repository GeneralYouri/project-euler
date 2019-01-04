# [Problem 62](https://projecteuler.net/problem=62): Cubic permutations

For this problem, the first thing I noticed was the size of the numbers in the example.
This makes it fairly obvious that we want to be iterating the cube roots to produce all cubes.
It's also obvious that our answer will be larger than the example answer, but I made the assumption here that it would still fit within `Number.MAX_SAFE_INTEGER`.
This assumption ended up holding; in fact as far as I can tell it holds for all inputs up until and including 18.

---

For the solution I've kept things simple.
We iterate numbers `1..`, for every number we calculate its cube.
The we sort the digits of this cube, which becomes the key/hash under which we store this cube.
The sorting step is what makes cubes of different digit permutations group together.
We can then iterate until we find group of the required size (5 for problem input).

For the problem input that's enough, but technically there's a chance that we find the wrong group.
That's because we need to return the smallest cube that's part of such a group, but that doesn't mean the largest cube in that group is also small.
So when we find a match, we also set a limit to stop iteration once our cube exceeds the number of digits of our match.
