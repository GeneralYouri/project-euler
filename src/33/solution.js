const gcd = (a, b) => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
        [x, y] = [y, x % y];
    }
    return x;
};

// Todo: implement extra variation by accepting an input for the number of digits in numerator & denominator
module.exports = () => {
    let totalNumerator = 1;
    let totalDenominator = 1;

    for (let x = 1; x < 10; x += 1) {
        for (let a = 1; a < 10; a += 1) {
            for (let b = 0; b < 10; b += 1) {
                const ax = 10 * a + x;
                const xb = 10 * x + b;
                if (x !== a && ax / xb === a / b) {
                    totalNumerator *= ax;
                    totalDenominator *= xb;
                }
            }
        }
    }

    return totalDenominator / gcd(totalNumerator, totalDenominator);
};
