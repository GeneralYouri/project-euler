# [Problem 29](https://projecteuler.net/problem=29): Distinct powers

This is yet another problem involving large number, too large for floating point systems to handle.
As with most such problems, the BigInt approach is an option here, and has been implemented.
However, unlike most such problems, there is very little to gain over a regular approach, and both solutions end up being very similar.

For the BigInt approach, we keep things simple.
Every `a^b` is calculated directly via BigInts, and then stored in a `Set`.
Due to Set's uniqueness feature, duplicates are automatically filtered out for us, and we can simply return the Set's size at the end.

---

For the regular / non-BigInt approach we also use a Set for the easy determination of our final answer.
The only extra problem to solve, is how to generate a value that is exactly as unique as the direct output of `a^b`, while not exceeding `Number.MAX_SAFE_INTEGER`.
The solution here is to avoid storing such numbers entirely, and store a string instead.

But what value can we identify as our actual result, and also stringify and store in a Set?
We'll once again head towards prime factors for this part.
Since every positive natural number can be uniquely expressed as a product of prime factors, a number's prime factorization is exactly as unique as the number itself.
However, to calculate a number's prime factors we'd normally start from the number itself - which we can't do here as those numbers are too large.

For this final step we look at what it means to empower a number `a` with another number `b`.
Take the number 12 for example, which can also be written as `12^1`, and whose prime factorization is `2*2*3`.
Now take the number 144, which is `12^2`, and can also be written as `12*12`.
By replacing each 12 with its prime factorization, we get `2*2*3*2*2*3`, which is exactly the prime factorization of 144.
So for any number `a^b`, we can obtain its prime factorization by taking the prime factorization of `a`, and multiplying it with `b` itself.
By doing this, we no longer need to compute any large numbers at all, while we can still compute every number's prime factors.
These prime factors are then sorted and stringified, providing the uniquely identifying string key we were looking for.