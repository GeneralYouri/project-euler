# [Problem 39](https://projecteuler.net/problem=39): Integer right triangles

The Pythagorean Theorem can obviously be applied here.
When we know two of the side lengths, we can use it to calculate the third.
Our problem description requires `a + b + c <= 1000`.
Pythagoras gives us `a*a + b*b = c*c`, which also gives `a < c` and `b < c`.
For the most extreme integer triangles, those with the smallest angles, `a` is tiny while `b` and `c` differ by only one.
From all of this info we can deduce that both `a` and `b` must be less than half the length of the perimeter (`< 500` for our problem input).

With those limits the solution iterates all remaining combinations for `a` and `b`.
For every combination `z` and `p` are calculated.
If `p` is below our limit and `z` is an integer, then we record this triangle as a solution for `p`.
When we're done we simply search the `p` that recorded the most solutions.
