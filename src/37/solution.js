const { isPrime, primeGenerator } = require('aoc-toolkit');

const getTruncatables = (n) => {
    const str = n.toString();
    const ltr = Array.from(Array(str.length)).map((_, index) => str.slice(index));
    const rtl = Array.from(Array(str.length)).map((_, index) => str.slice(0, index + 1));
    return [...ltr, ...rtl];
};

module.exports = () => {
    const primes = primeGenerator();
    for (let i = 0; i < 4; i += 1) {
        primes.next();
    }

    let sum = 0;
    let count = 0;

    do {
        const prime = primes.next().value;
        if (/[4680]/g.test(prime)) {
            continue;
        }

        const truncatedSet = new Set(getTruncatables(prime));
        truncatedSet.delete(prime);
        const truncated = Array.from(truncatedSet).map(Number);
        if (truncated.every(isPrime)) {
            sum += prime;
            count += 1;
        }
    } while (count < 11);

    return sum;
};
