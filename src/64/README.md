# [Problem 64](https://projecteuler.net/problem=64): Odd period square roots

This problem essentially requires computing the continued fraction expansion for the square root of an integer.
My initial implementation relied on increasingly smaller fractional numbers, which causes significant precision loss after finding just a few terms.
After some research I found out how to alter the algorithm to use the original sqrt as the only fraction, with all intermediate variables being integers.
This means that loss of precision isn't a factor anymore, allowing the precise calculation of all continued fractions.
