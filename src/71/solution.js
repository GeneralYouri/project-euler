module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const [targetN, targetD] = [3, 7];
    const [baseN, baseD] = [2, 5];
    return Math.trunc((limit - baseD) / targetD) * targetN + baseN;
};
