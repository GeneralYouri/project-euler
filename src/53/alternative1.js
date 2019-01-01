module.exports = (input) => {
    const [limit, minimum] = input.split(',').map(Number);

    const factorials = [1n];
    for (let i = 1n; i <= limit; i += 1n) {
        factorials.push(i * factorials[factorials.length - 1]);
    }

    const nCr = (n, r) => factorials[n] / (factorials[r] * factorials[n - r]);

    let count = 0;
    for (let n = 1; n <= limit; n += 1) {
        for (let r = 0; r <= n; r += 1) {
            if (nCr(n, r) > minimum) {
                count += 1;
            }
        }
    }
    return count;
};
