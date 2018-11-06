const isPandigitalN = (value, n) => {
    const digits = value.toString().split('');
    const targetSum = (n + 1) * n / 2;
    return digits.reduce((sum, digit) => sum + Number(digit), 0) === targetSum;
};

module.exports = (input) => {
    const length = Math.trunc(Number(input));


};
