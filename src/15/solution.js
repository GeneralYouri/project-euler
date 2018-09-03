const factorial = (limit) => {
    let product = 1n;
    for (let n = 2n; n <= limit; n += 1n) {
        product *= n;
    }
    return product;
};

module.exports = (w, h = w) => {
    const width = BigInt(w);
    const height = BigInt(h);
    if (width < 1n || height < 1n) {
        return undefined;
    }

    return (factorial(width + height) / factorial(width) / factorial(height)).toString();
};
