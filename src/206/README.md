# [Problem 206](https://projecteuler.net/problem=206): Concealed square

The vast majority of number won't be perfect squares of any number, so if we're going to iterate then we'll iterate the sqrts of our target numbers.
We can calculate bounds for our search space by filling in the blanks with 0 and 9 respectively, and taking the sqrt.
This gives a lower bound of 1010101010 and an upper bound of 1389026624.

---

When a square ends with a 0, that means its sqrt also ends at a 0; after all if you take the square of any other digit you won't get 0.
This lets us ignore the last two digits of the square (as they'll both be 0), and thus lets us divide both our bounds by a factor 10: 101010101 - 138902662.

We can apply the same logic once more: the new last digit is now a 9, and there are only 2 digits whose square ends at a 9: 3 and 7.
So out of all our candidate sqrts, only those ending in 3 and 7 are relevant, another 80% reduction of our search space.

---

With all the optimizations out of the way it's time to iterate the remaining candidates.
For every candidate we calculate the square, and then use a bit of maths to verify the known digits.
Since we're given that there's a unique solution, we can break on the first match.

As it turns out, the answer is extremely close to our upper bound; reversing the search reduces the runtime from 4s to <1ms.
However I don't really have any proof to let me make this assumption, and it may very well not hold for other masks and lengths.
This makes it more of an after-the-fact find, and as such it hasn't been implemented.
If I do find a valid reason to optimize further then I will definitely have to revisit.
