const {convert,convert2,convert3} = require('./main');

describe('convert', () => {
    it('should return the correct result for numRows = 3', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 3;
        const expected = 'PAHNAPLSIIGYIR';
        const result = convert(s, numRows);
        expect(result).toBe(expected);
    });

    it('should return the correct result for numRows = 4', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 4;
        const expected = 'PINALSIGYAHRPI';
        const result = convert3(s, numRows);
        expect(result).toBe(expected);
    });

    it('should return the same string for numRows = 1', () => {
        const s = 'A';
        const numRows = 1;
        const result = convert3(s, numRows);
        expect(result).toBe(s);
    });

    it('should return the same string for numRows = 1 (case with two characters)', () => {
        const s = 'AB';
        const numRows = 1;
        const result = convert3(s, numRows);
        expect(result).toBe(s);
    });
});

describe('convert2', () => {
    it('should return the correct result for numRows = 3', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 3;
        const expected = 'PAHNAPLSIIGYIR';
        const result = convert2(s, numRows);
        expect(result).toBe(expected);
    });

    it('should return the correct result for numRows = 4', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 4;
        const expected = 'PINALSIGYAHRPI';
        const result = convert3(s, numRows);
        expect(result).toBe(expected);
    });

    it('should return the same string for numRows = 1', () => {
        const s = 'A';
        const numRows = 1;
        const result = convert3(s, numRows);
        expect(result).toBe(s);
    });

    it('should return the same string for numRows = 1 (case with two characters)', () => {
        const s = 'AB';
        const numRows = 1;
        const result = convert3(s, numRows);
        expect(result).toBe(s);
    });
});

describe('convert3', () => {
    it('should return the correct result for numRows = 3', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 3;
        const expected = 'PAHNAPLSIIGYIR';
        const result = convert3(s, numRows);
        expect(result).toBe(expected);
    });

    it('should return the correct result for numRows = 4', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 4;
        const expected = 'PINALSIGYAHRPI';
        const result = convert3(s, numRows);
        expect(result).toBe(expected);
    });

    it('should return the same string for numRows = 1', () => {
        const s = 'A';
        const numRows = 1;
        const result = convert3(s, numRows);
        expect(result).toBe(s);
    });

    it('should return the same string for numRows = 1 (case with two characters)', () => {
        const s = 'AB';
        const numRows = 1;
        const result = convert3(s, numRows);
        expect(result).toBe(s);
    });
});
