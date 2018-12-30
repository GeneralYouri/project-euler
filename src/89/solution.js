const values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

const parseNumeral = (numeral) => {
    return Object.keys(values).reduce((value, type) => {
        while (numeral.indexOf(type) === 0) {
            numeral = numeral.slice(type.length);
            value += values[type];
        }
        return value;
    }, 0);
};

const makeNumeral = (value) => {
    return Object.keys(values).reduce((numeral, type) => {
        const v = values[type];
        while (v <= value) {
            numeral += type;
            value -= v;
        }
        return numeral;
    }, '');
};

module.exports = (input) => {
    const numerals = input.split(/\n/g);

    let charsSaved = 0;
    for (const numeral of numerals) {
        const value = parseNumeral(numeral);
        const shortNumeral = makeNumeral(value);
        charsSaved += numeral.length - shortNumeral.length;
        if (shortNumeral.length > numeral.length) {
            console.log('wtf');
        }
    }

    return charsSaved;
};
