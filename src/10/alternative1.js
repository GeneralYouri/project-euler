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

module.exports = (input) => {
    const limit = Math.floor(Number(input));
    if (limit < 2) {
        return 0;
    }

    const primes = primeGenerator();
    let prime = primes.next();

    let sum = 0;
    while (prime.value < limit) {
        sum += prime.value;
        prime = primes.next();
    }

    return sum;
};
