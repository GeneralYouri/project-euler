const formatTime = ms => Number(ms.toPrecision(7)).toFixed(3);

const formatHeader = ([problem, alternative]) => problem.toString().padStart(5, ' ') + (alternative ? '.' + alternative : '  ');

const formatInfo = ([problem, alternative], time, answer) => {
    const header = formatHeader([problem, alternative]);
    const timeStr = formatTime(time).slice(0, 8).padStart(8, ' ');
    return `${header} | \x1b[38;5;240mTime:\x1b[0m ${timeStr} ms | \x1b[38;5;240mAnswer:\x1b[0m ${answer}`;
};

const formatError = ([problem, alternative], message) => {
    const header = formatHeader([problem, alternative]);
    return `\x1b[31m${header}\x1b[0m | \x1b[31mSkip:\x1b[0m             | \x1b[31m${message}\x1b[0m`;
};

const formatSeparator = (char = '-') => `${char.repeat(8)}+${char.repeat(19)}+${char.repeat(17)}`;

const formatTotal = (problem, time, solved) => {
    const header = problem.toString().padEnd(7, ' ');
    const timeStr = formatTime(time).slice(0, 8).padStart(8, ' ');
    const solvedStr = solved.toString().padStart(2, ' ');
    return `${header} | \x1b[38;5;240mTime:\x1b[0m ${timeStr} ms | \x1b[38;5;240mSolved:\x1b[0m ${solvedStr} / 635`;
};

const runSolution = (name, fn, input) => {
    const start = process.hrtime();
    const answer = fn(...input);
    const time = process.hrtime(start);
    console.log('-----', name, '-----');
    console.log('\x1b[38;5;240mAnswer:\x1b[0m', answer);
    console.log('\x1b[38;5;240mTime:  \x1b[0m', time[0] * 1000 + time[1] / 1000000, 'ms');
    console.log('-------------------------');
};

module.exports = {
    formatInfo,
    formatError,
    formatSeparator,
    formatTotal,
    runSolution,
};
