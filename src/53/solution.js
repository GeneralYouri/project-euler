module.exports = (input) => {
    const [limit, minimum] = input.split(',').map(Number);

    let n = 1;
    let r = 0;
    let combs = 1;
    let count = 0;
    while (n <= limit) {
        while (combs <= minimum && r < n / 2) {
            combs = combs * (n - r) / (r + 1);
            r += 1;
        }

        if (combs > minimum) {
            count += n - 2 * r + 1;
        }

        n += 1;
        combs = combs * n / (n - r);
        r -= 1;
        combs = combs / (n - r) * (r + 1);
    }
    return count;
};
