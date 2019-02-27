const { isPrime, primeGenerator } = require('aoc-toolkit');

const primeList = [];

const getSmallestPrimeFactor = (n, primes = null) => {
    if (isPrime(n)) {
        return n;
    }

    if (primes === null) {
        primes = primeGenerator();
    }

    for (const prime of primes) {
        if (n % prime === 0) {
            return prime;
        }
    }
    return undefined;
};

const phi = (n) => {
    let result = n;
    let prime = primeList[0];
    for (let i = 1; prime * prime <= n; i += 1) {
        if (n % prime === 0) {
            result -= result / prime;
            while (n % prime === 0) {
                n /= prime;
            }
        }
        prime = primeList[i];
    }
    if (n > 1) {
        result -= (result / n);
    }
    return result;
};

const digitsSorted = n => n.toString().split('').sort().join('');

module.exports = (input) => {
    const limit = Number(input);

    const primes = primeGenerator();
    let prime = primes.next().value;
    while (prime * prime < limit) {
        primeList.push(prime);
        prime = primes.next().value;
    }

    let best = Number.POSITIVE_INFINITY;
    let bestN;
    const offset = limit % 30 - 2;
    const deltas = [0, 2, 8, 12, 14, 18, 20, 24].map(d => (d + offset) % 30).sort((a, b) => b - a);
    for (let n = limit - 1; n >= 7; n -= 30) {
        for (const delta of deltas) {
            const candidate = n - delta;
            if (candidate < 7) {
                break;
            }

            const factor = getSmallestPrimeFactor(candidate, primeList);
            const lowerLimit = 1 + 1 / (factor - 1);
            if (candidate === factor || best < lowerLimit) {
                continue;
            }

            const coprimes = phi(candidate);
            const value = candidate / coprimes;
            if (value < best && digitsSorted(candidate) === digitsSorted(coprimes)) {
                best = value;
                bestN = candidate;
            }
        }
    }
    return bestN;
};
