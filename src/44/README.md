# [Problem 44](https://projecteuler.net/problem=44): Pentagon numbers

**Note:** *This solution does not accept input*.

The solution currently uses brute-force to find the first pair of pentagonal numbers that fulfill both requirements.
We iterate all pentagonals in increasing order, while also caching them for future use.
Then for each pentagonal, we iterate the cached pentagonals up until now (which contains all pentagonals below our current).
This gives us all pairs of pentagonals, for which we validate the conditions of their sum and difference both being pentagonal.
