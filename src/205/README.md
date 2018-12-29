# [Problem 205](https://projecteuler.net/problem=205): Dice Game

For both players, there is a very small range of possible scores.
For Pete with 9 four-sided dice that's 9-36, while for Colin with 6 six-sided dice that's 6-36.
We then iterate all possible combinations of scores for each player, and record how often every score is achieved.

With this data we can iterate Pete's scores.
For each possible score `s` he wins a number of games equal to how often he scored `s`, multiplied by how often Colin scored below `s`.
Finally, the total number of unique games is derived via `4 ^ 9 * 6 ^ 6`.
