const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(17);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('1')).toBe(0);
    expect(solution('2')).toBe(0);
    expect(solution('3')).toBe(2);
    expect(solution('4')).toBe(5);
    expect(solution('5')).toBe(5);
    expect(solution('100')).toBe(1060);
    expect(solution('1000')).toBe(76127);
    expect(solution('10000')).toBe(5736396);
    expect(solution('100000')).toBe(454396537);
    expect(solution('10000000')).toBe(3203324994356);
    expect(solution('100000000')).toBe(279209790387276);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(142913828922);
});
