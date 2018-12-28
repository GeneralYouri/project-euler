const { pentagonalGenerator, hexagonalGenerator } = require('aoc-toolkit');

module.exports = (input) => {
    const minimum = Math.trunc(Number(input));
    if (minimum < 0) {
        return undefined;
    }

    // Every hexagonal is triangular (and every odd triangular is hexagonal)
    const pentagonals = pentagonalGenerator();
    const hexagonals = hexagonalGenerator();
    let pentagonal = pentagonals.next().value;
    let hexagonal = hexagonals.next().value;
    let index = 1;

    while (index <= minimum) {
        hexagonal = hexagonals.next().value;
        index += 1;
    }

    while (true) {
        // Pentagonals grow slower than hexagonals, but faster than triangulars
        // On first iteration this 'catches up' to the minimum; further iterations this runs either once or twice
        while (pentagonal < hexagonal) {
            pentagonal = pentagonals.next().value;
        }
        if (pentagonal === hexagonal) {
            return hexagonal;
        }

        hexagonal = hexagonals.next().value;
        index += 1;
    }
};
