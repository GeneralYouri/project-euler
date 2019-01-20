const { evenFibonacciGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const fibonaccis = evenFibonacciGenerator(limit);
    return [...fibonaccis].reduce((acc, fibonacci) => acc + fibonacci, 0);
};
