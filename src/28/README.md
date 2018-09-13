# [Problem 28](https://projecteuler.net/problem=28): Number spiral diagonals

There's a lot of structure to be found within the spiral being formed.
For example, it's easy to recognise that going north-east from the center point gives you all odd squares.
Furthermore, due to the way the spiral grows in size, the length of a side is proportional to the size of the spiral.
Every layer of the spiral, your numbers increase by 4x the length of a side.
For any layer, the difference between every sequential pair of corner numbers is identical, because their side lengths also are.
Since the largest corner value of a layer is the top-right number, and the smallest is the bottom-right number, the average value of a layer is found in the middle-left; so in a straight line to the left starting from 1.

Eventually, a straightforward solution arises.
We can calculate the sum of the corner number for every layer individually, based on the square in its top-right corner, which we can calculate easily.
We define our layer index `layer`, which is 0 for the single number 1 at the center of the spiral, 1 for the layer of 8 numbers around it, 2 for the next layer, etc.
We can now compute the square in the top-right corner via `square = (2 * layer + 1) ^ 2`, while the side length is `2 * layer`.
From here we can move to the layer average by subtracting 1.5x the side length: `avg = square - 3 * layer`.
Finally, every layer has four corners, so the sum of corners for a layer is `4 * avg`.
Our answer is the sum of the layer sums for all the layers within our spiral size.

---

Due to the abundant amount of structure within the spiral, we should also be able to calculate the value directly, without any iteration involved.
This is similar to [Problem 6](https://github.com/GeneralYouri/project-euler/blob/master/src/6/README.md), where we computed the sum of squares with a formula instead of iteration.
For this problem, we have only odd squares, and we're not summing the squares themselves, but we're summing different values which are based on the squares.

```javascript
    const sumOfNSquares = n / 6 * (2 * n + 1) * (n + 1);
    const sumOfNEvenSquares = 2 * n / 3 * (2 * n + 1) * (n + 1)
    const sumOfNOddSquares = n / 3 * (2 * n + 1) * (2 * n - 1);
```

I haven't figured out exactly how to apply our specific requirements to this formula just yet.
// TODO: write a solution based on direct calculation, without iteration
