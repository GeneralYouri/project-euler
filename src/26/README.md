# [Problem 26](https://projecteuler.net/problem=26): Reciprocal cycles

For this problem we need to find the longest recurring cycle in a fraction's decimal part.
Because decimal values are a pain to work with, especially due to floating point limitations, we'll be working with integers instead.
Infact, we'll not even compute the actual fractions at all, instead we'll be relying on the modulo operator to do the work for us.

We'll break down division into small substeps, such as what you might have learned as a kid, except we're sort of going through this in reverse.
The gist is that we'll repeatedly multiply our numerator by 10, and then calculate the modulo of that number and our denominator, which then becomes our new numerator.
A cycle is found when we encounter a numerator that we've seen before, as this means that all subsequent calculations will be identical.

To be able to return the cycle length we keep track of when we encountered which numerators.
If we have a remainder of 0 that means we've finished our division in a finite number of decimal places, and therefore there is no repeating cycle (the cycle length is 0).

Because we use the modulo with the denominator `n`, this leaves only `n - 1` possible values for our numerator, which is the theoretical limit on cycle length for any `n`.
By iterating from the highest candidate denominator to the lowest, we can use this upper bound to implement an early return.
The moment we reach an iteration where our denominator `n` is lower than the largest cycle length we've found, this guarantees we can't find any larger cycles.
