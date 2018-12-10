# [Problem 37](https://projecteuler.net/problem=37): Truncatable primes

This problem is very similar to [Problem 35](https://github.com/GeneralYouri/project-euler/blob/master/src/35/README.md).
In both cases we apply some type of permutation rule on primes to get a collection of numbers, and then we test them for some property.

Also similar to Problem 35, is that we can filter our search space by considering permutation we're applying.
The right-to-left truncated permutations each end on a different digit of our candidate number.
This means that every digit in a candidate number must one of 1, 2, 3, 5, 7, 9.
The digits 2 and 5 are included because of the existance of the primes 2 and 5; so any candidate number can still be valid if it begins with a 2 or 5.
This also means they can only be the first digit of our candidate number, but adding such specificity comes with too much computational overhead.

For this problem there's no upper limit given, nor does one exist.
Instead we're given knowledge about how many primes exist that satisfy our property, so we continue searching until we've found that many matches.
This also means that this problem can't be generalized and thus does not take any input. 
