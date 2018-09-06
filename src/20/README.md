# [Problem 20](https://projecteuler.net/problem=20): Factorial digit sum

This Problem is very similar to [Problem 16](https://github.com/GeneralYouri/project-euler/blob/master/src/16/README.md), and the same strategies apply.
BigInts allow us to simply calculate the value and sum its individual digits.
Ofcourse, much like for Problem 16, I've also included a non-BigInt solution.

As much of the strategy remains the same as for Problem 16, I'll only talk about the differences here.

---

Whereas Problem 16 always had the same multiplier being applied over and over (2), for this problem the multiplier always changes.
This is problematic, as it means we can't precalculate a combination multiplier to minimize the number of multiplications being done.

We can still apply chunked multiplication much like we did for Problem 16 though.
Due to the changing multiplier values, we can calculate a safe chunk size by dividing `Number.MAX_SAFE_INTEGER` by our input value, as this is the largest number we'll be multiplying with.
For the main input of 100, this comes out as just over 9e14, which means we can work with chunks of 14 digits.

---

Even though we can't precalculate a multiplier, we can still apply multiple multipliers per round if we really want to.
While this doesn't save us on multiplications, it does save us on all the other operations that must be performed per round, such as the type coercion from/to string.
We can calculate the maximum allowed chunk size for a given number of multiplications per round, much like how we got 14 digits per chunk for 1 multiplication per round.
Unfortunately this also means that, unlike with problem 16, because our largest multiplication now depends on our input, so does our chunk size.
The below table shows the allowed chunk values for the main input of 100:

Multipliers per round|Chunk size
------------------------:|---------:
                        1|        14
                        2|        12
                        3|        10
                        4|         8
                        5|         6
                        6|         4
                        7|         2

Note how quickly the values go down; the higher our input the faster the chunk size is reduced.
In fact, this also means that input numbers above 1/10th of `Number.MAX_SAFE_INTEGER` are not computable, as the chunk size would have to be 0 to perform safe multiplications.
Ofcourse, due to the large numbers involved, performance issues come up *way* before this point is reached (even for the BigInt approach).

To come up with a decent combination of chunk size and the number of multipliers per round, we can divide up our available space in two parts.
For example, 50% of `Number.MAX_SAFE_INTEGER` goes to upping the number of multipliers per round, while the other 50% goes to upping the chunk size.
To do so, we work with log10 and see how many times our input number fits within that 50%.
Then we calculate how much is left and base our chunk size off that.

TODO: For this problem, applying multiple number per round has not yet been implemented.
