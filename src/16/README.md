# [Problem 16](https://projecteuler.net/problem=16): Power digit sum

BigInts allow us to simply calculate the value and sum its 302 individual digits.

Ofcourse I've also included a non-BigInt solution.
For this approach we need to apply repeated, chunked multiplication such that none of our calculations overflow `Number.MAX_SAFE_INTEGER`.

As we know that our result number will greatly exceed this value (302 vs 16 digits), at every iteration we can split our number up in chunks of at most 15 digits.
Working right-to-left, we apply a multiplication to the chunk, and split up the result into 15 digits of output, and overflow digits.
The overflow from iteration `i` is applied simply by adding it to the result after multiplication on iteration `i + 1`.

---

But repeatedly applying just a single power of 2 isn't very optimal.
In fact, because we have to cap our chunks to 15 digits, the largest possible chunk value is 999,999,999, and we could apply three powers of 2 without surpassing `Number.MAX_SAFE_INTEGER`.
When the required power of 2 is not a multiple of 3, we can apply the remainder powers to our base value.
For example: if we want `2^10`, then `10 % 3 = 1`; so our starting value is `2^1`, after which we can apply three multiplications by `2^3`.

We can also optimize further by changing these values.
If we lower the number of digits per chunk, we can further increase the number of powers we can apply per round.
For example: at 15 digits we could apply 3 powers per round, at 14 digits we are an extra factor of 10 below `Number.MAX_SAFE_INTEGER`, and thus we can apply 3 more powers for a total of 6.
Here's a table of all possible chunk sizes, and the theoretical maximum number of powers of 2 that can safely be consumed:

Chunk Size|Powers of 2 per round
---------:|--------------------:
        15|                    3
        14|                    6
        13|                    9
        12|                   13
        11|                   16
        10|                   19
         9|                   23
         8|                   26
         7|                   29
         6|                   33
         5|                   36
         4|                   39
         3|                   43
         2|                   46
         1|                   49

After a bit of trial and error, the optimal configuration for my specific implementation seemed to be a chunk size of 8, and thus 26 powers of 2 per round.
The end result is an algorithm that doesn't rely on BigInt, but still has decent performance in comparison.
It can handle an input of 10k in about 3 seconds; the BigInt version can handle an input of 50k in about the same time.