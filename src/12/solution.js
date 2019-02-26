const { isPrime, primeGenerator } = require('aoc-toolkit');

const getDivisorCount = (n, primes = null) => {
    if (n < 2) {
        return 1;
    }

    if (primes === null) {
        primes = primeGenerator();
    }

    let count = 1;
    let remaining = n;

    for (const prime of primes) {
        if (remaining % prime === 0) {
            let hits = 0;

            do {
                remaining /= prime;
                hits += 1;
            } while (remaining % prime === 0);

            if (hits > 0) {
                count *= hits + 1;
            }

            if (remaining === 1) {
                return count;
            }

            if (isPrime(remaining)) {
                return count * 2;
            }
        }
    }
    return undefined;
};

module.exports = (input) => {
    const minCount = Number(input);
    if (minCount < 0) {
        return undefined;
    }
    if (minCount === 0) {
        return 1;
    }

    const primeList = [];
    const primes = primeGenerator();
    primeList.push(primes.next().value);
    let prime = primes.next().value;
    const cachedCounts = new Map([[1, 1]]);

    let a = 1;
    let b = 3;
    let divisorsA;
    let divisorsB;
    while (true) {
        if (b === prime) {
            primeList.push(prime);
            prime = primes.next().value;
            if (b > 8) {
                divisorsA = undefined;
                a += 1;
                b += 2;
                continue;
            }
        }

        if (!divisorsA) {
            divisorsA = (a % 2 === 1) ? cachedCounts.get(a) : getDivisorCount(a, primeList);
        }
        divisorsB = getDivisorCount(b, primeList);
        cachedCounts.set(b, divisorsB);
        if (divisorsA * divisorsB > minCount) {
            break;
        }
        a += 1;

        divisorsA = (a % 2 === 1) ? cachedCounts.get(a) : getDivisorCount(a, primeList);
        if (divisorsA * divisorsB > minCount) {
            break;
        }
        b += 2;
    }

    return a * b;
};
