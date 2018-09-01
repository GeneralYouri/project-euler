// A generator for a variant of the fibonacci number sequence, returning only the even numbers
const evenFibonacciGenerator = function* (limit = Number.MAX_SAFE_INTEGER) {
    let n1 = 0;
    let n2 = 2;

    while (true) {
        if (n2 > limit) {
            return;
        }

        yield n2;

        ([ n1, n2 ] = [ n2, n1 + 4 * n2 ]);
    }
};

module.exports = (input) => {
    const limit = Math.floor(Number(input));

    const fibonaccis = evenFibonacciGenerator(limit);
    return [...fibonaccis].reduce((acc, fibonacci) => acc + fibonacci, 0);
};
