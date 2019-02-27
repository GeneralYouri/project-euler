const { isPrime } = require('aoc-toolkit');

module.exports = (input) => {
    const targetFraction = Number(input) / 100;

    let count = 0;
    let total = 1;
    let n = 1;
    for (let delta = 2; count === 0 || count >= total * targetFraction; delta += 2) {
        for (let i = 0; i < 4; i += 1) {
            n += delta;
            if (isPrime(n)) {
                count += 1;
            }
        }

        total += 4;
    }
    return Math.ceil(total / 2);
};
