const { isPrime, primeGenerator } = require('aoc-toolkit');

const concatNumber = (a, b) => {
    let x = 1;
    let rest = b;
    while (rest > 1) {
        x *= 10;
        rest /= 10;
    }
    return a * x + b;
};

const isPrimePair = (p, q) => isPrime(concatNumber(p, q)) && isPrime(concatNumber(q, p));

module.exports = (input) => {
    const targetCount = Math.trunc(Number(input));

    // Allow pregeneration of primes, but exclude 2 and 5 as they can't ever form a concatenation pair with another prime
    const primeList = [3];
    const primes = primeGenerator();
    let prime = primes.next().value;
    prime = primes.next().value;
    prime = primes.next().value;
    prime = primes.next().value;

    const primePairCache = new Map();
    let best = Number.POSITIVE_INFINITY;
    const addMatch = ([a, b, c, d, e]) => {
        const sum = a + b + c + d + e;
        console.log(sum, a, b, c, d, e);
        if (sum < best) {
            best = sum;
        }
    };

    const extendSet = (set, setSum, minimum) => {
        for (let i = minimum; i < primeList.length; i += 1) {
            const p = primeList[i];
            const newSum = setSum + p;
            if (best < Number.POSITIVE_INFINITY && newSum >= best) {
                break;
            }

            const pairs = set.map(q => [p, q, p * q]);
            pairs.forEach(([x, y, hash]) => {
                if (!primePairCache.has(hash)) {
                    primePairCache.set(hash, isPrimePair(x, y));
                }
            });
            if (pairs.some(([x, y, hash]) => !primePairCache.get(hash))) {
                continue;
            }

            const newSet = [...set, p];
            if (newSet.length === targetCount) {
                addMatch(newSet);
                continue;
            }
            extendSet(newSet, newSum, i + 1);
        }
    };

    // Iteratively increase our search space (and pregenerate the new primes)
    for (let limit = 100; limit !== best * 10; limit *= 10) {
        if (limit > best) {
            limit = best;
        }
        while (prime < limit) {
            primeList.push(prime);
            prime = primes.next().value;
        }
        console.log('New limit', limit, primeList.length);

        extendSet([], 0, 0);
    }

    return best;
};
