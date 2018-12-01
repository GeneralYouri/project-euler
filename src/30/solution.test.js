const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('4')).toBe(19316);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('1')).toBe(0);
    expect(solution('2')).toBe(0);
    expect(solution('3')).toBe(1301);
    expect(solution('6')).toBe(548834);
    expect(solution('7')).toBe(40139604);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(443839);
});
