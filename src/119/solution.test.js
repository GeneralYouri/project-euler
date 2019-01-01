const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('2')).toBe(512);
    expect(solution('10')).toBe(614656);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(248155780267521);
});
