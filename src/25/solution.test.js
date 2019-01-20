const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('3')).toBe(12);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(1);
    expect(solution('2')).toBe(7);
    expect(solution('10')).toBe(45);
    expect(solution('100')).toBe(476);
    expect(solution('1000')).toBe(4782);
    expect(solution('10000')).toBe(47847);
    expect(solution('1000000000000000')).toBe(4784971966781663);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(4782);
});
