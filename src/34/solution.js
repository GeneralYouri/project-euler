module.exports = () => {
    const factorials = [1];
    for (let i = 1; i <= 9; i += 1) {
        factorials.push(factorials[i - 1] * i);
    }
    const limit = factorials[9] * 7;

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

    let sum = 0;
    for (let n = 10; n < limit; n += 1) {
        if (isCurious(n)) {
            sum += n;
        }
    }
    return sum;
};
