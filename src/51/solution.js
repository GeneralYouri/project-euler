const { primeGenerator } = require('aoc-toolkit');

const findAll = (str, char) => {
    const indices = [];
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === char) {
            indices.push(i);
        }
    }
    return indices;
};

const nCr = (set, k) => {
    if (k === 1) {
        return set.map(s => [s]);
    }

    const n = set.length;
    const combinations = [];
    for (let i = 0; i < n; i += 1) {
        const choice = set[i];
        const subCombinations = nCr(set.slice(i + 1), k - 1);
        combinations.push(...subCombinations.map(s => [choice, ...s]));
    }
    return combinations;
};

// TODO: See if we can viably generalize this function for any familyOrder (currently only works for 8)
const getFamilies = (p) => {
    const families = [];
    const str = p.toString();
    const [variable, rest] = [str.slice(0, -1), str.slice(-1)];

    for (let d = 0; d < 10; d += 1) {
        const indices = findAll(variable, d.toString());
        if (indices.length >= 3) {
            const combs = nCr(indices, 3);

            const chars = variable.split('');
            for (const comb of combs) {
                const family = chars.map((c, i) => (comb.includes(i) ? 'X' : c)).join('');
                families.push(family + rest);
            }
        }
    }
    return families;
};

module.exports = (input) => {
    const familyOrder = Number(input);

    const buckets = new Map();
    const primes = primeGenerator();
    let prime = primes.next().value;

    while (true) {
        for (const family of getFamilies(prime)) {
            if (!buckets.has(family)) {
                buckets.set(family, new Set());
            }

            const bucket = buckets.get(family);
            bucket.add(prime);

            if (bucket.size === familyOrder) {
                return Math.min(...bucket);
            }
        }
        prime = primes.next().value;
    }
};
