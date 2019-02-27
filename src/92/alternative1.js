const calcChain = (digits) => {
    let sum = 0;
    for (let i = 0; i < digits.length; i += 1) {
        sum += digits[i] * digits[i];
    }
    return sum;
};
// This alternative using .reduce is 10% slower
// const calcChain = digits => digits.reduce((sum, digit) => sum + digit * digit, 0);

// Update both digits and (optionally) chain value (m)
const add1 = (digits, m) => {
    let i = digits.length - 1;
    while (digits[i] === 9 && i > 0) {
        m -= 81;
        digits[i] = 0;
        i -= 1;
    }
    if (digits[i] === 9) {
        m -= 81;
        digits[0] = 0;
        m += 1;
        digits.unshift(1);
    } else {
        m -= digits[i] * digits[i];
        digits[i] += 1;
        m += digits[i] * digits[i];
    }
    return m;
};

module.exports = (input) => {
    const limit = Number(input);

    const endsAt1 = new Set([1]);
    const endsAt89 = new Set([89]);
    const addLimit = 9 ** 2 * Math.ceil(Math.log10(limit));

    const chainMap = new Map();
    const digits = [1];
    for (let n = 1; n <= addLimit; n += 1) {
        chainMap.set(n, calcChain(digits));
        add1(digits);
    }

    let count = 0;
    for (let n = 1; n <= addLimit; n += 1) {
        let m = n;
        while (true) {
            m = chainMap.get(m);
            if (endsAt1.has(m)) {
                endsAt1.add(n);
                break;
            } else if (endsAt89.has(m)) {
                endsAt89.add(n);
                count += 1;
                break;
            }
        }
    }

    let m = calcChain(digits);
    for (let n = addLimit + 1; n < limit; n += 1) {
        if (endsAt89.has(m)) {
            count += 1;
        }
        m = add1(digits, m);
    }
    return count;
};
