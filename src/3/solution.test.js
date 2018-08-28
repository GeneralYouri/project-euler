const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('13195')).toBe(29);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(6857);
});
