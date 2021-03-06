const { primeGenerator } = require('aoc-toolkit');

// Calculate the LCM for 1 .. input by determining the required prime factors
module.exports = (input) => {
    const limit = Number(input);
    const sqrt = Math.sqrt(limit);
    const log = Math.log(limit);
    if (limit < 1) {
        return undefined;
    }

    const primes = primeGenerator();
    let prime = primes.next().value;
    let lcm = 1;

    // Primes at or below sqrt are included as many times as they can fit below input
    // Ex: LCM(10) => sqrt(10) ~ 3; 2^3 = 8 < 10 while 2^4 = 16 > 10, so 2^3 is used
    while (prime <= sqrt) {
        lcm *= prime ** Math.trunc(log / Math.log(prime));
        prime = primes.next().value;
    }

    // Primes above sqrt and below input are included exactly once
    while (prime <= limit) {
        lcm *= prime;
        prime = primes.next().value;
    }

    return lcm;
};
