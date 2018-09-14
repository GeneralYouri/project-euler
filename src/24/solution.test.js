const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(4, '012')).toBe('120');
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBeUndefined();
    expect(solution(1)).toBe('0123456789');
    expect(solution(3628800)).toBe('9876543210');
    expect(solution(3628801)).toBeUndefined();
    expect(solution(355687428096001, 'abcdefghijklmnopqr')).toBe('bacdefghijklmnopqr');
    expect(solution(6402373705728000, 'abcdefghijklmnopqr')).toBe('rqponmlkjihgfedcba');
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe('2783915460');
});
