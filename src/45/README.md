# [Problem 45](https://projecteuler.net/problem=45): Triangular, pentagonal, and hexagonal

An incredibly naive solution could be to iterate one number sequence, and for each number iterate another number sequence to find a match, vice verse for the third number sequence.
But obviously this is entirely redundant, because these number sequences are by definition increasing.
This means we can keep a sort of running total for each of our number sequences, essentially running all three of the above loops at once, instead of nested.

---

There's a ton of patterns to be found in these figurate lists.
Below is an extended and generalized list of formulas for generating the nth number in these sequences, as hinted at by the problem description.

Sequence \ Index|Formula
:---------------|:-----------------
2 Natural (Line)|`n * (0n + 2) / 2`
3 Triangular    |`n * (1n + 1) / 2`
4 Square        |`n * (2n + 0) / 2`
5 Pentagonal    |`n * (3n - 1) / 2`
6 Hexagonal     |`n * (4n - 2) / 2`

Replacing the two variables with our figurate order gives us a generic formula for the nth number of the given figurate order: `n * ((order - 2) * n + (4 - order)) / 2`.

---

Below is an extended table of the first 10 numbers in several of the figurate sequences.
Note how the second degree deltas are constant; for example Natural number deltas are +1, +1, +1, ... (second degree delta is thus 0).
For pentagonals the second degree delta is 3 (+1, +4, +7, +10, ...); For the nth Figurate sequence the second degree delta is `(n - 2)`.

Sequence \ Index|  1|  2|  3|  4|  5|  6|  7|  8|  9| 10|
:---------------|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
2 Natural (Line)|  1|  2|  3|  4|  5|  6|  7|  8|  9| 10|
3 Triangular    |  1|  3|  6| 10| 15| 21| 28| 36| 45| 55|
4 Square        |  1|  4|  9| 16| 25| 36| 49| 64| 81|100|
5 Pentagonal    |  1|  5| 12| 22| 35| 51| 70| 92|117|145|
6 Hexagonal     |  1|  6| 15| 28| 45| 66| 91|120|153|190|

Note how every odd triangular is also hexagonal; infact, and more importantly, every hexagonal is also triangular.
We'd already like to iterate hexagonals, because they grow the fastest out of the three sequences we need to consider.
But with this knowledge, we can now ignore checking triangulars entirely.
Furthermore, this also gives us boundaries for pentagonals: they grow slower than hexagonals but faster than triangulars.
Since hexagonals grow twice as fast as triangulars, this means that for every next hexagonal we iterate, we need to iterate either 1 or 2 pentagonals to keep up.

---

To find a match we iterate hexagonals while at the same time iterating pentagonals as long as they're lower than our hexagonal.
To return the problem answer we need the 3rd number that is a member to all three relevant sequences (2nd is given 40755, but 1st is 1!).
This is done by accepting a minimum index in the hexagonal sequence at which to start the search (143 for the problem input).
The sequence of numbers that appear in all three sequences seems to grow very fast, as our answer is almost the square of the previous number in the sequence.
