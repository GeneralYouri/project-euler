const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('8')).toBe(2);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(428570);
});
