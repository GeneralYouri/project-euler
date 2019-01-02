const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('0.6')).toBe(5);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(26241);
});
