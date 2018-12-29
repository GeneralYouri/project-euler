const { pentagonalGenerator, isPentagonal } = require('aoc-toolkit');

module.exports = () => {
    const pentagonals = pentagonalGenerator();
    const pentagonalList = [];

    let next = pentagonals.next().value;
    while (true) {
        const upper = next;
        next = pentagonals.next().value;
        for (const lower of pentagonalList) {
            if (lower + upper >= next && isPentagonal(upper + lower) && isPentagonal(upper - lower)) {
                return upper - lower;
            }
        }
        pentagonalList.push(upper);
    }
};
