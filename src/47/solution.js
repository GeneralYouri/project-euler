const { primeGenerator, PrimeSieve } = require('aoc-toolkit');

const generate = (primeFactorCounts, from, to, primesFrom, primesTo) => {
    const primes = new PrimeSieve(primesTo);
    primes.iterator(0, primesFrom, (prime) => {
        for (let n = Math.trunc(from / prime + 1) * prime; n < to; n += prime) {
            primeFactorCounts[n] = (primeFactorCounts[n] || 0) + 1;
        }
    });
    primes.iterator(primesFrom + 1, primesTo, (prime) => {
        for (let n = prime; n < to; n += prime) {
            primeFactorCounts[n] = (primeFactorCounts[n] || 0) + 1;
        }
    });
};

const iterate = (primeFactorCounts, from, to, targetCount) => {
    for (let n = from; n < to; n += 1) {
        for (let i = targetCount - 1; i >= 0; i -= 1) {
            if (primeFactorCounts[n + i] !== targetCount) {
                n += i;
                break;
            } else if (i === 0) {
                return n;
            }
        }
    }
    return false;
};

module.exports = (input) => {
    const targetCount = Number(input);
    if (targetCount < 1) {
        return undefined;
    }

    const primes = primeGenerator();
    let limitDivisor = primes.next().value;
    for (let i = 1; i < targetCount - 1; i += 1) {
        limitDivisor *= primes.next().value;
    }

    const primeFactorCounts = [];
    let [from, to] = [1, 1000];
    let [primesFrom, primesTo] = [1, to / limitDivisor];
    let answer;
    do {
        generate(primeFactorCounts, from, to, primesFrom, primesTo);
        answer = iterate(primeFactorCounts, from, to, targetCount);
        [from, to] = [to - targetCount + 1, to * 2];
        [primesFrom, primesTo] = [primesTo, to / limitDivisor];
    } while (!answer);
    return answer;
};
