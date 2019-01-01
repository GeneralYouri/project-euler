# [Problem 52](https://projecteuler.net/problem=52): Permuted multiples

Since both `1x` and `6x` need to contain the same digits, their length must also be the same.
This lets us decrease the size of our search space significantly.
For example, for 6 digit numbers, possible candidates for `6x` are 600000-999999.

Additionally `x` must contain at least 3 digits, as that lets us permute the digits into 6 different numbers.
This is required because we must be able to produce 6 different numbers for `1x` through `6x`.
Practically, `x` is likely to contain at least 6 digits, but I couldn't come up with a proof to apply that as a constraint on my search space.

---

In hindsight, the answer was fairly obvious, potentially guessable even.

The given example of 125874 is the lowest number where 1x and 2x have the same digits.
The problem answer is not just the lowest number where 1x - 6x have the same digits, but is the answer even for just 1x - 3x.

The answer also has an interesting property between the values for 1x - 6x.
Besides all 6 numbers having the same digits, they're also mostly in the same order.
For example, 3x takes the first digit of 1x and moves it to be the last digit instead; the other digits remain in-order.
