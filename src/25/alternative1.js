// Perform addition on two numbers in chunks, to avoid floating point limitations
const chunkedAdd = (a, b) => {
    const digitsPerChunk = 15;
    const divisor = 10 ** digitsPerChunk;

    let overflow = 0;
    let sumStr = '';

    while (a.length > 0 || b.length > 0) {
        const aPart = a.slice(-digitsPerChunk);
        a = a.slice(0, -digitsPerChunk);
        const bPart = b.slice(-digitsPerChunk);
        b = b.slice(0, -digitsPerChunk);

        const sum = Number(aPart) + Number(bPart) + overflow;
        overflow = Math.trunc(sum / divisor);
        const remainder = sum - overflow * divisor;

        sumStr = remainder.toString().padStart(digitsPerChunk, '0') + sumStr;
    }

    sumStr = (overflow > 0 ? overflow.toString() : '') + sumStr;
    return sumStr.replace(/^0+/, '');
};

// A generator for a variant of the fibonacci number sequence, returning only the even numbers
const fibonacciGenerator = function* fibonacciGenerator(limit) {
    let n1 = '0';
    let n2 = '1';

    while (true) {
        if (n2 > limit) {
            return;
        }

        yield n2;

        ([n1, n2] = [n2, chunkedAdd(n1, n2)]);
    }
};

module.exports = (input) => {
    const digitCount = Math.trunc(Number(input));
    if (digitCount < 1) {
        return undefined;
    }

    const fibonaccis = fibonacciGenerator();
    let fibonacci;
    let index = 0;

    do {
        fibonacci = fibonaccis.next().value;
        index += 1;
    } while (fibonacci.length < digitCount);

    return index;
};
