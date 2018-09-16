# [Problem 30](https://projecteuler.net/problem=30): Digit fifth powers

We can start by identifying an upper bound for our search range.
As the 5th powers of the digits are combined additively, their sum grows much slower than then input number itself does (x10 per digit).
The first digit count where the maximum sum of its digits to the 5th power does not cover all possible numbers with said digit count, is 6.
At 6 digits, the maximum sum is `6 * 9^5 = 354294` (our upper bound), which is less than the highest 6 digit number 999999.

For this problem it's easy to notice that we can feasibly brute force this.
We're using 5th powers but only on 1 digit numbers, and summing these values only adds a factor 6 due to our upper bound above, all of this is well within our float limitations.
Worth noting is that our lower bound is set at 10, since the problem description doesn't consider single digit numbers to have a digit power 'sum'.

---

If you look at the operations that are happening, you may notice that while we're calculating the nth power for every digit in every candidate number, there are only ever 10 possible outcomes, as there are only 10 possible digit values.
Thus we can prevent this repeated calculation by precalculating the nth powers for the 10 possible digit values; 0-9.
Perhaps surprisingly, this ended up giving me an almost unnoticeable performance improvement.
The reason for this is that the by far largest performance cost per iteration here lies with the coercions between number and string types.

We can solve this by using a mathematical approach to identifying the digits, as opposed to using `''.split`.
To do so we iterate our candidate number, taking it mod 10 to give us our next digit.
As long as we remove this digit and divide by 10 at the end of every iteration, we'll handle every digit once and end up at a remaining value of 0.
This change added a performance boost of about a factor 15; just goes to show that, despite using one `%` AND one `/` per iteration, the number-based solution still vastly outperfors the string-based solution.

---

Unfortunately we haven't been able to save on iteration count, and the upper bound for candidate numbers still increments with around a factor 10 per power.
This means that the log of our iteration count (and thus our runtime) grows with our input power, resulting in the input of 7 to already require 2 whole seconds.
So even though 15 is the highest input power that can be handled by floating points, we have to give up at just about half that due to computation time.

One thing I personally found interesting, is the amount of numbers that match the requirement for each of the powers; it very constantly stays around a handful.
See below for a table with some of the results.
This leads me to believe that there could be some analytical trickery to eliminate most of the candidate numbers and gain a *much* more lenient computation time scaling.

Input|Count|       Sum|Matches
----:|----:|---------:|:--
    3|    4|      1301|153, 370, 371, 407
    4|    3|     19316|1634, 8208, 9474
    5|    6|    443839|4150, 4151, 54748, 92727, 93084, 194979
    6|    1|    548834|548834
    7|    5|  40139604|1741725, 4210818, 9800817, 9926315, 14459929
    8|    3| 137949578|24678050, 24678051, 88593477
    9|    4|2066327172|146511208, 472335975, 534494836, 912985153

All inputs below 3 have 0 matches.
The main problem input of 5 took about 20ms.
The input of 9 took a whopping 9 minutes to compute, although it 'only' took about a minute to find the actual matches.
