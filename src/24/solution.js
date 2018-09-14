const factorial = (limit) => {
    let product = 1;
    for (let n = 2; n <= limit; n += 1) {
        product *= n;
    }
    return product;
};

module.exports = (permutationN, digits = '0123456789') => {
    let remainingPermutations = Math.trunc(Number(permutationN)) - 1;
    let remainingDigits = digits.slice();
    if (remainingPermutations < 0 || remainingDigits.length === 0) {
        return undefined;
    }
    if (remainingPermutations >= factorial(remainingDigits.length)) {
        return undefined;
    }

    let permutation = '';

    while (remainingDigits.length > 0) {
        const divisor = factorial(remainingDigits.length - 1);
        const nextIndex = Math.trunc(remainingPermutations / divisor);
        remainingPermutations -= nextIndex * divisor;

        const nextDigit = remainingDigits.charAt(nextIndex);
        permutation += nextDigit;
        remainingDigits = remainingDigits.split(nextDigit).join('');
    }

    return permutation;
};
