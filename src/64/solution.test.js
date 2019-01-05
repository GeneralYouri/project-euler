const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('13')).toBe(4);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(1322);
});
