# [Problem 55](https://projecteuler.net/problem=55): Lychrel numbers

For this problem the solution quite literally implements the provided algorithm.
We iterate the candidate numbers, and perform 1-49 iterations of reverse-add on it while checking for palindromes.
To slightly simplify logic we count the numbers that *do* produce palindromes in under 50 iterations, and subtract that from our candidate count at the end.

The example shows a number just above our search space limit, which requires just over 50 iterations to reach a palindrome, quite a big number in fact.
So this raises potential concerns over hitting the `Number.MAX_SAFE_INTEGER` limit and potentially messing up our calculations.
Luckily for us all non-lychrels in our search space produce a palindrome in at most 24 iterations, and the highest numbers reached are within our float limitations.
