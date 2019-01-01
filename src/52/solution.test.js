const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('2')).toBe(125874);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(142857);
});
