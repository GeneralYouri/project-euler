const { solution, defaultInput } = require('./');

xtest('Provided test cases', () => {

});

xtest('Custom test cases', () => {
    expect(solution()).toBeUndefined();
    expect(solution()).toBe();
    expect(solution()).toBe();
    expect(solution()).toBe();
    expect(solution()).toBe();
});

xtest('Problem input', () => {
    expect(solution(defaultInput)).toBe();
});
