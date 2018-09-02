# [Problem 13](https://projecteuler.net/problem=13): Large sum

A 50-digit precision is obviously way too much for regular floats to handle (which is what JS' `Number` type uses).
Luckily we've got `BigInt` support these days, letting us simply parse the numbers individually, sum them, and read the first x digits.

Implementing this without `BigInt`s isn't that hard either though.
Floats support all integers up to a certain point (`Number.MAX_SAFE_INTEGER` which equals 9,007,199,254,740,991), after which the precision is no longer sufficient to keep up.
If the number of digits required is reasonably small such that float's precision can cover it, then one sort-of middleground option is to discard the lower significant digits as they're quite literally insignificant.
A bit of leeway is required though to ensure that potential overflow that would result from these lower significant digits, wouldn't affect the result.

If the number of digits required is larger than that, we just have to split the numbers up into multiple sums, and manually take care of the overflows.
We can divide the max safe integer value with the value of `x` (the amount of large numbers to sum), then take the log10 value and floor it (call this `d`).
This number is the amount of digits we can safely sum at once with 100% precision.
We start with summing the `d` least-significant digits as our first step, and work our way up from there.
After every summing step we can determine the significant overflow, which is the resulting subsum minus the `d` least-significant digits.
This significant overflow then becomes an extra term in the next summing step in order to be properly applied.
An implementation of this approach can be found as the solution Alternative 1.
