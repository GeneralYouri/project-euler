const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('5')).toBe(15);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBeUndefined();
    expect(solution('200')).toBe(37774);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(9183);
});
