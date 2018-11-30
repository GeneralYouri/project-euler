# [Problem 2](https://projecteuler.net/problem=2): Even Fibonacci numbers

To sum all even fibonacci numbers, we need to first start by looking at the full fibonacci sequence.
It's easy to find that only every third fibonacci number is even, meaning we can skip 2/3rds of the fibonacci numbers.

---

However we can do one better. If you output the first five even fibonacci numbers, you get:
```javascript
   2, 8, 34, 144, 610
```
Inspecting this new sequence, we can find a structure behind it.
We're essentially creating a variant on the regular fibonacci sequence.
```
  8 = 4 *   2
 34 = 4 *   8 +  2
144 = 4 *  34 +  8
610 = 4 * 144 + 34
```
So every next number is now computed by the sum of four times the previous number, plus one time the number before that.
`fib(n) = 4 * fib(n - 1) + fib(n - 2)`
We can also add a 0 at the 0th index to 'fix' the calculation for 8 properly.

The only differences compared to the fibonacci sequence are that `fib(n - 1)` is counted four times, and that the starting numbers are different.
Using this strategy we can not only skip all odd fibonacci numbers, we don't even calculate them anymore.

---

The alternative solution uses a fairly well-known formula for calculating the sum of the first n fibonacci numbers: `fibSum(n) = fib(n + 2) - 1`.
By making some minor adjustments, we're able to use this formula for the sum of the first n even fibonacci numbers.

Let's first compare the two sequences:

index         |  0|  1|  2|  3|  4|  5|  6|  7|  8|  9| 10| 11| 12
:-------------|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:
Fibonacci     |  0|  1|  1|  2|  3|  5|  8| 13| 21| 34| 55| 89|144
Even Fibonacci|  0|   |   |  2|   |   |  8|  |   |  34|   |   |144

Recall the basics of the fibonacci sequence: `fib(n) = fib(n-1) + fib(n-2)`.
Due to this rule, something very interesting happens in the above table.
We already knew that only every 3rd fibonacci number is even.
But for every even fibonacci, the two odd fibonaccis that we skipped combine to that same even fibonacci number.
So if we were to sum these sequences, for indices that are a multiple of 3, the sum of even fibonacci numbers will be exactly half the sum of all fibonacci numbers.
In formula form, using the `fibSum` definition: `evenFibSum(n) = fibSum(3n) / 2 = (fib(3n + 2) - 1) / 2`.

This means that we've found a direct formula to sum the first n even fibonacci numbers.
However our input is not a fibonacci index, but a number limit.
So to be able to use the formula, we need to first calculate the index of the largest fibonacci number below this limit.
Binet's formula allows us to calculate the index of the fibonacci number nearest to a given number.
This can return either the largest fibonacci below our limit, or the smallest fibonacci above our limit (in which case we subtract 1).
We then pass this index into our `fibSum` formula and we're done.
