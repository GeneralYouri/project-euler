const naturalNumbers = (limit, start = 1) => Array.from(Array(limit - start + 1)).map((_, i) => i + start);

const plus = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);

module.exports = () => plus(...naturalNumbers(9).map(n => Math.floor(1 / (1 - Math.log10(n)))));

module.exports = () => Array.from(Array(9)).map((_, i) => i + 1).reduce((count, n) => count + Math.floor(1 / (1 - Math.log10(n))), 0);

module.exports = () => {
    let count = 0;
    for (let n = 1; n < 10; n += 1) {
        count += Math.floor(1 / (1 - Math.log10(n)));
    }
    return count;
};
