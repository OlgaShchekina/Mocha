const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
chai.use(require('chai-string'));

const {uniqueInOrder} = require('../index.js');


describe('function uniqueInOrder', () => {
    it('should return an array with unique elements if elements are numbers', () => {
        expect(uniqueInOrder([1,1,3,4,7,7])).to.have.members([1, 3, 4, 7]);
    });
    it('should return an array with unique elements if elements are strings', () => {
        expect(uniqueInOrder(['a','a','c','r','b','c'])).to.have.members(["a", "c", "r", "b", "c"]);
    });

    it('should return an array with unique elements if value is a string', () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).to.have.members(["A", "B", "C", "D", "A", "B"]);
    });
    it('should return "check the value" with an empty input', () => {
        expect(uniqueInOrder()).eq("check the value");
    });
    it('should return "check the value" if the input equal to the number', () => {
        expect(uniqueInOrder(0)).eq("check the value");
    });
    it('should return "check the value" if the input is list of numbers', () => {
        expect(uniqueInOrder(1,2,5,4,4)).eq("check the value");
    });

});

