# [Problem 32](https://projecteuler.net/problem=32): Pandigital products

It's easy to realise that, while we're looking for 9-pandigitals, the actual numbers we'll be working with are much smaller.
That's because we have to divide them over 3 numbers, one of which is the product of the other two.
Additionally, because of the relation between the 3 numbers, we only have to iterate two of them and can then calculate the third.

---

We then look at limiting our search space for each of the numbers.
Because of the product relation we're supposed to work with, we have a simple way to calculate an upper limit for the value of the multipliers.
Given a digit count `n` the maximum length of a multiplier is `(n - 1) / 2`.
The -1 is because the other multiplier needs to be some number, the /2 is because that leaves both a multiplier and the product to account for.
This then translates into a maximum value of 9999 for each multiplier.

The minimum value for a multiplier is 2, since a 1 would result in the other two numbers to be identical.
For odd values of `n` this lets us further reduce our upper limit by a factor 2, to 4999 for our problem input.

---

As per the problem description we need to count every unique product once even when it has multiple valid solutions.
To do so we use a `Set` to keep track of these products, which gives us a unique value guarantee.

Because both multipliers can take on the same set of values, we'll now find pairs of solutions with the same product, but the multiplier values swapped.
We already prune these duplicate solutions by using a `Set` as described above, but we can improve performance further by not even calculating these.
To make that happen we limit one of our two loops to the square root of the limit we already calculated.
