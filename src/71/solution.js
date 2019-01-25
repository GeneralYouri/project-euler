module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 3) {
        return undefined;
    }
    if (limit === 3 || limit === 4) {
        return 1;
    }

    const [targetN, targetD] = [3, 7];
    const [baseN, baseD] = [2, 5];
    return Math.floor((limit - baseD) / targetD) * targetN + baseN;
};
