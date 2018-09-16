module.exports = (input) => {
    const power = Math.trunc(Number(input));
    if (power < 3) {
        return 0;
    }

    // Calculate the upper bound for the given power
    const maxPerDigit = 9 ** power;
    let digitCount = Math.ceil(Math.log10(maxPerDigit));
    while (digitCount * maxPerDigit > 10 ** digitCount) {
        digitCount = Math.ceil(Math.log10(digitCount * maxPerDigit));
    }
    const upperBound = digitCount * maxPerDigit;

    // Build a small lookup table for the 10 possible power calculations
    const digitNthPowers = Array.from(Array(10)).map((_, index) => index ** power);

    // Iterate all candidate numbers, returning the sum of the matches
    let sumOfMatches = 0;
    for (let x = 10; x <= upperBound; x += 1) {
        let powerSum = 0;
        let remainingX = x;
        for (let i = 1; remainingX > 0; i += 1) {
            const digit = remainingX % 10;
            powerSum += digitNthPowers[digit];
            remainingX = (remainingX - digit) / 10;
        }
        if (x === powerSum) {
            sumOfMatches += x;
        }
    }
    return sumOfMatches;
};
