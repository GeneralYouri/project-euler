const { isPrime, primeGenerator } = require('aoc-toolkit');

const getRotations = (n) => {
    let current = n;
    const rotations = [current];
    const log10 = Math.floor(Math.log10(n));
    for (let i = 0; i < log10; i += 1) {
        const remainder = Math.floor(current / 10);
        const digitToMove = current - remainder * 10;
        current = digitToMove * 10 ** log10 + remainder;
        rotations.push(current);
    }
    return rotations;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 2) {
        return 0;
    }

    const primes = primeGenerator();
    let prime = primes.next().value;

    // The only two primes that don't end on 1/3/7/9 are 2 and 5, both of which are single digits and thus circular by nature
    let circularCount = 0;
    if (limit > 2) {
        circularCount += 1;
    }
    if (limit > 5) {
        circularCount += 1;
    }

    while (prime < limit) {
        const rotations = getRotations(prime);
        if (!/[245680]/g.test(prime) && rotations.every(isPrime)) {
            circularCount += 1;
        }
        prime = primes.next().value;
    }

    return circularCount;
};
