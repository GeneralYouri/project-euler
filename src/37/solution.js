const { isPrime, primeGenerator } = require('aoc-toolkit');

const getTruncatables = (n) => {
    const result = [];
    for (let m = 10; m < n; m *= 10) {
        result.push(n % m, Math.trunc(n / m));
    }
    return result;
};

module.exports = () => {
    const primes = primeGenerator();

    // Skip single-digit primes
    for (let i = 0; i < 4; i += 1) {
        primes.next();
    }

    let sum = 0;
    let count = 0;

    let prime;
    let modulo = 10;
    let nextModulo = 100;

    do {
        prime = primes.next().value;
        if (prime > nextModulo) {
            modulo = nextModulo;
            nextModulo *= 10;
        }

        if (/[4680]/g.test(prime)) {
            continue;
        }
        if (/[25]/g.test(prime % modulo)) {
            continue;
        }

        const truncated = Array.from(new Set(getTruncatables(prime)));
        if (truncated.every(isPrime)) {
            sum += prime;
            count += 1;
        }
    } while (count < 11);

    return sum;
};
