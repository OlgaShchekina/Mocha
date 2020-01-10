const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
const {isEvenNumber} = require('../index.js');

describe('function isEvenNumber', () => {
    it('should return true if number is an even',  () => {
        expect(isEvenNumber(4)).true;
    });

    it('should return false if number is an odd',  () => {
        expect(isEvenNumber(7)).false;
    });

    it('should return true if number is 0',  () => {
        expect(isEvenNumber(0)).true;
    });

    it('should return false if number is a string',  () => {
        expect(isEvenNumber('abc')).false;
    });

    it('should return false if number is null',  () => {
        expect(isEvenNumber(null)).false;

    });
    it('should return false with an empty input', () => {
        expect(isEvenNumber()).false;
    });

});
module.exports = {isEvenNumber};
