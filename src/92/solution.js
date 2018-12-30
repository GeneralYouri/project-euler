const squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];

const calcChain = (n) => {
    let m = 0;
    while (n > 0) {
        const remainder = Math.floor(n / 10);
        const digit = n - remainder * 10;
        m += squares[digit];
        n = remainder;
    }
    return m;
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const endsAt1 = new Set([1]);
    const endsAt89 = new Set([89]);
    const addLimit = squares[9] * Math.ceil(Math.log10(limit));

    const chainMap = new Map();
    for (let n = 1; n <= addLimit; n += 1) {
        chainMap.set(n, calcChain(n));
    }

    let count = 0;
    for (let n = 1; n < limit; n += 1) {
        let m = n;
        while (true) {
            if (endsAt1.has(m)) {
                if (n <= addLimit) {
                    endsAt1.add(n);
                }
                break;
            } else if (endsAt89.has(m)) {
                if (n <= addLimit) {
                    endsAt89.add(n);
                }
                count += 1;
                break;
            }

            if (m <= addLimit) {
                m = chainMap.get(m);
            } else {
                m = calcChain(m);
            }
        }
    }
    return count;
};
