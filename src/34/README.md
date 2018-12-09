# [Problem 34](https://projecteuler.net/problem=34): Digit factorials

The problem description gives us an obvious lower limit of 10 for our search space.
If we inspect the growth rate of the formula being described, we can also establish a safe upper limit.

For any single digit, they can contribute anywhere from 1! and 9! to the sum.
So the most they can contribute is 9!, which is 362880.
This number is actually 6 digits long, so we then multiply this sum by 6 to get 2177280 as the upper limit for 6 digit numbers.
This adds a 7th digit though, so we add another 362880 to get 2540160 as the upper limit for 7 digit numbers.
Since this sum is 7 digits itself, and adding another digit wouldn't cause the sum to exceed 7 digits, this is our highest possible candidate.
Any numbers beyond this limit are too large to be formed by the sum of the factorials of their digits.

With our search space thoroughly delimited, it's fairly trivial to brute force through.
This reveals the only two numbers that satisfy the problem description: the given example of 145, and the number 40585.

A digit can only have one of ten different values, and thus so can their factorial.
Using this we can further reduce the runtime by up to 50% by memoizing the factorials of 0-9.

I originally stringified numbers to separate out their individual digits.
This proved to be the biggest slowdown in the entire algorithm, so this has since been rewritten.
Now digits are split off one by one using simple maths, resulting in about 5x faster runtimes.

The problem description doesn't leave much room for generalisation, so this solution doesn't accept any input.
