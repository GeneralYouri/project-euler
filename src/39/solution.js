module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const solutions = new Map();

    for (let x = 1; x < limit / 2; x += 1) {
        for (let y = 1; y < limit / 2; y += 1) {
            const z = Math.sqrt(x * x + y * y);
            const p = x + y + z;
            if (p <= limit && Math.trunc(z) === z) {
                solutions.set(p, (solutions.get(p) || 0) + 1);
            }
        }
    }

    let bestP = 0;
    let bestCount = 0;
    solutions.forEach((count, p) => {
        if (count > bestCount) {
            bestCount = count;
            bestP = p;
        }
    });
    return bestP;
};
