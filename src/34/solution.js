const factorial = (limit) => {
    let product = 1;
    for (let n = 2; n <= limit; n += 1) {
        product *= n;
    }
    return product;
};

const isCurious = n => n === n.toString().split('').reduce((sum, digit) => sum + factorial(digit), 0);

module.exports = () => {
    const limit = factorial(9) * 7;

    let sum = 0;
    for (let n = 10; n < limit; n += 1) {
        if (isCurious(n)) {
            sum += n;
        }
    }
    return sum;
};
