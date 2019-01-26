const { primeGenerator, triangularGenerator } = require('aoc-toolkit');

const primeList = [];

// Returns the number of divisors of n
const countDivisors = (n) => {
    let divisors = 1;
    let remaining = n;

    while (!(remaining & 1)) {
        remaining >>>= 1;
        divisors += 1;
    }

    let primeIndex = 1;
    while (remaining > 1) {
        const prime = primeList[primeIndex];
        let hits = 0;

        while (remaining % prime === 0) {
            hits += 1;
            remaining /= prime;
        }

        if (hits > 0) {
            divisors *= hits + 1;
        }

        primeIndex += 1;
    }

    return divisors;
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
    let triangular = triangulars.next().value;

    // Since half of a number's divisors are below the number's sqrt, we can skip the very small numbers
    while (triangular < minimum) {
        triangular = triangulars.next().value;
    }

    // Generate a list of primes as needed by countDivisors, until 4 * minimum, which seems to always be sufficient
    const primes = primeGenerator();
    let prime = primes.next().value;
    while (prime < 4 * minimum) {
        primeList.push(prime);
        prime = primes.next().value;
    }

    // Calculate the divisors until we find the first triangular with a sufficient divider count
    let divisors = countDivisors(triangular);
    while (divisors <= minCount) {
        triangular = triangulars.next().value;
        divisors = countDivisors(triangular);
    }

    return triangular;
};
