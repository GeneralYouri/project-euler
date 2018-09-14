// TODO: For this problem, applying multiple numbers per round has not yet been implemented.
module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 0) {
        return undefined;
    }

    let factorialStr;
    if (limit <= 18) {
        let factorial = 1;
        for (let m = 2; m <= limit; m += 1) {
            factorial *= m;
        }
        factorialStr = factorial.toString();
    } else {
        const digitsPerChunk = Math.trunc(Math.log10(Number.MAX_SAFE_INTEGER / limit));
        const divisor = 10 ** digitsPerChunk;

        factorialStr = '1';
        let overflow;

        for (let multiplier = 2; multiplier <= limit; multiplier += 1) {
            let newFactorialStr = '';
            overflow = 0;

            for (let c = 0; factorialStr.length > 0; c += 1) {
                const digits = factorialStr.slice(-digitsPerChunk);
                factorialStr = factorialStr.slice(0, -digitsPerChunk);

                const multiple = Number(digits) * multiplier + overflow;
                overflow = Math.trunc(multiple / divisor);
                const remainder = multiple - overflow * divisor;

                newFactorialStr = remainder.toString().padStart(digitsPerChunk, '0') + newFactorialStr;
            }

            factorialStr = (overflow > 0 ? overflow.toString() : '') + newFactorialStr;
        }
    }

    return factorialStr.split('').reduce((acc, digit) => acc + Number(digit), 0);
};
