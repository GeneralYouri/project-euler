// Number of digits in a factorial
// const factorialDigitCount = n => Math.floor(((n + 0.5) * Math.log(n) - n + 0.5 * Math.log(2 * Math.PI)) / Math.log(10)) + 1;

module.exports = (input) => {
    const [limit, digits] = input.split(',').map(Number);
    if (limit < 0 || digits < 1) {
        return undefined;
    }
    if (limit === 0) {
        return 0;
    }

    const digitLimit = 10 ** digits;
    let reducedLimit = limit;
    while (reducedLimit / 5 > digitLimit * 10 && Math.floor(reducedLimit / 5) === reducedLimit / 5) {
        reducedLimit /= 5;
    }
    const mod = 10 ** Math.floor(Math.log10(Number.MAX_SAFE_INTEGER / reducedLimit));

    let product = 1;
    for (let n = 2; n <= reducedLimit; n += 1) {
        product *= n;
        while (product % 10 === 0) {
            product /= 10;
        }
        product %= mod;
    }

    return product % digitLimit;
};
