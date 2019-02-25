# [Problem 92](https://projecteuler.net/problem=92): Square digit chains

There's several repetitive patterns to be found in solving this problem.
For starters, we have the given fact that all numbers end up at 1 or 89.
If we were to work in reverse that would give us a tree-like structure of numbers that also eventually end up at 1 or 89.
In this solution we're not working in reverse, but we are recording where every number ends up at.
This lets us shortcircuit a chain as soon as we find a number that we've handled before (and thus we know where it ends at).
As an analogy, we're building out the tree by taking a fresh leaf, and traversing the branch until we hit a known branch, and repeat this.

---

Another optimization is that the chaining algorithm produces very small numbers, because of how the squares of digits are *added*.
This means that the maximum size of a chained number grows with the log of our upper limit (so very slowly).
As a matter of fact, it grows linear with the digit count in the limit, since individual digit squares are being added.
This gives us a maximum value of 81 per digit, and 7 * 81 = 567 for our problem input.

This means that applying the chain operation just once, on any number in our search space, will give us a number from 1 to 567.
So we essentially split up our search space in two and do these small numbers first, which may need more than one iteration as we're calculating them.
But then when they're done, we have all numbers 1-567 mapped out, so for all remaining larger numbers we only need a single chain operation each.

---

To perform the actual chain operation, we have to split up our number into individual digits.
Using string manipulation makes this costly, too costly to put into the main iteration.
We can also use repeated division to calculate the digits, but even that is noticeable in runtime.
Since we're simply iterating our search space, we can actually predict the number: it's 1 larger than our last number.

The approach I ended up using, was to store the number as a digit array from the start.
This means we don't have to split up our number into digits - that's already done for us.
Additionally, moving to the next number, as in incrementing by 1, is easily implemented with a single optional carry option.

In fact, just like how we keep a running total for our number, we can do the same for the actual chain result.
For example, the number 14 chains to `1^2 + 4^2 = 17`, the next number 15 chains to `1^2 + 5^2 = 26` which we can also get via `17 - 4^2 + 5^2`.
For this example the operation count is the same, but when numbers get larger, instead of the operation count also getting larger we now retain just 2 operations (90% of the time).

---

### Update

*A new main solution has been added, pushing the above solution into alternative 1.*

*This solution accepts limited input; in particular only whole powers of 10 are supported.*

The new main solution uses an alternative strategy based on an important observation from our problem input.
Our problem input is 1e7, which means our search space is 0 - 9999999.
Rewriting the 0 as 0000000, we can also look at this as the collection of all permutations of length 7, of the digits 0-9.
This should also clarify why this solution only accepts whole powers of 10 as input; otherwise not all permutations would count.

For our purpose, the order of the digits doesn't matter, which means that we can group and count the permutations by the combination they represent.
To do so, we iteratively count permutations for every combination, in a way.
We first consider a single digit 0-9, obviously every digit can be created in exactly one way.
But then we consider the second digit - for every one of these we can have any of the first digits, so we re-use those results.
Results are counted based on their target value - ie the value after a single chain operation, 0-567.

This alternative approach is ha huge runtime improvement, because it no longer has to iterate the whole search space.
Our old solution is `O(input)` while our new solution is `O(digits) * O(digits * maxDigit^2) * O(types)` which combines to `O(digits^2 * maxDigit^2 * types)`.
Here, `digits = log10(input)` (max. #digits of a candidate number), `maxDigit = 9` (max. value per digit), `types = 10` (#values per digit).
Both `maxDigit` and `types` are constants though, so the scaling component is just `O(digits^2) = O(log10(input)^2)`.
So while the constant gets significantly bigger, the time complexity grows much slower with input, making it way faster.
