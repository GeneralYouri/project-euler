const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('100')).toBe(13);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('2')).toBe(0);
    expect(solution('3')).toBe(1);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(55);
});
