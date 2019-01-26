const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('8')).toBe(3);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('5')).toBe(1);
    expect(solution('1000000')).toBe(50660592050);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(7295372);
});
