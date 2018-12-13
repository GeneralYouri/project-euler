# [Problem 67](https://projecteuler.net/problem=67): Maximum path sum II

**Note:** *This problem uses the same solution as [Problem 18](https://github.com/GeneralYouri/project-euler/blob/master/src/18/README.md).*

We need to compute the largest possible sum of values, for which the values lie on a vertical path through the triangle of numbers.
That is to say, a path contains 1 number per row in the triangle, and to go from one row to another we can only choose the number immediately left or right.
The problem description calls it "maximum total from top to bottom of the triangle".

The most important realisation here is regarding of locality: if traversing from top to bottom, the optimal choice at any time depends only on those rows further down, not on your choices further up.
So the principle of Optimal SubStructure applies.

---

Because of this, we can best work bottom-to-top to determine the path with the largest sum, as this prevents us from having to make the same choices more than once.
For every two consecutive numbers in the bottom row, we compute and store the largest of the two.
The resulting row is now one number shorter, thus exactly the length of the second row from the bottom.
We can now safely combine this resulting row with the second row from the bottom (and use it as the new second row from the bottom), as we've made the optimal choices for the bottom row.

This essentially reduces the problem from an `n`-row triangle to an `n-1`-row triangle.
We can repeat this process for every row until we're left with a triangle of 1 row containing 1 value: our output, the largest possible sum for a vertical one-way path through the triangle of numbers.
