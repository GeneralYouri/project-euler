const factorial = (limit) => {
    let product = 1n;
    for (let n = 2n; n <= limit; n += 1n) {
        product *= n;
    }
    return product;
};

module.exports = (input) => {
    const [width, height] = input.split(',').map(BigInt);
    if (width < 1n || height < 1n) {
        return undefined;
    }

    console.log(width, height);
    return (factorial(width + height) / factorial(width) / factorial(height)).toString();
};
