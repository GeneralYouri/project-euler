const digitHash = n => n.toString().split('').sort().join('');

module.exports = (input) => {
    const targetSize = Math.trunc(Number(input));
    if (targetSize < 1) {
        return undefined;
    }

    const cubesByDigits = new Map();
    let best = Number.POSITIVE_INFINITY;
    let limit = Number.POSITIVE_INFINITY;

    for (let n = 1; n < limit; n += 1) {
        const cube = n ** 3;
        const hash = digitHash(cube);
        if (!cubesByDigits.has(hash)) {
            cubesByDigits.set(hash, []);
        }

        const group = cubesByDigits.get(hash);
        group.push(cube);

        if (group.length === targetSize) {
            const lowest = Math.min(...group);
            if (lowest < best) {
                best = lowest;
                limit = Math.cbrt(10 ** (Math.floor(Math.log10(best)) + 1));
            }
        }
    }
    return best;
};
