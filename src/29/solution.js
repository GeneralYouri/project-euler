const { primeGeneratorLimit, getPrimeFactorsMap } = require('aoc-toolkit');

module.exports = (boundA, boundB = boundA) => {
    const limitA = Math.trunc(Number(boundA));
    const limitB = Math.trunc(Number(boundB));
    if (limitA < 2 || limitB < 2) {
        return undefined;
    }

    const primeList = primeGeneratorLimit(limitA);

    const distinctTerms = new Set();
    for (let a = 2; a <= limitA; a += 1) {
        const primeFactors = Array.from(getPrimeFactorsMap(a, primeList));
        for (let b = 2; b <= limitB; b += 1) {
            const hash = primeFactors.map(([prime, count]) => prime + ':' + (count * b)).join(',');
            distinctTerms.add(hash);
        }
    }
    return distinctTerms.size;
};
