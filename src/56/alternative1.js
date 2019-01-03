const multiply = (digitArray, m) => {
    for (let i = 0; i < digitArray.length; i += 1) {
        digitArray[i] *= m;
    }
    for (let i = 0; i < digitArray.length; i += 1) {
        const carry = Math.floor(digitArray[i] / 10);
        digitArray[i] -= 10 * carry;
        if (carry > 0) {
            digitArray[i + 1] = (digitArray[i + 1] || 0) + carry;
        }
    }
};

const digitSum = digitArray => digitArray.reduce((sum, d) => sum + d);

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    let best = 0;
    let minimumDigits = 0;
    for (let a = 2; a < limit; a += 1) {
        const digitArray = [1];
        multiply(digitArray, a);
        for (let b = 2; b < limit; b += 1) {
            multiply(digitArray, a);
            if (digitArray.length < minimumDigits) {
                continue;
            }

            const sum = digitSum(digitArray);
            if (sum > best) {
                best = sum;
                minimumDigits = (Math.ceil(best / 9) - 1);
            }
        }
    }
    return best;
};
