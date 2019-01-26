const { primeGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const targetIndex = Math.trunc(Number(input));
    if (targetIndex < 1) {
        return undefined;
    }

    const primes = primeGenerator();
    for (let index = 1; index < targetIndex; index += 1) {
        primes.next();
    }
    return primes.next().value;
};
