const { isPrime, primeGenerator } = require('aoc-toolkit');

const getCirculars = (n) => {
    const digits = n.toString().split('');
    return Array.from(Array(digits.length)).map((_, index) => Number(digits.slice(index).join('') + digits.slice(0, index).join('')));
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const primes = primeGenerator();
    let prime = primes.next().value;
    let circularCount = 0;

    while (prime < limit) {
        const circulars = getCirculars(prime);
        if (circulars.every(isPrime)) {
            circularCount += 1;
        }
        prime = primes.next().value;
    }

    return circularCount;
};
