const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('100')).toBe(41);
    expect(solution('1000')).toBe(953);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('2')).toBeUndefined();
    expect(solution('3')).toBe(2);
    expect(solution('1000000000')).toBe(999715711);
    expect(solution('1000000000000')).toBe(999973156643);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(997651);
});
