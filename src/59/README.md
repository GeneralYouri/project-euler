# [Problem 59](https://projecteuler.net/problem=59): XOR decryption

Since JS doesn't support direct math on characters (such as 'a' + 2 = 'c'), I've written a little function to generate a key from a numeric value.
This lets us simply iterate all possible keys (26^3 = 17576).
I then guessed that the plain text would end in a period; this filters out 25/26 options as it fixes one of three key characters in place.
It also turns out that the plain text length is such that the first and last character both use the same key character, and all remaining texts now start with '('.
I then found the correct text by manually glossing over the options until I found a readable entry, which ended up being the correct decryption.

Once the correct text is found, summing its char codes is trivial.
However as you've read above, I manually found the correct text; the solution can't yet do this algorithmically.

TODO: Try and find the decrypted message algorithmically
