# [Problem 89](https://projecteuler.net/problem=89): Roman numerals

For this problem we're given a list of Roman numerals, and must return the number of characters we can save by writing these numerals in their minimal form.
To determine the characters we can save, for each input numeral we construct the minimal form and compare lengths.
To make this process easy we have separate functions for parsing a given numeral into its value, and for constructing a numeral for a given value.

---

To simplify both parsing and constructing numerals, we can include subtractive pairs in our list of denominations.
For parsing a numeral, this lets us greedily take the first denomination that matches the start of our remaining numeral, and add its value.
For constructing a numeral, this lets us greedily add the denominations with the largest value as long as our remainder exceeds that value.
