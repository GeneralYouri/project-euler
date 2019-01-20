const { solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution('-1')).toBeUndefined();
    expect(solution('0')).toBeUndefined();
    expect(solution('20617')).toBeUndefined();
    expect(solution('20618')).toBe(20617);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(8319823);
});
