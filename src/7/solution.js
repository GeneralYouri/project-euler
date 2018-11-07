const { primeGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const targetIndex = Math.trunc(Number(input));
    if (targetIndex < 1) {
        return undefined;
    }

    const primes = primeGenerator();
    let prime;

    for (let index = 0; index < targetIndex; index += 1) {
        prime = primes.next();
    }

    return prime.value;
};
