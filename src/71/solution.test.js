const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('8')).toBe(2);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('2')).toBeUndefined();
    expect(solution('3')).toBe(1);
    expect(solution('4')).toBe(1);
    expect(solution('5')).toBe(2);
    expect(solution(Number.MAX_SAFE_INTEGER)).toBe(3860228252031851);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(428570);
});
