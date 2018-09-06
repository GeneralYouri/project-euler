module.exports = (input) => {
    const names = input.slice(1, -1).split('","');

    const sorted = names.sort();
    const scores = sorted.map(name => name.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 64, 0));
    return scores.reduce((acc, score, rank) => acc + (rank + 1) * score, 0);
};
