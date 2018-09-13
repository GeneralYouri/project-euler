// TODO: write a solution based on direct calculation, without iteration
module.exports = (input) => {
    const limit = Math.floor(Number(input));
    const size = Math.floor(limit / 2);
    if (limit < 1 || limit % 2 === 0) {
        return undefined;
    }

    let sum = 1;

    for (let layer = 1; layer <= size; layer += 1) {
        const square = (2 * layer + 1) ** 2;
        const layerAverage = square - 3 * layer;
        sum += 4 * layerAverage;
    }

    return sum;
};
