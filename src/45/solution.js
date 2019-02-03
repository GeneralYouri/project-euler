const { hexagonalGenerator, isPentagonal } = require('aoc-toolkit');

module.exports = (input) => {
    const minimum = Math.trunc(Number(input));
    if (minimum < 0) {
        return undefined;
    }

    // Every hexagonal is triangular (and every odd triangular is hexagonal)
    const hexagonals = hexagonalGenerator();
    let hexagonal = hexagonals.next().value;
    for (let index = 1; true; index += 1) {
        if (index > minimum && isPentagonal(hexagonal)) {
            return hexagonal;
        }
        hexagonal = hexagonals.next().value;
    }
};
