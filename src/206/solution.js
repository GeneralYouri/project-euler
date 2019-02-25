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
    const lower = 101010101;
    const upper = 138902662; // Math.sqrt(1929394959697989990 / 100), basically fill the blanks with 9 while discarding the last two digits

    const deltas = [2, 6];
    for (let n = lower; n <= upper; n += 10) {
        for (const delta of deltas) {
            const candidate = (n + delta);
            const square = BigInt(candidate) ** 2n;
            if (matchesMask(square)) {
                return candidate * 10;
            }
        }
    }
    return undefined;
};
