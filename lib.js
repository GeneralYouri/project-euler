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

const runSolution = (name, fn, input) => {
    const start = process.hrtime();
    const answer = fn(...input);
    const time = process.hrtime(start);
    console.log('-----', name, '-----');
    console.log('Problem answer:', answer);
    console.log('Problem time: %d ms', time[0] * 1000 + time[1] / 1000000);
    console.log('-------------------------');
};

module.exports = {
    formatInfo,
    formatError,
    formatTotal,
    runSolution,
};
