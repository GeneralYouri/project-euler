const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('2')).toBe(14);
    expect(solution('3')).toBe(644);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(2);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(134043);
});
