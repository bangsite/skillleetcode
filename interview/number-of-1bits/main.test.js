const {hammingWeight} = require('./main');

// Setup data;
const data = [];

describe('hammingWeight', () => {
    test('should be return total of 3 set bits.', () => {
        const n = 11;

        expect(hammingWeight(n)).toEqual(3);
    });

    test('should be return total of 1 set bits.', () => {
        const n = 128;

        expect(hammingWeight(n)).toEqual(1);
    });

    test('should be return total of 30 set bits.', () => {
        const n = 2147483645;

        expect(hammingWeight(n)).toEqual(30);
    });
})

