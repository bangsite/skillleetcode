const {plusOne2,plusOne} = require('./main');
const {run} = require('./lib');

// test('should be a  [1,2,4]', () => {
//     const arr = [1, 2, 3];
//     const actual = plusOne2(arr);
//     expect(actual).toEqual([1, 2, 4]);
// })

// test('should be a  [4, 3, 2, 2]', () => {
//     const arr = [4, 3, 2, 1];
//     const actual = plusOne2(arr);
//     expect(actual).toEqual([4, 3, 2, 2]);
// })
//
// test('should be a  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
//     const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
//     const actual = plusOne2(arr);
//     expect(actual).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
// })
const runTests= (plusOne)=>{
    test('should be a  []', () => {
        const arr = [];
        const actual = plusOne(arr);
        expect(actual).toEqual([]);
    });
    test('should be a  [1,2,4]', () => {
        const arr = [1, 2, 3];
        const actual = plusOne(arr);
        expect(actual).toEqual([1, 2, 4]);
    });

    test('should be a  [4, 3, 2, 2]', () => {
        const arr = [4, 3, 2, 1];
        const actual = plusOne(arr);
        expect(actual).toEqual([4, 3, 2, 2]);
    })

    test('should be a  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
        const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
        const actual = plusOne(arr);
        expect(actual).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
    })

}

const runTests2= (plusOne2)=>{
    test('should be a  [1,2,4]', () => {
        const arr = [1, 2, 3];
        const actual = plusOne2(arr);
        expect(actual).toEqual([1, 2, 4]);
    });

    test('should be a  [4, 3, 2, 2]', () => {
        const arr = [4, 3, 2, 1];
        const actual = plusOne2(arr);
        expect(actual).toEqual([4, 3, 2, 2]);
    })

    test('should be a  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
        const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
        const actual = plusOne2(arr);
        expect(actual).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
    })
}

run({plusOne},runTests)
run({plusOne2},runTests2)
