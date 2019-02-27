const { createFigurateGenerator } = require('aoc-toolkit');

const sum = numbers => numbers.reduce((acc, n) => acc + n, 0);

module.exports = (input) => {
    const maxOrder = Number(input);
    if (maxOrder < 3) {
        return undefined;
    }

    const figurateListByFirstHalf = {};

    for (let order = 4; order <= maxOrder; order += 1) {
        const figurates = createFigurateGenerator(order)();
        let figurate = figurates.next().value;

        figurateListByFirstHalf[order] = {};
        for (let firstHalf = 10; firstHalf < 100; firstHalf += 1) {
            figurateListByFirstHalf[order][firstHalf] = [];
        }

        while (figurate < 10000) {
            if (figurate >= 1000) {
                const firstHalf = Math.floor(figurate / 100);
                figurateListByFirstHalf[order][firstHalf].push(figurate);
            }
            figurate = figurates.next().value;
        }
    }


    const addToCycle = (set, orders) => {
        if (set.length === maxOrder - 2) {
            const lastHalf = set[set.length - 1] % 100;
            const firstHalf = Math.floor(set[0] / 100);
            if (firstHalf === lastHalf) {
                return set;
            }
            return false;
        }

        const lastHalf = set[set.length - 1] % 100;
        if (lastHalf >= 10 && lastHalf < 100) {
            for (let order = 3; order <= maxOrder; order += 1) {
                if (orders.includes(order)) {
                    continue;
                }

                for (const candidate of figurateListByFirstHalf[order][lastHalf]) {
                    const cycle = addToCycle([...set, candidate], [...orders, order]);
                    if (cycle) {
                        return cycle;
                    }
                }
            }
        }
        return false;
    };

    const triangulars = createFigurateGenerator(3)();
    let triangular = triangulars.next().value;
    while (triangular < 10000) {
        if (triangular >= 1000) {
            const cycle = addToCycle([triangular], [3]);
            if (cycle) {
                return sum(cycle);
            }
        }
        triangular = triangulars.next().value;
    }
    return undefined;
};
