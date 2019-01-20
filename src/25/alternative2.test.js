const { alternative2: solution, defaultInput } = require('./');

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
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(4782);
});
