const { solution, defaultInput } = require('./');

test('Provided test cases', () => {
    expect(solution('5H 5C 6S 7S KD 2C 3S 8S 8D TD')).toBe(0);
    expect(solution('5D 8C 9S JS AC 2C 5C 7D 8S QH')).toBe(1);
    expect(solution('2D 9C AS AH AC 3D 6D 7D TD QD')).toBe(0);
    expect(solution('4D 6S 9H QH QC 3D 6D 7H QD QS')).toBe(1);
    expect(solution('2H 2D 4C 4D 4S 3C 3D 3S 9S 9D')).toBe(1);
});

test('Custom test cases', () => {

});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe(376);
});
