module.exports = (input) => {
    const [limit, digits] = input.split(',').map(Number);
    if (limit < 1) {
        return 0;
    }
    // The upper limit is applied because of IEEE-754 Floating Point limitations
    if (digits < 1 || digits + Math.ceil(Math.log10(limit)) > 15) {
        return undefined;
    }

    const mod = 10 ** digits;
    let sum = 0;
    for (let n = 1; n <= limit; n += 1) {
        let term = n;
        for (let p = 1; p < n; p += 1) {
            term = (term * n) % mod;
        }
        sum += term;
        if (sum >= mod) {
            sum -= mod;
        }
    }
    return sum;
};
