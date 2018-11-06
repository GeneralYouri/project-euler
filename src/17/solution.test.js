const { solution, defaultInput } = require('./');

xtest('Provided test cases', () => {
    expect(solution()).toBe();
});

xtest('Custom test cases', () => {
    expect(solution()).toBeUndefined();
    expect(solution()).toBe();
});

xtest('Problem input', () => {
    expect(solution(defaultInput)).toBe();
});
