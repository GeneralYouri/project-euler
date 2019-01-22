const updateDigits = (allowedDigits, chosenDigit, chosenIndex) => {
    if (!allowedDigits) {
        return false;
    }

    let isValid = true;
    const newAllowedDigits = allowedDigits.map((set, index) => {
        const newSet = new Set(set);
        newSet.delete(chosenDigit);
        if (newSet.size === 0 && chosenIndex !== index) {
            isValid = false;
        }
        return newSet;
    });

    if (isValid) {
        newAllowedDigits[chosenIndex] = new Set([chosenDigit]);
        return newAllowedDigits;
    }
    return false;
};

const modulo = [1, 2, 3, 5, 7, 11, 13, 17];

const recurse = (allowedDigits, candidate, digitIndex) => {
    const mod = modulo[digitIndex];
    const divisor = 10 ** (modulo.length - 1 - digitIndex);
    const multiplier = divisor * 100;

    if (digitIndex === 0) {
        const lastDigit = Array.from(allowedDigits[0])[0];
        if (lastDigit === undefined || lastDigit === 0) {
            return [];
        }
        return [multiplier * lastDigit + candidate];
    }

    const matches = [];
    for (const newDigit of allowedDigits[digitIndex].values()) {
        const newAllowedDigits = updateDigits(allowedDigits, newDigit, digitIndex);
        if (!newAllowedDigits) {
            continue;
        }

        const newCandidate = multiplier * newDigit + candidate;
        if (Math.floor(newCandidate / divisor) % mod === 0) {
            const subMatches = recurse(newAllowedDigits, newCandidate, digitIndex - 1);
            matches.push(...subMatches);
        }
    }
    return matches;
};

module.exports = () => {
    const allDigits = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const baseDigits = Array.from(Array(10)).map(() => new Set(allDigits));

    // For divisors 2 and 5 we can prefilter the allowed digits
    baseDigits[3] = new Set(Array.from(baseDigits[3]).filter(x => x % 2 === 0));
    baseDigits[5] = new Set(Array.from(baseDigits[5]).filter(x => x % 5 === 0));

    let sum = 0;
    for (let multipleOf17 = Math.ceil(100 / 17) * 17; multipleOf17 < 1000; multipleOf17 += 17) {
        const digits = multipleOf17.toString().split('').map(Number);
        if (new Set(digits).size !== digits.length) {
            continue;
        }

        const allowedDigits = updateDigits(updateDigits(updateDigits(baseDigits, digits[2], 9), digits[1], 8), digits[0], 7);
        if (!allowedDigits) {
            continue;
        }

        const matches = recurse(allowedDigits, multipleOf17, 6);
        sum += matches.reduce((acc, m) => acc + m, 0);
    }
    return sum;
};
