const digitSum = (n) => {
    let sum = 0n;
    while (n > 0n) {
        const remainder = n / 10n;
        const digit = n - remainder * 10n;
        sum += digit;
        n = remainder;
    }
    return sum;
};

// const digitSum = n => n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

module.exports = (input) => {
    const target = Math.trunc(Number(input));

    let numerator = 2n;
    let denominator = 1n;

    for (let i = 2n; i <= target; i += 1n) {
        const partial = (i % 3n === 0n) ? 2n * (i / 3n) : 1n;
        [numerator, denominator] = [partial * numerator + denominator, numerator];
    }

    return Number(digitSum(numerator));
};
