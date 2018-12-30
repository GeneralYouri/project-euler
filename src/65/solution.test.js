const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(17);
});

test('Custom test cases', () => {
    expect(solution('10000')).toBe(55322);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(272);
});
