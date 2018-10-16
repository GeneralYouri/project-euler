# [Problem 31](https://projecteuler.net/problem=31): Coin sums

Before we begin, it's worth noting that this solution supports any set of allowed coin values.
However, the solution also assumes that any currency amount can be created with these coin values.
Essentially this means that the coin value '1' is assumed to be included within the list of allowed coin values.

---

Here are five ways to make 6p:

- 1x5p + 1x1p
- 3x2p
- 2x2p + 2x1p
- 1x2p + 4x1p
- 6x1p

To determine in how many unique ways you can produce some amount of currency, you can distinguish multiple cases.
The idea is to start with one coin and then see what amount we're left with.

- First of all, we can use a 5p coin.
This leaves just 1p, for which there is obviously only one way to produce it.
- Similarly we can use a 2p coin.
In this case we're left with 4p, for which we need to recurse in order to find that this can be created in three ways.
- Finally we can use a 1p coin.
This leaves us with 5p, and recursion would tell us this can be created in 4 ways.
... But wait a minute, this is not what is listed!

The reason for this is that there are duplicates involved.
Three of the four ways are also included in the above cases, one of which simply uses a single 5p coin.
This would mean that we have a case of 1x1p + 1x5p, which is identical to the very first case of 1x5p + 1x1p that we already counted.

To make sure we don't count these duplicates, we have to limit the allowed coin types when we recurse.
For every individual case, we recurse with only those coin types that are at most as large as the coin we started with in that case.
Additionally it makes little sense to allow coin types larger than the remainder.
So if we start with a 1p coin, we recurse for the remaining 5p, but we're limited to using 1p coins only (and not 2p or 5p).

---

This approach works quite well, including for the main input.
However if we start using larger inputs, our runtime starts increasing very quickly.
That's because during our recursion, as we branch out our recursion tree, we start seeing the same arguments come by that we've already handled before.
As a simple example, if we have to make 20p then one of our cases starts with a 10p coin, with a remainder of 10p to be created with only 1p,2p,5p,10p coins.
Now if we have to make 30p then one of our cases starts with a 20p coin, with the same remainder of 10p and the same allowed coin values of 1p,2p,5p,10p.

To solve this we implement a simple caching system for our recursion results.
Since our answers are unique for every combination of remainder and the list of coin types, we use a simple hashing function to essentially just stringify and combine these two arguments.
This simple caching system almost entirely eliminates the runtime growth when our input amount grows.
