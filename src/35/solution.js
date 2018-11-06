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

const getCirculars = (n) => {
    const digits = n.toString().split('');
    return Array.from(Array(digits.length)).map((_, index) => Number(digits.slice(index).join('') + digits.slice(0, index).join('')));
};

module.exports = (input) => {
    const limit = Math.trunc(Number(input));

    const primes = primeGenerator();
    let prime = primes.next().value;
    let circularCount = 0;

    while (prime < limit) {
        const circulars = getCirculars(prime);
        if (circulars.every(isPrime)) {
            circularCount += 1;
        }
        prime = primes.next().value;
    }

    return circularCount;
};
