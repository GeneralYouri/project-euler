// NOTE: Jest currently can't work with BigInts, presumably due to a lack of support from Babel
module.exports = (input, digitCount = 10) => {
    const numbers = input.split(/\n/g).map(BigInt);
    if (digitCount < 0) {
        return undefined;
    }

    const sum = numbers.reduce((acc, n) => acc + n, 0n);
    return sum.toString().slice(0, digitCount);
};
