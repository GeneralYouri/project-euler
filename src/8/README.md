# [Problem 8](https://projecteuler.net/problem=8): Largest product in a series

The number is only 1000 digits long, for a 13-digit product this leaves only 1000 - 13 + 1 = 988 possible digit sequences to check.
Besides the simple iteration of all of these possibilities, there are a couple ways to optimize around zeroes in the digits.
When a 0 is encountered, we could:

- Skip 1 iteration

  Skipping one iteration isn't very efficient, especially with a larger digit count per product, as this only skips those products whose rightmost digit is 0.

- Skip 13 iterations (Implemented here)

  Skipping 13 iterations (or the digit count per product) skips all iterations that would include this 0 as any of the digits.
  However, if there are other zeroes within these 13 skipped iterations, then you'll still end up running several useless iterations that include these zeroes.

- Skip to the next product guaranteed to not contain a zero

  Smarter skipping such that you only iterate those products that are guaranteed to not contain zeroes is also possible.
  However this only provides a relatively small performance boost, at the cost of adding some form of extra logic such as array searches.
  For me, the extra complexity didn't seem to generate any measurable performance boost, hence why this strategy wasn't used.
