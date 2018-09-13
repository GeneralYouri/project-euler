const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(11)).toBe(7);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBeUndefined();
    expect(solution(1)).toBeUndefined();
    expect(solution(2)).toBe(0);
    expect(solution(4)).toBe(3);
    expect(solution(8)).toBe(7);
    expect(solution(10000)).toBe(9967);
    expect(solution(100000)).toBe(99989);
    expect(solution(1000000)).toBe(999983);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(983);
});
