const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
const {isOddNumber} = require('../index.js');

describe('function isOddNumber', () => {
    it('should return true if number is an odd',  () => {
        //assert.equal(isOddNumber(3), true);
        expect(isOddNumber(3)).true;
    });

    it('should return false if number is not an odd',  () => {
        // assert.equal(isOddNumber(8), false);
        expect(isOddNumber(8)).false;
    });

    it('should return false if number is equal 0',  () => {
        // assert.equal(isOddNumber(0), false);
        expect(isOddNumber(0)).false;
    });

    it('should return false if number is a string',  () => {
        //assert.equal(isOddNumber('abc'), false);
        expect(isOddNumber('abc')).false;
    });

    it('should return false if number is null',  () => {
        //  assert.equal(isOddNumber(null), false);
        expect(isOddNumber(null)).false;
    });
    it('should return false with an empty input', () => {
        //assert.equal(isPalindrome(), 'not a string');
        expect(isOddNumber()).false;
    });

});

module.exports = {isOddNumber};