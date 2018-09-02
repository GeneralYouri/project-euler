const { solution, defaultInput } = require('./');

test('Provided test cases', () => {

});

test('Custom test cases', () => {
    expect(solution(defaultInput, -1)).toBe(0);
    expect(solution(defaultInput, 0)).toBe(0);
    expect(solution(defaultInput, 1)).toBe(99);
    expect(solution(defaultInput, 2)).toBe(9306);
    expect(solution(defaultInput, 3)).toBe(811502);
    expect(solution(defaultInput, 5)).toBe(3318231678);
    expect(solution(defaultInput, 6)).toBe(188210512710);
    expect(solution(defaultInput, 7)).toBe(13927577940540);
    expect(solution(defaultInput, 8)).toBe(863509832313480);
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(70600674);
});
