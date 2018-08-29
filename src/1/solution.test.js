const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(23);
});

test('Custom test cases', () => {
    expect(solution('4')).toBe(3);
    expect(solution('6')).toBe(8);
    expect(solution('16')).toBe(60);
    expect(solution('1000')).toBe(233168);
    expect(solution('10000')).toBe(23331668);
    expect(solution('100000')).toBe(2333316668);
    expect(solution('1000000')).toBe(233333166668);
    expect(solution('10000000')).toBe(23333331666668);
    expect(solution('100000000')).toBe(2333333316666668);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(233168);
});
