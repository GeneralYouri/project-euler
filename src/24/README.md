# [Problem 24](https://projecteuler.net/problem=24): Lexicographic permutations

We could iterate all possible permutations, but there are 3 million of them so that won't be very efficient.
Instead we can apply some maths to compute the result one choice at a time.

Let's first look at the example for the digits '012'.
The six possible permutations are, in order: 012, 021, 102, 120, 201, 210.
The number of possible permutations is equal to `3!`; the factorial of 3, with 3 being the number of digits we can choose from.

We can determine the nth permutation in order, one digit at a time.
Since we have three digits, there are three options for the first digit.
Every of these three options results in two permutations, which is the factorial of the number of digits minus one.

---

So let's say we need the 4th permutation here.
We start at the first permutation of 012, so we need to go up three more (4-1).
We can subtract 2 from this value once, meaning that the first digit has ticked over once, and thus we need the digit on index 1, which is the digit 1 itself.
This leaves only two other digits, 0 and 2.
We've now got only 1 extra permutation to travel, and the factorial of 1 is also 1, so the next digit index we need is 1, giving us the digit 2.
The last remaining digit is 0, giving us our end result: 120 is the 4th ordered permutation for the digits 012.

Notice how we're essentially reducing the problem, so this is a recursive algorithm that works on any number of digits or characters - even duplicates.
The factorial value grows fairly fast though, so we can only go up to 18 digits without exceeding `Number.MAX_SAFE_INTEGER` (but we could go way further using BigInts).
