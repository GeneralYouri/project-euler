const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split(',');

test('Provided test cases', () => {
    expect(solution('10,' + defaultArgs[1])).toBe(405071317);
});

test('Custom test cases', () => {
    expect(solution('-1,' + defaultArgs[1])).toBe(0);
    expect(solution('0,' + defaultArgs[1])).toBe(0);
    expect(solution('1,' + defaultArgs[1])).toBe(1);
    expect(solution('100,' + defaultArgs[1])).toBe(9027641920);

    expect(solution(defaultArgs[0] + ',-1')).toBeUndefined();
    expect(solution(defaultArgs[0] + ',0')).toBeUndefined();
    expect(solution(defaultArgs[0] + ',1')).toBe(0);
    expect(solution(defaultArgs[0] + ',2')).toBe(0); // Technically not according to problem description, should be '00'
    expect(solution(defaultArgs[0] + ',12')).toBe(819110846700);
    expect(solution(defaultArgs[0] + ',13')).toBeUndefined();
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(9110846700);
});
