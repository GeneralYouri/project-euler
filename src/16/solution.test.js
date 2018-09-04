const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(15)).toBe(26);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBe(1);
    expect(solution(1)).toBe(2);
    expect(solution(10)).toBe(7);
    expect(solution(100)).toBe(115);
    expect(solution(10000)).toBe(13561);
    expect(solution(100000)).toBe(135178);
    expect(solution(1000000)).toBe(1351546);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(1366);
});
