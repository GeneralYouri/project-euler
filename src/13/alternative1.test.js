const { alternative1: solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution(defaultInput, -1)).toBeUndefined();
    expect(solution(defaultInput, 0)).toBe('');
    expect(solution(defaultInput, 1)).toBe('5');
    expect(solution(defaultInput, 2)).toBe('55');
    expect(solution(defaultInput, Number.POSITIVE_INFINITY)).toBe('5537376230390876637302048746832985971773659831892672');
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe('5537376230');
});
