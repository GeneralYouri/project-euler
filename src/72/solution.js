module.exports = (input) => {
    const limit = Number(input);
    const halfLimit = Math.trunc(limit / 2);

    const nonResilientCounts = Array(halfLimit + 1).fill(0);
    let count = 0;
    for (let denominator = 2; denominator <= halfLimit; denominator += 1) {
        count += denominator - 1;

        const nonResilient = denominator - 1 - nonResilientCounts[denominator];
        for (let m = 2 * denominator; m <= halfLimit; m += denominator) {
            nonResilientCounts[m] += nonResilient;
        }
        count -= Math.trunc(limit / denominator - 1) * nonResilient;
    }
    count += (halfLimit + limit - 1) / 2 * halfLimit;
    return count;
};
