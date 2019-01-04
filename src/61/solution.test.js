const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('5')).toBe(19291);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(28684);
});
