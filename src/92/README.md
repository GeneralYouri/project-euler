# [Problem 92](https://projecteuler.net/problem=92): Square digit chains

For starters, this solution involves number digit handling.
JS is famously poor at this because there are no built-ins to help us, and the go-to approach involves converting a number to and from a string, which has atrocious performance.
For this solution this happens at every step in a chain and so it's a fairly important part of the runtime.
So instead of a string-based approach, we use some maths to iterate the digits of a number.

---

There's several repetitive patterns to be found in solving this problem.
For starters, we have the given fact that all numbers end up at 1 or 89.
If we were to work in reverse that would give us a tree-like structure of numbers that also eventually end up at 1 or 89.
In this solution we're not working in reverse, but we are recording where every number ends up at.
This lets us shortcircuit a chain as soon as we find a number that we've handled before (and thus we know where it ends at).

---

Another optimization is that the chaining algorithm produces very small numbers, because of how the squares of digits are *added*.
This means that the maximum size of a chained number grows with the log of our upper limit (so very slowly).

To calculate this, we first realize that, since we're handling individual digits, there are only 10 options (0-9).
In this solution their squares are hardcoded in a simple lookup table, although that barely matters for speed.
What does matter is that this gives us a largest result value of 81 per digit.
If we now take our input limit, we can count how many digits it will have at most and multiply that count by 81.
This gives us the highest chain product we can get, which for our problem input is 7 * 81 = 567.

What this practically means, is that besides our initial numbers which range from 1 to our problem input, all other numbers that are produced range only from 1 to 567.
To take advantage of this, we pre-calculate which values are produced by these numbers, and record the from/to pairs in a map.
Then in our main iteration we only have to perform the algorithm once for every number.
If we don't find a match after that one step, we can simply use the lookup table to skip having to perform the algorithm again.
