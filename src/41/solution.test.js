const { solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('4')).toBe(4231);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(7652413);
});
