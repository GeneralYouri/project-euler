# [Problem 4](https://projecteuler.net/problem=4): Largest palindrome product

Checking whether a given number is palindrome in JS is a bit annoying, as neither Number nor String types offer helpful methods here.
The best approach is probably to use `Array.prototype.reverse()`, though this still requires the intermediate cast to and from String type.

For the algorithm itself, the problem description gives us some pretty good limitations.
The palindrome we need to find is exactly 6 digits long, and must be the product of exactly two 3-digit natural numbers.
This means we only have 900 possible options for each of the two numbers.
But due to how palindromes work, there are also only 900 possible palindromes to form.

A brute force solution would simply try all 900*900 combinations of two 3-digit numbers, but this has two main limitations.
For one, the vast majority of combinations won't result in a palindrome, meaning we're running that annoying palindrome checker function an awful lot.
Second, we basically have to try *all* of the combinations before returning our answer, even though just the first potential answer we find would already invalidate a ton of combinations.

---

So instead of brute forcing, we use the fact that the number of palindromes is also just 900.
Instead of trying every combination of two 3-digit numbers, we try every palindrome.
Then for every palindrome we try to divide with all 3-digit numbers to see if we get another round, natural, 3-digit number.

At first glance this may seem like it would be similar in runtime, except instead of checking for a palindrome we now construct one.
However this approach has a major advantage, in that we now have control over the order of palindromes checked.
This lets us iterate highest-to-lowest, and early return once we find the first valid palindrome, skipping the vast majority of 3-digit combinations entirely.

---

If we inspect the requirements for palindromes a bit closer, we'll find a further optimization that lets us skip about 91% of all number combinations.
As it turns out, at least one of the two 3-digit numbers must be a multiple of 11.
[See this forum post](https://projecteuler.net/thread=4#1211) for the explanation.
