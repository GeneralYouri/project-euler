const { primeGenerator } = require('aoc-toolkit');

let primeList = [];

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

const take = (n, iterable) => {
    const result = [];
    for (const item of iterable) {
        result.push(item);
        if (result.length === n) {
            break;
        }
    }
    return result;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    primeList = take(10, primeGenerator());

    let n = 1;
    let best = 0;
    let bestN;
    for (const prime of primeList) {
        n *= prime;
        if (n >= limit) {
            break;
        }
        const value = n / phi(n);
        if (value > best) {
            best = value;
            bestN = n;
        }
    }
    return bestN;
};
