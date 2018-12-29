const { primeGenerator } = require('aoc-toolkit');

const hash = n => n.toString().split('').sort().join('');

module.exports = () => {
    const primes = primeGenerator();
    let prime = primes.next().value;
    while (prime < 1000) {
        prime = primes.next().value;
    }

    const buckets = {};
    while (prime < 10000) {
        const h = hash(prime);
        if (!buckets[h]) {
            buckets[h] = [];
        }
        buckets[h].push(prime);
        prime = primes.next().value;
    }

    const candidates = Object.values(buckets).filter(b => b.length >= 3);
    for (const bucket of candidates) {
        for (let index1 = 0; index1 < bucket.length - 2; index1 += 1) {
            for (let index2 = index1 + 1; index2 < bucket.length - 1; index2 += 1) {
                const [n1, n2] = [bucket[index1], bucket[index2]];
                const n3 = n2 + (n2 - n1);
                if (bucket.includes(n3) && n1 !== 1487) {
                    return n1.toString() + n2.toString() + n3.toString();
                }
            }
        }
    }

    return undefined;
};
