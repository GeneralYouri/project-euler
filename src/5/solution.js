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

// Calculate the LCM for 1 .. input by determining the required prime factors
module.exports = (input) => {
    const limit = Math.floor(Number(input));
    const sqrt = Math.sqrt(limit);
    const log = Math.log(limit);
    if (limit < 1) {
        return undefined;
    }

    const primes = primeGenerator();
    let prime = primes.next();
    let lcm = 1;

    // Primes at or below sqrt are included as many times as they can fit below input
    // Ex: LCM(10) => sqrt(10) ~ 3; 2^3 = 8 < 10 while 2^4 = 16 > 10, so 2^3 is used
    while (prime.value <= sqrt) {
        lcm *= prime.value ** Math.floor(log / Math.log(prime.value));
        prime = primes.next();
    }

    // Primes above sqrt and below input are included exactly once
    while (prime.value <= limit) {
        lcm *= prime.value;
        prime = primes.next();
    }

    return lcm;
};
