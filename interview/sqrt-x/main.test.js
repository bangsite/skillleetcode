const {mySqrt,mySqrt2} = require('./main');
const {benchMark} = require("./lib/testUtils");
const values= [1, 8, 10, 5, 100, 1000, 10000, 100000, 1000000];

describe('mySqrt',()=>{
    test('should return correct square root for given number', () => {
        expect(mySqrt(1)).toBe(1);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(10)).toBe(3);
        expect(mySqrt(5)).toBe(2);
    });
});


describe('mySqrt2',()=>{
    test('should return correct square root for given number', () => {
        expect(mySqrt(1)).toBe(1);
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(5)).toBe(2);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(10)).toBe(3);
    });
});


describe('Benchmark tests',()=>{
    it('Benchmark mySqrt ', function () {
        benchMark(mySqrt, values);
    });

    it('Benchmark mySqrt2 ', function () {
        benchMark(mySqrt2, values);
    });
})
