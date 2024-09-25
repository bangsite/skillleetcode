const {
    singleNumber,
    singleNumber2,
    singleNumber3,
    singleNumber4
} = require('./main');

describe('singleNumber functions', () => {
    const testCases = [
        {input: [2, 2, 1], expected: 1},
        {input: [4, 1, 2, 1, 2], expected: 4},
        {input: [1], expected: 1},
        {input: [], expected: undefined}, // Edge case: empty array
        {input: [0, 0, 0, 0, 1], expected: 1}, // Edge case: multiple duplicates
    ];

    testCases.forEach(({input,expected})=>{
        test(`singleNumber( ${input} ) should return ${expected}`,()=> {
          expect(singleNumber(input)).toBe(expected)
        });
        test(`singleNumber2( ${input} ) should return ${expected}`,()=> {
            expect(singleNumber2(input)).toBe(expected)
        });
        test(`singleNumber3( ${input} ) should return ${expected}`,()=> {
            expect(singleNumber3(input)).toBe(expected)
        });
        test(`singleNumber4( ${input} ) should return ${expected}`,()=> {
            expect(singleNumber4(input)).toBe(expected)
        });
    })

})
