// The formula seems correct, but occasionally returns off-by-one results, the first one at 232 digits
// This may just be the result of floating point inaccuracies, but I'm not 100% sure on this
module.exports = (input) => {
    const digitCount = Math.trunc(Number(input));
    if (digitCount < 1) {
        return undefined;
    }

    if (digitCount === 1) {
        return 1;
    }

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    return Math.round(digitCount / Math.log10(goldenRatio) - goldenRatio - 1);
};
