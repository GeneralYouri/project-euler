const { readFileSync } = require('fs');
const { runSolution } = require('./../../lib');
const solution = require('./solution');
const alternative1 = require('./alternative1');
const alternative2 = require('./alternative2');

const defaultInput = readFileSync(require.resolve('./input.txt'), { encoding: 'UTF-8' });
module.exports = { solution: alternative1, alternative2, defaultInput };

if (module === require.main) {
    let input = process.argv.slice(2);
    if (input.length === 0) {
        input = Array.isArray(defaultInput) ? defaultInput : [defaultInput];
    }

    runSolution('Main solution', solution, input);
    runSolution('Alternative 1', alternative1, input);
    runSolution('Alternative 2', alternative2, input);
}
