// TODO: Use yargs Commands
// TODO: Add ability to run alternative solutions
const { argv } = require('yargs')
    .options({
        problem: {
            alias: ['problems', 'p'],
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
        console: {
            alias: ['suppress-console', 'c'],
            type: 'boolean',
        },
    })
    .alias({ help: 'h', version: 'v' });

const { formatInfo, formatError, formatTotal } = require('./lib');
const solutions = require('./src');


const problems = argv.problem.length ? argv.problem : Object.keys(solutions);
const allowConsole = argv.console !== undefined ? argv.console : problems.length <= 1;

const runSolution = (problem, fn, input) => {
    if (!fn) {
        console.log(formatError([problem], 'No solution yet'));
        return false;
    }

    // Temporarily suppress console.log
    const oldLogger = console.log;
    if (!allowConsole) {
        console.log = () => {
        };
    }

    // Run and time the solution
    const startTime = process.hrtime.bigint();
    let answer;
    try {
        answer = fn(...input);
    } catch (error) {
        // Restore console.log
        if (!allowConsole) {
            console.log = oldLogger;
        }

        console.log(formatError([problem], error.message));
        return false;
    }

    const endTime = process.hrtime.bigint();
    const time = Number(endTime - startTime) / 1000000;

    // Restore console.log
    if (!allowConsole) {
        console.log = oldLogger;
    }

    console.log(formatInfo([problem], time, answer));
    return time;
};

let timeTotal = 0;
let solvedTotal = 0;
problems.sort((a, b) => a - b).forEach((problem) => {
    const solution = solutions[problem];
    if (!solution) {
        console.log(formatError([problem], 'No solution yet'));
        return;
    }

    const input = argv.input ? argv.input : [solution.defaultInput];

    const time = runSolution(problem, solution.solution, input);
    if (time) {
        timeTotal += time;
        solvedTotal += 1;
    }
});

if (problems.length > 1) {
    console.log('------+-------------------+-----------------');
    console.log(formatTotal('Total', timeTotal, solvedTotal));
}
