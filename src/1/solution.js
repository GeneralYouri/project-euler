const sumOfMultiples = (limit, divisor) => {
    const occurrences = Math.trunc((limit - 1) / divisor);
    return ((occurrences + 1) * divisor) / 2 * occurrences;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    return sumOfMultiples(limit, 3) + sumOfMultiples(limit, 5) - sumOfMultiples(limit, 3 * 5);
};
