let factorials = [];
const setupFactorials = () => {
    let current = 1;
    factorials = [current, current];
    for (let m = 2; m <= 9; m += 1) {
        current *= m;
        factorials.push(current);
    }
};

const isCurious = (n) => {
    let sum = 0;
    let remainder = n;

    while (remainder > 0) {
        const newRemainder = Math.floor(remainder / 10);
        const digit = remainder - newRemainder * 10;
        sum += factorials[digit];
        remainder = newRemainder;
    }

    return sum === n;
};

module.exports = () => {
    setupFactorials();
    const limit = factorials[9] * 7;

    let sum = 0;
    for (let n = 10; n < limit; n += 1) {
        if (isCurious(n)) {
            sum += n;
        }
    }
    return sum;
};
