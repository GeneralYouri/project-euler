const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split('\n,');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution(defaultArgs[0] + '\n,-1')).toBe(0);
    expect(solution(defaultArgs[0] + '\n,0')).toBe(0);
    expect(solution(defaultArgs[0] + '\n,1')).toBe(99);
    expect(solution(defaultArgs[0] + '\n,2')).toBe(9306);
    expect(solution(defaultArgs[0] + '\n,3')).toBe(811502);
    expect(solution(defaultArgs[0] + '\n,5')).toBe(3318231678);
    expect(solution(defaultArgs[0] + '\n,6')).toBe(188210512710);
    expect(solution(defaultArgs[0] + '\n,7')).toBe(13927577940540);
    expect(solution(defaultArgs[0] + '\n,8')).toBe(863509832313480);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(70600674);
});
