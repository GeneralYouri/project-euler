// Golden Ratio
const Phi = (1 + Math.sqrt(5)) / 2;

// Binet's formula calculates the index of the Fibonacci number nearest to a given number n
// For improved precision we instead accept a log10n, the log10 of n (so we assume Math.log10(n))
const binet = log10n => Math.round((log10n + Math.log10(Math.sqrt(5))) / Math.log10(Phi));

const getNthFibonacci = n => Math.round(Phi ** n / Math.sqrt(5));

module.exports = (input) => {
    const log10n = Number(input) - 1;
    if (log10n < 0) {
        return undefined;
    }
    if (log10n === 0) {
        return 1;
    }

    let closestIndex = binet(log10n);
    const closestFib = getNthFibonacci(closestIndex);
    if (Math.log10(closestFib) < (log10n)) {
        closestIndex += 1;
    }
    return closestIndex;
};
