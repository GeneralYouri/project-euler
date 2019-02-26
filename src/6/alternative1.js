module.exports = (input) => {
    const limit = Number(input);
    if (limit < 1) {
        return undefined;
    }

    const sumOfSquares = Array.from(Array(limit)).reduce((acc, _, index) => {
        return acc + (index + 1) * (index + 1);
    }, 0);

    const squareOfSum = ((limit + 1) / 2 * limit) ** 2;

    return squareOfSum - sumOfSquares;
};
