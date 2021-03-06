const hasher = (remainder, coinTypes) => remainder + ';' + coinTypes;

let foundUniques;

const countUniques = (remainder, coinTypes) => {
    if (remainder === 0 || coinTypes.length === 1) {
        return 1;
    }

    const possibleTypes = coinTypes.filter(type => type <= remainder);
    return possibleTypes.reduce((acc, type) => {
        const newRemainder = remainder - type;
        const newTypes = possibleTypes.filter(possibleType => possibleType <= type && possibleType <= newRemainder);

        const hash = hasher(newRemainder, newTypes);
        if (!foundUniques[hash]) {
            foundUniques[hash] = countUniques(newRemainder, newTypes);
        }

        acc += foundUniques[hash];
        return acc;
    }, 0);
};

module.exports = (input) => {
    const stringArgs = input.split('\n');
    const remainder = Number(stringArgs[0]);
    const allCoinTypes = stringArgs[1].split(',').map(Number).sort((a, b) => b - a);
    if (remainder < 0) {
        return undefined;
    }

    foundUniques = {};
    return countUniques(remainder, allCoinTypes);
};
