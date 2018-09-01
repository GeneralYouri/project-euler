const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('2')).toBe(9009);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBeUndefined();
    expect(solution('4')).toBe(99000099);
    expect(solution('5')).toBe(9966006699);
    expect(solution('6')).toBe(999000000999);
    expect(solution('7')).toBe(99956644665999);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(906609);
});
