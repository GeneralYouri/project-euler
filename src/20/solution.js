module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 0) {
        return undefined;
    }

    const n = Array.from(Array(limit)).reduce((acc, _, i) => acc * (BigInt(i) + 1n), 1n);
    return n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
};
