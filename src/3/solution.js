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

module.exports = (input) => {
    let remaining = Math.floor(Number(input));
    if (remaining <= 1) {
        return undefined;
    }

    while (remaining > 1) {
        if (isPrime(remaining)) {
            return remaining;
        }

        const primes = primeGenerator();
        let prime;

        do {
            prime = primes.next();
        } while (remaining % prime.value !== 0);

        remaining /= prime.value;
    }

    return undefined;
};
