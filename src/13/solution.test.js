const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split('\n,');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution(defaultArgs[0] + '\n,-1')).toBeUndefined();
    expect(solution(defaultArgs[0] + '\n,0')).toBe('');
    expect(solution(defaultArgs[0] + '\n,1')).toBe('5');
    expect(solution(defaultArgs[0] + '\n,2')).toBe('55');
    expect(solution(defaultArgs[0] + '\n,' + Number.POSITIVE_INFINITY.toString())).toBe('5537376230390876637302048746832985971773659831892672');
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe('5537376230');
});
