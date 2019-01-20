const { primeGenerator } = require('aoc-toolkit');

const primeList = [];

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

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const primes = primeGenerator();
    let prime = primes.next().value;
    while (prime * prime < limit) {
        primeList.push(prime);
        prime = primes.next().value;
    }

    let best = 0;
    let bestN;
    for (let n = 2; n < limit; n += 1) {
        const value = n / phi(n);
        if (value > best) {
            best = value;
            bestN = n;
        }
    }
    return bestN;
};
