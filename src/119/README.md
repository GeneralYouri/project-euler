# [Problem 119](https://projecteuler.net/problem=119): Digit power sum

We're given two members of the described sequence: #2 is 512 and #10 is 614656.
We need to find #30; if the growth rate between the two examples is any indication, this number will be *very* big.
My initial assumption is that it will sit close to, but just below, `Number.MAX_SAFE_INTEGER`.

This means that iterating all numbers, and then iterating all powers of those numbers, is a ridiculous task regarding runtime.
Looking at the problem description again, the example number of 614656 is equal to 28^4.
Both 28 and 4 are very tiny numbers, yet they produce our 10th sequence member.
With this we have our method of iteration - instead of iterating all potential sequence members, generate them by iterating possible base and power values.

---

To get a useful break condition we iterate the base numbers as our outer loop, which breaks out after finding enough sequence members.
The inner loop then iterates the powers of this base number, checks the digitSum of the result, and breaks once we exceed `Number.MAX_SAFE_INTEGER`.

Because of our method of iteration, we don't necessarily iterate all sequence members in order.
And as it turns out, the 30th member we find is not #30 in the sequence.
An interesting observation though is that we seem to only find 31 members, with no other numbers below `Number.MAX_SAFE_INTEGER` fitting the sequence.
While I don't quite understand *why* there would only be 31 members, this is what I've used as the main break condition.
