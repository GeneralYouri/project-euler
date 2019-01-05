# [Problem 349](https://projecteuler.net/problem=349): Langton's ant

Reading the problem description made me think of Conway's Game of Life, except the rules were simpler here.
My initial thoughts were that I'd find some kind of pattern by just inspecting the first cycles, so I wrote a simulator and visualizer.
I saw patterns in the first cycles, but nothing definitive, so I started upping the cycle counts to 100, 1000, 10000, 100000.

At that point a *very* obvious pattern came about, as the Ant was caught in an infinite loop (it starts shortly before cycle 10000).
Once the pattern was found, with some trial-and-error I found the period, and the delta of black squares per period.
Some simple math then short-circuits the algorithm by instantly applying the period as many times as needed.

---

This particular problem feels intended to be mostly done manually, basically as I've done.
As such, I have no problem with my use of BigInt here, as it's merely a replacement for manually using the PC calculator.
In this solution the period finding has been hardcoded, as I see little point in trying to automate finding a very specific pattern.
