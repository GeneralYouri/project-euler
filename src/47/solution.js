const { primeGenerator, getUniquePrimeFactors } = require('aoc-toolkit');

module.exports = () => {
    const primeList = [2, 3];
    const primes = primeGenerator();
    let prime = primes.next().value;

    let sequenceLength = 0;
    for (let a = 2; true; a += 1) {
        if (prime <= a) {
            primeList.push(prime);
            prime = primes.next().value;
        }

        const factorCount = getUniquePrimeFactors(a, primeList).length;
        if (factorCount === 4) {
            sequenceLength += 1;
            if (sequenceLength === 4) {
                return a - 3;
            }
        } else {
            sequenceLength = 0;
        }
    }
};
