const { readFileSync } = require('fs');
const { solution, defaultInput } = require('./');

const testInput = (function () {
    const data = readFileSync(require.resolve('./input-test.txt'), { encoding: 'UTF-8' });
    return n => data.split(/\n/g).slice(0, n).join('\n');
}());

test('Provided test cases', () => {
    expect(solution('3\n7 4\n2 4 6\n8 5 9 3')).toBe(23);
});

test('Custom test cases', () => {
    expect(solution(testInput(0))).toBe(0);
    expect(solution(testInput(1))).toBe(16);
    expect(solution(testInput(2))).toBe(114);
    expect(solution(testInput(15))).toBe(1096);
    expect(solution(testInput(100))).toBe(7396);
    expect(solution(testInput(1000))).toBe(74437);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(1074);
});
