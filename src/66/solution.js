/** @see https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Algorithm */
const continuedFraction = (S) => {
    const sqrt = Math.sqrt(S);

    let m = 0;
    let d = 1;
    let a = Math.trunc(sqrt);

    const terms = [a];
    const limit = 2 * a;
    for (let i = 0; a !== limit; i += 1) {
        m = d * a - m;
        d = (S - m * m) / d;
        a = Math.trunc((sqrt + m) / d);

        terms.push(a);
    }
    return terms;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 2) {
        return undefined;
    }

    let [best, bestD] = [0, 0];
    for (let D = 1; D <= limit; D += 1) {
        // Skip squares as they don't have a solution
        // More precisely, their square roots are integers, not irregular fractions, and thus don't produce a periodic continued fraction
        const sqrt = Math.sqrt(Number(D));
        if (Math.trunc(sqrt) === sqrt) {
            continue;
        }

        const [baseTerm, ...cycle] = continuedFraction(D);
        if (cycle.length % 2 === 0) {
            continue;
        }
        const k = 2; // even => 1, odd => 2, but we skip evens

        let [lastNumerator, numerator] = [1, baseTerm];
        // let [lastDenominator, denominator] = [0, 1];

        let exp = 0;
        for (let i = 0; i < k; i += 1) {
            for (let term = 0; term < cycle.length; term += 1) {
                [lastNumerator, numerator] = [numerator, cycle[term] * numerator + lastNumerator];
                // [lastDenominator, denominator] = [denominator, cycle[term] * denominator + lastDenominator];

                if (numerator >= 1e9) {
                    exp += 9;
                    [lastNumerator, numerator] = [lastNumerator / 1e9, numerator / 1e9];
                    // [lastDenominator, denominator] = [lastDenominator / 1e9, denominator / 1e9];
                }
            }
        }

        const size = Math.log10(numerator) + exp;
        if (size > best) {
            [best, bestD] = [size, D];
        }
    }
    return bestD;
};
