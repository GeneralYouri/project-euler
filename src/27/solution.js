const { isPrime } = require('aoc-toolkit');

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    let bestCount = 0;
    let bestProduct;

    for (let a = -limit + 1; a < limit; a += 1) {
        for (let b = -limit; b <= limit; b += 1) {
            let n = 0;
            while (isPrime(n * n + a * n + b)) {
                n += 1;
            }

            if (n > bestCount) {
                bestCount = n;
                bestProduct = a * b;
                console.log(a, b);
            }
        }
    }

    return bestProduct;
};
