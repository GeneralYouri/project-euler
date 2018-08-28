# [Problem 2](https://projecteuler.net/problem=2): Even Fibonacci numbers

To sum all even fibonacci numbers, we need to first start by looking at the full fibonacci sequence.
It's easy to find that only every third fibonacci number is even, meaning we can skip 2/3rds of the fibonacci numbers.

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
We can also add a 0 infront to 'fix' the calculation for 8 properly.

The only differences compared to the fibonacci sequence are that `fib(n - 1)` is counted four times, and that the starting numbers are different.
Using this strategy we can not only skip all odd fibonacci numbers, we don't even calculate them anymore.
