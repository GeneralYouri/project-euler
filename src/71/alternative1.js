module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const target = 3 / 7;
    let bestDiff = Number.POSITIVE_INFINITY;
    let bestN;
    for (let d = limit; d >= 2; d -= 1) {
        const n = Math.round(d * target);

        const value = n / d;
        if (value >= target) {
            continue;
        }

        const diff = target - value;
        if (diff <= bestDiff) {
            bestDiff = diff;
            bestN = n;
        }
    }
    return bestN;
};
