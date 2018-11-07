const { isPrime, primeGenerator } = require('aoc-toolkit');

const getTruncatables = (n) => {
    const str = n.toString();
    const ltr = Array.from(Array(str.length)).map((_, index) => str.slice(index));
    const rtl = Array.from(Array(str.length)).map((_, index) => str.slice(0, index + 1));
    return [...ltr, ...rtl];
};

module.exports = () => {
    const truncatablePrimes = [];

    const primes = primeGenerator();
    for (let i = 0; i < 4; i += 1) {
        primes.next();
    }

    do {
        const prime = primes.next().value;
        const truncatedSet = new Set(getTruncatables(prime));
        truncatedSet.delete(prime);
        const truncated = Array.from(truncatedSet).map(Number);
        if (truncated.every(isPrime)) {
            truncatablePrimes.push(prime);
        }
    } while (truncatablePrimes.length < 11);

    return truncatablePrimes.reduce((sum, prime) => sum + prime, 0);
};
