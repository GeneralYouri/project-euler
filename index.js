// TODO: Use yargs Commands
const { argv } = require('yargs')
    .options({
        problem: {
            alias: ['p', 'problems'],
            describe: 'Choose which problem solution(s) to run',
            array: true,
            default: [],
        },
        input: {
            alias: ['inputs', 'i'],
            implies: 'problem',
            array: true,
            string: true,
        },
        time: {
            alias: 't',
            type: 'bool',
            default: false,
        },
    })
    .alias({ help: 'h', version: 'v' });

const solutions = require('./src');

module.exports = solutions;


const problems = Array.isArray(argv.problem) ? argv.problem : Object.keys(solutions);
problems.sort((a, b) => a - b).forEach((problem) => {
    try {
        const { solution, defaultInput } = solutions[problem];

        let { input } = argv;
        if (!input) {
            input = Array.isArray(defaultInput) ? defaultInput : [defaultInput];
        }

        console.log(`Problem ${problem}`);
        if (argv.time) {
            const start = process.hrtime();
            const answer = solution(...input);
            const time = process.hrtime(start);
            console.log('Answer:', answer);
            console.log('Time: %d ms', time[0] * 1000 + time[1] / 1000000);
        } else {
            console.log('Answer:', solution(...input));
        }
        console.log('==========');
    } catch (error) {
        console.log(`Problem ${problem} skipped ::`, error.message);
        console.log('==========');
    }
});