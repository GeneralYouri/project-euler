const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('100')).toBe(44);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(4613732);
});
