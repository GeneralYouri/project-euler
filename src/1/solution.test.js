const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(23);
});

xtest('Problem input', () => {
    expect(solution(defaultInput)).toBe(233168);
});
