# Project Euler
Project Euler Solutions (JS) - https://projecteuler.net/

---

Requires NodeJS v10.4.0 or higher

Run via
```bash
node .
```
By default this will attempt to run every problem main solution, in order.

For information about accepted arguments and flags, such as which solution(s) to run and what input to use, run via
```bash
node . --help
```

Run individual problem solutions by specifying the problem number, such as:
```bash
node src/1
```
This approach also lets you customize the problem input through additional command line arguments.

---

Per problem you'll find the following contents:
- A problem README providing context on the problem as well as details and explanations about the used solution(s).
- An input text file containing the default input to work with, as obtained via the official Project Euler website.
- A main solution file containing the problem solution; if possible generic / abstract / accepting input.
- Zero or more alternative solution files that approach and solve the problem in a different but still interesting way.
- A test file for each (alternative) solution file that tests the code against various meaningful inputs/outputs.
  These contain sample inputs/outputs from the official website, the official input also from the official website, and other interesting input/output combinations.

---

### TODO
- Extract Prime Factors / Divisors functionality from solutions 12, 12.1, 21.1, 23, 
- Extract Factorial functionality from solutions 15, 20, 24, 34, 
- (Finish) Initial solutions for problems 17, 40, 96, 160, 642, 
- Add new solutions / Improve existing solutions for problems 9, 12, 14, 20.1, 23, 28, 33, 47, 51, 61, 70, 92, 206, 
- Improve runtime for problems 60, 70, 92, 206, 
- Write tests for problems 14, 23, 
- Write readme for problems 14, 23, 51, 650
- Add "Related problems" section in problem readme files

---

### Recreational Awards:
- ***DONE* As Easy As Pi:** *11/11* ~~3~~, ~~14~~, ~~15~~, ~~92~~, ~~65~~, ~~35~~, ~~89~~, ~~79~~, ~~32~~, ~~38~~, ~~46~~
- **Unlucky Squares:** *8/13* of ~~1~~, ~~4~~, ~~9~~, ~~16~~, ~~25~~, ~~36~~, ~~49~~, ~~64~~, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625
- **Prime Obsession:** *24/50* of ~~2~~, ~~3~~, ~~5~~, ~~7~~, ~~11~~, ~~13~~, ~~17~~, ~~19~~, ~~23~~, ~~29~~, ~~31~~, ~~37~~, ~~41~~, ~~43~~, ~~47~~, ~~53~~, ~~59~~, ~~61~~, ~~67~~, ~~71~~, ~~73~~, ~~79~~, 83, 89, ~~97~~, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, ~~349~~, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647
- **Trinary Triumph:** *5/6* ~~1~~, ~~3~~, ~~9~~, ~~27~~, 81, ~~243~~
- **Fibonacci Fever:** *10/12* ~~1~~, ~~2~~, ~~3~~, ~~5~~, ~~8~~, ~~13~~, ~~21~~, ~~34~~, ~~55~~, ~~89~~, 144, 233
- **Triangle Trophy:** *11/25* ~~1~~, ~~3~~, ~~6~~, ~~10~~, ~~15~~, ~~21~~, ~~28~~, ~~36~~, ~~45~~, ~~55~~, ~~66~~, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325
- **Lucky Luke:** *21/50* of ~~1~~, ~~3~~, ~~7~~, ~~9~~, ~~13~~, ~~15~~, ~~21~~, ~~25~~, ~~31~~, ~~33~~, ~~37~~, ~~43~~, ~~49~~, ~~51~~, ~~63~~, ~~67~~, ~~69~~, ~~73~~, 75, ~~79~~, 87, 93, ~~99~~, 105, 111, 115, 127, 129, 133, 135, 141, 151, 159, 163, 169, 171, 189, 193, 195, 201, 205, 211, 219, 223, 231, 235, 237, 241, 259, 261, 267, 273, 283, 285, 289, 297, 303, 307, 319, 321, 327, 331, 339, ~~349~~, 357, 361, 367, 385, 391, 393, 399, 409, 415, 421, 427, 429, 433, 451, 463, 475, 477, 483, 487, 489, 495, 511, 517, 519, 529, 535, 537, 541, 553, 559, 577, 579, 583, 591, 601, 613, 615, 619, 621, 631, 639, 643, 645, 651, [655, 673, 679, 685, 693, 699]

- **Suggestions:** 161, 202, 213, 260, 301, 345, ~~349~~, 351, 387, 389, 395, 424, 444, 480, 481, 493, 497, 504, 527, 587, 599, 605, 607

- **Solved without formal solution (yet):** 17, 40, 68
