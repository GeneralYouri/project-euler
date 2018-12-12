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

module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    const digits = Array.from(new Array(limit)).map((_, i) => i + 1);
    let largest = 0;
    for (let n = limit; n >= 1; n -= 1) {
        const permutations = permutationsUnique(digits);
        for (const permutation of permutations) {
            const candidate = digitsToNumber(permutation);
            if (isPrime(candidate) && candidate > largest) {
                largest = candidate;
            }
        }
        if (largest) {
            return largest;
        }
        digits.pop();
    }
    return undefined;
};
