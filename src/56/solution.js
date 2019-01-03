const digitSum = n => n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

module.exports = (input) => {
    const limit = BigInt(input);

    let best = 0;
    let minimum = 0;
    for (let a = 2n; a < limit; a += 1n) {
        let n = a;
        for (let b = 2n; b < limit; b += 1n) {
            n *= a;
            if (n < minimum) {
                continue;
            }

            const sum = digitSum(n);
            if (sum > best) {
                best = sum;
                minimum = 10 ** (Math.ceil(best / 9) - 1);
            }
        }
    }
    return best;
};
