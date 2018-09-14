const termsPerStart = {};

const doCollatz = (n) => {
    let terms = 1;
    let i = n;

    while (i > 1) {
        if (i % 2 === 0) {
            i /= 2;
        } else {
            i = 3 * i + 1;
        }

        if (termsPerStart[i]) {
            terms += termsPerStart[i];
            break;
        }

        terms += 1;
    }

    termsPerStart[n] = terms;
    return terms;
};

// TODO: Write readme
// TODO: Write tests
// TODO: Add new solutions / Improve existing solutions
module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 0) {
        return undefined;
    }

    let maxN = 0;
    let maxTerms = 0;

    for (let n = 2; n < limit; n += 1) {
        const terms = doCollatz(n);

        if (terms > maxTerms) {
            maxN = n;
            maxTerms = terms;
        }
    }

    return maxN;
};
