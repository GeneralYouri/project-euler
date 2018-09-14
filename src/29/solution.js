module.exports = (boundA, boundB = boundA) => {
    const limitA = BigInt(boundA);
    const limitB = BigInt(boundB);
    if (limitA < 2n || limitB < 2n) {
        return undefined;
    }

    const distinctTerms = new Set();

    for (let a = 2n; a <= limitA; a += 1n) {
        for (let b = 2n; b <= limitB; b += 1n) {
            distinctTerms.add(a ** b);
        }
    }

    return distinctTerms.size;
};
