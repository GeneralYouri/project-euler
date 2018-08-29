const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('13195')).toBe(29);
});

test('Custom test cases', () => {
    expect(solution('2')).toBe(2);
    expect(solution('3')).toBe(3);
    expect(solution('10')).toBe(5);
    expect(solution('8008135')).toBe(1601627);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(6857);
});
