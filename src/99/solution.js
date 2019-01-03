module.exports = (input) => {
    const pairs = input.split(/\n/g).map(line => line.split(','));
    const values = pairs.map(([base, exponent], index) => [Math.log10(base) * exponent, index + 1]);
    return values.reduce(([bestValue, bestIndex], [value, index]) => {
        return (value > bestValue) ? [value, index] : [bestValue, bestIndex];
    })[1];
};
