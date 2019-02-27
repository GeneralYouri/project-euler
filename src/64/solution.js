/** @see https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Algorithm */
const continuedFraction = (S) => {
    const sqrt = Math.sqrt(S);

    let m = 0;
    let d = 1;
    let a = Math.floor(sqrt);

    const terms = [a];
    for (let i = 0; a !== 2 * Math.floor(sqrt); i += 1) {
        m = d * a - m;
        d = (S - m * m) / d;
        a = Math.floor((sqrt + m) / d);

        terms.push(a);
    }
    return terms;
};

module.exports = (input) => {
    const limit = Number(input);

    let count = 0;
    for (let n = 1; n <= limit; n += 1) {
        const sqrt = Math.sqrt(n);
        if (Math.trunc(sqrt) === sqrt) {
            continue;
        }

        if (continuedFraction(n).length % 2 === 0) {
            count += 1;
        }
    }
    return count;
};
