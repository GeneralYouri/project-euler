const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('4/10')).toBe(12);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(892371480);
});
