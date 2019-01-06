const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('7')).toBe(5);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBeUndefined();
    expect(solution('100000')).toBe(92821);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(661);
});
