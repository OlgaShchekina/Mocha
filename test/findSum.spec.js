const assert = require('assert');
let chai = require("chai"),
    expect = chai.expect;

const {findSum} = require('../index.js');

describe('function findSum', () => {
    it('should return the sum of all multiples of 3 and 5.', () => {
        expect(findSum(7)).eq(14);
    });
    it('should return 0 with an empty enput', () => {
        expect(findSum()).eq(0);
    });
    it('should return 0 with null', () => {
        expect(findSum(null)).eq(0);
    });
});
