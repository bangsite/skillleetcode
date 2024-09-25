const {myPow, myPow2} = require('./main');


describe('myPow', () => {
    it('should calculate 2^10 correctly', () => {
        expect(myPow(2.00000, 10)).toBeCloseTo(1024.00000,5);
    });

    it('should calculate 2.1^3 correctly', () => {
        expect(myPow(2.10000, 3)).toBeCloseTo(9.26100,5);
    });

    it('should calculate 2^02 correctly', () => {
        expect(myPow(2.00000, -2)).toBeCloseTo(0.25000,5);
    });

    it('should calculate 0.44894^-5 correctly', () => {
        expect(myPow(0.44894, -5)).toBeCloseTo(54.83508,5);
    });

});


describe('myPow2', () => {
    it('should calculate 2^10 correctly', () => {
        expect(myPow2(2.00000, 10)).toBeCloseTo(1024.00000,5);
    });

    it('should calculate 2.1^3 correctly', () => {
        expect(myPow2(2.10000, 3)).toBeCloseTo(9.26100,5);
    });

    it('should calculate 2^02 correctly', () => {
        expect(myPow2(2.00000, -2)).toBeCloseTo(0.25000,5);
    });

    it('should calculate 0.44894^-5 correctly', () => {
        expect(myPow2(0.44894, -5)).toBeCloseTo(54.83508,5);
    });

});
