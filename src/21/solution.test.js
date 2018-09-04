const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(300)).toBe(504);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBeUndefined();
    expect(solution(1)).toBe(0);
    expect(solution(250)).toBe(220);
    expect(solution(1000)).toBe(504);
    expect(solution(100000)).toBe(852810);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(31626);
});
