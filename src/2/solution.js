// Golden Ratio
const Phi = (1 + Math.sqrt(5)) / 2;

// Binet's formula calculates the index of the Fibonacci number nearest to a given number n
const binet = n => Math.round((Math.log10(n) + Math.log10(Math.sqrt(5))) / Math.log10(Phi));

const getNthFibonacci = n => Math.round(Phi ** n / Math.sqrt(5));

const fibonacciSum = n => getNthFibonacci(n + 2) - 1;

module.exports = (input) => {
    const limit = Number(input);
    if (limit <= 0) {
        return 0;
    }

    let closestIndex = binet(limit);
    const closestFib = getNthFibonacci(closestIndex);
    if (closestFib > limit) {
        closestIndex -= 1;
    }
    return fibonacciSum(closestIndex - closestIndex % 3) / 2;
};
