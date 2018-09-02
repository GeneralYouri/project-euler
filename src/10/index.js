const { readFileSync } = require('fs');
const solution = require('./solution');

const defaultInput = readFileSync(require.resolve('./input.txt'), { encoding: 'UTF-8' });

module.exports = { solution, defaultInput };

if (module === require.main) {
    let input = process.argv.slice(2);
    if (input.length === 0) {
        input = Array.isArray(defaultInput) ? defaultInput : [defaultInput];
    }

    const start = process.hrtime();
    const answer = solution(...input);
    const time = process.hrtime(start);
    console.log('Problem answer:', answer);
    console.log('Problem time: %d ms', time[0] * 1000 + time[1] / 1000000);
}
