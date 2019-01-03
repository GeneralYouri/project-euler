# [Problem 54](https://projecteuler.net/problem=54): Poker hands

Time to implement the rules of Poker!
This isn't much of an algorithmic problem, but it's fun to get some variation every now and then.

---

The solution first sorts all hands for all games.
Then for every game it attempts to identify the type of hand both players have.
To do so it tries to match the hand to a type, starting with Royal Flush, all the way down to High Card (which always matches).
This ensures we always match the highest possible type first.

When a type matches, the cards are returned, but sorted in order of importance (so cards belonging to the hand type come first).
This sorting allows us, in the case of a tie of hand types, to iterate the hands of both players and compare card values one by one as a tiebreaker.

---

Interestingly, out of the 1000 games in our input, none are ties.
Also, out of the 2000 hands in our input, Full House is the best type of hand (so there's no Four of a Kind, Straight Flush, or Royal Flush).
