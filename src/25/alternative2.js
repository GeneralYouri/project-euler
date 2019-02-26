const { createFibonacciGenerator } = require('aoc-toolkit');

const fibonacciGenerator = createFibonacciGenerator(0n, 1n);

module.exports = (input) => {
    const digitCount = Number(input);
    if (digitCount < 1) {
        return undefined;
    }

    const fibonaccis = fibonacciGenerator();
    let fibonacci = fibonaccis.next().value;
    let index;
    for (index = 1; fibonacci.toString().length < digitCount; index += 1) {
        fibonacci = fibonaccis.next().value;
    }
    return index;
};
