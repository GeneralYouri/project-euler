const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split('\n');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution('-1\n' + defaultArgs[1])).toBeUndefined();
    expect(solution('0\n' + defaultArgs[1])).toBe(1);
    expect(solution('1\n' + defaultArgs[1])).toBe(1);
    expect(solution('2\n' + defaultArgs[1])).toBe(2);
    expect(solution('3\n' + defaultArgs[1])).toBe(2);
    expect(solution('5\n' + defaultArgs[1])).toBe(4);
    expect(solution('10\n' + defaultArgs[1])).toBe(11);
    expect(solution('100\n' + defaultArgs[1])).toBe(4563);
    expect(solution('1000\n' + defaultArgs[1])).toBe(321335886);
    expect(solution('13511\n' + defaultArgs[1])).toBe(9004881987651020);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(73682);
});
