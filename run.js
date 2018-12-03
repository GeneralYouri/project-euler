// TODO: Use yargs Commands
const { argv } = require('yargs')
    .options({
        problem: {
            alias: ['problems', 'p'],
            array: true,
            default: [],
            describe: 'The problem solution(s) to run',
        },
        input: {
            alias: ['inputs', 'i'],
            implies: 'problem',
            array: true,
            string: true,
            describe: 'The custom problem input, if any',
        },
        runs: {
            alias: ['repeat', 'r'],
            type: 'number',
            default: 1,
            describe: 'How many times every solution should be run; the runtimes will be averaged',
        },
        alts: {
            alias: ['alternatives', 'a'],
            type: 'boolean',
            default: false,
            describe: 'Whether or not alternative solutions should be run; the fastest solution will be counted',
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

const runSolution = (problem, alternative, fn, input) => {
    if (!fn) {
        console.log(formatError([problem, alternative], 'No solution yet'));
        return false;
    }

    // Temporarily suppress console.log
    const oldLogger = console.log;
    if (!allowConsole) {
        console.log = () => {
        };
    }

    const bindFn = fn.bind(null, ...input);
    const answer = bindFn();
    let time = 0;
    for (let run = 1; run <= argv.runs; run += 1) {
        // Run and time the solution
        const startTime = process.hrtime.bigint();
        try {
            bindFn();
        } catch (error) {
            // Restore console.log
            if (!allowConsole) {
                console.log = oldLogger;
            }

            console.log(formatError([problem, alternative], error.message));
            return false;
        }

        const endTime = process.hrtime.bigint();
        time += Number(endTime - startTime) / 1000000;
    }
    time /= argv.runs;

    // Restore console.log
    if (!allowConsole) {
        console.log = oldLogger;
    }

    console.log(formatInfo([problem, alternative], time, answer));
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

    const alternatives = [solution.solution];
    if (argv.alts && solution.alternative1) {
        alternatives.push(solution.alternative1);
    }
    if (argv.alts && solution.alternative2) {
        alternatives.push(solution.alternative2);
    }

    const fastest = alternatives.reduce((acc, fn, index) => {
        const time = runSolution(problem, index, fn, input);
        return (time !== false && time < acc) ? time : acc;
    }, Number.POSITIVE_INFINITY);

    if (fastest && fastest !== Number.POSITIVE_INFINITY) {
        timeTotal += fastest;
        solvedTotal += 1;
    }
});

if (problems.length > 1) {
    console.log('------+-------------------+-----------------');
    console.log(formatTotal('Total', timeTotal, solvedTotal));
}
