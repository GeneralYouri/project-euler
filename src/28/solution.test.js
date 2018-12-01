const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('5')).toBe(101);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(1);
    expect(solution('3')).toBe(25);
    expect(solution('1000')).toBeUndefined();
    expect(solution('10001')).toBe(666916710001);
    expect(solution('100001')).toBe(666691667100001);
    expect(solution('238173')).toBe(9007156103829005);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(669171001);
});
