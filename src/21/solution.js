const getDivisorSum = (n) => {
    const sqrt = Math.sqrt(n);
    // If n has an integer sqrt, add it to the sum, but only once
    let sum = Math.ceil(sqrt) ** 2 === n ? sqrt : 0;

    // If n is odd, there are no even divisors
    const di = n % 2 + 1;
    // Iterate all remaining divisors up to (but not including) sqrt
    for (let i = 1; i < sqrt; i += di) {
        const div = n / i;
        if (Math.trunc(div) * i === n) {
            sum += i + div;
        }
    }

    // Subtract n itself as it doesn't count (but its opposite divider 1 does)
    return sum - n;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 1) {
        return undefined;
    }

    let amicableSum = 0;
    for (let a = 1; a < limit; a += 1) {
        const b = getDivisorSum(a);

        // Check if a and b are an amicable pair, but make sure to only count them once
        if (b > a && getDivisorSum(b) === a) {
            amicableSum += a + (b < limit ? b : 0); // Only count b if it's also below limit
        }
    }

    return amicableSum;
};
