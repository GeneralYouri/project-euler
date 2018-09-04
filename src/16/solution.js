module.exports = (input) => {
    const power = BigInt(input);
    if (power < 0n) {
        return undefined;
    }

    const n = 2n ** power;
    return n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
};
