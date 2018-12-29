module.exports = () => {
    const scores = {
        4: Array.from(Array(4 * 9 + 1)).fill(0),
        6: Array.from(Array(6 * 6 + 1)).fill(0),
    };

    const addDice = (sum, faces, diceLeft) => {
        if (diceLeft === 0) {
            scores[faces][sum] += 1;
        } else {
            for (let s = 1; s <= faces; s += 1) {
                addDice(sum + s, faces, diceLeft - 1);
            }
        }
    };
    addDice(0, 4, 9);
    addDice(0, 6, 6);

    let wins = 0;
    for (let s1 = 4; s1 <= 36; s1 += 1) {
        const n1 = scores[4][s1];
        wins += n1 * scores[6].slice(6, s1).reduce((sum, n2) => sum + n2, 0);
    }

    const games = 4 ** 9 * 6 ** 6;
    return (wins / games).toFixed(7);
};
