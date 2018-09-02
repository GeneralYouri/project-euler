const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(12)).toBe(60);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBeUndefined();
    expect(solution(1)).toBeUndefined();
    expect(solution(11)).toBeUndefined();
    expect(solution(12)).toBe(60);
    expect(solution(10000)).toBe(31875000000);
    expect(solution(100000)).toBe(31875000000000);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(31875000);
});
