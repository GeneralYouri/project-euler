const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('6')).toBe(13);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(2);
    expect(solution('2')).toBe(3);
    expect(solution('3')).toBe(5);
    expect(solution('5')).toBe(11);
    expect(solution('101')).toBe(547);
    expect(solution('1001')).toBe(7927);
    expect(solution('100001')).toBe(1299721);
    expect(solution('1000001')).toBe(15485867);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(104743);
});
