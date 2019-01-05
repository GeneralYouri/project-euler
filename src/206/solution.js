const matchesMask = (n) => {
    for (let maskDigit = 9n; maskDigit > 0n; maskDigit -= 1n) {
        if (n % 10n !== maskDigit) {
            return false;
        }
        n /= 100n;
    }
    return true;
};

module.exports = () => {
    const lower = 101010101n;
    const upper = 138902662n;

    const deltas = [2n, 6n];
    for (let n = lower; n <= upper; n += 10n) {
        for (const delta of deltas) {
            const candidate = (n + delta);
            const square = candidate ** 2n;
            if (matchesMask(square)) {
                return candidate * 10n;
            }
        }
    }
    return undefined;
};
