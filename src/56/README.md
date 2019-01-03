# [Problem 56](https://projecteuler.net/problem=56): Powerful digit sum

Due to the constraints on `a` and `b`, there are less than 100^2 numbers to check.
The only problem when trying to brute-force this, is that the products will get very big.
The main solution uses BigInts to solve that problem for us.

---

Ofcourse I've also included a non-BigInt solution.
This solution is almost identical in structure to the main solution.
The primary difference is that we represent the product as an array of its digits.
To be able to iterate its digits we've implemented scalar multiplication on this data type.

---

For both solutions a minor optimization is applied, where we skip very low powers when we know their digit sum can't improve our best find. 
