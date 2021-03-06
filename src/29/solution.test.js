const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split(',');

test('Provided test cases', () => {
    expect(solution('5,5')).toBe(15);
});

test('Custom test cases', () => {
    expect(solution('-1,-1')).toBeUndefined();
    expect(solution('0,0')).toBeUndefined();
    expect(solution('1,1')).toBeUndefined();
    expect(solution('1000,1000')).toBe(977358);
    expect(solution('10000,10')).toBe(89477);
    expect(solution('10,10000')).toBe(74994);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(9183);
});
