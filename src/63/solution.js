module.exports = () => {
    let count = 0;
    for (let n = 1; n < 10; n += 1) {
        const log10 = Math.log10(n);
        let m = log10;
        for (let p = 0; p === Math.floor(m); p += 1) {
            count += 1;
            m += log10;
        }
    }
    return count;
};
