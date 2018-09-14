const { readFileSync } = require('fs');
const { runSolution } = require('./../../lib');
const solution = require('./solution');

const defaultInput = readFileSync(require.resolve('./input.txt'), { encoding: 'UTF-8' });
module.exports = { solution, defaultInput };

if (module === require.main) {
    let input = process.argv.slice(2);
    if (input.length === 0) {
        input = Array.isArray(defaultInput) ? defaultInput : [defaultInput];
    }

    runSolution('Main solution', solution, input);
}
