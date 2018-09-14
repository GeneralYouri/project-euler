module.exports = (w, h = w) => {
    const width = Math.trunc(Number(w));
    const height = Math.trunc(Number(h));
    if (width < 1 || height < 1) {
        return undefined;
    }

    let routeCounts = Array.from(Array(width + 1)).map((_, i) => i + 1);
    for (let y = 2; y <= height; y += 1) {
        const newRouteCounts = [1];

        for (let x = 1; x <= width; x += 1) {
            const routes = newRouteCounts[newRouteCounts.length - 1] + routeCounts[x];
            newRouteCounts.push(routes);
        }

        routeCounts = newRouteCounts;
    }

    return routeCounts[width];
};
