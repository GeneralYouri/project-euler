const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('5')).toBe(19291);
});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('2')).toBeUndefined();
    expect(solution('4')).toBe(8181);
    expect(solution('6')).toBe(12524);

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(28684);
});
