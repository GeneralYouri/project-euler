const { primeGenerator, getDivisorCount, triangularGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const minCount = Number(input);
    const minimum = (minCount / 2) ** 2;
    if (minCount < 0) {
        return undefined;
    }

    const triangulars = triangularGenerator();
    let triangular = triangulars.next().value;

    // Since half of a number's divisors are below the number's sqrt, we can skip the very small numbers
    for (let i = 2; triangular < minimum; i += 1) {
        triangular = triangulars.next().value;
    }

    // Generate a list of primes as needed by getDivisorCount, as many as we may need
    const primeList = [];
    const primes = primeGenerator();
    primeList.push(primes.next().value);
    primeList.push(primes.next().value);
    let prime = primes.next().value;
    while (prime <= minCount + 1) {
        primeList.push(prime);
        prime = primes.next().value;
    }
    primeList.push(prime);

    // Calculate the divisors until we find the first triangular with a sufficient divider count
    let divisors = getDivisorCount(triangular, primeList);
    while (divisors <= minCount) {
        triangular = triangulars.next().value;
        divisors = getDivisorCount(triangular, primeList);
    }

    return triangular;
};
