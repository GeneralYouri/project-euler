const { triangularGenerator } = require('aoc-toolkit');

const wordValue = (word) => {
    let sum = 0;
    for (let i = 0; i < word.length; i += 1) {
        sum += word.charCodeAt(i) - 64;
    }
    return sum;
};

module.exports = (input) => {
    const words = input.split(',').map(word => word.slice(1, -1));

    const triangularSet = new Set();
    const limit = 45 * 26;

    const triangulars = triangularGenerator();
    let triangular = triangulars.next().value;
    while (triangular <= limit) {
        triangularSet.add(triangular);
        triangular = triangulars.next().value;
    }
    console.log(triangularSet.size);

    return words.reduce((sum, word) => sum + (triangularSet.has(wordValue(word)) ? 1 : 0), 0);
};
