const { solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('3')).toBe(0);
    expect(solution('4')).toBe(12);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(45228);
});
