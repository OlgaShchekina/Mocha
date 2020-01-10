const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;
const {findSum} = require('../index.js');

describe('function findSum', () => {
    it('should return true if the number is equal 21', () => {
        expect(findSum(21)).true;
    });
});
module.exports = {findSum};