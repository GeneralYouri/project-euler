const visualize = (blacks) => {
    const lines = [];
    for (let y = -50; y <= 50; y += 1) {
        let line = '';
        for (let x = -50; x <= 50; x += 1) {
            const hash = x + ',' + y;
            if (blacks.has(hash)) {
                line += '\u25a0';
            } else {
                line += '\u25a1';
            }
        }
        lines.push(line);
    }
    return lines.join('\n') + '\n';
};

module.exports = (input) => {
    const limit = BigInt(Number(input));

    const blacks = new Set();
    let [x, y] = [0, 0];
    let [dx, dy] = [0, -1];

    // period 10440 +104, blacks 772 +12
    let count = 0n;
    for (let i = 0n; i < limit; i += 1n) {
        if (i === 10000n) {
            const periods = (limit - i) / 104n;
            i += 104n * periods;
            count += 12n * periods;
        }

        const hash = x + ',' + y;
        if (blacks.has(hash)) {
            blacks.delete(hash);
            [dx, dy] = [dy, -1 * dx];
            count -= 1n;
        } else {
            blacks.add(hash);
            [dx, dy] = [-1 * dy, dx];
            count += 1n;
        }
        x += dx;
        y += dy;
    }
    return count.toString();
};
