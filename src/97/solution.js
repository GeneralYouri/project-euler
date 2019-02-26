module.exports = (input) => {
    const stringArgs = input.split(',');
    const [multiplier, base, power, delta] = stringArgs[0].match(/^(\d+)\*(\d+)\^(\d+)([-+]\d+)$/).slice(1).map(Number);
    const digitCount = Number(stringArgs[1]);
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
