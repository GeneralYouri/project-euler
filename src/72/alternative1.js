module.exports = (input) => {
    const limit = Number(input);

    const phi = [...Array.from(Array(limit + 1)).keys()];
    let count = 0;
    for (let d = 2; d <= limit; d += 1) {
        if (phi[d] === d) {
            for (let m = d; m <= limit; m += d) {
                phi[m] = phi[m] / d * (d - 1);
            }
        }
        count += phi[d];
    }
    return count;
};
