module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const nonResilientCounts = Array(limit + 1).fill(0);
    let count = 0;
    for (let denominator = 2; denominator <= limit; denominator += 1) {
        const countInRange = Math.ceil(denominator / 2) - Math.floor(denominator / 3) - 1;
        count += countInRange;

        const nonResilient = countInRange - nonResilientCounts[denominator];
        for (let m = 2 * denominator; m <= limit; m += denominator) {
            nonResilientCounts[m] += nonResilient;
            count -= nonResilient;
        }
    }
    return count;
};
