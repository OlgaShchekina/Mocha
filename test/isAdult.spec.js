const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;

const {isAdult} = require('../index.js');

describe('function isAdult', () => {
    it('should return true if the number is equal 21', () => {
        expect(isAdult(21)).true;
    });
    it('should return true if the number is greater than 21', () => {
        expect(isAdult(55)).true;
    });
    it('should return  false if the number is less than 21', () => {
        expect(isAdult(20)).false;
    });
    it('should return  false if the number is 0', () => {
        expect(isAdult(0)).false;
    });
    it('should return undefined if the number is negative', () => {
        expect(isAdult(-1)).undefined;
    });
    it('should return undefined if the  number is not a number', () => {
        expect(isAdult('1')).undefined;
    });
    it('should return undefined with an empty input', () => {
        expect(isAdult()).undefined;
    });

});

