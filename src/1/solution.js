const sumForDivisor = (limit, divisor) => {
    const occurrences = Math.trunc((limit - 1) / divisor);
    return ((occurrences + 1) * divisor) / 2 * occurrences;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    return sumForDivisor(limit, 3) + sumForDivisor(limit, 5) - sumForDivisor(limit, 3 * 5);
};
