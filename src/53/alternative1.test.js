const { alternative1: solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('5,9')).toBe(2);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(4075);
});
