const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split('\n,');

test('Provided test cases', () => {
    expect(solution(defaultArgs[0] + '\n,4')).toBe(5832);
});

test('Custom test cases', () => {
    expect(solution(defaultArgs[0] + '\n,-1')).toBe(0);
    expect(solution(defaultArgs[0] + '\n,0')).toBe(0);
    expect(solution(defaultArgs[0] + '\n,1')).toBe(9);
    expect(solution(defaultArgs[0] + '\n,2')).toBe(81);
    expect(solution(defaultArgs[0] + '\n,3')).toBe(648);
    expect(solution(defaultArgs[0] + '\n,23')).toBe(7705271992320000);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(23514624000);
});
