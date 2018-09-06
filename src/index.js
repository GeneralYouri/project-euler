const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const getDirectories = source => readdirSync(source).filter(name => lstatSync(join(source, name)).isDirectory());

module.exports = {};
const problems = getDirectories(__dirname);
problems.forEach((problem) => {
    /* eslint-disable-next-line global-require, import/no-dynamic-require */
    module.exports[problem] = require(join(__dirname, problem));
});
