const { whoIAm, isPositiveNumber } = require('./index');

describe('index file', () => {
    it('whoIAm func', () => {
        expect(whoIAm('Nicolas')).toBe('Your name is Nicolas');
        expect(whoIAm()).toBe('Are you exists?');
    });

    it('isPositiveNumber', () => {
        expect(isPositiveNumber(10)).toBeTruthy();
        expect(isPositiveNumber(-10)).toBeFalsy();
        expect(isPositiveNumber(0)).toBeFalsy();
    })
})