const isPandigital = (n, length = n.toString().length) => {
    const digits = Array.from(new Array(length));
    n.toString().split('').forEach((d) => {
        digits[d - 1] = true;
    });
    return digits.every(v => v === true);
};

const testRange = (n, min, max) => {
    for (let x = max; x >= min; x -= 1) {
        let str = '';
        for (let m = 1; m <= n; m += 1) {
            str += m * x;
        }

        if (isPandigital(str)) {
            return Number(str);
        }
    }

    return undefined;
};

module.exports = () => {
    const ranges = [
        [2, 5000, 9999],
        [3, 100, 333],
        [4, 25, 33],
        [5, 5, 9],
        [6, 3, 3],
        [9, 1, 1],
    ];

    return ranges.reduce((largestPandigital, [n, min, max]) => {
        const pandigital = testRange(n, min, max);
        return (pandigital > largestPandigital) ? pandigital : largestPandigital;
    }, 0);
};
