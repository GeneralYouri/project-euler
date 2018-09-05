const { alternative1: solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(10)).toBe(27);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBe(1);
    expect(solution(1)).toBe(1);
    expect(solution(1000)).toBe(10539);
    expect(solution(5000)).toBe(67698);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(648);
});
