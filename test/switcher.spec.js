const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;

const {switcher} = require('../index.js');


describe('function switcher', () => {
    it('should switch an array of numbers to string in the alphabetical order', () => {
        expect(switcher([1,3,4,5,7,1,22])).equal("zxwvtze");
    });
    it('should work correctly if the array contains the same numbers', () => {
        expect(switcher([1,1,1,1,1,1])).equal("zzzzzz");
    });
    it('should work correctly if the numbers are grater then 28', () => {
        expect(switcher([1,27,29,135,45,34,767])).equal("z!");
    });
    it('should return /" "/ with an 0', () => {
        expect(switcher([0])).equal(" ");
    });
    it('should return an empty string with an empty array or 0', () => {
        expect(switcher([])).equal("");
    });
    it('should return /not an array/ with an empty input', () => {
        expect(switcher()).equal("not an array");
    });
    it('should work correctly if soome of the numbers undefined', () => {
        expect(switcher([2,undefined,7,undefined,1])).equal("ytz");
    });

});

