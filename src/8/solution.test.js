const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(defaultInput, 4)).toBe(5832);
});

test('Custom test cases', () => {
    expect(solution(defaultInput, -1)).toBe(0);
    expect(solution(defaultInput, 0)).toBe(0);
    expect(solution(defaultInput, 1)).toBe(9);
    expect(solution(defaultInput, 2)).toBe(81);
    expect(solution(defaultInput, 3)).toBe(648);
    expect(solution(defaultInput, 23)).toBe(7705271992320000);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(23514624000);
});
