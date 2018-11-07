const { isPrime, primeGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    let remaining = Math.trunc(Number(input));
    if (remaining <= 1) {
        return undefined;
    }

    while (remaining > 1) {
        if (isPrime(remaining)) {
            return remaining;
        }

        const primes = primeGenerator();
        let prime;

        do {
            prime = primes.next();
        } while (remaining % prime.value !== 0);

        remaining /= prime.value;
    }

    return undefined;
};
