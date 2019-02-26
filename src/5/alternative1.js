const { getPrimeFactorsMap } = require('aoc-toolkit');

// Calculate the LCM for 1 .. input by combining the prime factors of every number in the range
module.exports = (input) => {
    const limit = Number(input);
    if (limit < 1) {
        return undefined;
    }

    // Calculate prime factors for 2..n
    const primeFactors = Array.from(Array(limit - 1)).map((_, index) => {
        return getPrimeFactorsMap(index + 2);
    });

    // Combine the prime factors into a factorization for the LCM
    const lcmFactors = primeFactors.reduce((acc, factorMap) => {
        factorMap.forEach((hits, factor) => {
            acc[factor] = Math.max(acc[factor] || 0, hits);
        });
        return acc;
    }, {});

    // Calculate and return the LCM
    return Object.entries(lcmFactors).reduce((lcm, [factor, hits]) => lcm * Number(factor) ** hits, 1);
};
