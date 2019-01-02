const reverseNumber = n => Number(n.toString().split('').reverse().join(''));

const isPalindrome = (n) => {
    const str = n.toString();
    const midway = Math.trunc(str.length / 2);
    return str.slice(0, midway).split('').every((char, index) => char === str[str.length - index - 1]);
};

module.exports = (input) => {
    const [limit, maxIterations] = input.split(',').map(Number);

    let count = 0;
    for (let n = 1; n < limit; n += 1) {
        let m = n;
        for (let i = 1; i < maxIterations; i += 1) {
            m += reverseNumber(m);
            if (isPalindrome(m)) {
                count += 1;
                break;
            }
        }
    }
    return limit - count - 1;
};
