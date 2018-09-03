const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(5)).toBe(28);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBe(1);
    expect(solution(1)).toBe(3);
    expect(solution(2)).toBe(6);
    expect(solution(3)).toBe(6);
    expect(solution(4)).toBe(28);
    expect(solution(100)).toBe(73920);
    expect(solution(1000)).toBe(842161320);
    expect(solution(1500)).toBe(7589181600);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(76576500);
});
