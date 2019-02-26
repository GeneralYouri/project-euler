const isPalindrome = (n) => {
    const str = n.toString();
    const midway = Math.trunc(str.length / 2);
    return str.slice(0, midway).split('').every((char, index) => char === str[str.length - index - 1]);
};

module.exports = (input) => {
    const limit = Number(input);

    let palindromeSum = 0;
    for (let n = 1; n < limit; n += 2) {
        if (isPalindrome(n) && isPalindrome(n.toString(2))) {
            palindromeSum += n;
        }
    }
    return palindromeSum;
};
