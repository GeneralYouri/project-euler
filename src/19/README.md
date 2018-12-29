# [Problem 19](https://projecteuler.net/problem=19): Counting Sundays

For this problem it's much easier to write a short bit of code to iterate a date range or similar.
However I wanted to write a more generic solution that can properly handle input as given by the problem description.

The accepted input format consists of two lines:

- The first line defines the year range to count over, defined by the first and last year of the range, separated by ' - '.
- The second line gives a single day hint, by listing a year (must be below the year range) followed by the text ' starts on ' followed by the name of the first day of that year.

---

Since we're given a hint about the first day of one single year, we first have to navigate from that year to the first year of the requested range.
Then we can iterate over the year range and count the sundays, one year at a time.

Every year has 12 months, and every month has a static number of days (except ofcourse February due to leap years).
This means that we can identify a year by its first day plus whether or not it's a leap year.
We use this knowledge to pre-generate sunday counts for all fourteen possible year types (7 days of the month as first day of the year, x2 due to leap years).
During the main iteration this lets us perform a simple lookup for the sunday count of a year, instead of having to go month by month for every year.
