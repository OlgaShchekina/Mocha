const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
const {isEvenNumber} = require('../index.js');

describe('function isEvenNumber', () => {
    it('should return true if number is an even',  () => {
        // assert.equal(isEvenNumber(4), true);
        expect(isEvenNumber(4)).true;
    });

    it('should return false if number is an odd',  () => {
        // assert.equal(isEvenNumber(7), false);
        expect(isEvenNumber(7)).false;
    });

    it('should return true if number is 0',  () => {
        // assert.equal(isEvenNumber(0), true);
        expect(isEvenNumber(0)).true;
    });

    it('should return false if number is a string',  () => {
        // assert.equal(isEvenNumber('abc'), false);
        expect(isEvenNumber('abc')).false;
    });

    it('should return false if number is null',  () => {
        //assert.equal(isEvenNumber(null), false);
        expect(isEvenNumber(null)).false;

    });
    it('should return false with an empty input', () => {
        //assert.equal(isPalindrome(), 'not a string');
        expect(isEvenNumber()).false;
    });

});
module.exports = {isEvenNumber};
