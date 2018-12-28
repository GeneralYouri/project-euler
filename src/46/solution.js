const { isPrime } = require('aoc-toolkit');

module.exports = () => {
    const primes = new Set([2, 3, 5, 7]);

    for (let candidate = 9; true; candidate += 2) {
        // Skip primes (non-composites)
        if (isPrime(candidate)) {
            primes.add(candidate);
            continue;
        }

        let conjecture = false;

        // Test all possible squares
        const limit = Math.trunc(Math.sqrt(Math.trunc(candidate / 2)));
        for (let sqrt = 1; sqrt <= limit; sqrt += 1) {
            const square2 = 2 * sqrt * sqrt;
            const remainder = candidate - square2;
            if (primes.has(remainder)) {
                conjecture = true;
                break;
            }
        }

        if (!conjecture) {
            return candidate;
        }
    }
};
