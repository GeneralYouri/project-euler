const { isPrime } = require('aoc-toolkit');

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

const iterate = (digits) => {
    let largest = 0;
    const permutations = permutationsUnique(digits);
    for (const permutation of permutations) {
        const candidate = digitsToNumber(permutation);
        if (isPrime(candidate) && candidate > largest) {
            largest = candidate;
        }
    }
    return largest;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    if (limit >= 7) {
        const largest7 = iterate([1, 2, 3, 4, 5, 6, 7]);
        if (largest7 > 0) {
            return largest7;
        }
    }
    if (limit >= 7) {
        return iterate([1, 2, 3, 4]);
    }
    return 0;
};
