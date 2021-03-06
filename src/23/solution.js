const getDivisorSum = (n) => {
    const sqrt = Math.sqrt(n);
    // If n has an integer sqrt, add it to the sum, but only once
    let sum = Math.ceil(sqrt) ** 2 === n ? sqrt : 0;

    // If n is odd, there are no even divisors
    const di = n % 2 + 1;
    // Iterate all remaining divisors up to (but not including) sqrt
    for (let i = 1; i < sqrt; i += di) {
        const div = n / i;
        if (Math.trunc(div) * i === n) {
            sum += i + div;
        }
    }

    // Subtract n itself as it doesn't count (but its opposite divider 1 does)
    return sum - n;
};

const isAbundant = n => getDivisorSum(n) > n;

// const getDivisors = (n) => {
//     const sqrt = Math.sqrt(n);
//     const divisors = [];
//     const mirrors = [];
//
//     const di = n % 2 + 1;
//     for (let i = 1; i <= sqrt; i += di) {
//         const div = n / i;
//         if (Math.trunc(div) * i === n) {
//             divisors.push(i);
//             mirrors.push(div);
//         }
//     }
//
//     return [...divisors, ...mirrors.reverse()];
// };

// TODO: Write tests & readme
// TODO: Investigate in an attempt to optimize the algorithm further
// For instance, the highest positive even number that can't be written as the sum of two abundant numbers, is 46
// Likewise, the highest positive multiple of 5 that can't be written as the sum of two abundant numbers, is 1555
// Both of these are vastly lower than the highest number overall that can't be written as the sum of two abundant numbers, which is 20161
module.exports = () => {
    const limit = 28123;

    // Find all abundant numbers up to 28123
    const abundants = new Set();
    for (let n = 12; n <= limit; n += 2) {
        if (isAbundant(n)) {
            abundants.add(n);
        }
    }
    for (let n = 15; n <= limit; n += 30) {
        if (isAbundant(n)) {
            abundants.add(n);
        }
    }

    const candidates = Array.from(Array(limit + 1)).fill(true);
    for (const n1 of abundants) {
        for (const n2 of abundants) {
            if (n1 + n2 > limit) {
                break;
            }
            if (candidates[n1 + n2]) {
                candidates[n1 + n2] = false;
            }
        }
    }

    return candidates.reduce((acc, isCandidate, abundant) => {
        return acc + (isCandidate ? abundant : 0);
    }, 0);
};
