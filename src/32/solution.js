const isPandigital = (n, length = n.toString().length) => {
    const digits = Array.from(new Array(length));
    n.toString().split('').forEach((d) => {
        digits[d - 1] = true;
    });
    return digits.every(v => v === true);
};

module.exports = (input) => {
    const n = Number(input);
    if (n < 3) {
        return 0;
    }

    const pandigitalProducts = new Set();
    const lower = 2;
    const digitsPerMult = (n - 1) / 2;
    const oddDivider = (n % 2 === 1) ? 2 : 1;
    const upper = Math.trunc(10 ** digitsPerMult / oddDivider);
    const upper2 = Math.sqrt(upper);

    for (let multiplicand = lower; multiplicand < upper2; multiplicand += 1) {
        for (let multiplier = lower; multiplier < upper; multiplier += 1) {
            const product = multiplicand * multiplier;
            const digitString = multiplicand.toString() + multiplier.toString() + product.toString();
            if (digitString.length > n) {
                break;
            } else if (digitString.length === n && isPandigital(digitString)) {
                pandigitalProducts.add(product);
            }
        }
    }

    return Array.from(pandigitalProducts).reduce((sum, product) => sum + Number(product), 0);
};
