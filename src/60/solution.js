const { isPrime, primeGenerator } = require('aoc-toolkit');

const concatNumber = (a, b) => {
    let multiplier = 1;
    while (multiplier < b) {
        multiplier *= 10;
    }
    return a * multiplier + b;
};

module.exports = (input) => {
    const targetCount = Number(input);

    const primeList = [];
    const primePairs = [];

    // let best = Number.POSITIVE_INFINITY;

    const getAllowedPartners = (p) => {
        const result = [];
        for (let i = 0; i < primeList.length; i += 1) {
            const q = primeList[i];
            // if (best !== Number.POSITIVE_INFINITY && p + q >= best) {
            //     break;
            // }
            result.push(isPrime(concatNumber(p, q)) && isPrime(concatNumber(q, p)));
        }
        return result;
    };

    const extendSet = (set, setSum, minimum, limit) => {
        for (let i = minimum; i < primeList.length; i += 1) {
            const p = primeList[i];

            const newSum = setSum + p;
            // if (newSum >= best) {
            //     break;
            // }

            let isValid = true;
            /* eslint-disable-next-line no-cond-assign */
            for (let j = 0; j < set.length && (isValid = primePairs[i][set[j]]); j += 1) ;
            if (!isValid) {
                continue;
            }
            // More elegant, but slower :(
            // if (!set.every(j => primePairs[i][j])) {
            //     continue;
            // }

            const newSet = [...set, i];
            if (newSet.length < targetCount) {
                const newBest = extendSet(newSet, newSum, i + 1, limit);
                if (newBest) {
                    return newBest;
                }
            } else /* if (newSum < best) */ {
                return newSum;
            }
        }
        return false;
    };

    // Skip the primes 2 and 5 as they can't concatenate with anything to form a new prime
    const primes = primeGenerator();
    primes.next();
    primes.next();
    primes.next();
    let p = 3;

    // Iteratively increase our search space (and pregenerate the new primes)
    for (let limit = 1000; /* limit < best * 10 */; limit *= 10) {
        // if (limit > best) {
        //     limit = best;
        // }

        while (p < limit) {
            primePairs.push(getAllowedPartners(p));
            primeList.push(p);
            p = primes.next().value;
        }
        // console.log('New limit', limit, primeList.length, Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024), 'MB');

        const newBest = extendSet([], 0, 0, limit);
        if (newBest) {
            return newBest;
            // best = newBest;
        }
    }

    // return best;
};
