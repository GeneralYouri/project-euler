# [Problem 25](https://projecteuler.net/problem=25): 1000-digit Fibonacci number

BigInts allow us to simply iterate the fibonacci sequence until we reach 1000 digits.
Ofcourse I've also included a non-BigInt solution.

For this non-BigInt alternative, there are actually very few changes required.
There is only one real place where BigInts solve a floating point limitation, and thus where we need changes.
This is in the Fibonacci generator, where we add our last two fibonaccis to compute the next one.

To make this addition work, chunked addition is implemented.
Similar mechanisms are used on [Problem 16](https://github.com/GeneralYouri/project-euler/blob/master/src/16/README.md) and [Problem 20](https://github.com/GeneralYouri/project-euler/blob/master/src/20/README.md).
Perhaps surprisingly, this approach has a roughly equal runtime compared to the BigInt approach.

---

Both our solutions so far have required iteration.
But as seen before on [Problem 2](https://github.com/GeneralYouri/project-euler/blob/master/src/2/README.md), Binet's formula can calculate the index of the fibonacci number nearest to a given number.
This is almost exactly what we're being asked to calculate here: we'll just find the index of the nearest fibonacci number to our limit.
The one difference is that the 'closest' index can ofcourse also be the largest fibonacci below our limit, which we also account for.

The result is that we've reduced our iteration (for the problem input of 1000 there's almost 5k cycles) to a couple formulas.
This gives us a drastic runtime improvement; what took a tenth of a second to calculate is now instant (<1ms).
As this solution has easily the best performance of the three solutions discussed, it's included as the main solution.
