# [Problem 27](https://projecteuler.net/problem=27): Quadratic primes

The current solution is a simple brute force over the search space.
We simply iterates all possible values for `a` and `b`, and generates values for `n = 0..` until a non-prime is encountered.
Meanwhile we keep track of the best value found to return it in the end.

I'm fairly confident that there's a big optimization to be made here, but I'm drawing blanks on where to look for it.
