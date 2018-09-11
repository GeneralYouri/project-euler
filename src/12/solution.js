const triangularGenerator = function* triangularGenerator() {
    let n = 0;
    for (let i = 1; true; i += 1) {
        n += i;
        yield n;
    }
};

// A low-level primality check that simply iterates all possible divisors
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
const primeGenerator = function* primeGenerator() {
    yield 2;

    for (let candidate = 3; true; candidate += 2) {
        if (isPrime(candidate)) {
            yield candidate;
        }
    }
};

const primeList = [];

// Returns an array with all prime factors of n
const getFactorCount = (n) => {
    let factors = 1;
    let remaining = n;

    let primeIndex = 0;

    while (remaining > 1) {
        const prime = primeList[primeIndex];
        let hits = 0;

        while (remaining % prime === 0) {
            hits += 1;
            remaining /= prime;
        }

        if (hits > 0) {
            factors *= hits + 1;
        }

        primeIndex += 1;
    }

    return factors;
};

// TODO: Write readme
// TODO: Add new solutions / Improve existing solutions
module.exports = (input) => {
    const minCount = Math.floor(Number(input));
    const minimum = Math.ceil(minCount / 2) ** 2;
    if (minCount < 0) {
        return undefined;
    }

    const triangulars = triangularGenerator();
    let triangular = triangulars.next();

    // Since half of a number's divisors are below the number's sqrt, we can skip the very small numbers
    while (triangular.value < minimum) {
        triangular = triangulars.next();
    }

    // Generate a list of primes as needed by getFactorCount, until 4 * minimum, which seems to always be sufficient
    const primes = primeGenerator();
    let prime = primes.next();
    while (prime.value < 4 * minimum) {
        primeList.push(prime.value);
        prime = primes.next();
    }

    // Calculate the divisors until we find the first triangular with a sufficient divider count
    let divisors = getFactorCount(triangular.value);
    while (divisors <= minCount) {
        triangular = triangulars.next();
        divisors = getFactorCount(triangular.value);
    }

    return triangular.value;
};
