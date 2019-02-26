module.exports = (input) => {
    const stringArgs = input.split('\n,');
    const numbers = stringArgs[0].split(/\n/g).map(BigInt);
    const digitCount = Number(stringArgs[1]);
    if (digitCount < 0) {
        return undefined;
    }

    const sum = numbers.reduce((acc, n) => acc + n, 0n);
    return sum.toString().slice(0, digitCount);
};
