module.exports = () => {
    let count = 0;
    for (let n = 1; n < 10; n += 1) {
        let m = n;
        while (m >= 1) {
            count += 1;
            m = m * n / 10;
        }
    }
    return count;
};
