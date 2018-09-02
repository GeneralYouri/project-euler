# [Problem 11](https://projecteuler.net/problem=11): Largest product in a grid

This problem is pretty similar to [Problem 8](https://github.com/GeneralYouri/project-euler/blob/master/src/8/README.md), the main difference being that we now have a 2d grid to search in.
This means that the line of numbers that forms the solution can be aligned horizontally, vertically, or even diagonally.
With 4 Cardinal directions and 4 so-called "Primary InterCardinal" directions, half of these mirror the other half, leaving 4 unique directions to test for.
Furthermore, due to the different possible directions, a bit of extra care must be taken to ensure no out-of-bounds indices are considered.
Other than that the solution simply walks through all options and keeps track of the largest one found, just like in Problem 8.
