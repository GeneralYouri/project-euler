// A generator for a variant of the fibonacci number sequence, returning only the even numbers
const fibonacciGenerator = function* fibonacciGenerator(limit) {
    let n1 = 0n;
    let n2 = 1n;

    while (true) {
        if (n2 > limit) {
            return;
        }

        yield n2;

        ([n1, n2] = [n2, n1 + n2]);
    }
};

module.exports = (input) => {
    const digitCount = Math.trunc(Number(input));
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
