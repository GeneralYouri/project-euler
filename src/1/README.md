# [Problem 1](https://projecteuler.net/problem=1): Multiples of 3 and 5

No iteration is required here, we can simply calculate the answer.

For our problem, we have a sequence containing all natural numbers from 1 up to our problem input.
Note how no numbers within the sequence range are omitted, as the linear sequence increments by 1.

---

For any linear sequence of numbers you can find their average by adding the lower and upper bounds and dividing by two.
You can then find the sum of all numbers in the sequence by multiplying this average with the length of the sequence.
We use this strategy to sum all multiples of 3 and 5 separately.

Since numbers can be multiples of both we need to then subtract these again to prevent them from counting twice.
We do this by subtracting the sum of all multiples of the product of 3 and 5, as by definition this gives us all numbers divisible by both 3 and 5.

Examining the answers for different inputs actually shows more underlying structure.
For values of n >= 2 and the input being 10^n, the answer is of the form `2, 3[n-1], 1, 6[n-2], 8`.
That is to say, a two, followed by n-1 threes, followed by a one, followed by n-2 sixes, followed by an eight.
