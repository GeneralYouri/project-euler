const fractions = (min, max, limit) => {
    if (min + max > limit) {
        return 0;
    }

    let count = 1;
    count += fractions(min, min + max, limit);
    count += fractions(min + max, max, limit);
    return count;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    return fractions(3, 2, limit);
};
