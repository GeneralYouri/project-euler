module.exports = (input) => {
    const power = Math.floor(Number(input));
    if (power < 0n) {
        return undefined;
    }

    const digitsPerChunk = 8;
    const powersPerRound = 26;
    const divisor = 10 ** digitsPerChunk;
    const multiplier = 2 ** powersPerRound;

    let productStr = (2 ** (power % powersPerRound)).toString();
    let overflow;

    for (let p = powersPerRound; p < power; p += powersPerRound) {
        let newProductStr = '';
        overflow = 0;

        for (let i = 0; productStr.length > 0; i += digitsPerChunk) {
            const digits = productStr.slice(-digitsPerChunk);
            productStr = productStr.slice(0, -digitsPerChunk);

            const multiple = Number(digits) * multiplier + overflow;
            overflow = Math.floor(multiple / divisor);
            const remainder = multiple - overflow * divisor;

            newProductStr = remainder.toString().padStart(digitsPerChunk, '0') + newProductStr;
        }

        productStr = (overflow > 0 ? overflow.toString() : '') + newProductStr;
    }

    return productStr.split('').reduce((acc, digit) => acc + Number(digit), 0);
};
