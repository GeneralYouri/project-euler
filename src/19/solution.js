const isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const monthLengths = [
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], // normal year
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], // leap year
];

module.exports = (input) => {
    const lines = input.split(/\n/g);
    const [fromYear, toYear] = lines[0].split(' - ').map(Number);
    const [baseYear, baseDay] = lines[1].split(' starts on ');

    // indexed by first day of the year, 0 is sunday
    const sundaysPerYear = [
        [0, 0, 0, 0, 0, 0, 0], // normal year
        [0, 0, 0, 0, 0, 0, 0], // leap year
    ];

    for (let firstDay = 0; firstDay < 7; firstDay += 1) {
        let d1 = firstDay;
        let d2 = firstDay;
        for (let month = 0; month < 12; month += 1) {
            if (d1 === 0) {
                sundaysPerYear[0][firstDay] += 1;
            }
            if (d2 === 0) {
                sundaysPerYear[1][firstDay] += 1;
            }
            d1 = (d1 + monthLengths[0][month]) % 7;
            d2 = (d2 + monthLengths[1][month]) % 7;
        }
    }


    let sundays = 0;
    let firstDay = days.indexOf(baseDay);
    for (let year = Number(baseYear); year <= toYear; year += 1) {
        const yearType = Number(isLeapYear(year));
        if (year >= fromYear && year <= toYear) {
            sundays += sundaysPerYear[yearType][firstDay];
        }
        firstDay = (firstDay + 365 + yearType) % 7;
    }

    return sundays;
};
