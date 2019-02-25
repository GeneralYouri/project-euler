const calcChain = (value) => {
    let sum = 0;
    while (value > 0) {
        const digit = value % 10;
        sum += digit * digit;
        value = (value - digit) / 10;
    }
    return sum;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const endsAt1 = new Set([1]);
    const endsAt89 = new Set([89]);
    const digitCount = Math.log10(limit);
    const maxValue = 9 ** 2 * digitCount;

    const chainMap = new Map();
    for (let value = 1; value <= maxValue; value += 1) {
        chainMap.set(value, calcChain(value));
    }

    for (let n = 1; n <= maxValue; n += 1) {
        let m = n;
        while (true) {
            m = chainMap.get(m);
            if (endsAt1.has(m)) {
                endsAt1.add(n);
                break;
            } else if (endsAt89.has(m)) {
                endsAt89.add(n);
                break;
            }
        }
    }


    let countsByValue = Array(maxValue + 1).fill(0);
    countsByValue[0] = 1;

    for (let digitsLeft = 1; digitsLeft <= digitCount; digitsLeft += 1) {
        const newCountsByValue = Array(maxValue + 1).fill(0);

        for (let targetValue = 0; targetValue <= maxValue; targetValue += 1) {
            for (let digit = 0; digit <= 9; digit += 1) {
                const digitValue = digit * digit;
                if (digitValue <= targetValue) {
                    newCountsByValue[targetValue] += countsByValue[targetValue - digitValue];
                }
            }
        }

        countsByValue = newCountsByValue;
    }

    return Array.from(endsAt89).reduce((count, chainValue) => count + countsByValue[chainValue], 0);
};
