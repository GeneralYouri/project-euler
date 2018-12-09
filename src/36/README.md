# [Problem 36](https://projecteuler.net/problem=36): Double-base palindromes

This solution mostly just brute forces the search space.
However as the problem description mentions, leading zeroes are not allowed.
And since we're looking for palindromes, the same goes for trailing zeroes, in both bases.
This means we can skip all multiples of either of our bases: 10 and 2, meaning we skip all even numbers and only test all odd numbers.

We're again working with individual digits for this problem.
Unlike some of the other problems were we did this, the math-based approach is a bit more convoluted here.
It would involve a math-based approach for both the palindrome test and the binary conversion.
I estimate that the added logic, while being rather convoluted, will barely lower the solution's runtime, if at all.
As such this refactor has not been implemented.
