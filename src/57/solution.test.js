const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('8')).toBe(1);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(153);
});
