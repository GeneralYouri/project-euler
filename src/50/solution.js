const { isPrime, primeGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit <= 2) {
        return undefined;
    }

    const prefixSums = [];
    const primes = primeGenerator();
    let prime = primes.next().value;
    let lastSum = prime;

    while (lastSum < limit) {
        prefixSums.push(lastSum);
        prime = primes.next().value;
        lastSum += prime;
    }

    for (let size = prefixSums.length; size > 0; size -= 1) {
        for (let offset = 0; offset <= prefixSums.length - size; offset += 1) {
            const sum = prefixSums[size - 1 + offset] - (prefixSums[offset - 1] || 0);
            if (isPrime(sum)) {
                return sum;
            }
        }
    }

    return undefined;
};
