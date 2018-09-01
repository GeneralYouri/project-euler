module.exports = (input, digitsPerProduct = 13) => {
    const digits = input.replace(/\r?\n/g, '').split('').map(Number);
    if (digitsPerProduct <= 0) {
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
