// A low-level primality check that simply iterates all possible dividers
const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) {
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

module.exports = (input) => {
    let remaining = Math.floor(Number(input));
    if (remaining <= 1) {
        return undefined;
    }

    let largestPrime = 1;

    while (remaining > 1) {
        const primes = primeGenerator();
        let prime = primes.next();

        while (!prime.done) {
            if (remaining % prime.value === 0) {
                largestPrime = Math.max(largestPrime, prime.value);
                remaining /= prime.value;
                break;
            }

            prime = primes.next();
        }
    }

    return largestPrime;
};
