// TODO: Add new solutions / Improve existing solutions
module.exports = (input) => {
    const limitC = Math.trunc(Number(input));
    const limitB = Math.trunc(limitC / 2);
    const limitA = Math.trunc(limitC / 3);

    for (let a = 3; a < limitA; a += 1) {
        for (let b = a + 1; b < limitB; b += 1) {
            const c = limitC - b - a;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }

    return undefined;
};
