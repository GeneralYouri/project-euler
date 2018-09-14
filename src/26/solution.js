module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    if (limit < 2) {
        return undefined;
    }

    let largestCycle = 0;
    let largestCycleN = 0;

    for (let n = limit - 1; n > largestCycle; n -= 1) {
        const lastIndices = {};
        let index;

        let remainder = 1;
        for (index = 0; !lastIndices[remainder] && remainder !== 0; index += 1) {
            lastIndices[remainder] = index;
            remainder = (10 * remainder) % n;
        }

        if (lastIndices[remainder]) {
            const cycleLength = index - lastIndices[remainder];
            if (cycleLength > largestCycle) {
                largestCycle = cycleLength;
                largestCycleN = n;
            }
        }
    }

    return largestCycleN;
};
