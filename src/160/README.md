# [Problem 160](https://projecteuler.net/problem=160): Factorial trailing digits

When first reading this problem, I vaguely remembered there being some shortcuts to calculating factorials.
Considering I saw that so easily, it took me way too long to figure out what that shortcut was again.

The shortcut only works because we're interested in a limited number of digits at the end of the factorial.
For sufficiently high `n`, it gives us the rule `factorial(5n) = factorial(n)`.
We can apply this repeatedly to our problem input, to find that `factorial(2560000) = factorial(1000000000000)`.
The lowest we can get here is 2560000 as the next tier of 512000 would be below `1e(digits + 1)`.

---

With the shortcut we significantly reduce our target `n`, but it's still very high with `2560000!` containing over 15 million digits.
We're only interested in a very select few digits, so we can reduce this size in two ways.
First off we're not interested in trailing zeroes, so every iteration we'll divide by 10 as often as possible.
Secondly, now that we remove trailing zeroes, we can apply a modulo every iteration to discard too high, irrelevant digits.

For this second part we do have to be careful, as we have to keep a bit more than the 5 digits we want.
For example: `12 * 5 = 60 => 6`, if we only want 1 digit it'd become `2 * 5 = 10 => 1` which is incorrect.
Higher `n` seem to require more extra digits.
The approach I implemented here is to keep as many digits as possible while keeping the maximum reached numbers below `Number.MAX_SAFE_INTEGER`.
For our problem input this results in a modulo of `1e9`.
