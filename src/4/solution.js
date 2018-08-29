module.exports = (input) => {
    const digits = Number(input);
    const upperBound = Math.pow(10, digits) - 1;
    const lowerBound = (upperBound + 1) / 10;
    const upper11Mod = Math.floor(upperBound / 11) * 11;

    for (let n = upperBound; n >= lowerBound; n -= 1) {
        const palindrome = parseInt(('' + n) + ('' + n).split('').reverse().join(''));

        for (let divisor1 = upper11Mod; divisor1 >= lowerBound; divisor1 -= 11) {
            const divisor2 = palindrome / divisor1;

            if (divisor2 <= upperBound && Math.floor(divisor2) * divisor1 === palindrome) {
                return palindrome;
            }
        }
    }
};
