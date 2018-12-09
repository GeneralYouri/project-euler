let factorials = [];
const setupFactorials = () => {
    let current = 1;
    factorials = [current, current];
    for (let m = 2; m <= 9; m += 1) {
        current *= m;
        factorials.push(current);
    }
};

module.exports = (permutationN, digits = '0123456789') => {
    setupFactorials();
    let remainingPermutations = Math.trunc(Number(permutationN)) - 1;
    let remainingDigits = digits.slice();
    if (remainingPermutations < 0 || remainingDigits.length === 0) {
        return undefined;
    }
    if (remainingPermutations >= factorials[remainingDigits.length]) {
        return undefined;
    }

    let permutation = '';

    while (remainingDigits.length > 0) {
        const divisor = factorials[remainingDigits.length - 1];
        const nextIndex = Math.trunc(remainingPermutations / divisor);
        remainingPermutations -= nextIndex * divisor;

        const nextDigit = remainingDigits.charAt(nextIndex);
        permutation += nextDigit;
        remainingDigits = remainingDigits.split(nextDigit).join('');
    }

    return permutation;
};
