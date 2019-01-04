const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('3')).toBe(41063625);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(1);
    expect(solution('2')).toBe(125);
    expect(solution('4')).toBe(1006012008);
    expect(solution('6')).toBe(1000600120008);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(127035954683);
});
