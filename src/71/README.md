# [Problem 71](https://projecteuler.net/problem=71): Ordered fractions

For the initial solution (implemented as the alternative solution) we iterate all values for the denominator `d`.
We use the fact that the actual value of our fraction should be as close to (but slightly below, not above) the value of our target fraction `3/7`.
To use that knowledge, for every `d` we calculate the `n` that gives us the closest value, and then check whether it's above or below our target.

During iteration we keep track of our best answer so far, which is measured as the difference between the value of our target and calculated fractions.
As the denominator goes up, so does the amount of numerators and thus the precision of the fraction, so we expect our answer denominator to be very close to our limit.
Because of this we obtain a small optimization by iterating from high to low denominators.

During iteration, we keep whatever numerator got us the lowest value difference, but we overwrite even if we come across the same exact value difference again.
That's because this means we've found another fraction that's a reduced version of our previous best answer.
This way we eventually end up recording the corresponding resilient fraction as the final answer.

---

After working on that solution for a bit I noticed that there was no reason to even be doing all this work.
We can instead make clever use of not just our target fraction, but also our given sample fraction of `2/5`, letting us create a formula for the whole problem.
The formula essentially takes the sample fraction 2/5 as n/d, and adds the target fraction 3/7 (again as n/d) as often as our input limit allows (1000000 for our problem input).
