// A low-level primality check that simply iterates all possible dividers
const isPrime = (n) => {
    if (n < 2 || n % 2 === 0) {
        return false;
    }
    if (n < 9) {
        return true;
    }
    if (n % 3 === 0) {
        return false;
    }

    const sqrt = Math.floor(Math.sqrt(n));
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
const primeGenerator = function* () {
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

// Calculate the LCM for 1 .. input by combining the prime factors of every number in the range
module.exports = (input) => {
    const limit = Math.floor(Number(input));
    if (limit < 1) {
        return undefined;
    }

    // Calculate prime factors for 2..n
    const primeFactors = Array.from(Array(limit - 1)).map((_, index) => {
        return getPrimeFactorsObject(index + 2);
    });

    // Combine the prime factors into a factorization for the LCM
    const lcmFactors = primeFactors.reduce((acc, factorObject) => {
        Object.entries(factorObject).forEach(([factor, hits]) => {
            acc[factor] = Math.max(acc[factor] || 0, hits);
        });
        return acc;
    }, {});

    // Calculate and return the LCM
    return Object.entries(lcmFactors).reduce((lcm, [factor, hits]) => lcm * Math.pow(Number(factor), hits), 1);
};
