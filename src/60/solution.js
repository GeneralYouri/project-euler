const { primeGenerator } = require('aoc-toolkit');

const concatNumber = (a, b) => {
    let multiplier = 1;
    while (multiplier < b) {
        multiplier *= 10;
    }
    return a * multiplier + b;
};

// c = (b^e) % m
const powMod = (a, b, m) => {
    if (m === 1) {
        return 0;
    }

    let c = 1;
    a %= m;
    while (b > 0) {
        if ((b & 1) === 1) {
            c = (c * a) % m;
        }
        a = (a * a) % m;
        b >>= 1;
    }
    return c;
};

const A = [2, 7, 61];
const isPrime = (n) => {
    if (n < 3) {
        return n === 2;
    }

    let r = 0;
    let d = n - 1;
    let newD = Math.trunc(d / 2);
    while (newD * newD === d) {
        r += 1;
        d = newD;
        newD = Math.trunc(d / 2);
    }

    for (const a of A) {
        let x = powMod(a, d, n);
        if (x === 1 || x === n - 1) {
            continue;
        }

        let finished = true;
        for (let i = 0; i < r - 1; i += 1) {
            x = (x * x) % n;
            if (x === n - 1) {
                finished = false;
                break;
            }
        }
        if (finished) {
            return false;
        }
    }
    return true;
};

module.exports = (input) => {
    const targetCount = Math.trunc(Number(input));

    const primeList = [];
    const primePairs = [];

    let best = Number.POSITIVE_INFINITY;

    const extendSet = (set, setSum, minimum, limit) => {
        for (let i = minimum; i < primeList.length; i += 1) {
            const p = primeList[i];

            const newSum = setSum + p;
            if (newSum >= best) {
                break;
            }

            let isValid = true;
            /* eslint-disable-next-line no-cond-assign */
            for (let j = 0; j < set.length && (isValid = primePairs[i][set[j]]); j += 1);
            if (!isValid) {
                continue;
            }
            // More elegant, but slower :(
            // if (!set.every(j => primePairs[i][j])) {
            //     continue;
            // }

            const newSet = [...set, i];
            if (newSet.length < targetCount) {
                const newBest = extendSet(newSet, newSum, i + 1, limit);
                if (newBest) {
                    return newBest;
                }
            } else if (newSum < best) {
                return newSum;
            }
        }
        return false;
    };

    // Iteratively increase our search space (and pregenerate the new primes)
    const primes = primeGenerator();
    let p = primes.next().value;
    for (let limit = 1000; limit < best * 10; limit *= 10) {
        if (limit > best) {
            limit = best;
        }

        while (p < limit) {
            const allowedPartners = [];
            for (let j = 0; j < primeList.length; j += 1) {
                const q = primeList[j];
                if (best !== Number.POSITIVE_INFINITY && p + q >= best) {
                    break;
                }
                allowedPartners.push(isPrime(concatNumber(p, q)) && isPrime(concatNumber(q, p)));
            }
            primePairs.push(allowedPartners);
            primeList.push(p);
            p = primes.next().value;
        }
        // console.log('New limit', limit, primeList.length, Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024), 'MB');

        const newBest = extendSet([], 0, 0, limit);
        if (newBest) {
            best = newBest;
        }
    }

    return best;
};
