const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('120')).toBe(120);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('12')).toBe(12);
    expect(solution('10000')).toBe(9240);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(840);
});
