const log10Floor = n => Math.floor(Math.log10(n));

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    let count = 0;
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < limit; i += 1) {
        [numerator, denominator] = [numerator + 2 * denominator, denominator + numerator];
        if (numerator >= 100) {
            numerator /= 10;
            denominator /= 10;
        }

        if (log10Floor(numerator) > log10Floor(denominator)) {
            count += 1;
        }
    }
    return count;
};
