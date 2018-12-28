const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(405071317);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('1')).toBe(1);
    expect(solution('100')).toBe(9027641920);

    expect(solution('1000', -1)).toBeUndefined();
    expect(solution('1000', 0)).toBeUndefined();
    expect(solution('1000', 1)).toBe(0);
    expect(solution('1000', 2)).toBe(0); // Technically not according to problem description, should be '00'
    expect(solution('1000', 12)).toBe(819110846700);
    expect(solution('1000', 13)).toBeUndefined();
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(9110846700);
});
