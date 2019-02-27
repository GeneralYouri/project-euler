const gcd = (a, b) => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
        [x, y] = [y, x % y];
    }
    return x;
};

module.exports = (input) => {
    const limit = Number(input);

    let count = 0;
    for (let d = 4; d <= limit; d += 1) {
        const min = Math.ceil(d / 3);
        const max = Math.ceil(d / 2);
        for (let n = min; n < max; n += 1) {
            if (gcd(n, d) === 1) {
                count += 1;
            }
        }
    }
    return count;
};
