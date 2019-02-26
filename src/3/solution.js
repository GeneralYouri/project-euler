const { isPrime, primeGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    let remaining = Number(input);
    if (remaining < 2) {
        return undefined;
    }

    const primes = primeGenerator();
    for (const prime of primes) {
        if (remaining % prime === 0) {
            do {
                remaining /= prime;
            } while (remaining % prime === 0);

            if (remaining === 1) {
                return prime;
            }
            if (isPrime(remaining)) {
                return remaining;
            }
        }
    }
    return undefined;
};
