module.exports = (input, digitCount = 10) => {
    const [multiplier, base, power, delta] = input.match(/^(\d+)\*(\d+)\^(\d+)([-+]\d+)$/).slice(1).map(Number);
    const divider = 10 ** digitCount;

    const powersPerRound = Math.floor(Math.log10(Number.MAX_SAFE_INTEGER / divider) / Math.log10(base));
    const multiplierPerRound = base ** powersPerRound;

    let n = multiplier;
    let powersLeft = power;
    while (powersLeft > powersPerRound) {
        n = (n * multiplierPerRound) % divider;
        powersLeft -= powersPerRound;
    }
    return (n * base ** powersLeft + delta) % divider;
};
