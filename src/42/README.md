# [Problem 42](https://projecteuler.net/problem=42): Coded triangle numbers

This problem is very much straightforward.

To determine whether a word is a triangle word, we first calculate the word value.
This is a simple iteration over the word's characters, taking each character's charCode minus 64.
Then we check whether this word value is a triangular number, in which case we up our triangle words count.

Character values are added, not multiplied, and words can only be so big, so word values will stay fairly low.
Since we're dealing with english words, as a practical upper limit I looked up the longest english word [on wikipedia](https://en.wikipedia.org/wiki/Longest_word_in_English).
The longest word in a major dictionary has a length of 45 which should be easily enough.
We multiply this by 26 as the worst-case for individual character values, giving us an upper limit of 1170.
This all is done because it lets us pregenerate the 47 triangular numbers below this limit as a small optimization.
