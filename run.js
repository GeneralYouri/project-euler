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

const solutions = require('./src');


const formatTime = ms => Number(ms.toPrecision(7)).toFixed(3);

const formatHeader = problem => problem.toString().padStart(5, ' ');

const formatInfo = ([problem], time, answer) => {
    const header = formatHeader(problem);
    const timeStr = formatTime(time).slice(0, 8).padStart(8, ' ');
    return `${header} | \x1b[38;5;240mTime:\x1b[0m ${timeStr} ms | \x1b[38;5;240mAnswer:\x1b[0m ${answer}`;
};

const formatError = ([problem], message) => {
    const header = formatHeader(problem);
    return `\x1b[31m${header}\x1b[0m | \x1b[31mSkip:\x1b[0m             | \x1b[31m${message}\x1b[0m`;
};

const formatTotal = (problem, time, solved) => {
    const header = problem.toString().padEnd(5, ' ');
    const timeStr = formatTime(time).slice(0, 8).padStart(8, ' ');
    const solvedStr = solved.toString().padStart(2, ' ');
    return `${header} | \x1b[38;5;240mTime:\x1b[0m ${timeStr} ms | \x1b[38;5;240mSolved:\x1b[0m ${solvedStr} / 635`;
};

const problems = argv.problem.length ? argv.problem : Object.keys(solutions);
const allowConsole = argv.console !== undefined ? argv.console : problems.length <= 1;

const runSolution = (problem, fn, input) => {
    if (!fn) {
        console.log(formatError([problem], 'No solution yet'));
        return false;
    }

    // Temporarily suppress console.log
    const oldLogger = console.log;
    console.log(!allowConsole);
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
