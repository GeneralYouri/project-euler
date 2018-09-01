const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('10')).toBe(2640);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('1')).toBe(0);
    expect(solution('2')).toBe(4);
    expect(solution('3')).toBe(22);
    expect(solution('1000')).toBe(250166416500);
    expect(solution('10000')).toBe(2500166641665000);
    expect(solution('13777')).toBe(9006989468439703);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(25164150);
});
