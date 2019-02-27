const digitSum = n => n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

module.exports = (input) => {
    const target = Number(input);

    const matches = new Set();

    for (let n = 2; true; n += 1) {
        let x = n * n;
        while (x <= Number.MAX_SAFE_INTEGER) {
            if (digitSum(x) === n) {
                matches.add(x);
            }
            x *= n;
        }

        if (matches.size >= 31) {
            break;
        }
    }

    const sequence = Array.from(matches).sort((a, b) => a - b);
    return sequence[target - 1];
};
