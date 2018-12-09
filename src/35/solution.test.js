const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('100')).toBe(13);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(55);
});
