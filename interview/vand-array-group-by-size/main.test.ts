const {divideIntoGroups} = require('./main');
const {run} = require('./lib');


const runTests= (divideIntoGroups)=>{
    test('should return an empty array for an empty input', () => {
        const arr = [];
        const actual = divideIntoGroups(arr);
        expect(actual).toEqual([]);
    });

    test('should divide 8 characters into groups of 2 or 3', () => {
        const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const actual = divideIntoGroups(arr);
        expect(actual.length).toBeGreaterThanOrEqual(3);
        expect(actual.length).toBeLessThanOrEqual(4);

        actual.forEach(group =>{
            expect(group.length).toBeGreaterThanOrEqual(2);
            expect(group.length).toBeLessThanOrEqual(3);
        })
    });

    test('should divide 11 characters into groups of 2 or 3', () => {
        const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
        const actual = divideIntoGroups(arr);
        expect(actual.length).toBeGreaterThanOrEqual(4);
        expect(actual.length).toBeLessThanOrEqual(6);

        actual.forEach(group =>{
            expect(group.length).toBeGreaterThanOrEqual(2);
            expect(group.length).toBeLessThanOrEqual(3);
        })
    })
}

run({divideIntoGroups},runTests)

