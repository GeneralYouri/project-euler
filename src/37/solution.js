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
    yield 3;

    for (let candidate = 5; true; candidate += 6) {
        if (isPrime(candidate)) {
            yield candidate;
        }
        if (isPrime(candidate + 2)) {
            yield candidate + 2;
        }
    }
};

const getTruncatables = (n) => {
    const str = n.toString();
    const ltr = Array.from(Array(str.length)).map((_, index) => str.slice(index));
    const rtl = Array.from(Array(str.length)).map((_, index) => str.slice(0, index + 1));
    return [...ltr, ...rtl];
};

module.exports = () => {
    const truncatablePrimes = [];

    const primes = primeGenerator();
    for (let i = 0; i < 4; i += 1) {
        primes.next();
    }

    do {
        const prime = primes.next().value;
        const truncatedSet = new Set(getTruncatables(prime));
        truncatedSet.delete(prime);
        const truncated = Array.from(truncatedSet).map(Number);
        if (truncated.every(isPrime)) {
            truncatablePrimes.push(prime);
        }
    } while (truncatablePrimes.length < 11);

    return truncatablePrimes.reduce((sum, prime) => sum + prime, 0);
};
