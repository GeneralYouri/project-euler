const { primeGenerator, triangularGenerator } = require('aoc-toolkit');

const primeList = [];

// Returns an array with all prime factors of n
const getFactorCount = (n) => {
    let factors = 1;
    let remaining = n;

    let primeIndex = 0;

    while (remaining > 1) {
        const prime = primeList[primeIndex];
        let hits = 0;

        while (remaining % prime === 0) {
            hits += 1;
            remaining /= prime;
        }

        if (hits > 0) {
            factors *= hits + 1;
        }

        primeIndex += 1;
    }

    return factors;
};

// TODO: Write readme
// TODO: Add new solutions / Improve existing solutions
module.exports = (input) => {
    const minCount = Math.trunc(Number(input));
    const minimum = Math.ceil(minCount / 2) ** 2;
    if (minCount < 0) {
        return undefined;
    }

    const triangulars = triangularGenerator();
    let triangular = triangulars.next();

    // Since half of a number's divisors are below the number's sqrt, we can skip the very small numbers
    while (triangular.value < minimum) {
        triangular = triangulars.next();
    }

    // Generate a list of primes as needed by getFactorCount, until 4 * minimum, which seems to always be sufficient
    const primes = primeGenerator();
    let prime = primes.next();
    while (prime.value < 4 * minimum) {
        primeList.push(prime.value);
        prime = primes.next();
    }

    // Calculate the divisors until we find the first triangular with a sufficient divider count
    let divisors = getFactorCount(triangular.value);
    while (divisors <= minCount) {
        triangular = triangulars.next();
        divisors = getFactorCount(triangular.value);
    }

    return triangular.value;
};
