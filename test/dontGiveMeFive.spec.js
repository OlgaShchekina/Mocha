
const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;

const {dontGiveMeFive} = require('../index.js');

describe('function dontGiveMeFive', () => {
    it('should return the count of numbers without 5 in it',  () => {
        expect(dontGiveMeFive(1,16)).eq(14);
    });

    it('should return 0 with an empty input',  () => {
        expect(dontGiveMeFive()).eq(0);
    });
    it('should return 0 with an null input',  () => {
        expect(dontGiveMeFive(null)).eq(0);
    });
});





