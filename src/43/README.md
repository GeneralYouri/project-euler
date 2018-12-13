# [Problem 43](https://projecteuler.net/problem=43): Sub-string divisibility

**Note:** *This solution does not accept input*.

Instead of running 10 billion iterations, we generate all 0-9 pandigitals by using the same permutation function as used in [Problem 41](https://github.com/GeneralYouri/project-euler/blob/master/src/41/README.md).
This gives us 3,628,800 candidate numbers, of which we can skip another 10% due to starting with a 0.

For each candidate number we perform a Sub-String Divisibility check; basically just implementing the very specific rules of the problem.
This check has been generalized though, so it accepts any number, plus a list of divisors to apply sequentially, plus the length of sub-strings.

---

Due to the used divisors being a static collection (1, 2, 3, 5, 7, 11, 13, 17), we can pregenerate their multiples.
This skips having to perform a division for every sub-string, which tends to be an expensive operation.
However in practice this resulted in a 5% increase in runtime for our problem input.
As it turns out, the generation of permutations is by far the most expensive part of this calculation.

---

[TODO] An alternative solution that incrementally builds up a number out of digits that match the division requirement.
For example, we can start by iterating the multiples of 17 between 100 and 999 (so from 102 to 986).
For those 3-digit numbers that have 3 distinct digits, we then have a limited number of digits to add to create a 4-digit number.
For each of these we again have to verify the divisibility, with 13 this time.
We can repeat this process recursively until our 10 digit numbers are created.

This approach is much faster because the vast majority of candidate numbers are never even calculated.
For example, if we only apply the first part of this logic, where we iterate multiples of 17, that gives only 53 3-digit numbers.
For each of these we could generate permutations of the remaining 7 digits, giving 5,040 results each.
That would already shrink our search space from 3,628,800 numbers to just 519,120 (= 53 * 5,040); roughly a factor 7.
