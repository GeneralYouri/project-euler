module.exports = (input) => {
    const rows = input.split(/\n/g).map(row => row.split(/\s/g).map(Number));

    let subSums = Array.from(Array(rows.length)).fill(0);
    for (let rowIndex = rows.length - 1; rowIndex > 0; rowIndex -= 1) {
        let row = rows[rowIndex].map((value, index) => value + subSums[index]);
        subSums = row.slice(0, rowIndex).map((value, index) => Math.max(value, row[index + 1]));
    }

    return subSums[0] + rows[0][0];
};
