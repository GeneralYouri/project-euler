const { argv } = require('yargs')
    .options({
        problem: {
            alias: 'p',
            type: 'number',
            default: 0,
        },
        input: {
            alias: 'i',
            implies: 'problem',
            array: true,
            string: true,
        },
        time: {
            alias: 't',
            type: 'bool',
            default: false,
        },
    });

const solutions = require('./src');

module.exports = solutions;


const problems = argv.problem ? [argv.problem] : Object.keys(solutions);
problems.forEach((problem) => {
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
