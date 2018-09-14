module.exports = (input) => {
    const limit = Math.trunc(Number(input));
    const sqrt = Math.trunc(Math.sqrt(limit));
    if (limit <= 2) {
        return 0;
    }

    const composites = {};
    for (let index = 3; index <= sqrt; index += 2) {
        if (composites[index]) {
            continue;
        }

        for (let x = index * index; x < limit; x += index) {
            composites[x] = true;
        }
    }

    let sum = 2;
    for (let index = 3; index < limit; index += 2) {
        if (!composites[index]) {
            sum += index;
        }
    }

    return sum;
};
