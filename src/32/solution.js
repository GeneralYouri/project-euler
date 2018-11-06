const isPandigital = (n, length = n.toString().length) => {
    const sum = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    const targetSum = (length + 1) / 2 * length;
    console.log(length, sum, targetSum);
    return sum === targetSum;
};

module.exports = (input) => {
    return isPandigital(15234);
};
