const { alternative1: solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution(2)).toBe(6);
});

test('Custom test cases', () => {
    expect(solution(-1)).toBeUndefined();
    expect(solution(0)).toBeUndefined();
    expect(solution(1)).toBe(2);
    expect(solution(3)).toBe(20);
    expect(solution(4)).toBe(70);
    expect(solution(10)).toBe(184756);
    expect(solution(28)).toBe(7648690600760440);

    expect(solution(3, 1000)).toBe(167668501);
    expect(solution(3, 1000)).toStrictEqual(solution(1000, 3));
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(137846528820);
});
