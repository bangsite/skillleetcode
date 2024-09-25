const run = (solutions, runTests) => {
    Object.entries(solutions).forEach(([name, func]) => {
        describe(`${name}`, runTests.bind(null, func));
    })
}

const benchMark = (solution, values) => {
    values.forEach(x => {
        console.time(`${solution.name} execution time for input ${x}`);

        solution(x);

        console.timeEnd(`${solution.name} execution time for input ${x}`);
    })
}


module.exports = {
    run,
    benchMark
}
