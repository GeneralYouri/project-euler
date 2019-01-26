# [Problem 73](https://projecteuler.net/problem=73): Counting fractions in a range

This is a repeat of [Problem 72](https://projecteuler.net/problem=72), with a slight twist in that we're only interested in part of the sequence.
This means that our problem 72 solution won't work, as we were using `phi` to calculate the total count for a single denominator all at once.
Since the resilient fraction numerators are not evenly divided across the range of possible numerators, we can't just take 1/6th of that value.

The good news though, is that our problem input, the denominator limit, has been drastically reduced to 12m.
This means we can revisit our original ideas for problem 72, and implement a simple iteration of all n/d combos while testing for resilience using `gcd(n, d) === 1`.
Implemented as the second alternative solution, this makes for a fairly short and simple solution, but the runtime isn't that great.

---

After some research I came across the concept of the [Farey sequence](https://en.wikipedia.org/wiki/Farey_sequence).
This is describing exactly the sequences we've been working with for the past three problem; the answer to problem 72 is quite literally the length of `Fn`, with n the problem input of 1m.
In particular, there's a concept called Farey neighbours; which gives us a way to calculate a new member of the sequence from two other members:
>If `a/b` and `c/d` are neighbours in a Farey sequence then the first term that appears between them as the order of the Farey sequence is incremented is `(a + c) / (b + d)`

This actually gives us a way to iteratively create all members of the Farey sequence, by starting from F1, and applying this rule to every two members to reach F2, etc.
For example, F1 is defined as including 0/1 and 1/1, applying the above rule gives us 1/2 which together with F1 forms F2.
What's great about this, is that the rule works for any two fractions, and so we can use our defined bounds as the starting point; 'our F1' will thus contain 1/3 and 1/2.
We can use this neighbour rule to go all the way to F12000, visiting every single member within the specified 1/3 - 1/2 range.
Implemented as the first alternative solution this gives us a surprisingly simple and elegant recursive algorithm.

Since we don't really care about the numerators here (just how many there are), one minor change in the solution is that it ignores numerators entirely.
Another important note is that, due to the recursive nature, we're severely restricted in our allowed inputs.
Luckily the problem input of 12k was doable, but only barely as 22k is about as high as it gets.

---

Actually, before figuring out the above solution using Farey neighbours, I worked on another solution using prime factors, similar to [Problem 243](https://projecteuler.net/problem=243).
The idea is based on the fact that every non-resilient fraction of `d` by definition must contain at least one prime factor of `d`.
Therefore you can eliminate all numerators that are multiples of any of the prime factor, and be left with the exact count of resilient fractions.
It took a lot of fiddling around, in particular with when and how to round different values, to apply the range of 1/3 - 1/2, but it did work.

In terms of performance, this solution initially fell to the above Farey solution.
However, inspired by some posts from the PE forums, I came to realize that I could drastically simplify the calculations here.
Instead of having to work with nCr (like on problem 243), and recalculating combinations every time, I essentially reversed the process.
Using a sieving algorithm, I iterate primes, and subsequently remove multiples of that prime from the resilient count for every `d` that's a multiple of that prime.
This way I avoid calculating prime factors, and combinations, and all that stuff for every `d`, because I've already iterated those by the time I reach `d`.

Personally, I find this solution less elegant than the one based on Farey neighbours, but damn is it fast!
In particular, it also has a lower time complexity and therefore scales better than the other solutions.
For example, it can handle an input of 1m in about the same time as our second-best solution handles the problem input of 12k.
