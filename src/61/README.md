# [Problem 61](https://projecteuler.net/problem=61): Cyclical figurate numbers

For this problem I'm very happy to have a generic figurate generator in my library, letting me generate any figurate numbers of any figurate order.
Here I've used it to pregenerate all 4-digit figurates of orders 3-8 (triangular - octagonal).
Because we have to compare halves, I've also structured the data such that they're sorted by their 'first half', so their first two digits.
When I have some number and want to try and find the next in the cycle, this lets me fetch all candidate numbers with a simple lookup.

With the data structure in place, I iterate the numbers from one of the figurate orders (I chose triangulars).
For every of those numbers, I try to create a cycle by recursively adding one number at a time.
A cycle must contain one number per figurate order, but the figurate orders can be used in any order (still following?).
Because of this I also keep track of the orders represented by the cycle so far, letting me filter the remaining candidates.

---

The solution was fairly easily generalized to find any cycle of length `n`, representing figurate orders `3..(n + 2)`.
This means that I can easily find solutions for other `n` as well; below is a list of the number of solutions per `n`:

 n | solutions
--:|----------:
 3 |  2
 4 |  1
 5 |  1
 6 |  1
 7 |  8
 8 |  1
 9 |  6
10 |  7
11 | 15
12 | 41
13 | 65
14 | 71
15 | 79
16 | 77
17 | 85
18 | 87
19 | 87
20 | 87
21 | 87
22 | 87

As you can see, for `n` = 4, 5, 6, and 8 there is a unique solution.
For `n` = 3 we're only considering triangular numbers, giving two triangulars that are cyclic with themselves (5050 and 5151).
Interestingly, the number of solutions seems to explode beyond `n` = 10, but shortly after stabilizes again around `n` = 13.
Starting at `n` = 18 the solution count even stays static for a while at 87.
That's also where runtimes start getting a bit long, so I haven't tested any further.

Looking at these results, my hypothesis for further `n` is that they will start decreasing at some point.
Every next figurate order added means one extra number must be included in the cycle.
And while this means there are more options for the order of figurate orders in the cycle, every next figurate order also comes with fewer 4-digit members.
So I think that 87 is the highest number of solutions, and at some point the count will start going down again.
