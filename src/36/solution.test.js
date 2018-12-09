const { solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('1')).toBe(0);
    expect(solution('2')).toBe(1);
    expect(solution('10000000')).toBe(25846868);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(872187);
});
