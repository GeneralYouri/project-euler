const { isPrime, primeGenerator } = require('aoc-toolkit');

module.exports = () => {
    const primeList = [2, 3];

    const countDistinctPrimeFactors = (n) => {
        if (isPrime(n)) {
            return 1;
        }

        let count = 0;
        let remaining = n;

        let i = 0;
        while (remaining > 1) {
            const prime = primeList[i];
            if (remaining % prime === 0) {
                do {
                    remaining /= prime;
                } while (remaining % prime === 0);
                count += 1;
            }
            i += 1;
        }

        return count;
    };

    const primes = primeGenerator();
    let prime = primes.next().value;

    let sequenceLength = 0;
    for (let a = 2; true; a += 1) {
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
