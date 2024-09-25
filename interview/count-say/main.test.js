const {countAndSay} = require('./main');


describe('countAndSay', () => {
    it('should return "1" when n is 1', () => {
        const n = 1;
        const expected = "1";
        expect(countAndSay(n)).toEqual(expected);
    });
    it('should return "11" when n is 2', () => {
        const n = 2;
        const expected = "11";
        expect(countAndSay(n)).toEqual(expected);
    });

    it('should return "21" when n is 3', () => {
        const n = 3;
        const expected = "21";
        expect(countAndSay(n)).toEqual(expected);
    });

    it('should return "1211" when n is 4', () => {
        const n = 4;
        const expected = "1211";
        expect(countAndSay(n)).toEqual(expected);
    });

    it('should return "111221" when n is 5', () => {
        const n = 5;
        const expected = "111221";
        expect(countAndSay(n)).toEqual(expected);
    });

});


