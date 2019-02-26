const { PrimeSieve } = require('aoc-toolkit');

module.exports = (input) => {
    const limit = Number(input);
    if (limit < 2) {
        return 0;
    }

    let sum = 0;
    const primes = new PrimeSieve(limit);
    primes.iterator(1, limit, (prime) => {
        sum += prime;
    });
    return sum;
};
