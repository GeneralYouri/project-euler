# [Problem 60](https://projecteuler.net/problem=60): Prime pair sets

For this problem it's relatively easy to find the correct answer with some trial-and-error, but it's incredibly tricky to generalize a solution.
We need to find a group of 5 primes where concatenating any two members forms a new prime.
The big problem comes from our goal of finding the group of 5 with the lowest sum.
So for example when iterating options you can find an answer where all members are of similar size.
If you do, then theoretically there can be a better answer with up to 4 members having a smaller value, and just one member being really large.
Because we need a group of 5 members, runtime goes up quite fast for higher numbers, and just a factor 5 can result in runtime going from almost instant to barely doable.

---

Since we're not given any sort of upper limits to our search space (and because of the aforementioned runtime increments), we start off with a small search space.
Specifically, because of the example group of 4 from the problem description, we start at a number limit of 1000.
We then iteratively increase this search space by a factor 10 whenever we can't find a solution.
As soon as we do find a solution, we restart one more time using that solution as our final search space upper limit.

Whenever our search space is changed, the first thing we have to do is generate primes until this new limit; these are the primes that can possibly become group members.
For every new prime we generate, we also immediately perform primality tests on all concatenations of that prime and every lower prime found so far.
These results are all cached so that we can later just look up a concatenation to see if it's prime (and thus if it's valid).

---

For the actual generation of a 5 member group fulfilling the problem rules, we start out with an empty set.
We then iterate the primes we generated earlier, for each of these we create a new set with just that prime, and recurse.
This recursion is repeated a couple times to find a 2nd, then a 3rd, a 4th, and finally a 5th member for our group.
Every time we recurse, we start our search for a new member at the point where we ended last recursion, because we've already tried all smaller primes.
This results in us generating group members in strictly ascending order.

- When we try to add a new prime to a group, we look up the precalculated primality checks for the concatenations of this prime with every group member to see if we can add the prime.
- When we can't find a valid prime to add as a group member, that group is discarded early.
- When we've already found a possible answer, as soon as the new potential group member pushes the group's sum above this answer, we can again discard early.

---

To concatenate two primes we can gain a decent speedup by avoiding string operations, as well as using `/` and `%` and other expensive operations.
Instead, to concatenate `a` and `b`, we take a new number `m = 1`, and multiply it by 10 as long as `m < b`.
Then we can simply return `a * m + b` as the concatenation of `a` and `b`.

Specially for this problem, because with all of the above runtime was still too long, I've written an alternative primality test algorithm.
This algorithm implements the [Miller-Rabin primality test](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test), using [Modular Exponentiation by Repeated Squaring](https://en.wikipedia.org/wiki/Modular_exponentiation#Right-to-left_binary_method).
This essentially lets us drastically reduce the number of operations needed to test for primality.
According to the linked wiki articles, runtime of this Miller-Rabin test is `O(k * log(n)^3)`, where `n` is the number we're testing (which for our solution can reach almost 1e9).
The other variable `k` is the number of values used by Miller-Rabin.
For these values there are specific presets depending on how small you expect `n` to be (again see wiki).
We're using `if n < 4,759,123,141, it is enough to test a = 2, 7, and 61;`, with `2, 7, 61` being the three values to test with, so `k = 3`.

Unfortunately due to JS Number limitations, this algorithm can only be used for values below `Math.sqrt(Number.MAX_SAFE_INTEGER)`.
This is just barely right for finding the answer here, but it's not sufficient for verifying whether the answer is truly the best possible answer.
I still can't really find a good strategy to handle that last bit, and really the problem was never designed with that in mind.
For those reasons I've dropped that part of the solution for now, and we're simply returning the first solution found.
