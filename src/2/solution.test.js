const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('100')).toBe(44);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBe(0);
    expect(solution('0')).toBe(0);
    expect(solution('1')).toBe(0);
    expect(solution('2')).toBe(2);
    expect(solution('7')).toBe(2);
    expect(solution('8')).toBe(10);
    expect(solution('34')).toBe(44);
    expect(solution('144')).toBe(188);
    expect(solution('610')).toBe(798);
    expect(solution('1e9')).toBe(350704366);
    expect(solution('1e12')).toBe(478361013020);
    expect(solution('1e15')).toBe(652484772464328);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(4613732);
});
