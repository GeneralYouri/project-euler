module.exports = (input, digitCount = 10) => {
    const numbers = input.split(/\n/g);
    if (digitCount < 0) {
        return undefined;
    }

    const digitsPerSum = Math.floor(Math.log10(Number.MAX_SAFE_INTEGER / numbers.length));
    const divider = 10 ** digitsPerSum;
    let sumStr = '';
    let overflow = 0;

    for (let i = numbers[0].length; i >= 0; i -= digitsPerSum) {
        const sum = numbers.reduce((acc, n) => acc + Number(n.substring(i - digitsPerSum, i)), overflow);
        overflow = Math.floor(sum / divider);
        sumStr = (sum % divider).toString() + sumStr;
    }

    return sumStr.slice(0, digitCount);
};
