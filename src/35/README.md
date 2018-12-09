# [Problem 35](https://projecteuler.net/problem=35): Circular primes

Using a standard prime generator and primality checker, we can brute force for our problem input.

The solution originally stringified a number to separate its digits and form the number's rotations.
Replacing this with a math-based approach resulted in about a factor 4 runtime improvement for the problem input.

We can also further filter the primes that are tested.
With the exception of the primes 2 and 5, all other primes end with the digit 1, 3, 7, or 9.
But due to the circular property we're looking for, any of a prime's digits becomes the last digit in one of the prime's rotations.
This means that every digit in the prime must be either 1, 3, 7, or 9.
Unfortunately the runtime savings from this added check are fairly small.
In fact, for the problem input of 1000000 they result in a 25% increase in runtime, instead of a decrease.
For comparison upping our input from 1 to 10 million, which is our search space limit, gets around 20% decrease in runtime.
So despite this added check slowing down our solution for the problem input, it's still included in the solution due to the runtime savings with larger inputs.
