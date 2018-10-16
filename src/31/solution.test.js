const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBe(1);
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(2);
    expect(solution(3)).toBe(2);
    expect(solution(5)).toBe(4);
    expect(solution(10)).toBe(11);
    expect(solution(100)).toBe(4563);
    expect(solution(1000)).toBe(321335886);
    expect(solution(13511)).toBe(9004881987651020);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(73682);
});
