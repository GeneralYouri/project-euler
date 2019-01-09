const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('9,5')).toBe(36288);
    expect(solution('10,5')).toBe(36288);
    expect(solution('20,5')).toBe(17664);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(16576);
});
