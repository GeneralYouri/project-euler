const deltas = [[1, 0], [0, 1], [1, 1], [1, -1]]; // left-to-right, top-to-bot, topleft-to-botleft, topright-to-botleft

module.exports = (input, numbersPerProduct = 4) => {
    const numbers = input.split('\n').map(line => line.split(' ').map(Number));
    if (
        numbers.length === 0 || numbers[0].length === 0
        || numbersPerProduct < 1 || numbersPerProduct > numbers.length || numbersPerProduct > numbers[0].length
    ) {
        return 0;
    }

    const sumArray = Array.from(Array(numbersPerProduct));
    let largestProduct = 0;

    deltas.forEach(([dx, dy]) => {
        for (let y = 0; y < numbers.length; y += 1) {
            const endY = y + numbersPerProduct * dy;
            if (endY < 0 || endY >= numbers.length) {
                continue;
            }

            for (let x = 0; x < numbers[y].length; x += 1) {
                const endX = x + numbersPerProduct * dx;
                if (endX < 0 || endX >= numbers[0].length) {
                    continue;
                }

                let product = sumArray.reduce((acc, _, index) => acc * numbers[y + index * dy][x + index * dx], 1);
                largestProduct = Math.max(largestProduct, product);
            }
        }
    });

    return largestProduct;
};
