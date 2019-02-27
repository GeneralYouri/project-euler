const digitString = n => n.toString().split('').sort().join('');

module.exports = (input) => {
    const multipleCount = Number(input);

    let limit = 1000;
    const multipleArray = Array.from(Array(multipleCount - 1)).map((_, i) => (i + 1));

    for (let n = multipleCount * 100; true; n += multipleCount) {
        if (n >= limit) {
            n = limit * multipleCount;
            limit *= 10;
        }

        const x = n / multipleCount;
        const digits = digitString(n);
        const multiples = multipleArray.map(m => m * x);
        if (multiples.every(m => digitString(m) === digits)) {
            return x;
        }
    }
};
