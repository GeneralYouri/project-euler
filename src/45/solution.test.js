const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('1')).toBe(40755);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBe(1);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(1533776805);
});
