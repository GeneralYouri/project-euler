const { solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('291')).toBeUndefined();
    expect(solution('292')).toBe(291);
    expect(solution('1e13')).toBe(9997908420679);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(8319823);
});
