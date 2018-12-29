const { isPrime, primeGenerator } = require('aoc-toolkit');

module.exports = () => {
    const primeList = [];

    const countDistinctPrimeFactors = (n) => {
        if (isPrime(n)) {
            return 1;
        }

        let count = 0;
        let remaining = n;

        for (const prime of primeList) {
            if (remaining % prime === 0) {
                do {
                    remaining /= prime;
                } while (remaining % prime === 0);
                count += 1;
            }
            if (remaining === 1) {
                break;
            }
        }

        return count;
    };

    const primes = primeGenerator();
    let prime = primes.next().value;

    const lower = 2 * 3 * 5 * 7;
    let sequenceLength = 0;
    for (let a = lower; true; a += 1) {
        if (prime <= a) {
            primeList.push(prime);
            prime = primes.next().value;
        }

        const factorCount = countDistinctPrimeFactors(a);
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
