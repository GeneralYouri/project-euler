const { primeGenerator } = require('aoc-toolkit');

const nCr = (set, k) => {
    if (k === 1) {
        return set.slice();
    }

    const n = set.length;
    const combinations = [];
    for (let i = 0; i < n; i += 1) {
        const choice = set[i];
        const subCombinations = nCr(set.slice(i + 1), k - 1);
        combinations.push(...subCombinations.map(s => choice * s));
    }
    return combinations;
};

const countMultiples = (limit, values) => {
    if (values.length === 0) {
        return 0;
    }

    let count = 0;
    let delta = 1;
    for (let c = 1; c <= values.length; c += 1) {
        const combinations = nCr(values, c);
        for (const n of combinations) {
            count += delta * limit / n;
        }
        delta *= -1;
    }
    return count - 1;
};

module.exports = (input) => {
    const [targetNumerator, targetDenominator] = input.split('/').map(Number);

    const distinctPrimeFactors = [];
    const primes = primeGenerator();
    let prime = primes.next().value;

    let delta = 1;
    let nextDelta = delta * prime;
    for (let n = 1; true; n += delta) {
        const denominator = n - 1;
        const numerator = denominator - countMultiples(n, distinctPrimeFactors);

        const fraction = numerator * targetDenominator / denominator;
        if (fraction < targetNumerator) {
            return n;
        }

        if (n === nextDelta) {
            distinctPrimeFactors.push(prime);
            prime = primes.next().value;

            delta = nextDelta;
            nextDelta = delta * prime;
        }
    }
};
