const permutationsUnique = (permutationOptions) => {
    if (permutationOptions.length <= 1) {
        return [permutationOptions];
    }

    const permutations = [];
    const smallerPermutations = permutationsUnique(permutationOptions.slice(1));
    const firstOption = permutationOptions[0];

    for (const smallerPermutation of smallerPermutations) {
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
            const prefix = smallerPermutation.slice(0, positionIndex);
            const suffix = smallerPermutation.slice(positionIndex);
            permutations.push([...prefix, firstOption, ...suffix]);
        }
    }

    return permutations;
};

const digitsToNumber = digits => digits.reduce((number, digit, index) => number + digit * 10 ** index, 0);

const isSubStringDivisible = (n, divisors, subLength) => {
    const size = Math.floor(Math.log10(n)) + 1;
    const limit = size - subLength + 1;
    const mod = 10 ** subLength;
    n /= 10 ** (size - subLength);
    for (let i = 1; i <= limit; i += 1) {
        const subString = Math.floor(n % mod + 0.0001);
        const quotient = subString / divisors[i - 1];
        if (Math.floor(quotient) !== quotient) {
            return false;
        }
        n *= 10;
    }
    return true;
};

module.exports = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const divisors = [1, 2, 3, 5, 7, 11, 13, 17];
    const subStringLength = 3;

    let sum = 0;
    const permutations = permutationsUnique(digits);
    for (const permutation of permutations) {
        const candidate = digitsToNumber(permutation);
        if (candidate < 1e9) {
            continue;
        }
        if (isSubStringDivisible(candidate, divisors, subStringLength)) {
            sum += candidate;
        }
    }
    return sum;
};
