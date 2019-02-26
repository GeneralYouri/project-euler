module.exports = (input) => {
    const stringArgs = input.split('\n,');
    const digits = stringArgs[0].replace(/\n/g, '').split('').map(Number);
    const digitsPerProduct = Number(stringArgs[1]);
    if (digitsPerProduct < 1) {
        return 0;
    }

    let largestProduct = 0;

    for (let index = digitsPerProduct; index < digits.length; index += 1) {
        while (digits[index - 1] === 0) {
            index += digitsPerProduct;
        }

        const product = digits.slice(index - digitsPerProduct, index).reduce((acc, digit) => acc * digit, 1);
        largestProduct = Math.max(largestProduct, product);
    }

    return largestProduct;
};
