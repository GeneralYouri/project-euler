// A low-level primality check that simply iterates all possible divisors
const isPrime = (n) => {
    if (n === 2) {
        return true;
    } else if (n < 2 || n % 2 === 0) {
        return false;
    }
    if (n < 9) {
        return true;
    } else if (n % 3 === 0) {
        return false;
    }

    const sqrt = Math.trunc(Math.sqrt(n));
    for (let i = 5; i <= sqrt; i += 6) {
        if (n % i === 0) {
            return false;
        }
        if (n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
};

// An infinite generator for the collection of prime numbers
const primeGenerator = function* primeGenerator() {
    yield 2;

    for (let candidate = 3; true; candidate += 2) {
        if (isPrime(candidate)) {
            yield candidate;
        }
    }
};

// Returns an array with all prime factors of n
const getPrimeFactorsObject = (n) => {
    const factors = {};
    let remaining = n;

    const primes = primeGenerator();
    let prime = primes.next();

    while (remaining > 1) {
        let hits = 0;

        while (remaining % prime.value === 0) {
            hits += 1;
            remaining /= prime.value;
        }

        if (hits > 0) {
            factors[prime.value] = hits;
        }

        prime = primes.next();
    }

    return factors;
};

module.exports = (boundA, boundB = boundA) => {
    const limitA = Math.trunc(Number(boundA));
    const limitB = Math.trunc(Number(boundB));
    if (limitA < 2 || limitB < 2) {
        return undefined;
    }

    const distinctTerms = new Set();

    for (let a = 2; a <= limitA; a += 1) {
        const primeFactors = getPrimeFactorsObject(a);
        for (let b = 2; b <= limitB; b += 1) {
            const hash = Object.entries(primeFactors).map(([prime, count]) => prime + ':' + (count * b)).join(',');
            distinctTerms.add(hash);
        }
    }

    return distinctTerms.size;
};
