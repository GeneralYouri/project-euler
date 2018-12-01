module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 1) {
        return undefined;
    }

    const sumOfSquares = limit / 6 * (2 * limit + 1) * (limit + 1);
    const squareOfSum = ((limit + 1) / 2 * limit) ** 2;
    return squareOfSum - sumOfSquares;
};
