const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
const {isOddNumber} = require('../index.js');

describe('function isOddNumber', () => {
    it('should return true if number is an odd',  () => {
        expect(isOddNumber(3)).true;
    });

    it('should return false if number is not an odd',  () => {
        expect(isOddNumber(8)).false;
    });

    it('should return false if number is equal 0',  () => {
        expect(isOddNumber(0)).false;
    });

    it('should return false if number is a string',  () => {
        expect(isOddNumber('abc')).false;
    });

    it('should return false if number is null',  () => {
        expect(isOddNumber(null)).false;
    });
    it('should return false with an empty input', () => {
        expect(isOddNumber()).false;
    });

});

module.exports = {isOddNumber};