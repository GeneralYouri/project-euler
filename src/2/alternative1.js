const { evenFibonacciGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const limit = Number(input);

    const fibonaccis = evenFibonacciGenerator(limit);
    return [...fibonaccis].reduce((acc, fibonacci) => acc + fibonacci, 0);
};
