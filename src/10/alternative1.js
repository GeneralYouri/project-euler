const { primeGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 2) {
        return 0;
    }

    const primes = primeGenerator();
    let prime = primes.next();

    let sum = 0;
    while (prime.value < limit) {
        sum += prime.value;
        prime = primes.next();
    }

    return sum;
};
