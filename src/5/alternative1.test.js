const { alternative1: solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(2520);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(1);
    expect(solution('2')).toBe(2);
    expect(solution('3')).toBe(6);
    expect(solution('4')).toBe(12);
    expect(solution('5')).toBe(60);
    expect(solution('6')).toBe(60);
    expect(solution('40')).toBe(5342931457063200);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(232792560);
});
