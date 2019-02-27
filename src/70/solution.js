const { primeGenerator } = require('aoc-toolkit');

const digitsSorted = n => n.toString().split('').sort().join('');

module.exports = (input) => {
    const limit = Number(input);

    const primeList = [];
    const primes = primeGenerator();
    let p = primes.next().value;
    while (p * p < limit) {
        primeList.push(p);
        p = primes.next().value;
    }

    let best = Number.POSITIVE_INFINITY;
    let bestN;
    while (p < limit) {
        const lowerLimit = 1 + 1 / (primeList[primeList.length - 1] - 1);
        if (best < lowerLimit) {
            break;
        }

        for (let j = primeList.length - 1; j >= 0; j -= 1) {
            const q = primeList[j];
            const n = p * q;
            if (n >= limit) {
                primeList.pop();
                continue;
            }
            if (bestN && n < bestN) {
                break;
            }

            const coprimes = n - (p + q - 1); // = (p - 1) * (q - 1)
            const value = n / coprimes;
            if (value >= best) {
                break;
            }

            if ((p + q) % 9 === 1 && digitsSorted(n) === digitsSorted(coprimes)) {
                best = value;
                bestN = n;
            }
        }

        p = primes.next().value;
    }
    return bestN;
};
