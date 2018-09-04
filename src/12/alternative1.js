const triangularGenerator = function* () {
    let n = 0;
    for (let i = 1; true; i += 1) {
        n += i;
        yield n;
    }
};

const getDivisors = (n) => {
    const sqrt = Math.sqrt(n);
    const divisors = [];
    const mirrors = [];

    const di = n % 2 + 1;
    for (let i = 1; i <= sqrt; i += di) {
        const div = n / i;
        if (Math.floor(div) * i === n) {
            divisors.push(i);
            mirrors.push(div);
        }
    }

    return [...divisors, ...mirrors.reverse()];
};

const getDividerCount = (n) => {
    const sqrt = Math.floor(Math.sqrt(n));
    let dividerCount = 0;

    const di = n % 2 + 1;
    for (let i = 1; i <= sqrt; i += di) {
        const div = n / i;
        if (Math.floor(div) * i === n) {
            dividerCount += 2;
        }
    }

    if (sqrt * sqrt === n) {
        dividerCount -= 1;
    }

    return dividerCount;
};

module.exports = (input) => {
    const dividerCount = Math.floor(Number(input));
    const minimum = (dividerCount / 2) ** 2;
    if (dividerCount < 0) {
        return undefined;
    }

    const triangulars = triangularGenerator();
    let triangular = triangulars.next();

    while (triangular.value < minimum) {
        triangular = triangulars.next();
    }

    while (getDividerCount(triangular.value) <= dividerCount) {
        triangular = triangulars.next();
    }

    return triangular.value;
};
