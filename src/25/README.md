# [Problem 25](https://projecteuler.net/problem=25): 1000-digit Fibonacci number

BigInts allow us to simply calculate the value and sum its 302 individual digits.
Ofcourse I've also included a non-BigInt solution.

For this non-BigInt alternative, there are actually very few changes required.
There is only one real place where BigInts solve a floating point limitation, and thus where we need changes.
This is in the Fibonacci generator, where we add our last two fibonaccis to compute the next one.

To make this addition work, chunked addition is implemented.
Similar mechanisms are used on [Problem 16](https://github.com/GeneralYouri/project-euler/blob/master/src/16/README.md) and [Problem 20](https://github.com/GeneralYouri/project-euler/blob/master/src/20/README.md).
Perhaps surprisingly, this approach has a roughly equal runtime compared to the BigInt approach.

---

Finally, there's an experimental solution implemented as alternative2.
This solution doesn't compute the fibonacci numbers at all.
Instead it relies on the growth rate in the sequence as a whole, which is related to the Golden Ratio.
This way we can calculate the index of the 1st 1000-digit fibonacci number directly.
However this approach isn't flawless (yet), as the formula seems to be slightly inaccurate, leading to the occasional off-by-one error.
