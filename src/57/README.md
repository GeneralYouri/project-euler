# [Problem 57](https://projecteuler.net/problem=57): Square root convergents

Using the principle of continued fractions you can separately calculate and track the numerator and denominator for the fraction.
We then compare the floored log10 of both to see whether the numerator has more digits or not.

The numbers do grow pretty fast, and we need to go through 1000 of them, so we quickly run into floating point limitations.
However, since we're not interested in the actual values of the numbers, we're free to modify them a bit so they remain workable.
In this case, whenever the numerator exceeds 100, both numbers are divided by 10.
Floating points are naturally inaccurate, but this way they're still easily accurate enough to handle our required comparisons just fine.
